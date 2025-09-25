import { NextRequest, NextResponse } from 'next/server'
import { retrieveCheckoutSession } from '@/lib/stripe'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID não fornecido' },
        { status: 400 }
      )
    }

    const session = await retrieveCheckoutSession(sessionId)
    
    return NextResponse.json(session)
  } catch (error) {
    console.error('Error retrieving session:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}