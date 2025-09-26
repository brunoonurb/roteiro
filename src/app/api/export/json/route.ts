import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// Export user data to JSON
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
    const { includePrivate = false, format = 'complete' } = body

    // Buscar dados do usuário
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        plano: true,
        preferenciasIdioma: true,
        criadoEm: true,
        roteiros: {
          where: includePrivate ? {} : { publico: true },
          include: {
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
            avaliacoes: {
              include: {
                usuario: {
                  select: {
                    name: true
                  }
                }
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
          }
        },
        avaliacoes: {
          include: {
            atracao: {
              select: {
                nome: true
              }
            },
            roteiro: {
              select: {
                titulo: true
              }
            }
          },
          orderBy: {
            criadoEm: 'desc'
          }
        },
        favoritos: {
          include: {
            // Incluir dados básicos do target
          },
          orderBy: {
            criadoEm: 'desc'
          }
        },
        ingressos: {
          include: {
            atracao: {
              select: {
                nome: true,
                categoria: true
              }
            },
            roteiro: {
              select: {
                titulo: true
              }
            }
          },
          orderBy: {
            criadoEm: 'desc'
          }
        },
        consultoriasSolicitadas: {
          include: {
            consultor: {
              select: {
                name: true,
                email: true
              }
            }
          },
          orderBy: {
            criadoEm: 'desc'
          }
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Preparar dados para exportação
    const exportData = {
      metadata: {
        exportedAt: new Date().toISOString(),
        exportedBy: user.email,
        format: format,
        version: '1.0',
        includePrivate: includePrivate
      },
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        plano: user.plano,
        preferenciasIdioma: user.preferenciasIdioma,
        criadoEm: user.criadoEm
      },
      statistics: {
        totalRoteiros: user.roteiros.length,
        totalAvaliacoes: user.avaliacoes.length,
        totalFavoritos: user.favoritos.length,
        totalIngressos: user.ingressos.length,
        totalConsultorias: user.consultoriasSolicitadas.length
      },
      data: {
        roteiros: user.roteiros.map(roteiro => ({
          id: roteiro.id,
          titulo: roteiro.titulo,
          descricao: roteiro.descricao,
          destino: roteiro.destino,
          dataInicio: roteiro.dataInicio,
          dataFim: roteiro.dataFim,
          categoria: roteiro.categoria,
          publico: roteiro.publico,
          orcamento: roteiro.orcamento,
          custoEstimado: roteiro.custoEstimado,
          duracaoEstimada: roteiro.duracaoEstimada,
          visualizacoes: roteiro.visualizacoes,
          criadoEm: roteiro.criadoEm,
          atualizadoEm: roteiro.atualizadoEm,
          dias: roteiro.dias.map(dia => ({
            id: dia.id,
            data: dia.data,
            ordem: dia.ordem,
            atracoes: dia.atracoes.map(atracaoDia => ({
              id: atracaoDia.id,
              horario: atracaoDia.horario,
              tempoEstimado: atracaoDia.tempoEstimado,
              ordem: atracaoDia.ordem,
              observacoes: atracaoDia.observacoes,
              atracao: {
                id: atracaoDia.atracao.id,
                nome: atracaoDia.atracao.nome,
                descricao: atracaoDia.atracao.descricao,
                categoria: atracaoDia.atracao.categoria,
                preco: atracaoDia.atracao.preco,
                moeda: atracaoDia.atracao.moeda,
                latitude: atracaoDia.atracao.latitude,
                longitude: atracaoDia.atracao.longitude,
                endereco: atracaoDia.atracao.endereco,
                parceiro: atracaoDia.atracao.parceiro,
                linkAfiliado: atracaoDia.atracao.linkAfiliado,
                duracaoEstimada: atracaoDia.atracao.duracaoEstimada,
                avaliacaoMedia: atracaoDia.atracao.avaliacaoMedia,
                totalAvaliacoes: atracaoDia.atracao._count.avaliacoes
              }
            }))
          })),
          ingressos: roteiro.ingressos.map(ingresso => ({
            id: ingresso.id,
            codigo: ingresso.codigo,
            qrCode: ingresso.qrCode,
            dataValidade: ingresso.dataValidade,
            preco: ingresso.preco,
            moeda: ingresso.moeda,
            status: ingresso.status,
            observacoes: ingresso.observacoes,
            atracao: ingresso.atracao.nome
          })),
          avaliacoes: roteiro.avaliacoes.map(avaliacao => ({
            id: avaliacao.id,
            nota: avaliacao.nota,
            comentario: avaliacao.comentario,
            dataVisita: avaliacao.dataVisita,
            util: avaliacao.util,
            naoUtil: avaliacao.naoUtil,
            criadoEm: avaliacao.criadoEm,
            usuario: avaliacao.usuario.name
          })),
          estatisticas: roteiro._count
        })),
        avaliacoes: user.avaliacoes.map(avaliacao => ({
          id: avaliacao.id,
          nota: avaliacao.nota,
          comentario: avaliacao.comentario,
          dataVisita: avaliacao.dataVisita,
          util: avaliacao.util,
          naoUtil: avaliacao.naoUtil,
          criadoEm: avaliacao.criadoEm,
          atracao: avaliacao.atracao?.nome,
          roteiro: avaliacao.roteiro?.titulo
        })),
        favoritos: user.favoritos.map(favorito => ({
          id: favorito.id,
          targetType: favorito.targetType,
          targetId: favorito.targetId,
          criadoEm: favorito.criadoEm
        })),
        ingressos: user.ingressos.map(ingresso => ({
          id: ingresso.id,
          codigo: ingresso.codigo,
          qrCode: ingresso.qrCode,
          dataValidade: ingresso.dataValidade,
          preco: ingresso.preco,
          moeda: ingresso.moeda,
          status: ingresso.status,
          observacoes: ingresso.observacoes,
          atracao: {
            nome: ingresso.atracao.nome,
            categoria: ingresso.atracao.categoria
          },
          roteiro: ingresso.roteiro?.titulo
        })),
        consultorias: user.consultoriasSolicitadas.map(consultoria => ({
          id: consultoria.id,
          destino: consultoria.destino,
          dataInicio: consultoria.dataInicio,
          dataFim: consultoria.dataFim,
          orcamento: consultoria.orcamento,
          preferencias: consultoria.preferencias,
          status: consultoria.status,
          preco: consultoria.preco,
          criadoEm: consultoria.criadoEm,
          consultor: consultoria.consultor?.name
        }))
      }
    }

    // Criar nome do arquivo
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `roteiros-export-${user.name?.replace(/[^a-zA-Z0-9]/g, '-') || 'user'}-${timestamp}.json`

    // Retornar JSON como download
    return new NextResponse(JSON.stringify(exportData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    })

  } catch (error: any) {
    console.error('Erro ao exportar dados:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}