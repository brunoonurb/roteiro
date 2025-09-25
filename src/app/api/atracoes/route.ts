import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createAtracaoSchema, searchAtracaoSchema } from '@/lib/schemas'

// Buscar atrações
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validar parâmetros de busca
    const searchData = {
      query: searchParams.get('query') || undefined,
      categoria: searchParams.get('categoria') || undefined,
      parceiro: searchParams.get('parceiro') || undefined,
      precoMin: searchParams.get('precoMin') ? parseFloat(searchParams.get('precoMin')!) : undefined,
      precoMax: searchParams.get('precoMax') ? parseFloat(searchParams.get('precoMax')!) : undefined,
      latitude: searchParams.get('latitude') ? parseFloat(searchParams.get('latitude')!) : undefined,
      longitude: searchParams.get('longitude') ? parseFloat(searchParams.get('longitude')!) : undefined,
      raio: searchParams.get('raio') ? parseFloat(searchParams.get('raio')!) : undefined,
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '20')
    }

    const validatedSearch = searchAtracaoSchema.parse(searchData)

    // Construir where clause
    let whereClause: any = {
      ativo: true
    }

    if (validatedSearch.categoria) {
      whereClause.categoria = validatedSearch.categoria
    }

    if (validatedSearch.parceiro) {
      whereClause.parceiro = validatedSearch.parceiro
    }

    if (validatedSearch.precoMin !== undefined || validatedSearch.precoMax !== undefined) {
      whereClause.preco = {}
      if (validatedSearch.precoMin !== undefined) {
        whereClause.preco.gte = validatedSearch.precoMin
      }
      if (validatedSearch.precoMax !== undefined) {
        whereClause.preco.lte = validatedSearch.precoMax
      }
    }

    if (validatedSearch.query) {
      whereClause.OR = [
        { nome: { contains: validatedSearch.query, mode: 'insensitive' } },
        { descricao: { contains: validatedSearch.query, mode: 'insensitive' } },
        { endereco: { contains: validatedSearch.query, mode: 'insensitive' } }
      ]
    }

    // Filtro por proximidade geográfica
    if (validatedSearch.latitude && validatedSearch.longitude && validatedSearch.raio) {
      // Usar fórmula de Haversine para calcular distância
      // Por simplicidade, vamos usar um filtro aproximado por coordenadas
      const latRange = validatedSearch.raio / 111 // aproximadamente 111km por grau de latitude
      const lngRange = validatedSearch.raio / (111 * Math.cos(validatedSearch.latitude * Math.PI / 180))

      whereClause.AND = [
        { latitude: { gte: validatedSearch.latitude - latRange, lte: validatedSearch.latitude + latRange } },
        { longitude: { gte: validatedSearch.longitude - lngRange, lte: validatedSearch.longitude + lngRange } }
      ]
    }

    // Calcular offset para paginação
    const skip = (validatedSearch.page - 1) * validatedSearch.limit

    // Buscar atrações com contagem total
    const [atracoes, total] = await Promise.all([
      prisma.atracao.findMany({
        where: whereClause,
        include: {
          avaliacoes: {
            select: {
              nota: true
            }
          },
          _count: {
            select: {
              avaliacoes: true,
              ingressos: true
            }
          }
        },
        orderBy: [
          { avaliacaoMedia: 'desc' },
          { nome: 'asc' }
        ],
        skip,
        take: validatedSearch.limit
      }),
      prisma.atracao.count({ where: whereClause })
    ])

    return NextResponse.json({
      atracoes,
      pagination: {
        page: validatedSearch.page,
        limit: validatedSearch.limit,
        total,
        pages: Math.ceil(total / validatedSearch.limit)
      }
    })
  } catch (error: any) {
    console.error('Erro ao buscar atrações:', error)
    
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

// Criar nova atração (apenas admins)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    // Verificar se o usuário é admin
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem criar atrações.' },
        { status: 403 }
      )
    }

    const body = await request.json()
    
    // Validar dados com Zod
    const validatedData = createAtracaoSchema.parse(body)
    
    const atracao = await prisma.atracao.create({
      data: {
        nome: validatedData.nome,
        descricao: validatedData.descricao,
        categoria: validatedData.categoria,
        preco: validatedData.preco,
        moeda: validatedData.moeda,
        latitude: validatedData.latitude,
        longitude: validatedData.longitude,
        endereco: validatedData.endereco,
        parceiro: validatedData.parceiro,
        linkAfiliado: validatedData.linkAfiliado,
        duracaoEstimada: validatedData.duracaoEstimada,
        ativo: true
      },
      include: {
        _count: {
          select: {
            avaliacoes: true,
            ingressos: true
          }
        }
      }
    })

    return NextResponse.json(atracao, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao criar atração:', error)
    
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