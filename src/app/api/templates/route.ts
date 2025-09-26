import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createTemplateRoteiroSchema } from '@/lib/schemas'

// Buscar templates públicos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')
    const destino = searchParams.get('destino')
    const duracaoMin = searchParams.get('duracaoMin')
    const duracaoMax = searchParams.get('duracaoMax')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    let whereClause: any = {
      isPublico: true
    }

    if (categoria) {
      whereClause.categoria = categoria
    }

    if (destino) {
      whereClause.destino = {
        contains: destino,
        mode: 'insensitive'
      }
    }

    if (duracaoMin || duracaoMax) {
      whereClause.duracaoDias = {}
      if (duracaoMin) {
        whereClause.duracaoDias.gte = parseInt(duracaoMin)
      }
      if (duracaoMax) {
        whereClause.duracaoDias.lte = parseInt(duracaoMax)
      }
    }

    const skip = (page - 1) * limit

    const [templates, total] = await Promise.all([
      prisma.templateRoteiro.findMany({
        where: whereClause,
        include: {
          autor: {
            select: {
              id: true,
              name: true,
              image: true
            }
          },
          _count: {
            select: {
              roteiros: true // Contar quantos roteiros foram criados a partir deste template
            }
          }
        },
        orderBy: [
          { _count: { roteiros: 'desc' } }, // Mais populares primeiro
          { criadoEm: 'desc' }
        ],
        skip,
        take: limit
      }),
      prisma.templateRoteiro.count({ where: whereClause })
    ])

    return NextResponse.json({
      templates,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Erro ao buscar templates:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Criar template
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
    const validatedData = createTemplateRoteiroSchema.parse(body)

    const template = await prisma.templateRoteiro.create({
      data: {
        titulo: validatedData.titulo,
        descricao: validatedData.descricao,
        destino: validatedData.destino,
        categoria: validatedData.categoria,
        duracaoDias: validatedData.duracaoDias,
        custoEstimado: validatedData.custoEstimado,
        moeda: validatedData.moeda,
        isPublico: validatedData.isPublico,
        autorId: session.user.id
      },
      include: {
        autor: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    })

    return NextResponse.json(template, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao criar template:', error)
    
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