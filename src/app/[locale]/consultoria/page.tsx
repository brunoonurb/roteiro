'use client'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { Check, Star, Clock, Users, Shield, Headphones } from 'lucide-react'
import { consultoriaPricing, ConsultoriaData } from '@/lib/stripe'
import { createCheckoutSession } from '@/lib/stripe'

export default function ConsultoriaPage() {
  const { data: session } = useSession()
  const [selectedTipo, setSelectedTipo] = useState<'basica' | 'premium' | 'vip'>('premium')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ConsultoriaData>({
    destino: '',
    datas: '',
    preferencias: '',
    orcamento: undefined,
    duracao: 7,
    tipo: 'premium',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!session) {
      alert('Você precisa estar logado para solicitar uma consultoria')
      return
    }

    setIsLoading(true)
    try {
      const { url } = await createCheckoutSession(formData, session.user.id)
      window.location.href = url
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Erro ao processar pagamento. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTipoChange = (tipo: 'basica' | 'premium' | 'vip') => {
    setSelectedTipo(tipo)
    setFormData(prev => ({ ...prev, tipo }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Consultoria de Viagem{' '}
              <span className="text-yellow-400">Premium</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Deixe nossos especialistas criarem o roteiro perfeito para sua viagem à Europa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Planos personalizados para cada tipo de viajante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(consultoriaPricing).map(([tipo, plano]) => (
              <motion.div
                key={tipo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  selectedTipo === tipo
                    ? 'ring-2 ring-blue-500 scale-105'
                    : 'hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tipo === 'premium' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plano.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plano.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    R$ {plano.price}
                  </div>
                  <p className="text-sm text-gray-500">{plano.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleTipoChange(tipo as any)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedTipo === tipo
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedTipo === tipo ? 'Selecionado' : 'Selecionar'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conte-nos sobre sua viagem
            </h2>
            <p className="text-xl text-gray-600">
              Quanto mais detalhes, melhor será seu roteiro personalizado
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino *
                </label>
                <input
                  type="text"
                  required
                  value={formData.destino}
                  onChange={(e) => setFormData(prev => ({ ...prev, destino: e.target.value }))}
                  placeholder="Ex: Paris, Roma, Barcelona"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Datas da Viagem *
                </label>
                <input
                  type="text"
                  required
                  value={formData.datas}
                  onChange={(e) => setFormData(prev => ({ ...prev, datas: e.target.value }))}
                  placeholder="Ex: 15-25 de junho de 2024"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração (dias) *
              </label>
              <input
                type="number"
                min="1"
                max="30"
                required
                value={formData.duracao}
                onChange={(e) => setFormData(prev => ({ ...prev, duracao: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Orçamento (opcional)
              </label>
              <input
                type="number"
                value={formData.orcamento || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, orcamento: e.target.value ? parseInt(e.target.value) : undefined }))}
                placeholder="Ex: 5000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferências e Interesses *
              </label>
              <textarea
                required
                rows={4}
                value={formData.preferencias}
                onChange={(e) => setFormData(prev => ({ ...prev, preferencias: e.target.value }))}
                placeholder="Conte-nos sobre seus interesses: museus, gastronomia, vida noturna, compras, natureza, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading || !session}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processando...
                  </div>
                ) : (
                  `Solicitar ${consultoriaPricing[selectedTipo].name} - R$ ${consultoriaPricing[selectedTipo].price}`
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossa consultoria?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Especialistas Locais
              </h3>
              <p className="text-gray-600">
                Nossa equipe conhece cada destino como ninguém
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Entrega Rápida
              </h3>
              <p className="text-gray-600">
                Roteiro personalizado em até 3 dias úteis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Suporte Dedicado
              </h3>
              <p className="text-gray-600">
                Acompanhamento durante toda sua viagem
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Garantia Total
              </h3>
              <p className="text-gray-600">
                100% de satisfação ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}