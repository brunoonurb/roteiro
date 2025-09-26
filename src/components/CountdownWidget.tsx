'use client'

import { useState, useEffect } from 'react'
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'

interface CountdownWidgetProps {
  dataInicio: Date
  dataFim?: Date
  titulo?: string
  destino?: string
  className?: string
  showDetails?: boolean
  size?: 'sm' | 'md' | 'lg'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownWidget({
  dataInicio,
  dataFim,
  titulo = 'Viagem',
  destino = '',
  className = '',
  showDetails = true,
  size = 'md'
}: CountdownWidgetProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [isExpired, setIsExpired] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const startTime = new Date(dataInicio).getTime()
      const endTime = dataFim ? new Date(dataFim).getTime() : null

      // Verificar se a viagem já começou
      if (now >= startTime) {
        setIsActive(true)
        
        // Se tem data de fim, verificar se já terminou
        if (endTime && now >= endTime) {
          setIsExpired(true)
          setTimeLeft(null)
          return
        }
        
        // Viagem em andamento
        setTimeLeft(null)
        return
      }

      // Viagem ainda não começou - mostrar countdown
      const difference = startTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
        setIsExpired(false)
      } else {
        setIsExpired(true)
        setTimeLeft(null)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [dataInicio, dataFim])

  const sizeClasses = {
    sm: {
      container: 'p-3',
      title: 'text-sm font-medium',
      countdown: 'text-lg font-bold',
      label: 'text-xs',
      icon: 'w-4 h-4'
    },
    md: {
      container: 'p-4',
      title: 'text-base font-medium',
      countdown: 'text-2xl font-bold',
      label: 'text-sm',
      icon: 'w-5 h-5'
    },
    lg: {
      container: 'p-6',
      title: 'text-lg font-medium',
      countdown: 'text-3xl font-bold',
      label: 'text-base',
      icon: 'w-6 h-6'
    }
  }

  const getStatusColor = () => {
    if (isExpired) return 'bg-red-100 text-red-800 border-red-200'
    if (isActive) return 'bg-green-100 text-green-800 border-green-200'
    return 'bg-blue-100 text-blue-800 border-blue-200'
  }

  const getStatusText = () => {
    if (isExpired) return 'Viagem finalizada'
    if (isActive) return 'Viagem em andamento'
    return 'Contagem regressiva'
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={`
      ${sizeClasses[size].container}
      border-2 rounded-lg
      ${getStatusColor()}
      ${className}
    `}>
      <div className="flex items-center gap-2 mb-3">
        <CalendarDaysIcon className={sizeClasses[size].icon} />
        <h3 className={sizeClasses[size].title}>
          {titulo}
          {destino && (
            <span className="text-gray-600 font-normal">
              {' '}para {destino}
            </span>
          )}
        </h3>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mb-4">
        <ClockIcon className={sizeClasses[size].icon} />
        <span className={`${sizeClasses[size].label} font-medium`}>
          {getStatusText()}
        </span>
      </div>

      {/* Countdown ou Status Ativo */}
      {!isExpired && !isActive && timeLeft && (
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center">
            <div className={sizeClasses[size].countdown}>
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className={sizeClasses[size].label}>Dias</div>
          </div>
          <div className="text-center">
            <div className={sizeClasses[size].countdown}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className={sizeClasses[size].label}>Horas</div>
          </div>
          <div className="text-center">
            <div className={sizeClasses[size].countdown}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className={sizeClasses[size].label}>Min</div>
          </div>
          <div className="text-center">
            <div className={sizeClasses[size].countdown}>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className={sizeClasses[size].label}>Seg</div>
          </div>
        </div>
      )}

      {/* Detalhes das datas */}
      {showDetails && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className={sizeClasses[size].label}>Início:</span>
            <span className={`${sizeClasses[size].label} font-medium`}>
              {formatDate(dataInicio)} às {formatTime(dataInicio)}
            </span>
          </div>
          
          {dataFim && (
            <div className="flex justify-between items-center">
              <span className={sizeClasses[size].label}>Fim:</span>
              <span className={`${sizeClasses[size].label} font-medium`}>
                {formatDate(dataFim)} às {formatTime(dataFim)}
              </span>
            </div>
          )}

          {dataFim && (
            <div className="flex justify-between items-center">
              <span className={sizeClasses[size].label}>Duração:</span>
              <span className={`${sizeClasses[size].label} font-medium`}>
                {Math.ceil((new Date(dataFim).getTime() - new Date(dataInicio).getTime()) / (1000 * 60 * 60 * 24))} dias
              </span>
            </div>
          )}
        </div>
      )}

      {/* Mensagem especial para viagem ativa */}
      {isActive && !isExpired && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className={`${sizeClasses[size].label} text-green-700 font-medium text-center`}>
            🎉 Sua viagem está acontecendo agora!
          </p>
        </div>
      )}

      {/* Mensagem para viagem finalizada */}
      {isExpired && (
        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
          <p className={`${sizeClasses[size].label} text-red-700 font-medium text-center`}>
            ✅ Viagem finalizada
          </p>
        </div>
      )}
    </div>
  )
}