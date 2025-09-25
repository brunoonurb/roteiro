import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createAvaliacaoSchema } from '@/lib/schemas'

// Buscar avaliações
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const atracaoId = searchParams.get('atracaoId')
    const roteiroId = searchParams.get('roteiroId')
    const usuarioId = searchParams.get('usuarioId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    let whereClause: any = {}

    if (atracaoId) {
      whereClause.atracaoId = atracaoId
    }

    if (roteiroId) {
      whereClause.roteiroId = roteiroId
    }

    if (usuarioId) {
      whereClause.usuarioId = usuarioId
    }

    const skip = (page - 1) * limit

    const [avaliacoes, total] = await Promise.all([
      prisma.avaliacao.findMany({
        where: whereClause,
        include: {
          usuario: {
            select: {
              id: true,
              name: true,
              image: true
            }
          },
          atracao: {
            select: {
              id: true,
              nome: true
            }
          },
          roteiro: {
            select: {
              id: true,
              titulo: true
            }
          }
        },
        orderBy: {
          criadoEm: 'desc'
        },
        skip,
        take: limit
      }),
      prisma.avaliacao.count({ where: whereClause })
    ])

    return NextResponse.json({
      avaliacoes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Criar nova avaliação
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
    const validatedData = createAvaliacaoSchema.parse(body)

    // Verificar se o usuário já avaliou este item
    const avaliacaoExistente = await prisma.avaliacao.findFirst({
      where: {
        usuarioId: session.user.id,
        ...(validatedData.atracaoId && { atracaoId: validatedData.atracaoId }),
        ...(validatedData.roteiroId && { roteiroId: validatedData.roteiroId })
      }
    })

    if (avaliacaoExistente) {
      return NextResponse.json(
        { error: 'Você já avaliou este item' },
        { status: 409 }
      )
    }

    // Criar avaliação
    const avaliacao = await prisma.avaliacao.create({
      data: {
        nota: validatedData.nota,
        comentario: validatedData.comentario,
        dataVisita: validatedData.dataVisita,
        usuarioId: session.user.id,
        atracaoId: validatedData.atracaoId,
        roteiroId: validatedData.roteiroId
      },
      include: {
        usuario: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        atracao: {
          select: {
            id: true,
            nome: true
          }
        },
        roteiro: {
          select: {
            id: true,
            titulo: true
          }
        }
      }
    })

    // Atualizar média de avaliações da atração ou roteiro
    if (validatedData.atracaoId) {
      const avaliacoes = await prisma.avaliacao.findMany({
        where: { atracaoId: validatedData.atracaoId },
        select: { nota: true }
      })

      const media = avaliacoes.reduce((sum, av) => sum + av.nota, 0) / avaliacoes.length
      
      await prisma.atracao.update({
        where: { id: validatedData.atracaoId },
        data: {
          avaliacaoMedia: media,
          totalAvaliacoes: avaliacoes.length
        }
      })
    }

    return NextResponse.json(avaliacao, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao criar avaliação:', error)
    
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