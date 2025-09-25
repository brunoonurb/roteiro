import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createCheckoutSession, ConsultoriaData } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const consultoriaData: ConsultoriaData = body

    // Validate required fields
    if (!consultoriaData.destino || !consultoriaData.datas || !consultoriaData.preferencias) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Validate tipo
    if (!['basica', 'premium', 'vip'].includes(consultoriaData.tipo)) {
      return NextResponse.json(
        { error: 'Tipo de consultoria inválido' },
        { status: 400 }
      )
    }

    const { url } = await createCheckoutSession(consultoriaData, session.user.id)
    
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}