'use client'

import { useState, useEffect } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'

interface FavoritosButtonProps {
  targetType: 'ITINERARY' | 'PLACE'
  targetId: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  onToggle?: (isFavorito: boolean) => void
}

export default function FavoritosButton({
  targetType,
  targetId,
  className = '',
  size = 'md',
  showText = false,
  onToggle
}: FavoritosButtonProps) {
  const { data: session } = useSession()
  const [isFavorito, setIsFavorito] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Verificar status inicial do favorito
  useEffect(() => {
    if (!session?.user?.id) return

    const checkFavorito = async () => {
      try {
        const response = await fetch(
          `/api/favoritos?targetType=${targetType}&targetId=${targetId}`,
          {
            method: 'HEAD'
          }
        )
        
        if (response.ok) {
          const data = await response.json()
          setIsFavorito(data.isFavorito)
        }
      } catch (error) {
        console.error('Erro ao verificar favorito:', error)
      }
    }

    checkFavorito()
  }, [session?.user?.id, targetType, targetId])

  const toggleFavorito = async () => {
    if (!session?.user?.id || isLoading) return

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/favoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          targetType,
          targetId
        })
      })

      if (response.ok) {
        const data = await response.json()
        setIsFavorito(data.isFavorito)
        onToggle?.(data.isFavorito)
      } else {
        console.error('Erro ao alterar favorito')
      }
    } catch (error) {
      console.error('Erro ao alterar favorito:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Não mostrar se não estiver logado
  if (!session?.user?.id) {
    return null
  }

  // Não mostrar se ainda está carregando o status inicial
  if (isFavorito === null) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className={`bg-gray-200 rounded ${size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-7 h-7'}`} />
      </div>
    )
  }

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  }

  const textClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <button
      onClick={toggleFavorito}
      disabled={isLoading}
      className={`
        flex items-center gap-2 transition-all duration-200
        ${isFavorito 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-400 hover:text-red-500'
        }
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      title={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {isFavorito ? (
        <HeartSolidIcon className={`${sizeClasses[size]} fill-current`} />
      ) : (
        <HeartIcon className={`${sizeClasses[size]}`} />
      )}
      
      {showText && (
        <span className={`${textClasses[size]} font-medium`}>
          {isFavorito ? 'Favorito' : 'Favoritar'}
        </span>
      )}
      
      {isLoading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
      )}
    </button>
  )
}