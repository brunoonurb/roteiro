import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calcularDistancia, estimarTempoDeslocamento } from '@/lib/estimativas'

/*
  Body:
  {
    origem: { latitude, longitude },
    destino: { latitude, longitude },
    meio: 'UBER' | 'METRO' | 'ONIBUS' | 'CARRO' | 'A_PE' | 'OUTRO',
    cidade?: string
  }
*/
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { origem, destino, meio, cidade } = body
    if (!origem || !destino || !meio) {
      return NextResponse.json({ error: 'origem, destino e meio são obrigatórios' }, { status: 400 })
    }

    const distanciaKm = calcularDistancia(origem.latitude, origem.longitude, destino.latitude, destino.longitude)

    // Buscar tarifa manual se houver (por cidade e tipo)
    let tarifa = null as null | { custoFixo: number; custoPorKm: number; custoPorMin: number }
    if (cidade) {
      const t = await prisma.transportTariffManual.findFirst({ where: { cidade, tipo: meio } })
      if (t) {
        tarifa = {
          custoFixo: Number(t.custoFixo),
          custoPorKm: Number(t.custoPorKm),
          custoPorMin: Number(t.custoPorMin)
        }
      }
    }

    // Estimar tempo conforme meio
    const travelMode = meio === 'CARRO' ? 'driving' : meio === 'A_PE' ? 'walking' : 'transit'
    const tempoMin = estimarTempoDeslocamento(distanciaKm, travelMode as any)

    // Placeholder para parceiros (Uber etc.) - futuramente integrar SDK/API externa
    const parceiros = await prisma.transportPartner.findMany({ where: { ativo: true, tipo: meio } })

    // Cálculo de custo
    let custoEstimado = 0
    if (tarifa) {
      custoEstimado = tarifa.custoFixo + distanciaKm * tarifa.custoPorKm + tempoMin * tarifa.custoPorMin
    } else {
      // fallback heurístico
      const defaultPorKm = meio === 'UBER' ? 3 : meio === 'CARRO' ? 0.8 : meio === 'A_PE' ? 0 : 0.15
      custoEstimado = distanciaKm * defaultPorKm
    }

    return NextResponse.json({
      meio,
      distanciaKm,
      tempoMin,
      custoEstimado: Math.round(custoEstimado * 100) / 100,
      parceiros: parceiros.map(p => ({ id: p.id, nome: p.nome }))
    })
  } catch (e: any) {
    console.error('Erro ao cotar transporte:', e)
    return NextResponse.json({ error: e.message || 'Erro interno' }, { status: 500 })
  }
}

