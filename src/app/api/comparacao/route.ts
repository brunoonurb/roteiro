import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calcularDistancia, estimarCustoRoteiro, estimarDuracaoRoteiro } from '@/lib/estimativas'

type EntidadeComparacao = {
  tipo: 'ROTEIRO' | 'ATRACAO' | 'CUSTOM'
  id?: string
  dados?: any
  rotas?: { tipoTransporte?: 'walking' | 'driving' | 'transit' | 'taxi' }
}

type PontoTuristico = {
  nome: string
  latitude: number
  longitude: number
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { entidades, pontosTuristicos = [] } = body as {
      entidades: EntidadeComparacao[]
      pontosTuristicos?: PontoTuristico[]
    }

    if (!Array.isArray(entidades) || entidades.length < 1 || entidades.length > 3) {
      return NextResponse.json({ error: 'Forneça entre 1 e 3 entidades para comparar' }, { status: 400 })
    }

    const resultados = [] as any[]

    for (const entidade of entidades) {
      if (entidade.tipo === 'ROTEIRO') {
        if (!entidade.id) {
          return NextResponse.json({ error: 'Roteiro requer id' }, { status: 400 })
        }

        const roteiro = await prisma.roteiro.findUnique({
          where: { id: entidade.id },
          include: {
            dias: {
              include: {
                atracoes: {
                  include: { atracao: true },
                  orderBy: { ordem: 'asc' }
                }
              },
              orderBy: { ordem: 'asc' }
            }
          }
        })

        if (!roteiro) {
          resultados.push({ id: entidade.id, tipo: entidade.tipo, error: 'Roteiro não encontrado' })
          continue
        }

        const atracoesLinear = roteiro.dias.flatMap(d => d.atracoes.map(a => a.atracao))
        const tipoTransporte = entidade.rotas?.tipoTransporte ?? 'walking'

        // Estimativas agregadas
        const duracao = estimarDuracaoRoteiro(
          atracoesLinear.map(a => ({ categoria: a.categoria, latitude: Number(a.latitude), longitude: Number(a.longitude) })),
          tipoTransporte
        )
        const custo = estimarCustoRoteiro(
          atracoesLinear.map(a => ({ categoria: a.categoria, latitude: Number(a.latitude), longitude: Number(a.longitude) })),
          tipoTransporte
        )

        // Distâncias médias aos pontos turísticos (se fornecidos)
        let distanciaMediaPontos = null as null | number
        if (pontosTuristicos.length > 0 && atracoesLinear.length > 0) {
          const centroid = {
            lat: atracoesLinear.reduce((sum, a) => sum + Number(a.latitude), 0) / atracoesLinear.length,
            lng: atracoesLinear.reduce((sum, a) => sum + Number(a.longitude), 0) / atracoesLinear.length
          }
          const distancias = pontosTuristicos.map(p => calcularDistancia(centroid.lat, centroid.lng, p.latitude, p.longitude))
          distanciaMediaPontos = distancias.reduce((s, d) => s + d, 0) / distancias.length
        }

        resultados.push({
          id: roteiro.id,
          tipo: 'ROTEIRO',
          titulo: roteiro.titulo,
          destino: roteiro.destino,
          custo: {
            total: custo.custoTotal,
            atracoes: custo.custoAtracoes,
            deslocamento: custo.custoDeslocamento
          },
          tempo: {
            total: duracao.duracaoTotal,
            atracoes: duracao.duracaoAtracoes,
            deslocamento: duracao.duracaoDeslocamento
          },
          distanciaMediaPontosTuristicosKm: distanciaMediaPontos
        })
      } else if (entidade.tipo === 'ATRACAO') {
        if (!entidade.id) {
          return NextResponse.json({ error: 'Atração requer id' }, { status: 400 })
        }
        const atracao = await prisma.atracao.findUnique({ where: { id: entidade.id } })
        if (!atracao) {
          resultados.push({ id: entidade.id, tipo: entidade.tipo, error: 'Atração não encontrada' })
          continue
        }

        let distanciaMediaPontos = null as null | number
        if (pontosTuristicos.length > 0) {
          const distancias = pontosTuristicos.map(p => calcularDistancia(Number(atracao.latitude), Number(atracao.longitude), p.latitude, p.longitude))
          distanciaMediaPontos = distancias.reduce((s, d) => s + d, 0) / distancias.length
        }

        resultados.push({
          id: atracao.id,
          tipo: 'ATRACAO',
          nome: atracao.nome,
          preco: atracao.preco ? Number(atracao.preco) : 0,
          distanciaMediaPontosTuristicosKm: distanciaMediaPontos
        })
      } else if (entidade.tipo === 'CUSTOM') {
        // Dados customizados: espera-se já virem com coordenadas e custos
        const dados = entidade.dados || {}
        let distanciaMediaPontos = null as null | number
        if (pontosTuristicos.length > 0 && Array.isArray(dados.pontos) && dados.pontos.length > 0) {
          const centroid = {
            lat: dados.pontos.reduce((sum: number, p: any) => sum + Number(p.latitude), 0) / dados.pontos.length,
            lng: dados.pontos.reduce((sum: number, p: any) => sum + Number(p.longitude), 0) / dados.pontos.length
          }
          const distancias = pontosTuristicos.map((p: any) => calcularDistancia(centroid.lat, centroid.lng, p.latitude, p.longitude))
          distanciaMediaPontos = distancias.reduce((s: number, d: number) => s + d, 0) / distancias.length
        }

        resultados.push({ ...dados, tipo: 'CUSTOM', distanciaMediaPontosTuristicosKm: distanciaMediaPontos })
      }
    }

    // Ordenações úteis (exemplos): por custo total e por tempo total quando disponível
    const ordenacoes = {
      porCusto: [...resultados].sort((a, b) => (a.custo?.total ?? a.preco ?? 0) - (b.custo?.total ?? b.preco ?? 0)),
      porTempo: [...resultados].sort((a, b) => (a.tempo?.total ?? 0) - (b.tempo?.total ?? 0))
    }

    return NextResponse.json({ resultados, ordenacoes })
  } catch (error: any) {
    console.error('Erro na comparação:', error)
    return NextResponse.json({ error: error.message || 'Erro interno do servidor' }, { status: 500 })
  }
}

