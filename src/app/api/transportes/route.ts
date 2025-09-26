import { NextRequest, NextResponse } from 'next/server'

// Lista meios de transporte disponíveis e opções de parceiros/entrada manual
export async function GET(_request: NextRequest) {
  try {
    // Fonte única de verdade para os meios exibidos no app
    const meios = [
      { id: 'UBER', label: 'Uber/Taxi', tipoTransporte: 'taxi' },
      { id: 'METRO', label: 'Metrô', tipoTransporte: 'transit' },
      { id: 'ONIBUS', label: 'Ônibus', tipoTransporte: 'transit' },
      { id: 'A_PE', label: 'A pé', tipoTransporte: 'walking' },
      { id: 'CARRO', label: 'Carro', tipoTransporte: 'driving' },
      { id: 'TRANSITO', label: 'Transporte público', tipoTransporte: 'transit' },
      { id: 'MANUAL', label: 'Outro (manual)', tipoTransporte: 'manual' }
    ]

    // Parceiros de transporte (placeholder: ajustar conforme integrações futuras)
    const parceiros = [
      // Ex.: { id: 'UBER', nome: 'Uber', tipos: ['UBER'] }
    ]

    return NextResponse.json({ meios, parceiros })
  } catch (error) {
    console.error('Erro ao listar transportes:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

