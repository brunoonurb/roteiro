import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Get user's roteiros
    const roteiros = await prisma.roteiro.findMany({
      where: {
        usuarioId: session.user.id,
      },
      include: {
        dias: {
          include: {
            atracoes: true
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
      take: 5
    })

    // Calculate stats
    const totalRoteiros = roteiros.length
    const roteirosPublicos = roteiros.filter(r => r.publico).length
    
    // Calculate total atracoes across all roteiros
    const totalAtracoes = roteiros.reduce((total, roteiro) => {
      return total + roteiro.dias.reduce((diaTotal, dia) => {
        return diaTotal + dia.atracoes.length
      }, 0)
    }, 0)

    // Get user's avaliacoes
    const avaliacoes = await prisma.avaliacao.findMany({
      where: {
        usuarioId: session.user.id,
      }
    })

    // Calculate total visualizations from all user's roteiros
    const totalVisualizacoes = roteiros.reduce((total, roteiro) => {
      return total + roteiro.visualizacoes
    }, 0)

    // Count total likes (positive evaluations)
    const totalLikes = avaliacoes.filter(av => av.nota >= 4).length

    // Get total ingressos
    const totalIngressos = await prisma.ingresso.count({
      where: {
        usuarioId: session.user.id
      }
    })

    const stats = {
      totalRoteiros,
      roteirosPublicos,
      totalAtracoes,
      totalVisualizacoes,
      totalLikes,
      totalIngressos,
      totalAvaliacoes: avaliacoes.length,
      roteirosRecentes: roteiros
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}