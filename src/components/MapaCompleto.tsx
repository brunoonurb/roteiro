'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapIcon, ListBulletIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import MapaInterativo from './MapaInterativo'
import BuscaLugares from './BuscaLugares'
import CalculadoraRotas from './CalculadoraRotas'
import { PlaceResult } from '@/hooks/useGoogleMaps'

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

interface MapaCompletoProps {
  atracoes: Atracao[]
  onAtracaoAdd?: (atracao: Partial<Atracao>) => void
  onAtracaoClick?: (atracao: Atracao) => void
  showSearch?: boolean
  showRoutes?: boolean
  allowAddPlaces?: boolean
  height?: string
  className?: string
}

export default function MapaCompleto({
  atracoes,
  onAtracaoAdd,
  onAtracaoClick,
  showSearch = true,
  showRoutes = true,
  allowAddPlaces = false,
  height = '500px',
  className = ''
}: MapaCompletoProps) {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral | undefined>()

  // Filtrar atrações por categoria
  const filteredAtracoes = selectedCategories.length > 0
    ? atracoes.filter(atracao => selectedCategories.includes(atracao.categoria))
    : atracoes

  const handlePlaceSelect = useCallback((place: PlaceResult) => {
    // Centralizar mapa no local selecionado
    setMapCenter(place.geometry.location)

    // Se permitido, adicionar como nova atração
    if (allowAddPlaces && onAtracaoAdd) {
      const novaAtracao: Partial<Atracao> = {
        nome: place.name,
        endereco: place.formatted_address,
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
        categoria: 'CULTURA', // Categoria padrão
        avaliacaoMedia: place.rating
      }
      
      onAtracaoAdd(novaAtracao)
    }
  }, [allowAddPlaces, onAtracaoAdd])

  const toggleCategory = useCallback((categoria: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    )
  }, [])

  const categorias = Array.from(new Set(atracoes.map(a => a.categoria)))

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      {/* Header com controles */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Mapa Interativo
          </h2>

          {/* Toggle de visualização */}
          <div className="flex bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-colors ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Mapa</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-colors ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ListBulletIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Lista</span>
            </button>
          </div>
        </div>

        {/* Busca de lugares */}
        {showSearch && (
          <div className="mb-4">
            <BuscaLugares
              onPlaceSelect={handlePlaceSelect}
              placeholder="Buscar lugares para adicionar ao roteiro..."
              className="w-full"
            />
          </div>
        )}

        {/* Filtros */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition-colors ${
              showFilters
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            Filtros
            {selectedCategories.length > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {selectedCategories.length}
              </span>
            )}
          </button>

          <div className="text-sm text-gray-500">
            {filteredAtracoes.length} de {atracoes.length} atrações
          </div>
        </div>

        {/* Panel de filtros */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Categorias</h4>
                <div className="flex flex-wrap gap-2">
                  {categorias.map(categoria => (
                    <button
                      key={categoria}
                      onClick={() => toggleCategory(categoria)}
                      className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                        selectedCategories.includes(categoria)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {categoria}
                      <span className="ml-1 text-xs">
                        ({atracoes.filter(a => a.categoria === categoria).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Conteúdo principal */}
      <div className="relative">
        {viewMode === 'map' ? (
          <MapaInterativo
            atracoes={filteredAtracoes}
            center={mapCenter}
            height={height}
            onAtracaoClick={onAtracaoClick}
            showRoute={true}
            showClusters={false}
          />
        ) : (
          <div className="p-4" style={{ height }}>
            <div className="space-y-3 max-h-full overflow-y-auto">
              {filteredAtracoes.length > 0 ? (
                filteredAtracoes.map((atracao, index) => (
                  <motion.div
                    key={atracao.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => onAtracaoClick?.(atracao)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {atracao.nome}
                        </h3>
                        
                        {atracao.descricao && (
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {atracao.descricao}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 rounded">
                            {atracao.categoria}
                          </span>
                          
                          {atracao.duracaoEstimada && (
                            <span>
                              {Math.floor(atracao.duracaoEstimada / 60)}h{atracao.duracaoEstimada % 60}min
                            </span>
                          )}
                          
                          {atracao.avaliacaoMedia && (
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span>{atracao.avaliacaoMedia.toFixed(1)}</span>
                            </div>
                          )}
                          
                          {atracao.preco && (
                            <span className="font-medium text-green-600">
                              {atracao.moeda || 'R$'} {atracao.preco}
                            </span>
                          )}
                        </div>
                        
                        {atracao.endereco && (
                          <p className="text-xs text-gray-500 mt-1 truncate">
                            {atracao.endereco}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MagnifyingGlassIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">
                      {selectedCategories.length > 0
                        ? 'Nenhuma atração encontrada com os filtros selecionados'
                        : 'Nenhuma atração adicionada ao roteiro'
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Calculadora de rotas (se habilitada) */}
      {showRoutes && filteredAtracoes.length > 1 && (
        <div className="border-t border-gray-200">
          <CalculadoraRotas
            atracoes={filteredAtracoes}
            showOptimization={true}
          />
        </div>
      )}
    </div>
  )
}