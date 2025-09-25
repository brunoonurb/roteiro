'use client'

import { useState, useRef, useCallback } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { MagnifyingGlassIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'
import useGoogleMaps, { PlaceResult } from '@/hooks/useGoogleMaps'

interface BuscaLugaresProps {
  onPlaceSelect?: (place: PlaceResult) => void
  onLocationChange?: (location: google.maps.LatLngLiteral) => void
  placeholder?: string
  types?: string[]
  className?: string
}

export default function BuscaLugares({
  onPlaceSelect,
  onLocationChange,
  placeholder = "Buscar lugares, atrações, restaurantes...",
  types = ['establishment', 'geocode'],
  className = ''
}: BuscaLugaresProps) {
  const { isLoaded, searchPlacesByText } = useGoogleMaps()
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<PlaceResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onLoad = useCallback((autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance)
  }, [])

  const onPlaceChanged = useCallback(() => {
    if (autocomplete) {
      const place = autocomplete.getPlace()
      
      if (place.geometry && place.geometry.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }

        const placeResult: PlaceResult = {
          place_id: place.place_id!,
          name: place.name!,
          formatted_address: place.formatted_address!,
          geometry: { location },
          types: place.types || [],
          rating: place.rating,
          price_level: place.price_level,
          photos: place.photos
        }

        onPlaceSelect?.(placeResult)
        onLocationChange?.(location)
        setShowResults(false)
      }
    }
  }, [autocomplete, onPlaceSelect, onLocationChange])

  const handleManualSearch = useCallback(async (query: string) => {
    if (!query.trim() || query.length < 3) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)
    try {
      const results = await searchPlacesByText(query)
      setSearchResults(results.slice(0, 5)) // Limitar a 5 resultados
      setShowResults(true)
    } catch (error) {
      console.error('Erro na busca:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }, [searchPlacesByText])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    
    // Debounce da busca manual
    const timeoutId = setTimeout(() => {
      handleManualSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [handleManualSearch])

  const handleResultClick = useCallback((place: PlaceResult) => {
    if (inputRef.current) {
      inputRef.current.value = place.name
    }
    
    onPlaceSelect?.(place)
    onLocationChange?.(place.geometry.location)
    setShowResults(false)
  }, [onPlaceSelect, onLocationChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowResults(false)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className={`relative ${className}`}>
        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-500">Carregando busca...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          types={types}
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => searchResults.length > 0 && setShowResults(true)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
            {isSearching && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </Autocomplete>

        {/* Resultados da busca manual */}
        {showResults && searchResults.length > 0 && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowResults(false)}
            />
            
            {/* Dropdown de resultados */}
            <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
              {searchResults.map((place, index) => (
                <button
                  key={place.place_id}
                  onClick={() => handleResultClick(place)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <MapPinIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {place.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {place.formatted_address}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-1">
                        {place.rating && (
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600">
                              {place.rating.toFixed(1)}
                            </span>
                          </div>
                        )}
                        
                        {place.price_level !== undefined && (
                          <div className="flex items-center">
                            {Array.from({ length: 4 }, (_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${
                                  i < place.price_level! 
                                    ? 'text-green-600' 
                                    : 'text-gray-300'
                                }`}
                              >
                                $
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {place.types && place.types.length > 0 && (
                          <span className="text-xs text-gray-400 capitalize">
                            {place.types[0].replace(/_/g, ' ')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}