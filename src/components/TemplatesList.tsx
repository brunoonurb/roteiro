'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { CalendarDaysIcon, MapPinIcon, CurrencyDollarIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline'
import { EyeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/solid'

interface Template {
  id: string
  titulo: string
  descricao?: string
  destino: string
  categoria: string
  duracaoDias: number
  custoEstimado?: number
  moeda: string
  isPublico: boolean
  autor: {
    id: string
    name: string
    image?: string
  }
  criadoEm: string
  _count: {
    roteiros: number
  }
}

interface TemplatesListProps {
  categoria?: string
  destino?: string
  duracaoMin?: number
  duracaoMax?: number
  limit?: number
  showFilters?: boolean
  onTemplateSelect?: (template: Template) => void
  className?: string
}

export default function TemplatesList({
  categoria,
  destino,
  duracaoMin,
  duracaoMax,
  limit = 20,
  showFilters = true,
  onTemplateSelect,
  className = ''
}: TemplatesListProps) {
  const { data: session } = useSession()
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    categoria: categoria || '',
    destino: destino || '',
    duracaoMin: duracaoMin || '',
    duracaoMax: duracaoMax || ''
  })

  const fetchTemplates = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: '1',
        limit: limit.toString()
      })

      if (filters.categoria) params.append('categoria', filters.categoria)
      if (filters.destino) params.append('destino', filters.destino)
      if (filters.duracaoMin) params.append('duracaoMin', filters.duracaoMin.toString())
      if (filters.duracaoMax) params.append('duracaoMax', filters.duracaoMax.toString())

      const response = await fetch(`/api/templates?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Erro ao carregar templates')
      }

      const data = await response.json()
      setTemplates(data.templates)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTemplates()
  }, [filters])

  const handleCopyTemplate = async (template: Template) => {
    if (!session?.user?.id) {
      alert('Você precisa estar logado para copiar um template')
      return
    }

    // Solicitar datas do usuário
    const dataInicio = prompt('Data de início da viagem (DD/MM/AAAA):')
    const dataFim = prompt('Data de fim da viagem (DD/MM/AAAA):')

    if (!dataInicio || !dataFim) return

    try {
      const response = await fetch(`/api/templates/${template.id}/copiar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titulo: `${template.titulo} - Minha Viagem`,
          dataInicio: new Date(dataInicio.split('/').reverse().join('-')),
          dataFim: new Date(dataFim.split('/').reverse().join('-'))
        })
      })

      if (response.ok) {
        const data = await response.json()
        alert('Roteiro criado com sucesso!')
        onTemplateSelect?.(template)
        // Redirecionar para o roteiro criado
        window.location.href = `/roteiros/${data.roteiro.id}`
      } else {
        const errorData = await response.json()
        alert(errorData.error || 'Erro ao criar roteiro')
      }
    } catch (err) {
      alert('Erro ao criar roteiro')
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency === 'BRL' ? 'BRL' : 'USD'
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const categoriaColors: Record<string, string> = {
    CULTURA: 'bg-purple-100 text-purple-800',
    GASTRONOMIA: 'bg-orange-100 text-orange-800',
    AVENTURA: 'bg-green-100 text-green-800',
    RELAXAMENTO: 'bg-blue-100 text-blue-800',
    COMPRAS: 'bg-pink-100 text-pink-800',
    PARQUES: 'bg-emerald-100 text-emerald-800'
  }

  return (
    <div className={className}>
      {/* Filtros */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
          <h3 className="text-lg font-medium mb-4">Filtrar Templates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <select
                value={filters.categoria}
                onChange={(e) => setFilters(prev => ({ ...prev, categoria: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas</option>
                <option value="CULTURA">Cultura</option>
                <option value="GASTRONOMIA">Gastronomia</option>
                <option value="AVENTURA">Aventura</option>
                <option value="RELAXAMENTO">Relaxamento</option>
                <option value="COMPRAS">Compras</option>
                <option value="PARQUES">Parques</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destino
              </label>
              <input
                type="text"
                value={filters.destino}
                onChange={(e) => setFilters(prev => ({ ...prev, destino: e.target.value }))}
                placeholder="Ex: Paris, Tokyo..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duração Mín (dias)
              </label>
              <input
                type="number"
                value={filters.duracaoMin}
                onChange={(e) => setFilters(prev => ({ ...prev, duracaoMin: e.target.value }))}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duração Máx (dias)
              </label>
              <input
                type="number"
                value={filters.duracaoMax}
                onChange={(e) => setFilters(prev => ({ ...prev, duracaoMax: e.target.value }))}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
          <button
            onClick={fetchTemplates}
            className="mt-2 text-red-600 hover:text-red-800 underline"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* Templates Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {template.titulo}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoriaColors[template.categoria]}`}>
                    {template.categoria}
                  </span>
                </div>

                {/* Descrição */}
                {template.descricao && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {template.descricao}
                  </p>
                )}

                {/* Informações */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{template.destino}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{template.duracaoDias} dia{template.duracaoDias !== 1 ? 's' : ''}</span>
                  </div>

                  {template.custoEstimado && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CurrencyDollarIcon className="w-4 h-4" />
                      <span>{formatCurrency(template.custoEstimado, template.moeda)}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UserIcon className="w-4 h-4" />
                    <span>{template.autor.name}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <EyeIcon className="w-4 h-4" />
                    <span>{template._count.roteiros} uso{template._count.roteiros !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopyTemplate(template)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <DocumentDuplicateIcon className="w-4 h-4" />
                    Copiar Template
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Criado em {formatDate(template.criadoEm)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && templates.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <DocumentDuplicateIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum template encontrado
          </h3>
          <p className="text-gray-600 mb-4">
            Tente ajustar os filtros ou criar um novo template.
          </p>
          <button
            onClick={() => setFilters({ categoria: '', destino: '', duracaoMin: '', duracaoMax: '' })}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  )
}