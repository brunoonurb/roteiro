'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { retrieveCheckoutSession } from '@/lib/stripe'

export default function ConsultoriaSucessoPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [sessionData, setSessionData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      fetchSessionData()
    }
  }, [sessionId])

  const fetchSessionData = async () => {
    try {
      const response = await fetch(`/api/consultoria/session?session_id=${sessionId}`)
      if (response.ok) {
        const data = await response.json()
        setSessionData(data)
      }
    } catch (error) {
      console.error('Error fetching session data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pagamento Confirmado!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sua consultoria foi solicitada com sucesso. Nossa equipe entrará em contato em breve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Detalhes da sua consultoria
          </h2>
          
          {sessionData?.metadata && (
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Tipo:</span>
                <span className="text-gray-900 capitalize">
                  {sessionData.metadata.tipo === 'basica' && 'Consultoria Básica'}
                  {sessionData.metadata.tipo === 'premium' && 'Consultoria Premium'}
                  {sessionData.metadata.tipo === 'vip' && 'Consultoria VIP'}
                </span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Destino:</span>
                <span className="text-gray-900">{sessionData.metadata.destino}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Datas:</span>
                <span className="text-gray-900">{sessionData.metadata.datas}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Duração:</span>
                <span className="text-gray-900">{sessionData.metadata.duracao} dias</span>
              </div>
              
              {sessionData.metadata.orcamento && (
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Orçamento:</span>
                  <span className="text-gray-900">R$ {sessionData.metadata.orcamento}</span>
                </div>
              )}
              
              <div className="flex justify-between py-3">
                <span className="font-medium text-gray-700">Valor Pago:</span>
                <span className="text-green-600 font-bold">
                  R$ {(sessionData.amount_total / 100).toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Próximos passos
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Confirmação por email</h4>
                <p className="text-gray-600">
                  Você receberá um email de confirmação com todos os detalhes da sua consultoria.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Análise do seu perfil</h4>
                <p className="text-gray-600">
                  Nossa equipe analisará suas preferências e criará um roteiro personalizado.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Entrega do roteiro</h4>
                <p className="text-gray-600">
                  Seu roteiro personalizado será entregue no prazo prometido.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/roteiros"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Meus Roteiros
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Voltar ao Início
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}