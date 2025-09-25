import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { updateRoteiroSchema } from '@/lib/schemas'

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const roteiro = await prisma.roteiro.findUnique({
      where: {
        id: params.id
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
        ingressos: true
      }
    })

    if (!roteiro) {
      return NextResponse.json(
        { error: 'Roteiro não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(roteiro)
  } catch (error) {
    console.error('Erro ao buscar roteiro:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Verificar se o roteiro pertence ao usuário
    const roteiroExistente = await prisma.roteiro.findUnique({
      where: { id: params.id },
      select: { usuarioId: true }
    })

    if (!roteiroExistente || roteiroExistente.usuarioId !== session.user.id) {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      )
    }

    const body = await request.json()
    
    // Validar dados com Zod
    const validatedData = updateRoteiroSchema.parse(body)

    const roteiro = await prisma.roteiro.update({
      where: { id: params.id },
      data: {
        ...(validatedData.titulo && { titulo: validatedData.titulo }),
        ...(validatedData.descricao !== undefined && { descricao: validatedData.descricao }),
        ...(validatedData.destino && { destino: validatedData.destino }),
        ...(validatedData.dataInicio && { dataInicio: validatedData.dataInicio }),
        ...(validatedData.dataFim && { dataFim: validatedData.dataFim }),
        ...(validatedData.categoria && { categoria: validatedData.categoria }),
        ...(validatedData.orcamento !== undefined && { orcamento: validatedData.orcamento }),
        ...(validatedData.publico !== undefined && { publico: validatedData.publico })
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
        ingressos: true
      }
    })

    return NextResponse.json(roteiro)
  } catch (error: any) {
    console.error('Erro ao atualizar roteiro:', error)
    
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

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Verificar se o roteiro pertence ao usuário
    const roteiroExistente = await prisma.roteiro.findUnique({
      where: { id: params.id },
      select: { usuarioId: true }
    })

    if (!roteiroExistente || roteiroExistente.usuarioId !== session.user.id) {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      )
    }

    await prisma.roteiro.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Roteiro deletado com sucesso' })
  } catch (error) {
    console.error('Erro ao deletar roteiro:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}