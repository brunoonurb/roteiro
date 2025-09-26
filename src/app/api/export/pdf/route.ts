import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

// Extend jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

// Export roteiro to PDF
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
    const { roteiroId, includeMap = false } = body

    if (!roteiroId) {
      return NextResponse.json(
        { error: 'ID do roteiro é obrigatório' },
        { status: 400 }
      )
    }

    // Buscar roteiro completo
    const roteiro = await prisma.roteiro.findFirst({
      where: {
        id: roteiroId,
        usuarioId: session.user.id
      },
      include: {
        usuario: {
          select: {
            name: true,
            email: true
          }
        },
        dias: {
          include: {
            atracoes: {
              include: {
                atracao: {
                  include: {
                    _count: {
                      select: {
                        avaliacoes: true
                      }
                    }
                  }
                }
              },
              orderBy: {
                ordem: 'asc'
              }
            }
          },
          orderBy: {
            ordem: 'asc'
          }
        },
        ingressos: {
          include: {
            atracao: {
              select: {
                nome: true
              }
            }
          }
        },
        _count: {
          select: {
            avaliacoes: true
          }
        }
      }
    })

    if (!roteiro) {
      return NextResponse.json(
        { error: 'Roteiro não encontrado' },
        { status: 404 }
      )
    }

    // Criar PDF
    const doc = new jsPDF()
    
    // Configurações do PDF
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - (margin * 2)
    let yPosition = margin

    // Título
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(roteiro.titulo, margin, yPosition)
    yPosition += 15

    // Informações básicas
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    
    const infoLines = [
      `Destino: ${roteiro.destino}`,
      `Período: ${roteiro.dataInicio.toLocaleDateString('pt-BR')} a ${roteiro.dataFim.toLocaleDateString('pt-BR')}`,
      `Categoria: ${roteiro.categoria}`,
      `Criado por: ${roteiro.usuario.name}`,
      `Criado em: ${roteiro.criadoEm.toLocaleDateString('pt-BR')}`
    ]

    infoLines.forEach(line => {
      doc.text(line, margin, yPosition)
      yPosition += 7
    })

    yPosition += 10

    // Descrição
    if (roteiro.descricao) {
      doc.setFont('helvetica', 'bold')
      doc.text('Descrição:', margin, yPosition)
      yPosition += 7
      
      doc.setFont('helvetica', 'normal')
      const descLines = doc.splitTextToSize(roteiro.descricao, contentWidth)
      descLines.forEach((line: string) => {
        doc.text(line, margin, yPosition)
        yPosition += 7
      })
      yPosition += 10
    }

    // Resumo financeiro
    if (roteiro.orcamento || roteiro.custoEstimado) {
      doc.setFont('helvetica', 'bold')
      doc.text('Resumo Financeiro:', margin, yPosition)
      yPosition += 7
      
      doc.setFont('helvetica', 'normal')
      if (roteiro.orcamento) {
        doc.text(`Orçamento: R$ ${roteiro.orcamento.toFixed(2)}`, margin, yPosition)
        yPosition += 7
      }
      if (roteiro.custoEstimado) {
        doc.text(`Custo Estimado: R$ ${roteiro.custoEstimado.toFixed(2)}`, margin, yPosition)
        yPosition += 7
      }
      yPosition += 10
    }

    // Dias do roteiro
    doc.setFont('helvetica', 'bold')
    doc.text('Itinerário Detalhado:', margin, yPosition)
    yPosition += 10

    roteiro.dias.forEach((dia, index) => {
      // Cabeçalho do dia
      doc.setFont('helvetica', 'bold')
      doc.text(`Dia ${dia.ordem} - ${dia.data.toLocaleDateString('pt-BR')}`, margin, yPosition)
      yPosition += 7

      if (dia.atracoes.length === 0) {
        doc.setFont('helvetica', 'normal')
        doc.text('Nenhuma atração agendada', margin + 10, yPosition)
        yPosition += 7
      } else {
        // Tabela de atrações
        const tableData = dia.atracoes.map(atracaoDia => [
          atracaoDia.horario || '--',
          atracaoDia.atracao.nome,
          atracaoDia.atracao.categoria,
          atracaoDia.atracao.preco ? `R$ ${atracaoDia.atracao.preco.toFixed(2)}` : '--',
          atracaoDia.atracao._count.avaliacoes > 0 ? `${atracaoDia.atracao.avaliacaoMedia}/5` : '--'
        ])

        doc.autoTable({
          startY: yPosition,
          head: [['Horário', 'Atração', 'Categoria', 'Preço', 'Avaliação']],
          body: tableData,
          styles: {
            fontSize: 8,
            cellPadding: 3
          },
          headStyles: {
            fillColor: [66, 139, 202],
            textColor: 255,
            fontStyle: 'bold'
          },
          margin: { left: margin, right: margin }
        })

        yPosition = (doc as any).lastAutoTable.finalY + 10
      }

      // Quebra de página se necessário
      if (yPosition > 250) {
        doc.addPage()
        yPosition = margin
      }
    })

    // Ingressos
    if (roteiro.ingressos.length > 0) {
      doc.setFont('helvetica', 'bold')
      doc.text('Ingressos:', margin, yPosition)
      yPosition += 7

      const ingressosData = roteiro.ingressos.map(ingresso => [
        ingresso.codigo,
        ingresso.atracao.nome,
        ingresso.dataValidade.toLocaleDateString('pt-BR'),
        ingresso.status,
        ingresso.preco ? `R$ ${ingresso.preco.toFixed(2)}` : '--'
      ])

      doc.autoTable({
        startY: yPosition,
        head: [['Código', 'Atração', 'Validade', 'Status', 'Preço']],
        body: ingressosData,
        styles: {
          fontSize: 8,
          cellPadding: 3
        },
        headStyles: {
          fillColor: [92, 184, 92],
          textColor: 255,
          fontStyle: 'bold'
        },
        margin: { left: margin, right: margin }
      })
    }

    // Footer
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.text(
        `Página ${i} de ${pageCount} - Gerado em ${new Date().toLocaleString('pt-BR')}`,
        margin,
        doc.internal.pageSize.getHeight() - 10
      )
    }

    // Gerar buffer do PDF
    const pdfBuffer = doc.output('arraybuffer')
    
    // Retornar PDF como response
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="roteiro-${roteiro.titulo.replace(/[^a-zA-Z0-9]/g, '-')}.pdf"`,
        'Content-Length': pdfBuffer.byteLength.toString()
      }
    })

  } catch (error: any) {
    console.error('Erro ao exportar PDF:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}