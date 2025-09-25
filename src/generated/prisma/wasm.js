
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  emailVerified: 'emailVerified',
  name: 'name',
  image: 'image',
  plano: 'plano',
  role: 'role',
  preferenciasIdioma: 'preferenciasIdioma',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.FollowScalarFieldEnum = {
  id: 'id',
  seguidorId: 'seguidorId',
  seguidoId: 'seguidoId',
  criadoEm: 'criadoEm'
};

exports.Prisma.RoteiroScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  descricao: 'descricao',
  destino: 'destino',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  publico: 'publico',
  categoria: 'categoria',
  orcamento: 'orcamento',
  visualizacoes: 'visualizacoes',
  usuarioId: 'usuarioId',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.DiaRoteiroScalarFieldEnum = {
  id: 'id',
  data: 'data',
  ordem: 'ordem',
  roteiroId: 'roteiroId',
  criadoEm: 'criadoEm'
};

exports.Prisma.AtracaoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  categoria: 'categoria',
  preco: 'preco',
  moeda: 'moeda',
  latitude: 'latitude',
  longitude: 'longitude',
  endereco: 'endereco',
  parceiro: 'parceiro',
  linkAfiliado: 'linkAfiliado',
  duracaoEstimada: 'duracaoEstimada',
  avaliacaoMedia: 'avaliacaoMedia',
  totalAvaliacoes: 'totalAvaliacoes',
  ativo: 'ativo',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.AtracaoDiaScalarFieldEnum = {
  id: 'id',
  atracaoId: 'atracaoId',
  diaRoteiroId: 'diaRoteiroId',
  horario: 'horario',
  tempoEstimado: 'tempoEstimado',
  ordem: 'ordem',
  observacoes: 'observacoes',
  criadoEm: 'criadoEm'
};

exports.Prisma.AvaliacaoScalarFieldEnum = {
  id: 'id',
  nota: 'nota',
  comentario: 'comentario',
  dataVisita: 'dataVisita',
  util: 'util',
  naoUtil: 'naoUtil',
  usuarioId: 'usuarioId',
  atracaoId: 'atracaoId',
  roteiroId: 'roteiroId',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.ComentarioScalarFieldEnum = {
  id: 'id',
  conteudo: 'conteudo',
  usuarioId: 'usuarioId',
  roteiroId: 'roteiroId',
  parentId: 'parentId',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.IngressoScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  qrCode: 'qrCode',
  dataValidade: 'dataValidade',
  preco: 'preco',
  moeda: 'moeda',
  status: 'status',
  observacoes: 'observacoes',
  usuarioId: 'usuarioId',
  atracaoId: 'atracaoId',
  roteiroId: 'roteiroId',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.ConsultoriaScalarFieldEnum = {
  id: 'id',
  destino: 'destino',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  orcamento: 'orcamento',
  preferencias: 'preferencias',
  status: 'status',
  preco: 'preco',
  clienteId: 'clienteId',
  consultorId: 'consultorId',
  criadoEm: 'criadoEm',
  atualizadoEm: 'atualizadoEm'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoPlano = exports.$Enums.TipoPlano = {
  GRATUITO: 'GRATUITO',
  PREMIUM: 'PREMIUM'
};

exports.RoleUsuario = exports.$Enums.RoleUsuario = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.Categoria = exports.$Enums.Categoria = {
  CULTURA: 'CULTURA',
  GASTRONOMIA: 'GASTRONOMIA',
  AVENTURA: 'AVENTURA',
  RELAXAMENTO: 'RELAXAMENTO',
  COMPRAS: 'COMPRAS',
  PARQUES: 'PARQUES'
};

exports.Parceiro = exports.$Enums.Parceiro = {
  CIVITATIS: 'CIVITATIS',
  GETYOURGUIDE: 'GETYOURGUIDE',
  VIATOR: 'VIATOR',
  TIQETS: 'TIQETS',
  BOOKING: 'BOOKING',
  AIRBNB: 'AIRBNB',
  MANUAL: 'MANUAL'
};

exports.StatusIngresso = exports.$Enums.StatusIngresso = {
  PENDENTE: 'PENDENTE',
  CONFIRMADO: 'CONFIRMADO',
  CANCELADO: 'CANCELADO',
  USADO: 'USADO'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  User: 'User',
  Follow: 'Follow',
  Roteiro: 'Roteiro',
  DiaRoteiro: 'DiaRoteiro',
  Atracao: 'Atracao',
  AtracaoDia: 'AtracaoDia',
  Avaliacao: 'Avaliacao',
  Comentario: 'Comentario',
  Ingresso: 'Ingresso',
  Consultoria: 'Consultoria'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
