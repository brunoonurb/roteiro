// Configurações de estimativas por categoria
const categoriaConfigs = {
  CULTURA: {
    duracaoMin: 60, // 1 hora
    duracaoMax: 240, // 4 horas
    duracaoMedia: 120, // 2 horas
    custoMin: 10,
    custoMax: 100,
    custoMedia: 50,
    fatorDeslocamento: 1.2 // 20% a mais para deslocamento
  },
  GASTRONOMIA: {
    duracaoMin: 45, // 45 minutos
    duracaoMax: 180, // 3 horas
    duracaoMedia: 90, // 1.5 horas
    custoMin: 20,
    custoMax: 200,
    custoMedia: 80,
    fatorDeslocamento: 1.1
  },
  AVENTURA: {
    duracaoMin: 120, // 2 horas
    duracaoMax: 480, // 8 horas
    duracaoMedia: 240, // 4 horas
    custoMin: 50,
    custoMax: 500,
    custoMedia: 150,
    fatorDeslocamento: 1.3
  },
  RELAXAMENTO: {
    duracaoMin: 90, // 1.5 horas
    duracaoMax: 360, // 6 horas
    duracaoMedia: 180, // 3 horas
    custoMin: 30,
    custoMax: 300,
    custoMedia: 100,
    fatorDeslocamento: 1.1
  },
  COMPRAS: {
    duracaoMin: 60, // 1 hora
    duracaoMax: 300, // 5 horas
    duracaoMedia: 150, // 2.5 horas
    custoMin: 0, // Pode ser gratuito
    custoMax: 1000,
    custoMedia: 200,
    fatorDeslocamento: 1.2
  },
  PARQUES: {
    duracaoMin: 120, // 2 horas
    duracaoMax: 480, // 8 horas
    duracaoMedia: 240, // 4 horas
    custoMin: 5,
    custoMax: 150,
    custoMedia: 40,
    fatorDeslocamento: 1.2
  }
}

// Função para calcular distância entre dois pontos (Haversine)
export function calcularDistancia(
  lat1: number, 
  lng1: number, 
  lat2: number, 
  lng2: number
): number {
  const R = 6371 // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

// Função para estimar tempo de deslocamento
export function estimarTempoDeslocamento(
  distancia: number, 
  tipoTransporte: 'walking' | 'driving' | 'transit' = 'walking'
): number {
  const velocidades = {
    walking: 5, // km/h
    driving: 30, // km/h (média urbana)
    transit: 20 // km/h (transporte público)
  }

  const velocidade = velocidades[tipoTransporte]
  return Math.round((distancia / velocidade) * 60) // em minutos
}

// Função para estimar custo de deslocamento
export function estimarCustoDeslocamento(
  distancia: number,
  tipoTransporte: 'walking' | 'driving' | 'transit' | 'taxi' = 'walking'
): number {
  const custosPorKm = {
    walking: 0,
    driving: 0.8, // R$ 0,80 por km (gasolina + depreciação)
    transit: 0.15, // R$ 0,15 por km (ônibus/metrô)
    taxi: 3.0 // R$ 3,00 por km
  }

  return Math.round(distancia * custosPorKm[tipoTransporte])
}

// Função para estimar duração de uma atração
export function estimarDuracaoAtracao(
  categoria: string,
  duracaoCustomizada?: number
): number {
  const config = categoriaConfigs[categoria as keyof typeof categoriaConfigs]
  if (!config) return 120 // Padrão de 2 horas

  if (duracaoCustomizada) {
    // Validar se está dentro dos limites
    return Math.max(
      config.duracaoMin,
      Math.min(config.duracaoMax, duracaoCustomizada)
    )
  }

  return config.duracaoMedia
}

// Função para estimar custo de uma atração
export function estimarCustoAtracao(
  categoria: string,
  custoCustomizado?: number
): number {
  const config = categoriaConfigs[categoria as keyof typeof categoriaConfigs]
  if (!config) return 50 // Padrão de R$ 50

  if (custoCustomizado !== undefined) {
    // Validar se está dentro dos limites
    return Math.max(
      config.custoMin,
      Math.min(config.custoMax, custoCustomizado)
    )
  }

  return config.custoMedia
}

// Função para estimar duração total de um roteiro
export function estimarDuracaoRoteiro(
  atracoes: Array<{
    categoria: string
    duracaoCustomizada?: number
    latitude?: number
    longitude?: number
  }>,
  tipoTransporte: 'walking' | 'driving' | 'transit' = 'walking'
): {
  duracaoAtracoes: number
  duracaoDeslocamento: number
  duracaoTotal: number
  detalhes: Array<{
    atracao: string
    duracao: number
    tipo: 'atracao' | 'deslocamento'
  }>
} {
  let duracaoAtracoes = 0
  let duracaoDeslocamento = 0
  const detalhes: Array<{
    atracao: string
    duracao: number
    tipo: 'atracao' | 'deslocamento'
  }> = []

  atracoes.forEach((atracao, index) => {
    // Duração da atração
    const duracaoAtracao = estimarDuracaoAtracao(atracao.categoria, atracao.duracaoCustomizada)
    duracaoAtracoes += duracaoAtracao
    detalhes.push({
      atracao: `Atração ${index + 1}`,
      duracao: duracaoAtracao,
      tipo: 'atracao'
    })

    // Tempo de deslocamento para próxima atração
    if (index < atracoes.length - 1 && 
        atracoes[index + 1].latitude && 
        atracoes[index + 1].longitude &&
        atracao.latitude && 
        atracao.longitude) {
      
      const distancia = calcularDistancia(
        atracao.latitude,
        atracao.longitude,
        atracoes[index + 1].latitude!,
        atracoes[index + 1].longitude!
      )
      
      const tempoDeslocamento = estimarTempoDeslocamento(distancia, tipoTransporte)
      duracaoDeslocamento += tempoDeslocamento
      detalhes.push({
        atracao: `Deslocamento ${index + 1} → ${index + 2}`,
        duracao: tempoDeslocamento,
        tipo: 'deslocamento'
      })
    }
  })

  return {
    duracaoAtracoes,
    duracaoDeslocamento,
    duracaoTotal: duracaoAtracoes + duracaoDeslocamento,
    detalhes
  }
}

// Função para estimar custo total de um roteiro
export function estimarCustoRoteiro(
  atracoes: Array<{
    categoria: string
    custoCustomizado?: number
    latitude?: number
    longitude?: number
  }>,
  tipoTransporte: 'walking' | 'driving' | 'transit' | 'taxi' = 'walking'
): {
  custoAtracoes: number
  custoDeslocamento: number
  custoTotal: number
  detalhes: Array<{
    item: string
    custo: number
    tipo: 'atracao' | 'deslocamento'
  }>
} {
  let custoAtracoes = 0
  let custoDeslocamento = 0
  const detalhes: Array<{
    item: string
    custo: number
    tipo: 'atracao' | 'deslocamento'
  }> = []

  atracoes.forEach((atracao, index) => {
    // Custo da atração
    const custoAtracao = estimarCustoAtracao(atracao.categoria, atracao.custoCustomizado)
    custoAtracoes += custoAtracao
    detalhes.push({
      item: `Atração ${index + 1}`,
      custo: custoAtracao,
      tipo: 'atracao'
    })

    // Custo de deslocamento para próxima atração
    if (index < atracoes.length - 1 && 
        atracoes[index + 1].latitude && 
        atracoes[index + 1].longitude &&
        atracao.latitude && 
        atracao.longitude) {
      
      const distancia = calcularDistancia(
        atracao.latitude,
        atracao.longitude,
        atracoes[index + 1].latitude!,
        atracoes[index + 1].longitude!
      )
      
      const custoDeslocamentoItem = estimarCustoDeslocamento(distancia, tipoTransporte)
      custoDeslocamento += custoDeslocamentoItem
      detalhes.push({
        item: `Deslocamento ${index + 1} → ${index + 2}`,
        custo: custoDeslocamentoItem,
        tipo: 'deslocamento'
      })
    }
  })

  return {
    custoAtracoes,
    custoDeslocamento,
    custoTotal: custoAtracoes + custoDeslocamento,
    detalhes
  }
}

// Função para otimizar rota (algoritmo simples baseado em distância)
export function otimizarRota(
  atracoes: Array<{
    id: string
    latitude: number
    longitude: number
    categoria: string
    duracaoCustomizada?: number
    custoCustomizado?: number
  }>,
  pontoInicial?: { latitude: number; longitude: number }
): Array<{
  id: string
  latitude: number
  longitude: number
  categoria: string
  duracaoCustomizada?: number
  custoCustomizado?: number
  distanciaAnterior?: number
}> {
  if (atracoes.length <= 1) return atracoes

  const resultado = []
  const naoVisitadas = [...atracoes]
  
  // Começar pelo ponto inicial ou primeira atração
  let atual = pontoInicial || {
    latitude: naoVisitadas[0].latitude,
    longitude: naoVisitadas[0].longitude
  }

  while (naoVisitadas.length > 0) {
    // Encontrar a atração mais próxima
    let maisProximaIndex = 0
    let menorDistancia = calcularDistancia(
      atual.latitude,
      atual.longitude,
      naoVisitadas[0].latitude,
      naoVisitadas[0].longitude
    )

    for (let i = 1; i < naoVisitadas.length; i++) {
      const distancia = calcularDistancia(
        atual.latitude,
        atual.longitude,
        naoVisitadas[i].latitude,
        naoVisitadas[i].longitude
      )
      
      if (distancia < menorDistancia) {
        menorDistancia = distancia
        maisProximaIndex = i
      }
    }

    const proximaAtracao = naoVisitadas.splice(maisProximaIndex, 1)[0]
    resultado.push({
      ...proximaAtracao,
      distanciaAnterior: menorDistancia
    })

    atual = {
      latitude: proximaAtracao.latitude,
      longitude: proximaAtracao.longitude
    }
  }

  return resultado
}

// Função para formatar duração em formato legível
export function formatarDuracao(minutos: number): string {
  if (minutos < 60) {
    return `${minutos} min`
  }
  
  const horas = Math.floor(minutos / 60)
  const minutosRestantes = minutos % 60
  
  if (minutosRestantes === 0) {
    return `${horas}h`
  }
  
  return `${horas}h ${minutosRestantes}min`
}

// Função para formatar custo em formato legível
export function formatarCusto(valor: number, moeda: string = 'BRL'): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: moeda
  }).format(valor)
}