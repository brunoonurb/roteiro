'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Copy, Check, Facebook, Twitter, Instagram, MessageCircle, Mail } from 'lucide-react'

interface CompartilharRoteiroProps {
  roteiroId: string
  titulo: string
  descricao?: string
  className?: string
}

export default function CompartilharRoteiro({ 
  roteiroId, 
  titulo, 
  descricao, 
  className = '' 
}: CompartilharRoteiroProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://roteiros-app.vercel.app'
  const roteiroUrl = `${baseUrl}/roteiros/${roteiroId}`
  const shareText = `Confira este roteiro incrível: ${titulo}`
  const shareDescription = descricao || 'Um roteiro personalizado criado no RoteirosApp'

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${roteiroUrl}`)}`
        window.open(url, '_blank')
      }
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(roteiroUrl)}&quote=${encodeURIComponent(shareText)}`
        window.open(url, '_blank')
      }
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(roteiroUrl)}`
        window.open(url, '_blank')
      }
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-pink-500 hover:bg-pink-600',
      action: () => {
        // Instagram doesn't support direct URL sharing, so we copy to clipboard
        copyToClipboard()
      }
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      action: () => {
        const subject = `Confira este roteiro: ${titulo}`
        const body = `${shareText}\n\n${shareDescription}\n\n${roteiroUrl}`
        const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = url
      }
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(roteiroUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = roteiroUrl
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Fallback copy failed: ', err)
      }
      document.body.removeChild(textArea)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: shareDescription,
          url: roteiroUrl,
        })
      } catch (err) {
        console.error('Error sharing: ', err)
      }
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Compartilhar
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 z-50 min-w-[400px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Compartilhar Roteiro
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {/* Share Options */}
                <div className="grid grid-cols-2 gap-3">
                  {shareOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={option.action}
                      className={`flex items-center gap-3 p-4 rounded-lg text-white transition-colors ${option.color}`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>

                {/* Copy Link */}
                <div className="border-t pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link do roteiro
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={roteiroUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                    <button
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        copied 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Preview */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Preview do compartilhamento
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-1">{titulo}</h5>
                    <p className="text-sm text-gray-600 mb-2">{shareDescription}</p>
                    <p className="text-xs text-blue-600">{roteiroUrl}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}