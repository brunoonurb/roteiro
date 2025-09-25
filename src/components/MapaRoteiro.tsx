'use client'

import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

interface Atracao {
  nome: string
  endereco?: string
  latitude?: number
  longitude?: number
  categoria: string
  preco?: number
  duracao?: number
  horario?: string
}

interface Dia {
  dia: number
  atracoes: Atracao[]
}

interface MapaRoteiroProps {
  dias: Dia[]
  className?: string
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 48.8566, // Paris como centro padrão
  lng: 2.3522
}

export default function MapaRoteiro({ dias, className = '' }: MapaRoteiroProps) {
  const [selectedAtracao, setSelectedAtracao] = useState<Atracao | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null)

  // Coletar todas as atrações com coordenadas
  const atracoesComCoordenadas = dias
    .flatMap(dia => dia.atracoes)
    .filter(atracao => atracao.latitude && atracao.longitude)

  useEffect(() => {
    if (map && atracoesComCoordenadas.length > 0) {
      const newBounds = new google.maps.LatLngBounds()
      
      atracoesComCoordenadas.forEach(atracao => {
        if (atracao.latitude && atracao.longitude) {
          newBounds.extend({
            lat: atracao.latitude,
            lng: atracao.longitude
          })
        }
      })

      setBounds(newBounds)
      map.fitBounds(newBounds)
      
      // Adicionar padding para melhor visualização
      const padding = { top: 50, right: 50, bottom: 50, left: 50 }
      map.fitBounds(newBounds, padding)
    }
  }, [map, atracoesComCoordenadas])

  const getMarkerIcon = (categoria: string) => {
    const colors: { [key: string]: string } = {
      cultura: '#3B82F6', // azul
      gastronomia: '#EF4444', // vermelho
      parques: '#10B981', // verde
      compras: '#F59E0B', // amarelo
      entretenimento: '#8B5CF6', // roxo
      religioso: '#6B7280' // cinza
    }
    
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: colors[categoria] || '#6B7280',
      fillOpacity: 1,
      strokeColor: '#FFFFFF',
      strokeWeight: 2
    }
  }

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-gray-600">Mapa não disponível</p>
          <p className="text-sm text-gray-500">Configure a chave da API do Google Maps</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Mapa do Roteiro</h3>
        <p className="text-sm text-gray-600">
          {atracoesComCoordenadas.length} atrações com localização
        </p>
      </div>
      
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={['places']}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          onLoad={setMap}
          options={{
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          }}
        >
          {atracoesComCoordenadas.map((atracao, index) => (
            <Marker
              key={index}
              position={{
                lat: atracao.latitude!,
                lng: atracao.longitude!
              }}
              icon={getMarkerIcon(atracao.categoria)}
              onClick={() => setSelectedAtracao(atracao)}
            />
          ))}

          {selectedAtracao && (
            <InfoWindow
              position={{
                lat: selectedAtracao.latitude!,
                lng: selectedAtracao.longitude!
              }}
              onCloseClick={() => setSelectedAtracao(null)}
            >
              <div className="p-2 max-w-xs">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {selectedAtracao.nome}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedAtracao.categoria}
                </p>
                {selectedAtracao.endereco && (
                  <p className="text-xs text-gray-500 mb-2">
                    {selectedAtracao.endereco}
                  </p>
                )}
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  {selectedAtracao.preco && (
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      €{selectedAtracao.preco}
                    </span>
                  )}
                  {selectedAtracao.duracao && (
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedAtracao.duracao}min
                    </span>
                  )}
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Legenda */}
      <div className="p-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Legenda:</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Cultura</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Gastronomia</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Parques</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Compras</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Entretenimento</span>
          </div>
        </div>
      </div>
    </div>
  )
}