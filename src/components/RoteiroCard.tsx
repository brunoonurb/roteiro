'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'

interface RoteiroCardProps {
  roteiro: {
    id: string
    titulo: string
    descricao?: string
    dias?: any[]
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
  onCopiar?: (roteiroId: string) => void
  onDelete?: (roteiroId: string) => void
  showActions?: boolean
}

export default function RoteiroCard({ 
  roteiro, 
  onCopiar, 
  onDelete, 
  showActions = false 
}: RoteiroCardProps) {
  const { data: session } = useSession()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!onDelete) return
    
    setIsDeleting(true)
    try {
      await onDelete(roteiro.id)
    } finally {
      setIsDeleting(false)
    }
  }

  const diasCount = Array.isArray(roteiro.dias) ? roteiro.dias.length : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Imagem de capa */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {roteiro.publico ? (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Público
            </span>
          ) : (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              Privado
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{diasCount} {diasCount === 1 ? 'dia' : 'dias'}</span>
          </div>
          {roteiro._count?.ingressos && roteiro._count.ingressos > 0 && (
            <div className="flex items-center space-x-2 text-sm mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <span>{roteiro._count.ingressos} ingresso{roteiro._count.ingressos !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {roteiro.titulo}
        </h3>
        
        {roteiro.descricao && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {roteiro.descricao}
          </p>
        )}

        {/* Autor */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            {roteiro.usuario.image ? (
              <Image
                src={roteiro.usuario.image}
                alt={roteiro.usuario.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <span className="text-gray-600 text-sm font-medium">
                {roteiro.usuario.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">por {roteiro.usuario.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(roteiro.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-between">
          <Link
            href={`/roteiros/${roteiro.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>Ver Roteiro</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {showActions && session?.user?.id === roteiro.usuario.id && (
            <div className="flex items-center space-x-2">
              <Link
                href={`/roteiros/${roteiro.id}/editar`}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </Link>
              
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-gray-600 hover:text-red-600 transition-colors p-2 disabled:opacity-50"
              >
                {isDeleting ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>
            </div>
          )}

          {onCopiar && roteiro.publico && session?.user?.id !== roteiro.usuario.id && (
            <button
              onClick={() => onCopiar(roteiro.id)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copiar</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}