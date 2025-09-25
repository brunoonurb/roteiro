// Google Places API integration
export interface PlaceResult {
  place_id: string
  name: string
  formatted_address: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  rating?: number
  user_ratings_total?: number
  price_level?: number
  types: string[]
  photos?: Array<{
    photo_reference: string
    height: number
    width: number
  }>
  opening_hours?: {
    open_now: boolean
    weekday_text: string[]
  }
  website?: string
  international_phone_number?: string
}

export interface PlacesSearchResponse {
  results: PlaceResult[]
  status: string
  next_page_token?: string
}

export class PlacesService {
  private apiKey: string
  private baseUrl = 'https://maps.googleapis.com/maps/api/place'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async searchPlaces(
    query: string,
    location?: { lat: number; lng: number },
    radius: number = 50000,
    type?: string
  ): Promise<PlaceResult[]> {
    try {
      const params = new URLSearchParams({
        query,
        key: this.apiKey,
        fields: 'place_id,name,formatted_address,geometry,rating,user_ratings_total,price_level,types,photos,opening_hours,website,international_phone_number',
      })

      if (location) {
        params.append('location', `${location.lat},${location.lng}`)
        params.append('radius', radius.toString())
      }

      if (type) {
        params.append('type', type)
      }

      const response = await fetch(
        `${this.baseUrl}/textsearch/json?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: PlacesSearchResponse = await response.json()

      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        throw new Error(`Places API error: ${data.status}`)
      }

      return data.results || []
    } catch (error) {
      console.error('Error searching places:', error)
      return []
    }
  }

  async getPlaceDetails(placeId: string): Promise<PlaceResult | null> {
    try {
      const params = new URLSearchParams({
        place_id: placeId,
        key: this.apiKey,
        fields: 'place_id,name,formatted_address,geometry,rating,user_ratings_total,price_level,types,photos,opening_hours,website,international_phone_number,reviews,formatted_phone_number',
      })

      const response = await fetch(
        `${this.baseUrl}/details/json?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.status !== 'OK') {
        throw new Error(`Places API error: ${data.status}`)
      }

      return data.result
    } catch (error) {
      console.error('Error getting place details:', error)
      return null
    }
  }

  async getNearbyPlaces(
    location: { lat: number; lng: number },
    radius: number = 5000,
    type?: string
  ): Promise<PlaceResult[]> {
    try {
      const params = new URLSearchParams({
        location: `${location.lat},${location.lng}`,
        radius: radius.toString(),
        key: this.apiKey,
        fields: 'place_id,name,formatted_address,geometry,rating,user_ratings_total,price_level,types,photos,opening_hours,website,international_phone_number',
      })

      if (type) {
        params.append('type', type)
      }

      const response = await fetch(
        `${this.baseUrl}/nearbysearch/json?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: PlacesSearchResponse = await response.json()

      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        throw new Error(`Places API error: ${data.status}`)
      }

      return data.results || []
    } catch (error) {
      console.error('Error getting nearby places:', error)
      return []
    }
  }

  getPhotoUrl(photoReference: string, maxWidth: number = 400): string {
    return `${this.baseUrl}/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${this.apiKey}`
  }

  categorizePlace(types: string[]): string {
    const typeMapping: { [key: string]: string } = {
      museum: 'cultura',
      art_gallery: 'cultura',
      church: 'cultura',
      cathedral: 'cultura',
      historical_site: 'cultura',
      monument: 'cultura',
      restaurant: 'gastronomia',
      food: 'gastronomia',
      meal_takeaway: 'gastronomia',
      meal_delivery: 'gastronomia',
      park: 'parques',
      zoo: 'parques',
      aquarium: 'parques',
      shopping_mall: 'compras',
      store: 'compras',
      shopping_center: 'compras',
      night_club: 'vida_noturna',
      bar: 'vida_noturna',
      casino: 'vida_noturna',
    }

    for (const type of types) {
      if (typeMapping[type]) {
        return typeMapping[type]
      }
    }

    return 'outros'
  }
}

// Singleton instance
let placesService: PlacesService | null = null

export function getPlacesService(): PlacesService {
  if (!placesService) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      throw new Error('Google Maps API key not found')
    }
    placesService = new PlacesService(apiKey)
  }
  return placesService
}