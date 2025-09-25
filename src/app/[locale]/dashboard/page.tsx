'use client'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Star, 
  Users, 
  TrendingUp, 
  Eye, 
  Heart,
  Plus,
  Settings,
  BarChart3,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { Roteiro } from '@prisma/client'

interface DashboardStats {
  totalRoteiros: number
  roteirosPublicos: number
  totalAtracoes: number
  totalVisualizacoes: number
  totalLikes: number
  totalIngressos: number
  totalAvaliacoes: number
  roteirosRecentes: Array<{
    id: string
    titulo: string
    destino: string
    categoria: string
    publico: boolean
    criadoEm: Date
    visualizacoes: number
    dias: Array<{
      id: string
      numero: number
      atracoes: Array<{
        id: string
        nome: string
      }>
    }>
    _count: {
      ingressos: number
      avaliacoes: number
      comentarios: number
    }
  }>
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    checkAuthAndFetchData()
  }, [])

  const checkAuthAndFetchData = async () => {
    try {
      // Check authentication by trying to fetch dashboard data
      const response = await fetch('/api/dashboard/stats')
      
      if (response.status === 401) {
        setIsAuthenticated(false)
        setIsLoading(false)
        return
      }
      
      if (response.ok) {
        const data = await response.json()
        setStats(data)
        setIsAuthenticated(true)
        
        // Try to get user info from session API
        try {
          const sessionResponse = await fetch('/api/auth/session')
          if (sessionResponse.ok) {
            const sessionData = await sessionResponse.json()
            setUserName(sessionData?.user?.name || 'Usuário')
          }
        } catch (error) {
          console.log('Session fetch failed:', error)
          setUserName('Usuário')
        }
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Acesso Negado
          </h1>
          <p className="text-gray-600 mb-6">
            Você precisa estar logado para acessar o dashboard
          </p>
          <Link
            href="/api/auth/signin"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Olá, {userName}!
          </h1>
          <p className="text-gray-600">
            Bem-vindo ao seu dashboard. Aqui você pode gerenciar seus roteiros e acompanhar suas estatísticas.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Roteiros</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalRoteiros || 0}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Roteiros Públicos</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.roteirosPublicos || 0}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Atrações</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalAtracoes || 0}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Visualizações</p>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalVisualizacoes || 0}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
              
              <div className="space-y-4">
                <Link
                  href="/roteiros/novo"
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Plus className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Criar Novo Roteiro</span>
                </Link>
                
                <Link
                  href="/atracoes"
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Explorar Atrações</span>
                </Link>
                
                <Link
                  href="/consultoria"
                  className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-900">Solicitar Consultoria</span>
                </Link>
                
                <Link
                  href="/settings"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Configurações</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Recent Roteiros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Roteiros Recentes</h2>
                <Link
                  href="/roteiros"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver todos
                </Link>
              </div>
              
              {stats?.roteirosRecentes && stats.roteirosRecentes.length > 0 ? (
                <div className="space-y-4">
                  {stats.roteirosRecentes.map((roteiro, index) => (
                    <motion.div
                      key={roteiro.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{roteiro.titulo}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(roteiro.criadoEm).toLocaleDateString('pt-BR')}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {Array.isArray(roteiro.dias) ? roteiro.dias.length : 0} dias
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {(() => {
                              const dias = roteiro.dias as any[]
                              return Array.isArray(dias) ? 
                                dias.reduce((total, dia) => 
                                  total + (Array.isArray(dia.atracoes) ? dia.atracoes.length : 0), 0
                                ) : 0
                            })()} atrações
                          </span>
                          {roteiro.publico && (
                            <span className="flex items-center gap-1 text-green-600">
                              <Globe className="w-4 h-4" />
                              Público
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        href={`/roteiros/${roteiro.id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Ver
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Nenhum roteiro criado ainda
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comece criando seu primeiro roteiro personalizado
                  </p>
                  <Link
                    href="/roteiros/novo"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Criar Primeiro Roteiro
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Analytics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {stats?.totalVisualizacoes || 0}
                </div>
                <div className="text-sm text-gray-600">Visualizações Totais</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {stats?.totalLikes || 0}
                </div>
                <div className="text-sm text-gray-600">Curtidas Recebidas</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {stats?.roteirosPublicos || 0}
                </div>
                <div className="text-sm text-gray-600">Roteiros Compartilhados</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}