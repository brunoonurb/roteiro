'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, MapPin, Star, Clock, DollarSign, Grid, List, Globe, Users, Tag } from 'lucide-react'
import { useTranslations } from 'next-intl'

// Tipos baseados no schema do banco
interface Atracao {
  id: string
  nome: string
  descricao: string
  categoria: string
  preco: number
  moeda: string
  latitude: number
  longitude: number
  endereco: string
  parceiro: string
  linkAfiliado?: string
  duracaoEstimada: number
  avaliacaoMedia: number
  totalAvaliacoes: number
  ativo: boolean
  criadoEm: string
  _count?: {
    avaliacoes: number
    ingressos: number
  }
}

interface AtracaoResponse {
  atracoes: Atracao[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export default function AtracoesPage() {
  const t = useTranslations()
  
  const [atracoes, setAtracoes] = useState<Atracao[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalAtracoes, setTotalAtracoes] = useState(0)
  
  const [filters, setFilters] = useState({
    categoria: '',
    parceiro: '',
    precoMin: '',
    precoMax: '',
    avaliacaoMin: '',
    destino: ''
  })

  // Opções para filtros
  const categorias = [
    { value: 'CULTURA', label: 'Cultura' },
    { value: 'GASTRONOMIA', label: 'Gastronomia' },
    { value: 'AVENTURA', label: 'Aventura' },
    { value: 'RELAXAMENTO', label: 'Relaxamento' },
    { value: 'VIDA_NOTURNA', label: 'Vida Noturna' },
    { value: 'COMPRAS', label: 'Compras' },
    { value: 'PARQUES', label: 'Parques' },
    { value: 'RELIGIOSO', label: 'Religioso' }
  ]

  const parceiros = [
    { value: 'GETYOURGUIDE', label: 'GetYourGuide' },
    { value: 'CIVITATIS', label: 'Civitatis' },
    { value: 'VIATOR', label: 'Viator' },
    { value: 'TIQETS', label: 'Tiqets' },
    { value: 'BOOKING', label: 'Booking.com' },
    { value: 'AIRBNB', label: 'Airbnb' }
  ]

  // Buscar atrações
  const fetchAtracoes = async (page = 1) => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12'
      })

      // Adicionar filtros aos parâmetros
      if (searchQuery.trim()) params.append('query', searchQuery.trim())
      if (filters.categoria) params.append('categoria', filters.categoria)
      if (filters.parceiro) params.append('parceiro', filters.parceiro)
      if (filters.precoMin) params.append('precoMin', filters.precoMin)
      if (filters.precoMax) params.append('precoMax', filters.precoMax)
      if (filters.destino) params.append('query', filters.destino)

      const response = await fetch(`/api/atracoes?${params.toString()}`)
      const data: AtracaoResponse = await response.json()

      if (response.ok) {
        setAtracoes(data.atracoes || [])
        setCurrentPage(data.pagination.page)
        setTotalPages(data.pagination.pages)
        setTotalAtracoes(data.pagination.total)
      } else {
        console.error('Erro ao buscar atrações:', data)
        setAtracoes([])
      }
    } catch (error) {
      console.error('Erro ao buscar atrações:', error)
      setAtracoes([])
    } finally {
      setIsLoading(false)
    }
  }

  // Carregar atrações iniciais
  useEffect(() => {
    fetchAtracoes(1)
  }, [])

  // Buscar quando filtros mudarem
  useEffect(() => {
    if (currentPage === 1) {
      fetchAtracoes(1)
    } else {
      setCurrentPage(1)
      fetchAtracoes(1)
    }
  }, [searchQuery, filters])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchAtracoes(1)
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      categoria: '',
      parceiro: '',
      precoMin: '',
      precoMax: '',
      avaliacaoMin: '',
      destino: ''
    })
    setSearchQuery('')
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency === 'EUR' ? 'EUR' : currency === 'GBP' ? 'GBP' : 'EUR'
    }).format(price)
  }

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  const getDestinationFromAddress = (address: string) => {
    // Extrair cidade do endereço
    const parts = address.split(',')
    return parts[parts.length - 1]?.trim() || address
  }

  const getParceiroBadgeColor = (parceiro: string) => {
    const colors: Record<string, string> = {
      'GETYOURGUIDE': 'bg-blue-100 text-blue-800',
      'CIVITATIS': 'bg-green-100 text-green-800',
      'VIATOR': 'bg-purple-100 text-purple-800',
      'TIQETS': 'bg-orange-100 text-orange-800',
      'BOOKING': 'bg-indigo-100 text-indigo-800',
      'AIRBNB': 'bg-pink-100 text-pink-800'
    }
    return colors[parceiro] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Descubra Atrações na Europa
          </h1>
          <p className="text-gray-600">
            Encontre as melhores experiências, museus, restaurantes e pontos turísticos com nossos parceiros
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
                <div className="relative mb-3">
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
                  disabled={isLoading}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Buscando...' : 'Buscar'}
                </button>
              </form>

              {/* Destination Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Destino
                </label>
                <input
                  type="text"
                  value={filters.destino}
                  onChange={(e) => handleFilterChange('destino', e.target.value)}
                  placeholder="Ex: Paris, Roma, Barcelona..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Categoria
                </label>
                <select
                  value={filters.categoria}
                  onChange={(e) => handleFilterChange('categoria', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  {categorias.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Partner Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Parceiro
                </label>
                <select
                  value={filters.parceiro}
                  onChange={(e) => handleFilterChange('parceiro', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Todos os parceiros</option>
                  {parceiros.map(parceiro => (
                    <option key={parceiro.value} value={parceiro.value}>{parceiro.label}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Faixa de Preço (€)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={filters.precoMin}
                    onChange={(e) => handleFilterChange('precoMin', e.target.value)}
                    placeholder="Min"
                    min="0"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    value={filters.precoMax}
                    onChange={(e) => handleFilterChange('precoMax', e.target.value)}
                    placeholder="Max"
                    min="0"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Avaliação mínima
                </label>
                <select
                  value={filters.avaliacaoMin}
                  onChange={(e) => handleFilterChange('avaliacaoMin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Qualquer avaliação</option>
                  <option value="3">3+ estrelas</option>
                  <option value="4">4+ estrelas</option>
                  <option value="4.5">4.5+ estrelas</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Mode Toggle and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {totalAtracoes} atrações encontradas
                </span>
                {currentPage > 1 && (
                  <span className="text-sm text-gray-500">
                    Página {currentPage} de {totalPages}
                  </span>
                )}
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
                <p className="text-gray-600">Carregando atrações...</p>
              </div>
            ) : atracoes.length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhuma atração encontrada
                </h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar os filtros ou fazer uma nova busca
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                  <AnimatePresence>
                    {atracoes.map((atracao, index) => (
                      <motion.div
                        key={atracao.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                          viewMode === 'list' ? 'flex gap-4 p-4' : 'overflow-hidden'
                        }`}
                      >
                        {/* Image Placeholder */}
                        <div className={viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'w-full h-48'}>
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <MapPin className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
                              {atracao.nome}
                            </h3>
                            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getParceiroBadgeColor(atracao.parceiro)}`}>
                              {atracao.parceiro}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {atracao.descricao}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="truncate">{getDestinationFromAddress(atracao.endereco)}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{Number(atracao.avaliacaoMedia).toFixed(1)}</span>
                              <span>({atracao.totalAvaliacoes})</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{formatDuration(atracao.duracaoEstimada)}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 mb-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              atracao.categoria === 'CULTURA' ? 'bg-purple-100 text-purple-800' :
                              atracao.categoria === 'GASTRONOMIA' ? 'bg-orange-100 text-orange-800' :
                              atracao.categoria === 'AVENTURA' ? 'bg-green-100 text-green-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {atracao.categoria.replace('_', ' ')}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">
                              {formatPrice(atracao.preco, atracao.moeda)}
                            </span>
                            
                            <button 
                              onClick={() => atracao.linkAfiliado && window.open(atracao.linkAfiliado, '_blank')}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                              Ver Detalhes
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={() => fetchAtracoes(currentPage - 1)}
                      disabled={currentPage === 1 || isLoading}
                      className="px-3 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Anterior
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
                      return (
                        <button
                          key={page}
                          onClick={() => fetchAtracoes(page)}
                          disabled={isLoading}
                          className={`px-3 py-2 border rounded-lg ${
                            page === currentPage
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'text-gray-500 border-gray-300 hover:bg-gray-50'
                          } disabled:opacity-50`}
                        >
                          {page}
                        </button>
                      )
                    })}
                    
                    <button
                      onClick={() => fetchAtracoes(currentPage + 1)}
                      disabled={currentPage === totalPages || isLoading}
                      className="px-3 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Próxima
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}