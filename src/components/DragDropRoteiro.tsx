'use client'

import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { motion, AnimatePresence } from 'framer-motion'
import { GripVertical, Plus, Trash2, MapPin, Clock, Star } from 'lucide-react'
import { PlaceResult, getPlacesService } from '@/lib/places'
import BuscaAtracoes from './BuscaAtracoes'

interface DiaRoteiro {
  id: string
  data: string
  atracoes: AtracaoRoteiro[]
}

interface AtracaoRoteiro {
  id: string
  nome: string
  descricao?: string
  categoria: string
  endereco?: string
  latitude?: number
  longitude?: number
  linkAfiliado?: string
  parceiro?: string
  preco?: number
  duracao?: number
  imagem?: string
  rating?: number
  horarioAbertura?: string
  horarioFechamento?: string
}

interface DragDropRoteiroProps {
  dias: DiaRoteiro[]
  onUpdateDias: (dias: DiaRoteiro[]) => void
  location?: { lat: number; lng: number }
}

function SortableDia({ dia, onUpdateDia, onDeleteDia, location }: {
  dia: DiaRoteiro
  onUpdateDia: (dia: DiaRoteiro) => void
  onDeleteDia: (diaId: string) => void
  location?: { lat: number; lng: number }
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: dia.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const addAtracao = (place: PlaceResult) => {
    const novaAtracao: AtracaoRoteiro = {
      id: `atracao-${Date.now()}`,
      nome: place.name,
      descricao: place.formatted_address,
      categoria: place.types.includes('museum') ? 'cultura' : 
                place.types.includes('restaurant') ? 'gastronomia' :
                place.types.includes('park') ? 'parques' :
                place.types.includes('shopping_mall') ? 'compras' : 'outros',
      endereco: place.formatted_address,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      rating: place.rating,
      preco: place.price_level ? place.price_level * 20 : undefined,
      horarioAbertura: place.opening_hours?.weekday_text?.[0]?.split(' ')[1] || '09:00',
      horarioFechamento: place.opening_hours?.weekday_text?.[0]?.split(' ')[3] || '18:00',
      imagem: place.photos?.[0] ? getPlacesService().getPhotoUrl(place.photos[0].photo_reference, 200) : undefined,
    }

    onUpdateDia({
      ...dia,
      atracoes: [...dia.atracoes, novaAtracao]
    })
  }

  const removeAtracao = (atracaoId: string) => {
    onUpdateDia({
      ...dia,
      atracoes: dia.atracoes.filter(a => a.id !== atracaoId)
    })
  }

  const moveAtracao = (fromIndex: number, toIndex: number) => {
    const newAtracoes = arrayMove(dia.atracoes, fromIndex, toIndex)
    onUpdateDia({
      ...dia,
      atracoes: newAtracoes
    })
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-lg shadow-md border-2 border-gray-200 p-6 ${
        isDragging ? 'opacity-50 shadow-xl' : ''
      }`}
      layout
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab hover:cursor-grabbing p-1 text-gray-400 hover:text-gray-600"
          >
            <GripVertical className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Dia {dia.id.split('-')[1]} - {new Date(dia.data).toLocaleDateString('pt-BR')}
          </h3>
        </div>
        <button
          onClick={() => onDeleteDia(dia.id)}
          className="text-red-500 hover:text-red-700 p-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Busca de Atrações */}
      <div className="mb-4">
        <BuscaAtracoes
          onSelectAtracao={addAtracao}
          location={location}
          className="w-full"
        />
      </div>

      {/* Lista de Atrações */}
      <div className="space-y-3">
        <AnimatePresence>
          {dia.atracoes.map((atracao, index) => (
            <SortableAtracao
              key={atracao.id}
              atracao={atracao}
              index={index}
              onRemove={() => removeAtracao(atracao.id)}
              onMove={(fromIndex, toIndex) => moveAtracao(fromIndex, toIndex)}
            />
          ))}
        </AnimatePresence>
      </div>

      {dia.atracoes.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>Nenhuma atração adicionada ainda</p>
          <p className="text-sm">Use a busca acima para adicionar atrações</p>
        </div>
      )}
    </motion.div>
  )
}

function SortableAtracao({ atracao, index, onRemove, onMove }: {
  atracao: AtracaoRoteiro
  index: number
  onRemove: () => void
  onMove: (fromIndex: number, toIndex: number) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: atracao.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={`bg-gray-50 rounded-lg p-4 border border-gray-200 ${
        isDragging ? 'opacity-50 shadow-lg' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      <div className="flex items-start gap-3">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab hover:cursor-grabbing p-1 text-gray-400 hover:text-gray-600 mt-1"
        >
          <GripVertical className="w-4 h-4" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{atracao.nome}</h4>
              {atracao.descricao && (
                <p className="text-sm text-gray-600 mt-1">{atracao.descricao}</p>
              )}
              
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {atracao.categoria}
                </span>
                
                {atracao.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{atracao.rating.toFixed(1)}</span>
                  </div>
                )}
                
                {atracao.preco && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">R$ {atracao.preco}</span>
                  </div>
                )}
                
                {atracao.duracao && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{atracao.duracao}min</span>
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 p-1 ml-2"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function DragDropRoteiro({ dias, onUpdateDias, location }: DragDropRoteiroProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    if (activeId === overId) return

    // Check if we're moving a day
    const activeDayIndex = dias.findIndex(dia => dia.id === activeId)
    const overDayIndex = dias.findIndex(dia => dia.id === overId)

    if (activeDayIndex !== -1 && overDayIndex !== -1) {
      // Moving days
      const newDias = arrayMove(dias, activeDayIndex, overDayIndex)
      onUpdateDias(newDias)
    } else {
      // Moving attractions within a day
      const activeDia = dias.find(dia => 
        dia.atracoes.some(atracao => atracao.id === activeId)
      )
      const overDia = dias.find(dia => 
        dia.atracoes.some(atracao => atracao.id === overId)
      )

      if (activeDia && overDia && activeDia.id === overDia.id) {
        const activeIndex = activeDia.atracoes.findIndex(a => a.id === activeId)
        const overIndex = activeDia.atracoes.findIndex(a => a.id === overId)

        if (activeIndex !== -1 && overIndex !== -1) {
          const newAtracoes = arrayMove(activeDia.atracoes, activeIndex, overIndex)
          const newDias = dias.map(dia => 
            dia.id === activeDia.id 
              ? { ...dia, atracoes: newAtracoes }
              : dia
          )
          onUpdateDias(newDias)
        }
      }
    }

    setActiveId(null)
  }

  const addDia = () => {
    const novoDia: DiaRoteiro = {
      id: `dia-${Date.now()}`,
      data: new Date().toISOString().split('T')[0],
      atracoes: []
    }
    onUpdateDias([...dias, novoDia])
  }

  const updateDia = (diaAtualizada: DiaRoteiro) => {
    const newDias = dias.map(dia => 
      dia.id === diaAtualizada.id ? diaAtualizada : dia
    )
    onUpdateDias(newDias)
  }

  const deleteDia = (diaId: string) => {
    onUpdateDias(dias.filter(dia => dia.id !== diaId))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Dias do Roteiro</h2>
        <button
          onClick={addDia}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Adicionar Dia
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={dias.map(dia => dia.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {dias.map((dia) => (
              <SortableDia
                key={dia.id}
                dia={dia}
                onUpdateDia={updateDia}
                onDeleteDia={deleteDia}
                location={location}
              />
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div className="bg-white rounded-lg shadow-xl border-2 border-blue-500 p-6 opacity-90">
              <div className="flex items-center gap-3">
                <GripVertical className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">Arrastando...</span>
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {dias.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum dia adicionado</h3>
          <p className="text-gray-600 mb-4">Comece criando o primeiro dia do seu roteiro</p>
          <button
            onClick={addDia}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <Plus className="w-5 h-5" />
            Adicionar Primeiro Dia
          </button>
        </div>
      )}
    </div>
  )
}