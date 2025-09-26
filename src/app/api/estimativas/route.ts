import { NextRequest, NextResponse } from 'next/server'
import { 
  estimarDuracaoRoteiro, 
  estimarCustoRoteiro, 
  otimizarRota,
  formatarDuracao,
  formatarCusto 
} from '@/lib/estimativas'

// Calcular estimativas para um roteiro
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      atracoes, 
      tipoTransporte = 'walking',
      otimizar = false,
      pontoInicial 
    } = body

    if (!atracoes || !Array.isArray(atracoes)) {
      return NextResponse.json(
        { error: 'Lista de atrações é obrigatória' },
        { status: 400 }
      )
    }

    // Validar atrações
    const atracoesValidas = atracoes.map((atracao: any, index: number) => {
      if (!atracao.categoria) {
        throw new Error(`Atração ${index + 1} deve ter categoria`)
      }
      
      return {
        id: atracao.id || `atracao-${index}`,
        categoria: atracao.categoria,
        duracaoCustomizada: atracao.duracaoCustomizada,
        custoCustomizado: atracao.custoCustomizado,
        latitude: atracao.latitude,
        longitude: atracao.longitude
      }
    })

    // Otimizar rota se solicitado
    let atracoesOtimizadas = atracoesValidas
    if (otimizar) {
      atracoesOtimizadas = otimizarRota(atracoesValidas, pontoInicial)
    }

    // Calcular estimativas
    const duracaoEstimada = estimarDuracaoRoteiro(atracoesOtimizadas, tipoTransporte)
    const custoEstimado = estimarCustoRoteiro(atracoesOtimizadas, tipoTransporte)

    // Formatar resultados
    const resultado = {
      duracao: {
        total: duracaoEstimada.duracaoTotal,
        atracoes: duracaoEstimada.duracaoAtracoes,
        deslocamento: duracaoEstimada.duracaoDeslocamento,
        formatado: {
          total: formatarDuracao(duracaoEstimada.duracaoTotal),
          atracoes: formatarDuracao(duracaoEstimada.duracaoAtracoes),
          deslocamento: formatarDuracao(duracaoEstimada.duracaoDeslocamento)
        },
        detalhes: duracaoEstimada.detalhes
      },
      custo: {
        total: custoEstimado.custoTotal,
        atracoes: custoEstimado.custoAtracoes,
        deslocamento: custoEstimado.custoDeslocamento,
        formatado: {
          total: formatarCusto(custoEstimado.custoTotal),
          atracoes: formatarCusto(custoEstimado.custoAtracoes),
          deslocamento: formatarCusto(custoEstimado.custoDeslocamento)
        },
        detalhes: custoEstimado.detalhes
      },
      otimizacao: {
        foiOtimizada: otimizar,
        atracoes: atracoesOtimizadas.map((atracao, index) => ({
          ...atracao,
          ordem: index + 1,
          distanciaAnterior: atracao.distanciaAnterior
        }))
      },
      recomendacoes: gerarRecomendacoes(duracaoEstimada, custoEstimado, tipoTransporte)
    }

    return NextResponse.json(resultado)
  } catch (error: any) {
    console.error('Erro ao calcular estimativas:', error)
    return NextResponse.json(
      { error: error.message || 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Função para gerar recomendações baseadas nas estimativas
function gerarRecomendacoes(
  duracao: any,
  custo: any,
  tipoTransporte: string
): string[] {
  const recomendacoes: string[] = []

  // Recomendações de duração
  if (duracao.duracaoTotal > 480) { // Mais de 8 horas
    recomendacoes.push('Considerando dividir o roteiro em 2 dias para uma experiência mais confortável')
  } else if (duracao.duracaoTotal < 120) { // Menos de 2 horas
    recomendacoes.push('Você pode adicionar mais atrações para aproveitar melhor o dia')
  }

  // Recomendações de custo
  if (custo.custoTotal > 500) {
    recomendacoes.push('Orçamento alto detectado. Considere alternativas gratuitas ou mais econômicas')
  } else if (custo.custoTotal < 50) {
    recomendacoes.push('Roteiro muito econômico! Ótimo para viajantes com orçamento limitado')
  }

  // Recomendações de transporte
  if (tipoTransporte === 'walking' && duracao.duracaoDeslocamento > 60) {
    recomendacoes.push('Muitos deslocamentos a pé. Considere transporte público ou carro')
  }

  if (tipoTransporte === 'driving' && duracao.duracaoDeslocamento > 30) {
    recomendacoes.push('Considere o trânsito local para estimar tempo adicional')
  }

  // Recomendações de distribuição
  const proporcaoDeslocamento = duracao.duracaoDeslocamento / duracao.duracaoTotal
  if (proporcaoDeslocamento > 0.3) {
    recomendacoes.push('Muito tempo gasto em deslocamentos. Otimize a rota ou escolha atrações mais próximas')
  }

  return recomendacoes
}

// Calcular estimativas para uma única atração
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')
    const duracaoCustomizada = searchParams.get('duracaoCustomizada')
    const custoCustomizado = searchParams.get('custoCustomizado')

    if (!categoria) {
      return NextResponse.json(
        { error: 'Categoria é obrigatória' },
        { status: 400 }
      )
    }

    const { 
      estimarDuracaoAtracao, 
      estimarCustoAtracao,
      formatarDuracao,
      formatarCusto 
    } = await import('@/lib/estimativas')

    const duracao = estimarDuracaoAtracao(
      categoria, 
      duracaoCustomizada ? parseInt(duracaoCustomizada) : undefined
    )
    
    const custo = estimarCustoAtracao(
      categoria, 
      custoCustomizado ? parseFloat(custoCustomizado) : undefined
    )

    return NextResponse.json({
      categoria,
      duracao: {
        minutos: duracao,
        formatado: formatarDuracao(duracao)
      },
      custo: {
        valor: custo,
        formatado: formatarCusto(custo)
      }
    })
  } catch (error: any) {
    console.error('Erro ao calcular estimativas:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}