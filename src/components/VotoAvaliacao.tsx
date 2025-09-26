'use client'

import { useState, useEffect } from 'react'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/24/outline'
import { ThumbUpIcon as ThumbUpSolidIcon, ThumbDownIcon as ThumbDownSolidIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'

interface VotoAvaliacaoProps {
  avaliacaoId: string
  utilCount: number
  naoUtilCount: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showCounts?: boolean
  onVoteChange?: (util: number, naoUtil: number) => void
}

export default function VotoAvaliacao({
  avaliacaoId,
  utilCount,
  naoUtilCount,
  className = '',
  size = 'md',
  showCounts = true,
  onVoteChange
}: VotoAvaliacaoProps) {
  const { data: session } = useSession()
  const [userVote, setUserVote] = useState<boolean | null>(null)
  const [currentUtil, setCurrentUtil] = useState(utilCount)
  const [currentNaoUtil, setCurrentNaoUtil] = useState(naoUtilCount)
  const [isLoading, setIsLoading] = useState(false)

  // Verificar voto inicial do usuário
  useEffect(() => {
    if (!session?.user?.id) return

    const checkVote = async () => {
      try {
        const response = await fetch(`/api/avaliacoes/${avaliacaoId}/votar`)
        
        if (response.ok) {
          const data = await response.json()
          setUserVote(data.isUtil)
        }
      } catch (error) {
        console.error('Erro ao verificar voto:', error)
      }
    }

    checkVote()
  }, [session?.user?.id, avaliacaoId])

  const handleVote = async (isUtil: boolean) => {
    if (!session?.user?.id || isLoading) return

    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/avaliacoes/${avaliacaoId}/votar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isUtil })
      })

      if (response.ok) {
        const data = await response.json()
        
        if (data.isUtil === null) {
          // Voto removido
          setUserVote(null)
        } else {
          // Voto alterado/adicionado
          setUserVote(data.isUtil)
        }
        
        setCurrentUtil(data.util)
        setCurrentNaoUtil(data.naoUtil)
        onVoteChange?.(data.util, data.naoUtil)
      } else {
        console.error('Erro ao votar')
      }
    } catch (error) {
      console.error('Erro ao votar:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Não mostrar se não estiver logado
  if (!session?.user?.id) {
    return showCounts ? (
      <div className={`flex items-center gap-4 ${className}`}>
        <span className="text-sm text-gray-500">
          {currentUtil} útil{currentUtil !== 1 ? 'is' : ''}
        </span>
        <span className="text-sm text-gray-500">
          {currentNaoUtil} não útil{currentNaoUtil !== 1 ? 'is' : ''}
        </span>
      </div>
    ) : null
  }

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const textClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Botão Útil */}
      <button
        onClick={() => handleVote(true)}
        disabled={isLoading}
        className={`
          flex items-center gap-1 transition-all duration-200
          ${userVote === true 
            ? 'text-green-600 hover:text-green-700' 
            : 'text-gray-400 hover:text-green-600'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        title={userVote === true ? 'Remover voto útil' : 'Marcar como útil'}
      >
        {userVote === true ? (
          <ThumbUpSolidIcon className={`${sizeClasses[size]} fill-current`} />
        ) : (
          <ThumbUpIcon className={`${sizeClasses[size]}`} />
        )}
        
        {showCounts && (
          <span className={`${textClasses[size]} font-medium`}>
            {currentUtil}
          </span>
        )}
      </button>

      {/* Botão Não Útil */}
      <button
        onClick={() => handleVote(false)}
        disabled={isLoading}
        className={`
          flex items-center gap-1 transition-all duration-200
          ${userVote === false 
            ? 'text-red-600 hover:text-red-700' 
            : 'text-gray-400 hover:text-red-600'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        title={userVote === false ? 'Remover voto não útil' : 'Marcar como não útil'}
      >
        {userVote === false ? (
          <ThumbDownSolidIcon className={`${sizeClasses[size]} fill-current`} />
        ) : (
          <ThumbDownIcon className={`${sizeClasses[size]}`} />
        )}
        
        {showCounts && (
          <span className={`${textClasses[size]} font-medium`}>
            {currentNaoUtil}
          </span>
        )}
      </button>

      {isLoading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400" />
      )}
    </div>
  )
}