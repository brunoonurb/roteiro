import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: {
    id: string
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Buscar o roteiro original
    const roteiroOriginal = await prisma.roteiro.findUnique({
      where: { id: params.id },
      include: {
        usuario: {
          select: {
            id: true,
            name: true
          }
        },
        dias: {
          include: {
            atracoes: {
              include: {
                atracao: true
              }
            }
          }
        }
      }
    })

    if (!roteiroOriginal) {
      return NextResponse.json(
        { error: 'Roteiro não encontrado' },
        { status: 404 }
      )
    }

    if (!roteiroOriginal.publico) {
      return NextResponse.json(
        { error: 'Roteiro não é público' },
        { status: 403 }
      )
    }

    // Criar uma cópia do roteiro
    const roteiroCopiado = await prisma.roteiro.create({
      data: {
        titulo: `${roteiroOriginal.titulo} (Cópia)`,
        descricao: roteiroOriginal.descricao ? 
          `${roteiroOriginal.descricao}\n\nRoteiro copiado de ${roteiroOriginal.usuario.name}` : 
          `Roteiro copiado de ${roteiroOriginal.usuario.name}`,
        destino: roteiroOriginal.destino,
        dataInicio: roteiroOriginal.dataInicio,
        dataFim: roteiroOriginal.dataFim,
        categoria: roteiroOriginal.categoria,
        orcamento: roteiroOriginal.orcamento,
        publico: false, // Cópia é privada por padrão
        usuarioId: session.user.id
      },
      include: {
        usuario: {
          select: {
            id: true,
            name: true,
            image: true
          }
        }
      }
    })

    return NextResponse.json(roteiroCopiado, { status: 201 })
  } catch (error) {
    console.error('Erro ao copiar roteiro:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}