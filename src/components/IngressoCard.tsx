'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { downloadAppleWalletPass, addToGoogleWallet, detectWalletSupport } from '@/lib/wallet'

interface Ingresso {
  id: string
  codigo?: string
  data: string
  atracao?: string
  preco?: number
  roteiroId: string
  roteiro: {
    id: string
    titulo: string
  }
  criadoEm: string
}

interface IngressoCardProps {
  ingresso: Ingresso
  onDelete?: (ingressoId: string) => void
  showActions?: boolean
}

export default function IngressoCard({ ingresso, onDelete, showActions = false }: IngressoCardProps) {
  const [isAddingToWallet, setIsAddingToWallet] = useState(false)
  const walletSupport = detectWalletSupport()

  const handleAddToAppleWallet = async () => {
    setIsAddingToWallet(true)
    try {
      await downloadAppleWalletPass(ingresso)
    } finally {
      setIsAddingToWallet(false)
    }
  }

  const handleAddToGoogleWallet = async () => {
    setIsAddingToWallet(true)
    try {
      await addToGoogleWallet(ingresso)
    } finally {
      setIsAddingToWallet(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
    >
      {/* Header do ingresso */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">
              {ingresso.atracao || 'Ingresso'}
            </h3>
            <p className="text-sm opacity-90">
              {ingresso.roteiro.titulo}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Data</div>
            <div className="font-semibold">{formatDate(ingresso.data)}</div>
          </div>
        </div>
      </div>

      {/* Conteúdo do ingresso */}
      <div className="p-6">
        {/* QR Code ou código */}
        {ingresso.codigo && (
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-gray-100 rounded-lg">
              <div className="w-32 h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p className="text-xs text-gray-500">QR Code</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-mono">
              {ingresso.codigo}
            </p>
          </div>
        )}

        {/* Informações do ingresso */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-500">Data</label>
            <p className="font-semibold">{formatDate(ingresso.data)}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Horário</label>
            <p className="font-semibold">{formatTime(ingresso.data)}</p>
          </div>
          {ingresso.preco && (
            <div className="col-span-2">
              <label className="text-sm text-gray-500">Preço</label>
              <p className="font-semibold text-green-600">€{ingresso.preco}</p>
            </div>
          )}
        </div>

        {/* Ações */}
        <div className="space-y-3">
          {/* Adicionar à carteira digital */}
          {walletSupport.both && (
            <div className="grid grid-cols-2 gap-3">
              {walletSupport.appleWallet && (
                <button
                  onClick={handleAddToAppleWallet}
                  disabled={isAddingToWallet}
                  className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Apple Wallet</span>
                </button>
              )}
              
              {walletSupport.googleWallet && (
                <button
                  onClick={handleAddToGoogleWallet}
                  disabled={isAddingToWallet}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  </svg>
                  <span>Google Wallet</span>
                </button>
              )}
            </div>
          )}

          {/* Compartilhar */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `Ingresso - ${ingresso.atracao}`,
                  text: `Meu ingresso para ${ingresso.atracao} em ${ingresso.roteiro.titulo}`,
                  url: window.location.href
                })
              } else {
                // Fallback para copiar link
                navigator.clipboard.writeText(window.location.href)
                alert('Link copiado para a área de transferência!')
              }
            }}
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>Compartilhar</span>
          </button>

          {/* Deletar (se for o dono) */}
          {showActions && onDelete && (
            <button
              onClick={() => {
                if (confirm('Tem certeza que deseja deletar este ingresso?')) {
                  onDelete(ingresso.id)
                }
              }}
              className="w-full flex items-center justify-center space-x-2 text-red-600 border border-red-300 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Deletar Ingresso</span>
            </button>
          )}
        </div>

        {/* Status de carregamento */}
        {isAddingToWallet && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-600">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm">Adicionando à carteira...</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}