import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createIngressoSchema } from '@/lib/schemas'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const roteiroId = searchParams.get('roteiroId')
    const status = searchParams.get('status')

    let whereClause: any = {
      usuarioId: session.user.id
    }

    if (roteiroId) {
      whereClause.roteiroId = roteiroId
    }

    if (status) {
      whereClause.status = status
    }

    const ingressos = await prisma.ingresso.findMany({
      where: whereClause,
      include: {
        roteiro: {
          select: {
            id: true,
            titulo: true
          }
        },
        atracao: {
          select: {
            id: true,
            nome: true,
            endereco: true
          }
        }
      },
      orderBy: {
        dataValidade: 'asc'
      }
    })

    return NextResponse.json(ingressos)
  } catch (error) {
    console.error('Erro ao buscar ingressos:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

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
    
    // Validar dados com Zod
    const validatedData = createIngressoSchema.parse(body)

    // Verificar se a atração existe
    const atracao = await prisma.atracao.findUnique({
      where: { id: validatedData.atracaoId }
    })

    if (!atracao) {
      return NextResponse.json(
        { error: 'Atração não encontrada' },
        { status: 404 }
      )
    }

    // Se roteiroId for fornecido, verificar se pertence ao usuário
    if (validatedData.roteiroId) {
      const roteiro = await prisma.roteiro.findUnique({
        where: { id: validatedData.roteiroId },
        select: { usuarioId: true }
      })

      if (!roteiro || roteiro.usuarioId !== session.user.id) {
        return NextResponse.json(
          { error: 'Roteiro não encontrado ou acesso negado' },
          { status: 404 }
        )
      }
    }

    const ingresso = await prisma.ingresso.create({
      data: {
        codigo: validatedData.codigo,
        qrCode: validatedData.qrCode,
        dataValidade: validatedData.dataValidade,
        preco: validatedData.preco,
        moeda: validatedData.moeda,
        status: validatedData.status,
        observacoes: validatedData.observacoes,
        atracaoId: validatedData.atracaoId,
        roteiroId: validatedData.roteiroId,
        usuarioId: session.user.id
      },
      include: {
        roteiro: {
          select: {
            id: true,
            titulo: true
          }
        },
        atracao: {
          select: {
            id: true,
            nome: true,
            endereco: true
          }
        }
      }
    })

    return NextResponse.json(ingresso, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao criar ingresso:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}