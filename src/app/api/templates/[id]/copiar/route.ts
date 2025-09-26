import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createRoteiroSchema } from '@/lib/schemas'

// Copiar template para criar roteiro
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
    
    // Buscar template
    const template = await prisma.templateRoteiro.findUnique({
      where: { id: params.id },
      include: {
        roteiros: {
          where: { usuarioId: session.user.id },
          select: { id: true }
        }
      }
    })

    if (!template) {
      return NextResponse.json(
        { error: 'Template não encontrado' },
        { status: 404 }
      )
    }

    if (!template.isPublico) {
      return NextResponse.json(
        { error: 'Template não é público' },
        { status: 403 }
      )
    }

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

    // Validar dados do roteiro (datas obrigatórias)
    const roteiroData = {
      titulo: body.titulo || `${template.titulo} - Minha Viagem`,
      descricao: body.descricao || template.descricao || `Roteiro baseado no template: ${template.titulo}`,
      destino: template.destino,
      dataInicio: new Date(body.dataInicio),
      dataFim: new Date(body.dataFim),
      categoria: template.categoria,
      publico: false, // Por padrão, roteiros copiados são privados
      orcamento: body.orcamento || template.custoEstimado
    }

    const validatedData = createRoteiroSchema.parse(roteiroData)

    // Criar roteiro baseado no template
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
        custoEstimado: template.custoEstimado,
        duracaoEstimada: template.duracaoDias * 24 * 60, // converter dias para minutos
        templateSourceId: template.id,
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

    // Incrementar contador de uso do template
    await prisma.templateRoteiro.update({
      where: { id: template.id },
      data: {
        // Aqui poderíamos adicionar um campo de contador se necessário
      }
    })

    return NextResponse.json({
      roteiro,
      message: 'Roteiro criado com sucesso a partir do template'
    }, { status: 201 })
  } catch (error: any) {
    console.error('Erro ao copiar template:', error)
    
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