import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createRoteiroSchema, searchRoteiroSchema } from '@/lib/schemas'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validar parâmetros de busca
    const searchData = {
      query: searchParams.get('query') || undefined,
      categoria: searchParams.get('categoria') || undefined,
      destino: searchParams.get('destino') || undefined,
      publico: searchParams.get('publico') === 'true' ? true : undefined,
      usuarioId: searchParams.get('usuarioId') || undefined,
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '20')
    }

    const validatedSearch = searchRoteiroSchema.parse(searchData)

    // Construir where clause
    let whereClause: any = {}

    if (validatedSearch.publico !== undefined) {
      whereClause.publico = validatedSearch.publico
    }

    if (validatedSearch.usuarioId) {
      whereClause.usuarioId = validatedSearch.usuarioId
    }

    if (validatedSearch.categoria) {
      whereClause.categoria = validatedSearch.categoria
    }

    if (validatedSearch.destino) {
      whereClause.destino = {
        contains: validatedSearch.destino,
        mode: 'insensitive'
      }
    }

    if (validatedSearch.query) {
      whereClause.OR = [
        { titulo: { contains: validatedSearch.query, mode: 'insensitive' } },
        { descricao: { contains: validatedSearch.query, mode: 'insensitive' } },
        { destino: { contains: validatedSearch.query, mode: 'insensitive' } }
      ]
    }

    if (validatedSearch.dataInicio) {
      whereClause.dataInicio = {
        gte: validatedSearch.dataInicio
      }
    }

    if (validatedSearch.dataFim) {
      whereClause.dataFim = {
        lte: validatedSearch.dataFim
      }
    }

    // Calcular offset para paginação
    const skip = (validatedSearch.page - 1) * validatedSearch.limit

    // Buscar roteiros com contagem total
    const [roteiros, total] = await Promise.all([
      prisma.roteiro.findMany({
        where: whereClause,
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
        },
        orderBy: {
          criadoEm: 'desc'
        },
        skip,
        take: validatedSearch.limit
      }),
      prisma.roteiro.count({ where: whereClause })
    ])

    return NextResponse.json({
      roteiros,
      pagination: {
        page: validatedSearch.page,
        limit: validatedSearch.limit,
        total,
        pages: Math.ceil(total / validatedSearch.limit)
      }
    })
  } catch (error: any) {
    console.error('Erro ao buscar roteiros:', error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Parâmetros de busca inválidos', details: error.errors },
        { status: 400 }
      )
    }

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
    const validatedData = createRoteiroSchema.parse(body)

    // Verificar limites do plano do usuário
    if (session.user.plano === 'GRATUITO') {
      const roteiroCount = await prisma.roteiro.count({
        where: { usuarioId: session.user.id }
      })

      if (roteiroCount >= 3) {
        return NextResponse.json(
          { error: 'Limite de roteiros atingido. Faça upgrade para Premium.' },
          { status: 403 }
        )
      }
    }

    const roteiro = await prisma.roteiro.create({
      data: {
        titulo: validatedData.titulo,
        descricao: validatedData.descricao,
        destino: validatedData.destino,
        dataInicio: validatedData.dataInicio,
        dataFim: validatedData.dataFim,
        categoria: validatedData.categoria,
        publico: validatedData.publico,
        orcamento: validatedData.orcamento,
        usuarioId: session.user.id
      },
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
                atracao: true
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
    })

    return NextResponse.json(roteiro, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao criar roteiro:', error)
    
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