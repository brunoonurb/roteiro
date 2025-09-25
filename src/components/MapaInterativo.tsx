'use client'

import { useState, useCallback, useMemo } from 'react'
import { GoogleMap, Marker, InfoWindow, Polyline } from '@react-google-maps/api'
import { MapPinIcon, EyeIcon, ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useGoogleMaps from '@/hooks/useGoogleMaps'

interface Atracao {
  id: string
  nome: string
  descricao?: string
  categoria: string
  latitude: number
  longitude: number
  endereco?: string
  preco?: number
  moeda?: string
  avaliacaoMedia?: number
  duracaoEstimada?: number
}

interface MapaInterativoProps {
  atracoes: Atracao[]
  center?: google.maps.LatLngLiteral
  zoom?: number
  height?: string
  showRoute?: boolean
  showClusters?: boolean
  onAtracaoClick?: (atracao: Atracao) => void
  className?: string
}

const containerStyle = {
  width: '100%',
  height: '400px'
}

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'on' }]
    }
  ]
}

// Cores por categoria
const categoryColors: Record<string, string> = {
  CULTURA: '#8B5CF6', // Purple
  GASTRONOMIA: '#EF4444', // Red
  AVENTURA: '#10B981', // Green
  RELAXAMENTO: '#06B6D4', // Cyan
  COMPRAS: '#F59E0B', // Amber
  PARQUES: '#84CC16', // Lime
  default: '#6B7280' // Gray
}

export default function MapaInterativo({
  atracoes,
  center,
  zoom = 12,
  height = '400px',
  showRoute = false,
  showClusters = true,
  onAtracaoClick,
  className = ''
}: MapaInterativoProps) {
  const { isLoaded, onLoad, onUnmount, calculateRoute } = useGoogleMaps()
  const [selectedAtracao, setSelectedAtracao] = useState<Atracao | null>(null)
  const [routePolyline, setRoutePolyline] = useState<google.maps.LatLngLiteral[]>([])

  // Calcular centro automaticamente se não fornecido
  const mapCenter = useMemo(() => {
    if (center) return center
    
    if (atracoes.length === 0) {
      return { lat: -23.5505, lng: -46.6333 } // São Paulo como padrão
    }

    if (atracoes.length === 1) {
      return {
        lat: atracoes[0].latitude,
        lng: atracoes[0].longitude
      }
    }

    // Calcular centro baseado em todas as atrações
    const bounds = new google.maps.LatLngBounds()
    atracoes.forEach(atracao => {
      bounds.extend({ lat: atracao.latitude, lng: atracao.longitude })
    })
    
    const centerPoint = bounds.getCenter()
    return {
      lat: centerPoint.lat(),
      lng: centerPoint.lng()
    }
  }, [atracoes, center])

  // Preparar marcadores
  const markers = useMemo(() => {
    return atracoes.map((atracao, index) => ({
      id: atracao.id,
      position: {
        lat: atracao.latitude,
        lng: atracao.longitude
      },
      title: atracao.nome,
      atracao,
      icon: {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="${categoryColors[atracao.categoria] || categoryColors.default}" stroke="white" stroke-width="2"/>
            <text x="16" y="20" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${index + 1}</text>
          </svg>
        `)}`,
        scaledSize: new google.maps.Size(32, 32),
        anchor: new google.maps.Point(16, 16)
      }
    }))
  }, [atracoes])

  // Calcular rota entre atrações
  const handleShowRoute = useCallback(async () => {
    if (atracoes.length < 2) return

    try {
      const waypoints: google.maps.LatLngLiteral[] = []
      
      for (let i = 0; i < atracoes.length - 1; i++) {
        const origin = { lat: atracoes[i].latitude, lng: atracoes[i].longitude }
        const destination = { lat: atracoes[i + 1].latitude, lng: atracoes[i + 1].longitude }
        
        const route = await calculateRoute(origin, destination)
        
        // Adicionar pontos da rota
        route.steps.forEach(step => {
          waypoints.push({
            lat: step.start_location.lat(),
            lng: step.start_location.lng()
          })
        })
      }
      
      setRoutePolyline(waypoints)
    } catch (error) {
      console.error('Erro ao calcular rota:', error)
    }
  }, [atracoes, calculateRoute])

  const handleMarkerClick = useCallback((atracao: Atracao) => {
    setSelectedAtracao(atracao)
    onAtracaoClick?.(atracao)
  }, [onAtracaoClick])

  const handleInfoWindowClose = useCallback(() => {
    setSelectedAtracao(null)
  }, [])

  if (!isLoaded) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Carregando mapa...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Controles do mapa */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {atracoes.length > 1 && (
          <button
            onClick={handleShowRoute}
            className="bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors"
            title="Mostrar rota"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-700" />
          </button>
        )}
        
        <button
          onClick={() => setRoutePolyline([])}
          className="bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors"
          title="Limpar rota"
        >
          <XMarkIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Legenda */}
      <div className="absolute bottom-4 left-4 z-10 bg-white shadow-lg rounded-lg p-3">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Legenda</h4>
        <div className="space-y-1">
          {Object.entries(categoryColors).map(([categoria, cor]) => {
            if (categoria === 'default') return null
            const count = atracoes.filter(a => a.categoria === categoria).length
            if (count === 0) return null
            
            return (
              <div key={categoria} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cor }}
                />
                <span className="text-gray-700">
                  {categoria.charAt(0) + categoria.slice(1).toLowerCase()} ({count})
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <GoogleMap
        mapContainerStyle={{ ...containerStyle, height }}
        center={mapCenter}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        {/* Marcadores */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            icon={marker.icon}
            onClick={() => handleMarkerClick(marker.atracao)}
          />
        ))}

        {/* Rota */}
        {showRoute && routePolyline.length > 0 && (
          <Polyline
            path={routePolyline}
            options={{
              strokeColor: '#2563EB',
              strokeOpacity: 0.8,
              strokeWeight: 3
            }}
          />
        )}

        {/* InfoWindow */}
        {selectedAtracao && (
          <InfoWindow
            position={{
              lat: selectedAtracao.latitude,
              lng: selectedAtracao.longitude
            }}
            onCloseClick={handleInfoWindowClose}
          >
            <div className="p-2 max-w-xs">
              <h3 className="font-semibold text-gray-900 mb-1">
                {selectedAtracao.nome}
              </h3>
              
              {selectedAtracao.descricao && (
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {selectedAtracao.descricao}
                </p>
              )}
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3" />
                  {selectedAtracao.categoria}
                </span>
                
                {selectedAtracao.duracaoEstimada && (
                  <span>
                    {Math.floor(selectedAtracao.duracaoEstimada / 60)}h{selectedAtracao.duracaoEstimada % 60}min
                  </span>
                )}
              </div>

              {selectedAtracao.endereco && (
                <p className="text-xs text-gray-500 mb-2">
                  {selectedAtracao.endereco}
                </p>
              )}

              <div className="flex items-center justify-between">
                {selectedAtracao.preco && (
                  <span className="text-sm font-semibold text-green-600">
                    {selectedAtracao.moeda || 'R$'} {selectedAtracao.preco}
                  </span>
                )}
                
                {selectedAtracao.avaliacaoMedia && (
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs text-gray-600">
                      {selectedAtracao.avaliacaoMedia.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}