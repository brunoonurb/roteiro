import { z } from 'zod'

// Enums
export const TipoPlanoSchema = z.enum(['GRATUITO', 'PREMIUM'])
export const CategoriaSchema = z.enum(['CULTURA', 'GASTRONOMIA', 'AVENTURA', 'RELAXAMENTO', 'COMPRAS', 'PARQUES'])
export const ParceiroSchema = z.enum(['CIVITATIS', 'GETYOURGUIDE', 'VIATOR', 'TIQETS', 'BOOKING', 'AIRBNB', 'MANUAL'])
export const StatusIngressoSchema = z.enum(['PENDENTE', 'CONFIRMADO', 'CANCELADO', 'USADO'])
export const RoleUsuarioSchema = z.enum(['USER', 'ADMIN'])

// Usuario Schemas
export const createUsuarioSchema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  image: z.string().url().optional(),
  plano: TipoPlanoSchema.default('GRATUITO'),
  preferenciasIdioma: z.string().default('pt')
})

export const updateUsuarioSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo').optional(),
  email: z.string().email('Email inválido').optional(),
  image: z.string().url('URL da imagem inválida').optional(),
  plano: z.enum(['GRATUITO', 'PREMIUM', 'VIP']).optional(),
  preferenciasIdioma: z.string().max(5).optional()
})

// Roteiro Schemas
export const createRoteiroSchema = z.object({
  titulo: z.string().min(3, 'Título deve ter pelo menos 3 caracteres').max(100, 'Título deve ter no máximo 100 caracteres'),
  descricao: z.string().max(500, 'Descrição deve ter no máximo 500 caracteres').optional(),
  destino: z.string().min(2, 'Destino deve ter pelo menos 2 caracteres'),
  dataInicio: z.date({ required_error: 'Data de início é obrigatória' }),
  dataFim: z.date({ required_error: 'Data de fim é obrigatória' }),
  categoria: CategoriaSchema,
  publico: z.boolean().default(false),
  orcamento: z.number().positive('Orçamento deve ser positivo').optional()
}).refine((data) => data.dataFim > data.dataInicio, {
  message: "Data de fim deve ser posterior à data de início",
  path: ["dataFim"]
})

export const updateRoteiroSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório').max(200, 'Título muito longo').optional(),
  descricao: z.string().max(2000, 'Descrição muito longa').optional(),
  destino: z.string().min(1, 'Destino é obrigatório').max(100, 'Destino muito longo').optional(),
  dataInicio: z.date().optional(),
  dataFim: z.date().optional(),
  categoria: z.enum(['CULTURA', 'GASTRONOMIA', 'AVENTURA', 'RELAXAMENTO', 'COMPRAS', 'PARQUES']).optional(),
  publico: z.boolean().optional(),
  orcamento: z.number().positive('Orçamento deve ser positivo').optional()
}).refine(
  (data) => !data.dataInicio || !data.dataFim || data.dataInicio <= data.dataFim,
  {
    message: 'Data de início deve ser anterior à data de fim',
    path: ['dataFim']
  }
)

// DiaRoteiro Schemas
export const createDiaRoteiroSchema = z.object({
  data: z.date({ required_error: 'Data é obrigatória' }),
  ordem: z.number().min(1, 'Ordem deve ser pelo menos 1'),
  roteiroId: z.string().cuid('ID do roteiro inválido')
})

// Atracao Schemas
export const createAtracaoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(200),
  descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  categoria: CategoriaSchema,
  preco: z.number().positive('Preço deve ser positivo').optional(),
  moeda: z.string().length(3, 'Moeda deve ter 3 caracteres').default('BRL'),
  latitude: z.number().min(-90).max(90, 'Latitude inválida'),
  longitude: z.number().min(-180).max(180, 'Longitude inválida'),
  endereco: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  parceiro: ParceiroSchema,
  linkAfiliado: z.string().url('Link de afiliado deve ser uma URL válida'),
  duracaoEstimada: z.number().min(15, 'Duração mínima de 15 minutos').max(720, 'Duração máxima de 12 horas')
})

export const updateAtracaoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').max(200, 'Nome muito longo').optional(),
  descricao: z.string().max(2000, 'Descrição muito longa').optional(),
  categoria: z.enum(['CULTURA', 'GASTRONOMIA', 'AVENTURA', 'RELAXAMENTO', 'COMPRAS', 'PARQUES']).optional(),
  endereco: z.string().max(300, 'Endereço muito longo').optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  preco: z.number().nonnegative('Preço deve ser não negativo').optional(),
  moeda: z.string().length(3, 'Código da moeda deve ter 3 caracteres').optional(),
  duracaoEstimada: z.number().positive('Duração deve ser positiva').optional(),
  avaliacaoMedia: z.number().min(0).max(5).optional(),
  totalAvaliacoes: z.number().nonnegative().optional(),
  linkAfiliado: z.string().url('URL inválida').optional(),
  parceiro: z.enum(['CIVITATIS', 'GETYOURGUIDE', 'VIATOR', 'TIQETS', 'BOOKING', 'AIRBNB']).optional(),
  imagem: z.string().url('URL da imagem inválida').optional()
})

// AtracaoDia Schemas
export const createAtracaoDiaSchema = z.object({
  atracaoId: z.string().cuid('ID da atração inválido'),
  diaRoteiroId: z.string().cuid('ID do dia do roteiro inválido'),
  horario: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Horário deve estar no formato HH:MM').optional(),
  tempoEstimado: z.number().min(15).max(720).optional(),
  ordem: z.number().min(1),
  observacoes: z.string().max(300, 'Observações devem ter no máximo 300 caracteres').optional()
})

// Avaliacao Schemas
export const createAvaliacaoSchema = z.object({
  nota: z.number().min(1, 'Nota mínima é 1').max(5, 'Nota máxima é 5'),
  comentario: z.string().max(300, 'Comentário deve ter no máximo 300 caracteres').optional(),
  dataVisita: z.date().optional(),
  atracaoId: z.string().cuid().optional(),
  roteiroId: z.string().cuid().optional()
}).refine((data) => data.atracaoId || data.roteiroId, {
  message: "Deve avaliar uma atração ou um roteiro",
  path: ["atracaoId"]
})

export const updateAvaliacaoSchema = z.object({
  nota: z.number().min(1, 'Nota mínima é 1').max(5, 'Nota máxima é 5').optional(),
  comentario: z.string().max(1000, 'Comentário muito longo').optional(),
  atracaoId: z.string().cuid('ID da atração inválido').optional(),
  roteiroId: z.string().cuid('ID do roteiro inválido').optional()
})

// Comentario Schemas
export const createComentarioSchema = z.object({
  conteudo: z.string().min(1, 'Comentário não pode estar vazio').max(500, 'Comentário deve ter no máximo 500 caracteres'),
  roteiroId: z.string().cuid('ID do roteiro inválido'),
  parentId: z.string().cuid().optional()
})

export const updateComentarioSchema = z.object({
  conteudo: z.string().min(1, 'Comentário não pode estar vazio').max(500, 'Comentário deve ter no máximo 500 caracteres')
})

// Ingresso Schemas
export const createIngressoSchema = z.object({
  codigo: z.string().min(5, 'Código deve ter pelo menos 5 caracteres').max(50, 'Código deve ter no máximo 50 caracteres'),
  qrCode: z.string().optional(),
  dataValidade: z.date({ required_error: 'Data de validade é obrigatória' }),
  preco: z.number().positive('Preço deve ser positivo').optional(),
  moeda: z.string().length(3, 'Moeda deve ter 3 caracteres').default('BRL'),
  status: StatusIngressoSchema.default('PENDENTE'),
  observacoes: z.string().max(200, 'Observações devem ter no máximo 200 caracteres').optional(),
  atracaoId: z.string().cuid('ID da atração inválido'),
  roteiroId: z.string().cuid().optional()
})

export const updateIngressoSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório').max(200, 'Título muito longo').optional(),
  descricao: z.string().max(1000, 'Descrição muito longa').optional(),
  dataValidade: z.date().optional(),
  qrCode: z.string().optional(),
  status: z.enum(['ATIVO', 'USADO', 'EXPIRADO', 'CANCELADO']).optional(),
  atracaoId: z.string().cuid('ID da atração inválido').optional(),
  roteiroId: z.string().cuid('ID do roteiro inválido').optional()
})

// Consultoria Schemas
export const createConsultoriaSchema = z.object({
  destino: z.string().min(2, 'Destino deve ter pelo menos 2 caracteres'),
  dataInicio: z.date({ required_error: 'Data de início é obrigatória' }),
  dataFim: z.date({ required_error: 'Data de fim é obrigatória' }),
  orcamento: z.number().positive('Orçamento deve ser positivo').optional(),
  preferencias: z.string().max(1000, 'Preferências devem ter no máximo 1000 caracteres').optional(),
  preco: z.number().positive('Preço deve ser positivo')
}).refine((data) => data.dataFim > data.dataInicio, {
  message: "Data de fim deve ser posterior à data de início",
  path: ["dataFim"]
})

export const updateConsultoriaSchema = z.object({
  destino: z.string().min(2, 'Destino deve ter pelo menos 2 caracteres').optional(),
  dataInicio: z.date().optional(),
  dataFim: z.date().optional(),
  orcamento: z.number().positive('Orçamento deve ser positivo').optional(),
  numeroViajantes: z.number().min(1, 'Número de viajantes deve ser pelo menos 1').optional(),
  preferencias: z.string().max(1000, 'Preferências muito longas').optional(),
  observacoes: z.string().max(1000, 'Observações muito longas').optional(),
  status: z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA']).optional(),
  consultorId: z.string().cuid().optional()
})

// Follow Schema
export const createFollowSchema = z.object({
  seguidoId: z.string().cuid('ID do usuário inválido')
})

// Search and Filter Schemas
export const searchAtracaoSchema = z.object({
  query: z.string().optional(),
  categoria: CategoriaSchema.optional(),
  parceiro: ParceiroSchema.optional(),
  precoMin: z.number().positive().optional(),
  precoMax: z.number().positive().optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  raio: z.number().positive().max(50).optional(), // km
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20)
})

export const searchRoteiroSchema = z.object({
  query: z.string().optional(),
  categoria: CategoriaSchema.optional(),
  destino: z.string().optional(),
  dataInicio: z.date().optional(),
  dataFim: z.date().optional(),
  publico: z.boolean().optional(),
  usuarioId: z.string().cuid().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20)
})

// Favoritos Schemas
export const createFavoritoSchema = z.object({
  targetType: z.enum(['ITINERARY', 'PLACE']),
  targetId: z.string().cuid('ID inválido')
})

// Templates Schemas
export const createTemplateRoteiroSchema = z.object({
  titulo: z.string().min(3, 'Título deve ter pelo menos 3 caracteres').max(100),
  descricao: z.string().max(500, 'Descrição deve ter no máximo 500 caracteres').optional(),
  destino: z.string().min(2, 'Destino deve ter pelo menos 2 caracteres'),
  categoria: CategoriaSchema,
  duracaoDias: z.number().min(1, 'Duração deve ser pelo menos 1 dia').max(30, 'Duração máxima de 30 dias'),
  custoEstimado: z.number().positive('Custo deve ser positivo').optional(),
  moeda: z.string().length(3, 'Moeda deve ter 3 caracteres').default('BRL'),
  isPublico: z.boolean().default(false)
})

// Votação Schemas
export const createVotoAvaliacaoSchema = z.object({
  avaliacaoId: z.string().cuid('ID da avaliação inválido'),
  isUtil: z.boolean()
})

// Afiliados Schemas
export const trackAfiliadoSchema = z.object({
  provider: z.string().min(1, 'Provider é obrigatório'),
  productRef: z.string().min(1, 'ProductRef é obrigatório'),
  roteiroId: z.string().cuid().optional(),
  itemId: z.string().cuid().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional()
})

// Sync Schemas
export const createSyncJobSchema = z.object({
  type: z.enum(['EXPORT', 'IMPORT']),
  payload: z.any().optional()
})

// Legacy schemas for compatibility
export const avaliacaoSchema = createAvaliacaoSchema
export const ingressoSchema = createIngressoSchema
export const consultoriaSchema = createConsultoriaSchema
export const interesseSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  destino: z.string().min(1, 'Destino é obrigatório'),
})

// Export all schemas as types
export type CreateUsuario = z.infer<typeof createUsuarioSchema>
export type UpdateUsuario = z.infer<typeof updateUsuarioSchema>
export type CreateRoteiro = z.infer<typeof createRoteiroSchema>
export type UpdateRoteiro = z.infer<typeof updateRoteiroSchema>
export type CreateAtracao = z.infer<typeof createAtracaoSchema>
export type UpdateAtracao = z.infer<typeof updateAtracaoSchema>
export type CreateAvaliacao = z.infer<typeof createAvaliacaoSchema>
export type UpdateAvaliacao = z.infer<typeof updateAvaliacaoSchema>
export type CreateComentario = z.infer<typeof createComentarioSchema>
export type CreateIngresso = z.infer<typeof createIngressoSchema>
export type UpdateIngresso = z.infer<typeof updateIngressoSchema>
export type CreateConsultoria = z.infer<typeof createConsultoriaSchema>
export type UpdateConsultoria = z.infer<typeof updateConsultoriaSchema>
export type SearchAtracao = z.infer<typeof searchAtracaoSchema>
export type SearchRoteiro = z.infer<typeof searchRoteiroSchema>

// New types
export type CreateFavorito = z.infer<typeof createFavoritoSchema>
export type CreateTemplateRoteiro = z.infer<typeof createTemplateRoteiroSchema>
export type CreateVotoAvaliacao = z.infer<typeof createVotoAvaliacaoSchema>
export type TrackAfiliado = z.infer<typeof trackAfiliadoSchema>
export type CreateSyncJob = z.infer<typeof createSyncJobSchema>

// Legacy types for compatibility
export type CreateRoteiroInput = z.infer<typeof createRoteiroSchema>
export type AvaliacaoInput = z.infer<typeof avaliacaoSchema>
export type IngressoInput = z.infer<typeof ingressoSchema>
export type ConsultoriaInput = z.infer<typeof consultoriaSchema>
export type InteresseInput = z.infer<typeof interesseSchema>