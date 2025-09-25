'use client'

import { useState, useEffect, useCallback } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

const libraries: ('places' | 'geometry' | 'drawing')[] = ['places', 'geometry', 'drawing']

export interface MapConfig {
  center: google.maps.LatLngLiteral
  zoom: number
  mapTypeId?: google.maps.MapTypeId
}

export interface PlaceResult {
  place_id: string
  name: string
  formatted_address: string
  geometry: {
    location: google.maps.LatLngLiteral
  }
  types: string[]
  rating?: number
  price_level?: number
  photos?: google.maps.places.PlacePhoto[]
}

export interface RouteResult {
  distance: {
    text: string
    value: number // em metros
  }
  duration: {
    text: string
    value: number // em segundos
  }
  steps: google.maps.DirectionsStep[]
}

export interface DistanceMatrixResult {
  origins: google.maps.LatLngLiteral[]
  destinations: google.maps.LatLngLiteral[]
  distances: {
    origin: number
    destination: number
    distance: { text: string; value: number }
    duration: { text: string; value: number }
    status: string
  }[]
}

export default function useGoogleMaps() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
    language: 'pt-BR',
    region: 'BR'
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null)
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null)
  const [distanceMatrixService, setDistanceMatrixService] = useState<google.maps.DistanceMatrixService | null>(null)
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null)

  useEffect(() => {
    if (isLoaded && window.google) {
      setDirectionsService(new window.google.maps.DirectionsService())
      setDistanceMatrixService(new window.google.maps.DistanceMatrixService())
      setGeocoder(new window.google.maps.Geocoder())
    }
  }, [isLoaded])

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
    if (window.google) {
      setPlacesService(new window.google.maps.places.PlacesService(map))
    }
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
    setPlacesService(null)
  }, [])

  // Buscar lugares próximos
  const searchNearbyPlaces = useCallback(async (
    location: google.maps.LatLngLiteral,
    radius: number = 5000,
    type?: string
  ): Promise<PlaceResult[]> => {
    if (!placesService || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      const request: google.maps.places.PlaceSearchRequest = {
        location,
        radius,
        type: type as any
      }

      placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const places: PlaceResult[] = results.map(place => ({
            place_id: place.place_id!,
            name: place.name!,
            formatted_address: place.vicinity!,
            geometry: {
              location: {
                lat: place.geometry!.location!.lat(),
                lng: place.geometry!.location!.lng()
              }
            },
            types: place.types!,
            rating: place.rating,
            price_level: place.price_level,
            photos: place.photos
          }))
          resolve(places)
        } else {
          reject(new Error(`Erro na busca: ${status}`))
        }
      })
    })
  }, [placesService, isLoaded])

  // Buscar lugares por texto
  const searchPlacesByText = useCallback(async (
    query: string,
    location?: google.maps.LatLngLiteral
  ): Promise<PlaceResult[]> => {
    if (!placesService || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      const request: google.maps.places.TextSearchRequest = {
        query,
        ...(location && { location, radius: 50000 })
      }

      placesService.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const places: PlaceResult[] = results.map(place => ({
            place_id: place.place_id!,
            name: place.name!,
            formatted_address: place.formatted_address!,
            geometry: {
              location: {
                lat: place.geometry!.location!.lat(),
                lng: place.geometry!.location!.lng()
              }
            },
            types: place.types!,
            rating: place.rating,
            price_level: place.price_level,
            photos: place.photos
          }))
          resolve(places)
        } else {
          reject(new Error(`Erro na busca: ${status}`))
        }
      })
    })
  }, [placesService, isLoaded])

  // Calcular rota entre dois pontos
  const calculateRoute = useCallback(async (
    origin: google.maps.LatLngLiteral,
    destination: google.maps.LatLngLiteral,
    travelMode: google.maps.TravelMode = google.maps.TravelMode.WALKING
  ): Promise<RouteResult> => {
    if (!directionsService || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      directionsService.route(
        {
          origin,
          destination,
          travelMode
        },
        (result, status) => {
          if (status === 'OK' && result) {
            const route = result.routes[0]
            const leg = route.legs[0]
            
            resolve({
              distance: leg.distance!,
              duration: leg.duration!,
              steps: leg.steps
            })
          } else {
            reject(new Error(`Erro no cálculo da rota: ${status}`))
          }
        }
      )
    })
  }, [directionsService, isLoaded])

  // Calcular matriz de distâncias
  const calculateDistanceMatrix = useCallback(async (
    origins: google.maps.LatLngLiteral[],
    destinations: google.maps.LatLngLiteral[],
    travelMode: google.maps.TravelMode = google.maps.TravelMode.WALKING
  ): Promise<DistanceMatrixResult> => {
    if (!distanceMatrixService || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      distanceMatrixService.getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode,
          unitSystem: google.maps.UnitSystem.METRIC
        },
        (response, status) => {
          if (status === 'OK' && response) {
            const distances: DistanceMatrixResult['distances'] = []
            
            response.rows.forEach((row, originIndex) => {
              row.elements.forEach((element, destIndex) => {
                distances.push({
                  origin: originIndex,
                  destination: destIndex,
                  distance: element.distance!,
                  duration: element.duration!,
                  status: element.status
                })
              })
            })

            resolve({
              origins,
              destinations,
              distances
            })
          } else {
            reject(new Error(`Erro no cálculo da matriz: ${status}`))
          }
        }
      )
    })
  }, [distanceMatrixService, isLoaded])

  // Geocodificar endereço
  const geocodeAddress = useCallback(async (address: string): Promise<google.maps.LatLngLiteral> => {
    if (!geocoder || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location
          resolve({
            lat: location.lat(),
            lng: location.lng()
          })
        } else {
          reject(new Error(`Erro na geocodificação: ${status}`))
        }
      })
    })
  }, [geocoder, isLoaded])

  // Geocodificação reversa
  const reverseGeocode = useCallback(async (location: google.maps.LatLngLiteral): Promise<string> => {
    if (!geocoder || !isLoaded) {
      throw new Error('Google Maps não está carregado')
    }

    return new Promise((resolve, reject) => {
      geocoder.geocode({ location }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          resolve(results[0].formatted_address)
        } else {
          reject(new Error(`Erro na geocodificação reversa: ${status}`))
        }
      })
    })
  }, [geocoder, isLoaded])

  // Calcular distância entre dois pontos usando Haversine
  const calculateDistance = useCallback((
    point1: google.maps.LatLngLiteral,
    point2: google.maps.LatLngLiteral
  ): number => {
    if (!isLoaded || !window.google) return 0

    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(point1.lat, point1.lng),
      new google.maps.LatLng(point2.lat, point2.lng)
    )
    
    return distance // em metros
  }, [isLoaded])

  return {
    isLoaded,
    loadError,
    map,
    onLoad,
    onUnmount,
    
    // Serviços
    searchNearbyPlaces,
    searchPlacesByText,
    calculateRoute,
    calculateDistanceMatrix,
    geocodeAddress,
    reverseGeocode,
    calculateDistance,
    
    // Estados dos serviços
    placesService,
    directionsService,
    distanceMatrixService,
    geocoder
  }
}