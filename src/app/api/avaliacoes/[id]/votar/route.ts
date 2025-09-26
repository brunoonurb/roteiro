import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createVotoAvaliacaoSchema } from '@/lib/schemas'

// Votar em avaliação (útil/não útil)
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = createVotoAvaliacaoSchema.parse({
      ...body,
      avaliacaoId: params.id
    })

    // Verificar se a avaliação existe
    const avaliacao = await prisma.avaliacao.findUnique({
      where: { id: params.id }
    })

    if (!avaliacao) {
      return NextResponse.json(
        { error: 'Avaliação não encontrada' },
        { status: 404 }
      )
    }

    // Verificar se o usuário não está votando na própria avaliação
    if (avaliacao.usuarioId === session.user.id) {
      return NextResponse.json(
        { error: 'Você não pode votar na própria avaliação' },
        { status: 403 }
      )
    }

    // Verificar se já existe voto
    const votoExistente = await prisma.votoAvaliacao.findUnique({
      where: {
        avaliacaoId_usuarioId: {
          avaliacaoId: params.id,
          usuarioId: session.user.id
        }
      }
    })

    let voto
    let utilCount = avaliacao.util
    let naoUtilCount = avaliacao.naoUtil

    if (votoExistente) {
      if (votoExistente.isUtil === validatedData.isUtil) {
        // Remover voto se for o mesmo
        await prisma.votoAvaliacao.delete({
          where: { id: votoExistente.id }
        })

        // Atualizar contadores
        if (validatedData.isUtil) {
          utilCount = Math.max(0, utilCount - 1)
        } else {
          naoUtilCount = Math.max(0, naoUtilCount - 1)
        }

        await prisma.avaliacao.update({
          where: { id: params.id },
          data: {
            util: utilCount,
            naoUtil: naoUtilCount
          }
        })

        return NextResponse.json({
          message: 'Voto removido',
          isUtil: null,
          util: utilCount,
          naoUtil: naoUtilCount
        })
      } else {
        // Atualizar voto existente
        voto = await prisma.votoAvaliacao.update({
          where: { id: votoExistente.id },
          data: { isUtil: validatedData.isUtil }
        })

        // Atualizar contadores (remover voto anterior e adicionar novo)
        if (votoExistente.isUtil) {
          utilCount = Math.max(0, utilCount - 1)
        } else {
          naoUtilCount = Math.max(0, naoUtilCount - 1)
        }

        if (validatedData.isUtil) {
          utilCount += 1
        } else {
          naoUtilCount += 1
        }
      }
    } else {
      // Criar novo voto
      voto = await prisma.votoAvaliacao.create({
        data: {
          avaliacaoId: params.id,
          usuarioId: session.user.id,
          isUtil: validatedData.isUtil
        }
      })

      // Atualizar contadores
      if (validatedData.isUtil) {
        utilCount += 1
      } else {
        naoUtilCount += 1
      }
    }

    // Atualizar contadores na avaliação
    await prisma.avaliacao.update({
      where: { id: params.id },
      data: {
        util: utilCount,
        naoUtil: naoUtilCount
      }
    })

    return NextResponse.json({
      message: votoExistente ? 'Voto atualizado' : 'Voto registrado',
      isUtil: validatedData.isUtil,
      util: utilCount,
      naoUtil: naoUtilCount
    })
  } catch (error: any) {
    console.error('Erro ao votar na avaliação:', error)
    
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

// Verificar voto do usuário
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const voto = await prisma.votoAvaliacao.findUnique({
      where: {
        avaliacaoId_usuarioId: {
          avaliacaoId: params.id,
          usuarioId: session.user.id
        }
      }
    })

    return NextResponse.json({
      isUtil: voto?.isUtil || null,
      hasVoted: !!voto
    })
  } catch (error) {
    console.error('Erro ao verificar voto:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}