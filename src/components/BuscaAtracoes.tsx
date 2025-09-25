'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlaceResult, getPlacesService } from '@/lib/places'
import { Search, MapPin, Star, Clock, DollarSign, ExternalLink } from 'lucide-react'

interface BuscaAtracoesProps {
  onSelectAtracao: (atracao: PlaceResult) => void
  location?: { lat: number; lng: number }
  className?: string
}

export default function BuscaAtracoes({ onSelectAtracao, location, className = '' }: BuscaAtracoesProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<PlaceResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('')
  const [showResults, setShowResults] = useState(false)

  const types = [
    { value: '', label: 'Todos os tipos' },
    { value: 'tourist_attraction', label: 'Atrações Turísticas' },
    { value: 'museum', label: 'Museus' },
    { value: 'restaurant', label: 'Restaurantes' },
    { value: 'park', label: 'Parques' },
    { value: 'shopping_mall', label: 'Compras' },
    { value: 'night_club', label: 'Vida Noturna' },
  ]

  const searchPlaces = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const placesService = getPlacesService()
      const places = await placesService.searchPlaces(
        query,
        location,
        50000,
        selectedType || undefined
      )
      setResults(places)
      setShowResults(true)
    } catch (error) {
      console.error('Error searching places:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPlaces()
    }
  }

  const formatPriceLevel = (level?: number) => {
    if (!level) return 'Preço não informado'
    return '$'.repeat(level)
  }

  const formatRating = (rating?: number) => {
    if (!rating) return 'Sem avaliação'
    return rating.toFixed(1)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Buscar atrações, museus, restaurantes..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        <button
          onClick={searchPlaces}
          disabled={isLoading || !query.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
          Buscar
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto"
          >
            {results.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Nenhuma atração encontrada
              </div>
            ) : (
              <div className="p-2">
                {results.map((place, index) => (
                  <motion.div
                    key={place.place_id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      onSelectAtracao(place)
                      setShowResults(false)
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        {place.photos && place.photos.length > 0 ? (
                          <img
                            src={getPlacesService().getPhotoUrl(place.photos[0].photo_reference, 80)}
                            alt={place.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {place.name}
                        </h3>
                        <p className="text-sm text-gray-600 truncate">
                          {place.formatted_address}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          {place.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{formatRating(place.rating)}</span>
                              {place.user_ratings_total && (
                                <span>({place.user_ratings_total})</span>
                              )}
                            </div>
                          )}
                          
                          {place.price_level && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{formatPriceLevel(place.price_level)}</span>
                            </div>
                          )}
                          
                          {place.opening_hours && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className={place.opening_hours.open_now ? 'text-green-600' : 'text-red-600'}>
                                {place.opening_hours.open_now ? 'Aberto' : 'Fechado'}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {place.types.slice(0, 3).map((type) => (
                            <span
                              key={type}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {type.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close results */}
      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </div>
  )
}