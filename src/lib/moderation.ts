// Lista de palavras ofensivas em português
const offensiveWords = [
  // Palavras de baixo calão
  'merda', 'porra', 'caralho', 'puta', 'foda', 'cacete', 'buceta', 'xoxota',
  'viado', 'bicha', 'traveco', 'sapatão', 'retardado', 'idiota', 'burro',
  'imbecil', 'estupido', 'filho da puta', 'fdp', 'vai se foder', 'vsf',
  'cu', 'bunda', 'rabo', 'pau', 'rola', 'pica', 'saco', 'ovo',
  
  // Palavras relacionadas a violência
  'matar', 'morrer', 'suicidio', 'bomba', 'explosão', 'terrorismo',
  
  // Palavras de ódio/discriminação
  'nazista', 'hitler', 'racista', 'fascista', 'comunista',
  
  // Gírias ofensivas
  'otario', 'trouxa', 'gay', 'lesbica', 'trans', 'travesti',
  
  // Variantes com números/símbolos
  'merd@', 'p0rr@', 'car4lho', 'put@', 'f0d@', 'c4cete',
  'v1ado', 'b1cha', '1mbecil', 'estup1do', 'f1lho da puta',
  
  // Expressões ofensivas
  'vai tomar no cu', 'vai se foder', 'vai pra puta que pariu',
  'sua mãe', 'sua mae', 'sua familia', 'sua família'
]

// Função para verificar se um texto contém palavras ofensivas
export function containsOffensiveContent(text: string): boolean {
  if (!text || typeof text !== 'string') return false
  
  const normalizedText = text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s]/g, ' ') // Remove pontuação
    .replace(/\s+/g, ' ') // Normaliza espaços
  
  return offensiveWords.some(word => {
    // Busca exata da palavra
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
    return regex.test(normalizedText)
  })
}

// Função para substituir palavras ofensivas por asteriscos
export function censorOffensiveContent(text: string): string {
  if (!text || typeof text !== 'string') return text
  
  let censoredText = text
  
  offensiveWords.forEach(word => {
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
    const asterisks = '*'.repeat(word.length)
    censoredText = censoredText.replace(regex, asterisks)
  })
  
  return censoredText
}

// Função para obter palavras ofensivas encontradas
export function getOffensiveWords(text: string): string[] {
  if (!text || typeof text !== 'string') return []
  
  const normalizedText = text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
  
  const foundWords: string[] = []
  
  offensiveWords.forEach(word => {
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
    if (regex.test(normalizedText)) {
      foundWords.push(word)
    }
  })
  
  return foundWords
}

// Função para calcular score de ofensividade (0-1)
export function getOffensivenessScore(text: string): number {
  if (!text || typeof text !== 'string') return 0
  
  const words = text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 0)
  
  if (words.length === 0) return 0
  
  let offensiveCount = 0
  
  words.forEach(word => {
    if (offensiveWords.some(offensiveWord => 
      new RegExp(`\\b${offensiveWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(word)
    )) {
      offensiveCount++
    }
  })
  
  return Math.min(offensiveCount / words.length, 1)
}

// Função para moderar comentário
export function moderateComment(text: string): {
  isApproved: boolean
  censoredText: string
  offensiveWords: string[]
  score: number
  reason?: string
} {
  const offensiveWordsFound = getOffensiveWords(text)
  const score = getOffensivenessScore(text)
  
  // Critérios para aprovação:
  // - Score < 0.1 (menos de 10% das palavras são ofensivas)
  // - Não contém palavras muito ofensivas
  const veryOffensiveWords = ['matar', 'morrer', 'suicidio', 'nazista', 'hitler', 'racista']
  const hasVeryOffensive = offensiveWordsFound.some(word => veryOffensiveWords.includes(word))
  
  const isApproved = score < 0.1 && !hasVeryOffensive
  
  return {
    isApproved,
    censoredText: censorOffensiveContent(text),
    offensiveWords: offensiveWordsFound,
    score,
    reason: !isApproved ? 
      (hasVeryOffensive ? 'Contém conteúdo muito ofensivo' : 'Contém palavras ofensivas') : 
      undefined
  }
}

// Função para verificar se um texto é spam
export function isSpam(text: string): boolean {
  if (!text || typeof text !== 'string') return false
  
  const normalizedText = text.toLowerCase()
  
  // Padrões de spam
  const spamPatterns = [
    /(.)\1{4,}/, // Caracteres repetidos (ex: aaaaa)
    /(https?:\/\/[^\s]+)/gi, // URLs
    /(www\.[^\s]+)/gi, // URLs sem protocolo
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, // Emails
    /(compre|compra|venda|promoção|desconto|oferta|grátis|free|click|clique)/gi, // Palavras comerciais
    /(\d{10,})/, // Muitos números consecutivos
    /(!!!|\.{3,})/ // Muitas exclamações ou pontos
  ]
  
  return spamPatterns.some(pattern => pattern.test(normalizedText))
}

// Função completa de moderação
export function fullModeration(text: string): {
  isApproved: boolean
  censoredText: string
  offensiveWords: string[]
  offensivenessScore: number
  isSpam: boolean
  reason?: string
} {
  const moderationResult = moderateComment(text)
  const spamCheck = isSpam(text)
  
  const finalApproval = moderationResult.isApproved && !spamCheck
  
  return {
    isApproved: finalApproval,
    censoredText: moderationResult.censoredText,
    offensiveWords: moderationResult.offensiveWords,
    offensivenessScore: moderationResult.score,
    isSpam: spamCheck,
    reason: !finalApproval ? 
      (spamCheck ? 'Conteúdo identificado como spam' : moderationResult.reason) : 
      undefined
  }
}