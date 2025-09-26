import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Lista meios de transporte disponíveis e opções de parceiros/entrada manual
export async function GET(_request: NextRequest) {
  try {
    const [partners, tariffs] = await Promise.all([
      prisma.transportPartner.findMany({ where: { ativo: true } }),
      prisma.transportTariffManual.findMany()
    ])

    const meios = [
      { id: 'UBER', label: 'Uber/Taxi', tipoTransporte: 'taxi' },
      { id: 'METRO', label: 'Metrô', tipoTransporte: 'transit' },
      { id: 'ONIBUS', label: 'Ônibus', tipoTransporte: 'transit' },
      { id: 'A_PE', label: 'A pé', tipoTransporte: 'walking' },
      { id: 'CARRO', label: 'Carro', tipoTransporte: 'driving' },
      { id: 'TRANSITO', label: 'Transporte público', tipoTransporte: 'transit' },
      { id: 'MANUAL', label: 'Outro (manual)', tipoTransporte: 'manual' }
    ]

    const parceiros = partners.map(p => ({ id: p.id, nome: p.nome, tipo: p.tipo }))
    const tarifas = tariffs.map(t => ({ id: t.id, cidade: t.cidade, moeda: t.moeda, tipo: t.tipo, custoFixo: Number(t.custoFixo), custoPorKm: Number(t.custoPorKm), custoPorMin: Number(t.custoPorMin) }))

    return NextResponse.json({ meios, parceiros, tarifas })
  } catch (error) {
    console.error('Erro ao listar transportes:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

