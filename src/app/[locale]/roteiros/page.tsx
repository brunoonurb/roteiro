'use client'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoteiroCard from '@/components/RoteiroCard'
import Link from 'next/link'

interface Roteiro {
  id: string
  titulo: string
  descricao?: string
  publico: boolean
  createdAt: string
  usuario: {
    id: string
    name: string
    image?: string
  }
  _count?: {
    ingressos: number
  }
}

export default function RoteirosPage() {
  const { data: session } = useSession()
  const [roteiros, setRoteiros] = useState<Roteiro[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'public' | 'my'>('all')

  useEffect(() => {
    fetchRoteiros()
  }, [filter, session])

  const fetchRoteiros = async () => {
    try {
      setLoading(true)
      let url = '/api/roteiros'
      
      if (filter === 'public') {
        url += '?publico=true'
      } else if (filter === 'my' && session?.user?.id) {
        url += `?usuarioId=${session.user.id}`
      }

      const response = await fetch(url)
      const data = await response.json()
      setRoteiros(data)
    } catch (error) {
      console.error('Erro ao buscar roteiros:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCopiarRoteiro = async (roteiroId: string) => {
    try {
      const response = await fetch(`/api/roteiros/${roteiroId}/copiar`, {
        method: 'POST'
      })

      if (response.ok) {
        alert('Roteiro copiado com sucesso!')
        fetchRoteiros() // Recarregar lista
      } else {
        const error = await response.json()
        alert(error.error || 'Erro ao copiar roteiro')
      }
    } catch (error) {
      console.error('Erro ao copiar roteiro:', error)
      alert('Erro ao copiar roteiro')
    }
  }

  const handleDeleteRoteiro = async (roteiroId: string) => {
    if (!confirm('Tem certeza que deseja deletar este roteiro?')) {
      return
    }

    try {
      const response = await fetch(`/api/roteiros/${roteiroId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        alert('Roteiro deletado com sucesso!')
        fetchRoteiros() // Recarregar lista
      } else {
        const error = await response.json()
        alert(error.error || 'Erro ao deletar roteiro')
      }
    } catch (error) {
      console.error('Erro ao deletar roteiro:', error)
      alert('Erro ao deletar roteiro')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da página */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Descubra Roteiros Incríveis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore roteiros criados pela comunidade ou crie o seu próprio
          </motion.p>
        </div>

        {/* Filtros e ações */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('public')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'public'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Públicos
            </button>
            {session && (
              <button
                onClick={() => setFilter('my')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'my'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Meus Roteiros
              </button>
            )}
          </div>

          {session && (
            <Link
              href="/roteiros/novo"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Criar Roteiro</span>
            </Link>
          )}
        </div>

        {/* Lista de roteiros */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : roteiros.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum roteiro encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === 'my' 
                ? 'Você ainda não criou nenhum roteiro.'
                : 'Ainda não há roteiros disponíveis nesta categoria.'
              }
            </p>
            {session && (
              <Link
                href="/roteiros/novo"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Criar Primeiro Roteiro</span>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roteiros.map((roteiro, index) => (
              <motion.div
                key={roteiro.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RoteiroCard
                  roteiro={roteiro}
                  onCopiar={handleCopiarRoteiro}
                  onDelete={session?.user?.id === roteiro.usuario.id ? handleDeleteRoteiro : undefined}
                  showActions={session?.user?.id === roteiro.usuario.id}
                />
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}