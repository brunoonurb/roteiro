'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Globe } from 'lucide-react'
import MapaInterativo from '@/components/MapaInterativo'

export const dynamic = 'force-dynamic'

interface AtracaoDia {
  id: string
  horario?: string | null
  ordem: number
  observacoes?: string | null
  atracao: {
    id: string
    nome: string
    descricao?: string | null
    categoria: string
    latitude: number
    longitude: number
    endereco: string
    preco?: number | null
    moeda?: string | null
    linkAfiliado?: string | null
    duracaoEstimada?: number | null
    parceiro?: string | null
  }
}

interface DiaRoteiro {
  id: string
  data: string
  ordem: number
  atracoes: AtracaoDia[]
}

interface RoteiroDetalhe {
  id: string
  titulo: string
  descricao?: string | null
  destino: string
  dataInicio: string
  dataFim: string
  publico: boolean
  categoria: string
  orcamento?: number | null
  usuario: { id: string; name?: string | null; image?: string | null }
  dias: DiaRoteiro[]
}

export default function RoteiroDetalhesPage() {
  const params = useParams()
  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params?.id[0] : ''
  const [roteiro, setRoteiro] = useState<RoteiroDetalhe | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/roteiros/${id}`)
        if (!res.ok) throw new Error('Falha ao carregar roteiro')
        const data = await res.json()
        setRoteiro(data)
      } catch (e: any) {
        setError(e?.message || 'Erro ao carregar')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  const atracoesParaMapa = useMemo(() => {
    if (!roteiro) return [] as any[]
    return roteiro.dias
      .flatMap(d => d.atracoes)
      .map(a => ({
        id: a.atracao.id,
        nome: a.atracao.nome,
        descricao: a.atracao.descricao || undefined,
        categoria: a.atracao.categoria,
        latitude: Number(a.atracao.latitude),
        longitude: Number(a.atracao.longitude),
        endereco: a.atracao.endereco,
        preco: a.atracao.preco != null ? Number(a.atracao.preco) : undefined,
        moeda: a.atracao.moeda || undefined,
        duracaoEstimada: a.atracao.duracaoEstimada || undefined
      }))
  }, [roteiro])

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-center text-gray-600">Carregando…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-red-600">{error}</p>
        <Link href="/roteiros" className="text-blue-600 underline">Voltar</Link>
      </div>
    )
  }

  if (!roteiro) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">{roteiro.titulo}</h1>
          <p className="text-gray-600 mt-1">{roteiro.descricao}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{roteiro.destino}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(roteiro.dataInicio).toLocaleDateString()} – {new Date(roteiro.dataFim).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mapa */}
        <div className="mb-8">
          <MapaInterativo atracoes={atracoesParaMapa} height="420px" showRoute={true} showClusters={false} />
        </div>

        {/* Dias e atrações */}
        <div className="space-y-6">
          {roteiro.dias.sort((a, b) => a.ordem - b.ordem).map((dia) => (
            <div key={dia.id} className="bg-white rounded-lg shadow-sm border">
              <div className="px-5 py-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <h2 className="text-lg font-semibold text-gray-900">Dia {dia.ordem} – {new Date(dia.data).toLocaleDateString()}</h2>
                </div>
                <span className="text-sm text-gray-500">{dia.atracoes.length} atividades</span>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {dia.atracoes.sort((a, b) => a.ordem - b.ordem).map((ad) => (
                    <motion.div key={ad.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {ad.ordem}. {ad.atracao.nome}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{ad.atracao.descricao}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{ad.atracao.endereco}</span>
                            {ad.horario && <span>Horário: {ad.horario}</span>}
                            {ad.atracao.duracaoEstimada && <span>Duração: {ad.atracao.duracaoEstimada} min</span>}
                            {ad.atracao.preco != null && ad.atracao.moeda && (
                              <span>Preço: {new Intl.NumberFormat(undefined, { style: 'currency', currency: ad.atracao.moeda }).format(Number(ad.atracao.preco))}</span>
                            )}
                          </div>
                        </div>
                        {ad.atracao.linkAfiliado && (
                          <Link href={ad.atracao.linkAfiliado} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            <Globe className="w-4 h-4" /> Reservar
                          </Link>
                        )}
                      </div>
                      {ad.observacoes && <p className="text-sm text-gray-500 mt-2">Obs.: {ad.observacoes}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/roteiros" className="text-blue-600 hover:underline">← Voltar para lista</Link>
        </div>
      </div>
    </div>
  )
}

