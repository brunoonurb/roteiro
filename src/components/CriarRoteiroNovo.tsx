'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createRoteiroSchema, type CreateRoteiro } from '@/lib/schemas'

export default function CriarRoteiroNovo() {
  const router = useRouter()
  const [formData, setFormData] = useState<CreateRoteiro>({
    titulo: '',
    descricao: '',
    destino: '',
    dataInicio: new Date(),
    dataFim: new Date(Date.now() + 24 * 60 * 60 * 1000), // +1 dia
    categoria: 'CULTURA',
    publico: false
  })
  const [errors, setErrors] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof CreateRoteiro, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors((prev: any) => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validar dados
      const validatedData = createRoteiroSchema.parse(formData)

      // Enviar para API
      const response = await fetch('/api/roteiros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Erro ao criar roteiro')
      }

      const roteiro = await response.json()
      router.push(`/roteiros/${roteiro.id}`)
    } catch (error: any) {
      console.error('Erro ao criar roteiro:', error)
      
      if (error.name === 'ZodError') {
        const fieldErrors: any = {}
        error.errors.forEach((err: any) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        setErrors({ general: error.message })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Criar Novo Roteiro
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Roteiro *
                </label>
                <input
                  type="text"
                  id="titulo"
                  value={formData.titulo}
                  onChange={(e) => handleInputChange('titulo', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.titulo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: Paris em 3 dias"
                />
                {errors.titulo && (
                  <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>
                )}
              </div>

              {/* Destino */}
              <div>
                <label htmlFor="destino" className="block text-sm font-medium text-gray-700 mb-2">
                  Destino *
                </label>
                <input
                  type="text"
                  id="destino"
                  value={formData.destino}
                  onChange={(e) => handleInputChange('destino', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.destino ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: Paris, França"
                />
                {errors.destino && (
                  <p className="text-red-500 text-sm mt-1">{errors.destino}</p>
                )}
              </div>

              {/* Datas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dataInicio" className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Início *
                  </label>
                  <input
                    type="date"
                    id="dataInicio"
                    value={formData.dataInicio.toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('dataInicio', new Date(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.dataInicio ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.dataInicio && (
                    <p className="text-red-500 text-sm mt-1">{errors.dataInicio}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dataFim" className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Fim *
                  </label>
                  <input
                    type="date"
                    id="dataFim"
                    value={formData.dataFim.toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('dataFim', new Date(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.dataFim ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.dataFim && (
                    <p className="text-red-500 text-sm mt-1">{errors.dataFim}</p>
                  )}
                </div>
              </div>

              {/* Categoria */}
              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria *
                </label>
                <select
                  id="categoria"
                  value={formData.categoria}
                  onChange={(e) => handleInputChange('categoria', e.target.value as any)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.categoria ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="CULTURA">Cultura</option>
                  <option value="GASTRONOMIA">Gastronomia</option>
                  <option value="AVENTURA">Aventura</option>
                  <option value="RELAXAMENTO">Relaxamento</option>
                  <option value="COMPRAS">Compras</option>
                  <option value="PARQUES">Parques</option>
                </select>
                {errors.categoria && (
                  <p className="text-red-500 text-sm mt-1">{errors.categoria}</p>
                )}
              </div>

              {/* Descrição */}
              <div>
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  rows={4}
                  value={formData.descricao || ''}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.descricao ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Descreva seu roteiro..."
                />
                {errors.descricao && (
                  <p className="text-red-500 text-sm mt-1">{errors.descricao}</p>
                )}
              </div>

              {/* Orçamento */}
              <div>
                <label htmlFor="orcamento" className="block text-sm font-medium text-gray-700 mb-2">
                  Orçamento Estimado (R$)
                </label>
                <input
                  type="number"
                  id="orcamento"
                  min="0"
                  step="0.01"
                  value={formData.orcamento || ''}
                  onChange={(e) => handleInputChange('orcamento', e.target.value ? parseFloat(e.target.value) : undefined)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.orcamento ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: 1500.00"
                />
                {errors.orcamento && (
                  <p className="text-red-500 text-sm mt-1">{errors.orcamento}</p>
                )}
              </div>

              {/* Público */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="publico"
                  checked={formData.publico}
                  onChange={(e) => handleInputChange('publico', e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="publico" className="ml-2 text-sm font-medium text-gray-700">
                  Tornar roteiro público (outros usuários poderão visualizar e copiar)
                </label>
              </div>

              {/* Erro geral */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Botões */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Criando...' : 'Criar Roteiro'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}