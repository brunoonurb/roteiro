'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isOnline } from '@/lib/offline'

export default function StatusOffline() {
  const [online, setOnline] = useState(true)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Verificar status inicial
    setOnline(isOnline())

    // Escutar mudanças no status de conexão
    const handleOnline = () => {
      setOnline(true)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }

    const handleOffline = () => {
      setOnline(false)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <>
      {/* Indicador no header */}
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${online ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className={`text-sm ${online ? 'text-green-600' : 'text-red-600'}`}>
          {online ? 'Online' : 'Offline'}
        </span>
      </div>

      {/* Notificação de status */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 max-w-sm"
          >
            <div className={`p-4 rounded-lg shadow-lg ${
              online 
                ? 'bg-green-100 border border-green-200' 
                : 'bg-red-100 border border-red-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  online ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {online ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className={`font-medium ${
                    online ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {online ? 'Conexão Restaurada' : 'Sem Conexão'}
                  </h4>
                  <p className={`text-sm ${
                    online ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {online 
                      ? 'Seus dados foram sincronizados' 
                      : 'Algumas funcionalidades podem estar limitadas'
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner quando offline */}
      {!online && (
        <div className="fixed bottom-4 left-4 right-4 z-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-100 border border-orange-200 rounded-lg p-4 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-orange-800">
                  Modo Offline Ativo
                </h4>
                <p className="text-sm text-orange-700">
                  Seus roteiros estão sendo salvos localmente. Eles serão sincronizados quando a conexão for restaurada.
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-orange-600 hover:text-orange-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}