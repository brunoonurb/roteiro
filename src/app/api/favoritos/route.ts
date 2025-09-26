import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createFavoritoSchema } from '@/lib/schemas'

// Buscar favoritos do usuário
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
    const targetType = searchParams.get('targetType') // ITINERARY ou PLACE
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    let whereClause: any = {
      usuarioId: session.user.id
    }

    if (targetType) {
      whereClause.targetType = targetType
    }

    const skip = (page - 1) * limit

    const [favoritos, total] = await Promise.all([
      prisma.favorito.findMany({
        where: whereClause,
        include: {
          // Incluir dados do target baseado no tipo
          ...(targetType === 'ITINERARY' && {
            roteiro: {
              include: {
                usuario: {
                  select: {
                    id: true,
                    name: true,
                    image: true
                  }
                },
                dias: {
                  include: {
                    atracoes: {
                      include: {
                        atracao: {
                          select: {
                            nome: true,
                            categoria: true,
                            preco: true,
                            moeda: true
                          }
                        }
                      }
                    }
                  },
                  orderBy: {
                    ordem: 'asc'
                  }
                },
                _count: {
                  select: {
                    ingressos: true,
                    avaliacoes: true,
                    comentarios: true
                  }
                }
              }
            }
          }),
          ...(targetType === 'PLACE' && {
            atracao: {
              include: {
                _count: {
                  select: {
                    avaliacoes: true,
                    ingressos: true
                  }
                }
              }
            }
          })
        },
        orderBy: {
          criadoEm: 'desc'
        },
        skip,
        take: limit
      }),
      prisma.favorito.count({ where: whereClause })
    ])

    return NextResponse.json({
      favoritos,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Adicionar/remover favorito
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
    const validatedData = createFavoritoSchema.parse(body)

    // Verificar se já existe
    const favoritoExistente = await prisma.favorito.findUnique({
      where: {
        usuarioId_targetType_targetId: {
          usuarioId: session.user.id,
          targetType: validatedData.targetType,
          targetId: validatedData.targetId
        }
      }
    })

    if (favoritoExistente) {
      // Remover favorito
      await prisma.favorito.delete({
        where: {
          id: favoritoExistente.id
        }
      })

      return NextResponse.json({
        message: 'Favorito removido',
        isFavorito: false
      })
    } else {
      // Adicionar favorito
      const favorito = await prisma.favorito.create({
        data: {
          usuarioId: session.user.id,
          targetType: validatedData.targetType,
          targetId: validatedData.targetId
        }
      })

      return NextResponse.json({
        message: 'Favorito adicionado',
        isFavorito: true,
        favorito
      }, { status: 201 })
    }
  } catch (error: any) {
    console.error('Erro ao gerenciar favorito:', error)
    
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

// Verificar se item é favorito
export async function HEAD(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const targetType = searchParams.get('targetType')
    const targetId = searchParams.get('targetId')

    if (!targetType || !targetId) {
      return NextResponse.json(
        { error: 'targetType e targetId são obrigatórios' },
        { status: 400 }
      )
    }

    const favorito = await prisma.favorito.findUnique({
      where: {
        usuarioId_targetType_targetId: {
          usuarioId: session.user.id,
          targetType: targetType as 'ITINERARY' | 'PLACE',
          targetId
        }
      }
    })

    return NextResponse.json({
      isFavorito: !!favorito
    })
  } catch (error) {
    console.error('Erro ao verificar favorito:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}