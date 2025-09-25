'use client'

import { useState, useEffect, useCallback } from 'react'
import { ClockIcon, MapIcon, UserIcon, TruckIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import useGoogleMaps, { RouteResult, DistanceMatrixResult } from '@/hooks/useGoogleMaps'

interface Atracao {
  id: string
  nome: string
  latitude: number
  longitude: number
}

interface CalculadoraRotasProps {
  atracoes: Atracao[]
  travelMode?: google.maps.TravelMode
  onRouteCalculated?: (routes: RouteInfo[]) => void
  showOptimization?: boolean
  className?: string
}

interface RouteInfo {
  from: Atracao
  to: Atracao
  distance: string
  duration: string
  distanceValue: number // em metros
  durationValue: number // em segundos
}

const travelModeIcons: Record<string, any> = {
  'WALKING': UserIcon,
  'DRIVING': TruckIcon,
  'TRANSIT': BuildingOffice2Icon
}

const travelModeLabels: Record<string, string> = {
  'WALKING': 'A pé',
  'DRIVING': 'Carro',
  'TRANSIT': 'Transporte público'
}

export default function CalculadoraRotas({
  atracoes,
  travelMode = google.maps.TravelMode.WALKING,
  onRouteCalculated,
  showOptimization = true,
  className = ''
}: CalculadoraRotasProps) {
  const { isLoaded, calculateRoute, calculateDistanceMatrix } = useGoogleMaps()
  const [routes, setRoutes] = useState<RouteInfo[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [selectedTravelMode, setSelectedTravelMode] = useState(travelMode)
  const [optimizedOrder, setOptimizedOrder] = useState<Atracao[]>([])
  const [totalDistance, setTotalDistance] = useState<string>('')
  const [totalDuration, setTotalDuration] = useState<string>('')

  // Calcular rotas entre atrações consecutivas
  const calculateConsecutiveRoutes = useCallback(async (atracoesOrdenadas: Atracao[]) => {
    if (atracoesOrdenadas.length < 2) return []

    setIsCalculating(true)
    const routePromises: Promise<RouteInfo>[] = []

    for (let i = 0; i < atracoesOrdenadas.length - 1; i++) {
      const from = atracoesOrdenadas[i]
      const to = atracoesOrdenadas[i + 1]

      const routePromise = calculateRoute(
        { lat: from.latitude, lng: from.longitude },
        { lat: to.latitude, lng: to.longitude },
        selectedTravelMode
      ).then((result: RouteResult): RouteInfo => ({
        from,
        to,
        distance: result.distance.text,
        duration: result.duration.text,
        distanceValue: result.distance.value,
        durationValue: result.duration.value
      }))

      routePromises.push(routePromise)
    }

    try {
      const calculatedRoutes = await Promise.all(routePromises)
      setRoutes(calculatedRoutes)
      onRouteCalculated?.(calculatedRoutes)

      // Calcular totais
      const totalDistanceValue = calculatedRoutes.reduce((sum, route) => sum + route.distanceValue, 0)
      const totalDurationValue = calculatedRoutes.reduce((sum, route) => sum + route.durationValue, 0)

      setTotalDistance(formatDistance(totalDistanceValue))
      setTotalDuration(formatDuration(totalDurationValue))

      return calculatedRoutes
    } catch (error) {
      console.error('Erro ao calcular rotas:', error)
      return []
    } finally {
      setIsCalculating(false)
    }
  }, [calculateRoute, selectedTravelMode, onRouteCalculated])

  // Otimizar ordem das atrações usando algoritmo simples de vizinho mais próximo
  const optimizeRoute = useCallback(async () => {
    if (atracoes.length < 3) return atracoes

    setIsCalculating(true)
    try {
      // Calcular matriz de distâncias
      const locations = atracoes.map(a => ({ lat: a.latitude, lng: a.longitude }))
      const matrix = await calculateDistanceMatrix(locations, locations, selectedTravelMode)

      // Algoritmo do vizinho mais próximo
      const visited = new Set<number>()
      const optimized: Atracao[] = []
      let currentIndex = 0 // Começar pela primeira atração

      optimized.push(atracoes[currentIndex])
      visited.add(currentIndex)

      while (optimized.length < atracoes.length) {
        let nearestIndex = -1
        let shortestDistance = Infinity

        // Encontrar a atração mais próxima não visitada
        for (let i = 0; i < atracoes.length; i++) {
          if (!visited.has(i)) {
            const distance = matrix.distances.find(
              d => d.origin === currentIndex && d.destination === i
            )?.distance.value || Infinity

            if (distance < shortestDistance) {
              shortestDistance = distance
              nearestIndex = i
            }
          }
        }

        if (nearestIndex !== -1) {
          optimized.push(atracoes[nearestIndex])
          visited.add(nearestIndex)
          currentIndex = nearestIndex
        }
      }

      setOptimizedOrder(optimized)
      return optimized
    } catch (error) {
      console.error('Erro ao otimizar rota:', error)
      return atracoes
    } finally {
      setIsCalculating(false)
    }
  }, [atracoes, calculateDistanceMatrix, selectedTravelMode])

  // Recalcular rotas quando atrações ou modo de viagem mudarem
  useEffect(() => {
    if (atracoes.length >= 2) {
      calculateConsecutiveRoutes(atracoes)
    }
  }, [atracoes, calculateConsecutiveRoutes])

  // Aplicar otimização quando solicitada
  const handleOptimizeRoute = useCallback(async () => {
    const optimized = await optimizeRoute()
    await calculateConsecutiveRoutes(optimized)
  }, [optimizeRoute, calculateConsecutiveRoutes])

  const formatDistance = (meters: number): string => {
    if (meters < 1000) {
      return `${meters} m`
    }
    return `${(meters / 1000).toFixed(1)} km`
  }

  const formatDuration = (seconds: number): string => {
    const minutes = Math.round(seconds / 60)
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  if (!isLoaded) {
    return (
      <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
        <p className="text-gray-500 text-center">Carregando calculadora de rotas...</p>
      </div>
    )
  }

  if (atracoes.length < 2) {
    return (
      <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
        <div className="text-center">
          <MapIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Adicione pelo menos 2 atrações para calcular rotas</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>
      {/* Header com controles */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Rotas e Distâncias</h3>
          
          {showOptimization && atracoes.length > 2 && (
            <button
              onClick={handleOptimizeRoute}
              disabled={isCalculating}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isCalculating ? 'Otimizando...' : 'Otimizar Rota'}
            </button>
          )}
        </div>

        {/* Seletor de modo de viagem */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Meio de transporte:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.entries(travelModeIcons).map(([mode, Icon]) => (
              <button
                key={mode}
                onClick={() => setSelectedTravelMode(mode as google.maps.TravelMode)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-colors ${
                  selectedTravelMode === mode
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title={travelModeLabels[mode]}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {travelModeLabels[mode]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resumo total */}
      {totalDistance && totalDuration && (
        <div className="p-4 bg-blue-50 border-b border-gray-200">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                Distância total: {totalDistance}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                Tempo total: {totalDuration}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Lista de rotas */}
      <div className="p-4">
        {isCalculating ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
            <span className="text-gray-600">Calculando rotas...</span>
          </div>
        ) : routes.length > 0 ? (
          <div className="space-y-3">
            {routes.map((route, index) => (
              <div
                key={`${route.from.id}-${route.to.id}`}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900 truncate">
                      {route.from.nome}
                    </span>
                    <span className="text-gray-400">→</span>
                    <span className="font-medium text-gray-900 truncate">
                      {route.to.nome}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapIcon className="w-3 h-3" />
                      {route.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {route.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhuma rota calculada</p>
          </div>
        )}
      </div>
    </div>
  )
}