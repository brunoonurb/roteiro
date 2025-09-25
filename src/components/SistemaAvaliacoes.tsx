'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp, ThumbsDown, Filter, SortAsc, SortDesc } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface Avaliacao {
  id: string
  nota: number
  comentario: string
  createdAt: string
  usuario: {
    name: string
    image?: string
  }
  likes: number
  dislikes: number
  userLiked?: boolean
  userDisliked?: boolean
}

interface SistemaAvaliacoesProps {
  atracaoId: string
  onAvaliar: (nota: number, comentario: string) => Promise<void>
  className?: string
}

export default function SistemaAvaliacoes({ 
  atracaoId, 
  onAvaliar, 
  className = '' 
}: SistemaAvaliacoesProps) {
  const { data: session } = useSession()
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [filters, setFilters] = useState({
    rating: 0,
    sortBy: 'recent' as 'recent' | 'rating' | 'helpful',
    sortOrder: 'desc' as 'asc' | 'desc'
  })
  const [formData, setFormData] = useState({
    nota: 0,
    comentario: ''
  })

  useEffect(() => {
    fetchAvaliacoes()
  }, [atracaoId, filters])

  const fetchAvaliacoes = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        atracaoId,
        ...(filters.rating > 0 && { rating: filters.rating.toString() }),
        sortBy: filters.sortBy,
        sortOrder: filters.sortOrder
      })

      const response = await fetch(`/api/avaliacoes?${params}`)
      if (response.ok) {
        const data = await response.json()
        setAvaliacoes(data)
      }
    } catch (error) {
      console.error('Error fetching avaliacoes:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session || formData.nota === 0) return

    setIsSubmitting(true)
    try {
      await onAvaliar(formData.nota, formData.comentario)
      setFormData({ nota: 0, comentario: '' })
      setShowForm(false)
      fetchAvaliacoes()
    } catch (error) {
      console.error('Error submitting avaliacao:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = async (avaliacaoId: string) => {
    if (!session) return

    try {
      const response = await fetch(`/api/avaliacoes/${avaliacaoId}/like`, {
        method: 'POST'
      })
      if (response.ok) {
        fetchAvaliacoes()
      }
    } catch (error) {
      console.error('Error liking avaliacao:', error)
    }
  }

  const handleDislike = async (avaliacaoId: string) => {
    if (!session) return

    try {
      const response = await fetch(`/api/avaliacoes/${avaliacaoId}/dislike`, {
        method: 'POST'
      })
      if (response.ok) {
        fetchAvaliacoes()
      }
    } catch (error) {
      console.error('Error disliking avaliacao:', error)
    }
  }

  const averageRating = avaliacoes.length > 0 
    ? avaliacoes.reduce((sum, aval) => sum + aval.nota, 0) / avaliacoes.length 
    : 0

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = avaliacoes.filter(aval => aval.nota === rating).length
    const percentage = avaliacoes.length > 0 ? (count / avaliacoes.length) * 100 : 0
    return { rating, count, percentage }
  })

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Rating Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Avaliações ({avaliacoes.length})
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Average Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= averageRating 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Baseado em {avaliacoes.length} avaliações
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm text-gray-600 w-8">{rating}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filters.rating}
              onChange={(e) => setFilters(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value={0}>Todas as avaliações</option>
              <option value={5}>5 estrelas</option>
              <option value={4}>4 estrelas</option>
              <option value={3}>3 estrelas</option>
              <option value={2}>2 estrelas</option>
              <option value={1}>1 estrela</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="recent">Mais recentes</option>
              <option value="rating">Por avaliação</option>
              <option value="helpful">Mais úteis</option>
            </select>
            
            <button
              onClick={() => setFilters(prev => ({ 
                ...prev, 
                sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc' 
              }))}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              {filters.sortOrder === 'asc' ? (
                <SortAsc className="w-4 h-4" />
              ) : (
                <SortDesc className="w-4 h-4" />
              )}
            </button>
          </div>

          {session && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {showForm ? 'Cancelar' : 'Avaliar'}
            </button>
          )}
        </div>
      </div>

      {/* Review Form */}
      <AnimatePresence>
        {showForm && session && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Deixe sua avaliação
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avaliação *
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, nota: star }))}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.nota 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 hover:text-yellow-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentário
                </label>
                <textarea
                  value={formData.comentario}
                  onChange={(e) => setFormData(prev => ({ ...prev, comentario: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Compartilhe sua experiência..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.nota === 0}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-600">Carregando avaliações...</p>
          </div>
        ) : avaliacoes.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">Nenhuma avaliação encontrada</p>
          </div>
        ) : (
          avaliacoes.map((avaliacao) => (
            <motion.div
              key={avaliacao.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">
                    {avaliacao.usuario.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">
                      {avaliacao.usuario.name}
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= avaliacao.nota 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(avaliacao.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  
                  {avaliacao.comentario && (
                    <p className="text-gray-700 mb-3">{avaliacao.comentario}</p>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(avaliacao.id)}
                      className={`flex items-center gap-1 text-sm ${
                        avaliacao.userLiked 
                          ? 'text-blue-600' 
                          : 'text-gray-500 hover:text-blue-600'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      {avaliacao.likes}
                    </button>
                    <button
                      onClick={() => handleDislike(avaliacao.id)}
                      className={`flex items-center gap-1 text-sm ${
                        avaliacao.userDisliked 
                          ? 'text-red-600' 
                          : 'text-gray-500 hover:text-red-600'
                      }`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      {avaliacao.dislikes}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}