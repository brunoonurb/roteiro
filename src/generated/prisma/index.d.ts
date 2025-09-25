
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Roteiro
 * 
 */
export type Roteiro = $Result.DefaultSelection<Prisma.$RoteiroPayload>
/**
 * Model DiaRoteiro
 * 
 */
export type DiaRoteiro = $Result.DefaultSelection<Prisma.$DiaRoteiroPayload>
/**
 * Model Atracao
 * 
 */
export type Atracao = $Result.DefaultSelection<Prisma.$AtracaoPayload>
/**
 * Model AtracaoDia
 * 
 */
export type AtracaoDia = $Result.DefaultSelection<Prisma.$AtracaoDiaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Ingresso
 * 
 */
export type Ingresso = $Result.DefaultSelection<Prisma.$IngressoPayload>
/**
 * Model Consultoria
 * 
 */
export type Consultoria = $Result.DefaultSelection<Prisma.$ConsultoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPlano: {
  GRATUITO: 'GRATUITO',
  PREMIUM: 'PREMIUM'
};

export type TipoPlano = (typeof TipoPlano)[keyof typeof TipoPlano]


export const RoleUsuario: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type RoleUsuario = (typeof RoleUsuario)[keyof typeof RoleUsuario]


export const Categoria: {
  CULTURA: 'CULTURA',
  GASTRONOMIA: 'GASTRONOMIA',
  AVENTURA: 'AVENTURA',
  RELAXAMENTO: 'RELAXAMENTO',
  COMPRAS: 'COMPRAS',
  PARQUES: 'PARQUES'
};

export type Categoria = (typeof Categoria)[keyof typeof Categoria]


export const Parceiro: {
  CIVITATIS: 'CIVITATIS',
  GETYOURGUIDE: 'GETYOURGUIDE',
  VIATOR: 'VIATOR',
  TIQETS: 'TIQETS',
  BOOKING: 'BOOKING',
  AIRBNB: 'AIRBNB',
  MANUAL: 'MANUAL'
};

export type Parceiro = (typeof Parceiro)[keyof typeof Parceiro]


export const StatusIngresso: {
  PENDENTE: 'PENDENTE',
  CONFIRMADO: 'CONFIRMADO',
  CANCELADO: 'CANCELADO',
  USADO: 'USADO'
};

export type StatusIngresso = (typeof StatusIngresso)[keyof typeof StatusIngresso]

}

export type TipoPlano = $Enums.TipoPlano

export const TipoPlano: typeof $Enums.TipoPlano

export type RoleUsuario = $Enums.RoleUsuario

export const RoleUsuario: typeof $Enums.RoleUsuario

export type Categoria = $Enums.Categoria

export const Categoria: typeof $Enums.Categoria

export type Parceiro = $Enums.Parceiro

export const Parceiro: typeof $Enums.Parceiro

export type StatusIngresso = $Enums.StatusIngresso

export const StatusIngresso: typeof $Enums.StatusIngresso

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs>;

  /**
   * `prisma.roteiro`: Exposes CRUD operations for the **Roteiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roteiros
    * const roteiros = await prisma.roteiro.findMany()
    * ```
    */
  get roteiro(): Prisma.RoteiroDelegate<ExtArgs>;

  /**
   * `prisma.diaRoteiro`: Exposes CRUD operations for the **DiaRoteiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaRoteiros
    * const diaRoteiros = await prisma.diaRoteiro.findMany()
    * ```
    */
  get diaRoteiro(): Prisma.DiaRoteiroDelegate<ExtArgs>;

  /**
   * `prisma.atracao`: Exposes CRUD operations for the **Atracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atracaos
    * const atracaos = await prisma.atracao.findMany()
    * ```
    */
  get atracao(): Prisma.AtracaoDelegate<ExtArgs>;

  /**
   * `prisma.atracaoDia`: Exposes CRUD operations for the **AtracaoDia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtracaoDias
    * const atracaoDias = await prisma.atracaoDia.findMany()
    * ```
    */
  get atracaoDia(): Prisma.AtracaoDiaDelegate<ExtArgs>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs>;

  /**
   * `prisma.ingresso`: Exposes CRUD operations for the **Ingresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingressos
    * const ingressos = await prisma.ingresso.findMany()
    * ```
    */
  get ingresso(): Prisma.IngressoDelegate<ExtArgs>;

  /**
   * `prisma.consultoria`: Exposes CRUD operations for the **Consultoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultorias
    * const consultorias = await prisma.consultoria.findMany()
    * ```
    */
  get consultoria(): Prisma.ConsultoriaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "follow" | "roteiro" | "diaRoteiro" | "atracao" | "atracaoDia" | "avaliacao" | "comentario" | "ingresso" | "consultoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Roteiro: {
        payload: Prisma.$RoteiroPayload<ExtArgs>
        fields: Prisma.RoteiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoteiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoteiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          findFirst: {
            args: Prisma.RoteiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoteiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          findMany: {
            args: Prisma.RoteiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>[]
          }
          create: {
            args: Prisma.RoteiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          createMany: {
            args: Prisma.RoteiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoteiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>[]
          }
          delete: {
            args: Prisma.RoteiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          update: {
            args: Prisma.RoteiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          deleteMany: {
            args: Prisma.RoteiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoteiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoteiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          aggregate: {
            args: Prisma.RoteiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoteiro>
          }
          groupBy: {
            args: Prisma.RoteiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoteiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoteiroCountArgs<ExtArgs>
            result: $Utils.Optional<RoteiroCountAggregateOutputType> | number
          }
        }
      }
      DiaRoteiro: {
        payload: Prisma.$DiaRoteiroPayload<ExtArgs>
        fields: Prisma.DiaRoteiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaRoteiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaRoteiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          findFirst: {
            args: Prisma.DiaRoteiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaRoteiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          findMany: {
            args: Prisma.DiaRoteiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>[]
          }
          create: {
            args: Prisma.DiaRoteiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          createMany: {
            args: Prisma.DiaRoteiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaRoteiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>[]
          }
          delete: {
            args: Prisma.DiaRoteiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          update: {
            args: Prisma.DiaRoteiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          deleteMany: {
            args: Prisma.DiaRoteiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaRoteiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiaRoteiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaRoteiroPayload>
          }
          aggregate: {
            args: Prisma.DiaRoteiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaRoteiro>
          }
          groupBy: {
            args: Prisma.DiaRoteiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaRoteiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaRoteiroCountArgs<ExtArgs>
            result: $Utils.Optional<DiaRoteiroCountAggregateOutputType> | number
          }
        }
      }
      Atracao: {
        payload: Prisma.$AtracaoPayload<ExtArgs>
        fields: Prisma.AtracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          findFirst: {
            args: Prisma.AtracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          findMany: {
            args: Prisma.AtracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>[]
          }
          create: {
            args: Prisma.AtracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          createMany: {
            args: Prisma.AtracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>[]
          }
          delete: {
            args: Prisma.AtracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          update: {
            args: Prisma.AtracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          deleteMany: {
            args: Prisma.AtracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoPayload>
          }
          aggregate: {
            args: Prisma.AtracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtracao>
          }
          groupBy: {
            args: Prisma.AtracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtracaoCountArgs<ExtArgs>
            result: $Utils.Optional<AtracaoCountAggregateOutputType> | number
          }
        }
      }
      AtracaoDia: {
        payload: Prisma.$AtracaoDiaPayload<ExtArgs>
        fields: Prisma.AtracaoDiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtracaoDiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtracaoDiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          findFirst: {
            args: Prisma.AtracaoDiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtracaoDiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          findMany: {
            args: Prisma.AtracaoDiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>[]
          }
          create: {
            args: Prisma.AtracaoDiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          createMany: {
            args: Prisma.AtracaoDiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtracaoDiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>[]
          }
          delete: {
            args: Prisma.AtracaoDiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          update: {
            args: Prisma.AtracaoDiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          deleteMany: {
            args: Prisma.AtracaoDiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtracaoDiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtracaoDiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtracaoDiaPayload>
          }
          aggregate: {
            args: Prisma.AtracaoDiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtracaoDia>
          }
          groupBy: {
            args: Prisma.AtracaoDiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtracaoDiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtracaoDiaCountArgs<ExtArgs>
            result: $Utils.Optional<AtracaoDiaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Ingresso: {
        payload: Prisma.$IngressoPayload<ExtArgs>
        fields: Prisma.IngressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findFirst: {
            args: Prisma.IngressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findMany: {
            args: Prisma.IngressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          create: {
            args: Prisma.IngressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          createMany: {
            args: Prisma.IngressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          delete: {
            args: Prisma.IngressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          update: {
            args: Prisma.IngressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          deleteMany: {
            args: Prisma.IngressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          aggregate: {
            args: Prisma.IngressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngresso>
          }
          groupBy: {
            args: Prisma.IngressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngressoCountArgs<ExtArgs>
            result: $Utils.Optional<IngressoCountAggregateOutputType> | number
          }
        }
      }
      Consultoria: {
        payload: Prisma.$ConsultoriaPayload<ExtArgs>
        fields: Prisma.ConsultoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          findFirst: {
            args: Prisma.ConsultoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          findMany: {
            args: Prisma.ConsultoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>[]
          }
          create: {
            args: Prisma.ConsultoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          createMany: {
            args: Prisma.ConsultoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>[]
          }
          delete: {
            args: Prisma.ConsultoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          update: {
            args: Prisma.ConsultoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultoriaPayload>
          }
          aggregate: {
            args: Prisma.ConsultoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultoria>
          }
          groupBy: {
            args: Prisma.ConsultoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultoriaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    roteiros: number
    avaliacoes: number
    ingressos: number
    comentarios: number
    seguidores: number
    seguindo: number
    consultoriasSolicitadas: number
    consultoriasAtendidas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    roteiros?: boolean | UserCountOutputTypeCountRoteirosArgs
    avaliacoes?: boolean | UserCountOutputTypeCountAvaliacoesArgs
    ingressos?: boolean | UserCountOutputTypeCountIngressosArgs
    comentarios?: boolean | UserCountOutputTypeCountComentariosArgs
    seguidores?: boolean | UserCountOutputTypeCountSeguidoresArgs
    seguindo?: boolean | UserCountOutputTypeCountSeguindoArgs
    consultoriasSolicitadas?: boolean | UserCountOutputTypeCountConsultoriasSolicitadasArgs
    consultoriasAtendidas?: boolean | UserCountOutputTypeCountConsultoriasAtendidasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoteirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoteiroWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultoriasSolicitadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultoriaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultoriasAtendidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultoriaWhereInput
  }


  /**
   * Count Type RoteiroCountOutputType
   */

  export type RoteiroCountOutputType = {
    dias: number
    avaliacoes: number
    comentarios: number
    ingressos: number
  }

  export type RoteiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dias?: boolean | RoteiroCountOutputTypeCountDiasArgs
    avaliacoes?: boolean | RoteiroCountOutputTypeCountAvaliacoesArgs
    comentarios?: boolean | RoteiroCountOutputTypeCountComentariosArgs
    ingressos?: boolean | RoteiroCountOutputTypeCountIngressosArgs
  }

  // Custom InputTypes
  /**
   * RoteiroCountOutputType without action
   */
  export type RoteiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoteiroCountOutputType
     */
    select?: RoteiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoteiroCountOutputType without action
   */
  export type RoteiroCountOutputTypeCountDiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaRoteiroWhereInput
  }

  /**
   * RoteiroCountOutputType without action
   */
  export type RoteiroCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * RoteiroCountOutputType without action
   */
  export type RoteiroCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * RoteiroCountOutputType without action
   */
  export type RoteiroCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }


  /**
   * Count Type DiaRoteiroCountOutputType
   */

  export type DiaRoteiroCountOutputType = {
    atracoes: number
  }

  export type DiaRoteiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atracoes?: boolean | DiaRoteiroCountOutputTypeCountAtracoesArgs
  }

  // Custom InputTypes
  /**
   * DiaRoteiroCountOutputType without action
   */
  export type DiaRoteiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiroCountOutputType
     */
    select?: DiaRoteiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaRoteiroCountOutputType without action
   */
  export type DiaRoteiroCountOutputTypeCountAtracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtracaoDiaWhereInput
  }


  /**
   * Count Type AtracaoCountOutputType
   */

  export type AtracaoCountOutputType = {
    dias: number
    avaliacoes: number
    ingressos: number
  }

  export type AtracaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dias?: boolean | AtracaoCountOutputTypeCountDiasArgs
    avaliacoes?: boolean | AtracaoCountOutputTypeCountAvaliacoesArgs
    ingressos?: boolean | AtracaoCountOutputTypeCountIngressosArgs
  }

  // Custom InputTypes
  /**
   * AtracaoCountOutputType without action
   */
  export type AtracaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoCountOutputType
     */
    select?: AtracaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtracaoCountOutputType without action
   */
  export type AtracaoCountOutputTypeCountDiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtracaoDiaWhereInput
  }

  /**
   * AtracaoCountOutputType without action
   */
  export type AtracaoCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * AtracaoCountOutputType without action
   */
  export type AtracaoCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }


  /**
   * Count Type ComentarioCountOutputType
   */

  export type ComentarioCountOutputType = {
    respostas: number
  }

  export type ComentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | ComentarioCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioCountOutputType
     */
    select?: ComentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    plano: $Enums.TipoPlano | null
    role: $Enums.RoleUsuario | null
    preferenciasIdioma: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    plano: $Enums.TipoPlano | null
    role: $Enums.RoleUsuario | null
    preferenciasIdioma: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    name: number
    image: number
    plano: number
    role: number
    preferenciasIdioma: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    plano?: true
    role?: true
    preferenciasIdioma?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    plano?: true
    role?: true
    preferenciasIdioma?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    plano?: true
    role?: true
    preferenciasIdioma?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    name: string | null
    image: string | null
    plano: $Enums.TipoPlano
    role: $Enums.RoleUsuario
    preferenciasIdioma: string
    criadoEm: Date
    atualizadoEm: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    plano?: boolean
    role?: boolean
    preferenciasIdioma?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    roteiros?: boolean | User$roteirosArgs<ExtArgs>
    avaliacoes?: boolean | User$avaliacoesArgs<ExtArgs>
    ingressos?: boolean | User$ingressosArgs<ExtArgs>
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    seguidores?: boolean | User$seguidoresArgs<ExtArgs>
    seguindo?: boolean | User$seguindoArgs<ExtArgs>
    consultoriasSolicitadas?: boolean | User$consultoriasSolicitadasArgs<ExtArgs>
    consultoriasAtendidas?: boolean | User$consultoriasAtendidasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    plano?: boolean
    role?: boolean
    preferenciasIdioma?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    plano?: boolean
    role?: boolean
    preferenciasIdioma?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    roteiros?: boolean | User$roteirosArgs<ExtArgs>
    avaliacoes?: boolean | User$avaliacoesArgs<ExtArgs>
    ingressos?: boolean | User$ingressosArgs<ExtArgs>
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    seguidores?: boolean | User$seguidoresArgs<ExtArgs>
    seguindo?: boolean | User$seguindoArgs<ExtArgs>
    consultoriasSolicitadas?: boolean | User$consultoriasSolicitadasArgs<ExtArgs>
    consultoriasAtendidas?: boolean | User$consultoriasAtendidasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      roteiros: Prisma.$RoteiroPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      seguidores: Prisma.$FollowPayload<ExtArgs>[]
      seguindo: Prisma.$FollowPayload<ExtArgs>[]
      consultoriasSolicitadas: Prisma.$ConsultoriaPayload<ExtArgs>[]
      consultoriasAtendidas: Prisma.$ConsultoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      name: string | null
      image: string | null
      plano: $Enums.TipoPlano
      role: $Enums.RoleUsuario
      preferenciasIdioma: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    roteiros<T extends User$roteirosArgs<ExtArgs> = {}>(args?: Subset<T, User$roteirosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacoes<T extends User$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
    ingressos<T extends User$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, User$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany"> | Null>
    comentarios<T extends User$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, User$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany"> | Null>
    seguidores<T extends User$seguidoresArgs<ExtArgs> = {}>(args?: Subset<T, User$seguidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany"> | Null>
    seguindo<T extends User$seguindoArgs<ExtArgs> = {}>(args?: Subset<T, User$seguindoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany"> | Null>
    consultoriasSolicitadas<T extends User$consultoriasSolicitadasArgs<ExtArgs> = {}>(args?: Subset<T, User$consultoriasSolicitadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findMany"> | Null>
    consultoriasAtendidas<T extends User$consultoriasAtendidasArgs<ExtArgs> = {}>(args?: Subset<T, User$consultoriasAtendidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly plano: FieldRef<"User", 'TipoPlano'>
    readonly role: FieldRef<"User", 'RoleUsuario'>
    readonly preferenciasIdioma: FieldRef<"User", 'String'>
    readonly criadoEm: FieldRef<"User", 'DateTime'>
    readonly atualizadoEm: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.roteiros
   */
  export type User$roteirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    where?: RoteiroWhereInput
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    cursor?: RoteiroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * User.avaliacoes
   */
  export type User$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * User.ingressos
   */
  export type User$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * User.comentarios
   */
  export type User$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * User.seguidores
   */
  export type User$seguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.seguindo
   */
  export type User$seguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.consultoriasSolicitadas
   */
  export type User$consultoriasSolicitadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    where?: ConsultoriaWhereInput
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    cursor?: ConsultoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultoriaScalarFieldEnum | ConsultoriaScalarFieldEnum[]
  }

  /**
   * User.consultoriasAtendidas
   */
  export type User$consultoriasAtendidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    where?: ConsultoriaWhereInput
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    cursor?: ConsultoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultoriaScalarFieldEnum | ConsultoriaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    seguidorId: string | null
    seguidoId: string | null
    criadoEm: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    seguidorId: string | null
    seguidoId: string | null
    criadoEm: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    seguidorId: number
    seguidoId: number
    criadoEm: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    seguidorId?: true
    seguidoId?: true
    criadoEm?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    seguidorId?: true
    seguidoId?: true
    criadoEm?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    seguidorId?: true
    seguidoId?: true
    criadoEm?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    seguidorId: string
    seguidoId: string
    criadoEm: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seguidorId?: boolean
    seguidoId?: boolean
    criadoEm?: boolean
    seguidor?: boolean | UserDefaultArgs<ExtArgs>
    seguido?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seguidorId?: boolean
    seguidoId?: boolean
    criadoEm?: boolean
    seguidor?: boolean | UserDefaultArgs<ExtArgs>
    seguido?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    seguidorId?: boolean
    seguidoId?: boolean
    criadoEm?: boolean
  }

  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UserDefaultArgs<ExtArgs>
    seguido?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UserDefaultArgs<ExtArgs>
    seguido?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      seguidor: Prisma.$UserPayload<ExtArgs>
      seguido: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seguidorId: string
      seguidoId: string
      criadoEm: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seguidor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    seguido<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follow model
   */ 
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly seguidorId: FieldRef<"Follow", 'String'>
    readonly seguidoId: FieldRef<"Follow", 'String'>
    readonly criadoEm: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Roteiro
   */

  export type AggregateRoteiro = {
    _count: RoteiroCountAggregateOutputType | null
    _avg: RoteiroAvgAggregateOutputType | null
    _sum: RoteiroSumAggregateOutputType | null
    _min: RoteiroMinAggregateOutputType | null
    _max: RoteiroMaxAggregateOutputType | null
  }

  export type RoteiroAvgAggregateOutputType = {
    orcamento: Decimal | null
    visualizacoes: number | null
  }

  export type RoteiroSumAggregateOutputType = {
    orcamento: Decimal | null
    visualizacoes: number | null
  }

  export type RoteiroMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    destino: string | null
    dataInicio: Date | null
    dataFim: Date | null
    publico: boolean | null
    categoria: $Enums.Categoria | null
    orcamento: Decimal | null
    visualizacoes: number | null
    usuarioId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type RoteiroMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    destino: string | null
    dataInicio: Date | null
    dataFim: Date | null
    publico: boolean | null
    categoria: $Enums.Categoria | null
    orcamento: Decimal | null
    visualizacoes: number | null
    usuarioId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type RoteiroCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    destino: number
    dataInicio: number
    dataFim: number
    publico: number
    categoria: number
    orcamento: number
    visualizacoes: number
    usuarioId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type RoteiroAvgAggregateInputType = {
    orcamento?: true
    visualizacoes?: true
  }

  export type RoteiroSumAggregateInputType = {
    orcamento?: true
    visualizacoes?: true
  }

  export type RoteiroMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    publico?: true
    categoria?: true
    orcamento?: true
    visualizacoes?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type RoteiroMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    publico?: true
    categoria?: true
    orcamento?: true
    visualizacoes?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type RoteiroCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    publico?: true
    categoria?: true
    orcamento?: true
    visualizacoes?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type RoteiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roteiro to aggregate.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roteiros
    **/
    _count?: true | RoteiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoteiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoteiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoteiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoteiroMaxAggregateInputType
  }

  export type GetRoteiroAggregateType<T extends RoteiroAggregateArgs> = {
        [P in keyof T & keyof AggregateRoteiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoteiro[P]>
      : GetScalarType<T[P], AggregateRoteiro[P]>
  }




  export type RoteiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoteiroWhereInput
    orderBy?: RoteiroOrderByWithAggregationInput | RoteiroOrderByWithAggregationInput[]
    by: RoteiroScalarFieldEnum[] | RoteiroScalarFieldEnum
    having?: RoteiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoteiroCountAggregateInputType | true
    _avg?: RoteiroAvgAggregateInputType
    _sum?: RoteiroSumAggregateInputType
    _min?: RoteiroMinAggregateInputType
    _max?: RoteiroMaxAggregateInputType
  }

  export type RoteiroGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    destino: string
    dataInicio: Date
    dataFim: Date
    publico: boolean
    categoria: $Enums.Categoria
    orcamento: Decimal | null
    visualizacoes: number
    usuarioId: string
    criadoEm: Date
    atualizadoEm: Date
    _count: RoteiroCountAggregateOutputType | null
    _avg: RoteiroAvgAggregateOutputType | null
    _sum: RoteiroSumAggregateOutputType | null
    _min: RoteiroMinAggregateOutputType | null
    _max: RoteiroMaxAggregateOutputType | null
  }

  type GetRoteiroGroupByPayload<T extends RoteiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoteiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoteiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoteiroGroupByOutputType[P]>
            : GetScalarType<T[P], RoteiroGroupByOutputType[P]>
        }
      >
    >


  export type RoteiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    publico?: boolean
    categoria?: boolean
    orcamento?: boolean
    visualizacoes?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    dias?: boolean | Roteiro$diasArgs<ExtArgs>
    avaliacoes?: boolean | Roteiro$avaliacoesArgs<ExtArgs>
    comentarios?: boolean | Roteiro$comentariosArgs<ExtArgs>
    ingressos?: boolean | Roteiro$ingressosArgs<ExtArgs>
    _count?: boolean | RoteiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roteiro"]>

  export type RoteiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    publico?: boolean
    categoria?: boolean
    orcamento?: boolean
    visualizacoes?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roteiro"]>

  export type RoteiroSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    publico?: boolean
    categoria?: boolean
    orcamento?: boolean
    visualizacoes?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type RoteiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    dias?: boolean | Roteiro$diasArgs<ExtArgs>
    avaliacoes?: boolean | Roteiro$avaliacoesArgs<ExtArgs>
    comentarios?: boolean | Roteiro$comentariosArgs<ExtArgs>
    ingressos?: boolean | Roteiro$ingressosArgs<ExtArgs>
    _count?: boolean | RoteiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoteiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoteiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roteiro"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      dias: Prisma.$DiaRoteiroPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      destino: string
      dataInicio: Date
      dataFim: Date
      publico: boolean
      categoria: $Enums.Categoria
      orcamento: Prisma.Decimal | null
      visualizacoes: number
      usuarioId: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["roteiro"]>
    composites: {}
  }

  type RoteiroGetPayload<S extends boolean | null | undefined | RoteiroDefaultArgs> = $Result.GetResult<Prisma.$RoteiroPayload, S>

  type RoteiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoteiroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoteiroCountAggregateInputType | true
    }

  export interface RoteiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roteiro'], meta: { name: 'Roteiro' } }
    /**
     * Find zero or one Roteiro that matches the filter.
     * @param {RoteiroFindUniqueArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoteiroFindUniqueArgs>(args: SelectSubset<T, RoteiroFindUniqueArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Roteiro that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoteiroFindUniqueOrThrowArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoteiroFindUniqueOrThrowArgs>(args: SelectSubset<T, RoteiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Roteiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindFirstArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoteiroFindFirstArgs>(args?: SelectSubset<T, RoteiroFindFirstArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Roteiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindFirstOrThrowArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoteiroFindFirstOrThrowArgs>(args?: SelectSubset<T, RoteiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roteiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roteiros
     * const roteiros = await prisma.roteiro.findMany()
     * 
     * // Get first 10 Roteiros
     * const roteiros = await prisma.roteiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roteiroWithIdOnly = await prisma.roteiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoteiroFindManyArgs>(args?: SelectSubset<T, RoteiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Roteiro.
     * @param {RoteiroCreateArgs} args - Arguments to create a Roteiro.
     * @example
     * // Create one Roteiro
     * const Roteiro = await prisma.roteiro.create({
     *   data: {
     *     // ... data to create a Roteiro
     *   }
     * })
     * 
     */
    create<T extends RoteiroCreateArgs>(args: SelectSubset<T, RoteiroCreateArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roteiros.
     * @param {RoteiroCreateManyArgs} args - Arguments to create many Roteiros.
     * @example
     * // Create many Roteiros
     * const roteiro = await prisma.roteiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoteiroCreateManyArgs>(args?: SelectSubset<T, RoteiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roteiros and returns the data saved in the database.
     * @param {RoteiroCreateManyAndReturnArgs} args - Arguments to create many Roteiros.
     * @example
     * // Create many Roteiros
     * const roteiro = await prisma.roteiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roteiros and only return the `id`
     * const roteiroWithIdOnly = await prisma.roteiro.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoteiroCreateManyAndReturnArgs>(args?: SelectSubset<T, RoteiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Roteiro.
     * @param {RoteiroDeleteArgs} args - Arguments to delete one Roteiro.
     * @example
     * // Delete one Roteiro
     * const Roteiro = await prisma.roteiro.delete({
     *   where: {
     *     // ... filter to delete one Roteiro
     *   }
     * })
     * 
     */
    delete<T extends RoteiroDeleteArgs>(args: SelectSubset<T, RoteiroDeleteArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Roteiro.
     * @param {RoteiroUpdateArgs} args - Arguments to update one Roteiro.
     * @example
     * // Update one Roteiro
     * const roteiro = await prisma.roteiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoteiroUpdateArgs>(args: SelectSubset<T, RoteiroUpdateArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roteiros.
     * @param {RoteiroDeleteManyArgs} args - Arguments to filter Roteiros to delete.
     * @example
     * // Delete a few Roteiros
     * const { count } = await prisma.roteiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoteiroDeleteManyArgs>(args?: SelectSubset<T, RoteiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roteiros
     * const roteiro = await prisma.roteiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoteiroUpdateManyArgs>(args: SelectSubset<T, RoteiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roteiro.
     * @param {RoteiroUpsertArgs} args - Arguments to update or create a Roteiro.
     * @example
     * // Update or create a Roteiro
     * const roteiro = await prisma.roteiro.upsert({
     *   create: {
     *     // ... data to create a Roteiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roteiro we want to update
     *   }
     * })
     */
    upsert<T extends RoteiroUpsertArgs>(args: SelectSubset<T, RoteiroUpsertArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroCountArgs} args - Arguments to filter Roteiros to count.
     * @example
     * // Count the number of Roteiros
     * const count = await prisma.roteiro.count({
     *   where: {
     *     // ... the filter for the Roteiros we want to count
     *   }
     * })
    **/
    count<T extends RoteiroCountArgs>(
      args?: Subset<T, RoteiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoteiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoteiroAggregateArgs>(args: Subset<T, RoteiroAggregateArgs>): Prisma.PrismaPromise<GetRoteiroAggregateType<T>>

    /**
     * Group by Roteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoteiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoteiroGroupByArgs['orderBy'] }
        : { orderBy?: RoteiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoteiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoteiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roteiro model
   */
  readonly fields: RoteiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roteiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoteiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dias<T extends Roteiro$diasArgs<ExtArgs> = {}>(args?: Subset<T, Roteiro$diasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacoes<T extends Roteiro$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Roteiro$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
    comentarios<T extends Roteiro$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Roteiro$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany"> | Null>
    ingressos<T extends Roteiro$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Roteiro$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roteiro model
   */ 
  interface RoteiroFieldRefs {
    readonly id: FieldRef<"Roteiro", 'String'>
    readonly titulo: FieldRef<"Roteiro", 'String'>
    readonly descricao: FieldRef<"Roteiro", 'String'>
    readonly destino: FieldRef<"Roteiro", 'String'>
    readonly dataInicio: FieldRef<"Roteiro", 'DateTime'>
    readonly dataFim: FieldRef<"Roteiro", 'DateTime'>
    readonly publico: FieldRef<"Roteiro", 'Boolean'>
    readonly categoria: FieldRef<"Roteiro", 'Categoria'>
    readonly orcamento: FieldRef<"Roteiro", 'Decimal'>
    readonly visualizacoes: FieldRef<"Roteiro", 'Int'>
    readonly usuarioId: FieldRef<"Roteiro", 'String'>
    readonly criadoEm: FieldRef<"Roteiro", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Roteiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roteiro findUnique
   */
  export type RoteiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro findUniqueOrThrow
   */
  export type RoteiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro findFirst
   */
  export type RoteiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roteiros.
     */
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro findFirstOrThrow
   */
  export type RoteiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roteiros.
     */
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro findMany
   */
  export type RoteiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter, which Roteiros to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro create
   */
  export type RoteiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Roteiro.
     */
    data: XOR<RoteiroCreateInput, RoteiroUncheckedCreateInput>
  }

  /**
   * Roteiro createMany
   */
  export type RoteiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roteiros.
     */
    data: RoteiroCreateManyInput | RoteiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roteiro createManyAndReturn
   */
  export type RoteiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roteiros.
     */
    data: RoteiroCreateManyInput | RoteiroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roteiro update
   */
  export type RoteiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Roteiro.
     */
    data: XOR<RoteiroUpdateInput, RoteiroUncheckedUpdateInput>
    /**
     * Choose, which Roteiro to update.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro updateMany
   */
  export type RoteiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roteiros.
     */
    data: XOR<RoteiroUpdateManyMutationInput, RoteiroUncheckedUpdateManyInput>
    /**
     * Filter which Roteiros to update
     */
    where?: RoteiroWhereInput
  }

  /**
   * Roteiro upsert
   */
  export type RoteiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Roteiro to update in case it exists.
     */
    where: RoteiroWhereUniqueInput
    /**
     * In case the Roteiro found by the `where` argument doesn't exist, create a new Roteiro with this data.
     */
    create: XOR<RoteiroCreateInput, RoteiroUncheckedCreateInput>
    /**
     * In case the Roteiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoteiroUpdateInput, RoteiroUncheckedUpdateInput>
  }

  /**
   * Roteiro delete
   */
  export type RoteiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    /**
     * Filter which Roteiro to delete.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro deleteMany
   */
  export type RoteiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roteiros to delete
     */
    where?: RoteiroWhereInput
  }

  /**
   * Roteiro.dias
   */
  export type Roteiro$diasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    where?: DiaRoteiroWhereInput
    orderBy?: DiaRoteiroOrderByWithRelationInput | DiaRoteiroOrderByWithRelationInput[]
    cursor?: DiaRoteiroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaRoteiroScalarFieldEnum | DiaRoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro.avaliacoes
   */
  export type Roteiro$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Roteiro.comentarios
   */
  export type Roteiro$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Roteiro.ingressos
   */
  export type Roteiro$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Roteiro without action
   */
  export type RoteiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
  }


  /**
   * Model DiaRoteiro
   */

  export type AggregateDiaRoteiro = {
    _count: DiaRoteiroCountAggregateOutputType | null
    _avg: DiaRoteiroAvgAggregateOutputType | null
    _sum: DiaRoteiroSumAggregateOutputType | null
    _min: DiaRoteiroMinAggregateOutputType | null
    _max: DiaRoteiroMaxAggregateOutputType | null
  }

  export type DiaRoteiroAvgAggregateOutputType = {
    ordem: number | null
  }

  export type DiaRoteiroSumAggregateOutputType = {
    ordem: number | null
  }

  export type DiaRoteiroMinAggregateOutputType = {
    id: string | null
    data: Date | null
    ordem: number | null
    roteiroId: string | null
    criadoEm: Date | null
  }

  export type DiaRoteiroMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    ordem: number | null
    roteiroId: string | null
    criadoEm: Date | null
  }

  export type DiaRoteiroCountAggregateOutputType = {
    id: number
    data: number
    ordem: number
    roteiroId: number
    criadoEm: number
    _all: number
  }


  export type DiaRoteiroAvgAggregateInputType = {
    ordem?: true
  }

  export type DiaRoteiroSumAggregateInputType = {
    ordem?: true
  }

  export type DiaRoteiroMinAggregateInputType = {
    id?: true
    data?: true
    ordem?: true
    roteiroId?: true
    criadoEm?: true
  }

  export type DiaRoteiroMaxAggregateInputType = {
    id?: true
    data?: true
    ordem?: true
    roteiroId?: true
    criadoEm?: true
  }

  export type DiaRoteiroCountAggregateInputType = {
    id?: true
    data?: true
    ordem?: true
    roteiroId?: true
    criadoEm?: true
    _all?: true
  }

  export type DiaRoteiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaRoteiro to aggregate.
     */
    where?: DiaRoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaRoteiros to fetch.
     */
    orderBy?: DiaRoteiroOrderByWithRelationInput | DiaRoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaRoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaRoteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaRoteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaRoteiros
    **/
    _count?: true | DiaRoteiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiaRoteiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiaRoteiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaRoteiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaRoteiroMaxAggregateInputType
  }

  export type GetDiaRoteiroAggregateType<T extends DiaRoteiroAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaRoteiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaRoteiro[P]>
      : GetScalarType<T[P], AggregateDiaRoteiro[P]>
  }




  export type DiaRoteiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaRoteiroWhereInput
    orderBy?: DiaRoteiroOrderByWithAggregationInput | DiaRoteiroOrderByWithAggregationInput[]
    by: DiaRoteiroScalarFieldEnum[] | DiaRoteiroScalarFieldEnum
    having?: DiaRoteiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaRoteiroCountAggregateInputType | true
    _avg?: DiaRoteiroAvgAggregateInputType
    _sum?: DiaRoteiroSumAggregateInputType
    _min?: DiaRoteiroMinAggregateInputType
    _max?: DiaRoteiroMaxAggregateInputType
  }

  export type DiaRoteiroGroupByOutputType = {
    id: string
    data: Date
    ordem: number
    roteiroId: string
    criadoEm: Date
    _count: DiaRoteiroCountAggregateOutputType | null
    _avg: DiaRoteiroAvgAggregateOutputType | null
    _sum: DiaRoteiroSumAggregateOutputType | null
    _min: DiaRoteiroMinAggregateOutputType | null
    _max: DiaRoteiroMaxAggregateOutputType | null
  }

  type GetDiaRoteiroGroupByPayload<T extends DiaRoteiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaRoteiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaRoteiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaRoteiroGroupByOutputType[P]>
            : GetScalarType<T[P], DiaRoteiroGroupByOutputType[P]>
        }
      >
    >


  export type DiaRoteiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    ordem?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    atracoes?: boolean | DiaRoteiro$atracoesArgs<ExtArgs>
    _count?: boolean | DiaRoteiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaRoteiro"]>

  export type DiaRoteiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    ordem?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaRoteiro"]>

  export type DiaRoteiroSelectScalar = {
    id?: boolean
    data?: boolean
    ordem?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
  }

  export type DiaRoteiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    atracoes?: boolean | DiaRoteiro$atracoesArgs<ExtArgs>
    _count?: boolean | DiaRoteiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaRoteiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
  }

  export type $DiaRoteiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaRoteiro"
    objects: {
      roteiro: Prisma.$RoteiroPayload<ExtArgs>
      atracoes: Prisma.$AtracaoDiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      ordem: number
      roteiroId: string
      criadoEm: Date
    }, ExtArgs["result"]["diaRoteiro"]>
    composites: {}
  }

  type DiaRoteiroGetPayload<S extends boolean | null | undefined | DiaRoteiroDefaultArgs> = $Result.GetResult<Prisma.$DiaRoteiroPayload, S>

  type DiaRoteiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiaRoteiroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiaRoteiroCountAggregateInputType | true
    }

  export interface DiaRoteiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaRoteiro'], meta: { name: 'DiaRoteiro' } }
    /**
     * Find zero or one DiaRoteiro that matches the filter.
     * @param {DiaRoteiroFindUniqueArgs} args - Arguments to find a DiaRoteiro
     * @example
     * // Get one DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaRoteiroFindUniqueArgs>(args: SelectSubset<T, DiaRoteiroFindUniqueArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiaRoteiro that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiaRoteiroFindUniqueOrThrowArgs} args - Arguments to find a DiaRoteiro
     * @example
     * // Get one DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaRoteiroFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaRoteiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiaRoteiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroFindFirstArgs} args - Arguments to find a DiaRoteiro
     * @example
     * // Get one DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaRoteiroFindFirstArgs>(args?: SelectSubset<T, DiaRoteiroFindFirstArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiaRoteiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroFindFirstOrThrowArgs} args - Arguments to find a DiaRoteiro
     * @example
     * // Get one DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaRoteiroFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaRoteiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiaRoteiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaRoteiros
     * const diaRoteiros = await prisma.diaRoteiro.findMany()
     * 
     * // Get first 10 DiaRoteiros
     * const diaRoteiros = await prisma.diaRoteiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaRoteiroWithIdOnly = await prisma.diaRoteiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaRoteiroFindManyArgs>(args?: SelectSubset<T, DiaRoteiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiaRoteiro.
     * @param {DiaRoteiroCreateArgs} args - Arguments to create a DiaRoteiro.
     * @example
     * // Create one DiaRoteiro
     * const DiaRoteiro = await prisma.diaRoteiro.create({
     *   data: {
     *     // ... data to create a DiaRoteiro
     *   }
     * })
     * 
     */
    create<T extends DiaRoteiroCreateArgs>(args: SelectSubset<T, DiaRoteiroCreateArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiaRoteiros.
     * @param {DiaRoteiroCreateManyArgs} args - Arguments to create many DiaRoteiros.
     * @example
     * // Create many DiaRoteiros
     * const diaRoteiro = await prisma.diaRoteiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaRoteiroCreateManyArgs>(args?: SelectSubset<T, DiaRoteiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiaRoteiros and returns the data saved in the database.
     * @param {DiaRoteiroCreateManyAndReturnArgs} args - Arguments to create many DiaRoteiros.
     * @example
     * // Create many DiaRoteiros
     * const diaRoteiro = await prisma.diaRoteiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiaRoteiros and only return the `id`
     * const diaRoteiroWithIdOnly = await prisma.diaRoteiro.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaRoteiroCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaRoteiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiaRoteiro.
     * @param {DiaRoteiroDeleteArgs} args - Arguments to delete one DiaRoteiro.
     * @example
     * // Delete one DiaRoteiro
     * const DiaRoteiro = await prisma.diaRoteiro.delete({
     *   where: {
     *     // ... filter to delete one DiaRoteiro
     *   }
     * })
     * 
     */
    delete<T extends DiaRoteiroDeleteArgs>(args: SelectSubset<T, DiaRoteiroDeleteArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiaRoteiro.
     * @param {DiaRoteiroUpdateArgs} args - Arguments to update one DiaRoteiro.
     * @example
     * // Update one DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaRoteiroUpdateArgs>(args: SelectSubset<T, DiaRoteiroUpdateArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiaRoteiros.
     * @param {DiaRoteiroDeleteManyArgs} args - Arguments to filter DiaRoteiros to delete.
     * @example
     * // Delete a few DiaRoteiros
     * const { count } = await prisma.diaRoteiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaRoteiroDeleteManyArgs>(args?: SelectSubset<T, DiaRoteiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaRoteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaRoteiros
     * const diaRoteiro = await prisma.diaRoteiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaRoteiroUpdateManyArgs>(args: SelectSubset<T, DiaRoteiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiaRoteiro.
     * @param {DiaRoteiroUpsertArgs} args - Arguments to update or create a DiaRoteiro.
     * @example
     * // Update or create a DiaRoteiro
     * const diaRoteiro = await prisma.diaRoteiro.upsert({
     *   create: {
     *     // ... data to create a DiaRoteiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaRoteiro we want to update
     *   }
     * })
     */
    upsert<T extends DiaRoteiroUpsertArgs>(args: SelectSubset<T, DiaRoteiroUpsertArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiaRoteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroCountArgs} args - Arguments to filter DiaRoteiros to count.
     * @example
     * // Count the number of DiaRoteiros
     * const count = await prisma.diaRoteiro.count({
     *   where: {
     *     // ... the filter for the DiaRoteiros we want to count
     *   }
     * })
    **/
    count<T extends DiaRoteiroCountArgs>(
      args?: Subset<T, DiaRoteiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaRoteiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaRoteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiaRoteiroAggregateArgs>(args: Subset<T, DiaRoteiroAggregateArgs>): Prisma.PrismaPromise<GetDiaRoteiroAggregateType<T>>

    /**
     * Group by DiaRoteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaRoteiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiaRoteiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaRoteiroGroupByArgs['orderBy'] }
        : { orderBy?: DiaRoteiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiaRoteiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaRoteiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaRoteiro model
   */
  readonly fields: DiaRoteiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaRoteiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaRoteiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roteiro<T extends RoteiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoteiroDefaultArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    atracoes<T extends DiaRoteiro$atracoesArgs<ExtArgs> = {}>(args?: Subset<T, DiaRoteiro$atracoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiaRoteiro model
   */ 
  interface DiaRoteiroFieldRefs {
    readonly id: FieldRef<"DiaRoteiro", 'String'>
    readonly data: FieldRef<"DiaRoteiro", 'DateTime'>
    readonly ordem: FieldRef<"DiaRoteiro", 'Int'>
    readonly roteiroId: FieldRef<"DiaRoteiro", 'String'>
    readonly criadoEm: FieldRef<"DiaRoteiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiaRoteiro findUnique
   */
  export type DiaRoteiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter, which DiaRoteiro to fetch.
     */
    where: DiaRoteiroWhereUniqueInput
  }

  /**
   * DiaRoteiro findUniqueOrThrow
   */
  export type DiaRoteiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter, which DiaRoteiro to fetch.
     */
    where: DiaRoteiroWhereUniqueInput
  }

  /**
   * DiaRoteiro findFirst
   */
  export type DiaRoteiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter, which DiaRoteiro to fetch.
     */
    where?: DiaRoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaRoteiros to fetch.
     */
    orderBy?: DiaRoteiroOrderByWithRelationInput | DiaRoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaRoteiros.
     */
    cursor?: DiaRoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaRoteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaRoteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaRoteiros.
     */
    distinct?: DiaRoteiroScalarFieldEnum | DiaRoteiroScalarFieldEnum[]
  }

  /**
   * DiaRoteiro findFirstOrThrow
   */
  export type DiaRoteiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter, which DiaRoteiro to fetch.
     */
    where?: DiaRoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaRoteiros to fetch.
     */
    orderBy?: DiaRoteiroOrderByWithRelationInput | DiaRoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaRoteiros.
     */
    cursor?: DiaRoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaRoteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaRoteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaRoteiros.
     */
    distinct?: DiaRoteiroScalarFieldEnum | DiaRoteiroScalarFieldEnum[]
  }

  /**
   * DiaRoteiro findMany
   */
  export type DiaRoteiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter, which DiaRoteiros to fetch.
     */
    where?: DiaRoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaRoteiros to fetch.
     */
    orderBy?: DiaRoteiroOrderByWithRelationInput | DiaRoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaRoteiros.
     */
    cursor?: DiaRoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaRoteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaRoteiros.
     */
    skip?: number
    distinct?: DiaRoteiroScalarFieldEnum | DiaRoteiroScalarFieldEnum[]
  }

  /**
   * DiaRoteiro create
   */
  export type DiaRoteiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaRoteiro.
     */
    data: XOR<DiaRoteiroCreateInput, DiaRoteiroUncheckedCreateInput>
  }

  /**
   * DiaRoteiro createMany
   */
  export type DiaRoteiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaRoteiros.
     */
    data: DiaRoteiroCreateManyInput | DiaRoteiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaRoteiro createManyAndReturn
   */
  export type DiaRoteiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiaRoteiros.
     */
    data: DiaRoteiroCreateManyInput | DiaRoteiroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiaRoteiro update
   */
  export type DiaRoteiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaRoteiro.
     */
    data: XOR<DiaRoteiroUpdateInput, DiaRoteiroUncheckedUpdateInput>
    /**
     * Choose, which DiaRoteiro to update.
     */
    where: DiaRoteiroWhereUniqueInput
  }

  /**
   * DiaRoteiro updateMany
   */
  export type DiaRoteiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaRoteiros.
     */
    data: XOR<DiaRoteiroUpdateManyMutationInput, DiaRoteiroUncheckedUpdateManyInput>
    /**
     * Filter which DiaRoteiros to update
     */
    where?: DiaRoteiroWhereInput
  }

  /**
   * DiaRoteiro upsert
   */
  export type DiaRoteiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaRoteiro to update in case it exists.
     */
    where: DiaRoteiroWhereUniqueInput
    /**
     * In case the DiaRoteiro found by the `where` argument doesn't exist, create a new DiaRoteiro with this data.
     */
    create: XOR<DiaRoteiroCreateInput, DiaRoteiroUncheckedCreateInput>
    /**
     * In case the DiaRoteiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaRoteiroUpdateInput, DiaRoteiroUncheckedUpdateInput>
  }

  /**
   * DiaRoteiro delete
   */
  export type DiaRoteiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
    /**
     * Filter which DiaRoteiro to delete.
     */
    where: DiaRoteiroWhereUniqueInput
  }

  /**
   * DiaRoteiro deleteMany
   */
  export type DiaRoteiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaRoteiros to delete
     */
    where?: DiaRoteiroWhereInput
  }

  /**
   * DiaRoteiro.atracoes
   */
  export type DiaRoteiro$atracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    where?: AtracaoDiaWhereInput
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    cursor?: AtracaoDiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtracaoDiaScalarFieldEnum | AtracaoDiaScalarFieldEnum[]
  }

  /**
   * DiaRoteiro without action
   */
  export type DiaRoteiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaRoteiro
     */
    select?: DiaRoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaRoteiroInclude<ExtArgs> | null
  }


  /**
   * Model Atracao
   */

  export type AggregateAtracao = {
    _count: AtracaoCountAggregateOutputType | null
    _avg: AtracaoAvgAggregateOutputType | null
    _sum: AtracaoSumAggregateOutputType | null
    _min: AtracaoMinAggregateOutputType | null
    _max: AtracaoMaxAggregateOutputType | null
  }

  export type AtracaoAvgAggregateOutputType = {
    preco: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
    duracaoEstimada: number | null
    avaliacaoMedia: Decimal | null
    totalAvaliacoes: number | null
  }

  export type AtracaoSumAggregateOutputType = {
    preco: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
    duracaoEstimada: number | null
    avaliacaoMedia: Decimal | null
    totalAvaliacoes: number | null
  }

  export type AtracaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    categoria: $Enums.Categoria | null
    preco: Decimal | null
    moeda: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    endereco: string | null
    parceiro: $Enums.Parceiro | null
    linkAfiliado: string | null
    duracaoEstimada: number | null
    avaliacaoMedia: Decimal | null
    totalAvaliacoes: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AtracaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    categoria: $Enums.Categoria | null
    preco: Decimal | null
    moeda: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    endereco: string | null
    parceiro: $Enums.Parceiro | null
    linkAfiliado: string | null
    duracaoEstimada: number | null
    avaliacaoMedia: Decimal | null
    totalAvaliacoes: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AtracaoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    categoria: number
    preco: number
    moeda: number
    latitude: number
    longitude: number
    endereco: number
    parceiro: number
    linkAfiliado: number
    duracaoEstimada: number
    avaliacaoMedia: number
    totalAvaliacoes: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type AtracaoAvgAggregateInputType = {
    preco?: true
    latitude?: true
    longitude?: true
    duracaoEstimada?: true
    avaliacaoMedia?: true
    totalAvaliacoes?: true
  }

  export type AtracaoSumAggregateInputType = {
    preco?: true
    latitude?: true
    longitude?: true
    duracaoEstimada?: true
    avaliacaoMedia?: true
    totalAvaliacoes?: true
  }

  export type AtracaoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    preco?: true
    moeda?: true
    latitude?: true
    longitude?: true
    endereco?: true
    parceiro?: true
    linkAfiliado?: true
    duracaoEstimada?: true
    avaliacaoMedia?: true
    totalAvaliacoes?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AtracaoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    preco?: true
    moeda?: true
    latitude?: true
    longitude?: true
    endereco?: true
    parceiro?: true
    linkAfiliado?: true
    duracaoEstimada?: true
    avaliacaoMedia?: true
    totalAvaliacoes?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AtracaoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    preco?: true
    moeda?: true
    latitude?: true
    longitude?: true
    endereco?: true
    parceiro?: true
    linkAfiliado?: true
    duracaoEstimada?: true
    avaliacaoMedia?: true
    totalAvaliacoes?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type AtracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atracao to aggregate.
     */
    where?: AtracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atracaos to fetch.
     */
    orderBy?: AtracaoOrderByWithRelationInput | AtracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atracaos
    **/
    _count?: true | AtracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtracaoMaxAggregateInputType
  }

  export type GetAtracaoAggregateType<T extends AtracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtracao[P]>
      : GetScalarType<T[P], AggregateAtracao[P]>
  }




  export type AtracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtracaoWhereInput
    orderBy?: AtracaoOrderByWithAggregationInput | AtracaoOrderByWithAggregationInput[]
    by: AtracaoScalarFieldEnum[] | AtracaoScalarFieldEnum
    having?: AtracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtracaoCountAggregateInputType | true
    _avg?: AtracaoAvgAggregateInputType
    _sum?: AtracaoSumAggregateInputType
    _min?: AtracaoMinAggregateInputType
    _max?: AtracaoMaxAggregateInputType
  }

  export type AtracaoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco: Decimal | null
    moeda: string
    latitude: Decimal
    longitude: Decimal
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia: Decimal
    totalAvaliacoes: number
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    _count: AtracaoCountAggregateOutputType | null
    _avg: AtracaoAvgAggregateOutputType | null
    _sum: AtracaoSumAggregateOutputType | null
    _min: AtracaoMinAggregateOutputType | null
    _max: AtracaoMaxAggregateOutputType | null
  }

  type GetAtracaoGroupByPayload<T extends AtracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtracaoGroupByOutputType[P]>
            : GetScalarType<T[P], AtracaoGroupByOutputType[P]>
        }
      >
    >


  export type AtracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    preco?: boolean
    moeda?: boolean
    latitude?: boolean
    longitude?: boolean
    endereco?: boolean
    parceiro?: boolean
    linkAfiliado?: boolean
    duracaoEstimada?: boolean
    avaliacaoMedia?: boolean
    totalAvaliacoes?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    dias?: boolean | Atracao$diasArgs<ExtArgs>
    avaliacoes?: boolean | Atracao$avaliacoesArgs<ExtArgs>
    ingressos?: boolean | Atracao$ingressosArgs<ExtArgs>
    _count?: boolean | AtracaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atracao"]>

  export type AtracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    preco?: boolean
    moeda?: boolean
    latitude?: boolean
    longitude?: boolean
    endereco?: boolean
    parceiro?: boolean
    linkAfiliado?: boolean
    duracaoEstimada?: boolean
    avaliacaoMedia?: boolean
    totalAvaliacoes?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["atracao"]>

  export type AtracaoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    preco?: boolean
    moeda?: boolean
    latitude?: boolean
    longitude?: boolean
    endereco?: boolean
    parceiro?: boolean
    linkAfiliado?: boolean
    duracaoEstimada?: boolean
    avaliacaoMedia?: boolean
    totalAvaliacoes?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type AtracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dias?: boolean | Atracao$diasArgs<ExtArgs>
    avaliacoes?: boolean | Atracao$avaliacoesArgs<ExtArgs>
    ingressos?: boolean | Atracao$ingressosArgs<ExtArgs>
    _count?: boolean | AtracaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtracaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AtracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atracao"
    objects: {
      dias: Prisma.$AtracaoDiaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      categoria: $Enums.Categoria
      preco: Prisma.Decimal | null
      moeda: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      endereco: string
      parceiro: $Enums.Parceiro
      linkAfiliado: string
      duracaoEstimada: number
      avaliacaoMedia: Prisma.Decimal
      totalAvaliacoes: number
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["atracao"]>
    composites: {}
  }

  type AtracaoGetPayload<S extends boolean | null | undefined | AtracaoDefaultArgs> = $Result.GetResult<Prisma.$AtracaoPayload, S>

  type AtracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AtracaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtracaoCountAggregateInputType | true
    }

  export interface AtracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atracao'], meta: { name: 'Atracao' } }
    /**
     * Find zero or one Atracao that matches the filter.
     * @param {AtracaoFindUniqueArgs} args - Arguments to find a Atracao
     * @example
     * // Get one Atracao
     * const atracao = await prisma.atracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtracaoFindUniqueArgs>(args: SelectSubset<T, AtracaoFindUniqueArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Atracao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AtracaoFindUniqueOrThrowArgs} args - Arguments to find a Atracao
     * @example
     * // Get one Atracao
     * const atracao = await prisma.atracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Atracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoFindFirstArgs} args - Arguments to find a Atracao
     * @example
     * // Get one Atracao
     * const atracao = await prisma.atracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtracaoFindFirstArgs>(args?: SelectSubset<T, AtracaoFindFirstArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Atracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoFindFirstOrThrowArgs} args - Arguments to find a Atracao
     * @example
     * // Get one Atracao
     * const atracao = await prisma.atracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Atracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atracaos
     * const atracaos = await prisma.atracao.findMany()
     * 
     * // Get first 10 Atracaos
     * const atracaos = await prisma.atracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atracaoWithIdOnly = await prisma.atracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtracaoFindManyArgs>(args?: SelectSubset<T, AtracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Atracao.
     * @param {AtracaoCreateArgs} args - Arguments to create a Atracao.
     * @example
     * // Create one Atracao
     * const Atracao = await prisma.atracao.create({
     *   data: {
     *     // ... data to create a Atracao
     *   }
     * })
     * 
     */
    create<T extends AtracaoCreateArgs>(args: SelectSubset<T, AtracaoCreateArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Atracaos.
     * @param {AtracaoCreateManyArgs} args - Arguments to create many Atracaos.
     * @example
     * // Create many Atracaos
     * const atracao = await prisma.atracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtracaoCreateManyArgs>(args?: SelectSubset<T, AtracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atracaos and returns the data saved in the database.
     * @param {AtracaoCreateManyAndReturnArgs} args - Arguments to create many Atracaos.
     * @example
     * // Create many Atracaos
     * const atracao = await prisma.atracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atracaos and only return the `id`
     * const atracaoWithIdOnly = await prisma.atracao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Atracao.
     * @param {AtracaoDeleteArgs} args - Arguments to delete one Atracao.
     * @example
     * // Delete one Atracao
     * const Atracao = await prisma.atracao.delete({
     *   where: {
     *     // ... filter to delete one Atracao
     *   }
     * })
     * 
     */
    delete<T extends AtracaoDeleteArgs>(args: SelectSubset<T, AtracaoDeleteArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Atracao.
     * @param {AtracaoUpdateArgs} args - Arguments to update one Atracao.
     * @example
     * // Update one Atracao
     * const atracao = await prisma.atracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtracaoUpdateArgs>(args: SelectSubset<T, AtracaoUpdateArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Atracaos.
     * @param {AtracaoDeleteManyArgs} args - Arguments to filter Atracaos to delete.
     * @example
     * // Delete a few Atracaos
     * const { count } = await prisma.atracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtracaoDeleteManyArgs>(args?: SelectSubset<T, AtracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atracaos
     * const atracao = await prisma.atracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtracaoUpdateManyArgs>(args: SelectSubset<T, AtracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atracao.
     * @param {AtracaoUpsertArgs} args - Arguments to update or create a Atracao.
     * @example
     * // Update or create a Atracao
     * const atracao = await prisma.atracao.upsert({
     *   create: {
     *     // ... data to create a Atracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atracao we want to update
     *   }
     * })
     */
    upsert<T extends AtracaoUpsertArgs>(args: SelectSubset<T, AtracaoUpsertArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Atracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoCountArgs} args - Arguments to filter Atracaos to count.
     * @example
     * // Count the number of Atracaos
     * const count = await prisma.atracao.count({
     *   where: {
     *     // ... the filter for the Atracaos we want to count
     *   }
     * })
    **/
    count<T extends AtracaoCountArgs>(
      args?: Subset<T, AtracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtracaoAggregateArgs>(args: Subset<T, AtracaoAggregateArgs>): Prisma.PrismaPromise<GetAtracaoAggregateType<T>>

    /**
     * Group by Atracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtracaoGroupByArgs['orderBy'] }
        : { orderBy?: AtracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atracao model
   */
  readonly fields: AtracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dias<T extends Atracao$diasArgs<ExtArgs> = {}>(args?: Subset<T, Atracao$diasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacoes<T extends Atracao$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Atracao$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
    ingressos<T extends Atracao$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Atracao$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atracao model
   */ 
  interface AtracaoFieldRefs {
    readonly id: FieldRef<"Atracao", 'String'>
    readonly nome: FieldRef<"Atracao", 'String'>
    readonly descricao: FieldRef<"Atracao", 'String'>
    readonly categoria: FieldRef<"Atracao", 'Categoria'>
    readonly preco: FieldRef<"Atracao", 'Decimal'>
    readonly moeda: FieldRef<"Atracao", 'String'>
    readonly latitude: FieldRef<"Atracao", 'Decimal'>
    readonly longitude: FieldRef<"Atracao", 'Decimal'>
    readonly endereco: FieldRef<"Atracao", 'String'>
    readonly parceiro: FieldRef<"Atracao", 'Parceiro'>
    readonly linkAfiliado: FieldRef<"Atracao", 'String'>
    readonly duracaoEstimada: FieldRef<"Atracao", 'Int'>
    readonly avaliacaoMedia: FieldRef<"Atracao", 'Decimal'>
    readonly totalAvaliacoes: FieldRef<"Atracao", 'Int'>
    readonly ativo: FieldRef<"Atracao", 'Boolean'>
    readonly criadoEm: FieldRef<"Atracao", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Atracao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atracao findUnique
   */
  export type AtracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter, which Atracao to fetch.
     */
    where: AtracaoWhereUniqueInput
  }

  /**
   * Atracao findUniqueOrThrow
   */
  export type AtracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter, which Atracao to fetch.
     */
    where: AtracaoWhereUniqueInput
  }

  /**
   * Atracao findFirst
   */
  export type AtracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter, which Atracao to fetch.
     */
    where?: AtracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atracaos to fetch.
     */
    orderBy?: AtracaoOrderByWithRelationInput | AtracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atracaos.
     */
    cursor?: AtracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atracaos.
     */
    distinct?: AtracaoScalarFieldEnum | AtracaoScalarFieldEnum[]
  }

  /**
   * Atracao findFirstOrThrow
   */
  export type AtracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter, which Atracao to fetch.
     */
    where?: AtracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atracaos to fetch.
     */
    orderBy?: AtracaoOrderByWithRelationInput | AtracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atracaos.
     */
    cursor?: AtracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atracaos.
     */
    distinct?: AtracaoScalarFieldEnum | AtracaoScalarFieldEnum[]
  }

  /**
   * Atracao findMany
   */
  export type AtracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter, which Atracaos to fetch.
     */
    where?: AtracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atracaos to fetch.
     */
    orderBy?: AtracaoOrderByWithRelationInput | AtracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atracaos.
     */
    cursor?: AtracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atracaos.
     */
    skip?: number
    distinct?: AtracaoScalarFieldEnum | AtracaoScalarFieldEnum[]
  }

  /**
   * Atracao create
   */
  export type AtracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atracao.
     */
    data: XOR<AtracaoCreateInput, AtracaoUncheckedCreateInput>
  }

  /**
   * Atracao createMany
   */
  export type AtracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atracaos.
     */
    data: AtracaoCreateManyInput | AtracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atracao createManyAndReturn
   */
  export type AtracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Atracaos.
     */
    data: AtracaoCreateManyInput | AtracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atracao update
   */
  export type AtracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atracao.
     */
    data: XOR<AtracaoUpdateInput, AtracaoUncheckedUpdateInput>
    /**
     * Choose, which Atracao to update.
     */
    where: AtracaoWhereUniqueInput
  }

  /**
   * Atracao updateMany
   */
  export type AtracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atracaos.
     */
    data: XOR<AtracaoUpdateManyMutationInput, AtracaoUncheckedUpdateManyInput>
    /**
     * Filter which Atracaos to update
     */
    where?: AtracaoWhereInput
  }

  /**
   * Atracao upsert
   */
  export type AtracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atracao to update in case it exists.
     */
    where: AtracaoWhereUniqueInput
    /**
     * In case the Atracao found by the `where` argument doesn't exist, create a new Atracao with this data.
     */
    create: XOR<AtracaoCreateInput, AtracaoUncheckedCreateInput>
    /**
     * In case the Atracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtracaoUpdateInput, AtracaoUncheckedUpdateInput>
  }

  /**
   * Atracao delete
   */
  export type AtracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    /**
     * Filter which Atracao to delete.
     */
    where: AtracaoWhereUniqueInput
  }

  /**
   * Atracao deleteMany
   */
  export type AtracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atracaos to delete
     */
    where?: AtracaoWhereInput
  }

  /**
   * Atracao.dias
   */
  export type Atracao$diasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    where?: AtracaoDiaWhereInput
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    cursor?: AtracaoDiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtracaoDiaScalarFieldEnum | AtracaoDiaScalarFieldEnum[]
  }

  /**
   * Atracao.avaliacoes
   */
  export type Atracao$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Atracao.ingressos
   */
  export type Atracao$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Atracao without action
   */
  export type AtracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
  }


  /**
   * Model AtracaoDia
   */

  export type AggregateAtracaoDia = {
    _count: AtracaoDiaCountAggregateOutputType | null
    _avg: AtracaoDiaAvgAggregateOutputType | null
    _sum: AtracaoDiaSumAggregateOutputType | null
    _min: AtracaoDiaMinAggregateOutputType | null
    _max: AtracaoDiaMaxAggregateOutputType | null
  }

  export type AtracaoDiaAvgAggregateOutputType = {
    tempoEstimado: number | null
    ordem: number | null
  }

  export type AtracaoDiaSumAggregateOutputType = {
    tempoEstimado: number | null
    ordem: number | null
  }

  export type AtracaoDiaMinAggregateOutputType = {
    id: string | null
    atracaoId: string | null
    diaRoteiroId: string | null
    horario: string | null
    tempoEstimado: number | null
    ordem: number | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type AtracaoDiaMaxAggregateOutputType = {
    id: string | null
    atracaoId: string | null
    diaRoteiroId: string | null
    horario: string | null
    tempoEstimado: number | null
    ordem: number | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type AtracaoDiaCountAggregateOutputType = {
    id: number
    atracaoId: number
    diaRoteiroId: number
    horario: number
    tempoEstimado: number
    ordem: number
    observacoes: number
    criadoEm: number
    _all: number
  }


  export type AtracaoDiaAvgAggregateInputType = {
    tempoEstimado?: true
    ordem?: true
  }

  export type AtracaoDiaSumAggregateInputType = {
    tempoEstimado?: true
    ordem?: true
  }

  export type AtracaoDiaMinAggregateInputType = {
    id?: true
    atracaoId?: true
    diaRoteiroId?: true
    horario?: true
    tempoEstimado?: true
    ordem?: true
    observacoes?: true
    criadoEm?: true
  }

  export type AtracaoDiaMaxAggregateInputType = {
    id?: true
    atracaoId?: true
    diaRoteiroId?: true
    horario?: true
    tempoEstimado?: true
    ordem?: true
    observacoes?: true
    criadoEm?: true
  }

  export type AtracaoDiaCountAggregateInputType = {
    id?: true
    atracaoId?: true
    diaRoteiroId?: true
    horario?: true
    tempoEstimado?: true
    ordem?: true
    observacoes?: true
    criadoEm?: true
    _all?: true
  }

  export type AtracaoDiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtracaoDia to aggregate.
     */
    where?: AtracaoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtracaoDias to fetch.
     */
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtracaoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtracaoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtracaoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtracaoDias
    **/
    _count?: true | AtracaoDiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtracaoDiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtracaoDiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtracaoDiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtracaoDiaMaxAggregateInputType
  }

  export type GetAtracaoDiaAggregateType<T extends AtracaoDiaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtracaoDia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtracaoDia[P]>
      : GetScalarType<T[P], AggregateAtracaoDia[P]>
  }




  export type AtracaoDiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtracaoDiaWhereInput
    orderBy?: AtracaoDiaOrderByWithAggregationInput | AtracaoDiaOrderByWithAggregationInput[]
    by: AtracaoDiaScalarFieldEnum[] | AtracaoDiaScalarFieldEnum
    having?: AtracaoDiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtracaoDiaCountAggregateInputType | true
    _avg?: AtracaoDiaAvgAggregateInputType
    _sum?: AtracaoDiaSumAggregateInputType
    _min?: AtracaoDiaMinAggregateInputType
    _max?: AtracaoDiaMaxAggregateInputType
  }

  export type AtracaoDiaGroupByOutputType = {
    id: string
    atracaoId: string
    diaRoteiroId: string
    horario: string | null
    tempoEstimado: number | null
    ordem: number
    observacoes: string | null
    criadoEm: Date
    _count: AtracaoDiaCountAggregateOutputType | null
    _avg: AtracaoDiaAvgAggregateOutputType | null
    _sum: AtracaoDiaSumAggregateOutputType | null
    _min: AtracaoDiaMinAggregateOutputType | null
    _max: AtracaoDiaMaxAggregateOutputType | null
  }

  type GetAtracaoDiaGroupByPayload<T extends AtracaoDiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtracaoDiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtracaoDiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtracaoDiaGroupByOutputType[P]>
            : GetScalarType<T[P], AtracaoDiaGroupByOutputType[P]>
        }
      >
    >


  export type AtracaoDiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atracaoId?: boolean
    diaRoteiroId?: boolean
    horario?: boolean
    tempoEstimado?: boolean
    ordem?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    diaRoteiro?: boolean | DiaRoteiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atracaoDia"]>

  export type AtracaoDiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atracaoId?: boolean
    diaRoteiroId?: boolean
    horario?: boolean
    tempoEstimado?: boolean
    ordem?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    diaRoteiro?: boolean | DiaRoteiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atracaoDia"]>

  export type AtracaoDiaSelectScalar = {
    id?: boolean
    atracaoId?: boolean
    diaRoteiroId?: boolean
    horario?: boolean
    tempoEstimado?: boolean
    ordem?: boolean
    observacoes?: boolean
    criadoEm?: boolean
  }

  export type AtracaoDiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    diaRoteiro?: boolean | DiaRoteiroDefaultArgs<ExtArgs>
  }
  export type AtracaoDiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    diaRoteiro?: boolean | DiaRoteiroDefaultArgs<ExtArgs>
  }

  export type $AtracaoDiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtracaoDia"
    objects: {
      atracao: Prisma.$AtracaoPayload<ExtArgs>
      diaRoteiro: Prisma.$DiaRoteiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      atracaoId: string
      diaRoteiroId: string
      horario: string | null
      tempoEstimado: number | null
      ordem: number
      observacoes: string | null
      criadoEm: Date
    }, ExtArgs["result"]["atracaoDia"]>
    composites: {}
  }

  type AtracaoDiaGetPayload<S extends boolean | null | undefined | AtracaoDiaDefaultArgs> = $Result.GetResult<Prisma.$AtracaoDiaPayload, S>

  type AtracaoDiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AtracaoDiaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtracaoDiaCountAggregateInputType | true
    }

  export interface AtracaoDiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtracaoDia'], meta: { name: 'AtracaoDia' } }
    /**
     * Find zero or one AtracaoDia that matches the filter.
     * @param {AtracaoDiaFindUniqueArgs} args - Arguments to find a AtracaoDia
     * @example
     * // Get one AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtracaoDiaFindUniqueArgs>(args: SelectSubset<T, AtracaoDiaFindUniqueArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AtracaoDia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AtracaoDiaFindUniqueOrThrowArgs} args - Arguments to find a AtracaoDia
     * @example
     * // Get one AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtracaoDiaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtracaoDiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AtracaoDia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaFindFirstArgs} args - Arguments to find a AtracaoDia
     * @example
     * // Get one AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtracaoDiaFindFirstArgs>(args?: SelectSubset<T, AtracaoDiaFindFirstArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AtracaoDia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaFindFirstOrThrowArgs} args - Arguments to find a AtracaoDia
     * @example
     * // Get one AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtracaoDiaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtracaoDiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AtracaoDias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtracaoDias
     * const atracaoDias = await prisma.atracaoDia.findMany()
     * 
     * // Get first 10 AtracaoDias
     * const atracaoDias = await prisma.atracaoDia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atracaoDiaWithIdOnly = await prisma.atracaoDia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtracaoDiaFindManyArgs>(args?: SelectSubset<T, AtracaoDiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AtracaoDia.
     * @param {AtracaoDiaCreateArgs} args - Arguments to create a AtracaoDia.
     * @example
     * // Create one AtracaoDia
     * const AtracaoDia = await prisma.atracaoDia.create({
     *   data: {
     *     // ... data to create a AtracaoDia
     *   }
     * })
     * 
     */
    create<T extends AtracaoDiaCreateArgs>(args: SelectSubset<T, AtracaoDiaCreateArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AtracaoDias.
     * @param {AtracaoDiaCreateManyArgs} args - Arguments to create many AtracaoDias.
     * @example
     * // Create many AtracaoDias
     * const atracaoDia = await prisma.atracaoDia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtracaoDiaCreateManyArgs>(args?: SelectSubset<T, AtracaoDiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtracaoDias and returns the data saved in the database.
     * @param {AtracaoDiaCreateManyAndReturnArgs} args - Arguments to create many AtracaoDias.
     * @example
     * // Create many AtracaoDias
     * const atracaoDia = await prisma.atracaoDia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtracaoDias and only return the `id`
     * const atracaoDiaWithIdOnly = await prisma.atracaoDia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtracaoDiaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtracaoDiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AtracaoDia.
     * @param {AtracaoDiaDeleteArgs} args - Arguments to delete one AtracaoDia.
     * @example
     * // Delete one AtracaoDia
     * const AtracaoDia = await prisma.atracaoDia.delete({
     *   where: {
     *     // ... filter to delete one AtracaoDia
     *   }
     * })
     * 
     */
    delete<T extends AtracaoDiaDeleteArgs>(args: SelectSubset<T, AtracaoDiaDeleteArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AtracaoDia.
     * @param {AtracaoDiaUpdateArgs} args - Arguments to update one AtracaoDia.
     * @example
     * // Update one AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtracaoDiaUpdateArgs>(args: SelectSubset<T, AtracaoDiaUpdateArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AtracaoDias.
     * @param {AtracaoDiaDeleteManyArgs} args - Arguments to filter AtracaoDias to delete.
     * @example
     * // Delete a few AtracaoDias
     * const { count } = await prisma.atracaoDia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtracaoDiaDeleteManyArgs>(args?: SelectSubset<T, AtracaoDiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtracaoDias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtracaoDias
     * const atracaoDia = await prisma.atracaoDia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtracaoDiaUpdateManyArgs>(args: SelectSubset<T, AtracaoDiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtracaoDia.
     * @param {AtracaoDiaUpsertArgs} args - Arguments to update or create a AtracaoDia.
     * @example
     * // Update or create a AtracaoDia
     * const atracaoDia = await prisma.atracaoDia.upsert({
     *   create: {
     *     // ... data to create a AtracaoDia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtracaoDia we want to update
     *   }
     * })
     */
    upsert<T extends AtracaoDiaUpsertArgs>(args: SelectSubset<T, AtracaoDiaUpsertArgs<ExtArgs>>): Prisma__AtracaoDiaClient<$Result.GetResult<Prisma.$AtracaoDiaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AtracaoDias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaCountArgs} args - Arguments to filter AtracaoDias to count.
     * @example
     * // Count the number of AtracaoDias
     * const count = await prisma.atracaoDia.count({
     *   where: {
     *     // ... the filter for the AtracaoDias we want to count
     *   }
     * })
    **/
    count<T extends AtracaoDiaCountArgs>(
      args?: Subset<T, AtracaoDiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtracaoDiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtracaoDia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtracaoDiaAggregateArgs>(args: Subset<T, AtracaoDiaAggregateArgs>): Prisma.PrismaPromise<GetAtracaoDiaAggregateType<T>>

    /**
     * Group by AtracaoDia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtracaoDiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtracaoDiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtracaoDiaGroupByArgs['orderBy'] }
        : { orderBy?: AtracaoDiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtracaoDiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtracaoDiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtracaoDia model
   */
  readonly fields: AtracaoDiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtracaoDia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtracaoDiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atracao<T extends AtracaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtracaoDefaultArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    diaRoteiro<T extends DiaRoteiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaRoteiroDefaultArgs<ExtArgs>>): Prisma__DiaRoteiroClient<$Result.GetResult<Prisma.$DiaRoteiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtracaoDia model
   */ 
  interface AtracaoDiaFieldRefs {
    readonly id: FieldRef<"AtracaoDia", 'String'>
    readonly atracaoId: FieldRef<"AtracaoDia", 'String'>
    readonly diaRoteiroId: FieldRef<"AtracaoDia", 'String'>
    readonly horario: FieldRef<"AtracaoDia", 'String'>
    readonly tempoEstimado: FieldRef<"AtracaoDia", 'Int'>
    readonly ordem: FieldRef<"AtracaoDia", 'Int'>
    readonly observacoes: FieldRef<"AtracaoDia", 'String'>
    readonly criadoEm: FieldRef<"AtracaoDia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtracaoDia findUnique
   */
  export type AtracaoDiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter, which AtracaoDia to fetch.
     */
    where: AtracaoDiaWhereUniqueInput
  }

  /**
   * AtracaoDia findUniqueOrThrow
   */
  export type AtracaoDiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter, which AtracaoDia to fetch.
     */
    where: AtracaoDiaWhereUniqueInput
  }

  /**
   * AtracaoDia findFirst
   */
  export type AtracaoDiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter, which AtracaoDia to fetch.
     */
    where?: AtracaoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtracaoDias to fetch.
     */
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtracaoDias.
     */
    cursor?: AtracaoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtracaoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtracaoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtracaoDias.
     */
    distinct?: AtracaoDiaScalarFieldEnum | AtracaoDiaScalarFieldEnum[]
  }

  /**
   * AtracaoDia findFirstOrThrow
   */
  export type AtracaoDiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter, which AtracaoDia to fetch.
     */
    where?: AtracaoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtracaoDias to fetch.
     */
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtracaoDias.
     */
    cursor?: AtracaoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtracaoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtracaoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtracaoDias.
     */
    distinct?: AtracaoDiaScalarFieldEnum | AtracaoDiaScalarFieldEnum[]
  }

  /**
   * AtracaoDia findMany
   */
  export type AtracaoDiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter, which AtracaoDias to fetch.
     */
    where?: AtracaoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtracaoDias to fetch.
     */
    orderBy?: AtracaoDiaOrderByWithRelationInput | AtracaoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtracaoDias.
     */
    cursor?: AtracaoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtracaoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtracaoDias.
     */
    skip?: number
    distinct?: AtracaoDiaScalarFieldEnum | AtracaoDiaScalarFieldEnum[]
  }

  /**
   * AtracaoDia create
   */
  export type AtracaoDiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * The data needed to create a AtracaoDia.
     */
    data: XOR<AtracaoDiaCreateInput, AtracaoDiaUncheckedCreateInput>
  }

  /**
   * AtracaoDia createMany
   */
  export type AtracaoDiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtracaoDias.
     */
    data: AtracaoDiaCreateManyInput | AtracaoDiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtracaoDia createManyAndReturn
   */
  export type AtracaoDiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AtracaoDias.
     */
    data: AtracaoDiaCreateManyInput | AtracaoDiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AtracaoDia update
   */
  export type AtracaoDiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * The data needed to update a AtracaoDia.
     */
    data: XOR<AtracaoDiaUpdateInput, AtracaoDiaUncheckedUpdateInput>
    /**
     * Choose, which AtracaoDia to update.
     */
    where: AtracaoDiaWhereUniqueInput
  }

  /**
   * AtracaoDia updateMany
   */
  export type AtracaoDiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtracaoDias.
     */
    data: XOR<AtracaoDiaUpdateManyMutationInput, AtracaoDiaUncheckedUpdateManyInput>
    /**
     * Filter which AtracaoDias to update
     */
    where?: AtracaoDiaWhereInput
  }

  /**
   * AtracaoDia upsert
   */
  export type AtracaoDiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * The filter to search for the AtracaoDia to update in case it exists.
     */
    where: AtracaoDiaWhereUniqueInput
    /**
     * In case the AtracaoDia found by the `where` argument doesn't exist, create a new AtracaoDia with this data.
     */
    create: XOR<AtracaoDiaCreateInput, AtracaoDiaUncheckedCreateInput>
    /**
     * In case the AtracaoDia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtracaoDiaUpdateInput, AtracaoDiaUncheckedUpdateInput>
  }

  /**
   * AtracaoDia delete
   */
  export type AtracaoDiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
    /**
     * Filter which AtracaoDia to delete.
     */
    where: AtracaoDiaWhereUniqueInput
  }

  /**
   * AtracaoDia deleteMany
   */
  export type AtracaoDiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtracaoDias to delete
     */
    where?: AtracaoDiaWhereInput
  }

  /**
   * AtracaoDia without action
   */
  export type AtracaoDiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtracaoDia
     */
    select?: AtracaoDiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoDiaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota: number | null
    util: number | null
    naoUtil: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota: number | null
    util: number | null
    naoUtil: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: string | null
    nota: number | null
    comentario: string | null
    dataVisita: Date | null
    util: number | null
    naoUtil: number | null
    usuarioId: string | null
    atracaoId: string | null
    roteiroId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: string | null
    nota: number | null
    comentario: string | null
    dataVisita: Date | null
    util: number | null
    naoUtil: number | null
    usuarioId: string | null
    atracaoId: string | null
    roteiroId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    nota: number
    comentario: number
    dataVisita: number
    util: number
    naoUtil: number
    usuarioId: number
    atracaoId: number
    roteiroId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota?: true
    util?: true
    naoUtil?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota?: true
    util?: true
    naoUtil?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    dataVisita?: true
    util?: true
    naoUtil?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    dataVisita?: true
    util?: true
    naoUtil?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    nota?: true
    comentario?: true
    dataVisita?: true
    util?: true
    naoUtil?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: string
    nota: number
    comentario: string | null
    dataVisita: Date | null
    util: number
    naoUtil: number
    usuarioId: string
    atracaoId: string | null
    roteiroId: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    dataVisita?: boolean
    util?: boolean
    naoUtil?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | Avaliacao$atracaoArgs<ExtArgs>
    roteiro?: boolean | Avaliacao$roteiroArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    comentario?: boolean
    dataVisita?: boolean
    util?: boolean
    naoUtil?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | Avaliacao$atracaoArgs<ExtArgs>
    roteiro?: boolean | Avaliacao$roteiroArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    nota?: boolean
    comentario?: boolean
    dataVisita?: boolean
    util?: boolean
    naoUtil?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | Avaliacao$atracaoArgs<ExtArgs>
    roteiro?: boolean | Avaliacao$roteiroArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | Avaliacao$atracaoArgs<ExtArgs>
    roteiro?: boolean | Avaliacao$roteiroArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      atracao: Prisma.$AtracaoPayload<ExtArgs> | null
      roteiro: Prisma.$RoteiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nota: number
      comentario: string | null
      dataVisita: Date | null
      util: number
      naoUtil: number
      usuarioId: string
      atracaoId: string | null
      roteiroId: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    atracao<T extends Avaliacao$atracaoArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$atracaoArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    roteiro<T extends Avaliacao$roteiroArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$roteiroArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */ 
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly dataVisita: FieldRef<"Avaliacao", 'DateTime'>
    readonly util: FieldRef<"Avaliacao", 'Int'>
    readonly naoUtil: FieldRef<"Avaliacao", 'Int'>
    readonly usuarioId: FieldRef<"Avaliacao", 'String'>
    readonly atracaoId: FieldRef<"Avaliacao", 'String'>
    readonly roteiroId: FieldRef<"Avaliacao", 'String'>
    readonly criadoEm: FieldRef<"Avaliacao", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao.atracao
   */
  export type Avaliacao$atracaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atracao
     */
    select?: AtracaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtracaoInclude<ExtArgs> | null
    where?: AtracaoWhereInput
  }

  /**
   * Avaliacao.roteiro
   */
  export type Avaliacao$roteiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    where?: RoteiroWhereInput
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: string | null
    conteudo: string | null
    usuarioId: string | null
    roteiroId: string | null
    parentId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: string | null
    conteudo: string | null
    usuarioId: string | null
    roteiroId: string | null
    parentId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    usuarioId: number
    roteiroId: number
    parentId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ComentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    roteiroId?: true
    parentId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    roteiroId?: true
    parentId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    roteiroId?: true
    parentId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    parentId: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    roteiroId?: boolean
    parentId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    parent?: boolean | Comentario$parentArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    roteiroId?: boolean
    parentId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    parent?: boolean | Comentario$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    roteiroId?: boolean
    parentId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    parent?: boolean | Comentario$parentArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    roteiro?: boolean | RoteiroDefaultArgs<ExtArgs>
    parent?: boolean | Comentario$parentArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      roteiro: Prisma.$RoteiroPayload<ExtArgs>
      parent: Prisma.$ComentarioPayload<ExtArgs> | null
      respostas: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conteudo: string
      usuarioId: string
      roteiroId: string
      parentId: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    roteiro<T extends RoteiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoteiroDefaultArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parent<T extends Comentario$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$parentArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    respostas<T extends Comentario$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */ 
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'String'>
    readonly conteudo: FieldRef<"Comentario", 'String'>
    readonly usuarioId: FieldRef<"Comentario", 'String'>
    readonly roteiroId: FieldRef<"Comentario", 'String'>
    readonly parentId: FieldRef<"Comentario", 'String'>
    readonly criadoEm: FieldRef<"Comentario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Comentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
  }

  /**
   * Comentario.parent
   */
  export type Comentario$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
  }

  /**
   * Comentario.respostas
   */
  export type Comentario$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Ingresso
   */

  export type AggregateIngresso = {
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  export type IngressoAvgAggregateOutputType = {
    preco: Decimal | null
  }

  export type IngressoSumAggregateOutputType = {
    preco: Decimal | null
  }

  export type IngressoMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    qrCode: string | null
    dataValidade: Date | null
    preco: Decimal | null
    moeda: string | null
    status: $Enums.StatusIngresso | null
    observacoes: string | null
    usuarioId: string | null
    atracaoId: string | null
    roteiroId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type IngressoMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    qrCode: string | null
    dataValidade: Date | null
    preco: Decimal | null
    moeda: string | null
    status: $Enums.StatusIngresso | null
    observacoes: string | null
    usuarioId: string | null
    atracaoId: string | null
    roteiroId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type IngressoCountAggregateOutputType = {
    id: number
    codigo: number
    qrCode: number
    dataValidade: number
    preco: number
    moeda: number
    status: number
    observacoes: number
    usuarioId: number
    atracaoId: number
    roteiroId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type IngressoAvgAggregateInputType = {
    preco?: true
  }

  export type IngressoSumAggregateInputType = {
    preco?: true
  }

  export type IngressoMinAggregateInputType = {
    id?: true
    codigo?: true
    qrCode?: true
    dataValidade?: true
    preco?: true
    moeda?: true
    status?: true
    observacoes?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type IngressoMaxAggregateInputType = {
    id?: true
    codigo?: true
    qrCode?: true
    dataValidade?: true
    preco?: true
    moeda?: true
    status?: true
    observacoes?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type IngressoCountAggregateInputType = {
    id?: true
    codigo?: true
    qrCode?: true
    dataValidade?: true
    preco?: true
    moeda?: true
    status?: true
    observacoes?: true
    usuarioId?: true
    atracaoId?: true
    roteiroId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type IngressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingresso to aggregate.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingressos
    **/
    _count?: true | IngressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngressoMaxAggregateInputType
  }

  export type GetIngressoAggregateType<T extends IngressoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngresso[P]>
      : GetScalarType<T[P], AggregateIngresso[P]>
  }




  export type IngressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithAggregationInput | IngressoOrderByWithAggregationInput[]
    by: IngressoScalarFieldEnum[] | IngressoScalarFieldEnum
    having?: IngressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngressoCountAggregateInputType | true
    _avg?: IngressoAvgAggregateInputType
    _sum?: IngressoSumAggregateInputType
    _min?: IngressoMinAggregateInputType
    _max?: IngressoMaxAggregateInputType
  }

  export type IngressoGroupByOutputType = {
    id: string
    codigo: string
    qrCode: string | null
    dataValidade: Date
    preco: Decimal | null
    moeda: string
    status: $Enums.StatusIngresso
    observacoes: string | null
    usuarioId: string
    atracaoId: string
    roteiroId: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  type GetIngressoGroupByPayload<T extends IngressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngressoGroupByOutputType[P]>
            : GetScalarType<T[P], IngressoGroupByOutputType[P]>
        }
      >
    >


  export type IngressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    qrCode?: boolean
    dataValidade?: boolean
    preco?: boolean
    moeda?: boolean
    status?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    roteiro?: boolean | Ingresso$roteiroArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    qrCode?: boolean
    dataValidade?: boolean
    preco?: boolean
    moeda?: boolean
    status?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    roteiro?: boolean | Ingresso$roteiroArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectScalar = {
    id?: boolean
    codigo?: boolean
    qrCode?: boolean
    dataValidade?: boolean
    preco?: boolean
    moeda?: boolean
    status?: boolean
    observacoes?: boolean
    usuarioId?: boolean
    atracaoId?: boolean
    roteiroId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type IngressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    roteiro?: boolean | Ingresso$roteiroArgs<ExtArgs>
  }
  export type IngressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    atracao?: boolean | AtracaoDefaultArgs<ExtArgs>
    roteiro?: boolean | Ingresso$roteiroArgs<ExtArgs>
  }

  export type $IngressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingresso"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      atracao: Prisma.$AtracaoPayload<ExtArgs>
      roteiro: Prisma.$RoteiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      qrCode: string | null
      dataValidade: Date
      preco: Prisma.Decimal | null
      moeda: string
      status: $Enums.StatusIngresso
      observacoes: string | null
      usuarioId: string
      atracaoId: string
      roteiroId: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["ingresso"]>
    composites: {}
  }

  type IngressoGetPayload<S extends boolean | null | undefined | IngressoDefaultArgs> = $Result.GetResult<Prisma.$IngressoPayload, S>

  type IngressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngressoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngressoCountAggregateInputType | true
    }

  export interface IngressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingresso'], meta: { name: 'Ingresso' } }
    /**
     * Find zero or one Ingresso that matches the filter.
     * @param {IngressoFindUniqueArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngressoFindUniqueArgs>(args: SelectSubset<T, IngressoFindUniqueArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ingresso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngressoFindUniqueOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngressoFindUniqueOrThrowArgs>(args: SelectSubset<T, IngressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ingresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngressoFindFirstArgs>(args?: SelectSubset<T, IngressoFindFirstArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ingresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngressoFindFirstOrThrowArgs>(args?: SelectSubset<T, IngressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ingressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingressos
     * const ingressos = await prisma.ingresso.findMany()
     * 
     * // Get first 10 Ingressos
     * const ingressos = await prisma.ingresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngressoFindManyArgs>(args?: SelectSubset<T, IngressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ingresso.
     * @param {IngressoCreateArgs} args - Arguments to create a Ingresso.
     * @example
     * // Create one Ingresso
     * const Ingresso = await prisma.ingresso.create({
     *   data: {
     *     // ... data to create a Ingresso
     *   }
     * })
     * 
     */
    create<T extends IngressoCreateArgs>(args: SelectSubset<T, IngressoCreateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ingressos.
     * @param {IngressoCreateManyArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngressoCreateManyArgs>(args?: SelectSubset<T, IngressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingressos and returns the data saved in the database.
     * @param {IngressoCreateManyAndReturnArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingressos and only return the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngressoCreateManyAndReturnArgs>(args?: SelectSubset<T, IngressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ingresso.
     * @param {IngressoDeleteArgs} args - Arguments to delete one Ingresso.
     * @example
     * // Delete one Ingresso
     * const Ingresso = await prisma.ingresso.delete({
     *   where: {
     *     // ... filter to delete one Ingresso
     *   }
     * })
     * 
     */
    delete<T extends IngressoDeleteArgs>(args: SelectSubset<T, IngressoDeleteArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ingresso.
     * @param {IngressoUpdateArgs} args - Arguments to update one Ingresso.
     * @example
     * // Update one Ingresso
     * const ingresso = await prisma.ingresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngressoUpdateArgs>(args: SelectSubset<T, IngressoUpdateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ingressos.
     * @param {IngressoDeleteManyArgs} args - Arguments to filter Ingressos to delete.
     * @example
     * // Delete a few Ingressos
     * const { count } = await prisma.ingresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngressoDeleteManyArgs>(args?: SelectSubset<T, IngressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingressos
     * const ingresso = await prisma.ingresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngressoUpdateManyArgs>(args: SelectSubset<T, IngressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingresso.
     * @param {IngressoUpsertArgs} args - Arguments to update or create a Ingresso.
     * @example
     * // Update or create a Ingresso
     * const ingresso = await prisma.ingresso.upsert({
     *   create: {
     *     // ... data to create a Ingresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingresso we want to update
     *   }
     * })
     */
    upsert<T extends IngressoUpsertArgs>(args: SelectSubset<T, IngressoUpsertArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoCountArgs} args - Arguments to filter Ingressos to count.
     * @example
     * // Count the number of Ingressos
     * const count = await prisma.ingresso.count({
     *   where: {
     *     // ... the filter for the Ingressos we want to count
     *   }
     * })
    **/
    count<T extends IngressoCountArgs>(
      args?: Subset<T, IngressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngressoAggregateArgs>(args: Subset<T, IngressoAggregateArgs>): Prisma.PrismaPromise<GetIngressoAggregateType<T>>

    /**
     * Group by Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngressoGroupByArgs['orderBy'] }
        : { orderBy?: IngressoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingresso model
   */
  readonly fields: IngressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    atracao<T extends AtracaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtracaoDefaultArgs<ExtArgs>>): Prisma__AtracaoClient<$Result.GetResult<Prisma.$AtracaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    roteiro<T extends Ingresso$roteiroArgs<ExtArgs> = {}>(args?: Subset<T, Ingresso$roteiroArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingresso model
   */ 
  interface IngressoFieldRefs {
    readonly id: FieldRef<"Ingresso", 'String'>
    readonly codigo: FieldRef<"Ingresso", 'String'>
    readonly qrCode: FieldRef<"Ingresso", 'String'>
    readonly dataValidade: FieldRef<"Ingresso", 'DateTime'>
    readonly preco: FieldRef<"Ingresso", 'Decimal'>
    readonly moeda: FieldRef<"Ingresso", 'String'>
    readonly status: FieldRef<"Ingresso", 'StatusIngresso'>
    readonly observacoes: FieldRef<"Ingresso", 'String'>
    readonly usuarioId: FieldRef<"Ingresso", 'String'>
    readonly atracaoId: FieldRef<"Ingresso", 'String'>
    readonly roteiroId: FieldRef<"Ingresso", 'String'>
    readonly criadoEm: FieldRef<"Ingresso", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Ingresso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingresso findUnique
   */
  export type IngressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findUniqueOrThrow
   */
  export type IngressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findFirst
   */
  export type IngressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findFirstOrThrow
   */
  export type IngressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findMany
   */
  export type IngressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingressos to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso create
   */
  export type IngressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingresso.
     */
    data: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
  }

  /**
   * Ingresso createMany
   */
  export type IngressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingresso createManyAndReturn
   */
  export type IngressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingresso update
   */
  export type IngressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingresso.
     */
    data: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
    /**
     * Choose, which Ingresso to update.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso updateMany
   */
  export type IngressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingressos.
     */
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyInput>
    /**
     * Filter which Ingressos to update
     */
    where?: IngressoWhereInput
  }

  /**
   * Ingresso upsert
   */
  export type IngressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingresso to update in case it exists.
     */
    where: IngressoWhereUniqueInput
    /**
     * In case the Ingresso found by the `where` argument doesn't exist, create a new Ingresso with this data.
     */
    create: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
    /**
     * In case the Ingresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
  }

  /**
   * Ingresso delete
   */
  export type IngressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter which Ingresso to delete.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso deleteMany
   */
  export type IngressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingressos to delete
     */
    where?: IngressoWhereInput
  }

  /**
   * Ingresso.roteiro
   */
  export type Ingresso$roteiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoteiroInclude<ExtArgs> | null
    where?: RoteiroWhereInput
  }

  /**
   * Ingresso without action
   */
  export type IngressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
  }


  /**
   * Model Consultoria
   */

  export type AggregateConsultoria = {
    _count: ConsultoriaCountAggregateOutputType | null
    _avg: ConsultoriaAvgAggregateOutputType | null
    _sum: ConsultoriaSumAggregateOutputType | null
    _min: ConsultoriaMinAggregateOutputType | null
    _max: ConsultoriaMaxAggregateOutputType | null
  }

  export type ConsultoriaAvgAggregateOutputType = {
    orcamento: Decimal | null
    preco: Decimal | null
  }

  export type ConsultoriaSumAggregateOutputType = {
    orcamento: Decimal | null
    preco: Decimal | null
  }

  export type ConsultoriaMinAggregateOutputType = {
    id: string | null
    destino: string | null
    dataInicio: Date | null
    dataFim: Date | null
    orcamento: Decimal | null
    preferencias: string | null
    status: string | null
    preco: Decimal | null
    clienteId: string | null
    consultorId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ConsultoriaMaxAggregateOutputType = {
    id: string | null
    destino: string | null
    dataInicio: Date | null
    dataFim: Date | null
    orcamento: Decimal | null
    preferencias: string | null
    status: string | null
    preco: Decimal | null
    clienteId: string | null
    consultorId: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ConsultoriaCountAggregateOutputType = {
    id: number
    destino: number
    dataInicio: number
    dataFim: number
    orcamento: number
    preferencias: number
    status: number
    preco: number
    clienteId: number
    consultorId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ConsultoriaAvgAggregateInputType = {
    orcamento?: true
    preco?: true
  }

  export type ConsultoriaSumAggregateInputType = {
    orcamento?: true
    preco?: true
  }

  export type ConsultoriaMinAggregateInputType = {
    id?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    orcamento?: true
    preferencias?: true
    status?: true
    preco?: true
    clienteId?: true
    consultorId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ConsultoriaMaxAggregateInputType = {
    id?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    orcamento?: true
    preferencias?: true
    status?: true
    preco?: true
    clienteId?: true
    consultorId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ConsultoriaCountAggregateInputType = {
    id?: true
    destino?: true
    dataInicio?: true
    dataFim?: true
    orcamento?: true
    preferencias?: true
    status?: true
    preco?: true
    clienteId?: true
    consultorId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ConsultoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultoria to aggregate.
     */
    where?: ConsultoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorias to fetch.
     */
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultorias
    **/
    _count?: true | ConsultoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultoriaMaxAggregateInputType
  }

  export type GetConsultoriaAggregateType<T extends ConsultoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultoria[P]>
      : GetScalarType<T[P], AggregateConsultoria[P]>
  }




  export type ConsultoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultoriaWhereInput
    orderBy?: ConsultoriaOrderByWithAggregationInput | ConsultoriaOrderByWithAggregationInput[]
    by: ConsultoriaScalarFieldEnum[] | ConsultoriaScalarFieldEnum
    having?: ConsultoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultoriaCountAggregateInputType | true
    _avg?: ConsultoriaAvgAggregateInputType
    _sum?: ConsultoriaSumAggregateInputType
    _min?: ConsultoriaMinAggregateInputType
    _max?: ConsultoriaMaxAggregateInputType
  }

  export type ConsultoriaGroupByOutputType = {
    id: string
    destino: string
    dataInicio: Date
    dataFim: Date
    orcamento: Decimal | null
    preferencias: string | null
    status: string
    preco: Decimal
    clienteId: string
    consultorId: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: ConsultoriaCountAggregateOutputType | null
    _avg: ConsultoriaAvgAggregateOutputType | null
    _sum: ConsultoriaSumAggregateOutputType | null
    _min: ConsultoriaMinAggregateOutputType | null
    _max: ConsultoriaMaxAggregateOutputType | null
  }

  type GetConsultoriaGroupByPayload<T extends ConsultoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultoriaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultoriaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    orcamento?: boolean
    preferencias?: boolean
    status?: boolean
    preco?: boolean
    clienteId?: boolean
    consultorId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    cliente?: boolean | UserDefaultArgs<ExtArgs>
    consultor?: boolean | Consultoria$consultorArgs<ExtArgs>
  }, ExtArgs["result"]["consultoria"]>

  export type ConsultoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    orcamento?: boolean
    preferencias?: boolean
    status?: boolean
    preco?: boolean
    clienteId?: boolean
    consultorId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    cliente?: boolean | UserDefaultArgs<ExtArgs>
    consultor?: boolean | Consultoria$consultorArgs<ExtArgs>
  }, ExtArgs["result"]["consultoria"]>

  export type ConsultoriaSelectScalar = {
    id?: boolean
    destino?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    orcamento?: boolean
    preferencias?: boolean
    status?: boolean
    preco?: boolean
    clienteId?: boolean
    consultorId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ConsultoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UserDefaultArgs<ExtArgs>
    consultor?: boolean | Consultoria$consultorArgs<ExtArgs>
  }
  export type ConsultoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UserDefaultArgs<ExtArgs>
    consultor?: boolean | Consultoria$consultorArgs<ExtArgs>
  }

  export type $ConsultoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultoria"
    objects: {
      cliente: Prisma.$UserPayload<ExtArgs>
      consultor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      destino: string
      dataInicio: Date
      dataFim: Date
      orcamento: Prisma.Decimal | null
      preferencias: string | null
      status: string
      preco: Prisma.Decimal
      clienteId: string
      consultorId: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["consultoria"]>
    composites: {}
  }

  type ConsultoriaGetPayload<S extends boolean | null | undefined | ConsultoriaDefaultArgs> = $Result.GetResult<Prisma.$ConsultoriaPayload, S>

  type ConsultoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConsultoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultoriaCountAggregateInputType | true
    }

  export interface ConsultoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultoria'], meta: { name: 'Consultoria' } }
    /**
     * Find zero or one Consultoria that matches the filter.
     * @param {ConsultoriaFindUniqueArgs} args - Arguments to find a Consultoria
     * @example
     * // Get one Consultoria
     * const consultoria = await prisma.consultoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultoriaFindUniqueArgs>(args: SelectSubset<T, ConsultoriaFindUniqueArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Consultoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConsultoriaFindUniqueOrThrowArgs} args - Arguments to find a Consultoria
     * @example
     * // Get one Consultoria
     * const consultoria = await prisma.consultoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Consultoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaFindFirstArgs} args - Arguments to find a Consultoria
     * @example
     * // Get one Consultoria
     * const consultoria = await prisma.consultoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultoriaFindFirstArgs>(args?: SelectSubset<T, ConsultoriaFindFirstArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Consultoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaFindFirstOrThrowArgs} args - Arguments to find a Consultoria
     * @example
     * // Get one Consultoria
     * const consultoria = await prisma.consultoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Consultorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultorias
     * const consultorias = await prisma.consultoria.findMany()
     * 
     * // Get first 10 Consultorias
     * const consultorias = await prisma.consultoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultoriaWithIdOnly = await prisma.consultoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultoriaFindManyArgs>(args?: SelectSubset<T, ConsultoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Consultoria.
     * @param {ConsultoriaCreateArgs} args - Arguments to create a Consultoria.
     * @example
     * // Create one Consultoria
     * const Consultoria = await prisma.consultoria.create({
     *   data: {
     *     // ... data to create a Consultoria
     *   }
     * })
     * 
     */
    create<T extends ConsultoriaCreateArgs>(args: SelectSubset<T, ConsultoriaCreateArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Consultorias.
     * @param {ConsultoriaCreateManyArgs} args - Arguments to create many Consultorias.
     * @example
     * // Create many Consultorias
     * const consultoria = await prisma.consultoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultoriaCreateManyArgs>(args?: SelectSubset<T, ConsultoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultorias and returns the data saved in the database.
     * @param {ConsultoriaCreateManyAndReturnArgs} args - Arguments to create many Consultorias.
     * @example
     * // Create many Consultorias
     * const consultoria = await prisma.consultoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultorias and only return the `id`
     * const consultoriaWithIdOnly = await prisma.consultoria.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Consultoria.
     * @param {ConsultoriaDeleteArgs} args - Arguments to delete one Consultoria.
     * @example
     * // Delete one Consultoria
     * const Consultoria = await prisma.consultoria.delete({
     *   where: {
     *     // ... filter to delete one Consultoria
     *   }
     * })
     * 
     */
    delete<T extends ConsultoriaDeleteArgs>(args: SelectSubset<T, ConsultoriaDeleteArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Consultoria.
     * @param {ConsultoriaUpdateArgs} args - Arguments to update one Consultoria.
     * @example
     * // Update one Consultoria
     * const consultoria = await prisma.consultoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultoriaUpdateArgs>(args: SelectSubset<T, ConsultoriaUpdateArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Consultorias.
     * @param {ConsultoriaDeleteManyArgs} args - Arguments to filter Consultorias to delete.
     * @example
     * // Delete a few Consultorias
     * const { count } = await prisma.consultoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultoriaDeleteManyArgs>(args?: SelectSubset<T, ConsultoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultorias
     * const consultoria = await prisma.consultoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultoriaUpdateManyArgs>(args: SelectSubset<T, ConsultoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consultoria.
     * @param {ConsultoriaUpsertArgs} args - Arguments to update or create a Consultoria.
     * @example
     * // Update or create a Consultoria
     * const consultoria = await prisma.consultoria.upsert({
     *   create: {
     *     // ... data to create a Consultoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultoria we want to update
     *   }
     * })
     */
    upsert<T extends ConsultoriaUpsertArgs>(args: SelectSubset<T, ConsultoriaUpsertArgs<ExtArgs>>): Prisma__ConsultoriaClient<$Result.GetResult<Prisma.$ConsultoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Consultorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaCountArgs} args - Arguments to filter Consultorias to count.
     * @example
     * // Count the number of Consultorias
     * const count = await prisma.consultoria.count({
     *   where: {
     *     // ... the filter for the Consultorias we want to count
     *   }
     * })
    **/
    count<T extends ConsultoriaCountArgs>(
      args?: Subset<T, ConsultoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultoriaAggregateArgs>(args: Subset<T, ConsultoriaAggregateArgs>): Prisma.PrismaPromise<GetConsultoriaAggregateType<T>>

    /**
     * Group by Consultoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultoriaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultoria model
   */
  readonly fields: ConsultoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    consultor<T extends Consultoria$consultorArgs<ExtArgs> = {}>(args?: Subset<T, Consultoria$consultorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultoria model
   */ 
  interface ConsultoriaFieldRefs {
    readonly id: FieldRef<"Consultoria", 'String'>
    readonly destino: FieldRef<"Consultoria", 'String'>
    readonly dataInicio: FieldRef<"Consultoria", 'DateTime'>
    readonly dataFim: FieldRef<"Consultoria", 'DateTime'>
    readonly orcamento: FieldRef<"Consultoria", 'Decimal'>
    readonly preferencias: FieldRef<"Consultoria", 'String'>
    readonly status: FieldRef<"Consultoria", 'String'>
    readonly preco: FieldRef<"Consultoria", 'Decimal'>
    readonly clienteId: FieldRef<"Consultoria", 'String'>
    readonly consultorId: FieldRef<"Consultoria", 'String'>
    readonly criadoEm: FieldRef<"Consultoria", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Consultoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consultoria findUnique
   */
  export type ConsultoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter, which Consultoria to fetch.
     */
    where: ConsultoriaWhereUniqueInput
  }

  /**
   * Consultoria findUniqueOrThrow
   */
  export type ConsultoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter, which Consultoria to fetch.
     */
    where: ConsultoriaWhereUniqueInput
  }

  /**
   * Consultoria findFirst
   */
  export type ConsultoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter, which Consultoria to fetch.
     */
    where?: ConsultoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorias to fetch.
     */
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultorias.
     */
    cursor?: ConsultoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultorias.
     */
    distinct?: ConsultoriaScalarFieldEnum | ConsultoriaScalarFieldEnum[]
  }

  /**
   * Consultoria findFirstOrThrow
   */
  export type ConsultoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter, which Consultoria to fetch.
     */
    where?: ConsultoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorias to fetch.
     */
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultorias.
     */
    cursor?: ConsultoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultorias.
     */
    distinct?: ConsultoriaScalarFieldEnum | ConsultoriaScalarFieldEnum[]
  }

  /**
   * Consultoria findMany
   */
  export type ConsultoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter, which Consultorias to fetch.
     */
    where?: ConsultoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorias to fetch.
     */
    orderBy?: ConsultoriaOrderByWithRelationInput | ConsultoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultorias.
     */
    cursor?: ConsultoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorias.
     */
    skip?: number
    distinct?: ConsultoriaScalarFieldEnum | ConsultoriaScalarFieldEnum[]
  }

  /**
   * Consultoria create
   */
  export type ConsultoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultoria.
     */
    data: XOR<ConsultoriaCreateInput, ConsultoriaUncheckedCreateInput>
  }

  /**
   * Consultoria createMany
   */
  export type ConsultoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultorias.
     */
    data: ConsultoriaCreateManyInput | ConsultoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultoria createManyAndReturn
   */
  export type ConsultoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Consultorias.
     */
    data: ConsultoriaCreateManyInput | ConsultoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultoria update
   */
  export type ConsultoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultoria.
     */
    data: XOR<ConsultoriaUpdateInput, ConsultoriaUncheckedUpdateInput>
    /**
     * Choose, which Consultoria to update.
     */
    where: ConsultoriaWhereUniqueInput
  }

  /**
   * Consultoria updateMany
   */
  export type ConsultoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultorias.
     */
    data: XOR<ConsultoriaUpdateManyMutationInput, ConsultoriaUncheckedUpdateManyInput>
    /**
     * Filter which Consultorias to update
     */
    where?: ConsultoriaWhereInput
  }

  /**
   * Consultoria upsert
   */
  export type ConsultoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultoria to update in case it exists.
     */
    where: ConsultoriaWhereUniqueInput
    /**
     * In case the Consultoria found by the `where` argument doesn't exist, create a new Consultoria with this data.
     */
    create: XOR<ConsultoriaCreateInput, ConsultoriaUncheckedCreateInput>
    /**
     * In case the Consultoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultoriaUpdateInput, ConsultoriaUncheckedUpdateInput>
  }

  /**
   * Consultoria delete
   */
  export type ConsultoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
    /**
     * Filter which Consultoria to delete.
     */
    where: ConsultoriaWhereUniqueInput
  }

  /**
   * Consultoria deleteMany
   */
  export type ConsultoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultorias to delete
     */
    where?: ConsultoriaWhereInput
  }

  /**
   * Consultoria.consultor
   */
  export type Consultoria$consultorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Consultoria without action
   */
  export type ConsultoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultoria
     */
    select?: ConsultoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    seguidorId: 'seguidorId',
    seguidoId: 'seguidoId',
    criadoEm: 'criadoEm'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const RoteiroScalarFieldEnum: {
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

  export type RoteiroScalarFieldEnum = (typeof RoteiroScalarFieldEnum)[keyof typeof RoteiroScalarFieldEnum]


  export const DiaRoteiroScalarFieldEnum: {
    id: 'id',
    data: 'data',
    ordem: 'ordem',
    roteiroId: 'roteiroId',
    criadoEm: 'criadoEm'
  };

  export type DiaRoteiroScalarFieldEnum = (typeof DiaRoteiroScalarFieldEnum)[keyof typeof DiaRoteiroScalarFieldEnum]


  export const AtracaoScalarFieldEnum: {
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

  export type AtracaoScalarFieldEnum = (typeof AtracaoScalarFieldEnum)[keyof typeof AtracaoScalarFieldEnum]


  export const AtracaoDiaScalarFieldEnum: {
    id: 'id',
    atracaoId: 'atracaoId',
    diaRoteiroId: 'diaRoteiroId',
    horario: 'horario',
    tempoEstimado: 'tempoEstimado',
    ordem: 'ordem',
    observacoes: 'observacoes',
    criadoEm: 'criadoEm'
  };

  export type AtracaoDiaScalarFieldEnum = (typeof AtracaoDiaScalarFieldEnum)[keyof typeof AtracaoDiaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
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

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    usuarioId: 'usuarioId',
    roteiroId: 'roteiroId',
    parentId: 'parentId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const IngressoScalarFieldEnum: {
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

  export type IngressoScalarFieldEnum = (typeof IngressoScalarFieldEnum)[keyof typeof IngressoScalarFieldEnum]


  export const ConsultoriaScalarFieldEnum: {
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

  export type ConsultoriaScalarFieldEnum = (typeof ConsultoriaScalarFieldEnum)[keyof typeof ConsultoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoPlano'
   */
  export type EnumTipoPlanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPlano'>
    


  /**
   * Reference to a field of type 'TipoPlano[]'
   */
  export type ListEnumTipoPlanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPlano[]'>
    


  /**
   * Reference to a field of type 'RoleUsuario'
   */
  export type EnumRoleUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUsuario'>
    


  /**
   * Reference to a field of type 'RoleUsuario[]'
   */
  export type ListEnumRoleUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUsuario[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Categoria'
   */
  export type EnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria'>
    


  /**
   * Reference to a field of type 'Categoria[]'
   */
  export type ListEnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Parceiro'
   */
  export type EnumParceiroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Parceiro'>
    


  /**
   * Reference to a field of type 'Parceiro[]'
   */
  export type ListEnumParceiroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Parceiro[]'>
    


  /**
   * Reference to a field of type 'StatusIngresso'
   */
  export type EnumStatusIngressoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIngresso'>
    


  /**
   * Reference to a field of type 'StatusIngresso[]'
   */
  export type ListEnumStatusIngressoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIngresso[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    plano?: EnumTipoPlanoFilter<"User"> | $Enums.TipoPlano
    role?: EnumRoleUsuarioFilter<"User"> | $Enums.RoleUsuario
    preferenciasIdioma?: StringFilter<"User"> | string
    criadoEm?: DateTimeFilter<"User"> | Date | string
    atualizadoEm?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    roteiros?: RoteiroListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    ingressos?: IngressoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    seguidores?: FollowListRelationFilter
    seguindo?: FollowListRelationFilter
    consultoriasSolicitadas?: ConsultoriaListRelationFilter
    consultoriasAtendidas?: ConsultoriaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    plano?: SortOrder
    role?: SortOrder
    preferenciasIdioma?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    roteiros?: RoteiroOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    ingressos?: IngressoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    seguidores?: FollowOrderByRelationAggregateInput
    seguindo?: FollowOrderByRelationAggregateInput
    consultoriasSolicitadas?: ConsultoriaOrderByRelationAggregateInput
    consultoriasAtendidas?: ConsultoriaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    plano?: EnumTipoPlanoFilter<"User"> | $Enums.TipoPlano
    role?: EnumRoleUsuarioFilter<"User"> | $Enums.RoleUsuario
    preferenciasIdioma?: StringFilter<"User"> | string
    criadoEm?: DateTimeFilter<"User"> | Date | string
    atualizadoEm?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    roteiros?: RoteiroListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    ingressos?: IngressoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    seguidores?: FollowListRelationFilter
    seguindo?: FollowListRelationFilter
    consultoriasSolicitadas?: ConsultoriaListRelationFilter
    consultoriasAtendidas?: ConsultoriaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    plano?: SortOrder
    role?: SortOrder
    preferenciasIdioma?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    plano?: EnumTipoPlanoWithAggregatesFilter<"User"> | $Enums.TipoPlano
    role?: EnumRoleUsuarioWithAggregatesFilter<"User"> | $Enums.RoleUsuario
    preferenciasIdioma?: StringWithAggregatesFilter<"User"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"User"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: StringFilter<"Follow"> | string
    seguidorId?: StringFilter<"Follow"> | string
    seguidoId?: StringFilter<"Follow"> | string
    criadoEm?: DateTimeFilter<"Follow"> | Date | string
    seguidor?: XOR<UserRelationFilter, UserWhereInput>
    seguido?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguidoId?: SortOrder
    criadoEm?: SortOrder
    seguidor?: UserOrderByWithRelationInput
    seguido?: UserOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seguidorId_seguidoId?: FollowSeguidorIdSeguidoIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    seguidorId?: StringFilter<"Follow"> | string
    seguidoId?: StringFilter<"Follow"> | string
    criadoEm?: DateTimeFilter<"Follow"> | Date | string
    seguidor?: XOR<UserRelationFilter, UserWhereInput>
    seguido?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "seguidorId_seguidoId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguidoId?: SortOrder
    criadoEm?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follow"> | string
    seguidorId?: StringWithAggregatesFilter<"Follow"> | string
    seguidoId?: StringWithAggregatesFilter<"Follow"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type RoteiroWhereInput = {
    AND?: RoteiroWhereInput | RoteiroWhereInput[]
    OR?: RoteiroWhereInput[]
    NOT?: RoteiroWhereInput | RoteiroWhereInput[]
    id?: StringFilter<"Roteiro"> | string
    titulo?: StringFilter<"Roteiro"> | string
    descricao?: StringNullableFilter<"Roteiro"> | string | null
    destino?: StringFilter<"Roteiro"> | string
    dataInicio?: DateTimeFilter<"Roteiro"> | Date | string
    dataFim?: DateTimeFilter<"Roteiro"> | Date | string
    publico?: BoolFilter<"Roteiro"> | boolean
    categoria?: EnumCategoriaFilter<"Roteiro"> | $Enums.Categoria
    orcamento?: DecimalNullableFilter<"Roteiro"> | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFilter<"Roteiro"> | number
    usuarioId?: StringFilter<"Roteiro"> | string
    criadoEm?: DateTimeFilter<"Roteiro"> | Date | string
    atualizadoEm?: DateTimeFilter<"Roteiro"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    dias?: DiaRoteiroListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    ingressos?: IngressoListRelationFilter
  }

  export type RoteiroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    publico?: SortOrder
    categoria?: SortOrder
    orcamento?: SortOrderInput | SortOrder
    visualizacoes?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UserOrderByWithRelationInput
    dias?: DiaRoteiroOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    ingressos?: IngressoOrderByRelationAggregateInput
  }

  export type RoteiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoteiroWhereInput | RoteiroWhereInput[]
    OR?: RoteiroWhereInput[]
    NOT?: RoteiroWhereInput | RoteiroWhereInput[]
    titulo?: StringFilter<"Roteiro"> | string
    descricao?: StringNullableFilter<"Roteiro"> | string | null
    destino?: StringFilter<"Roteiro"> | string
    dataInicio?: DateTimeFilter<"Roteiro"> | Date | string
    dataFim?: DateTimeFilter<"Roteiro"> | Date | string
    publico?: BoolFilter<"Roteiro"> | boolean
    categoria?: EnumCategoriaFilter<"Roteiro"> | $Enums.Categoria
    orcamento?: DecimalNullableFilter<"Roteiro"> | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFilter<"Roteiro"> | number
    usuarioId?: StringFilter<"Roteiro"> | string
    criadoEm?: DateTimeFilter<"Roteiro"> | Date | string
    atualizadoEm?: DateTimeFilter<"Roteiro"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    dias?: DiaRoteiroListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    ingressos?: IngressoListRelationFilter
  }, "id">

  export type RoteiroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    publico?: SortOrder
    categoria?: SortOrder
    orcamento?: SortOrderInput | SortOrder
    visualizacoes?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: RoteiroCountOrderByAggregateInput
    _avg?: RoteiroAvgOrderByAggregateInput
    _max?: RoteiroMaxOrderByAggregateInput
    _min?: RoteiroMinOrderByAggregateInput
    _sum?: RoteiroSumOrderByAggregateInput
  }

  export type RoteiroScalarWhereWithAggregatesInput = {
    AND?: RoteiroScalarWhereWithAggregatesInput | RoteiroScalarWhereWithAggregatesInput[]
    OR?: RoteiroScalarWhereWithAggregatesInput[]
    NOT?: RoteiroScalarWhereWithAggregatesInput | RoteiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roteiro"> | string
    titulo?: StringWithAggregatesFilter<"Roteiro"> | string
    descricao?: StringNullableWithAggregatesFilter<"Roteiro"> | string | null
    destino?: StringWithAggregatesFilter<"Roteiro"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
    publico?: BoolWithAggregatesFilter<"Roteiro"> | boolean
    categoria?: EnumCategoriaWithAggregatesFilter<"Roteiro"> | $Enums.Categoria
    orcamento?: DecimalNullableWithAggregatesFilter<"Roteiro"> | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntWithAggregatesFilter<"Roteiro"> | number
    usuarioId?: StringWithAggregatesFilter<"Roteiro"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
  }

  export type DiaRoteiroWhereInput = {
    AND?: DiaRoteiroWhereInput | DiaRoteiroWhereInput[]
    OR?: DiaRoteiroWhereInput[]
    NOT?: DiaRoteiroWhereInput | DiaRoteiroWhereInput[]
    id?: StringFilter<"DiaRoteiro"> | string
    data?: DateTimeFilter<"DiaRoteiro"> | Date | string
    ordem?: IntFilter<"DiaRoteiro"> | number
    roteiroId?: StringFilter<"DiaRoteiro"> | string
    criadoEm?: DateTimeFilter<"DiaRoteiro"> | Date | string
    roteiro?: XOR<RoteiroRelationFilter, RoteiroWhereInput>
    atracoes?: AtracaoDiaListRelationFilter
  }

  export type DiaRoteiroOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    ordem?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    roteiro?: RoteiroOrderByWithRelationInput
    atracoes?: AtracaoDiaOrderByRelationAggregateInput
  }

  export type DiaRoteiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roteiroId_ordem?: DiaRoteiroRoteiroIdOrdemCompoundUniqueInput
    AND?: DiaRoteiroWhereInput | DiaRoteiroWhereInput[]
    OR?: DiaRoteiroWhereInput[]
    NOT?: DiaRoteiroWhereInput | DiaRoteiroWhereInput[]
    data?: DateTimeFilter<"DiaRoteiro"> | Date | string
    ordem?: IntFilter<"DiaRoteiro"> | number
    roteiroId?: StringFilter<"DiaRoteiro"> | string
    criadoEm?: DateTimeFilter<"DiaRoteiro"> | Date | string
    roteiro?: XOR<RoteiroRelationFilter, RoteiroWhereInput>
    atracoes?: AtracaoDiaListRelationFilter
  }, "id" | "roteiroId_ordem">

  export type DiaRoteiroOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    ordem?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    _count?: DiaRoteiroCountOrderByAggregateInput
    _avg?: DiaRoteiroAvgOrderByAggregateInput
    _max?: DiaRoteiroMaxOrderByAggregateInput
    _min?: DiaRoteiroMinOrderByAggregateInput
    _sum?: DiaRoteiroSumOrderByAggregateInput
  }

  export type DiaRoteiroScalarWhereWithAggregatesInput = {
    AND?: DiaRoteiroScalarWhereWithAggregatesInput | DiaRoteiroScalarWhereWithAggregatesInput[]
    OR?: DiaRoteiroScalarWhereWithAggregatesInput[]
    NOT?: DiaRoteiroScalarWhereWithAggregatesInput | DiaRoteiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiaRoteiro"> | string
    data?: DateTimeWithAggregatesFilter<"DiaRoteiro"> | Date | string
    ordem?: IntWithAggregatesFilter<"DiaRoteiro"> | number
    roteiroId?: StringWithAggregatesFilter<"DiaRoteiro"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"DiaRoteiro"> | Date | string
  }

  export type AtracaoWhereInput = {
    AND?: AtracaoWhereInput | AtracaoWhereInput[]
    OR?: AtracaoWhereInput[]
    NOT?: AtracaoWhereInput | AtracaoWhereInput[]
    id?: StringFilter<"Atracao"> | string
    nome?: StringFilter<"Atracao"> | string
    descricao?: StringFilter<"Atracao"> | string
    categoria?: EnumCategoriaFilter<"Atracao"> | $Enums.Categoria
    preco?: DecimalNullableFilter<"Atracao"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFilter<"Atracao"> | string
    latitude?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    endereco?: StringFilter<"Atracao"> | string
    parceiro?: EnumParceiroFilter<"Atracao"> | $Enums.Parceiro
    linkAfiliado?: StringFilter<"Atracao"> | string
    duracaoEstimada?: IntFilter<"Atracao"> | number
    avaliacaoMedia?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFilter<"Atracao"> | number
    ativo?: BoolFilter<"Atracao"> | boolean
    criadoEm?: DateTimeFilter<"Atracao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Atracao"> | Date | string
    dias?: AtracaoDiaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    ingressos?: IngressoListRelationFilter
  }

  export type AtracaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    preco?: SortOrderInput | SortOrder
    moeda?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    endereco?: SortOrder
    parceiro?: SortOrder
    linkAfiliado?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dias?: AtracaoDiaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    ingressos?: IngressoOrderByRelationAggregateInput
  }

  export type AtracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtracaoWhereInput | AtracaoWhereInput[]
    OR?: AtracaoWhereInput[]
    NOT?: AtracaoWhereInput | AtracaoWhereInput[]
    nome?: StringFilter<"Atracao"> | string
    descricao?: StringFilter<"Atracao"> | string
    categoria?: EnumCategoriaFilter<"Atracao"> | $Enums.Categoria
    preco?: DecimalNullableFilter<"Atracao"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFilter<"Atracao"> | string
    latitude?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    endereco?: StringFilter<"Atracao"> | string
    parceiro?: EnumParceiroFilter<"Atracao"> | $Enums.Parceiro
    linkAfiliado?: StringFilter<"Atracao"> | string
    duracaoEstimada?: IntFilter<"Atracao"> | number
    avaliacaoMedia?: DecimalFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFilter<"Atracao"> | number
    ativo?: BoolFilter<"Atracao"> | boolean
    criadoEm?: DateTimeFilter<"Atracao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Atracao"> | Date | string
    dias?: AtracaoDiaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    ingressos?: IngressoListRelationFilter
  }, "id">

  export type AtracaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    preco?: SortOrderInput | SortOrder
    moeda?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    endereco?: SortOrder
    parceiro?: SortOrder
    linkAfiliado?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: AtracaoCountOrderByAggregateInput
    _avg?: AtracaoAvgOrderByAggregateInput
    _max?: AtracaoMaxOrderByAggregateInput
    _min?: AtracaoMinOrderByAggregateInput
    _sum?: AtracaoSumOrderByAggregateInput
  }

  export type AtracaoScalarWhereWithAggregatesInput = {
    AND?: AtracaoScalarWhereWithAggregatesInput | AtracaoScalarWhereWithAggregatesInput[]
    OR?: AtracaoScalarWhereWithAggregatesInput[]
    NOT?: AtracaoScalarWhereWithAggregatesInput | AtracaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atracao"> | string
    nome?: StringWithAggregatesFilter<"Atracao"> | string
    descricao?: StringWithAggregatesFilter<"Atracao"> | string
    categoria?: EnumCategoriaWithAggregatesFilter<"Atracao"> | $Enums.Categoria
    preco?: DecimalNullableWithAggregatesFilter<"Atracao"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringWithAggregatesFilter<"Atracao"> | string
    latitude?: DecimalWithAggregatesFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    endereco?: StringWithAggregatesFilter<"Atracao"> | string
    parceiro?: EnumParceiroWithAggregatesFilter<"Atracao"> | $Enums.Parceiro
    linkAfiliado?: StringWithAggregatesFilter<"Atracao"> | string
    duracaoEstimada?: IntWithAggregatesFilter<"Atracao"> | number
    avaliacaoMedia?: DecimalWithAggregatesFilter<"Atracao"> | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntWithAggregatesFilter<"Atracao"> | number
    ativo?: BoolWithAggregatesFilter<"Atracao"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Atracao"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Atracao"> | Date | string
  }

  export type AtracaoDiaWhereInput = {
    AND?: AtracaoDiaWhereInput | AtracaoDiaWhereInput[]
    OR?: AtracaoDiaWhereInput[]
    NOT?: AtracaoDiaWhereInput | AtracaoDiaWhereInput[]
    id?: StringFilter<"AtracaoDia"> | string
    atracaoId?: StringFilter<"AtracaoDia"> | string
    diaRoteiroId?: StringFilter<"AtracaoDia"> | string
    horario?: StringNullableFilter<"AtracaoDia"> | string | null
    tempoEstimado?: IntNullableFilter<"AtracaoDia"> | number | null
    ordem?: IntFilter<"AtracaoDia"> | number
    observacoes?: StringNullableFilter<"AtracaoDia"> | string | null
    criadoEm?: DateTimeFilter<"AtracaoDia"> | Date | string
    atracao?: XOR<AtracaoRelationFilter, AtracaoWhereInput>
    diaRoteiro?: XOR<DiaRoteiroRelationFilter, DiaRoteiroWhereInput>
  }

  export type AtracaoDiaOrderByWithRelationInput = {
    id?: SortOrder
    atracaoId?: SortOrder
    diaRoteiroId?: SortOrder
    horario?: SortOrderInput | SortOrder
    tempoEstimado?: SortOrderInput | SortOrder
    ordem?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atracao?: AtracaoOrderByWithRelationInput
    diaRoteiro?: DiaRoteiroOrderByWithRelationInput
  }

  export type AtracaoDiaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    diaRoteiroId_ordem?: AtracaoDiaDiaRoteiroIdOrdemCompoundUniqueInput
    AND?: AtracaoDiaWhereInput | AtracaoDiaWhereInput[]
    OR?: AtracaoDiaWhereInput[]
    NOT?: AtracaoDiaWhereInput | AtracaoDiaWhereInput[]
    atracaoId?: StringFilter<"AtracaoDia"> | string
    diaRoteiroId?: StringFilter<"AtracaoDia"> | string
    horario?: StringNullableFilter<"AtracaoDia"> | string | null
    tempoEstimado?: IntNullableFilter<"AtracaoDia"> | number | null
    ordem?: IntFilter<"AtracaoDia"> | number
    observacoes?: StringNullableFilter<"AtracaoDia"> | string | null
    criadoEm?: DateTimeFilter<"AtracaoDia"> | Date | string
    atracao?: XOR<AtracaoRelationFilter, AtracaoWhereInput>
    diaRoteiro?: XOR<DiaRoteiroRelationFilter, DiaRoteiroWhereInput>
  }, "id" | "diaRoteiroId_ordem">

  export type AtracaoDiaOrderByWithAggregationInput = {
    id?: SortOrder
    atracaoId?: SortOrder
    diaRoteiroId?: SortOrder
    horario?: SortOrderInput | SortOrder
    tempoEstimado?: SortOrderInput | SortOrder
    ordem?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: AtracaoDiaCountOrderByAggregateInput
    _avg?: AtracaoDiaAvgOrderByAggregateInput
    _max?: AtracaoDiaMaxOrderByAggregateInput
    _min?: AtracaoDiaMinOrderByAggregateInput
    _sum?: AtracaoDiaSumOrderByAggregateInput
  }

  export type AtracaoDiaScalarWhereWithAggregatesInput = {
    AND?: AtracaoDiaScalarWhereWithAggregatesInput | AtracaoDiaScalarWhereWithAggregatesInput[]
    OR?: AtracaoDiaScalarWhereWithAggregatesInput[]
    NOT?: AtracaoDiaScalarWhereWithAggregatesInput | AtracaoDiaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtracaoDia"> | string
    atracaoId?: StringWithAggregatesFilter<"AtracaoDia"> | string
    diaRoteiroId?: StringWithAggregatesFilter<"AtracaoDia"> | string
    horario?: StringNullableWithAggregatesFilter<"AtracaoDia"> | string | null
    tempoEstimado?: IntNullableWithAggregatesFilter<"AtracaoDia"> | number | null
    ordem?: IntWithAggregatesFilter<"AtracaoDia"> | number
    observacoes?: StringNullableWithAggregatesFilter<"AtracaoDia"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"AtracaoDia"> | Date | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataVisita?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    util?: IntFilter<"Avaliacao"> | number
    naoUtil?: IntFilter<"Avaliacao"> | number
    usuarioId?: StringFilter<"Avaliacao"> | string
    atracaoId?: StringNullableFilter<"Avaliacao"> | string | null
    roteiroId?: StringNullableFilter<"Avaliacao"> | string | null
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    atracao?: XOR<AtracaoNullableRelationFilter, AtracaoWhereInput> | null
    roteiro?: XOR<RoteiroNullableRelationFilter, RoteiroWhereInput> | null
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    dataVisita?: SortOrderInput | SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrderInput | SortOrder
    roteiroId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UserOrderByWithRelationInput
    atracao?: AtracaoOrderByWithRelationInput
    roteiro?: RoteiroOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataVisita?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    util?: IntFilter<"Avaliacao"> | number
    naoUtil?: IntFilter<"Avaliacao"> | number
    usuarioId?: StringFilter<"Avaliacao"> | string
    atracaoId?: StringNullableFilter<"Avaliacao"> | string | null
    roteiroId?: StringNullableFilter<"Avaliacao"> | string | null
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    atracao?: XOR<AtracaoNullableRelationFilter, AtracaoWhereInput> | null
    roteiro?: XOR<RoteiroNullableRelationFilter, RoteiroWhereInput> | null
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    dataVisita?: SortOrderInput | SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrderInput | SortOrder
    roteiroId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    dataVisita?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
    util?: IntWithAggregatesFilter<"Avaliacao"> | number
    naoUtil?: IntWithAggregatesFilter<"Avaliacao"> | number
    usuarioId?: StringWithAggregatesFilter<"Avaliacao"> | string
    atracaoId?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    roteiroId?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: StringFilter<"Comentario"> | string
    conteudo?: StringFilter<"Comentario"> | string
    usuarioId?: StringFilter<"Comentario"> | string
    roteiroId?: StringFilter<"Comentario"> | string
    parentId?: StringNullableFilter<"Comentario"> | string | null
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    roteiro?: XOR<RoteiroRelationFilter, RoteiroWhereInput>
    parent?: XOR<ComentarioNullableRelationFilter, ComentarioWhereInput> | null
    respostas?: ComentarioListRelationFilter
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    roteiroId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UserOrderByWithRelationInput
    roteiro?: RoteiroOrderByWithRelationInput
    parent?: ComentarioOrderByWithRelationInput
    respostas?: ComentarioOrderByRelationAggregateInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    conteudo?: StringFilter<"Comentario"> | string
    usuarioId?: StringFilter<"Comentario"> | string
    roteiroId?: StringFilter<"Comentario"> | string
    parentId?: StringNullableFilter<"Comentario"> | string | null
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    roteiro?: XOR<RoteiroRelationFilter, RoteiroWhereInput>
    parent?: XOR<ComentarioNullableRelationFilter, ComentarioWhereInput> | null
    respostas?: ComentarioListRelationFilter
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    roteiroId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comentario"> | string
    conteudo?: StringWithAggregatesFilter<"Comentario"> | string
    usuarioId?: StringWithAggregatesFilter<"Comentario"> | string
    roteiroId?: StringWithAggregatesFilter<"Comentario"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comentario"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
  }

  export type IngressoWhereInput = {
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    id?: StringFilter<"Ingresso"> | string
    codigo?: StringFilter<"Ingresso"> | string
    qrCode?: StringNullableFilter<"Ingresso"> | string | null
    dataValidade?: DateTimeFilter<"Ingresso"> | Date | string
    preco?: DecimalNullableFilter<"Ingresso"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFilter<"Ingresso"> | string
    status?: EnumStatusIngressoFilter<"Ingresso"> | $Enums.StatusIngresso
    observacoes?: StringNullableFilter<"Ingresso"> | string | null
    usuarioId?: StringFilter<"Ingresso"> | string
    atracaoId?: StringFilter<"Ingresso"> | string
    roteiroId?: StringNullableFilter<"Ingresso"> | string | null
    criadoEm?: DateTimeFilter<"Ingresso"> | Date | string
    atualizadoEm?: DateTimeFilter<"Ingresso"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    atracao?: XOR<AtracaoRelationFilter, AtracaoWhereInput>
    roteiro?: XOR<RoteiroNullableRelationFilter, RoteiroWhereInput> | null
  }

  export type IngressoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    dataValidade?: SortOrder
    preco?: SortOrderInput | SortOrder
    moeda?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UserOrderByWithRelationInput
    atracao?: AtracaoOrderByWithRelationInput
    roteiro?: RoteiroOrderByWithRelationInput
  }

  export type IngressoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    codigo?: StringFilter<"Ingresso"> | string
    qrCode?: StringNullableFilter<"Ingresso"> | string | null
    dataValidade?: DateTimeFilter<"Ingresso"> | Date | string
    preco?: DecimalNullableFilter<"Ingresso"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFilter<"Ingresso"> | string
    status?: EnumStatusIngressoFilter<"Ingresso"> | $Enums.StatusIngresso
    observacoes?: StringNullableFilter<"Ingresso"> | string | null
    usuarioId?: StringFilter<"Ingresso"> | string
    atracaoId?: StringFilter<"Ingresso"> | string
    roteiroId?: StringNullableFilter<"Ingresso"> | string | null
    criadoEm?: DateTimeFilter<"Ingresso"> | Date | string
    atualizadoEm?: DateTimeFilter<"Ingresso"> | Date | string
    usuario?: XOR<UserRelationFilter, UserWhereInput>
    atracao?: XOR<AtracaoRelationFilter, AtracaoWhereInput>
    roteiro?: XOR<RoteiroNullableRelationFilter, RoteiroWhereInput> | null
  }, "id">

  export type IngressoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    dataValidade?: SortOrder
    preco?: SortOrderInput | SortOrder
    moeda?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: IngressoCountOrderByAggregateInput
    _avg?: IngressoAvgOrderByAggregateInput
    _max?: IngressoMaxOrderByAggregateInput
    _min?: IngressoMinOrderByAggregateInput
    _sum?: IngressoSumOrderByAggregateInput
  }

  export type IngressoScalarWhereWithAggregatesInput = {
    AND?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    OR?: IngressoScalarWhereWithAggregatesInput[]
    NOT?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingresso"> | string
    codigo?: StringWithAggregatesFilter<"Ingresso"> | string
    qrCode?: StringNullableWithAggregatesFilter<"Ingresso"> | string | null
    dataValidade?: DateTimeWithAggregatesFilter<"Ingresso"> | Date | string
    preco?: DecimalNullableWithAggregatesFilter<"Ingresso"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringWithAggregatesFilter<"Ingresso"> | string
    status?: EnumStatusIngressoWithAggregatesFilter<"Ingresso"> | $Enums.StatusIngresso
    observacoes?: StringNullableWithAggregatesFilter<"Ingresso"> | string | null
    usuarioId?: StringWithAggregatesFilter<"Ingresso"> | string
    atracaoId?: StringWithAggregatesFilter<"Ingresso"> | string
    roteiroId?: StringNullableWithAggregatesFilter<"Ingresso"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Ingresso"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Ingresso"> | Date | string
  }

  export type ConsultoriaWhereInput = {
    AND?: ConsultoriaWhereInput | ConsultoriaWhereInput[]
    OR?: ConsultoriaWhereInput[]
    NOT?: ConsultoriaWhereInput | ConsultoriaWhereInput[]
    id?: StringFilter<"Consultoria"> | string
    destino?: StringFilter<"Consultoria"> | string
    dataInicio?: DateTimeFilter<"Consultoria"> | Date | string
    dataFim?: DateTimeFilter<"Consultoria"> | Date | string
    orcamento?: DecimalNullableFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string | null
    preferencias?: StringNullableFilter<"Consultoria"> | string | null
    status?: StringFilter<"Consultoria"> | string
    preco?: DecimalFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"Consultoria"> | string
    consultorId?: StringNullableFilter<"Consultoria"> | string | null
    criadoEm?: DateTimeFilter<"Consultoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consultoria"> | Date | string
    cliente?: XOR<UserRelationFilter, UserWhereInput>
    consultor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ConsultoriaOrderByWithRelationInput = {
    id?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    orcamento?: SortOrderInput | SortOrder
    preferencias?: SortOrderInput | SortOrder
    status?: SortOrder
    preco?: SortOrder
    clienteId?: SortOrder
    consultorId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    cliente?: UserOrderByWithRelationInput
    consultor?: UserOrderByWithRelationInput
  }

  export type ConsultoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultoriaWhereInput | ConsultoriaWhereInput[]
    OR?: ConsultoriaWhereInput[]
    NOT?: ConsultoriaWhereInput | ConsultoriaWhereInput[]
    destino?: StringFilter<"Consultoria"> | string
    dataInicio?: DateTimeFilter<"Consultoria"> | Date | string
    dataFim?: DateTimeFilter<"Consultoria"> | Date | string
    orcamento?: DecimalNullableFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string | null
    preferencias?: StringNullableFilter<"Consultoria"> | string | null
    status?: StringFilter<"Consultoria"> | string
    preco?: DecimalFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"Consultoria"> | string
    consultorId?: StringNullableFilter<"Consultoria"> | string | null
    criadoEm?: DateTimeFilter<"Consultoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consultoria"> | Date | string
    cliente?: XOR<UserRelationFilter, UserWhereInput>
    consultor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ConsultoriaOrderByWithAggregationInput = {
    id?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    orcamento?: SortOrderInput | SortOrder
    preferencias?: SortOrderInput | SortOrder
    status?: SortOrder
    preco?: SortOrder
    clienteId?: SortOrder
    consultorId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ConsultoriaCountOrderByAggregateInput
    _avg?: ConsultoriaAvgOrderByAggregateInput
    _max?: ConsultoriaMaxOrderByAggregateInput
    _min?: ConsultoriaMinOrderByAggregateInput
    _sum?: ConsultoriaSumOrderByAggregateInput
  }

  export type ConsultoriaScalarWhereWithAggregatesInput = {
    AND?: ConsultoriaScalarWhereWithAggregatesInput | ConsultoriaScalarWhereWithAggregatesInput[]
    OR?: ConsultoriaScalarWhereWithAggregatesInput[]
    NOT?: ConsultoriaScalarWhereWithAggregatesInput | ConsultoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultoria"> | string
    destino?: StringWithAggregatesFilter<"Consultoria"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Consultoria"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Consultoria"> | Date | string
    orcamento?: DecimalNullableWithAggregatesFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string | null
    preferencias?: StringNullableWithAggregatesFilter<"Consultoria"> | string | null
    status?: StringWithAggregatesFilter<"Consultoria"> | string
    preco?: DecimalWithAggregatesFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringWithAggregatesFilter<"Consultoria"> | string
    consultorId?: StringNullableWithAggregatesFilter<"Consultoria"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Consultoria"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Consultoria"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    criadoEm?: Date | string
    seguidor: UserCreateNestedOneWithoutSeguidoresInput
    seguido: UserCreateNestedOneWithoutSeguindoInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    seguidorId: string
    seguidoId: string
    criadoEm?: Date | string
  }

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: UserUpdateOneRequiredWithoutSeguidoresNestedInput
    seguido?: UserUpdateOneRequiredWithoutSeguindoNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidorId?: StringFieldUpdateOperationsInput | string
    seguidoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    seguidorId: string
    seguidoId: string
    criadoEm?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidorId?: StringFieldUpdateOperationsInput | string
    seguidoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutRoteirosInput
    dias?: DiaRoteiroCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutRoteirosNestedInput
    dias?: DiaRoteiroUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type RoteiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaRoteiroCreateInput = {
    id?: string
    data: Date | string
    ordem: number
    criadoEm?: Date | string
    roteiro: RoteiroCreateNestedOneWithoutDiasInput
    atracoes?: AtracaoDiaCreateNestedManyWithoutDiaRoteiroInput
  }

  export type DiaRoteiroUncheckedCreateInput = {
    id?: string
    data: Date | string
    ordem: number
    roteiroId: string
    criadoEm?: Date | string
    atracoes?: AtracaoDiaUncheckedCreateNestedManyWithoutDiaRoteiroInput
  }

  export type DiaRoteiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    roteiro?: RoteiroUpdateOneRequiredWithoutDiasNestedInput
    atracoes?: AtracaoDiaUpdateManyWithoutDiaRoteiroNestedInput
  }

  export type DiaRoteiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    roteiroId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracoes?: AtracaoDiaUncheckedUpdateManyWithoutDiaRoteiroNestedInput
  }

  export type DiaRoteiroCreateManyInput = {
    id?: string
    data: Date | string
    ordem: number
    roteiroId: string
    criadoEm?: Date | string
  }

  export type DiaRoteiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaRoteiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    roteiroId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoCreateInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaCreateNestedManyWithoutAtracaoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaUncheckedCreateNestedManyWithoutAtracaoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUpdateManyWithoutAtracaoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUpdateManyWithoutAtracaoNestedInput
  }

  export type AtracaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUncheckedUpdateManyWithoutAtracaoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutAtracaoNestedInput
  }

  export type AtracaoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AtracaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaCreateInput = {
    id?: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
    atracao: AtracaoCreateNestedOneWithoutDiasInput
    diaRoteiro: DiaRoteiroCreateNestedOneWithoutAtracoesInput
  }

  export type AtracaoDiaUncheckedCreateInput = {
    id?: string
    atracaoId: string
    diaRoteiroId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AtracaoDiaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracao?: AtracaoUpdateOneRequiredWithoutDiasNestedInput
    diaRoteiro?: DiaRoteiroUpdateOneRequiredWithoutAtracoesNestedInput
  }

  export type AtracaoDiaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    diaRoteiroId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaCreateManyInput = {
    id?: string
    atracaoId: string
    diaRoteiroId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AtracaoDiaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    diaRoteiroId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutAvaliacoesInput
    atracao?: AtracaoCreateNestedOneWithoutAvaliacoesInput
    roteiro?: RoteiroCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    atracaoId?: string | null
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutAvaliacoesNestedInput
    atracao?: AtracaoUpdateOneWithoutAvaliacoesNestedInput
    roteiro?: RoteiroUpdateOneWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    atracaoId?: string | null
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateInput = {
    id?: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutComentariosInput
    roteiro: RoteiroCreateNestedOneWithoutComentariosInput
    parent?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutParentInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutParentInput
  }

  export type ComentarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutComentariosNestedInput
    roteiro?: RoteiroUpdateOneRequiredWithoutComentariosNestedInput
    parent?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ComentarioCreateManyInput = {
    id?: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoCreateInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutIngressosInput
    atracao: AtracaoCreateNestedOneWithoutIngressosInput
    roteiro?: RoteiroCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    atracaoId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutIngressosNestedInput
    atracao?: AtracaoUpdateOneRequiredWithoutIngressosNestedInput
    roteiro?: RoteiroUpdateOneWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoCreateManyInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    atracaoId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaCreateInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    cliente: UserCreateNestedOneWithoutConsultoriasSolicitadasInput
    consultor?: UserCreateNestedOneWithoutConsultoriasAtendidasInput
  }

  export type ConsultoriaUncheckedCreateInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    clienteId: string
    consultorId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UserUpdateOneRequiredWithoutConsultoriasSolicitadasNestedInput
    consultor?: UserUpdateOneWithoutConsultoriasAtendidasNestedInput
  }

  export type ConsultoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
    consultorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaCreateManyInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    clienteId: string
    consultorId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
    consultorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumTipoPlanoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlano | EnumTipoPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlanoFilter<$PrismaModel> | $Enums.TipoPlano
  }

  export type EnumRoleUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUsuario | EnumRoleUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUsuarioFilter<$PrismaModel> | $Enums.RoleUsuario
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type RoteiroListRelationFilter = {
    every?: RoteiroWhereInput
    some?: RoteiroWhereInput
    none?: RoteiroWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type IngressoListRelationFilter = {
    every?: IngressoWhereInput
    some?: IngressoWhereInput
    none?: IngressoWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type ConsultoriaListRelationFilter = {
    every?: ConsultoriaWhereInput
    some?: ConsultoriaWhereInput
    none?: ConsultoriaWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoteiroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    plano?: SortOrder
    role?: SortOrder
    preferenciasIdioma?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    plano?: SortOrder
    role?: SortOrder
    preferenciasIdioma?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    plano?: SortOrder
    role?: SortOrder
    preferenciasIdioma?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipoPlanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlano | EnumTipoPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlanoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPlano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPlanoFilter<$PrismaModel>
    _max?: NestedEnumTipoPlanoFilter<$PrismaModel>
  }

  export type EnumRoleUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUsuario | EnumRoleUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RoleUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRoleUsuarioFilter<$PrismaModel>
  }

  export type FollowSeguidorIdSeguidoIdCompoundUniqueInput = {
    seguidorId: string
    seguidoId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguidoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguidoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguidoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DiaRoteiroListRelationFilter = {
    every?: DiaRoteiroWhereInput
    some?: DiaRoteiroWhereInput
    none?: DiaRoteiroWhereInput
  }

  export type DiaRoteiroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoteiroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    publico?: SortOrder
    categoria?: SortOrder
    orcamento?: SortOrder
    visualizacoes?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RoteiroAvgOrderByAggregateInput = {
    orcamento?: SortOrder
    visualizacoes?: SortOrder
  }

  export type RoteiroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    publico?: SortOrder
    categoria?: SortOrder
    orcamento?: SortOrder
    visualizacoes?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RoteiroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    publico?: SortOrder
    categoria?: SortOrder
    orcamento?: SortOrder
    visualizacoes?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RoteiroSumOrderByAggregateInput = {
    orcamento?: SortOrder
    visualizacoes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RoteiroRelationFilter = {
    is?: RoteiroWhereInput
    isNot?: RoteiroWhereInput
  }

  export type AtracaoDiaListRelationFilter = {
    every?: AtracaoDiaWhereInput
    some?: AtracaoDiaWhereInput
    none?: AtracaoDiaWhereInput
  }

  export type AtracaoDiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaRoteiroRoteiroIdOrdemCompoundUniqueInput = {
    roteiroId: string
    ordem: number
  }

  export type DiaRoteiroCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ordem?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
  }

  export type DiaRoteiroAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type DiaRoteiroMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ordem?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
  }

  export type DiaRoteiroMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ordem?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
  }

  export type DiaRoteiroSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumParceiroFilter<$PrismaModel = never> = {
    equals?: $Enums.Parceiro | EnumParceiroFieldRefInput<$PrismaModel>
    in?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    not?: NestedEnumParceiroFilter<$PrismaModel> | $Enums.Parceiro
  }

  export type AtracaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    endereco?: SortOrder
    parceiro?: SortOrder
    linkAfiliado?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AtracaoAvgOrderByAggregateInput = {
    preco?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
  }

  export type AtracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    endereco?: SortOrder
    parceiro?: SortOrder
    linkAfiliado?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AtracaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    endereco?: SortOrder
    parceiro?: SortOrder
    linkAfiliado?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AtracaoSumOrderByAggregateInput = {
    preco?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    duracaoEstimada?: SortOrder
    avaliacaoMedia?: SortOrder
    totalAvaliacoes?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumParceiroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Parceiro | EnumParceiroFieldRefInput<$PrismaModel>
    in?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    not?: NestedEnumParceiroWithAggregatesFilter<$PrismaModel> | $Enums.Parceiro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParceiroFilter<$PrismaModel>
    _max?: NestedEnumParceiroFilter<$PrismaModel>
  }

  export type AtracaoRelationFilter = {
    is?: AtracaoWhereInput
    isNot?: AtracaoWhereInput
  }

  export type DiaRoteiroRelationFilter = {
    is?: DiaRoteiroWhereInput
    isNot?: DiaRoteiroWhereInput
  }

  export type AtracaoDiaDiaRoteiroIdOrdemCompoundUniqueInput = {
    diaRoteiroId: string
    ordem: number
  }

  export type AtracaoDiaCountOrderByAggregateInput = {
    id?: SortOrder
    atracaoId?: SortOrder
    diaRoteiroId?: SortOrder
    horario?: SortOrder
    tempoEstimado?: SortOrder
    ordem?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AtracaoDiaAvgOrderByAggregateInput = {
    tempoEstimado?: SortOrder
    ordem?: SortOrder
  }

  export type AtracaoDiaMaxOrderByAggregateInput = {
    id?: SortOrder
    atracaoId?: SortOrder
    diaRoteiroId?: SortOrder
    horario?: SortOrder
    tempoEstimado?: SortOrder
    ordem?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AtracaoDiaMinOrderByAggregateInput = {
    id?: SortOrder
    atracaoId?: SortOrder
    diaRoteiroId?: SortOrder
    horario?: SortOrder
    tempoEstimado?: SortOrder
    ordem?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AtracaoDiaSumOrderByAggregateInput = {
    tempoEstimado?: SortOrder
    ordem?: SortOrder
  }

  export type AtracaoNullableRelationFilter = {
    is?: AtracaoWhereInput | null
    isNot?: AtracaoWhereInput | null
  }

  export type RoteiroNullableRelationFilter = {
    is?: RoteiroWhereInput | null
    isNot?: RoteiroWhereInput | null
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataVisita?: SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota?: SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataVisita?: SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataVisita?: SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota?: SortOrder
    util?: SortOrder
    naoUtil?: SortOrder
  }

  export type ComentarioNullableRelationFilter = {
    is?: ComentarioWhereInput | null
    isNot?: ComentarioWhereInput | null
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    roteiroId?: SortOrder
    parentId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    roteiroId?: SortOrder
    parentId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    roteiroId?: SortOrder
    parentId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EnumStatusIngressoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIngresso | EnumStatusIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIngressoFilter<$PrismaModel> | $Enums.StatusIngresso
  }

  export type IngressoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    qrCode?: SortOrder
    dataValidade?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type IngressoAvgOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type IngressoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    qrCode?: SortOrder
    dataValidade?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type IngressoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    qrCode?: SortOrder
    dataValidade?: SortOrder
    preco?: SortOrder
    moeda?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    usuarioId?: SortOrder
    atracaoId?: SortOrder
    roteiroId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type IngressoSumOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type EnumStatusIngressoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIngresso | EnumStatusIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIngressoWithAggregatesFilter<$PrismaModel> | $Enums.StatusIngresso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIngressoFilter<$PrismaModel>
    _max?: NestedEnumStatusIngressoFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ConsultoriaCountOrderByAggregateInput = {
    id?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    orcamento?: SortOrder
    preferencias?: SortOrder
    status?: SortOrder
    preco?: SortOrder
    clienteId?: SortOrder
    consultorId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultoriaAvgOrderByAggregateInput = {
    orcamento?: SortOrder
    preco?: SortOrder
  }

  export type ConsultoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    orcamento?: SortOrder
    preferencias?: SortOrder
    status?: SortOrder
    preco?: SortOrder
    clienteId?: SortOrder
    consultorId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultoriaMinOrderByAggregateInput = {
    id?: SortOrder
    destino?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    orcamento?: SortOrder
    preferencias?: SortOrder
    status?: SortOrder
    preco?: SortOrder
    clienteId?: SortOrder
    consultorId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultoriaSumOrderByAggregateInput = {
    orcamento?: SortOrder
    preco?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoteiroCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput> | RoteiroCreateWithoutUsuarioInput[] | RoteiroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoteiroCreateOrConnectWithoutUsuarioInput | RoteiroCreateOrConnectWithoutUsuarioInput[]
    createMany?: RoteiroCreateManyUsuarioInputEnvelope
    connect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type IngressoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput> | IngressoCreateWithoutUsuarioInput[] | IngressoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutUsuarioInput | IngressoCreateOrConnectWithoutUsuarioInput[]
    createMany?: IngressoCreateManyUsuarioInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput> | FollowCreateWithoutSeguidorInput[] | FollowUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidorInput | FollowCreateOrConnectWithoutSeguidorInput[]
    createMany?: FollowCreateManySeguidorInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutSeguidoInput = {
    create?: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput> | FollowCreateWithoutSeguidoInput[] | FollowUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidoInput | FollowCreateOrConnectWithoutSeguidoInput[]
    createMany?: FollowCreateManySeguidoInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type ConsultoriaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput> | ConsultoriaCreateWithoutClienteInput[] | ConsultoriaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutClienteInput | ConsultoriaCreateOrConnectWithoutClienteInput[]
    createMany?: ConsultoriaCreateManyClienteInputEnvelope
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
  }

  export type ConsultoriaCreateNestedManyWithoutConsultorInput = {
    create?: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput> | ConsultoriaCreateWithoutConsultorInput[] | ConsultoriaUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutConsultorInput | ConsultoriaCreateOrConnectWithoutConsultorInput[]
    createMany?: ConsultoriaCreateManyConsultorInputEnvelope
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoteiroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput> | RoteiroCreateWithoutUsuarioInput[] | RoteiroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoteiroCreateOrConnectWithoutUsuarioInput | RoteiroCreateOrConnectWithoutUsuarioInput[]
    createMany?: RoteiroCreateManyUsuarioInputEnvelope
    connect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput> | IngressoCreateWithoutUsuarioInput[] | IngressoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutUsuarioInput | IngressoCreateOrConnectWithoutUsuarioInput[]
    createMany?: IngressoCreateManyUsuarioInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput> | FollowCreateWithoutSeguidorInput[] | FollowUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidorInput | FollowCreateOrConnectWithoutSeguidorInput[]
    createMany?: FollowCreateManySeguidorInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutSeguidoInput = {
    create?: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput> | FollowCreateWithoutSeguidoInput[] | FollowUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidoInput | FollowCreateOrConnectWithoutSeguidoInput[]
    createMany?: FollowCreateManySeguidoInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type ConsultoriaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput> | ConsultoriaCreateWithoutClienteInput[] | ConsultoriaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutClienteInput | ConsultoriaCreateOrConnectWithoutClienteInput[]
    createMany?: ConsultoriaCreateManyClienteInputEnvelope
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
  }

  export type ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput = {
    create?: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput> | ConsultoriaCreateWithoutConsultorInput[] | ConsultoriaUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutConsultorInput | ConsultoriaCreateOrConnectWithoutConsultorInput[]
    createMany?: ConsultoriaCreateManyConsultorInputEnvelope
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTipoPlanoFieldUpdateOperationsInput = {
    set?: $Enums.TipoPlano
  }

  export type EnumRoleUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RoleUsuario
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoteiroUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput> | RoteiroCreateWithoutUsuarioInput[] | RoteiroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoteiroCreateOrConnectWithoutUsuarioInput | RoteiroCreateOrConnectWithoutUsuarioInput[]
    upsert?: RoteiroUpsertWithWhereUniqueWithoutUsuarioInput | RoteiroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RoteiroCreateManyUsuarioInputEnvelope
    set?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    disconnect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    delete?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    connect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    update?: RoteiroUpdateWithWhereUniqueWithoutUsuarioInput | RoteiroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RoteiroUpdateManyWithWhereWithoutUsuarioInput | RoteiroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RoteiroScalarWhereInput | RoteiroScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IngressoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput> | IngressoCreateWithoutUsuarioInput[] | IngressoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutUsuarioInput | IngressoCreateOrConnectWithoutUsuarioInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutUsuarioInput | IngressoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: IngressoCreateManyUsuarioInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutUsuarioInput | IngressoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutUsuarioInput | IngressoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput> | FollowCreateWithoutSeguidorInput[] | FollowUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidorInput | FollowCreateOrConnectWithoutSeguidorInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutSeguidorInput | FollowUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: FollowCreateManySeguidorInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutSeguidorInput | FollowUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutSeguidorInput | FollowUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutSeguidoNestedInput = {
    create?: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput> | FollowCreateWithoutSeguidoInput[] | FollowUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidoInput | FollowCreateOrConnectWithoutSeguidoInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutSeguidoInput | FollowUpsertWithWhereUniqueWithoutSeguidoInput[]
    createMany?: FollowCreateManySeguidoInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutSeguidoInput | FollowUpdateWithWhereUniqueWithoutSeguidoInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutSeguidoInput | FollowUpdateManyWithWhereWithoutSeguidoInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type ConsultoriaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput> | ConsultoriaCreateWithoutClienteInput[] | ConsultoriaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutClienteInput | ConsultoriaCreateOrConnectWithoutClienteInput[]
    upsert?: ConsultoriaUpsertWithWhereUniqueWithoutClienteInput | ConsultoriaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ConsultoriaCreateManyClienteInputEnvelope
    set?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    disconnect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    delete?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    update?: ConsultoriaUpdateWithWhereUniqueWithoutClienteInput | ConsultoriaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ConsultoriaUpdateManyWithWhereWithoutClienteInput | ConsultoriaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
  }

  export type ConsultoriaUpdateManyWithoutConsultorNestedInput = {
    create?: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput> | ConsultoriaCreateWithoutConsultorInput[] | ConsultoriaUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutConsultorInput | ConsultoriaCreateOrConnectWithoutConsultorInput[]
    upsert?: ConsultoriaUpsertWithWhereUniqueWithoutConsultorInput | ConsultoriaUpsertWithWhereUniqueWithoutConsultorInput[]
    createMany?: ConsultoriaCreateManyConsultorInputEnvelope
    set?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    disconnect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    delete?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    update?: ConsultoriaUpdateWithWhereUniqueWithoutConsultorInput | ConsultoriaUpdateWithWhereUniqueWithoutConsultorInput[]
    updateMany?: ConsultoriaUpdateManyWithWhereWithoutConsultorInput | ConsultoriaUpdateManyWithWhereWithoutConsultorInput[]
    deleteMany?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput> | RoteiroCreateWithoutUsuarioInput[] | RoteiroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoteiroCreateOrConnectWithoutUsuarioInput | RoteiroCreateOrConnectWithoutUsuarioInput[]
    upsert?: RoteiroUpsertWithWhereUniqueWithoutUsuarioInput | RoteiroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RoteiroCreateManyUsuarioInputEnvelope
    set?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    disconnect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    delete?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    connect?: RoteiroWhereUniqueInput | RoteiroWhereUniqueInput[]
    update?: RoteiroUpdateWithWhereUniqueWithoutUsuarioInput | RoteiroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RoteiroUpdateManyWithWhereWithoutUsuarioInput | RoteiroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RoteiroScalarWhereInput | RoteiroScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput> | IngressoCreateWithoutUsuarioInput[] | IngressoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutUsuarioInput | IngressoCreateOrConnectWithoutUsuarioInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutUsuarioInput | IngressoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: IngressoCreateManyUsuarioInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutUsuarioInput | IngressoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutUsuarioInput | IngressoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput> | FollowCreateWithoutSeguidorInput[] | FollowUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidorInput | FollowCreateOrConnectWithoutSeguidorInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutSeguidorInput | FollowUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: FollowCreateManySeguidorInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutSeguidorInput | FollowUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutSeguidorInput | FollowUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutSeguidoNestedInput = {
    create?: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput> | FollowCreateWithoutSeguidoInput[] | FollowUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutSeguidoInput | FollowCreateOrConnectWithoutSeguidoInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutSeguidoInput | FollowUpsertWithWhereUniqueWithoutSeguidoInput[]
    createMany?: FollowCreateManySeguidoInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutSeguidoInput | FollowUpdateWithWhereUniqueWithoutSeguidoInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutSeguidoInput | FollowUpdateManyWithWhereWithoutSeguidoInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput> | ConsultoriaCreateWithoutClienteInput[] | ConsultoriaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutClienteInput | ConsultoriaCreateOrConnectWithoutClienteInput[]
    upsert?: ConsultoriaUpsertWithWhereUniqueWithoutClienteInput | ConsultoriaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ConsultoriaCreateManyClienteInputEnvelope
    set?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    disconnect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    delete?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    update?: ConsultoriaUpdateWithWhereUniqueWithoutClienteInput | ConsultoriaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ConsultoriaUpdateManyWithWhereWithoutClienteInput | ConsultoriaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
  }

  export type ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput = {
    create?: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput> | ConsultoriaCreateWithoutConsultorInput[] | ConsultoriaUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ConsultoriaCreateOrConnectWithoutConsultorInput | ConsultoriaCreateOrConnectWithoutConsultorInput[]
    upsert?: ConsultoriaUpsertWithWhereUniqueWithoutConsultorInput | ConsultoriaUpsertWithWhereUniqueWithoutConsultorInput[]
    createMany?: ConsultoriaCreateManyConsultorInputEnvelope
    set?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    disconnect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    delete?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    connect?: ConsultoriaWhereUniqueInput | ConsultoriaWhereUniqueInput[]
    update?: ConsultoriaUpdateWithWhereUniqueWithoutConsultorInput | ConsultoriaUpdateWithWhereUniqueWithoutConsultorInput[]
    updateMany?: ConsultoriaUpdateManyWithWhereWithoutConsultorInput | ConsultoriaUpdateManyWithWhereWithoutConsultorInput[]
    deleteMany?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSeguidoresInput = {
    create?: XOR<UserCreateWithoutSeguidoresInput, UserUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeguidoresInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeguindoInput = {
    create?: XOR<UserCreateWithoutSeguindoInput, UserUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeguindoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSeguidoresNestedInput = {
    create?: XOR<UserCreateWithoutSeguidoresInput, UserUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeguidoresInput
    upsert?: UserUpsertWithoutSeguidoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeguidoresInput, UserUpdateWithoutSeguidoresInput>, UserUncheckedUpdateWithoutSeguidoresInput>
  }

  export type UserUpdateOneRequiredWithoutSeguindoNestedInput = {
    create?: XOR<UserCreateWithoutSeguindoInput, UserUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeguindoInput
    upsert?: UserUpsertWithoutSeguindoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeguindoInput, UserUpdateWithoutSeguindoInput>, UserUncheckedUpdateWithoutSeguindoInput>
  }

  export type UserCreateNestedOneWithoutRoteirosInput = {
    create?: XOR<UserCreateWithoutRoteirosInput, UserUncheckedCreateWithoutRoteirosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoteirosInput
    connect?: UserWhereUniqueInput
  }

  export type DiaRoteiroCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput> | DiaRoteiroCreateWithoutRoteiroInput[] | DiaRoteiroUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutRoteiroInput | DiaRoteiroCreateOrConnectWithoutRoteiroInput[]
    createMany?: DiaRoteiroCreateManyRoteiroInputEnvelope
    connect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput> | AvaliacaoCreateWithoutRoteiroInput[] | AvaliacaoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRoteiroInput | AvaliacaoCreateOrConnectWithoutRoteiroInput[]
    createMany?: AvaliacaoCreateManyRoteiroInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput> | ComentarioCreateWithoutRoteiroInput[] | ComentarioUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRoteiroInput | ComentarioCreateOrConnectWithoutRoteiroInput[]
    createMany?: ComentarioCreateManyRoteiroInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type IngressoCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput> | IngressoCreateWithoutRoteiroInput[] | IngressoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutRoteiroInput | IngressoCreateOrConnectWithoutRoteiroInput[]
    createMany?: IngressoCreateManyRoteiroInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput> | DiaRoteiroCreateWithoutRoteiroInput[] | DiaRoteiroUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutRoteiroInput | DiaRoteiroCreateOrConnectWithoutRoteiroInput[]
    createMany?: DiaRoteiroCreateManyRoteiroInputEnvelope
    connect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput> | AvaliacaoCreateWithoutRoteiroInput[] | AvaliacaoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRoteiroInput | AvaliacaoCreateOrConnectWithoutRoteiroInput[]
    createMany?: AvaliacaoCreateManyRoteiroInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput> | ComentarioCreateWithoutRoteiroInput[] | ComentarioUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRoteiroInput | ComentarioCreateOrConnectWithoutRoteiroInput[]
    createMany?: ComentarioCreateManyRoteiroInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutRoteiroInput = {
    create?: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput> | IngressoCreateWithoutRoteiroInput[] | IngressoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutRoteiroInput | IngressoCreateOrConnectWithoutRoteiroInput[]
    createMany?: IngressoCreateManyRoteiroInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumCategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Categoria
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRoteirosNestedInput = {
    create?: XOR<UserCreateWithoutRoteirosInput, UserUncheckedCreateWithoutRoteirosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoteirosInput
    upsert?: UserUpsertWithoutRoteirosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoteirosInput, UserUpdateWithoutRoteirosInput>, UserUncheckedUpdateWithoutRoteirosInput>
  }

  export type DiaRoteiroUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput> | DiaRoteiroCreateWithoutRoteiroInput[] | DiaRoteiroUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutRoteiroInput | DiaRoteiroCreateOrConnectWithoutRoteiroInput[]
    upsert?: DiaRoteiroUpsertWithWhereUniqueWithoutRoteiroInput | DiaRoteiroUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: DiaRoteiroCreateManyRoteiroInputEnvelope
    set?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    disconnect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    delete?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    connect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    update?: DiaRoteiroUpdateWithWhereUniqueWithoutRoteiroInput | DiaRoteiroUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: DiaRoteiroUpdateManyWithWhereWithoutRoteiroInput | DiaRoteiroUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: DiaRoteiroScalarWhereInput | DiaRoteiroScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput> | AvaliacaoCreateWithoutRoteiroInput[] | AvaliacaoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRoteiroInput | AvaliacaoCreateOrConnectWithoutRoteiroInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutRoteiroInput | AvaliacaoUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: AvaliacaoCreateManyRoteiroInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutRoteiroInput | AvaliacaoUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutRoteiroInput | AvaliacaoUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput> | ComentarioCreateWithoutRoteiroInput[] | ComentarioUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRoteiroInput | ComentarioCreateOrConnectWithoutRoteiroInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRoteiroInput | ComentarioUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: ComentarioCreateManyRoteiroInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRoteiroInput | ComentarioUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRoteiroInput | ComentarioUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type IngressoUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput> | IngressoCreateWithoutRoteiroInput[] | IngressoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutRoteiroInput | IngressoCreateOrConnectWithoutRoteiroInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutRoteiroInput | IngressoUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: IngressoCreateManyRoteiroInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutRoteiroInput | IngressoUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutRoteiroInput | IngressoUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput> | DiaRoteiroCreateWithoutRoteiroInput[] | DiaRoteiroUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutRoteiroInput | DiaRoteiroCreateOrConnectWithoutRoteiroInput[]
    upsert?: DiaRoteiroUpsertWithWhereUniqueWithoutRoteiroInput | DiaRoteiroUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: DiaRoteiroCreateManyRoteiroInputEnvelope
    set?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    disconnect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    delete?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    connect?: DiaRoteiroWhereUniqueInput | DiaRoteiroWhereUniqueInput[]
    update?: DiaRoteiroUpdateWithWhereUniqueWithoutRoteiroInput | DiaRoteiroUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: DiaRoteiroUpdateManyWithWhereWithoutRoteiroInput | DiaRoteiroUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: DiaRoteiroScalarWhereInput | DiaRoteiroScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput> | AvaliacaoCreateWithoutRoteiroInput[] | AvaliacaoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutRoteiroInput | AvaliacaoCreateOrConnectWithoutRoteiroInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutRoteiroInput | AvaliacaoUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: AvaliacaoCreateManyRoteiroInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutRoteiroInput | AvaliacaoUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutRoteiroInput | AvaliacaoUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput> | ComentarioCreateWithoutRoteiroInput[] | ComentarioUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRoteiroInput | ComentarioCreateOrConnectWithoutRoteiroInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRoteiroInput | ComentarioUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: ComentarioCreateManyRoteiroInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRoteiroInput | ComentarioUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRoteiroInput | ComentarioUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutRoteiroNestedInput = {
    create?: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput> | IngressoCreateWithoutRoteiroInput[] | IngressoUncheckedCreateWithoutRoteiroInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutRoteiroInput | IngressoCreateOrConnectWithoutRoteiroInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutRoteiroInput | IngressoUpsertWithWhereUniqueWithoutRoteiroInput[]
    createMany?: IngressoCreateManyRoteiroInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutRoteiroInput | IngressoUpdateWithWhereUniqueWithoutRoteiroInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutRoteiroInput | IngressoUpdateManyWithWhereWithoutRoteiroInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type RoteiroCreateNestedOneWithoutDiasInput = {
    create?: XOR<RoteiroCreateWithoutDiasInput, RoteiroUncheckedCreateWithoutDiasInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutDiasInput
    connect?: RoteiroWhereUniqueInput
  }

  export type AtracaoDiaCreateNestedManyWithoutDiaRoteiroInput = {
    create?: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput> | AtracaoDiaCreateWithoutDiaRoteiroInput[] | AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput | AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput[]
    createMany?: AtracaoDiaCreateManyDiaRoteiroInputEnvelope
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
  }

  export type AtracaoDiaUncheckedCreateNestedManyWithoutDiaRoteiroInput = {
    create?: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput> | AtracaoDiaCreateWithoutDiaRoteiroInput[] | AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput | AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput[]
    createMany?: AtracaoDiaCreateManyDiaRoteiroInputEnvelope
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
  }

  export type RoteiroUpdateOneRequiredWithoutDiasNestedInput = {
    create?: XOR<RoteiroCreateWithoutDiasInput, RoteiroUncheckedCreateWithoutDiasInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutDiasInput
    upsert?: RoteiroUpsertWithoutDiasInput
    connect?: RoteiroWhereUniqueInput
    update?: XOR<XOR<RoteiroUpdateToOneWithWhereWithoutDiasInput, RoteiroUpdateWithoutDiasInput>, RoteiroUncheckedUpdateWithoutDiasInput>
  }

  export type AtracaoDiaUpdateManyWithoutDiaRoteiroNestedInput = {
    create?: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput> | AtracaoDiaCreateWithoutDiaRoteiroInput[] | AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput | AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput[]
    upsert?: AtracaoDiaUpsertWithWhereUniqueWithoutDiaRoteiroInput | AtracaoDiaUpsertWithWhereUniqueWithoutDiaRoteiroInput[]
    createMany?: AtracaoDiaCreateManyDiaRoteiroInputEnvelope
    set?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    disconnect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    delete?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    update?: AtracaoDiaUpdateWithWhereUniqueWithoutDiaRoteiroInput | AtracaoDiaUpdateWithWhereUniqueWithoutDiaRoteiroInput[]
    updateMany?: AtracaoDiaUpdateManyWithWhereWithoutDiaRoteiroInput | AtracaoDiaUpdateManyWithWhereWithoutDiaRoteiroInput[]
    deleteMany?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
  }

  export type AtracaoDiaUncheckedUpdateManyWithoutDiaRoteiroNestedInput = {
    create?: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput> | AtracaoDiaCreateWithoutDiaRoteiroInput[] | AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput | AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput[]
    upsert?: AtracaoDiaUpsertWithWhereUniqueWithoutDiaRoteiroInput | AtracaoDiaUpsertWithWhereUniqueWithoutDiaRoteiroInput[]
    createMany?: AtracaoDiaCreateManyDiaRoteiroInputEnvelope
    set?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    disconnect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    delete?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    update?: AtracaoDiaUpdateWithWhereUniqueWithoutDiaRoteiroInput | AtracaoDiaUpdateWithWhereUniqueWithoutDiaRoteiroInput[]
    updateMany?: AtracaoDiaUpdateManyWithWhereWithoutDiaRoteiroInput | AtracaoDiaUpdateManyWithWhereWithoutDiaRoteiroInput[]
    deleteMany?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
  }

  export type AtracaoDiaCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput> | AtracaoDiaCreateWithoutAtracaoInput[] | AtracaoDiaUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutAtracaoInput | AtracaoDiaCreateOrConnectWithoutAtracaoInput[]
    createMany?: AtracaoDiaCreateManyAtracaoInputEnvelope
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput> | AvaliacaoCreateWithoutAtracaoInput[] | AvaliacaoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutAtracaoInput | AvaliacaoCreateOrConnectWithoutAtracaoInput[]
    createMany?: AvaliacaoCreateManyAtracaoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type IngressoCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput> | IngressoCreateWithoutAtracaoInput[] | IngressoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutAtracaoInput | IngressoCreateOrConnectWithoutAtracaoInput[]
    createMany?: IngressoCreateManyAtracaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type AtracaoDiaUncheckedCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput> | AtracaoDiaCreateWithoutAtracaoInput[] | AtracaoDiaUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutAtracaoInput | AtracaoDiaCreateOrConnectWithoutAtracaoInput[]
    createMany?: AtracaoDiaCreateManyAtracaoInputEnvelope
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput> | AvaliacaoCreateWithoutAtracaoInput[] | AvaliacaoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutAtracaoInput | AvaliacaoCreateOrConnectWithoutAtracaoInput[]
    createMany?: AvaliacaoCreateManyAtracaoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutAtracaoInput = {
    create?: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput> | IngressoCreateWithoutAtracaoInput[] | IngressoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutAtracaoInput | IngressoCreateOrConnectWithoutAtracaoInput[]
    createMany?: IngressoCreateManyAtracaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumParceiroFieldUpdateOperationsInput = {
    set?: $Enums.Parceiro
  }

  export type AtracaoDiaUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput> | AtracaoDiaCreateWithoutAtracaoInput[] | AtracaoDiaUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutAtracaoInput | AtracaoDiaCreateOrConnectWithoutAtracaoInput[]
    upsert?: AtracaoDiaUpsertWithWhereUniqueWithoutAtracaoInput | AtracaoDiaUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: AtracaoDiaCreateManyAtracaoInputEnvelope
    set?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    disconnect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    delete?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    update?: AtracaoDiaUpdateWithWhereUniqueWithoutAtracaoInput | AtracaoDiaUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: AtracaoDiaUpdateManyWithWhereWithoutAtracaoInput | AtracaoDiaUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput> | AvaliacaoCreateWithoutAtracaoInput[] | AvaliacaoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutAtracaoInput | AvaliacaoCreateOrConnectWithoutAtracaoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutAtracaoInput | AvaliacaoUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: AvaliacaoCreateManyAtracaoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutAtracaoInput | AvaliacaoUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutAtracaoInput | AvaliacaoUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IngressoUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput> | IngressoCreateWithoutAtracaoInput[] | IngressoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutAtracaoInput | IngressoCreateOrConnectWithoutAtracaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutAtracaoInput | IngressoUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: IngressoCreateManyAtracaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutAtracaoInput | IngressoUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutAtracaoInput | IngressoUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type AtracaoDiaUncheckedUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput> | AtracaoDiaCreateWithoutAtracaoInput[] | AtracaoDiaUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AtracaoDiaCreateOrConnectWithoutAtracaoInput | AtracaoDiaCreateOrConnectWithoutAtracaoInput[]
    upsert?: AtracaoDiaUpsertWithWhereUniqueWithoutAtracaoInput | AtracaoDiaUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: AtracaoDiaCreateManyAtracaoInputEnvelope
    set?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    disconnect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    delete?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    connect?: AtracaoDiaWhereUniqueInput | AtracaoDiaWhereUniqueInput[]
    update?: AtracaoDiaUpdateWithWhereUniqueWithoutAtracaoInput | AtracaoDiaUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: AtracaoDiaUpdateManyWithWhereWithoutAtracaoInput | AtracaoDiaUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput> | AvaliacaoCreateWithoutAtracaoInput[] | AvaliacaoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutAtracaoInput | AvaliacaoCreateOrConnectWithoutAtracaoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutAtracaoInput | AvaliacaoUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: AvaliacaoCreateManyAtracaoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutAtracaoInput | AvaliacaoUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutAtracaoInput | AvaliacaoUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutAtracaoNestedInput = {
    create?: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput> | IngressoCreateWithoutAtracaoInput[] | IngressoUncheckedCreateWithoutAtracaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutAtracaoInput | IngressoCreateOrConnectWithoutAtracaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutAtracaoInput | IngressoUpsertWithWhereUniqueWithoutAtracaoInput[]
    createMany?: IngressoCreateManyAtracaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutAtracaoInput | IngressoUpdateWithWhereUniqueWithoutAtracaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutAtracaoInput | IngressoUpdateManyWithWhereWithoutAtracaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type AtracaoCreateNestedOneWithoutDiasInput = {
    create?: XOR<AtracaoCreateWithoutDiasInput, AtracaoUncheckedCreateWithoutDiasInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutDiasInput
    connect?: AtracaoWhereUniqueInput
  }

  export type DiaRoteiroCreateNestedOneWithoutAtracoesInput = {
    create?: XOR<DiaRoteiroCreateWithoutAtracoesInput, DiaRoteiroUncheckedCreateWithoutAtracoesInput>
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutAtracoesInput
    connect?: DiaRoteiroWhereUniqueInput
  }

  export type AtracaoUpdateOneRequiredWithoutDiasNestedInput = {
    create?: XOR<AtracaoCreateWithoutDiasInput, AtracaoUncheckedCreateWithoutDiasInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutDiasInput
    upsert?: AtracaoUpsertWithoutDiasInput
    connect?: AtracaoWhereUniqueInput
    update?: XOR<XOR<AtracaoUpdateToOneWithWhereWithoutDiasInput, AtracaoUpdateWithoutDiasInput>, AtracaoUncheckedUpdateWithoutDiasInput>
  }

  export type DiaRoteiroUpdateOneRequiredWithoutAtracoesNestedInput = {
    create?: XOR<DiaRoteiroCreateWithoutAtracoesInput, DiaRoteiroUncheckedCreateWithoutAtracoesInput>
    connectOrCreate?: DiaRoteiroCreateOrConnectWithoutAtracoesInput
    upsert?: DiaRoteiroUpsertWithoutAtracoesInput
    connect?: DiaRoteiroWhereUniqueInput
    update?: XOR<XOR<DiaRoteiroUpdateToOneWithWhereWithoutAtracoesInput, DiaRoteiroUpdateWithoutAtracoesInput>, DiaRoteiroUncheckedUpdateWithoutAtracoesInput>
  }

  export type UserCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<UserCreateWithoutAvaliacoesInput, UserUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvaliacoesInput
    connect?: UserWhereUniqueInput
  }

  export type AtracaoCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<AtracaoCreateWithoutAvaliacoesInput, AtracaoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutAvaliacoesInput
    connect?: AtracaoWhereUniqueInput
  }

  export type RoteiroCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<RoteiroCreateWithoutAvaliacoesInput, RoteiroUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutAvaliacoesInput
    connect?: RoteiroWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<UserCreateWithoutAvaliacoesInput, UserUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvaliacoesInput
    upsert?: UserUpsertWithoutAvaliacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvaliacoesInput, UserUpdateWithoutAvaliacoesInput>, UserUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type AtracaoUpdateOneWithoutAvaliacoesNestedInput = {
    create?: XOR<AtracaoCreateWithoutAvaliacoesInput, AtracaoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutAvaliacoesInput
    upsert?: AtracaoUpsertWithoutAvaliacoesInput
    disconnect?: AtracaoWhereInput | boolean
    delete?: AtracaoWhereInput | boolean
    connect?: AtracaoWhereUniqueInput
    update?: XOR<XOR<AtracaoUpdateToOneWithWhereWithoutAvaliacoesInput, AtracaoUpdateWithoutAvaliacoesInput>, AtracaoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type RoteiroUpdateOneWithoutAvaliacoesNestedInput = {
    create?: XOR<RoteiroCreateWithoutAvaliacoesInput, RoteiroUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutAvaliacoesInput
    upsert?: RoteiroUpsertWithoutAvaliacoesInput
    disconnect?: RoteiroWhereInput | boolean
    delete?: RoteiroWhereInput | boolean
    connect?: RoteiroWhereUniqueInput
    update?: XOR<XOR<RoteiroUpdateToOneWithWhereWithoutAvaliacoesInput, RoteiroUpdateWithoutAvaliacoesInput>, RoteiroUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type UserCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    connect?: UserWhereUniqueInput
  }

  export type RoteiroCreateNestedOneWithoutComentariosInput = {
    create?: XOR<RoteiroCreateWithoutComentariosInput, RoteiroUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutComentariosInput
    connect?: RoteiroWhereUniqueInput
  }

  export type ComentarioCreateNestedOneWithoutRespostasInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    connect?: ComentarioWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutParentInput = {
    create?: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput> | ComentarioCreateWithoutParentInput[] | ComentarioUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutParentInput | ComentarioCreateOrConnectWithoutParentInput[]
    createMany?: ComentarioCreateManyParentInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput> | ComentarioCreateWithoutParentInput[] | ComentarioUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutParentInput | ComentarioCreateOrConnectWithoutParentInput[]
    createMany?: ComentarioCreateManyParentInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    upsert?: UserUpsertWithoutComentariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComentariosInput, UserUpdateWithoutComentariosInput>, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type RoteiroUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<RoteiroCreateWithoutComentariosInput, RoteiroUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutComentariosInput
    upsert?: RoteiroUpsertWithoutComentariosInput
    connect?: RoteiroWhereUniqueInput
    update?: XOR<XOR<RoteiroUpdateToOneWithWhereWithoutComentariosInput, RoteiroUpdateWithoutComentariosInput>, RoteiroUncheckedUpdateWithoutComentariosInput>
  }

  export type ComentarioUpdateOneWithoutRespostasNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    upsert?: ComentarioUpsertWithoutRespostasInput
    disconnect?: ComentarioWhereInput | boolean
    delete?: ComentarioWhereInput | boolean
    connect?: ComentarioWhereUniqueInput
    update?: XOR<XOR<ComentarioUpdateToOneWithWhereWithoutRespostasInput, ComentarioUpdateWithoutRespostasInput>, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUpdateManyWithoutParentNestedInput = {
    create?: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput> | ComentarioCreateWithoutParentInput[] | ComentarioUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutParentInput | ComentarioCreateOrConnectWithoutParentInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutParentInput | ComentarioUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ComentarioCreateManyParentInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutParentInput | ComentarioUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutParentInput | ComentarioUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput> | ComentarioCreateWithoutParentInput[] | ComentarioUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutParentInput | ComentarioCreateOrConnectWithoutParentInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutParentInput | ComentarioUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ComentarioCreateManyParentInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutParentInput | ComentarioUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutParentInput | ComentarioUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIngressosInput = {
    create?: XOR<UserCreateWithoutIngressosInput, UserUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngressosInput
    connect?: UserWhereUniqueInput
  }

  export type AtracaoCreateNestedOneWithoutIngressosInput = {
    create?: XOR<AtracaoCreateWithoutIngressosInput, AtracaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutIngressosInput
    connect?: AtracaoWhereUniqueInput
  }

  export type RoteiroCreateNestedOneWithoutIngressosInput = {
    create?: XOR<RoteiroCreateWithoutIngressosInput, RoteiroUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutIngressosInput
    connect?: RoteiroWhereUniqueInput
  }

  export type EnumStatusIngressoFieldUpdateOperationsInput = {
    set?: $Enums.StatusIngresso
  }

  export type UserUpdateOneRequiredWithoutIngressosNestedInput = {
    create?: XOR<UserCreateWithoutIngressosInput, UserUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngressosInput
    upsert?: UserUpsertWithoutIngressosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIngressosInput, UserUpdateWithoutIngressosInput>, UserUncheckedUpdateWithoutIngressosInput>
  }

  export type AtracaoUpdateOneRequiredWithoutIngressosNestedInput = {
    create?: XOR<AtracaoCreateWithoutIngressosInput, AtracaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: AtracaoCreateOrConnectWithoutIngressosInput
    upsert?: AtracaoUpsertWithoutIngressosInput
    connect?: AtracaoWhereUniqueInput
    update?: XOR<XOR<AtracaoUpdateToOneWithWhereWithoutIngressosInput, AtracaoUpdateWithoutIngressosInput>, AtracaoUncheckedUpdateWithoutIngressosInput>
  }

  export type RoteiroUpdateOneWithoutIngressosNestedInput = {
    create?: XOR<RoteiroCreateWithoutIngressosInput, RoteiroUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: RoteiroCreateOrConnectWithoutIngressosInput
    upsert?: RoteiroUpsertWithoutIngressosInput
    disconnect?: RoteiroWhereInput | boolean
    delete?: RoteiroWhereInput | boolean
    connect?: RoteiroWhereUniqueInput
    update?: XOR<XOR<RoteiroUpdateToOneWithWhereWithoutIngressosInput, RoteiroUpdateWithoutIngressosInput>, RoteiroUncheckedUpdateWithoutIngressosInput>
  }

  export type UserCreateNestedOneWithoutConsultoriasSolicitadasInput = {
    create?: XOR<UserCreateWithoutConsultoriasSolicitadasInput, UserUncheckedCreateWithoutConsultoriasSolicitadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultoriasSolicitadasInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConsultoriasAtendidasInput = {
    create?: XOR<UserCreateWithoutConsultoriasAtendidasInput, UserUncheckedCreateWithoutConsultoriasAtendidasInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultoriasAtendidasInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConsultoriasSolicitadasNestedInput = {
    create?: XOR<UserCreateWithoutConsultoriasSolicitadasInput, UserUncheckedCreateWithoutConsultoriasSolicitadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultoriasSolicitadasInput
    upsert?: UserUpsertWithoutConsultoriasSolicitadasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultoriasSolicitadasInput, UserUpdateWithoutConsultoriasSolicitadasInput>, UserUncheckedUpdateWithoutConsultoriasSolicitadasInput>
  }

  export type UserUpdateOneWithoutConsultoriasAtendidasNestedInput = {
    create?: XOR<UserCreateWithoutConsultoriasAtendidasInput, UserUncheckedCreateWithoutConsultoriasAtendidasInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultoriasAtendidasInput
    upsert?: UserUpsertWithoutConsultoriasAtendidasInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultoriasAtendidasInput, UserUpdateWithoutConsultoriasAtendidasInput>, UserUncheckedUpdateWithoutConsultoriasAtendidasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoPlanoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlano | EnumTipoPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlanoFilter<$PrismaModel> | $Enums.TipoPlano
  }

  export type NestedEnumRoleUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUsuario | EnumRoleUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUsuarioFilter<$PrismaModel> | $Enums.RoleUsuario
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoPlanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPlano | EnumTipoPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPlano[] | ListEnumTipoPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPlanoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPlano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPlanoFilter<$PrismaModel>
    _max?: NestedEnumTipoPlanoFilter<$PrismaModel>
  }

  export type NestedEnumRoleUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUsuario | EnumRoleUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUsuario[] | ListEnumRoleUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RoleUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRoleUsuarioFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumParceiroFilter<$PrismaModel = never> = {
    equals?: $Enums.Parceiro | EnumParceiroFieldRefInput<$PrismaModel>
    in?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    not?: NestedEnumParceiroFilter<$PrismaModel> | $Enums.Parceiro
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumParceiroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Parceiro | EnumParceiroFieldRefInput<$PrismaModel>
    in?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parceiro[] | ListEnumParceiroFieldRefInput<$PrismaModel>
    not?: NestedEnumParceiroWithAggregatesFilter<$PrismaModel> | $Enums.Parceiro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParceiroFilter<$PrismaModel>
    _max?: NestedEnumParceiroFilter<$PrismaModel>
  }

  export type NestedEnumStatusIngressoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIngresso | EnumStatusIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIngressoFilter<$PrismaModel> | $Enums.StatusIngresso
  }

  export type NestedEnumStatusIngressoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIngresso | EnumStatusIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusIngresso[] | ListEnumStatusIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusIngressoWithAggregatesFilter<$PrismaModel> | $Enums.StatusIngresso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusIngressoFilter<$PrismaModel>
    _max?: NestedEnumStatusIngressoFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoteiroCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroCreateOrConnectWithoutUsuarioInput = {
    where: RoteiroWhereUniqueInput
    create: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput>
  }

  export type RoteiroCreateManyUsuarioInputEnvelope = {
    data: RoteiroCreateManyUsuarioInput | RoteiroCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutUsuarioInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    atracao?: AtracaoCreateNestedOneWithoutAvaliacoesInput
    roteiro?: RoteiroCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    atracaoId?: string | null
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoCreateManyUsuarioInputEnvelope = {
    data: AvaliacaoCreateManyUsuarioInput | AvaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type IngressoCreateWithoutUsuarioInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    atracao: AtracaoCreateNestedOneWithoutIngressosInput
    roteiro?: RoteiroCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    atracaoId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateOrConnectWithoutUsuarioInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput>
  }

  export type IngressoCreateManyUsuarioInputEnvelope = {
    data: IngressoCreateManyUsuarioInput | IngressoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutUsuarioInput = {
    id?: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    roteiro: RoteiroCreateNestedOneWithoutComentariosInput
    parent?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutParentInput
  }

  export type ComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    conteudo: string
    roteiroId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutParentInput
  }

  export type ComentarioCreateOrConnectWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioCreateManyUsuarioInputEnvelope = {
    data: ComentarioCreateManyUsuarioInput | ComentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutSeguidorInput = {
    id?: string
    criadoEm?: Date | string
    seguido: UserCreateNestedOneWithoutSeguindoInput
  }

  export type FollowUncheckedCreateWithoutSeguidorInput = {
    id?: string
    seguidoId: string
    criadoEm?: Date | string
  }

  export type FollowCreateOrConnectWithoutSeguidorInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput>
  }

  export type FollowCreateManySeguidorInputEnvelope = {
    data: FollowCreateManySeguidorInput | FollowCreateManySeguidorInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutSeguidoInput = {
    id?: string
    criadoEm?: Date | string
    seguidor: UserCreateNestedOneWithoutSeguidoresInput
  }

  export type FollowUncheckedCreateWithoutSeguidoInput = {
    id?: string
    seguidorId: string
    criadoEm?: Date | string
  }

  export type FollowCreateOrConnectWithoutSeguidoInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput>
  }

  export type FollowCreateManySeguidoInputEnvelope = {
    data: FollowCreateManySeguidoInput | FollowCreateManySeguidoInput[]
    skipDuplicates?: boolean
  }

  export type ConsultoriaCreateWithoutClienteInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    consultor?: UserCreateNestedOneWithoutConsultoriasAtendidasInput
  }

  export type ConsultoriaUncheckedCreateWithoutClienteInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    consultorId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultoriaCreateOrConnectWithoutClienteInput = {
    where: ConsultoriaWhereUniqueInput
    create: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput>
  }

  export type ConsultoriaCreateManyClienteInputEnvelope = {
    data: ConsultoriaCreateManyClienteInput | ConsultoriaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ConsultoriaCreateWithoutConsultorInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    cliente: UserCreateNestedOneWithoutConsultoriasSolicitadasInput
  }

  export type ConsultoriaUncheckedCreateWithoutConsultorInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    clienteId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultoriaCreateOrConnectWithoutConsultorInput = {
    where: ConsultoriaWhereUniqueInput
    create: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput>
  }

  export type ConsultoriaCreateManyConsultorInputEnvelope = {
    data: ConsultoriaCreateManyConsultorInput | ConsultoriaCreateManyConsultorInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type RoteiroUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RoteiroWhereUniqueInput
    update: XOR<RoteiroUpdateWithoutUsuarioInput, RoteiroUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RoteiroCreateWithoutUsuarioInput, RoteiroUncheckedCreateWithoutUsuarioInput>
  }

  export type RoteiroUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RoteiroWhereUniqueInput
    data: XOR<RoteiroUpdateWithoutUsuarioInput, RoteiroUncheckedUpdateWithoutUsuarioInput>
  }

  export type RoteiroUpdateManyWithWhereWithoutUsuarioInput = {
    where: RoteiroScalarWhereInput
    data: XOR<RoteiroUpdateManyMutationInput, RoteiroUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RoteiroScalarWhereInput = {
    AND?: RoteiroScalarWhereInput | RoteiroScalarWhereInput[]
    OR?: RoteiroScalarWhereInput[]
    NOT?: RoteiroScalarWhereInput | RoteiroScalarWhereInput[]
    id?: StringFilter<"Roteiro"> | string
    titulo?: StringFilter<"Roteiro"> | string
    descricao?: StringNullableFilter<"Roteiro"> | string | null
    destino?: StringFilter<"Roteiro"> | string
    dataInicio?: DateTimeFilter<"Roteiro"> | Date | string
    dataFim?: DateTimeFilter<"Roteiro"> | Date | string
    publico?: BoolFilter<"Roteiro"> | boolean
    categoria?: EnumCategoriaFilter<"Roteiro"> | $Enums.Categoria
    orcamento?: DecimalNullableFilter<"Roteiro"> | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFilter<"Roteiro"> | number
    usuarioId?: StringFilter<"Roteiro"> | string
    criadoEm?: DateTimeFilter<"Roteiro"> | Date | string
    atualizadoEm?: DateTimeFilter<"Roteiro"> | Date | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataVisita?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    util?: IntFilter<"Avaliacao"> | number
    naoUtil?: IntFilter<"Avaliacao"> | number
    usuarioId?: StringFilter<"Avaliacao"> | string
    atracaoId?: StringNullableFilter<"Avaliacao"> | string | null
    roteiroId?: StringNullableFilter<"Avaliacao"> | string | null
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type IngressoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutUsuarioInput, IngressoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<IngressoCreateWithoutUsuarioInput, IngressoUncheckedCreateWithoutUsuarioInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutUsuarioInput, IngressoUncheckedUpdateWithoutUsuarioInput>
  }

  export type IngressoUpdateManyWithWhereWithoutUsuarioInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type IngressoScalarWhereInput = {
    AND?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    OR?: IngressoScalarWhereInput[]
    NOT?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    id?: StringFilter<"Ingresso"> | string
    codigo?: StringFilter<"Ingresso"> | string
    qrCode?: StringNullableFilter<"Ingresso"> | string | null
    dataValidade?: DateTimeFilter<"Ingresso"> | Date | string
    preco?: DecimalNullableFilter<"Ingresso"> | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFilter<"Ingresso"> | string
    status?: EnumStatusIngressoFilter<"Ingresso"> | $Enums.StatusIngresso
    observacoes?: StringNullableFilter<"Ingresso"> | string | null
    usuarioId?: StringFilter<"Ingresso"> | string
    atracaoId?: StringFilter<"Ingresso"> | string
    roteiroId?: StringNullableFilter<"Ingresso"> | string | null
    criadoEm?: DateTimeFilter<"Ingresso"> | Date | string
    atualizadoEm?: DateTimeFilter<"Ingresso"> | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: StringFilter<"Comentario"> | string
    conteudo?: StringFilter<"Comentario"> | string
    usuarioId?: StringFilter<"Comentario"> | string
    roteiroId?: StringFilter<"Comentario"> | string
    parentId?: StringNullableFilter<"Comentario"> | string | null
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutSeguidorInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutSeguidorInput, FollowUncheckedUpdateWithoutSeguidorInput>
    create: XOR<FollowCreateWithoutSeguidorInput, FollowUncheckedCreateWithoutSeguidorInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutSeguidorInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutSeguidorInput, FollowUncheckedUpdateWithoutSeguidorInput>
  }

  export type FollowUpdateManyWithWhereWithoutSeguidorInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutSeguidorInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: StringFilter<"Follow"> | string
    seguidorId?: StringFilter<"Follow"> | string
    seguidoId?: StringFilter<"Follow"> | string
    criadoEm?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutSeguidoInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutSeguidoInput, FollowUncheckedUpdateWithoutSeguidoInput>
    create: XOR<FollowCreateWithoutSeguidoInput, FollowUncheckedCreateWithoutSeguidoInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutSeguidoInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutSeguidoInput, FollowUncheckedUpdateWithoutSeguidoInput>
  }

  export type FollowUpdateManyWithWhereWithoutSeguidoInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutSeguidoInput>
  }

  export type ConsultoriaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ConsultoriaWhereUniqueInput
    update: XOR<ConsultoriaUpdateWithoutClienteInput, ConsultoriaUncheckedUpdateWithoutClienteInput>
    create: XOR<ConsultoriaCreateWithoutClienteInput, ConsultoriaUncheckedCreateWithoutClienteInput>
  }

  export type ConsultoriaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ConsultoriaWhereUniqueInput
    data: XOR<ConsultoriaUpdateWithoutClienteInput, ConsultoriaUncheckedUpdateWithoutClienteInput>
  }

  export type ConsultoriaUpdateManyWithWhereWithoutClienteInput = {
    where: ConsultoriaScalarWhereInput
    data: XOR<ConsultoriaUpdateManyMutationInput, ConsultoriaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ConsultoriaScalarWhereInput = {
    AND?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
    OR?: ConsultoriaScalarWhereInput[]
    NOT?: ConsultoriaScalarWhereInput | ConsultoriaScalarWhereInput[]
    id?: StringFilter<"Consultoria"> | string
    destino?: StringFilter<"Consultoria"> | string
    dataInicio?: DateTimeFilter<"Consultoria"> | Date | string
    dataFim?: DateTimeFilter<"Consultoria"> | Date | string
    orcamento?: DecimalNullableFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string | null
    preferencias?: StringNullableFilter<"Consultoria"> | string | null
    status?: StringFilter<"Consultoria"> | string
    preco?: DecimalFilter<"Consultoria"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"Consultoria"> | string
    consultorId?: StringNullableFilter<"Consultoria"> | string | null
    criadoEm?: DateTimeFilter<"Consultoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consultoria"> | Date | string
  }

  export type ConsultoriaUpsertWithWhereUniqueWithoutConsultorInput = {
    where: ConsultoriaWhereUniqueInput
    update: XOR<ConsultoriaUpdateWithoutConsultorInput, ConsultoriaUncheckedUpdateWithoutConsultorInput>
    create: XOR<ConsultoriaCreateWithoutConsultorInput, ConsultoriaUncheckedCreateWithoutConsultorInput>
  }

  export type ConsultoriaUpdateWithWhereUniqueWithoutConsultorInput = {
    where: ConsultoriaWhereUniqueInput
    data: XOR<ConsultoriaUpdateWithoutConsultorInput, ConsultoriaUncheckedUpdateWithoutConsultorInput>
  }

  export type ConsultoriaUpdateManyWithWhereWithoutConsultorInput = {
    where: ConsultoriaScalarWhereInput
    data: XOR<ConsultoriaUpdateManyMutationInput, ConsultoriaUncheckedUpdateManyWithoutConsultorInput>
  }

  export type UserCreateWithoutSeguidoresInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutSeguidoresInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutSeguidoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeguidoresInput, UserUncheckedCreateWithoutSeguidoresInput>
  }

  export type UserCreateWithoutSeguindoInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutSeguindoInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutSeguindoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeguindoInput, UserUncheckedCreateWithoutSeguindoInput>
  }

  export type UserUpsertWithoutSeguidoresInput = {
    update: XOR<UserUpdateWithoutSeguidoresInput, UserUncheckedUpdateWithoutSeguidoresInput>
    create: XOR<UserCreateWithoutSeguidoresInput, UserUncheckedCreateWithoutSeguidoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeguidoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeguidoresInput, UserUncheckedUpdateWithoutSeguidoresInput>
  }

  export type UserUpdateWithoutSeguidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutSeguidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type UserUpsertWithoutSeguindoInput = {
    update: XOR<UserUpdateWithoutSeguindoInput, UserUncheckedUpdateWithoutSeguindoInput>
    create: XOR<UserCreateWithoutSeguindoInput, UserUncheckedCreateWithoutSeguindoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeguindoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeguindoInput, UserUncheckedUpdateWithoutSeguindoInput>
  }

  export type UserUpdateWithoutSeguindoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutSeguindoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type UserCreateWithoutRoteirosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutRoteirosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutRoteirosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoteirosInput, UserUncheckedCreateWithoutRoteirosInput>
  }

  export type DiaRoteiroCreateWithoutRoteiroInput = {
    id?: string
    data: Date | string
    ordem: number
    criadoEm?: Date | string
    atracoes?: AtracaoDiaCreateNestedManyWithoutDiaRoteiroInput
  }

  export type DiaRoteiroUncheckedCreateWithoutRoteiroInput = {
    id?: string
    data: Date | string
    ordem: number
    criadoEm?: Date | string
    atracoes?: AtracaoDiaUncheckedCreateNestedManyWithoutDiaRoteiroInput
  }

  export type DiaRoteiroCreateOrConnectWithoutRoteiroInput = {
    where: DiaRoteiroWhereUniqueInput
    create: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput>
  }

  export type DiaRoteiroCreateManyRoteiroInputEnvelope = {
    data: DiaRoteiroCreateManyRoteiroInput | DiaRoteiroCreateManyRoteiroInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutRoteiroInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutAvaliacoesInput
    atracao?: AtracaoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutRoteiroInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    atracaoId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutRoteiroInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput>
  }

  export type AvaliacaoCreateManyRoteiroInputEnvelope = {
    data: AvaliacaoCreateManyRoteiroInput | AvaliacaoCreateManyRoteiroInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutRoteiroInput = {
    id?: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutComentariosInput
    parent?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutParentInput
  }

  export type ComentarioUncheckedCreateWithoutRoteiroInput = {
    id?: string
    conteudo: string
    usuarioId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutParentInput
  }

  export type ComentarioCreateOrConnectWithoutRoteiroInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput>
  }

  export type ComentarioCreateManyRoteiroInputEnvelope = {
    data: ComentarioCreateManyRoteiroInput | ComentarioCreateManyRoteiroInput[]
    skipDuplicates?: boolean
  }

  export type IngressoCreateWithoutRoteiroInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutIngressosInput
    atracao: AtracaoCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutRoteiroInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    atracaoId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateOrConnectWithoutRoteiroInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput>
  }

  export type IngressoCreateManyRoteiroInputEnvelope = {
    data: IngressoCreateManyRoteiroInput | IngressoCreateManyRoteiroInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoteirosInput = {
    update: XOR<UserUpdateWithoutRoteirosInput, UserUncheckedUpdateWithoutRoteirosInput>
    create: XOR<UserCreateWithoutRoteirosInput, UserUncheckedCreateWithoutRoteirosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoteirosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoteirosInput, UserUncheckedUpdateWithoutRoteirosInput>
  }

  export type UserUpdateWithoutRoteirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutRoteirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type DiaRoteiroUpsertWithWhereUniqueWithoutRoteiroInput = {
    where: DiaRoteiroWhereUniqueInput
    update: XOR<DiaRoteiroUpdateWithoutRoteiroInput, DiaRoteiroUncheckedUpdateWithoutRoteiroInput>
    create: XOR<DiaRoteiroCreateWithoutRoteiroInput, DiaRoteiroUncheckedCreateWithoutRoteiroInput>
  }

  export type DiaRoteiroUpdateWithWhereUniqueWithoutRoteiroInput = {
    where: DiaRoteiroWhereUniqueInput
    data: XOR<DiaRoteiroUpdateWithoutRoteiroInput, DiaRoteiroUncheckedUpdateWithoutRoteiroInput>
  }

  export type DiaRoteiroUpdateManyWithWhereWithoutRoteiroInput = {
    where: DiaRoteiroScalarWhereInput
    data: XOR<DiaRoteiroUpdateManyMutationInput, DiaRoteiroUncheckedUpdateManyWithoutRoteiroInput>
  }

  export type DiaRoteiroScalarWhereInput = {
    AND?: DiaRoteiroScalarWhereInput | DiaRoteiroScalarWhereInput[]
    OR?: DiaRoteiroScalarWhereInput[]
    NOT?: DiaRoteiroScalarWhereInput | DiaRoteiroScalarWhereInput[]
    id?: StringFilter<"DiaRoteiro"> | string
    data?: DateTimeFilter<"DiaRoteiro"> | Date | string
    ordem?: IntFilter<"DiaRoteiro"> | number
    roteiroId?: StringFilter<"DiaRoteiro"> | string
    criadoEm?: DateTimeFilter<"DiaRoteiro"> | Date | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutRoteiroInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutRoteiroInput, AvaliacaoUncheckedUpdateWithoutRoteiroInput>
    create: XOR<AvaliacaoCreateWithoutRoteiroInput, AvaliacaoUncheckedCreateWithoutRoteiroInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutRoteiroInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutRoteiroInput, AvaliacaoUncheckedUpdateWithoutRoteiroInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutRoteiroInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutRoteiroInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutRoteiroInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutRoteiroInput, ComentarioUncheckedUpdateWithoutRoteiroInput>
    create: XOR<ComentarioCreateWithoutRoteiroInput, ComentarioUncheckedCreateWithoutRoteiroInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutRoteiroInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutRoteiroInput, ComentarioUncheckedUpdateWithoutRoteiroInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutRoteiroInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutRoteiroInput>
  }

  export type IngressoUpsertWithWhereUniqueWithoutRoteiroInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutRoteiroInput, IngressoUncheckedUpdateWithoutRoteiroInput>
    create: XOR<IngressoCreateWithoutRoteiroInput, IngressoUncheckedCreateWithoutRoteiroInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutRoteiroInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutRoteiroInput, IngressoUncheckedUpdateWithoutRoteiroInput>
  }

  export type IngressoUpdateManyWithWhereWithoutRoteiroInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutRoteiroInput>
  }

  export type RoteiroCreateWithoutDiasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutRoteirosInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateWithoutDiasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroCreateOrConnectWithoutDiasInput = {
    where: RoteiroWhereUniqueInput
    create: XOR<RoteiroCreateWithoutDiasInput, RoteiroUncheckedCreateWithoutDiasInput>
  }

  export type AtracaoDiaCreateWithoutDiaRoteiroInput = {
    id?: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
    atracao: AtracaoCreateNestedOneWithoutDiasInput
  }

  export type AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput = {
    id?: string
    atracaoId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AtracaoDiaCreateOrConnectWithoutDiaRoteiroInput = {
    where: AtracaoDiaWhereUniqueInput
    create: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput>
  }

  export type AtracaoDiaCreateManyDiaRoteiroInputEnvelope = {
    data: AtracaoDiaCreateManyDiaRoteiroInput | AtracaoDiaCreateManyDiaRoteiroInput[]
    skipDuplicates?: boolean
  }

  export type RoteiroUpsertWithoutDiasInput = {
    update: XOR<RoteiroUpdateWithoutDiasInput, RoteiroUncheckedUpdateWithoutDiasInput>
    create: XOR<RoteiroCreateWithoutDiasInput, RoteiroUncheckedCreateWithoutDiasInput>
    where?: RoteiroWhereInput
  }

  export type RoteiroUpdateToOneWithWhereWithoutDiasInput = {
    where?: RoteiroWhereInput
    data: XOR<RoteiroUpdateWithoutDiasInput, RoteiroUncheckedUpdateWithoutDiasInput>
  }

  export type RoteiroUpdateWithoutDiasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutRoteirosNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateWithoutDiasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type AtracaoDiaUpsertWithWhereUniqueWithoutDiaRoteiroInput = {
    where: AtracaoDiaWhereUniqueInput
    update: XOR<AtracaoDiaUpdateWithoutDiaRoteiroInput, AtracaoDiaUncheckedUpdateWithoutDiaRoteiroInput>
    create: XOR<AtracaoDiaCreateWithoutDiaRoteiroInput, AtracaoDiaUncheckedCreateWithoutDiaRoteiroInput>
  }

  export type AtracaoDiaUpdateWithWhereUniqueWithoutDiaRoteiroInput = {
    where: AtracaoDiaWhereUniqueInput
    data: XOR<AtracaoDiaUpdateWithoutDiaRoteiroInput, AtracaoDiaUncheckedUpdateWithoutDiaRoteiroInput>
  }

  export type AtracaoDiaUpdateManyWithWhereWithoutDiaRoteiroInput = {
    where: AtracaoDiaScalarWhereInput
    data: XOR<AtracaoDiaUpdateManyMutationInput, AtracaoDiaUncheckedUpdateManyWithoutDiaRoteiroInput>
  }

  export type AtracaoDiaScalarWhereInput = {
    AND?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
    OR?: AtracaoDiaScalarWhereInput[]
    NOT?: AtracaoDiaScalarWhereInput | AtracaoDiaScalarWhereInput[]
    id?: StringFilter<"AtracaoDia"> | string
    atracaoId?: StringFilter<"AtracaoDia"> | string
    diaRoteiroId?: StringFilter<"AtracaoDia"> | string
    horario?: StringNullableFilter<"AtracaoDia"> | string | null
    tempoEstimado?: IntNullableFilter<"AtracaoDia"> | number | null
    ordem?: IntFilter<"AtracaoDia"> | number
    observacoes?: StringNullableFilter<"AtracaoDia"> | string | null
    criadoEm?: DateTimeFilter<"AtracaoDia"> | Date | string
  }

  export type AtracaoDiaCreateWithoutAtracaoInput = {
    id?: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
    diaRoteiro: DiaRoteiroCreateNestedOneWithoutAtracoesInput
  }

  export type AtracaoDiaUncheckedCreateWithoutAtracaoInput = {
    id?: string
    diaRoteiroId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AtracaoDiaCreateOrConnectWithoutAtracaoInput = {
    where: AtracaoDiaWhereUniqueInput
    create: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput>
  }

  export type AtracaoDiaCreateManyAtracaoInputEnvelope = {
    data: AtracaoDiaCreateManyAtracaoInput | AtracaoDiaCreateManyAtracaoInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutAtracaoInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutAvaliacoesInput
    roteiro?: RoteiroCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutAtracaoInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutAtracaoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput>
  }

  export type AvaliacaoCreateManyAtracaoInputEnvelope = {
    data: AvaliacaoCreateManyAtracaoInput | AvaliacaoCreateManyAtracaoInput[]
    skipDuplicates?: boolean
  }

  export type IngressoCreateWithoutAtracaoInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutIngressosInput
    roteiro?: RoteiroCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutAtracaoInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateOrConnectWithoutAtracaoInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput>
  }

  export type IngressoCreateManyAtracaoInputEnvelope = {
    data: IngressoCreateManyAtracaoInput | IngressoCreateManyAtracaoInput[]
    skipDuplicates?: boolean
  }

  export type AtracaoDiaUpsertWithWhereUniqueWithoutAtracaoInput = {
    where: AtracaoDiaWhereUniqueInput
    update: XOR<AtracaoDiaUpdateWithoutAtracaoInput, AtracaoDiaUncheckedUpdateWithoutAtracaoInput>
    create: XOR<AtracaoDiaCreateWithoutAtracaoInput, AtracaoDiaUncheckedCreateWithoutAtracaoInput>
  }

  export type AtracaoDiaUpdateWithWhereUniqueWithoutAtracaoInput = {
    where: AtracaoDiaWhereUniqueInput
    data: XOR<AtracaoDiaUpdateWithoutAtracaoInput, AtracaoDiaUncheckedUpdateWithoutAtracaoInput>
  }

  export type AtracaoDiaUpdateManyWithWhereWithoutAtracaoInput = {
    where: AtracaoDiaScalarWhereInput
    data: XOR<AtracaoDiaUpdateManyMutationInput, AtracaoDiaUncheckedUpdateManyWithoutAtracaoInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutAtracaoInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutAtracaoInput, AvaliacaoUncheckedUpdateWithoutAtracaoInput>
    create: XOR<AvaliacaoCreateWithoutAtracaoInput, AvaliacaoUncheckedCreateWithoutAtracaoInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutAtracaoInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutAtracaoInput, AvaliacaoUncheckedUpdateWithoutAtracaoInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutAtracaoInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutAtracaoInput>
  }

  export type IngressoUpsertWithWhereUniqueWithoutAtracaoInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutAtracaoInput, IngressoUncheckedUpdateWithoutAtracaoInput>
    create: XOR<IngressoCreateWithoutAtracaoInput, IngressoUncheckedCreateWithoutAtracaoInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutAtracaoInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutAtracaoInput, IngressoUncheckedUpdateWithoutAtracaoInput>
  }

  export type IngressoUpdateManyWithWhereWithoutAtracaoInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutAtracaoInput>
  }

  export type AtracaoCreateWithoutDiasInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    avaliacoes?: AvaliacaoCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoUncheckedCreateWithoutDiasInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoCreateOrConnectWithoutDiasInput = {
    where: AtracaoWhereUniqueInput
    create: XOR<AtracaoCreateWithoutDiasInput, AtracaoUncheckedCreateWithoutDiasInput>
  }

  export type DiaRoteiroCreateWithoutAtracoesInput = {
    id?: string
    data: Date | string
    ordem: number
    criadoEm?: Date | string
    roteiro: RoteiroCreateNestedOneWithoutDiasInput
  }

  export type DiaRoteiroUncheckedCreateWithoutAtracoesInput = {
    id?: string
    data: Date | string
    ordem: number
    roteiroId: string
    criadoEm?: Date | string
  }

  export type DiaRoteiroCreateOrConnectWithoutAtracoesInput = {
    where: DiaRoteiroWhereUniqueInput
    create: XOR<DiaRoteiroCreateWithoutAtracoesInput, DiaRoteiroUncheckedCreateWithoutAtracoesInput>
  }

  export type AtracaoUpsertWithoutDiasInput = {
    update: XOR<AtracaoUpdateWithoutDiasInput, AtracaoUncheckedUpdateWithoutDiasInput>
    create: XOR<AtracaoCreateWithoutDiasInput, AtracaoUncheckedCreateWithoutDiasInput>
    where?: AtracaoWhereInput
  }

  export type AtracaoUpdateToOneWithWhereWithoutDiasInput = {
    where?: AtracaoWhereInput
    data: XOR<AtracaoUpdateWithoutDiasInput, AtracaoUncheckedUpdateWithoutDiasInput>
  }

  export type AtracaoUpdateWithoutDiasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUpdateManyWithoutAtracaoNestedInput
  }

  export type AtracaoUncheckedUpdateWithoutDiasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutAtracaoNestedInput
  }

  export type DiaRoteiroUpsertWithoutAtracoesInput = {
    update: XOR<DiaRoteiroUpdateWithoutAtracoesInput, DiaRoteiroUncheckedUpdateWithoutAtracoesInput>
    create: XOR<DiaRoteiroCreateWithoutAtracoesInput, DiaRoteiroUncheckedCreateWithoutAtracoesInput>
    where?: DiaRoteiroWhereInput
  }

  export type DiaRoteiroUpdateToOneWithWhereWithoutAtracoesInput = {
    where?: DiaRoteiroWhereInput
    data: XOR<DiaRoteiroUpdateWithoutAtracoesInput, DiaRoteiroUncheckedUpdateWithoutAtracoesInput>
  }

  export type DiaRoteiroUpdateWithoutAtracoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    roteiro?: RoteiroUpdateOneRequiredWithoutDiasNestedInput
  }

  export type DiaRoteiroUncheckedUpdateWithoutAtracoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    roteiroId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAvaliacoesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutAvaliacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvaliacoesInput, UserUncheckedCreateWithoutAvaliacoesInput>
  }

  export type AtracaoCreateWithoutAvaliacoesInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaUncheckedCreateNestedManyWithoutAtracaoInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoCreateOrConnectWithoutAvaliacoesInput = {
    where: AtracaoWhereUniqueInput
    create: XOR<AtracaoCreateWithoutAvaliacoesInput, AtracaoUncheckedCreateWithoutAvaliacoesInput>
  }

  export type RoteiroCreateWithoutAvaliacoesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutRoteirosInput
    dias?: DiaRoteiroCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroCreateOrConnectWithoutAvaliacoesInput = {
    where: RoteiroWhereUniqueInput
    create: XOR<RoteiroCreateWithoutAvaliacoesInput, RoteiroUncheckedCreateWithoutAvaliacoesInput>
  }

  export type UserUpsertWithoutAvaliacoesInput = {
    update: XOR<UserUpdateWithoutAvaliacoesInput, UserUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<UserCreateWithoutAvaliacoesInput, UserUncheckedCreateWithoutAvaliacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvaliacoesInput, UserUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type UserUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type AtracaoUpsertWithoutAvaliacoesInput = {
    update: XOR<AtracaoUpdateWithoutAvaliacoesInput, AtracaoUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<AtracaoCreateWithoutAvaliacoesInput, AtracaoUncheckedCreateWithoutAvaliacoesInput>
    where?: AtracaoWhereInput
  }

  export type AtracaoUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: AtracaoWhereInput
    data: XOR<AtracaoUpdateWithoutAvaliacoesInput, AtracaoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type AtracaoUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUpdateManyWithoutAtracaoNestedInput
  }

  export type AtracaoUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUncheckedUpdateManyWithoutAtracaoNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutAtracaoNestedInput
  }

  export type RoteiroUpsertWithoutAvaliacoesInput = {
    update: XOR<RoteiroUpdateWithoutAvaliacoesInput, RoteiroUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<RoteiroCreateWithoutAvaliacoesInput, RoteiroUncheckedCreateWithoutAvaliacoesInput>
    where?: RoteiroWhereInput
  }

  export type RoteiroUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: RoteiroWhereInput
    data: XOR<RoteiroUpdateWithoutAvaliacoesInput, RoteiroUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type RoteiroUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutRoteirosNestedInput
    dias?: DiaRoteiroUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type UserCreateWithoutComentariosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutComentariosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutComentariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
  }

  export type RoteiroCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutRoteirosInput
    dias?: DiaRoteiroCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroCreateOrConnectWithoutComentariosInput = {
    where: RoteiroWhereUniqueInput
    create: XOR<RoteiroCreateWithoutComentariosInput, RoteiroUncheckedCreateWithoutComentariosInput>
  }

  export type ComentarioCreateWithoutRespostasInput = {
    id?: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutComentariosInput
    roteiro: RoteiroCreateNestedOneWithoutComentariosInput
    parent?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateWithoutRespostasInput = {
    id?: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutRespostasInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
  }

  export type ComentarioCreateWithoutParentInput = {
    id?: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutComentariosInput
    roteiro: RoteiroCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutParentInput
  }

  export type ComentarioUncheckedCreateWithoutParentInput = {
    id?: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutParentInput
  }

  export type ComentarioCreateOrConnectWithoutParentInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput>
  }

  export type ComentarioCreateManyParentInputEnvelope = {
    data: ComentarioCreateManyParentInput | ComentarioCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutComentariosInput = {
    update: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type UserUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type RoteiroUpsertWithoutComentariosInput = {
    update: XOR<RoteiroUpdateWithoutComentariosInput, RoteiroUncheckedUpdateWithoutComentariosInput>
    create: XOR<RoteiroCreateWithoutComentariosInput, RoteiroUncheckedCreateWithoutComentariosInput>
    where?: RoteiroWhereInput
  }

  export type RoteiroUpdateToOneWithWhereWithoutComentariosInput = {
    where?: RoteiroWhereInput
    data: XOR<RoteiroUpdateWithoutComentariosInput, RoteiroUncheckedUpdateWithoutComentariosInput>
  }

  export type RoteiroUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutRoteirosNestedInput
    dias?: DiaRoteiroUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type ComentarioUpsertWithoutRespostasInput = {
    update: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    where?: ComentarioWhereInput
  }

  export type ComentarioUpdateToOneWithWhereWithoutRespostasInput = {
    where?: ComentarioWhereInput
    data: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutComentariosNestedInput
    roteiro?: RoteiroUpdateOneRequiredWithoutComentariosNestedInput
    parent?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutParentInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutParentInput, ComentarioUncheckedUpdateWithoutParentInput>
    create: XOR<ComentarioCreateWithoutParentInput, ComentarioUncheckedCreateWithoutParentInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutParentInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutParentInput, ComentarioUncheckedUpdateWithoutParentInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutParentInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutIngressosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutIngressosInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutIngressosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIngressosInput, UserUncheckedCreateWithoutIngressosInput>
  }

  export type AtracaoCreateWithoutIngressosInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaCreateNestedManyWithoutAtracaoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoUncheckedCreateWithoutIngressosInput = {
    id?: string
    nome: string
    descricao: string
    categoria: $Enums.Categoria
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    endereco: string
    parceiro: $Enums.Parceiro
    linkAfiliado: string
    duracaoEstimada: number
    avaliacaoMedia?: Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: AtracaoDiaUncheckedCreateNestedManyWithoutAtracaoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutAtracaoInput
  }

  export type AtracaoCreateOrConnectWithoutIngressosInput = {
    where: AtracaoWhereUniqueInput
    create: XOR<AtracaoCreateWithoutIngressosInput, AtracaoUncheckedCreateWithoutIngressosInput>
  }

  export type RoteiroCreateWithoutIngressosInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutRoteirosInput
    dias?: DiaRoteiroCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroUncheckedCreateWithoutIngressosInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    usuarioId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dias?: DiaRoteiroUncheckedCreateNestedManyWithoutRoteiroInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutRoteiroInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRoteiroInput
  }

  export type RoteiroCreateOrConnectWithoutIngressosInput = {
    where: RoteiroWhereUniqueInput
    create: XOR<RoteiroCreateWithoutIngressosInput, RoteiroUncheckedCreateWithoutIngressosInput>
  }

  export type UserUpsertWithoutIngressosInput = {
    update: XOR<UserUpdateWithoutIngressosInput, UserUncheckedUpdateWithoutIngressosInput>
    create: XOR<UserCreateWithoutIngressosInput, UserUncheckedCreateWithoutIngressosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIngressosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIngressosInput, UserUncheckedUpdateWithoutIngressosInput>
  }

  export type UserUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type AtracaoUpsertWithoutIngressosInput = {
    update: XOR<AtracaoUpdateWithoutIngressosInput, AtracaoUncheckedUpdateWithoutIngressosInput>
    create: XOR<AtracaoCreateWithoutIngressosInput, AtracaoUncheckedCreateWithoutIngressosInput>
    where?: AtracaoWhereInput
  }

  export type AtracaoUpdateToOneWithWhereWithoutIngressosInput = {
    where?: AtracaoWhereInput
    data: XOR<AtracaoUpdateWithoutIngressosInput, AtracaoUncheckedUpdateWithoutIngressosInput>
  }

  export type AtracaoUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUpdateManyWithoutAtracaoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutAtracaoNestedInput
  }

  export type AtracaoUncheckedUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endereco?: StringFieldUpdateOperationsInput | string
    parceiro?: EnumParceiroFieldUpdateOperationsInput | $Enums.Parceiro
    linkAfiliado?: StringFieldUpdateOperationsInput | string
    duracaoEstimada?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAvaliacoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: AtracaoDiaUncheckedUpdateManyWithoutAtracaoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutAtracaoNestedInput
  }

  export type RoteiroUpsertWithoutIngressosInput = {
    update: XOR<RoteiroUpdateWithoutIngressosInput, RoteiroUncheckedUpdateWithoutIngressosInput>
    create: XOR<RoteiroCreateWithoutIngressosInput, RoteiroUncheckedCreateWithoutIngressosInput>
    where?: RoteiroWhereInput
  }

  export type RoteiroUpdateToOneWithWhereWithoutIngressosInput = {
    where?: RoteiroWhereInput
    data: XOR<RoteiroUpdateWithoutIngressosInput, RoteiroUncheckedUpdateWithoutIngressosInput>
  }

  export type RoteiroUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutRoteirosNestedInput
    dias?: DiaRoteiroUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateWithoutIngressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type UserCreateWithoutConsultoriasSolicitadasInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasAtendidas?: ConsultoriaCreateNestedManyWithoutConsultorInput
  }

  export type UserUncheckedCreateWithoutConsultoriasSolicitadasInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasAtendidas?: ConsultoriaUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type UserCreateOrConnectWithoutConsultoriasSolicitadasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultoriasSolicitadasInput, UserUncheckedCreateWithoutConsultoriasSolicitadasInput>
  }

  export type UserCreateWithoutConsultoriasAtendidasInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    roteiros?: RoteiroCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaCreateNestedManyWithoutClienteInput
  }

  export type UserUncheckedCreateWithoutConsultoriasAtendidasInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    plano?: $Enums.TipoPlano
    role?: $Enums.RoleUsuario
    preferenciasIdioma?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    roteiros?: RoteiroUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    ingressos?: IngressoUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: FollowUncheckedCreateNestedManyWithoutSeguidorInput
    seguindo?: FollowUncheckedCreateNestedManyWithoutSeguidoInput
    consultoriasSolicitadas?: ConsultoriaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UserCreateOrConnectWithoutConsultoriasAtendidasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultoriasAtendidasInput, UserUncheckedCreateWithoutConsultoriasAtendidasInput>
  }

  export type UserUpsertWithoutConsultoriasSolicitadasInput = {
    update: XOR<UserUpdateWithoutConsultoriasSolicitadasInput, UserUncheckedUpdateWithoutConsultoriasSolicitadasInput>
    create: XOR<UserCreateWithoutConsultoriasSolicitadasInput, UserUncheckedCreateWithoutConsultoriasSolicitadasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultoriasSolicitadasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultoriasSolicitadasInput, UserUncheckedUpdateWithoutConsultoriasSolicitadasInput>
  }

  export type UserUpdateWithoutConsultoriasSolicitadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasAtendidas?: ConsultoriaUpdateManyWithoutConsultorNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultoriasSolicitadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasAtendidas?: ConsultoriaUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type UserUpsertWithoutConsultoriasAtendidasInput = {
    update: XOR<UserUpdateWithoutConsultoriasAtendidasInput, UserUncheckedUpdateWithoutConsultoriasAtendidasInput>
    create: XOR<UserCreateWithoutConsultoriasAtendidasInput, UserUncheckedCreateWithoutConsultoriasAtendidasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultoriasAtendidasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultoriasAtendidasInput, UserUncheckedUpdateWithoutConsultoriasAtendidasInput>
  }

  export type UserUpdateWithoutConsultoriasAtendidasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUpdateManyWithoutClienteNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultoriasAtendidasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: EnumTipoPlanoFieldUpdateOperationsInput | $Enums.TipoPlano
    role?: EnumRoleUsuarioFieldUpdateOperationsInput | $Enums.RoleUsuario
    preferenciasIdioma?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    roteiros?: RoteiroUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: FollowUncheckedUpdateManyWithoutSeguidorNestedInput
    seguindo?: FollowUncheckedUpdateManyWithoutSeguidoNestedInput
    consultoriasSolicitadas?: ConsultoriaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type RoteiroCreateManyUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    publico?: boolean
    categoria: $Enums.Categoria
    orcamento?: Decimal | DecimalJsLike | number | string | null
    visualizacoes?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateManyUsuarioInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    atracaoId?: string | null
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateManyUsuarioInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    atracaoId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioCreateManyUsuarioInput = {
    id?: string
    conteudo: string
    roteiroId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FollowCreateManySeguidorInput = {
    id?: string
    seguidoId: string
    criadoEm?: Date | string
  }

  export type FollowCreateManySeguidoInput = {
    id?: string
    seguidorId: string
    criadoEm?: Date | string
  }

  export type ConsultoriaCreateManyClienteInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    consultorId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultoriaCreateManyConsultorInput = {
    id?: string
    destino: string
    dataInicio: Date | string
    dataFim: Date | string
    orcamento?: Decimal | DecimalJsLike | number | string | null
    preferencias?: string | null
    status?: string
    preco: Decimal | DecimalJsLike | number | string
    clienteId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dias?: DiaRoteiroUncheckedUpdateManyWithoutRoteiroNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutRoteiroNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRoteiroNestedInput
    ingressos?: IngressoUncheckedUpdateManyWithoutRoteiroNestedInput
  }

  export type RoteiroUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    publico?: BoolFieldUpdateOperationsInput | boolean
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visualizacoes?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracao?: AtracaoUpdateOneWithoutAvaliacoesNestedInput
    roteiro?: RoteiroUpdateOneWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracao?: AtracaoUpdateOneRequiredWithoutIngressosNestedInput
    roteiro?: RoteiroUpdateOneWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atracaoId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atracaoId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    roteiro?: RoteiroUpdateOneRequiredWithoutComentariosNestedInput
    parent?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutSeguidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguido?: UserUpdateOneRequiredWithoutSeguindoNestedInput
  }

  export type FollowUncheckedUpdateWithoutSeguidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutSeguidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutSeguidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: UserUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type FollowUncheckedUpdateWithoutSeguidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidorId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutSeguidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    seguidorId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    consultor?: UserUpdateOneWithoutConsultoriasAtendidasNestedInput
  }

  export type ConsultoriaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    consultorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaUpdateWithoutConsultorInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UserUpdateOneRequiredWithoutConsultoriasSolicitadasNestedInput
  }

  export type ConsultoriaUncheckedUpdateWithoutConsultorInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultoriaUncheckedUpdateManyWithoutConsultorInput = {
    id?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferencias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaRoteiroCreateManyRoteiroInput = {
    id?: string
    data: Date | string
    ordem: number
    criadoEm?: Date | string
  }

  export type AvaliacaoCreateManyRoteiroInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    atracaoId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioCreateManyRoteiroInput = {
    id?: string
    conteudo: string
    usuarioId: string
    parentId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateManyRoteiroInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    atracaoId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaRoteiroUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracoes?: AtracaoDiaUpdateManyWithoutDiaRoteiroNestedInput
  }

  export type DiaRoteiroUncheckedUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracoes?: AtracaoDiaUncheckedUpdateManyWithoutDiaRoteiroNestedInput
  }

  export type DiaRoteiroUncheckedUpdateManyWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ordem?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutAvaliacoesNestedInput
    atracao?: AtracaoUpdateOneWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutComentariosNestedInput
    parent?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutIngressosNestedInput
    atracao?: AtracaoUpdateOneRequiredWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUncheckedUpdateManyWithoutRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaCreateManyDiaRoteiroInput = {
    id?: string
    atracaoId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AtracaoDiaUpdateWithoutDiaRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atracao?: AtracaoUpdateOneRequiredWithoutDiasNestedInput
  }

  export type AtracaoDiaUncheckedUpdateWithoutDiaRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaUncheckedUpdateManyWithoutDiaRoteiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    atracaoId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaCreateManyAtracaoInput = {
    id?: string
    diaRoteiroId: string
    horario?: string | null
    tempoEstimado?: number | null
    ordem: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AvaliacaoCreateManyAtracaoInput = {
    id?: string
    nota: number
    comentario?: string | null
    dataVisita?: Date | string | null
    util?: number
    naoUtil?: number
    usuarioId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type IngressoCreateManyAtracaoInput = {
    id?: string
    codigo: string
    qrCode?: string | null
    dataValidade: Date | string
    preco?: Decimal | DecimalJsLike | number | string | null
    moeda?: string
    status?: $Enums.StatusIngresso
    observacoes?: string | null
    usuarioId: string
    roteiroId?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AtracaoDiaUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    diaRoteiro?: DiaRoteiroUpdateOneRequiredWithoutAtracoesNestedInput
  }

  export type AtracaoDiaUncheckedUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaRoteiroId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtracaoDiaUncheckedUpdateManyWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaRoteiroId?: StringFieldUpdateOperationsInput | string
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    tempoEstimado?: NullableIntFieldUpdateOperationsInput | number | null
    ordem?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutAvaliacoesNestedInput
    roteiro?: RoteiroUpdateOneWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataVisita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    util?: IntFieldUpdateOperationsInput | number
    naoUtil?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutIngressosNestedInput
    roteiro?: RoteiroUpdateOneWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngressoUncheckedUpdateManyWithoutAtracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moeda?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusIngressoFieldUpdateOperationsInput | $Enums.StatusIngresso
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyParentInput = {
    id?: string
    conteudo: string
    usuarioId: string
    roteiroId: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutComentariosNestedInput
    roteiro?: RoteiroUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    roteiroId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoteiroCountOutputTypeDefaultArgs instead
     */
    export type RoteiroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoteiroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiaRoteiroCountOutputTypeDefaultArgs instead
     */
    export type DiaRoteiroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiaRoteiroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtracaoCountOutputTypeDefaultArgs instead
     */
    export type AtracaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtracaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComentarioCountOutputTypeDefaultArgs instead
     */
    export type ComentarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComentarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowDefaultArgs instead
     */
    export type FollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoteiroDefaultArgs instead
     */
    export type RoteiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoteiroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiaRoteiroDefaultArgs instead
     */
    export type DiaRoteiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiaRoteiroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtracaoDefaultArgs instead
     */
    export type AtracaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtracaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AtracaoDiaDefaultArgs instead
     */
    export type AtracaoDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtracaoDiaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvaliacaoDefaultArgs instead
     */
    export type AvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvaliacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComentarioDefaultArgs instead
     */
    export type ComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComentarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngressoDefaultArgs instead
     */
    export type IngressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngressoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultoriaDefaultArgs instead
     */
    export type ConsultoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultoriaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}