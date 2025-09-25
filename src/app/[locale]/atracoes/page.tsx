'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, MapPin, Star, Clock, DollarSign, Grid, List } from 'lucide-react'
import BuscaAtracoes from '@/components/BuscaAtracoes'
import { PlaceResult, getPlacesService } from '@/lib/places'

export default function AtracoesPage() {
  const [atracoes, setAtracoes] = useState<PlaceResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFilters] = useState({
    categoria: '',
    rating: 0,
    priceLevel: 0,
    openNow: false,
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState<{ lat: number; lng: number } | undefined>()

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.log('Geolocation error:', error)
          // Default to Paris
          setLocation({ lat: 48.8566, lng: 2.3522 })
        }
      )
    } else {
      // Default to Paris
      setLocation({ lat: 48.8566, lng: 2.3522 })
    }
  }, [])

  const searchAtracoes = async (query: string) => {
    if (!query.trim() || !location) return

    setIsLoading(true)
    try {
      const placesService = getPlacesService()
      const results = await placesService.searchPlaces(query, location, 50000)
      setAtracoes(results)
    } catch (error) {
      console.error('Error searching attractions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchAtracoes(searchQuery)
  }

  const filteredAtracoes = atracoes.filter(atracao => {
    if (filters.categoria && !atracao.types.includes(filters.categoria)) return false
    if (filters.rating > 0 && (!atracao.rating || atracao.rating < filters.rating)) return false
    if (filters.priceLevel > 0 && (!atracao.price_level || atracao.price_level < filters.priceLevel)) return false
    if (filters.openNow && atracao.opening_hours && !atracao.opening_hours.open_now) return false
    return true
  })

  const formatPriceLevel = (level?: number) => {
    if (!level) return 'Preço não informado'
    return '$'.repeat(level)
  }

  const formatRating = (rating?: number) => {
    if (!rating) return 'Sem avaliação'
    return rating.toFixed(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Descubra Atrações
          </h1>
          <p className="text-gray-600">
            Encontre as melhores atrações, restaurantes e pontos turísticos da Europa
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtros */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </h2>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar atrações..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Buscar
                </button>
              </form>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={filters.categoria}
                  onChange={(e) => setFilters(prev => ({ ...prev, categoria: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  <option value="tourist_attraction">Atrações Turísticas</option>
                  <option value="museum">Museus</option>
                  <option value="restaurant">Restaurantes</option>
                  <option value="park">Parques</option>
                  <option value="shopping_mall">Compras</option>
                  <option value="night_club">Vida Noturna</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avaliação mínima
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={0}>Qualquer avaliação</option>
                  <option value={3}>3+ estrelas</option>
                  <option value={4}>4+ estrelas</option>
                  <option value={4.5}>4.5+ estrelas</option>
                </select>
              </div>

              {/* Price Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nível de preço
                </label>
                <select
                  value={filters.priceLevel}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceLevel: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={0}>Qualquer preço</option>
                  <option value={1}>$ (Econômico)</option>
                  <option value={2}>$$ (Moderado)</option>
                  <option value={3}>$$$ (Caro)</option>
                  <option value={4}>$$$$ (Muito caro)</option>
                </select>
              </div>

              {/* Open Now Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.openNow}
                    onChange={(e) => setFilters(prev => ({ ...prev, openNow: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Abertos agora</span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({ categoria: '', rating: 0, priceLevel: 0, openNow: false })}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {filteredAtracoes.length} atrações encontradas
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Buscando atrações...</p>
              </div>
            ) : filteredAtracoes.length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhuma atração encontrada
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou fazer uma nova busca
                </p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                <AnimatePresence>
                  {filteredAtracoes.map((atracao, index) => (
                    <motion.div
                      key={atracao.place_id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                        viewMode === 'list' ? 'flex gap-4 p-4' : 'p-4'
                      }`}
                    >
                      {/* Image */}
                      <div className={viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'w-full h-48 mb-4'}>
                        {atracao.photos && atracao.photos.length > 0 ? (
                          <img
                            src={getPlacesService().getPhotoUrl(atracao.photos[0].photo_reference, viewMode === 'list' ? 200 : 400)}
                            alt={atracao.name}
                            className={`w-full h-full object-cover rounded-lg ${
                              viewMode === 'list' ? 'w-32 h-32' : ''
                            }`}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                            <MapPin className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {atracao.name}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {atracao.formatted_address}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          {atracao.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{formatRating(atracao.rating)}</span>
                              {atracao.user_ratings_total && (
                                <span>({atracao.user_ratings_total})</span>
                              )}
                            </div>
                          )}
                          
                          {atracao.price_level && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{formatPriceLevel(atracao.price_level)}</span>
                            </div>
                          )}
                          
                          {atracao.opening_hours && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className={atracao.opening_hours.open_now ? 'text-green-600' : 'text-red-600'}>
                                {atracao.opening_hours.open_now ? 'Aberto' : 'Fechado'}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {atracao.types.slice(0, 3).map((type) => (
                            <span
                              key={type}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {type.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>

                        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Ver Detalhes
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}