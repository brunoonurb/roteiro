'use client'

import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { 
  PlusIcon, 
  TrashIcon, 
  ClockIcon, 
  MapPinIcon,
  CurrencyDollarIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface Atracao {
  id: string
  nome: string
  categoria: string
  preco?: number
  moeda?: string
  duracaoEstimada?: number
  latitude?: number
  longitude?: number
  endereco?: string
  linkAfiliado?: string
  parceiro?: string
  imagem?: string
}

interface DiaRoteiro {
  id: string
  data: Date
  ordem: number
  atracoes: Atracao[]
}

interface DragDropRoteiroProps {
  dias: DiaRoteiro[]
  onDiasChange: (dias: DiaRoteiro[]) => void
  onAtracaoAdd: (diaId: string, atracao: Atracao) => void
  onAtracaoRemove: (diaId: string, atracaoId: string) => void
  onAtracaoReorder: (diaId: string, startIndex: number, endIndex: number) => void
  onAtracaoMoveBetweenDays: (sourceDayId: string, destDayId: string, startIndex: number, endIndex: number) => void
  className?: string
}

export default function DragDropRoteiro({
  dias,
  onDiasChange,
  onAtracaoAdd,
  onAtracaoRemove,
  onAtracaoReorder,
  onAtracaoMoveBetweenDays,
  className = ''
}: DragDropRoteiroProps) {
  const [isDragDisabled, setIsDragDisabled] = useState(false)

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result

    // Se não há destino, não faz nada
    if (!destination) return

    // Se o item foi solto na mesma posição, não faz nada
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'ATRACAO') {
      const sourceDayId = source.droppableId
      const destDayId = destination.droppableId

      if (sourceDayId === destDayId) {
        // Reordenação dentro do mesmo dia
        onAtracaoReorder(sourceDayId, source.index, destination.index)
      } else {
        // Movimento entre dias
        onAtracaoMoveBetweenDays(sourceDayId, destDayId, source.index, destination.index)
      }
    }
  }

  const handleDragStart = () => {
    setIsDragDisabled(false)
  }

  const formatarData = (data: Date) => {
    return data.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit'
    })
  }

  const formatarDuracao = (minutos?: number) => {
    if (!minutos) return '--'
    if (minutos < 60) return `${minutos}min`
    const horas = Math.floor(minutos / 60)
    const minRestantes = minutos % 60
    return minRestantes > 0 ? `${horas}h ${minRestantes}min` : `${horas}h`
  }

  const formatarPreco = (preco?: number, moeda?: string) => {
    if (!preco) return 'Gratuito'
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: moeda || 'BRL'
    }).format(preco)
  }

  const categoriaColors: Record<string, string> = {
    CULTURA: 'bg-purple-100 text-purple-800 border-purple-200',
    GASTRONOMIA: 'bg-orange-100 text-orange-800 border-orange-200',
    AVENTURA: 'bg-green-100 text-green-800 border-green-200',
    RELAXAMENTO: 'bg-blue-100 text-blue-800 border-blue-200',
    COMPRAS: 'bg-pink-100 text-pink-800 border-pink-200',
    PARQUES: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  }

  return (
    <div className={className}>
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="space-y-6">
          {dias.map((dia) => (
            <motion.div
              key={dia.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              {/* Header do Dia */}
              <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bars3Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 capitalize">
                        {formatarData(dia.data)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Dia {dia.ordem} • {dia.atracoes.length} atração{dia.atracoes.length !== 1 ? 'ões' : ''}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      // Aqui você pode abrir um modal para adicionar atração
                      console.log('Adicionar atração ao dia:', dia.id)
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Adicionar
                  </button>
                </div>
              </div>

              {/* Área de Drop */}
              <Droppable droppableId={dia.id} type="ATRACAO">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`p-4 min-h-[120px] transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'bg-blue-50 border-2 border-dashed border-blue-300' 
                        : 'bg-white'
                    }`}
                  >
                    <AnimatePresence>
                      {dia.atracoes.length === 0 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center py-8 text-gray-500"
                        >
                          <MapPinIcon className="w-12 h-12 mb-3 opacity-50" />
                          <p className="text-sm">Nenhuma atração adicionada</p>
                          <p className="text-xs">Arraste atrações aqui ou clique em "Adicionar"</p>
                        </motion.div>
                      ) : (
                        dia.atracoes.map((atracao, index) => (
                          <Draggable
                            key={atracao.id}
                            draggableId={atracao.id}
                            index={index}
                            isDragDisabled={isDragDisabled}
                          >
                            {(provided, snapshot) => (
                              <motion.div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ 
                                  opacity: 1, 
                                  scale: 1,
                                  rotate: snapshot.isDragging ? 2 : 0
                                }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ scale: 1.02 }}
                                className={`mb-3 p-4 bg-white border rounded-lg shadow-sm cursor-move transition-all ${
                                  snapshot.isDragging 
                                    ? 'shadow-lg border-blue-300 rotate-2' 
                                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex items-start gap-3 flex-1">
                                    {/* Handle de Drag */}
                                    <div className="p-1 bg-gray-100 rounded cursor-grab active:cursor-grabbing">
                                      <Bars3Icon className="w-4 h-4 text-gray-500" />
                                    </div>

                                    {/* Imagem da Atração */}
                                    {atracao.imagem && (
                                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                          src={atracao.imagem}
                                          alt={atracao.nome}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    )}

                                    {/* Informações da Atração */}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-medium text-gray-900 truncate">
                                          {atracao.nome}
                                        </h4>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                                          categoriaColors[atracao.categoria] || 'bg-gray-100 text-gray-800 border-gray-200'
                                        }`}>
                                          {atracao.categoria}
                                        </span>
                                      </div>

                                      {atracao.endereco && (
                                        <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                                          📍 {atracao.endereco}
                                        </p>
                                      )}

                                      {/* Detalhes */}
                                      <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                          <ClockIcon className="w-4 h-4" />
                                          <span>{formatarDuracao(atracao.duracaoEstimada)}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-1">
                                          <CurrencyDollarIcon className="w-4 h-4" />
                                          <span>{formatarPreco(atracao.preco, atracao.moeda)}</span>
                                        </div>

                                        {atracao.parceiro && (
                                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                            {atracao.parceiro}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Ações */}
                                  <div className="flex items-center gap-2 ml-4">
                                    {atracao.linkAfiliado && (
                                      <a
                                        href={atracao.linkAfiliado}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Ver detalhes"
                                      >
                                        🔗
                                      </a>
                                    )}
                                    
                                    <button
                                      onClick={() => onAtracaoRemove(dia.id, atracao.id)}
                                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                      title="Remover atração"
                                    >
                                      <TrashIcon className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </Draggable>
                        ))
                      )}
                    </AnimatePresence>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              {/* Footer do Dia */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>
                        {formatarDuracao(
                          dia.atracoes.reduce((total, atracao) => 
                            total + (atracao.duracaoEstimada || 0), 0
                          )
                        )}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <CurrencyDollarIcon className="w-4 h-4" />
                      <span>
                        {formatarPreco(
                          dia.atracoes.reduce((total, atracao) => 
                            total + (atracao.preco || 0), 0
                          )
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs">
                    {dia.atracoes.length} item{dia.atracoes.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}