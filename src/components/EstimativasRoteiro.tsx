'use client'

import { useState, useEffect } from 'react'
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  MapIcon, 
  LightBulbIcon,
  TruckIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface AtracaoEstimativa {
  id: string
  categoria: string
  duracaoCustomizada?: number
  custoCustomizado?: number
  latitude?: number
  longitude?: number
}

interface EstimativasRoteiroProps {
  atracoes: AtracaoEstimativa[]
  tipoTransporte?: 'walking' | 'driving' | 'transit' | 'taxi'
  otimizar?: boolean
  pontoInicial?: { latitude: number; longitude: number }
  onEstimativasChange?: (estimativas: any) => void
  className?: string
}

interface Estimativas {
  duracao: {
    total: number
    atracoes: number
    deslocamento: number
    formatado: {
      total: string
      atracoes: string
      deslocamento: string
    }
    detalhes: Array<{
      atracao: string
      duracao: number
      tipo: 'atracao' | 'deslocamento'
    }>
  }
  custo: {
    total: number
    atracoes: number
    deslocamento: number
    formatado: {
      total: string
      atracoes: string
      deslocamento: string
    }
    detalhes: Array<{
      item: string
      custo: number
      tipo: 'atracao' | 'deslocamento'
    }>
  }
  otimizacao: {
    foiOtimizada: boolean
    atracoes: Array<{
      id: string
      categoria: string
      ordem: number
      distanciaAnterior?: number
    }>
  }
  recomendacoes: string[]
}

export default function EstimativasRoteiro({
  atracoes,
  tipoTransporte = 'walking',
  otimizar = false,
  pontoInicial,
  onEstimativasChange,
  className = ''
}: EstimativasRoteiroProps) {
  const [estimativas, setEstimativas] = useState<Estimativas | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  useEffect(() => {
    if (atracoes.length === 0) {
      setEstimativas(null)
      return
    }

    calcularEstimativas()
  }, [atracoes, tipoTransporte, otimizar, pontoInicial])

  const calcularEstimativas = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/estimativas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          atracoes,
          tipoTransporte,
          otimizar,
          pontoInicial
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao calcular estimativas')
      }

      const data = await response.json()
      setEstimativas(data)
      onEstimativasChange?.(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const getTransporteIcon = () => {
    switch (tipoTransporte) {
      case 'driving':
        return <TruckIcon className="w-4 h-4" />
      case 'transit':
        return <MapIcon className="w-4 h-4" />
      case 'taxi':
        return <CurrencyDollarIcon className="w-4 h-4" />
      default:
        return <MapIcon className="w-4 h-4" />
    }
  }

  const getTransporteLabel = () => {
    switch (tipoTransporte) {
      case 'driving':
        return 'Carro'
      case 'transit':
        return 'Transporte Público'
      case 'taxi':
        return 'Táxi'
      default:
        return 'A Pé'
    }
  }

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <p className="text-red-800">{error}</p>
        <button
          onClick={calcularEstimativas}
          className="mt-2 text-red-600 hover:text-red-800 underline"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  if (!estimativas) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 text-center ${className}`}>
        <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600">Adicione atrações para ver as estimativas</p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Estimativas do Roteiro
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {getTransporteIcon()}
            <span>{getTransporteLabel()}</span>
          </div>
        </div>
        
        {estimativas.otimizacao.foiOtimizada && (
          <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
            <MapIcon className="w-4 h-4" />
            <span>Rota otimizada para menor distância</span>
          </div>
        )}
      </div>

      {/* Estimativas Principais */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Duração */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ClockIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Duração Total</h4>
                <p className="text-2xl font-bold text-blue-600">
                  {estimativas.duracao.formatado.total}
                </p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Atrações:</span>
                <span>{estimativas.duracao.formatado.atracoes}</span>
              </div>
              <div className="flex justify-between">
                <span>Deslocamento:</span>
                <span>{estimativas.duracao.formatado.deslocamento}</span>
              </div>
            </div>
          </motion.div>

          {/* Custo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Custo Estimado</h4>
                <p className="text-2xl font-bold text-green-600">
                  {estimativas.custo.formatado.total}
                </p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Atrações:</span>
                <span>{estimativas.custo.formatado.atracoes}</span>
              </div>
              <div className="flex justify-between">
                <span>Deslocamento:</span>
                <span>{estimativas.custo.formatado.deslocamento}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recomendações */}
        {estimativas.recomendacoes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              <div className="p-1 bg-yellow-100 rounded">
                <LightBulbIcon className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Recomendações
                </h4>
                <ul className="space-y-1 text-sm text-yellow-700">
                  {estimativas.recomendacoes.map((recomendacao, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>{recomendacao}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Detalhes */}
        <div className="border-t border-gray-200 pt-6">
          <button
            onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span>{mostrarDetalhes ? 'Ocultar' : 'Mostrar'} detalhes</span>
            <motion.div
              animate={{ rotate: mostrarDetalhes ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </button>

          {mostrarDetalhes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              {/* Detalhes de Duração */}
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Detalhes de Duração</h5>
                <div className="space-y-2">
                  {estimativas.duracao.detalhes.map((detalhe, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{detalhe.atracao}</span>
                      <span className={`font-medium ${
                        detalhe.tipo === 'atracao' ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {detalhe.duracao} min
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detalhes de Custo */}
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Detalhes de Custo</h5>
                <div className="space-y-2">
                  {estimativas.custo.detalhes.map((detalhe, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{detalhe.item}</span>
                      <span className={`font-medium ${
                        detalhe.tipo === 'atracao' ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        R$ {detalhe.custo.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}