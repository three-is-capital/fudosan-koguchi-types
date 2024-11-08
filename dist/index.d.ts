
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SBIMPUser
 * 
 */
export type SBIMPUser = $Result.DefaultSelection<Prisma.$SBIMPUserPayload>
/**
 * Model EAJUser
 * 
 */
export type EAJUser = $Result.DefaultSelection<Prisma.$EAJUserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Ki
 * 
 */
export type Ki = $Result.DefaultSelection<Prisma.$KiPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectKi
 * 
 */
export type ProjectKi = $Result.DefaultSelection<Prisma.$ProjectKiPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AssetKi
 * 
 */
export type AssetKi = $Result.DefaultSelection<Prisma.$AssetKiPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerFund
 * 
 */
export type CustomerFund = $Result.DefaultSelection<Prisma.$CustomerFundPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateHistory
 * 
 */
export type TemplateHistory = $Result.DefaultSelection<Prisma.$TemplateHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  Normal: 'Normal',
  Admin: 'Admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserType: {
  User: 'User',
  SbimpUser: 'SbimpUser',
  EajUser: 'EajUser'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const CustomerType: {
  Person: 'Person',
  Corporate: 'Corporate'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const HoryuStatusType: {
  AskInstruction: 'AskInstruction',
  InstructionReady: 'InstructionReady'
};

export type HoryuStatusType = (typeof HoryuStatusType)[keyof typeof HoryuStatusType]


export const InheritanceType: {
  Gift: 'Gift',
  Inheritance: 'Inheritance'
};

export type InheritanceType = (typeof InheritanceType)[keyof typeof InheritanceType]


export const ExtType: {
  Xlsx: 'Xlsx',
  Docx: 'Docx'
};

export type ExtType = (typeof ExtType)[keyof typeof ExtType]


export const TemplateType: {
  Bunpai: 'Bunpai',
  ReportA: 'ReportA',
  ReportB: 'ReportB',
  ReportC: 'ReportC',
  Ref: 'Ref',
  YieldTrend: 'YieldTrend',
  BunpaiInstruction: 'BunpaiInstruction',
  CustomerList: 'CustomerList'
};

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type CustomerType = $Enums.CustomerType

export const CustomerType: typeof $Enums.CustomerType

export type HoryuStatusType = $Enums.HoryuStatusType

export const HoryuStatusType: typeof $Enums.HoryuStatusType

export type InheritanceType = $Enums.InheritanceType

export const InheritanceType: typeof $Enums.InheritanceType

export type ExtType = $Enums.ExtType

export const ExtType: typeof $Enums.ExtType

export type TemplateType = $Enums.TemplateType

export const TemplateType: typeof $Enums.TemplateType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.sBIMPUser`: Exposes CRUD operations for the **SBIMPUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SBIMPUsers
    * const sBIMPUsers = await prisma.sBIMPUser.findMany()
    * ```
    */
  get sBIMPUser(): Prisma.SBIMPUserDelegate<ExtArgs>;

  /**
   * `prisma.eAJUser`: Exposes CRUD operations for the **EAJUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EAJUsers
    * const eAJUsers = await prisma.eAJUser.findMany()
    * ```
    */
  get eAJUser(): Prisma.EAJUserDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.ki`: Exposes CRUD operations for the **Ki** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kis
    * const kis = await prisma.ki.findMany()
    * ```
    */
  get ki(): Prisma.KiDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.projectKi`: Exposes CRUD operations for the **ProjectKi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectKis
    * const projectKis = await prisma.projectKi.findMany()
    * ```
    */
  get projectKi(): Prisma.ProjectKiDelegate<ExtArgs>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs>;

  /**
   * `prisma.assetKi`: Exposes CRUD operations for the **AssetKi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetKis
    * const assetKis = await prisma.assetKi.findMany()
    * ```
    */
  get assetKi(): Prisma.AssetKiDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.customerFund`: Exposes CRUD operations for the **CustomerFund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerFunds
    * const customerFunds = await prisma.customerFund.findMany()
    * ```
    */
  get customerFund(): Prisma.CustomerFundDelegate<ExtArgs>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs>;

  /**
   * `prisma.templateHistory`: Exposes CRUD operations for the **TemplateHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateHistories
    * const templateHistories = await prisma.templateHistory.findMany()
    * ```
    */
  get templateHistory(): Prisma.TemplateHistoryDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
    User: 'User',
    SBIMPUser: 'SBIMPUser',
    EAJUser: 'EAJUser',
    Company: 'Company',
    Ki: 'Ki',
    Project: 'Project',
    ProjectKi: 'ProjectKi',
    Asset: 'Asset',
    AssetKi: 'AssetKi',
    Customer: 'Customer',
    CustomerFund: 'CustomerFund',
    Template: 'Template',
    TemplateHistory: 'TemplateHistory'
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
      modelProps: "user" | "sBIMPUser" | "eAJUser" | "company" | "ki" | "project" | "projectKi" | "asset" | "assetKi" | "customer" | "customerFund" | "template" | "templateHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      SBIMPUser: {
        payload: Prisma.$SBIMPUserPayload<ExtArgs>
        fields: Prisma.SBIMPUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SBIMPUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SBIMPUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          findFirst: {
            args: Prisma.SBIMPUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SBIMPUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          findMany: {
            args: Prisma.SBIMPUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>[]
          }
          create: {
            args: Prisma.SBIMPUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          createMany: {
            args: Prisma.SBIMPUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SBIMPUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>[]
          }
          delete: {
            args: Prisma.SBIMPUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          update: {
            args: Prisma.SBIMPUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          deleteMany: {
            args: Prisma.SBIMPUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SBIMPUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SBIMPUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SBIMPUserPayload>
          }
          aggregate: {
            args: Prisma.SBIMPUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSBIMPUser>
          }
          groupBy: {
            args: Prisma.SBIMPUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SBIMPUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SBIMPUserCountArgs<ExtArgs>
            result: $Utils.Optional<SBIMPUserCountAggregateOutputType> | number
          }
        }
      }
      EAJUser: {
        payload: Prisma.$EAJUserPayload<ExtArgs>
        fields: Prisma.EAJUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EAJUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EAJUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          findFirst: {
            args: Prisma.EAJUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EAJUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          findMany: {
            args: Prisma.EAJUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>[]
          }
          create: {
            args: Prisma.EAJUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          createMany: {
            args: Prisma.EAJUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EAJUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>[]
          }
          delete: {
            args: Prisma.EAJUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          update: {
            args: Prisma.EAJUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          deleteMany: {
            args: Prisma.EAJUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EAJUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EAJUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EAJUserPayload>
          }
          aggregate: {
            args: Prisma.EAJUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEAJUser>
          }
          groupBy: {
            args: Prisma.EAJUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<EAJUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.EAJUserCountArgs<ExtArgs>
            result: $Utils.Optional<EAJUserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Ki: {
        payload: Prisma.$KiPayload<ExtArgs>
        fields: Prisma.KiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          findFirst: {
            args: Prisma.KiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          findMany: {
            args: Prisma.KiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>[]
          }
          create: {
            args: Prisma.KiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          createMany: {
            args: Prisma.KiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>[]
          }
          delete: {
            args: Prisma.KiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          update: {
            args: Prisma.KiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          deleteMany: {
            args: Prisma.KiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KiPayload>
          }
          aggregate: {
            args: Prisma.KiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKi>
          }
          groupBy: {
            args: Prisma.KiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KiGroupByOutputType>[]
          }
          count: {
            args: Prisma.KiCountArgs<ExtArgs>
            result: $Utils.Optional<KiCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectKi: {
        payload: Prisma.$ProjectKiPayload<ExtArgs>
        fields: Prisma.ProjectKiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectKiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectKiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          findFirst: {
            args: Prisma.ProjectKiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectKiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          findMany: {
            args: Prisma.ProjectKiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>[]
          }
          create: {
            args: Prisma.ProjectKiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          createMany: {
            args: Prisma.ProjectKiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectKiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>[]
          }
          delete: {
            args: Prisma.ProjectKiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          update: {
            args: Prisma.ProjectKiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          deleteMany: {
            args: Prisma.ProjectKiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectKiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectKiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKiPayload>
          }
          aggregate: {
            args: Prisma.ProjectKiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectKi>
          }
          groupBy: {
            args: Prisma.ProjectKiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectKiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectKiCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectKiCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AssetKi: {
        payload: Prisma.$AssetKiPayload<ExtArgs>
        fields: Prisma.AssetKiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetKiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetKiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          findFirst: {
            args: Prisma.AssetKiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetKiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          findMany: {
            args: Prisma.AssetKiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>[]
          }
          create: {
            args: Prisma.AssetKiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          createMany: {
            args: Prisma.AssetKiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetKiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>[]
          }
          delete: {
            args: Prisma.AssetKiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          update: {
            args: Prisma.AssetKiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          deleteMany: {
            args: Prisma.AssetKiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetKiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetKiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetKiPayload>
          }
          aggregate: {
            args: Prisma.AssetKiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetKi>
          }
          groupBy: {
            args: Prisma.AssetKiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetKiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetKiCountArgs<ExtArgs>
            result: $Utils.Optional<AssetKiCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerFund: {
        payload: Prisma.$CustomerFundPayload<ExtArgs>
        fields: Prisma.CustomerFundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          findFirst: {
            args: Prisma.CustomerFundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          findMany: {
            args: Prisma.CustomerFundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>[]
          }
          create: {
            args: Prisma.CustomerFundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          createMany: {
            args: Prisma.CustomerFundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerFundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>[]
          }
          delete: {
            args: Prisma.CustomerFundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          update: {
            args: Prisma.CustomerFundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          deleteMany: {
            args: Prisma.CustomerFundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerFundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerFundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFundPayload>
          }
          aggregate: {
            args: Prisma.CustomerFundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerFund>
          }
          groupBy: {
            args: Prisma.CustomerFundGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerFundGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerFundCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerFundCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateHistory: {
        payload: Prisma.$TemplateHistoryPayload<ExtArgs>
        fields: Prisma.TemplateHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          findFirst: {
            args: Prisma.TemplateHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          findMany: {
            args: Prisma.TemplateHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>[]
          }
          create: {
            args: Prisma.TemplateHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          createMany: {
            args: Prisma.TemplateHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>[]
          }
          delete: {
            args: Prisma.TemplateHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          update: {
            args: Prisma.TemplateHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TemplateHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateHistoryPayload>
          }
          aggregate: {
            args: Prisma.TemplateHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateHistory>
          }
          groupBy: {
            args: Prisma.TemplateHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateHistoryCountAggregateOutputType> | number
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
   * Count Type KiCountOutputType
   */

  export type KiCountOutputType = {
    ProjectKis: number
    AssetKis: number
  }

  export type KiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectKis?: boolean | KiCountOutputTypeCountProjectKisArgs
    AssetKis?: boolean | KiCountOutputTypeCountAssetKisArgs
  }

  // Custom InputTypes
  /**
   * KiCountOutputType without action
   */
  export type KiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KiCountOutputType
     */
    select?: KiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KiCountOutputType without action
   */
  export type KiCountOutputTypeCountProjectKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectKiWhereInput
  }

  /**
   * KiCountOutputType without action
   */
  export type KiCountOutputTypeCountAssetKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetKiWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ProjectKis: number
    Assets: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectKis?: boolean | ProjectCountOutputTypeCountProjectKisArgs
    Assets?: boolean | ProjectCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectKiWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type ProjectKiCountOutputType
   */

  export type ProjectKiCountOutputType = {
    CustomerFunds: number
  }

  export type ProjectKiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerFunds?: boolean | ProjectKiCountOutputTypeCountCustomerFundsArgs
  }

  // Custom InputTypes
  /**
   * ProjectKiCountOutputType without action
   */
  export type ProjectKiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKiCountOutputType
     */
    select?: ProjectKiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectKiCountOutputType without action
   */
  export type ProjectKiCountOutputTypeCountCustomerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFundWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    AssetKis: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetKis?: boolean | AssetCountOutputTypeCountAssetKisArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountAssetKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetKiWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    CustomerFunds: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerFunds?: boolean | CustomerCountOutputTypeCountCustomerFundsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFundWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    userType: number
    isDeleted: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
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
    name: string | null
    role: $Enums.UserRole
    userType: $Enums.UserType
    isDeleted: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
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
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      userType: $Enums.UserType
      isDeleted: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
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
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly createdId: FieldRef<"User", 'String'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly updatedId: FieldRef<"User", 'String'>
    readonly updatedBy: FieldRef<"User", 'String'>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model SBIMPUser
   */

  export type AggregateSBIMPUser = {
    _count: SBIMPUserCountAggregateOutputType | null
    _min: SBIMPUserMinAggregateOutputType | null
    _max: SBIMPUserMaxAggregateOutputType | null
  }

  export type SBIMPUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type SBIMPUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type SBIMPUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    userType: number
    isDeleted: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type SBIMPUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type SBIMPUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type SBIMPUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type SBIMPUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SBIMPUser to aggregate.
     */
    where?: SBIMPUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBIMPUsers to fetch.
     */
    orderBy?: SBIMPUserOrderByWithRelationInput | SBIMPUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SBIMPUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBIMPUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBIMPUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SBIMPUsers
    **/
    _count?: true | SBIMPUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SBIMPUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SBIMPUserMaxAggregateInputType
  }

  export type GetSBIMPUserAggregateType<T extends SBIMPUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSBIMPUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSBIMPUser[P]>
      : GetScalarType<T[P], AggregateSBIMPUser[P]>
  }




  export type SBIMPUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SBIMPUserWhereInput
    orderBy?: SBIMPUserOrderByWithAggregationInput | SBIMPUserOrderByWithAggregationInput[]
    by: SBIMPUserScalarFieldEnum[] | SBIMPUserScalarFieldEnum
    having?: SBIMPUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SBIMPUserCountAggregateInputType | true
    _min?: SBIMPUserMinAggregateInputType
    _max?: SBIMPUserMaxAggregateInputType
  }

  export type SBIMPUserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.UserRole
    userType: $Enums.UserType
    isDeleted: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: SBIMPUserCountAggregateOutputType | null
    _min: SBIMPUserMinAggregateOutputType | null
    _max: SBIMPUserMaxAggregateOutputType | null
  }

  type GetSBIMPUserGroupByPayload<T extends SBIMPUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SBIMPUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SBIMPUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SBIMPUserGroupByOutputType[P]>
            : GetScalarType<T[P], SBIMPUserGroupByOutputType[P]>
        }
      >
    >


  export type SBIMPUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["sBIMPUser"]>

  export type SBIMPUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["sBIMPUser"]>

  export type SBIMPUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }


  export type $SBIMPUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SBIMPUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      userType: $Enums.UserType
      isDeleted: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["sBIMPUser"]>
    composites: {}
  }

  type SBIMPUserGetPayload<S extends boolean | null | undefined | SBIMPUserDefaultArgs> = $Result.GetResult<Prisma.$SBIMPUserPayload, S>

  type SBIMPUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SBIMPUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SBIMPUserCountAggregateInputType | true
    }

  export interface SBIMPUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SBIMPUser'], meta: { name: 'SBIMPUser' } }
    /**
     * Find zero or one SBIMPUser that matches the filter.
     * @param {SBIMPUserFindUniqueArgs} args - Arguments to find a SBIMPUser
     * @example
     * // Get one SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SBIMPUserFindUniqueArgs>(args: SelectSubset<T, SBIMPUserFindUniqueArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SBIMPUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SBIMPUserFindUniqueOrThrowArgs} args - Arguments to find a SBIMPUser
     * @example
     * // Get one SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SBIMPUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SBIMPUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SBIMPUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserFindFirstArgs} args - Arguments to find a SBIMPUser
     * @example
     * // Get one SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SBIMPUserFindFirstArgs>(args?: SelectSubset<T, SBIMPUserFindFirstArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SBIMPUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserFindFirstOrThrowArgs} args - Arguments to find a SBIMPUser
     * @example
     * // Get one SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SBIMPUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SBIMPUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SBIMPUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SBIMPUsers
     * const sBIMPUsers = await prisma.sBIMPUser.findMany()
     * 
     * // Get first 10 SBIMPUsers
     * const sBIMPUsers = await prisma.sBIMPUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sBIMPUserWithIdOnly = await prisma.sBIMPUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SBIMPUserFindManyArgs>(args?: SelectSubset<T, SBIMPUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SBIMPUser.
     * @param {SBIMPUserCreateArgs} args - Arguments to create a SBIMPUser.
     * @example
     * // Create one SBIMPUser
     * const SBIMPUser = await prisma.sBIMPUser.create({
     *   data: {
     *     // ... data to create a SBIMPUser
     *   }
     * })
     * 
     */
    create<T extends SBIMPUserCreateArgs>(args: SelectSubset<T, SBIMPUserCreateArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SBIMPUsers.
     * @param {SBIMPUserCreateManyArgs} args - Arguments to create many SBIMPUsers.
     * @example
     * // Create many SBIMPUsers
     * const sBIMPUser = await prisma.sBIMPUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SBIMPUserCreateManyArgs>(args?: SelectSubset<T, SBIMPUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SBIMPUsers and returns the data saved in the database.
     * @param {SBIMPUserCreateManyAndReturnArgs} args - Arguments to create many SBIMPUsers.
     * @example
     * // Create many SBIMPUsers
     * const sBIMPUser = await prisma.sBIMPUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SBIMPUsers and only return the `id`
     * const sBIMPUserWithIdOnly = await prisma.sBIMPUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SBIMPUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SBIMPUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SBIMPUser.
     * @param {SBIMPUserDeleteArgs} args - Arguments to delete one SBIMPUser.
     * @example
     * // Delete one SBIMPUser
     * const SBIMPUser = await prisma.sBIMPUser.delete({
     *   where: {
     *     // ... filter to delete one SBIMPUser
     *   }
     * })
     * 
     */
    delete<T extends SBIMPUserDeleteArgs>(args: SelectSubset<T, SBIMPUserDeleteArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SBIMPUser.
     * @param {SBIMPUserUpdateArgs} args - Arguments to update one SBIMPUser.
     * @example
     * // Update one SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SBIMPUserUpdateArgs>(args: SelectSubset<T, SBIMPUserUpdateArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SBIMPUsers.
     * @param {SBIMPUserDeleteManyArgs} args - Arguments to filter SBIMPUsers to delete.
     * @example
     * // Delete a few SBIMPUsers
     * const { count } = await prisma.sBIMPUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SBIMPUserDeleteManyArgs>(args?: SelectSubset<T, SBIMPUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SBIMPUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SBIMPUsers
     * const sBIMPUser = await prisma.sBIMPUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SBIMPUserUpdateManyArgs>(args: SelectSubset<T, SBIMPUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SBIMPUser.
     * @param {SBIMPUserUpsertArgs} args - Arguments to update or create a SBIMPUser.
     * @example
     * // Update or create a SBIMPUser
     * const sBIMPUser = await prisma.sBIMPUser.upsert({
     *   create: {
     *     // ... data to create a SBIMPUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SBIMPUser we want to update
     *   }
     * })
     */
    upsert<T extends SBIMPUserUpsertArgs>(args: SelectSubset<T, SBIMPUserUpsertArgs<ExtArgs>>): Prisma__SBIMPUserClient<$Result.GetResult<Prisma.$SBIMPUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SBIMPUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserCountArgs} args - Arguments to filter SBIMPUsers to count.
     * @example
     * // Count the number of SBIMPUsers
     * const count = await prisma.sBIMPUser.count({
     *   where: {
     *     // ... the filter for the SBIMPUsers we want to count
     *   }
     * })
    **/
    count<T extends SBIMPUserCountArgs>(
      args?: Subset<T, SBIMPUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SBIMPUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SBIMPUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SBIMPUserAggregateArgs>(args: Subset<T, SBIMPUserAggregateArgs>): Prisma.PrismaPromise<GetSBIMPUserAggregateType<T>>

    /**
     * Group by SBIMPUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SBIMPUserGroupByArgs} args - Group by arguments.
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
      T extends SBIMPUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SBIMPUserGroupByArgs['orderBy'] }
        : { orderBy?: SBIMPUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SBIMPUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSBIMPUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SBIMPUser model
   */
  readonly fields: SBIMPUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SBIMPUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SBIMPUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SBIMPUser model
   */ 
  interface SBIMPUserFieldRefs {
    readonly id: FieldRef<"SBIMPUser", 'String'>
    readonly email: FieldRef<"SBIMPUser", 'String'>
    readonly name: FieldRef<"SBIMPUser", 'String'>
    readonly role: FieldRef<"SBIMPUser", 'UserRole'>
    readonly userType: FieldRef<"SBIMPUser", 'UserType'>
    readonly isDeleted: FieldRef<"SBIMPUser", 'Boolean'>
    readonly createdAt: FieldRef<"SBIMPUser", 'DateTime'>
    readonly createdId: FieldRef<"SBIMPUser", 'String'>
    readonly createdBy: FieldRef<"SBIMPUser", 'String'>
    readonly updatedAt: FieldRef<"SBIMPUser", 'DateTime'>
    readonly updatedId: FieldRef<"SBIMPUser", 'String'>
    readonly updatedBy: FieldRef<"SBIMPUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SBIMPUser findUnique
   */
  export type SBIMPUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter, which SBIMPUser to fetch.
     */
    where: SBIMPUserWhereUniqueInput
  }

  /**
   * SBIMPUser findUniqueOrThrow
   */
  export type SBIMPUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter, which SBIMPUser to fetch.
     */
    where: SBIMPUserWhereUniqueInput
  }

  /**
   * SBIMPUser findFirst
   */
  export type SBIMPUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter, which SBIMPUser to fetch.
     */
    where?: SBIMPUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBIMPUsers to fetch.
     */
    orderBy?: SBIMPUserOrderByWithRelationInput | SBIMPUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBIMPUsers.
     */
    cursor?: SBIMPUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBIMPUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBIMPUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBIMPUsers.
     */
    distinct?: SBIMPUserScalarFieldEnum | SBIMPUserScalarFieldEnum[]
  }

  /**
   * SBIMPUser findFirstOrThrow
   */
  export type SBIMPUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter, which SBIMPUser to fetch.
     */
    where?: SBIMPUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBIMPUsers to fetch.
     */
    orderBy?: SBIMPUserOrderByWithRelationInput | SBIMPUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SBIMPUsers.
     */
    cursor?: SBIMPUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBIMPUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBIMPUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SBIMPUsers.
     */
    distinct?: SBIMPUserScalarFieldEnum | SBIMPUserScalarFieldEnum[]
  }

  /**
   * SBIMPUser findMany
   */
  export type SBIMPUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter, which SBIMPUsers to fetch.
     */
    where?: SBIMPUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SBIMPUsers to fetch.
     */
    orderBy?: SBIMPUserOrderByWithRelationInput | SBIMPUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SBIMPUsers.
     */
    cursor?: SBIMPUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SBIMPUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SBIMPUsers.
     */
    skip?: number
    distinct?: SBIMPUserScalarFieldEnum | SBIMPUserScalarFieldEnum[]
  }

  /**
   * SBIMPUser create
   */
  export type SBIMPUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * The data needed to create a SBIMPUser.
     */
    data: XOR<SBIMPUserCreateInput, SBIMPUserUncheckedCreateInput>
  }

  /**
   * SBIMPUser createMany
   */
  export type SBIMPUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SBIMPUsers.
     */
    data: SBIMPUserCreateManyInput | SBIMPUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SBIMPUser createManyAndReturn
   */
  export type SBIMPUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SBIMPUsers.
     */
    data: SBIMPUserCreateManyInput | SBIMPUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SBIMPUser update
   */
  export type SBIMPUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * The data needed to update a SBIMPUser.
     */
    data: XOR<SBIMPUserUpdateInput, SBIMPUserUncheckedUpdateInput>
    /**
     * Choose, which SBIMPUser to update.
     */
    where: SBIMPUserWhereUniqueInput
  }

  /**
   * SBIMPUser updateMany
   */
  export type SBIMPUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SBIMPUsers.
     */
    data: XOR<SBIMPUserUpdateManyMutationInput, SBIMPUserUncheckedUpdateManyInput>
    /**
     * Filter which SBIMPUsers to update
     */
    where?: SBIMPUserWhereInput
  }

  /**
   * SBIMPUser upsert
   */
  export type SBIMPUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * The filter to search for the SBIMPUser to update in case it exists.
     */
    where: SBIMPUserWhereUniqueInput
    /**
     * In case the SBIMPUser found by the `where` argument doesn't exist, create a new SBIMPUser with this data.
     */
    create: XOR<SBIMPUserCreateInput, SBIMPUserUncheckedCreateInput>
    /**
     * In case the SBIMPUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SBIMPUserUpdateInput, SBIMPUserUncheckedUpdateInput>
  }

  /**
   * SBIMPUser delete
   */
  export type SBIMPUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
    /**
     * Filter which SBIMPUser to delete.
     */
    where: SBIMPUserWhereUniqueInput
  }

  /**
   * SBIMPUser deleteMany
   */
  export type SBIMPUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SBIMPUsers to delete
     */
    where?: SBIMPUserWhereInput
  }

  /**
   * SBIMPUser without action
   */
  export type SBIMPUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SBIMPUser
     */
    select?: SBIMPUserSelect<ExtArgs> | null
  }


  /**
   * Model EAJUser
   */

  export type AggregateEAJUser = {
    _count: EAJUserCountAggregateOutputType | null
    _min: EAJUserMinAggregateOutputType | null
    _max: EAJUserMaxAggregateOutputType | null
  }

  export type EAJUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type EAJUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    userType: $Enums.UserType | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type EAJUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    userType: number
    isDeleted: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type EAJUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type EAJUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type EAJUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    userType?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type EAJUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EAJUser to aggregate.
     */
    where?: EAJUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EAJUsers to fetch.
     */
    orderBy?: EAJUserOrderByWithRelationInput | EAJUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EAJUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EAJUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EAJUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EAJUsers
    **/
    _count?: true | EAJUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EAJUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EAJUserMaxAggregateInputType
  }

  export type GetEAJUserAggregateType<T extends EAJUserAggregateArgs> = {
        [P in keyof T & keyof AggregateEAJUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEAJUser[P]>
      : GetScalarType<T[P], AggregateEAJUser[P]>
  }




  export type EAJUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EAJUserWhereInput
    orderBy?: EAJUserOrderByWithAggregationInput | EAJUserOrderByWithAggregationInput[]
    by: EAJUserScalarFieldEnum[] | EAJUserScalarFieldEnum
    having?: EAJUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EAJUserCountAggregateInputType | true
    _min?: EAJUserMinAggregateInputType
    _max?: EAJUserMaxAggregateInputType
  }

  export type EAJUserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.UserRole
    userType: $Enums.UserType
    isDeleted: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: EAJUserCountAggregateOutputType | null
    _min: EAJUserMinAggregateOutputType | null
    _max: EAJUserMaxAggregateOutputType | null
  }

  type GetEAJUserGroupByPayload<T extends EAJUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EAJUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EAJUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EAJUserGroupByOutputType[P]>
            : GetScalarType<T[P], EAJUserGroupByOutputType[P]>
        }
      >
    >


  export type EAJUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["eAJUser"]>

  export type EAJUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["eAJUser"]>

  export type EAJUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    userType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }


  export type $EAJUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EAJUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      userType: $Enums.UserType
      isDeleted: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["eAJUser"]>
    composites: {}
  }

  type EAJUserGetPayload<S extends boolean | null | undefined | EAJUserDefaultArgs> = $Result.GetResult<Prisma.$EAJUserPayload, S>

  type EAJUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EAJUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EAJUserCountAggregateInputType | true
    }

  export interface EAJUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EAJUser'], meta: { name: 'EAJUser' } }
    /**
     * Find zero or one EAJUser that matches the filter.
     * @param {EAJUserFindUniqueArgs} args - Arguments to find a EAJUser
     * @example
     * // Get one EAJUser
     * const eAJUser = await prisma.eAJUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EAJUserFindUniqueArgs>(args: SelectSubset<T, EAJUserFindUniqueArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EAJUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EAJUserFindUniqueOrThrowArgs} args - Arguments to find a EAJUser
     * @example
     * // Get one EAJUser
     * const eAJUser = await prisma.eAJUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EAJUserFindUniqueOrThrowArgs>(args: SelectSubset<T, EAJUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EAJUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserFindFirstArgs} args - Arguments to find a EAJUser
     * @example
     * // Get one EAJUser
     * const eAJUser = await prisma.eAJUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EAJUserFindFirstArgs>(args?: SelectSubset<T, EAJUserFindFirstArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EAJUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserFindFirstOrThrowArgs} args - Arguments to find a EAJUser
     * @example
     * // Get one EAJUser
     * const eAJUser = await prisma.eAJUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EAJUserFindFirstOrThrowArgs>(args?: SelectSubset<T, EAJUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EAJUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EAJUsers
     * const eAJUsers = await prisma.eAJUser.findMany()
     * 
     * // Get first 10 EAJUsers
     * const eAJUsers = await prisma.eAJUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eAJUserWithIdOnly = await prisma.eAJUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EAJUserFindManyArgs>(args?: SelectSubset<T, EAJUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EAJUser.
     * @param {EAJUserCreateArgs} args - Arguments to create a EAJUser.
     * @example
     * // Create one EAJUser
     * const EAJUser = await prisma.eAJUser.create({
     *   data: {
     *     // ... data to create a EAJUser
     *   }
     * })
     * 
     */
    create<T extends EAJUserCreateArgs>(args: SelectSubset<T, EAJUserCreateArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EAJUsers.
     * @param {EAJUserCreateManyArgs} args - Arguments to create many EAJUsers.
     * @example
     * // Create many EAJUsers
     * const eAJUser = await prisma.eAJUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EAJUserCreateManyArgs>(args?: SelectSubset<T, EAJUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EAJUsers and returns the data saved in the database.
     * @param {EAJUserCreateManyAndReturnArgs} args - Arguments to create many EAJUsers.
     * @example
     * // Create many EAJUsers
     * const eAJUser = await prisma.eAJUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EAJUsers and only return the `id`
     * const eAJUserWithIdOnly = await prisma.eAJUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EAJUserCreateManyAndReturnArgs>(args?: SelectSubset<T, EAJUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EAJUser.
     * @param {EAJUserDeleteArgs} args - Arguments to delete one EAJUser.
     * @example
     * // Delete one EAJUser
     * const EAJUser = await prisma.eAJUser.delete({
     *   where: {
     *     // ... filter to delete one EAJUser
     *   }
     * })
     * 
     */
    delete<T extends EAJUserDeleteArgs>(args: SelectSubset<T, EAJUserDeleteArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EAJUser.
     * @param {EAJUserUpdateArgs} args - Arguments to update one EAJUser.
     * @example
     * // Update one EAJUser
     * const eAJUser = await prisma.eAJUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EAJUserUpdateArgs>(args: SelectSubset<T, EAJUserUpdateArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EAJUsers.
     * @param {EAJUserDeleteManyArgs} args - Arguments to filter EAJUsers to delete.
     * @example
     * // Delete a few EAJUsers
     * const { count } = await prisma.eAJUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EAJUserDeleteManyArgs>(args?: SelectSubset<T, EAJUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EAJUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EAJUsers
     * const eAJUser = await prisma.eAJUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EAJUserUpdateManyArgs>(args: SelectSubset<T, EAJUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EAJUser.
     * @param {EAJUserUpsertArgs} args - Arguments to update or create a EAJUser.
     * @example
     * // Update or create a EAJUser
     * const eAJUser = await prisma.eAJUser.upsert({
     *   create: {
     *     // ... data to create a EAJUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EAJUser we want to update
     *   }
     * })
     */
    upsert<T extends EAJUserUpsertArgs>(args: SelectSubset<T, EAJUserUpsertArgs<ExtArgs>>): Prisma__EAJUserClient<$Result.GetResult<Prisma.$EAJUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EAJUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserCountArgs} args - Arguments to filter EAJUsers to count.
     * @example
     * // Count the number of EAJUsers
     * const count = await prisma.eAJUser.count({
     *   where: {
     *     // ... the filter for the EAJUsers we want to count
     *   }
     * })
    **/
    count<T extends EAJUserCountArgs>(
      args?: Subset<T, EAJUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EAJUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EAJUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EAJUserAggregateArgs>(args: Subset<T, EAJUserAggregateArgs>): Prisma.PrismaPromise<GetEAJUserAggregateType<T>>

    /**
     * Group by EAJUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EAJUserGroupByArgs} args - Group by arguments.
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
      T extends EAJUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EAJUserGroupByArgs['orderBy'] }
        : { orderBy?: EAJUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EAJUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEAJUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EAJUser model
   */
  readonly fields: EAJUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EAJUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EAJUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EAJUser model
   */ 
  interface EAJUserFieldRefs {
    readonly id: FieldRef<"EAJUser", 'String'>
    readonly email: FieldRef<"EAJUser", 'String'>
    readonly name: FieldRef<"EAJUser", 'String'>
    readonly role: FieldRef<"EAJUser", 'UserRole'>
    readonly userType: FieldRef<"EAJUser", 'UserType'>
    readonly isDeleted: FieldRef<"EAJUser", 'Boolean'>
    readonly createdAt: FieldRef<"EAJUser", 'DateTime'>
    readonly createdId: FieldRef<"EAJUser", 'String'>
    readonly createdBy: FieldRef<"EAJUser", 'String'>
    readonly updatedAt: FieldRef<"EAJUser", 'DateTime'>
    readonly updatedId: FieldRef<"EAJUser", 'String'>
    readonly updatedBy: FieldRef<"EAJUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EAJUser findUnique
   */
  export type EAJUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter, which EAJUser to fetch.
     */
    where: EAJUserWhereUniqueInput
  }

  /**
   * EAJUser findUniqueOrThrow
   */
  export type EAJUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter, which EAJUser to fetch.
     */
    where: EAJUserWhereUniqueInput
  }

  /**
   * EAJUser findFirst
   */
  export type EAJUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter, which EAJUser to fetch.
     */
    where?: EAJUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EAJUsers to fetch.
     */
    orderBy?: EAJUserOrderByWithRelationInput | EAJUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EAJUsers.
     */
    cursor?: EAJUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EAJUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EAJUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EAJUsers.
     */
    distinct?: EAJUserScalarFieldEnum | EAJUserScalarFieldEnum[]
  }

  /**
   * EAJUser findFirstOrThrow
   */
  export type EAJUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter, which EAJUser to fetch.
     */
    where?: EAJUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EAJUsers to fetch.
     */
    orderBy?: EAJUserOrderByWithRelationInput | EAJUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EAJUsers.
     */
    cursor?: EAJUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EAJUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EAJUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EAJUsers.
     */
    distinct?: EAJUserScalarFieldEnum | EAJUserScalarFieldEnum[]
  }

  /**
   * EAJUser findMany
   */
  export type EAJUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter, which EAJUsers to fetch.
     */
    where?: EAJUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EAJUsers to fetch.
     */
    orderBy?: EAJUserOrderByWithRelationInput | EAJUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EAJUsers.
     */
    cursor?: EAJUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EAJUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EAJUsers.
     */
    skip?: number
    distinct?: EAJUserScalarFieldEnum | EAJUserScalarFieldEnum[]
  }

  /**
   * EAJUser create
   */
  export type EAJUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * The data needed to create a EAJUser.
     */
    data: XOR<EAJUserCreateInput, EAJUserUncheckedCreateInput>
  }

  /**
   * EAJUser createMany
   */
  export type EAJUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EAJUsers.
     */
    data: EAJUserCreateManyInput | EAJUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EAJUser createManyAndReturn
   */
  export type EAJUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EAJUsers.
     */
    data: EAJUserCreateManyInput | EAJUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EAJUser update
   */
  export type EAJUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * The data needed to update a EAJUser.
     */
    data: XOR<EAJUserUpdateInput, EAJUserUncheckedUpdateInput>
    /**
     * Choose, which EAJUser to update.
     */
    where: EAJUserWhereUniqueInput
  }

  /**
   * EAJUser updateMany
   */
  export type EAJUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EAJUsers.
     */
    data: XOR<EAJUserUpdateManyMutationInput, EAJUserUncheckedUpdateManyInput>
    /**
     * Filter which EAJUsers to update
     */
    where?: EAJUserWhereInput
  }

  /**
   * EAJUser upsert
   */
  export type EAJUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * The filter to search for the EAJUser to update in case it exists.
     */
    where: EAJUserWhereUniqueInput
    /**
     * In case the EAJUser found by the `where` argument doesn't exist, create a new EAJUser with this data.
     */
    create: XOR<EAJUserCreateInput, EAJUserUncheckedCreateInput>
    /**
     * In case the EAJUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EAJUserUpdateInput, EAJUserUncheckedUpdateInput>
  }

  /**
   * EAJUser delete
   */
  export type EAJUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
    /**
     * Filter which EAJUser to delete.
     */
    where: EAJUserWhereUniqueInput
  }

  /**
   * EAJUser deleteMany
   */
  export type EAJUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EAJUsers to delete
     */
    where?: EAJUserWhereInput
  }

  /**
   * EAJUser without action
   */
  export type EAJUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EAJUser
     */
    select?: EAJUserSelect<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
  }


  /**
   * Model Ki
   */

  export type AggregateKi = {
    _count: KiCountAggregateOutputType | null
    _avg: KiAvgAggregateOutputType | null
    _sum: KiSumAggregateOutputType | null
    _min: KiMinAggregateOutputType | null
    _max: KiMaxAggregateOutputType | null
  }

  export type KiAvgAggregateOutputType = {
    year: number | null
    month: number | null
  }

  export type KiSumAggregateOutputType = {
    year: number | null
    month: number | null
  }

  export type KiMinAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    completed: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type KiMaxAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    completed: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type KiCountAggregateOutputType = {
    id: number
    year: number
    month: number
    completed: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type KiAvgAggregateInputType = {
    year?: true
    month?: true
  }

  export type KiSumAggregateInputType = {
    year?: true
    month?: true
  }

  export type KiMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    completed?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type KiMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    completed?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type KiCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    completed?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type KiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ki to aggregate.
     */
    where?: KiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kis to fetch.
     */
    orderBy?: KiOrderByWithRelationInput | KiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kis
    **/
    _count?: true | KiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KiMaxAggregateInputType
  }

  export type GetKiAggregateType<T extends KiAggregateArgs> = {
        [P in keyof T & keyof AggregateKi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKi[P]>
      : GetScalarType<T[P], AggregateKi[P]>
  }




  export type KiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KiWhereInput
    orderBy?: KiOrderByWithAggregationInput | KiOrderByWithAggregationInput[]
    by: KiScalarFieldEnum[] | KiScalarFieldEnum
    having?: KiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KiCountAggregateInputType | true
    _avg?: KiAvgAggregateInputType
    _sum?: KiSumAggregateInputType
    _min?: KiMinAggregateInputType
    _max?: KiMaxAggregateInputType
  }

  export type KiGroupByOutputType = {
    id: string
    year: number
    month: number
    completed: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: KiCountAggregateOutputType | null
    _avg: KiAvgAggregateOutputType | null
    _sum: KiSumAggregateOutputType | null
    _min: KiMinAggregateOutputType | null
    _max: KiMaxAggregateOutputType | null
  }

  type GetKiGroupByPayload<T extends KiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KiGroupByOutputType[P]>
            : GetScalarType<T[P], KiGroupByOutputType[P]>
        }
      >
    >


  export type KiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    completed?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    ProjectKis?: boolean | Ki$ProjectKisArgs<ExtArgs>
    AssetKis?: boolean | Ki$AssetKisArgs<ExtArgs>
    _count?: boolean | KiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ki"]>

  export type KiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    completed?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["ki"]>

  export type KiSelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    completed?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type KiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectKis?: boolean | Ki$ProjectKisArgs<ExtArgs>
    AssetKis?: boolean | Ki$AssetKisArgs<ExtArgs>
    _count?: boolean | KiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ki"
    objects: {
      ProjectKis: Prisma.$ProjectKiPayload<ExtArgs>[]
      AssetKis: Prisma.$AssetKiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      month: number
      completed: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["ki"]>
    composites: {}
  }

  type KiGetPayload<S extends boolean | null | undefined | KiDefaultArgs> = $Result.GetResult<Prisma.$KiPayload, S>

  type KiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KiCountAggregateInputType | true
    }

  export interface KiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ki'], meta: { name: 'Ki' } }
    /**
     * Find zero or one Ki that matches the filter.
     * @param {KiFindUniqueArgs} args - Arguments to find a Ki
     * @example
     * // Get one Ki
     * const ki = await prisma.ki.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KiFindUniqueArgs>(args: SelectSubset<T, KiFindUniqueArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ki that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KiFindUniqueOrThrowArgs} args - Arguments to find a Ki
     * @example
     * // Get one Ki
     * const ki = await prisma.ki.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KiFindUniqueOrThrowArgs>(args: SelectSubset<T, KiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ki that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiFindFirstArgs} args - Arguments to find a Ki
     * @example
     * // Get one Ki
     * const ki = await prisma.ki.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KiFindFirstArgs>(args?: SelectSubset<T, KiFindFirstArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ki that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiFindFirstOrThrowArgs} args - Arguments to find a Ki
     * @example
     * // Get one Ki
     * const ki = await prisma.ki.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KiFindFirstOrThrowArgs>(args?: SelectSubset<T, KiFindFirstOrThrowArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Kis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kis
     * const kis = await prisma.ki.findMany()
     * 
     * // Get first 10 Kis
     * const kis = await prisma.ki.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kiWithIdOnly = await prisma.ki.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KiFindManyArgs>(args?: SelectSubset<T, KiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ki.
     * @param {KiCreateArgs} args - Arguments to create a Ki.
     * @example
     * // Create one Ki
     * const Ki = await prisma.ki.create({
     *   data: {
     *     // ... data to create a Ki
     *   }
     * })
     * 
     */
    create<T extends KiCreateArgs>(args: SelectSubset<T, KiCreateArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Kis.
     * @param {KiCreateManyArgs} args - Arguments to create many Kis.
     * @example
     * // Create many Kis
     * const ki = await prisma.ki.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KiCreateManyArgs>(args?: SelectSubset<T, KiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kis and returns the data saved in the database.
     * @param {KiCreateManyAndReturnArgs} args - Arguments to create many Kis.
     * @example
     * // Create many Kis
     * const ki = await prisma.ki.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kis and only return the `id`
     * const kiWithIdOnly = await prisma.ki.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KiCreateManyAndReturnArgs>(args?: SelectSubset<T, KiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ki.
     * @param {KiDeleteArgs} args - Arguments to delete one Ki.
     * @example
     * // Delete one Ki
     * const Ki = await prisma.ki.delete({
     *   where: {
     *     // ... filter to delete one Ki
     *   }
     * })
     * 
     */
    delete<T extends KiDeleteArgs>(args: SelectSubset<T, KiDeleteArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ki.
     * @param {KiUpdateArgs} args - Arguments to update one Ki.
     * @example
     * // Update one Ki
     * const ki = await prisma.ki.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KiUpdateArgs>(args: SelectSubset<T, KiUpdateArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Kis.
     * @param {KiDeleteManyArgs} args - Arguments to filter Kis to delete.
     * @example
     * // Delete a few Kis
     * const { count } = await prisma.ki.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KiDeleteManyArgs>(args?: SelectSubset<T, KiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kis
     * const ki = await prisma.ki.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KiUpdateManyArgs>(args: SelectSubset<T, KiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ki.
     * @param {KiUpsertArgs} args - Arguments to update or create a Ki.
     * @example
     * // Update or create a Ki
     * const ki = await prisma.ki.upsert({
     *   create: {
     *     // ... data to create a Ki
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ki we want to update
     *   }
     * })
     */
    upsert<T extends KiUpsertArgs>(args: SelectSubset<T, KiUpsertArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Kis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiCountArgs} args - Arguments to filter Kis to count.
     * @example
     * // Count the number of Kis
     * const count = await prisma.ki.count({
     *   where: {
     *     // ... the filter for the Kis we want to count
     *   }
     * })
    **/
    count<T extends KiCountArgs>(
      args?: Subset<T, KiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KiAggregateArgs>(args: Subset<T, KiAggregateArgs>): Prisma.PrismaPromise<GetKiAggregateType<T>>

    /**
     * Group by Ki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KiGroupByArgs} args - Group by arguments.
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
      T extends KiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KiGroupByArgs['orderBy'] }
        : { orderBy?: KiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ki model
   */
  readonly fields: KiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ki.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectKis<T extends Ki$ProjectKisArgs<ExtArgs> = {}>(args?: Subset<T, Ki$ProjectKisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findMany"> | Null>
    AssetKis<T extends Ki$AssetKisArgs<ExtArgs> = {}>(args?: Subset<T, Ki$AssetKisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ki model
   */ 
  interface KiFieldRefs {
    readonly id: FieldRef<"Ki", 'String'>
    readonly year: FieldRef<"Ki", 'Int'>
    readonly month: FieldRef<"Ki", 'Int'>
    readonly completed: FieldRef<"Ki", 'Boolean'>
    readonly createdAt: FieldRef<"Ki", 'DateTime'>
    readonly createdId: FieldRef<"Ki", 'String'>
    readonly createdBy: FieldRef<"Ki", 'String'>
    readonly updatedAt: FieldRef<"Ki", 'DateTime'>
    readonly updatedId: FieldRef<"Ki", 'String'>
    readonly updatedBy: FieldRef<"Ki", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ki findUnique
   */
  export type KiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter, which Ki to fetch.
     */
    where: KiWhereUniqueInput
  }

  /**
   * Ki findUniqueOrThrow
   */
  export type KiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter, which Ki to fetch.
     */
    where: KiWhereUniqueInput
  }

  /**
   * Ki findFirst
   */
  export type KiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter, which Ki to fetch.
     */
    where?: KiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kis to fetch.
     */
    orderBy?: KiOrderByWithRelationInput | KiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kis.
     */
    cursor?: KiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kis.
     */
    distinct?: KiScalarFieldEnum | KiScalarFieldEnum[]
  }

  /**
   * Ki findFirstOrThrow
   */
  export type KiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter, which Ki to fetch.
     */
    where?: KiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kis to fetch.
     */
    orderBy?: KiOrderByWithRelationInput | KiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kis.
     */
    cursor?: KiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kis.
     */
    distinct?: KiScalarFieldEnum | KiScalarFieldEnum[]
  }

  /**
   * Ki findMany
   */
  export type KiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter, which Kis to fetch.
     */
    where?: KiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kis to fetch.
     */
    orderBy?: KiOrderByWithRelationInput | KiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kis.
     */
    cursor?: KiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kis.
     */
    skip?: number
    distinct?: KiScalarFieldEnum | KiScalarFieldEnum[]
  }

  /**
   * Ki create
   */
  export type KiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * The data needed to create a Ki.
     */
    data: XOR<KiCreateInput, KiUncheckedCreateInput>
  }

  /**
   * Ki createMany
   */
  export type KiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kis.
     */
    data: KiCreateManyInput | KiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ki createManyAndReturn
   */
  export type KiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Kis.
     */
    data: KiCreateManyInput | KiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ki update
   */
  export type KiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * The data needed to update a Ki.
     */
    data: XOR<KiUpdateInput, KiUncheckedUpdateInput>
    /**
     * Choose, which Ki to update.
     */
    where: KiWhereUniqueInput
  }

  /**
   * Ki updateMany
   */
  export type KiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kis.
     */
    data: XOR<KiUpdateManyMutationInput, KiUncheckedUpdateManyInput>
    /**
     * Filter which Kis to update
     */
    where?: KiWhereInput
  }

  /**
   * Ki upsert
   */
  export type KiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * The filter to search for the Ki to update in case it exists.
     */
    where: KiWhereUniqueInput
    /**
     * In case the Ki found by the `where` argument doesn't exist, create a new Ki with this data.
     */
    create: XOR<KiCreateInput, KiUncheckedCreateInput>
    /**
     * In case the Ki was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KiUpdateInput, KiUncheckedUpdateInput>
  }

  /**
   * Ki delete
   */
  export type KiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
    /**
     * Filter which Ki to delete.
     */
    where: KiWhereUniqueInput
  }

  /**
   * Ki deleteMany
   */
  export type KiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kis to delete
     */
    where?: KiWhereInput
  }

  /**
   * Ki.ProjectKis
   */
  export type Ki$ProjectKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    where?: ProjectKiWhereInput
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    cursor?: ProjectKiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectKiScalarFieldEnum | ProjectKiScalarFieldEnum[]
  }

  /**
   * Ki.AssetKis
   */
  export type Ki$AssetKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    where?: AssetKiWhereInput
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    cursor?: AssetKiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetKiScalarFieldEnum | AssetKiScalarFieldEnum[]
  }

  /**
   * Ki without action
   */
  export type KiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ki
     */
    select?: KiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KiInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    totalUnit: number | null
    totalAmount: number | null
    unitAmount: number | null
    dividendYield: number | null
    fullOccupancyYield: number | null
    totalKubun: number | null
    residenceKubun: number | null
  }

  export type ProjectSumAggregateOutputType = {
    totalUnit: number | null
    totalAmount: bigint | null
    unitAmount: number | null
    dividendYield: number | null
    fullOccupancyYield: number | null
    totalKubun: number | null
    residenceKubun: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    sbimpId: string | null
    name: string | null
    shortName: string | null
    totalUnit: number | null
    totalAmount: bigint | null
    unitAmount: number | null
    trustTermStart: Date | null
    trustTermEnd: Date | null
    dividendYield: number | null
    fullOccupancyYield: number | null
    totalKubun: number | null
    residenceKubun: number | null
    kamiyachoFlag: boolean | null
    mlspcFlag: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    sbimpId: string | null
    name: string | null
    shortName: string | null
    totalUnit: number | null
    totalAmount: bigint | null
    unitAmount: number | null
    trustTermStart: Date | null
    trustTermEnd: Date | null
    dividendYield: number | null
    fullOccupancyYield: number | null
    totalKubun: number | null
    residenceKubun: number | null
    kamiyachoFlag: boolean | null
    mlspcFlag: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    sbimpId: number
    name: number
    shortName: number
    totalUnit: number
    totalAmount: number
    unitAmount: number
    trustTermStart: number
    trustTermEnd: number
    dividendYield: number
    fullOccupancyYield: number
    totalKubun: number
    residenceKubun: number
    kamiyachoFlag: number
    mlspcFlag: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    totalUnit?: true
    totalAmount?: true
    unitAmount?: true
    dividendYield?: true
    fullOccupancyYield?: true
    totalKubun?: true
    residenceKubun?: true
  }

  export type ProjectSumAggregateInputType = {
    totalUnit?: true
    totalAmount?: true
    unitAmount?: true
    dividendYield?: true
    fullOccupancyYield?: true
    totalKubun?: true
    residenceKubun?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    shortName?: true
    totalUnit?: true
    totalAmount?: true
    unitAmount?: true
    trustTermStart?: true
    trustTermEnd?: true
    dividendYield?: true
    fullOccupancyYield?: true
    totalKubun?: true
    residenceKubun?: true
    kamiyachoFlag?: true
    mlspcFlag?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    shortName?: true
    totalUnit?: true
    totalAmount?: true
    unitAmount?: true
    trustTermStart?: true
    trustTermEnd?: true
    dividendYield?: true
    fullOccupancyYield?: true
    totalKubun?: true
    residenceKubun?: true
    kamiyachoFlag?: true
    mlspcFlag?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    shortName?: true
    totalUnit?: true
    totalAmount?: true
    unitAmount?: true
    trustTermStart?: true
    trustTermEnd?: true
    dividendYield?: true
    fullOccupancyYield?: true
    totalKubun?: true
    residenceKubun?: true
    kamiyachoFlag?: true
    mlspcFlag?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint
    unitAmount: number
    trustTermStart: Date
    trustTermEnd: Date
    dividendYield: number
    fullOccupancyYield: number
    totalKubun: number
    residenceKubun: number
    kamiyachoFlag: boolean
    mlspcFlag: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    shortName?: boolean
    totalUnit?: boolean
    totalAmount?: boolean
    unitAmount?: boolean
    trustTermStart?: boolean
    trustTermEnd?: boolean
    dividendYield?: boolean
    fullOccupancyYield?: boolean
    totalKubun?: boolean
    residenceKubun?: boolean
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    ProjectKis?: boolean | Project$ProjectKisArgs<ExtArgs>
    Assets?: boolean | Project$AssetsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    shortName?: boolean
    totalUnit?: boolean
    totalAmount?: boolean
    unitAmount?: boolean
    trustTermStart?: boolean
    trustTermEnd?: boolean
    dividendYield?: boolean
    fullOccupancyYield?: boolean
    totalKubun?: boolean
    residenceKubun?: boolean
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    shortName?: boolean
    totalUnit?: boolean
    totalAmount?: boolean
    unitAmount?: boolean
    trustTermStart?: boolean
    trustTermEnd?: boolean
    dividendYield?: boolean
    fullOccupancyYield?: boolean
    totalKubun?: boolean
    residenceKubun?: boolean
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectKis?: boolean | Project$ProjectKisArgs<ExtArgs>
    Assets?: boolean | Project$AssetsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      ProjectKis: Prisma.$ProjectKiPayload<ExtArgs>[]
      Assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sbimpId: string
      name: string
      shortName: string
      totalUnit: number
      totalAmount: bigint
      unitAmount: number
      trustTermStart: Date
      trustTermEnd: Date
      dividendYield: number
      fullOccupancyYield: number
      totalKubun: number
      residenceKubun: number
      kamiyachoFlag: boolean
      mlspcFlag: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectKis<T extends Project$ProjectKisArgs<ExtArgs> = {}>(args?: Subset<T, Project$ProjectKisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findMany"> | Null>
    Assets<T extends Project$AssetsArgs<ExtArgs> = {}>(args?: Subset<T, Project$AssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly sbimpId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly shortName: FieldRef<"Project", 'String'>
    readonly totalUnit: FieldRef<"Project", 'Int'>
    readonly totalAmount: FieldRef<"Project", 'BigInt'>
    readonly unitAmount: FieldRef<"Project", 'Int'>
    readonly trustTermStart: FieldRef<"Project", 'DateTime'>
    readonly trustTermEnd: FieldRef<"Project", 'DateTime'>
    readonly dividendYield: FieldRef<"Project", 'Float'>
    readonly fullOccupancyYield: FieldRef<"Project", 'Float'>
    readonly totalKubun: FieldRef<"Project", 'Int'>
    readonly residenceKubun: FieldRef<"Project", 'Int'>
    readonly kamiyachoFlag: FieldRef<"Project", 'Boolean'>
    readonly mlspcFlag: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly createdId: FieldRef<"Project", 'String'>
    readonly createdBy: FieldRef<"Project", 'String'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly updatedId: FieldRef<"Project", 'String'>
    readonly updatedBy: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.ProjectKis
   */
  export type Project$ProjectKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    where?: ProjectKiWhereInput
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    cursor?: ProjectKiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectKiScalarFieldEnum | ProjectKiScalarFieldEnum[]
  }

  /**
   * Project.Assets
   */
  export type Project$AssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectKi
   */

  export type AggregateProjectKi = {
    _count: ProjectKiCountAggregateOutputType | null
    _avg: ProjectKiAvgAggregateOutputType | null
    _sum: ProjectKiSumAggregateOutputType | null
    _min: ProjectKiMinAggregateOutputType | null
    _max: ProjectKiMaxAggregateOutputType | null
  }

  export type ProjectKiAvgAggregateOutputType = {
    projectKi: number | null
  }

  export type ProjectKiSumAggregateOutputType = {
    projectKi: number | null
  }

  export type ProjectKiMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    kiId: string | null
    projectKi: number | null
    paymentDate: Date | null
    reportDate: Date | null
    topic: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type ProjectKiMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    kiId: string | null
    projectKi: number | null
    paymentDate: Date | null
    reportDate: Date | null
    topic: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type ProjectKiCountAggregateOutputType = {
    id: number
    projectId: number
    kiId: number
    projectKi: number
    paymentDate: number
    reportDate: number
    topic: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type ProjectKiAvgAggregateInputType = {
    projectKi?: true
  }

  export type ProjectKiSumAggregateInputType = {
    projectKi?: true
  }

  export type ProjectKiMinAggregateInputType = {
    id?: true
    projectId?: true
    kiId?: true
    projectKi?: true
    paymentDate?: true
    reportDate?: true
    topic?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type ProjectKiMaxAggregateInputType = {
    id?: true
    projectId?: true
    kiId?: true
    projectKi?: true
    paymentDate?: true
    reportDate?: true
    topic?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type ProjectKiCountAggregateInputType = {
    id?: true
    projectId?: true
    kiId?: true
    projectKi?: true
    paymentDate?: true
    reportDate?: true
    topic?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type ProjectKiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectKi to aggregate.
     */
    where?: ProjectKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKis to fetch.
     */
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectKis
    **/
    _count?: true | ProjectKiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectKiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectKiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectKiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectKiMaxAggregateInputType
  }

  export type GetProjectKiAggregateType<T extends ProjectKiAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectKi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectKi[P]>
      : GetScalarType<T[P], AggregateProjectKi[P]>
  }




  export type ProjectKiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectKiWhereInput
    orderBy?: ProjectKiOrderByWithAggregationInput | ProjectKiOrderByWithAggregationInput[]
    by: ProjectKiScalarFieldEnum[] | ProjectKiScalarFieldEnum
    having?: ProjectKiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectKiCountAggregateInputType | true
    _avg?: ProjectKiAvgAggregateInputType
    _sum?: ProjectKiSumAggregateInputType
    _min?: ProjectKiMinAggregateInputType
    _max?: ProjectKiMaxAggregateInputType
  }

  export type ProjectKiGroupByOutputType = {
    id: string
    projectId: string
    kiId: string
    projectKi: number
    paymentDate: Date
    reportDate: Date
    topic: string
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: ProjectKiCountAggregateOutputType | null
    _avg: ProjectKiAvgAggregateOutputType | null
    _sum: ProjectKiSumAggregateOutputType | null
    _min: ProjectKiMinAggregateOutputType | null
    _max: ProjectKiMaxAggregateOutputType | null
  }

  type GetProjectKiGroupByPayload<T extends ProjectKiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectKiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectKiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectKiGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectKiGroupByOutputType[P]>
        }
      >
    >


  export type ProjectKiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    kiId?: boolean
    projectKi?: boolean
    paymentDate?: boolean
    reportDate?: boolean
    topic?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
    CustomerFunds?: boolean | ProjectKi$CustomerFundsArgs<ExtArgs>
    _count?: boolean | ProjectKiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectKi"]>

  export type ProjectKiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    kiId?: boolean
    projectKi?: boolean
    paymentDate?: boolean
    reportDate?: boolean
    topic?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectKi"]>

  export type ProjectKiSelectScalar = {
    id?: boolean
    projectId?: boolean
    kiId?: boolean
    projectKi?: boolean
    paymentDate?: boolean
    reportDate?: boolean
    topic?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type ProjectKiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
    CustomerFunds?: boolean | ProjectKi$CustomerFundsArgs<ExtArgs>
    _count?: boolean | ProjectKiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectKiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }

  export type $ProjectKiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectKi"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>
      Ki: Prisma.$KiPayload<ExtArgs>
      CustomerFunds: Prisma.$CustomerFundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      kiId: string
      projectKi: number
      paymentDate: Date
      reportDate: Date
      topic: string
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["projectKi"]>
    composites: {}
  }

  type ProjectKiGetPayload<S extends boolean | null | undefined | ProjectKiDefaultArgs> = $Result.GetResult<Prisma.$ProjectKiPayload, S>

  type ProjectKiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectKiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectKiCountAggregateInputType | true
    }

  export interface ProjectKiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectKi'], meta: { name: 'ProjectKi' } }
    /**
     * Find zero or one ProjectKi that matches the filter.
     * @param {ProjectKiFindUniqueArgs} args - Arguments to find a ProjectKi
     * @example
     * // Get one ProjectKi
     * const projectKi = await prisma.projectKi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectKiFindUniqueArgs>(args: SelectSubset<T, ProjectKiFindUniqueArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectKi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectKiFindUniqueOrThrowArgs} args - Arguments to find a ProjectKi
     * @example
     * // Get one ProjectKi
     * const projectKi = await prisma.projectKi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectKiFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectKiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectKi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiFindFirstArgs} args - Arguments to find a ProjectKi
     * @example
     * // Get one ProjectKi
     * const projectKi = await prisma.projectKi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectKiFindFirstArgs>(args?: SelectSubset<T, ProjectKiFindFirstArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectKi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiFindFirstOrThrowArgs} args - Arguments to find a ProjectKi
     * @example
     * // Get one ProjectKi
     * const projectKi = await prisma.projectKi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectKiFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectKiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectKis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectKis
     * const projectKis = await prisma.projectKi.findMany()
     * 
     * // Get first 10 ProjectKis
     * const projectKis = await prisma.projectKi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectKiWithIdOnly = await prisma.projectKi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectKiFindManyArgs>(args?: SelectSubset<T, ProjectKiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectKi.
     * @param {ProjectKiCreateArgs} args - Arguments to create a ProjectKi.
     * @example
     * // Create one ProjectKi
     * const ProjectKi = await prisma.projectKi.create({
     *   data: {
     *     // ... data to create a ProjectKi
     *   }
     * })
     * 
     */
    create<T extends ProjectKiCreateArgs>(args: SelectSubset<T, ProjectKiCreateArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectKis.
     * @param {ProjectKiCreateManyArgs} args - Arguments to create many ProjectKis.
     * @example
     * // Create many ProjectKis
     * const projectKi = await prisma.projectKi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectKiCreateManyArgs>(args?: SelectSubset<T, ProjectKiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectKis and returns the data saved in the database.
     * @param {ProjectKiCreateManyAndReturnArgs} args - Arguments to create many ProjectKis.
     * @example
     * // Create many ProjectKis
     * const projectKi = await prisma.projectKi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectKis and only return the `id`
     * const projectKiWithIdOnly = await prisma.projectKi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectKiCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectKiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectKi.
     * @param {ProjectKiDeleteArgs} args - Arguments to delete one ProjectKi.
     * @example
     * // Delete one ProjectKi
     * const ProjectKi = await prisma.projectKi.delete({
     *   where: {
     *     // ... filter to delete one ProjectKi
     *   }
     * })
     * 
     */
    delete<T extends ProjectKiDeleteArgs>(args: SelectSubset<T, ProjectKiDeleteArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectKi.
     * @param {ProjectKiUpdateArgs} args - Arguments to update one ProjectKi.
     * @example
     * // Update one ProjectKi
     * const projectKi = await prisma.projectKi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectKiUpdateArgs>(args: SelectSubset<T, ProjectKiUpdateArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectKis.
     * @param {ProjectKiDeleteManyArgs} args - Arguments to filter ProjectKis to delete.
     * @example
     * // Delete a few ProjectKis
     * const { count } = await prisma.projectKi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectKiDeleteManyArgs>(args?: SelectSubset<T, ProjectKiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectKis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectKis
     * const projectKi = await prisma.projectKi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectKiUpdateManyArgs>(args: SelectSubset<T, ProjectKiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectKi.
     * @param {ProjectKiUpsertArgs} args - Arguments to update or create a ProjectKi.
     * @example
     * // Update or create a ProjectKi
     * const projectKi = await prisma.projectKi.upsert({
     *   create: {
     *     // ... data to create a ProjectKi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectKi we want to update
     *   }
     * })
     */
    upsert<T extends ProjectKiUpsertArgs>(args: SelectSubset<T, ProjectKiUpsertArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectKis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiCountArgs} args - Arguments to filter ProjectKis to count.
     * @example
     * // Count the number of ProjectKis
     * const count = await prisma.projectKi.count({
     *   where: {
     *     // ... the filter for the ProjectKis we want to count
     *   }
     * })
    **/
    count<T extends ProjectKiCountArgs>(
      args?: Subset<T, ProjectKiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectKiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectKi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectKiAggregateArgs>(args: Subset<T, ProjectKiAggregateArgs>): Prisma.PrismaPromise<GetProjectKiAggregateType<T>>

    /**
     * Group by ProjectKi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKiGroupByArgs} args - Group by arguments.
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
      T extends ProjectKiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectKiGroupByArgs['orderBy'] }
        : { orderBy?: ProjectKiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectKiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectKiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectKi model
   */
  readonly fields: ProjectKiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectKi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectKiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Ki<T extends KiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KiDefaultArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    CustomerFunds<T extends ProjectKi$CustomerFundsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectKi$CustomerFundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProjectKi model
   */ 
  interface ProjectKiFieldRefs {
    readonly id: FieldRef<"ProjectKi", 'String'>
    readonly projectId: FieldRef<"ProjectKi", 'String'>
    readonly kiId: FieldRef<"ProjectKi", 'String'>
    readonly projectKi: FieldRef<"ProjectKi", 'Int'>
    readonly paymentDate: FieldRef<"ProjectKi", 'DateTime'>
    readonly reportDate: FieldRef<"ProjectKi", 'DateTime'>
    readonly topic: FieldRef<"ProjectKi", 'String'>
    readonly createdAt: FieldRef<"ProjectKi", 'DateTime'>
    readonly createdId: FieldRef<"ProjectKi", 'String'>
    readonly createdBy: FieldRef<"ProjectKi", 'String'>
    readonly updatedAt: FieldRef<"ProjectKi", 'DateTime'>
    readonly updatedId: FieldRef<"ProjectKi", 'String'>
    readonly updatedBy: FieldRef<"ProjectKi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectKi findUnique
   */
  export type ProjectKiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter, which ProjectKi to fetch.
     */
    where: ProjectKiWhereUniqueInput
  }

  /**
   * ProjectKi findUniqueOrThrow
   */
  export type ProjectKiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter, which ProjectKi to fetch.
     */
    where: ProjectKiWhereUniqueInput
  }

  /**
   * ProjectKi findFirst
   */
  export type ProjectKiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter, which ProjectKi to fetch.
     */
    where?: ProjectKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKis to fetch.
     */
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectKis.
     */
    cursor?: ProjectKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectKis.
     */
    distinct?: ProjectKiScalarFieldEnum | ProjectKiScalarFieldEnum[]
  }

  /**
   * ProjectKi findFirstOrThrow
   */
  export type ProjectKiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter, which ProjectKi to fetch.
     */
    where?: ProjectKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKis to fetch.
     */
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectKis.
     */
    cursor?: ProjectKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectKis.
     */
    distinct?: ProjectKiScalarFieldEnum | ProjectKiScalarFieldEnum[]
  }

  /**
   * ProjectKi findMany
   */
  export type ProjectKiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter, which ProjectKis to fetch.
     */
    where?: ProjectKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKis to fetch.
     */
    orderBy?: ProjectKiOrderByWithRelationInput | ProjectKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectKis.
     */
    cursor?: ProjectKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKis.
     */
    skip?: number
    distinct?: ProjectKiScalarFieldEnum | ProjectKiScalarFieldEnum[]
  }

  /**
   * ProjectKi create
   */
  export type ProjectKiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectKi.
     */
    data: XOR<ProjectKiCreateInput, ProjectKiUncheckedCreateInput>
  }

  /**
   * ProjectKi createMany
   */
  export type ProjectKiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectKis.
     */
    data: ProjectKiCreateManyInput | ProjectKiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectKi createManyAndReturn
   */
  export type ProjectKiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectKis.
     */
    data: ProjectKiCreateManyInput | ProjectKiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectKi update
   */
  export type ProjectKiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectKi.
     */
    data: XOR<ProjectKiUpdateInput, ProjectKiUncheckedUpdateInput>
    /**
     * Choose, which ProjectKi to update.
     */
    where: ProjectKiWhereUniqueInput
  }

  /**
   * ProjectKi updateMany
   */
  export type ProjectKiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectKis.
     */
    data: XOR<ProjectKiUpdateManyMutationInput, ProjectKiUncheckedUpdateManyInput>
    /**
     * Filter which ProjectKis to update
     */
    where?: ProjectKiWhereInput
  }

  /**
   * ProjectKi upsert
   */
  export type ProjectKiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectKi to update in case it exists.
     */
    where: ProjectKiWhereUniqueInput
    /**
     * In case the ProjectKi found by the `where` argument doesn't exist, create a new ProjectKi with this data.
     */
    create: XOR<ProjectKiCreateInput, ProjectKiUncheckedCreateInput>
    /**
     * In case the ProjectKi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectKiUpdateInput, ProjectKiUncheckedUpdateInput>
  }

  /**
   * ProjectKi delete
   */
  export type ProjectKiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
    /**
     * Filter which ProjectKi to delete.
     */
    where: ProjectKiWhereUniqueInput
  }

  /**
   * ProjectKi deleteMany
   */
  export type ProjectKiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectKis to delete
     */
    where?: ProjectKiWhereInput
  }

  /**
   * ProjectKi.CustomerFunds
   */
  export type ProjectKi$CustomerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    where?: CustomerFundWhereInput
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    cursor?: CustomerFundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerFundScalarFieldEnum | CustomerFundScalarFieldEnum[]
  }

  /**
   * ProjectKi without action
   */
  export type ProjectKiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKi
     */
    select?: ProjectKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectKiInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    address: string | null
    registeredAddress: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    address: string | null
    registeredAddress: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    address: number
    registeredAddress: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    address?: true
    registeredAddress?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    address?: true
    registeredAddress?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    address?: true
    registeredAddress?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    projectId: string
    name: string
    address: string
    registeredAddress: string
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    address?: boolean
    registeredAddress?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    AssetKis?: boolean | Asset$AssetKisArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    address?: boolean
    registeredAddress?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    address?: boolean
    registeredAddress?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    AssetKis?: boolean | Asset$AssetKisArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>
      AssetKis: Prisma.$AssetKiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      address: string
      registeredAddress: string
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssetKis<T extends Asset$AssetKisArgs<ExtArgs> = {}>(args?: Subset<T, Asset$AssetKisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Asset model
   */ 
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly projectId: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly address: FieldRef<"Asset", 'String'>
    readonly registeredAddress: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly createdId: FieldRef<"Asset", 'String'>
    readonly createdBy: FieldRef<"Asset", 'String'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedId: FieldRef<"Asset", 'String'>
    readonly updatedBy: FieldRef<"Asset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
  }

  /**
   * Asset.AssetKis
   */
  export type Asset$AssetKisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    where?: AssetKiWhereInput
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    cursor?: AssetKiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetKiScalarFieldEnum | AssetKiScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model AssetKi
   */

  export type AggregateAssetKi = {
    _count: AssetKiCountAggregateOutputType | null
    _avg: AssetKiAvgAggregateOutputType | null
    _sum: AssetKiSumAggregateOutputType | null
    _min: AssetKiMinAggregateOutputType | null
    _max: AssetKiMaxAggregateOutputType | null
  }

  export type AssetKiAvgAggregateOutputType = {
    projectKi: number | null
  }

  export type AssetKiSumAggregateOutputType = {
    projectKi: number | null
  }

  export type AssetKiMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    kiId: string | null
    projectKi: number | null
    situation: string | null
    photoDate: Date | null
    photo1: string | null
    photo2: string | null
    photo3: string | null
    photo4: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type AssetKiMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    kiId: string | null
    projectKi: number | null
    situation: string | null
    photoDate: Date | null
    photo1: string | null
    photo2: string | null
    photo3: string | null
    photo4: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type AssetKiCountAggregateOutputType = {
    id: number
    assetId: number
    kiId: number
    projectKi: number
    situation: number
    photoDate: number
    photo1: number
    photo2: number
    photo3: number
    photo4: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type AssetKiAvgAggregateInputType = {
    projectKi?: true
  }

  export type AssetKiSumAggregateInputType = {
    projectKi?: true
  }

  export type AssetKiMinAggregateInputType = {
    id?: true
    assetId?: true
    kiId?: true
    projectKi?: true
    situation?: true
    photoDate?: true
    photo1?: true
    photo2?: true
    photo3?: true
    photo4?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type AssetKiMaxAggregateInputType = {
    id?: true
    assetId?: true
    kiId?: true
    projectKi?: true
    situation?: true
    photoDate?: true
    photo1?: true
    photo2?: true
    photo3?: true
    photo4?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type AssetKiCountAggregateInputType = {
    id?: true
    assetId?: true
    kiId?: true
    projectKi?: true
    situation?: true
    photoDate?: true
    photo1?: true
    photo2?: true
    photo3?: true
    photo4?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type AssetKiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetKi to aggregate.
     */
    where?: AssetKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetKis to fetch.
     */
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetKis
    **/
    _count?: true | AssetKiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetKiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetKiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetKiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetKiMaxAggregateInputType
  }

  export type GetAssetKiAggregateType<T extends AssetKiAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetKi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetKi[P]>
      : GetScalarType<T[P], AggregateAssetKi[P]>
  }




  export type AssetKiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetKiWhereInput
    orderBy?: AssetKiOrderByWithAggregationInput | AssetKiOrderByWithAggregationInput[]
    by: AssetKiScalarFieldEnum[] | AssetKiScalarFieldEnum
    having?: AssetKiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetKiCountAggregateInputType | true
    _avg?: AssetKiAvgAggregateInputType
    _sum?: AssetKiSumAggregateInputType
    _min?: AssetKiMinAggregateInputType
    _max?: AssetKiMaxAggregateInputType
  }

  export type AssetKiGroupByOutputType = {
    id: string
    assetId: string
    kiId: string
    projectKi: number
    situation: string
    photoDate: Date
    photo1: string | null
    photo2: string | null
    photo3: string | null
    photo4: string | null
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: AssetKiCountAggregateOutputType | null
    _avg: AssetKiAvgAggregateOutputType | null
    _sum: AssetKiSumAggregateOutputType | null
    _min: AssetKiMinAggregateOutputType | null
    _max: AssetKiMaxAggregateOutputType | null
  }

  type GetAssetKiGroupByPayload<T extends AssetKiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetKiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetKiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetKiGroupByOutputType[P]>
            : GetScalarType<T[P], AssetKiGroupByOutputType[P]>
        }
      >
    >


  export type AssetKiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    kiId?: boolean
    projectKi?: boolean
    situation?: boolean
    photoDate?: boolean
    photo1?: boolean
    photo2?: boolean
    photo3?: boolean
    photo4?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Asset?: boolean | AssetDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetKi"]>

  export type AssetKiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    kiId?: boolean
    projectKi?: boolean
    situation?: boolean
    photoDate?: boolean
    photo1?: boolean
    photo2?: boolean
    photo3?: boolean
    photo4?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Asset?: boolean | AssetDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetKi"]>

  export type AssetKiSelectScalar = {
    id?: boolean
    assetId?: boolean
    kiId?: boolean
    projectKi?: boolean
    situation?: boolean
    photoDate?: boolean
    photo1?: boolean
    photo2?: boolean
    photo3?: boolean
    photo4?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type AssetKiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asset?: boolean | AssetDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }
  export type AssetKiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asset?: boolean | AssetDefaultArgs<ExtArgs>
    Ki?: boolean | KiDefaultArgs<ExtArgs>
  }

  export type $AssetKiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetKi"
    objects: {
      Asset: Prisma.$AssetPayload<ExtArgs>
      Ki: Prisma.$KiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      kiId: string
      projectKi: number
      situation: string
      photoDate: Date
      photo1: string | null
      photo2: string | null
      photo3: string | null
      photo4: string | null
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["assetKi"]>
    composites: {}
  }

  type AssetKiGetPayload<S extends boolean | null | undefined | AssetKiDefaultArgs> = $Result.GetResult<Prisma.$AssetKiPayload, S>

  type AssetKiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetKiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetKiCountAggregateInputType | true
    }

  export interface AssetKiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetKi'], meta: { name: 'AssetKi' } }
    /**
     * Find zero or one AssetKi that matches the filter.
     * @param {AssetKiFindUniqueArgs} args - Arguments to find a AssetKi
     * @example
     * // Get one AssetKi
     * const assetKi = await prisma.assetKi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetKiFindUniqueArgs>(args: SelectSubset<T, AssetKiFindUniqueArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssetKi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssetKiFindUniqueOrThrowArgs} args - Arguments to find a AssetKi
     * @example
     * // Get one AssetKi
     * const assetKi = await prisma.assetKi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetKiFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetKiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssetKi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiFindFirstArgs} args - Arguments to find a AssetKi
     * @example
     * // Get one AssetKi
     * const assetKi = await prisma.assetKi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetKiFindFirstArgs>(args?: SelectSubset<T, AssetKiFindFirstArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssetKi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiFindFirstOrThrowArgs} args - Arguments to find a AssetKi
     * @example
     * // Get one AssetKi
     * const assetKi = await prisma.assetKi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetKiFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetKiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssetKis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetKis
     * const assetKis = await prisma.assetKi.findMany()
     * 
     * // Get first 10 AssetKis
     * const assetKis = await prisma.assetKi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetKiWithIdOnly = await prisma.assetKi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetKiFindManyArgs>(args?: SelectSubset<T, AssetKiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssetKi.
     * @param {AssetKiCreateArgs} args - Arguments to create a AssetKi.
     * @example
     * // Create one AssetKi
     * const AssetKi = await prisma.assetKi.create({
     *   data: {
     *     // ... data to create a AssetKi
     *   }
     * })
     * 
     */
    create<T extends AssetKiCreateArgs>(args: SelectSubset<T, AssetKiCreateArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssetKis.
     * @param {AssetKiCreateManyArgs} args - Arguments to create many AssetKis.
     * @example
     * // Create many AssetKis
     * const assetKi = await prisma.assetKi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetKiCreateManyArgs>(args?: SelectSubset<T, AssetKiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetKis and returns the data saved in the database.
     * @param {AssetKiCreateManyAndReturnArgs} args - Arguments to create many AssetKis.
     * @example
     * // Create many AssetKis
     * const assetKi = await prisma.assetKi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetKis and only return the `id`
     * const assetKiWithIdOnly = await prisma.assetKi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetKiCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetKiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssetKi.
     * @param {AssetKiDeleteArgs} args - Arguments to delete one AssetKi.
     * @example
     * // Delete one AssetKi
     * const AssetKi = await prisma.assetKi.delete({
     *   where: {
     *     // ... filter to delete one AssetKi
     *   }
     * })
     * 
     */
    delete<T extends AssetKiDeleteArgs>(args: SelectSubset<T, AssetKiDeleteArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssetKi.
     * @param {AssetKiUpdateArgs} args - Arguments to update one AssetKi.
     * @example
     * // Update one AssetKi
     * const assetKi = await prisma.assetKi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetKiUpdateArgs>(args: SelectSubset<T, AssetKiUpdateArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssetKis.
     * @param {AssetKiDeleteManyArgs} args - Arguments to filter AssetKis to delete.
     * @example
     * // Delete a few AssetKis
     * const { count } = await prisma.assetKi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetKiDeleteManyArgs>(args?: SelectSubset<T, AssetKiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetKis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetKis
     * const assetKi = await prisma.assetKi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetKiUpdateManyArgs>(args: SelectSubset<T, AssetKiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetKi.
     * @param {AssetKiUpsertArgs} args - Arguments to update or create a AssetKi.
     * @example
     * // Update or create a AssetKi
     * const assetKi = await prisma.assetKi.upsert({
     *   create: {
     *     // ... data to create a AssetKi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetKi we want to update
     *   }
     * })
     */
    upsert<T extends AssetKiUpsertArgs>(args: SelectSubset<T, AssetKiUpsertArgs<ExtArgs>>): Prisma__AssetKiClient<$Result.GetResult<Prisma.$AssetKiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssetKis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiCountArgs} args - Arguments to filter AssetKis to count.
     * @example
     * // Count the number of AssetKis
     * const count = await prisma.assetKi.count({
     *   where: {
     *     // ... the filter for the AssetKis we want to count
     *   }
     * })
    **/
    count<T extends AssetKiCountArgs>(
      args?: Subset<T, AssetKiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetKiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetKi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetKiAggregateArgs>(args: Subset<T, AssetKiAggregateArgs>): Prisma.PrismaPromise<GetAssetKiAggregateType<T>>

    /**
     * Group by AssetKi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetKiGroupByArgs} args - Group by arguments.
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
      T extends AssetKiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetKiGroupByArgs['orderBy'] }
        : { orderBy?: AssetKiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetKiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetKiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetKi model
   */
  readonly fields: AssetKiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetKi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetKiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Ki<T extends KiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KiDefaultArgs<ExtArgs>>): Prisma__KiClient<$Result.GetResult<Prisma.$KiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AssetKi model
   */ 
  interface AssetKiFieldRefs {
    readonly id: FieldRef<"AssetKi", 'String'>
    readonly assetId: FieldRef<"AssetKi", 'String'>
    readonly kiId: FieldRef<"AssetKi", 'String'>
    readonly projectKi: FieldRef<"AssetKi", 'Int'>
    readonly situation: FieldRef<"AssetKi", 'String'>
    readonly photoDate: FieldRef<"AssetKi", 'DateTime'>
    readonly photo1: FieldRef<"AssetKi", 'String'>
    readonly photo2: FieldRef<"AssetKi", 'String'>
    readonly photo3: FieldRef<"AssetKi", 'String'>
    readonly photo4: FieldRef<"AssetKi", 'String'>
    readonly createdAt: FieldRef<"AssetKi", 'DateTime'>
    readonly createdId: FieldRef<"AssetKi", 'String'>
    readonly createdBy: FieldRef<"AssetKi", 'String'>
    readonly updatedAt: FieldRef<"AssetKi", 'DateTime'>
    readonly updatedId: FieldRef<"AssetKi", 'String'>
    readonly updatedBy: FieldRef<"AssetKi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssetKi findUnique
   */
  export type AssetKiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter, which AssetKi to fetch.
     */
    where: AssetKiWhereUniqueInput
  }

  /**
   * AssetKi findUniqueOrThrow
   */
  export type AssetKiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter, which AssetKi to fetch.
     */
    where: AssetKiWhereUniqueInput
  }

  /**
   * AssetKi findFirst
   */
  export type AssetKiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter, which AssetKi to fetch.
     */
    where?: AssetKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetKis to fetch.
     */
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetKis.
     */
    cursor?: AssetKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetKis.
     */
    distinct?: AssetKiScalarFieldEnum | AssetKiScalarFieldEnum[]
  }

  /**
   * AssetKi findFirstOrThrow
   */
  export type AssetKiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter, which AssetKi to fetch.
     */
    where?: AssetKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetKis to fetch.
     */
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetKis.
     */
    cursor?: AssetKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetKis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetKis.
     */
    distinct?: AssetKiScalarFieldEnum | AssetKiScalarFieldEnum[]
  }

  /**
   * AssetKi findMany
   */
  export type AssetKiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter, which AssetKis to fetch.
     */
    where?: AssetKiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetKis to fetch.
     */
    orderBy?: AssetKiOrderByWithRelationInput | AssetKiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetKis.
     */
    cursor?: AssetKiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetKis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetKis.
     */
    skip?: number
    distinct?: AssetKiScalarFieldEnum | AssetKiScalarFieldEnum[]
  }

  /**
   * AssetKi create
   */
  export type AssetKiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetKi.
     */
    data: XOR<AssetKiCreateInput, AssetKiUncheckedCreateInput>
  }

  /**
   * AssetKi createMany
   */
  export type AssetKiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetKis.
     */
    data: AssetKiCreateManyInput | AssetKiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetKi createManyAndReturn
   */
  export type AssetKiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssetKis.
     */
    data: AssetKiCreateManyInput | AssetKiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetKi update
   */
  export type AssetKiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetKi.
     */
    data: XOR<AssetKiUpdateInput, AssetKiUncheckedUpdateInput>
    /**
     * Choose, which AssetKi to update.
     */
    where: AssetKiWhereUniqueInput
  }

  /**
   * AssetKi updateMany
   */
  export type AssetKiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetKis.
     */
    data: XOR<AssetKiUpdateManyMutationInput, AssetKiUncheckedUpdateManyInput>
    /**
     * Filter which AssetKis to update
     */
    where?: AssetKiWhereInput
  }

  /**
   * AssetKi upsert
   */
  export type AssetKiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetKi to update in case it exists.
     */
    where: AssetKiWhereUniqueInput
    /**
     * In case the AssetKi found by the `where` argument doesn't exist, create a new AssetKi with this data.
     */
    create: XOR<AssetKiCreateInput, AssetKiUncheckedCreateInput>
    /**
     * In case the AssetKi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetKiUpdateInput, AssetKiUncheckedUpdateInput>
  }

  /**
   * AssetKi delete
   */
  export type AssetKiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
    /**
     * Filter which AssetKi to delete.
     */
    where: AssetKiWhereUniqueInput
  }

  /**
   * AssetKi deleteMany
   */
  export type AssetKiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetKis to delete
     */
    where?: AssetKiWhereInput
  }

  /**
   * AssetKi without action
   */
  export type AssetKiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetKi
     */
    select?: AssetKiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetKiInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    sbimpId: string | null
    name: string | null
    nameFurigana: string | null
    birthday: Date | null
    customerType: $Enums.CustomerType | null
    horyuStatus: $Enums.HoryuStatusType | null
    invoice: boolean | null
    postName: string | null
    zip: string | null
    fullAddress: string | null
    prefecture: string | null
    city: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    sbimpId: string | null
    name: string | null
    nameFurigana: string | null
    birthday: Date | null
    customerType: $Enums.CustomerType | null
    horyuStatus: $Enums.HoryuStatusType | null
    invoice: boolean | null
    postName: string | null
    zip: string | null
    fullAddress: string | null
    prefecture: string | null
    city: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    sbimpId: number
    name: number
    nameFurigana: number
    birthday: number
    customerType: number
    horyuStatus: number
    invoice: number
    postName: number
    zip: number
    fullAddress: number
    prefecture: number
    city: number
    address: number
    isDeleted: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    nameFurigana?: true
    birthday?: true
    customerType?: true
    horyuStatus?: true
    invoice?: true
    postName?: true
    zip?: true
    fullAddress?: true
    prefecture?: true
    city?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    nameFurigana?: true
    birthday?: true
    customerType?: true
    horyuStatus?: true
    invoice?: true
    postName?: true
    zip?: true
    fullAddress?: true
    prefecture?: true
    city?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    sbimpId?: true
    name?: true
    nameFurigana?: true
    birthday?: true
    customerType?: true
    horyuStatus?: true
    invoice?: true
    postName?: true
    zip?: true
    fullAddress?: true
    prefecture?: true
    city?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    sbimpId: string | null
    name: string
    nameFurigana: string
    birthday: Date | null
    customerType: $Enums.CustomerType
    horyuStatus: $Enums.HoryuStatusType | null
    invoice: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted: boolean
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    nameFurigana?: boolean
    birthday?: boolean
    customerType?: boolean
    horyuStatus?: boolean
    invoice?: boolean
    postName?: boolean
    zip?: boolean
    fullAddress?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    CustomerFunds?: boolean | Customer$CustomerFundsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    nameFurigana?: boolean
    birthday?: boolean
    customerType?: boolean
    horyuStatus?: boolean
    invoice?: boolean
    postName?: boolean
    zip?: boolean
    fullAddress?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    sbimpId?: boolean
    name?: boolean
    nameFurigana?: boolean
    birthday?: boolean
    customerType?: boolean
    horyuStatus?: boolean
    invoice?: boolean
    postName?: boolean
    zip?: boolean
    fullAddress?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerFunds?: boolean | Customer$CustomerFundsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      CustomerFunds: Prisma.$CustomerFundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sbimpId: string | null
      name: string
      nameFurigana: string
      birthday: Date | null
      customerType: $Enums.CustomerType
      horyuStatus: $Enums.HoryuStatusType | null
      invoice: boolean
      postName: string
      zip: string
      fullAddress: string
      prefecture: string
      city: string
      address: string
      isDeleted: boolean
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomerFunds<T extends Customer$CustomerFundsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$CustomerFundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly sbimpId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly nameFurigana: FieldRef<"Customer", 'String'>
    readonly birthday: FieldRef<"Customer", 'DateTime'>
    readonly customerType: FieldRef<"Customer", 'CustomerType'>
    readonly horyuStatus: FieldRef<"Customer", 'HoryuStatusType'>
    readonly invoice: FieldRef<"Customer", 'Boolean'>
    readonly postName: FieldRef<"Customer", 'String'>
    readonly zip: FieldRef<"Customer", 'String'>
    readonly fullAddress: FieldRef<"Customer", 'String'>
    readonly prefecture: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly isDeleted: FieldRef<"Customer", 'Boolean'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly createdId: FieldRef<"Customer", 'String'>
    readonly createdBy: FieldRef<"Customer", 'String'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedId: FieldRef<"Customer", 'String'>
    readonly updatedBy: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.CustomerFunds
   */
  export type Customer$CustomerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    where?: CustomerFundWhereInput
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    cursor?: CustomerFundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerFundScalarFieldEnum | CustomerFundScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerFund
   */

  export type AggregateCustomerFund = {
    _count: CustomerFundCountAggregateOutputType | null
    _avg: CustomerFundAvgAggregateOutputType | null
    _sum: CustomerFundSumAggregateOutputType | null
    _min: CustomerFundMinAggregateOutputType | null
    _max: CustomerFundMaxAggregateOutputType | null
  }

  export type CustomerFundAvgAggregateOutputType = {
    applyUnit: number | null
    bankCode: number | null
    bankBranchCode: number | null
    bankAccountTypeCode: number | null
    bunpaiThisKi: number | null
    bunpaiYear: number | null
    bunpaiTotal: number | null
    otherBunpaiThisKi: number | null
    otherBunpaiYear: number | null
    otherBunpaiTotal: number | null
  }

  export type CustomerFundSumAggregateOutputType = {
    applyUnit: number | null
    bankCode: number | null
    bankBranchCode: number | null
    bankAccountTypeCode: number | null
    bunpaiThisKi: number | null
    bunpaiYear: number | null
    bunpaiTotal: number | null
    otherBunpaiThisKi: number | null
    otherBunpaiYear: number | null
    otherBunpaiTotal: number | null
  }

  export type CustomerFundMinAggregateOutputType = {
    id: string | null
    fundId: string | null
    customerId: string | null
    projectKiId: string | null
    fundStatus: string | null
    applyUnit: number | null
    bankCode: number | null
    bankName: string | null
    bankBranchCode: number | null
    bankBranchName: string | null
    bankAccountTypeCode: number | null
    bankAccountType: string | null
    bankAccount: string | null
    inheritanceType: $Enums.InheritanceType | null
    inheritanceStatus: string | null
    giftContractDate: Date | null
    trustTransferDate: Date | null
    oldBunpaiEndDate: Date | null
    newBunpaiStartDate: Date | null
    bunpaiThisKi: number | null
    bunpaiYear: number | null
    bunpaiTotal: number | null
    otherBunpaiThisKi: number | null
    otherBunpaiYear: number | null
    otherBunpaiTotal: number | null
    instructionDueDate: Date | null
    paymentDueDate: Date | null
    paymentDate: Date | null
    holdPayment: boolean | null
    holdMemo: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type CustomerFundMaxAggregateOutputType = {
    id: string | null
    fundId: string | null
    customerId: string | null
    projectKiId: string | null
    fundStatus: string | null
    applyUnit: number | null
    bankCode: number | null
    bankName: string | null
    bankBranchCode: number | null
    bankBranchName: string | null
    bankAccountTypeCode: number | null
    bankAccountType: string | null
    bankAccount: string | null
    inheritanceType: $Enums.InheritanceType | null
    inheritanceStatus: string | null
    giftContractDate: Date | null
    trustTransferDate: Date | null
    oldBunpaiEndDate: Date | null
    newBunpaiStartDate: Date | null
    bunpaiThisKi: number | null
    bunpaiYear: number | null
    bunpaiTotal: number | null
    otherBunpaiThisKi: number | null
    otherBunpaiYear: number | null
    otherBunpaiTotal: number | null
    instructionDueDate: Date | null
    paymentDueDate: Date | null
    paymentDate: Date | null
    holdPayment: boolean | null
    holdMemo: string | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type CustomerFundCountAggregateOutputType = {
    id: number
    fundId: number
    customerId: number
    projectKiId: number
    fundStatus: number
    applyUnit: number
    bankCode: number
    bankName: number
    bankBranchCode: number
    bankBranchName: number
    bankAccountTypeCode: number
    bankAccountType: number
    bankAccount: number
    inheritanceType: number
    inheritanceStatus: number
    giftContractDate: number
    trustTransferDate: number
    oldBunpaiEndDate: number
    newBunpaiStartDate: number
    bunpaiThisKi: number
    bunpaiYear: number
    bunpaiTotal: number
    otherBunpaiThisKi: number
    otherBunpaiYear: number
    otherBunpaiTotal: number
    instructionDueDate: number
    paymentDueDate: number
    paymentDate: number
    holdPayment: number
    holdMemo: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type CustomerFundAvgAggregateInputType = {
    applyUnit?: true
    bankCode?: true
    bankBranchCode?: true
    bankAccountTypeCode?: true
    bunpaiThisKi?: true
    bunpaiYear?: true
    bunpaiTotal?: true
    otherBunpaiThisKi?: true
    otherBunpaiYear?: true
    otherBunpaiTotal?: true
  }

  export type CustomerFundSumAggregateInputType = {
    applyUnit?: true
    bankCode?: true
    bankBranchCode?: true
    bankAccountTypeCode?: true
    bunpaiThisKi?: true
    bunpaiYear?: true
    bunpaiTotal?: true
    otherBunpaiThisKi?: true
    otherBunpaiYear?: true
    otherBunpaiTotal?: true
  }

  export type CustomerFundMinAggregateInputType = {
    id?: true
    fundId?: true
    customerId?: true
    projectKiId?: true
    fundStatus?: true
    applyUnit?: true
    bankCode?: true
    bankName?: true
    bankBranchCode?: true
    bankBranchName?: true
    bankAccountTypeCode?: true
    bankAccountType?: true
    bankAccount?: true
    inheritanceType?: true
    inheritanceStatus?: true
    giftContractDate?: true
    trustTransferDate?: true
    oldBunpaiEndDate?: true
    newBunpaiStartDate?: true
    bunpaiThisKi?: true
    bunpaiYear?: true
    bunpaiTotal?: true
    otherBunpaiThisKi?: true
    otherBunpaiYear?: true
    otherBunpaiTotal?: true
    instructionDueDate?: true
    paymentDueDate?: true
    paymentDate?: true
    holdPayment?: true
    holdMemo?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type CustomerFundMaxAggregateInputType = {
    id?: true
    fundId?: true
    customerId?: true
    projectKiId?: true
    fundStatus?: true
    applyUnit?: true
    bankCode?: true
    bankName?: true
    bankBranchCode?: true
    bankBranchName?: true
    bankAccountTypeCode?: true
    bankAccountType?: true
    bankAccount?: true
    inheritanceType?: true
    inheritanceStatus?: true
    giftContractDate?: true
    trustTransferDate?: true
    oldBunpaiEndDate?: true
    newBunpaiStartDate?: true
    bunpaiThisKi?: true
    bunpaiYear?: true
    bunpaiTotal?: true
    otherBunpaiThisKi?: true
    otherBunpaiYear?: true
    otherBunpaiTotal?: true
    instructionDueDate?: true
    paymentDueDate?: true
    paymentDate?: true
    holdPayment?: true
    holdMemo?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type CustomerFundCountAggregateInputType = {
    id?: true
    fundId?: true
    customerId?: true
    projectKiId?: true
    fundStatus?: true
    applyUnit?: true
    bankCode?: true
    bankName?: true
    bankBranchCode?: true
    bankBranchName?: true
    bankAccountTypeCode?: true
    bankAccountType?: true
    bankAccount?: true
    inheritanceType?: true
    inheritanceStatus?: true
    giftContractDate?: true
    trustTransferDate?: true
    oldBunpaiEndDate?: true
    newBunpaiStartDate?: true
    bunpaiThisKi?: true
    bunpaiYear?: true
    bunpaiTotal?: true
    otherBunpaiThisKi?: true
    otherBunpaiYear?: true
    otherBunpaiTotal?: true
    instructionDueDate?: true
    paymentDueDate?: true
    paymentDate?: true
    holdPayment?: true
    holdMemo?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type CustomerFundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFund to aggregate.
     */
    where?: CustomerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFunds to fetch.
     */
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerFunds
    **/
    _count?: true | CustomerFundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerFundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerFundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerFundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerFundMaxAggregateInputType
  }

  export type GetCustomerFundAggregateType<T extends CustomerFundAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerFund[P]>
      : GetScalarType<T[P], AggregateCustomerFund[P]>
  }




  export type CustomerFundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFundWhereInput
    orderBy?: CustomerFundOrderByWithAggregationInput | CustomerFundOrderByWithAggregationInput[]
    by: CustomerFundScalarFieldEnum[] | CustomerFundScalarFieldEnum
    having?: CustomerFundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerFundCountAggregateInputType | true
    _avg?: CustomerFundAvgAggregateInputType
    _sum?: CustomerFundSumAggregateInputType
    _min?: CustomerFundMinAggregateInputType
    _max?: CustomerFundMaxAggregateInputType
  }

  export type CustomerFundGroupByOutputType = {
    id: string
    fundId: string
    customerId: string
    projectKiId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType: $Enums.InheritanceType | null
    inheritanceStatus: string | null
    giftContractDate: Date | null
    trustTransferDate: Date | null
    oldBunpaiEndDate: Date | null
    newBunpaiStartDate: Date | null
    bunpaiThisKi: number | null
    bunpaiYear: number | null
    bunpaiTotal: number | null
    otherBunpaiThisKi: number | null
    otherBunpaiYear: number | null
    otherBunpaiTotal: number | null
    instructionDueDate: Date | null
    paymentDueDate: Date | null
    paymentDate: Date | null
    holdPayment: boolean
    holdMemo: string | null
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: CustomerFundCountAggregateOutputType | null
    _avg: CustomerFundAvgAggregateOutputType | null
    _sum: CustomerFundSumAggregateOutputType | null
    _min: CustomerFundMinAggregateOutputType | null
    _max: CustomerFundMaxAggregateOutputType | null
  }

  type GetCustomerFundGroupByPayload<T extends CustomerFundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerFundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerFundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerFundGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerFundGroupByOutputType[P]>
        }
      >
    >


  export type CustomerFundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundId?: boolean
    customerId?: boolean
    projectKiId?: boolean
    fundStatus?: boolean
    applyUnit?: boolean
    bankCode?: boolean
    bankName?: boolean
    bankBranchCode?: boolean
    bankBranchName?: boolean
    bankAccountTypeCode?: boolean
    bankAccountType?: boolean
    bankAccount?: boolean
    inheritanceType?: boolean
    inheritanceStatus?: boolean
    giftContractDate?: boolean
    trustTransferDate?: boolean
    oldBunpaiEndDate?: boolean
    newBunpaiStartDate?: boolean
    bunpaiThisKi?: boolean
    bunpaiYear?: boolean
    bunpaiTotal?: boolean
    otherBunpaiThisKi?: boolean
    otherBunpaiYear?: boolean
    otherBunpaiTotal?: boolean
    instructionDueDate?: boolean
    paymentDueDate?: boolean
    paymentDate?: boolean
    holdPayment?: boolean
    holdMemo?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ProjectKi?: boolean | ProjectKiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerFund"]>

  export type CustomerFundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundId?: boolean
    customerId?: boolean
    projectKiId?: boolean
    fundStatus?: boolean
    applyUnit?: boolean
    bankCode?: boolean
    bankName?: boolean
    bankBranchCode?: boolean
    bankBranchName?: boolean
    bankAccountTypeCode?: boolean
    bankAccountType?: boolean
    bankAccount?: boolean
    inheritanceType?: boolean
    inheritanceStatus?: boolean
    giftContractDate?: boolean
    trustTransferDate?: boolean
    oldBunpaiEndDate?: boolean
    newBunpaiStartDate?: boolean
    bunpaiThisKi?: boolean
    bunpaiYear?: boolean
    bunpaiTotal?: boolean
    otherBunpaiThisKi?: boolean
    otherBunpaiYear?: boolean
    otherBunpaiTotal?: boolean
    instructionDueDate?: boolean
    paymentDueDate?: boolean
    paymentDate?: boolean
    holdPayment?: boolean
    holdMemo?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ProjectKi?: boolean | ProjectKiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerFund"]>

  export type CustomerFundSelectScalar = {
    id?: boolean
    fundId?: boolean
    customerId?: boolean
    projectKiId?: boolean
    fundStatus?: boolean
    applyUnit?: boolean
    bankCode?: boolean
    bankName?: boolean
    bankBranchCode?: boolean
    bankBranchName?: boolean
    bankAccountTypeCode?: boolean
    bankAccountType?: boolean
    bankAccount?: boolean
    inheritanceType?: boolean
    inheritanceStatus?: boolean
    giftContractDate?: boolean
    trustTransferDate?: boolean
    oldBunpaiEndDate?: boolean
    newBunpaiStartDate?: boolean
    bunpaiThisKi?: boolean
    bunpaiYear?: boolean
    bunpaiTotal?: boolean
    otherBunpaiThisKi?: boolean
    otherBunpaiYear?: boolean
    otherBunpaiTotal?: boolean
    instructionDueDate?: boolean
    paymentDueDate?: boolean
    paymentDate?: boolean
    holdPayment?: boolean
    holdMemo?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }

  export type CustomerFundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ProjectKi?: boolean | ProjectKiDefaultArgs<ExtArgs>
  }
  export type CustomerFundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ProjectKi?: boolean | ProjectKiDefaultArgs<ExtArgs>
  }

  export type $CustomerFundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerFund"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>
      ProjectKi: Prisma.$ProjectKiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fundId: string
      customerId: string
      projectKiId: string
      fundStatus: string
      applyUnit: number
      bankCode: number
      bankName: string
      bankBranchCode: number
      bankBranchName: string
      bankAccountTypeCode: number
      bankAccountType: string
      bankAccount: string
      inheritanceType: $Enums.InheritanceType | null
      inheritanceStatus: string | null
      giftContractDate: Date | null
      trustTransferDate: Date | null
      oldBunpaiEndDate: Date | null
      newBunpaiStartDate: Date | null
      bunpaiThisKi: number | null
      bunpaiYear: number | null
      bunpaiTotal: number | null
      otherBunpaiThisKi: number | null
      otherBunpaiYear: number | null
      otherBunpaiTotal: number | null
      instructionDueDate: Date | null
      paymentDueDate: Date | null
      paymentDate: Date | null
      holdPayment: boolean
      holdMemo: string | null
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["customerFund"]>
    composites: {}
  }

  type CustomerFundGetPayload<S extends boolean | null | undefined | CustomerFundDefaultArgs> = $Result.GetResult<Prisma.$CustomerFundPayload, S>

  type CustomerFundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerFundCountAggregateInputType | true
    }

  export interface CustomerFundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerFund'], meta: { name: 'CustomerFund' } }
    /**
     * Find zero or one CustomerFund that matches the filter.
     * @param {CustomerFundFindUniqueArgs} args - Arguments to find a CustomerFund
     * @example
     * // Get one CustomerFund
     * const customerFund = await prisma.customerFund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFundFindUniqueArgs>(args: SelectSubset<T, CustomerFundFindUniqueArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerFund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFundFindUniqueOrThrowArgs} args - Arguments to find a CustomerFund
     * @example
     * // Get one CustomerFund
     * const customerFund = await prisma.customerFund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFundFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerFund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundFindFirstArgs} args - Arguments to find a CustomerFund
     * @example
     * // Get one CustomerFund
     * const customerFund = await prisma.customerFund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFundFindFirstArgs>(args?: SelectSubset<T, CustomerFundFindFirstArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerFund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundFindFirstOrThrowArgs} args - Arguments to find a CustomerFund
     * @example
     * // Get one CustomerFund
     * const customerFund = await prisma.customerFund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFundFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFundFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerFunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerFunds
     * const customerFunds = await prisma.customerFund.findMany()
     * 
     * // Get first 10 CustomerFunds
     * const customerFunds = await prisma.customerFund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerFundWithIdOnly = await prisma.customerFund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFundFindManyArgs>(args?: SelectSubset<T, CustomerFundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerFund.
     * @param {CustomerFundCreateArgs} args - Arguments to create a CustomerFund.
     * @example
     * // Create one CustomerFund
     * const CustomerFund = await prisma.customerFund.create({
     *   data: {
     *     // ... data to create a CustomerFund
     *   }
     * })
     * 
     */
    create<T extends CustomerFundCreateArgs>(args: SelectSubset<T, CustomerFundCreateArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerFunds.
     * @param {CustomerFundCreateManyArgs} args - Arguments to create many CustomerFunds.
     * @example
     * // Create many CustomerFunds
     * const customerFund = await prisma.customerFund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerFundCreateManyArgs>(args?: SelectSubset<T, CustomerFundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerFunds and returns the data saved in the database.
     * @param {CustomerFundCreateManyAndReturnArgs} args - Arguments to create many CustomerFunds.
     * @example
     * // Create many CustomerFunds
     * const customerFund = await prisma.customerFund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerFunds and only return the `id`
     * const customerFundWithIdOnly = await prisma.customerFund.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerFundCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerFundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerFund.
     * @param {CustomerFundDeleteArgs} args - Arguments to delete one CustomerFund.
     * @example
     * // Delete one CustomerFund
     * const CustomerFund = await prisma.customerFund.delete({
     *   where: {
     *     // ... filter to delete one CustomerFund
     *   }
     * })
     * 
     */
    delete<T extends CustomerFundDeleteArgs>(args: SelectSubset<T, CustomerFundDeleteArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerFund.
     * @param {CustomerFundUpdateArgs} args - Arguments to update one CustomerFund.
     * @example
     * // Update one CustomerFund
     * const customerFund = await prisma.customerFund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerFundUpdateArgs>(args: SelectSubset<T, CustomerFundUpdateArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerFunds.
     * @param {CustomerFundDeleteManyArgs} args - Arguments to filter CustomerFunds to delete.
     * @example
     * // Delete a few CustomerFunds
     * const { count } = await prisma.customerFund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerFundDeleteManyArgs>(args?: SelectSubset<T, CustomerFundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerFunds
     * const customerFund = await prisma.customerFund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerFundUpdateManyArgs>(args: SelectSubset<T, CustomerFundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerFund.
     * @param {CustomerFundUpsertArgs} args - Arguments to update or create a CustomerFund.
     * @example
     * // Update or create a CustomerFund
     * const customerFund = await prisma.customerFund.upsert({
     *   create: {
     *     // ... data to create a CustomerFund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerFund we want to update
     *   }
     * })
     */
    upsert<T extends CustomerFundUpsertArgs>(args: SelectSubset<T, CustomerFundUpsertArgs<ExtArgs>>): Prisma__CustomerFundClient<$Result.GetResult<Prisma.$CustomerFundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundCountArgs} args - Arguments to filter CustomerFunds to count.
     * @example
     * // Count the number of CustomerFunds
     * const count = await prisma.customerFund.count({
     *   where: {
     *     // ... the filter for the CustomerFunds we want to count
     *   }
     * })
    **/
    count<T extends CustomerFundCountArgs>(
      args?: Subset<T, CustomerFundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerFundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerFundAggregateArgs>(args: Subset<T, CustomerFundAggregateArgs>): Prisma.PrismaPromise<GetCustomerFundAggregateType<T>>

    /**
     * Group by CustomerFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFundGroupByArgs} args - Group by arguments.
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
      T extends CustomerFundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerFundGroupByArgs['orderBy'] }
        : { orderBy?: CustomerFundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerFundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerFund model
   */
  readonly fields: CustomerFundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerFund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerFundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ProjectKi<T extends ProjectKiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectKiDefaultArgs<ExtArgs>>): Prisma__ProjectKiClient<$Result.GetResult<Prisma.$ProjectKiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerFund model
   */ 
  interface CustomerFundFieldRefs {
    readonly id: FieldRef<"CustomerFund", 'String'>
    readonly fundId: FieldRef<"CustomerFund", 'String'>
    readonly customerId: FieldRef<"CustomerFund", 'String'>
    readonly projectKiId: FieldRef<"CustomerFund", 'String'>
    readonly fundStatus: FieldRef<"CustomerFund", 'String'>
    readonly applyUnit: FieldRef<"CustomerFund", 'Int'>
    readonly bankCode: FieldRef<"CustomerFund", 'Int'>
    readonly bankName: FieldRef<"CustomerFund", 'String'>
    readonly bankBranchCode: FieldRef<"CustomerFund", 'Int'>
    readonly bankBranchName: FieldRef<"CustomerFund", 'String'>
    readonly bankAccountTypeCode: FieldRef<"CustomerFund", 'Int'>
    readonly bankAccountType: FieldRef<"CustomerFund", 'String'>
    readonly bankAccount: FieldRef<"CustomerFund", 'String'>
    readonly inheritanceType: FieldRef<"CustomerFund", 'InheritanceType'>
    readonly inheritanceStatus: FieldRef<"CustomerFund", 'String'>
    readonly giftContractDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly trustTransferDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly oldBunpaiEndDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly newBunpaiStartDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly bunpaiThisKi: FieldRef<"CustomerFund", 'Int'>
    readonly bunpaiYear: FieldRef<"CustomerFund", 'Int'>
    readonly bunpaiTotal: FieldRef<"CustomerFund", 'Int'>
    readonly otherBunpaiThisKi: FieldRef<"CustomerFund", 'Int'>
    readonly otherBunpaiYear: FieldRef<"CustomerFund", 'Int'>
    readonly otherBunpaiTotal: FieldRef<"CustomerFund", 'Int'>
    readonly instructionDueDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly paymentDueDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly paymentDate: FieldRef<"CustomerFund", 'DateTime'>
    readonly holdPayment: FieldRef<"CustomerFund", 'Boolean'>
    readonly holdMemo: FieldRef<"CustomerFund", 'String'>
    readonly createdAt: FieldRef<"CustomerFund", 'DateTime'>
    readonly createdId: FieldRef<"CustomerFund", 'String'>
    readonly createdBy: FieldRef<"CustomerFund", 'String'>
    readonly updatedAt: FieldRef<"CustomerFund", 'DateTime'>
    readonly updatedId: FieldRef<"CustomerFund", 'String'>
    readonly updatedBy: FieldRef<"CustomerFund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerFund findUnique
   */
  export type CustomerFundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFund to fetch.
     */
    where: CustomerFundWhereUniqueInput
  }

  /**
   * CustomerFund findUniqueOrThrow
   */
  export type CustomerFundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFund to fetch.
     */
    where: CustomerFundWhereUniqueInput
  }

  /**
   * CustomerFund findFirst
   */
  export type CustomerFundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFund to fetch.
     */
    where?: CustomerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFunds to fetch.
     */
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFunds.
     */
    cursor?: CustomerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFunds.
     */
    distinct?: CustomerFundScalarFieldEnum | CustomerFundScalarFieldEnum[]
  }

  /**
   * CustomerFund findFirstOrThrow
   */
  export type CustomerFundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFund to fetch.
     */
    where?: CustomerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFunds to fetch.
     */
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFunds.
     */
    cursor?: CustomerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFunds.
     */
    distinct?: CustomerFundScalarFieldEnum | CustomerFundScalarFieldEnum[]
  }

  /**
   * CustomerFund findMany
   */
  export type CustomerFundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFunds to fetch.
     */
    where?: CustomerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFunds to fetch.
     */
    orderBy?: CustomerFundOrderByWithRelationInput | CustomerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerFunds.
     */
    cursor?: CustomerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFunds.
     */
    skip?: number
    distinct?: CustomerFundScalarFieldEnum | CustomerFundScalarFieldEnum[]
  }

  /**
   * CustomerFund create
   */
  export type CustomerFundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerFund.
     */
    data: XOR<CustomerFundCreateInput, CustomerFundUncheckedCreateInput>
  }

  /**
   * CustomerFund createMany
   */
  export type CustomerFundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerFunds.
     */
    data: CustomerFundCreateManyInput | CustomerFundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerFund createManyAndReturn
   */
  export type CustomerFundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerFunds.
     */
    data: CustomerFundCreateManyInput | CustomerFundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerFund update
   */
  export type CustomerFundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerFund.
     */
    data: XOR<CustomerFundUpdateInput, CustomerFundUncheckedUpdateInput>
    /**
     * Choose, which CustomerFund to update.
     */
    where: CustomerFundWhereUniqueInput
  }

  /**
   * CustomerFund updateMany
   */
  export type CustomerFundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerFunds.
     */
    data: XOR<CustomerFundUpdateManyMutationInput, CustomerFundUncheckedUpdateManyInput>
    /**
     * Filter which CustomerFunds to update
     */
    where?: CustomerFundWhereInput
  }

  /**
   * CustomerFund upsert
   */
  export type CustomerFundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerFund to update in case it exists.
     */
    where: CustomerFundWhereUniqueInput
    /**
     * In case the CustomerFund found by the `where` argument doesn't exist, create a new CustomerFund with this data.
     */
    create: XOR<CustomerFundCreateInput, CustomerFundUncheckedCreateInput>
    /**
     * In case the CustomerFund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerFundUpdateInput, CustomerFundUncheckedUpdateInput>
  }

  /**
   * CustomerFund delete
   */
  export type CustomerFundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
    /**
     * Filter which CustomerFund to delete.
     */
    where: CustomerFundWhereUniqueInput
  }

  /**
   * CustomerFund deleteMany
   */
  export type CustomerFundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFunds to delete
     */
    where?: CustomerFundWhereInput
  }

  /**
   * CustomerFund without action
   */
  export type CustomerFundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFund
     */
    select?: CustomerFundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFundInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    size: number | null
    version: number | null
  }

  export type TemplateSumAggregateOutputType = {
    size: number | null
    version: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    contentType: string | null
    ext: $Enums.ExtType | null
    size: number | null
    templateType: $Enums.TemplateType | null
    file: Buffer | null
    version: number | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contentType: string | null
    ext: $Enums.ExtType | null
    size: number | null
    templateType: $Enums.TemplateType | null
    file: Buffer | null
    version: number | null
    createdAt: Date | null
    createdId: string | null
    createdBy: string | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    contentType: number
    ext: number
    size: number
    templateType: number
    file: number
    version: number
    createdAt: number
    createdId: number
    createdBy: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    size?: true
    version?: true
  }

  export type TemplateSumAggregateInputType = {
    size?: true
    version?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    createdAt?: true
    createdId?: true
    createdBy?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version: number
    createdAt: Date
    createdId: string
    createdBy: string
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    createdAt?: boolean
    createdId?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }


  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contentType: string
      ext: $Enums.ExtType
      size: number
      templateType: $Enums.TemplateType
      file: Buffer
      version: number
      createdAt: Date
      createdId: string
      createdBy: string
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Template model
   */ 
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly contentType: FieldRef<"Template", 'String'>
    readonly ext: FieldRef<"Template", 'ExtType'>
    readonly size: FieldRef<"Template", 'Int'>
    readonly templateType: FieldRef<"Template", 'TemplateType'>
    readonly file: FieldRef<"Template", 'Bytes'>
    readonly version: FieldRef<"Template", 'Int'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly createdId: FieldRef<"Template", 'String'>
    readonly createdBy: FieldRef<"Template", 'String'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly updatedId: FieldRef<"Template", 'String'>
    readonly updatedBy: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
  }


  /**
   * Model TemplateHistory
   */

  export type AggregateTemplateHistory = {
    _count: TemplateHistoryCountAggregateOutputType | null
    _avg: TemplateHistoryAvgAggregateOutputType | null
    _sum: TemplateHistorySumAggregateOutputType | null
    _min: TemplateHistoryMinAggregateOutputType | null
    _max: TemplateHistoryMaxAggregateOutputType | null
  }

  export type TemplateHistoryAvgAggregateOutputType = {
    size: number | null
    version: number | null
  }

  export type TemplateHistorySumAggregateOutputType = {
    size: number | null
    version: number | null
  }

  export type TemplateHistoryMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    contentType: string | null
    ext: $Enums.ExtType | null
    size: number | null
    templateType: $Enums.TemplateType | null
    file: Buffer | null
    version: number | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type TemplateHistoryMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    name: string | null
    contentType: string | null
    ext: $Enums.ExtType | null
    size: number | null
    templateType: $Enums.TemplateType | null
    file: Buffer | null
    version: number | null
    updatedAt: Date | null
    updatedId: string | null
    updatedBy: string | null
  }

  export type TemplateHistoryCountAggregateOutputType = {
    id: number
    templateId: number
    name: number
    contentType: number
    ext: number
    size: number
    templateType: number
    file: number
    version: number
    updatedAt: number
    updatedId: number
    updatedBy: number
    _all: number
  }


  export type TemplateHistoryAvgAggregateInputType = {
    size?: true
    version?: true
  }

  export type TemplateHistorySumAggregateInputType = {
    size?: true
    version?: true
  }

  export type TemplateHistoryMinAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type TemplateHistoryMaxAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
  }

  export type TemplateHistoryCountAggregateInputType = {
    id?: true
    templateId?: true
    name?: true
    contentType?: true
    ext?: true
    size?: true
    templateType?: true
    file?: true
    version?: true
    updatedAt?: true
    updatedId?: true
    updatedBy?: true
    _all?: true
  }

  export type TemplateHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateHistory to aggregate.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateHistories
    **/
    _count?: true | TemplateHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateHistoryMaxAggregateInputType
  }

  export type GetTemplateHistoryAggregateType<T extends TemplateHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateHistory[P]>
      : GetScalarType<T[P], AggregateTemplateHistory[P]>
  }




  export type TemplateHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateHistoryWhereInput
    orderBy?: TemplateHistoryOrderByWithAggregationInput | TemplateHistoryOrderByWithAggregationInput[]
    by: TemplateHistoryScalarFieldEnum[] | TemplateHistoryScalarFieldEnum
    having?: TemplateHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateHistoryCountAggregateInputType | true
    _avg?: TemplateHistoryAvgAggregateInputType
    _sum?: TemplateHistorySumAggregateInputType
    _min?: TemplateHistoryMinAggregateInputType
    _max?: TemplateHistoryMaxAggregateInputType
  }

  export type TemplateHistoryGroupByOutputType = {
    id: string
    templateId: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version: number
    updatedAt: Date
    updatedId: string
    updatedBy: string
    _count: TemplateHistoryCountAggregateOutputType | null
    _avg: TemplateHistoryAvgAggregateOutputType | null
    _sum: TemplateHistorySumAggregateOutputType | null
    _min: TemplateHistoryMinAggregateOutputType | null
    _max: TemplateHistoryMaxAggregateOutputType | null
  }

  type GetTemplateHistoryGroupByPayload<T extends TemplateHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TemplateHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["templateHistory"]>

  export type TemplateHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["templateHistory"]>

  export type TemplateHistorySelectScalar = {
    id?: boolean
    templateId?: boolean
    name?: boolean
    contentType?: boolean
    ext?: boolean
    size?: boolean
    templateType?: boolean
    file?: boolean
    version?: boolean
    updatedAt?: boolean
    updatedId?: boolean
    updatedBy?: boolean
  }


  export type $TemplateHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      name: string
      contentType: string
      ext: $Enums.ExtType
      size: number
      templateType: $Enums.TemplateType
      file: Buffer
      version: number
      updatedAt: Date
      updatedId: string
      updatedBy: string
    }, ExtArgs["result"]["templateHistory"]>
    composites: {}
  }

  type TemplateHistoryGetPayload<S extends boolean | null | undefined | TemplateHistoryDefaultArgs> = $Result.GetResult<Prisma.$TemplateHistoryPayload, S>

  type TemplateHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateHistoryCountAggregateInputType | true
    }

  export interface TemplateHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateHistory'], meta: { name: 'TemplateHistory' } }
    /**
     * Find zero or one TemplateHistory that matches the filter.
     * @param {TemplateHistoryFindUniqueArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateHistoryFindUniqueArgs>(args: SelectSubset<T, TemplateHistoryFindUniqueArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TemplateHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateHistoryFindUniqueOrThrowArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TemplateHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindFirstArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateHistoryFindFirstArgs>(args?: SelectSubset<T, TemplateHistoryFindFirstArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TemplateHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindFirstOrThrowArgs} args - Arguments to find a TemplateHistory
     * @example
     * // Get one TemplateHistory
     * const templateHistory = await prisma.templateHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TemplateHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateHistories
     * const templateHistories = await prisma.templateHistory.findMany()
     * 
     * // Get first 10 TemplateHistories
     * const templateHistories = await prisma.templateHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateHistoryWithIdOnly = await prisma.templateHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateHistoryFindManyArgs>(args?: SelectSubset<T, TemplateHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TemplateHistory.
     * @param {TemplateHistoryCreateArgs} args - Arguments to create a TemplateHistory.
     * @example
     * // Create one TemplateHistory
     * const TemplateHistory = await prisma.templateHistory.create({
     *   data: {
     *     // ... data to create a TemplateHistory
     *   }
     * })
     * 
     */
    create<T extends TemplateHistoryCreateArgs>(args: SelectSubset<T, TemplateHistoryCreateArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TemplateHistories.
     * @param {TemplateHistoryCreateManyArgs} args - Arguments to create many TemplateHistories.
     * @example
     * // Create many TemplateHistories
     * const templateHistory = await prisma.templateHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateHistoryCreateManyArgs>(args?: SelectSubset<T, TemplateHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateHistories and returns the data saved in the database.
     * @param {TemplateHistoryCreateManyAndReturnArgs} args - Arguments to create many TemplateHistories.
     * @example
     * // Create many TemplateHistories
     * const templateHistory = await prisma.templateHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateHistories and only return the `id`
     * const templateHistoryWithIdOnly = await prisma.templateHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TemplateHistory.
     * @param {TemplateHistoryDeleteArgs} args - Arguments to delete one TemplateHistory.
     * @example
     * // Delete one TemplateHistory
     * const TemplateHistory = await prisma.templateHistory.delete({
     *   where: {
     *     // ... filter to delete one TemplateHistory
     *   }
     * })
     * 
     */
    delete<T extends TemplateHistoryDeleteArgs>(args: SelectSubset<T, TemplateHistoryDeleteArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TemplateHistory.
     * @param {TemplateHistoryUpdateArgs} args - Arguments to update one TemplateHistory.
     * @example
     * // Update one TemplateHistory
     * const templateHistory = await prisma.templateHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateHistoryUpdateArgs>(args: SelectSubset<T, TemplateHistoryUpdateArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TemplateHistories.
     * @param {TemplateHistoryDeleteManyArgs} args - Arguments to filter TemplateHistories to delete.
     * @example
     * // Delete a few TemplateHistories
     * const { count } = await prisma.templateHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateHistoryDeleteManyArgs>(args?: SelectSubset<T, TemplateHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateHistories
     * const templateHistory = await prisma.templateHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateHistoryUpdateManyArgs>(args: SelectSubset<T, TemplateHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateHistory.
     * @param {TemplateHistoryUpsertArgs} args - Arguments to update or create a TemplateHistory.
     * @example
     * // Update or create a TemplateHistory
     * const templateHistory = await prisma.templateHistory.upsert({
     *   create: {
     *     // ... data to create a TemplateHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateHistory we want to update
     *   }
     * })
     */
    upsert<T extends TemplateHistoryUpsertArgs>(args: SelectSubset<T, TemplateHistoryUpsertArgs<ExtArgs>>): Prisma__TemplateHistoryClient<$Result.GetResult<Prisma.$TemplateHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TemplateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryCountArgs} args - Arguments to filter TemplateHistories to count.
     * @example
     * // Count the number of TemplateHistories
     * const count = await prisma.templateHistory.count({
     *   where: {
     *     // ... the filter for the TemplateHistories we want to count
     *   }
     * })
    **/
    count<T extends TemplateHistoryCountArgs>(
      args?: Subset<T, TemplateHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateHistoryAggregateArgs>(args: Subset<T, TemplateHistoryAggregateArgs>): Prisma.PrismaPromise<GetTemplateHistoryAggregateType<T>>

    /**
     * Group by TemplateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateHistoryGroupByArgs} args - Group by arguments.
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
      T extends TemplateHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TemplateHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateHistory model
   */
  readonly fields: TemplateHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TemplateHistory model
   */ 
  interface TemplateHistoryFieldRefs {
    readonly id: FieldRef<"TemplateHistory", 'String'>
    readonly templateId: FieldRef<"TemplateHistory", 'String'>
    readonly name: FieldRef<"TemplateHistory", 'String'>
    readonly contentType: FieldRef<"TemplateHistory", 'String'>
    readonly ext: FieldRef<"TemplateHistory", 'ExtType'>
    readonly size: FieldRef<"TemplateHistory", 'Int'>
    readonly templateType: FieldRef<"TemplateHistory", 'TemplateType'>
    readonly file: FieldRef<"TemplateHistory", 'Bytes'>
    readonly version: FieldRef<"TemplateHistory", 'Int'>
    readonly updatedAt: FieldRef<"TemplateHistory", 'DateTime'>
    readonly updatedId: FieldRef<"TemplateHistory", 'String'>
    readonly updatedBy: FieldRef<"TemplateHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TemplateHistory findUnique
   */
  export type TemplateHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory findUniqueOrThrow
   */
  export type TemplateHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory findFirst
   */
  export type TemplateHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateHistories.
     */
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory findFirstOrThrow
   */
  export type TemplateHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter, which TemplateHistory to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateHistories.
     */
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory findMany
   */
  export type TemplateHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter, which TemplateHistories to fetch.
     */
    where?: TemplateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateHistories to fetch.
     */
    orderBy?: TemplateHistoryOrderByWithRelationInput | TemplateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateHistories.
     */
    cursor?: TemplateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateHistories.
     */
    skip?: number
    distinct?: TemplateHistoryScalarFieldEnum | TemplateHistoryScalarFieldEnum[]
  }

  /**
   * TemplateHistory create
   */
  export type TemplateHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * The data needed to create a TemplateHistory.
     */
    data: XOR<TemplateHistoryCreateInput, TemplateHistoryUncheckedCreateInput>
  }

  /**
   * TemplateHistory createMany
   */
  export type TemplateHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateHistories.
     */
    data: TemplateHistoryCreateManyInput | TemplateHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateHistory createManyAndReturn
   */
  export type TemplateHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplateHistories.
     */
    data: TemplateHistoryCreateManyInput | TemplateHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateHistory update
   */
  export type TemplateHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * The data needed to update a TemplateHistory.
     */
    data: XOR<TemplateHistoryUpdateInput, TemplateHistoryUncheckedUpdateInput>
    /**
     * Choose, which TemplateHistory to update.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory updateMany
   */
  export type TemplateHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateHistories.
     */
    data: XOR<TemplateHistoryUpdateManyMutationInput, TemplateHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TemplateHistories to update
     */
    where?: TemplateHistoryWhereInput
  }

  /**
   * TemplateHistory upsert
   */
  export type TemplateHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * The filter to search for the TemplateHistory to update in case it exists.
     */
    where: TemplateHistoryWhereUniqueInput
    /**
     * In case the TemplateHistory found by the `where` argument doesn't exist, create a new TemplateHistory with this data.
     */
    create: XOR<TemplateHistoryCreateInput, TemplateHistoryUncheckedCreateInput>
    /**
     * In case the TemplateHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateHistoryUpdateInput, TemplateHistoryUncheckedUpdateInput>
  }

  /**
   * TemplateHistory delete
   */
  export type TemplateHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
    /**
     * Filter which TemplateHistory to delete.
     */
    where: TemplateHistoryWhereUniqueInput
  }

  /**
   * TemplateHistory deleteMany
   */
  export type TemplateHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateHistories to delete
     */
    where?: TemplateHistoryWhereInput
  }

  /**
   * TemplateHistory without action
   */
  export type TemplateHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateHistory
     */
    select?: TemplateHistorySelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    userType: 'userType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SBIMPUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    userType: 'userType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type SBIMPUserScalarFieldEnum = (typeof SBIMPUserScalarFieldEnum)[keyof typeof SBIMPUserScalarFieldEnum]


  export const EAJUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    userType: 'userType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type EAJUserScalarFieldEnum = (typeof EAJUserScalarFieldEnum)[keyof typeof EAJUserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const KiScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    completed: 'completed',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type KiScalarFieldEnum = (typeof KiScalarFieldEnum)[keyof typeof KiScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    sbimpId: 'sbimpId',
    name: 'name',
    shortName: 'shortName',
    totalUnit: 'totalUnit',
    totalAmount: 'totalAmount',
    unitAmount: 'unitAmount',
    trustTermStart: 'trustTermStart',
    trustTermEnd: 'trustTermEnd',
    dividendYield: 'dividendYield',
    fullOccupancyYield: 'fullOccupancyYield',
    totalKubun: 'totalKubun',
    residenceKubun: 'residenceKubun',
    kamiyachoFlag: 'kamiyachoFlag',
    mlspcFlag: 'mlspcFlag',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectKiScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    kiId: 'kiId',
    projectKi: 'projectKi',
    paymentDate: 'paymentDate',
    reportDate: 'reportDate',
    topic: 'topic',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type ProjectKiScalarFieldEnum = (typeof ProjectKiScalarFieldEnum)[keyof typeof ProjectKiScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    address: 'address',
    registeredAddress: 'registeredAddress',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetKiScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId',
    kiId: 'kiId',
    projectKi: 'projectKi',
    situation: 'situation',
    photoDate: 'photoDate',
    photo1: 'photo1',
    photo2: 'photo2',
    photo3: 'photo3',
    photo4: 'photo4',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type AssetKiScalarFieldEnum = (typeof AssetKiScalarFieldEnum)[keyof typeof AssetKiScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    sbimpId: 'sbimpId',
    name: 'name',
    nameFurigana: 'nameFurigana',
    birthday: 'birthday',
    customerType: 'customerType',
    horyuStatus: 'horyuStatus',
    invoice: 'invoice',
    postName: 'postName',
    zip: 'zip',
    fullAddress: 'fullAddress',
    prefecture: 'prefecture',
    city: 'city',
    address: 'address',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerFundScalarFieldEnum: {
    id: 'id',
    fundId: 'fundId',
    customerId: 'customerId',
    projectKiId: 'projectKiId',
    fundStatus: 'fundStatus',
    applyUnit: 'applyUnit',
    bankCode: 'bankCode',
    bankName: 'bankName',
    bankBranchCode: 'bankBranchCode',
    bankBranchName: 'bankBranchName',
    bankAccountTypeCode: 'bankAccountTypeCode',
    bankAccountType: 'bankAccountType',
    bankAccount: 'bankAccount',
    inheritanceType: 'inheritanceType',
    inheritanceStatus: 'inheritanceStatus',
    giftContractDate: 'giftContractDate',
    trustTransferDate: 'trustTransferDate',
    oldBunpaiEndDate: 'oldBunpaiEndDate',
    newBunpaiStartDate: 'newBunpaiStartDate',
    bunpaiThisKi: 'bunpaiThisKi',
    bunpaiYear: 'bunpaiYear',
    bunpaiTotal: 'bunpaiTotal',
    otherBunpaiThisKi: 'otherBunpaiThisKi',
    otherBunpaiYear: 'otherBunpaiYear',
    otherBunpaiTotal: 'otherBunpaiTotal',
    instructionDueDate: 'instructionDueDate',
    paymentDueDate: 'paymentDueDate',
    paymentDate: 'paymentDate',
    holdPayment: 'holdPayment',
    holdMemo: 'holdMemo',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type CustomerFundScalarFieldEnum = (typeof CustomerFundScalarFieldEnum)[keyof typeof CustomerFundScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contentType: 'contentType',
    ext: 'ext',
    size: 'size',
    templateType: 'templateType',
    file: 'file',
    version: 'version',
    createdAt: 'createdAt',
    createdId: 'createdId',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateHistoryScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    name: 'name',
    contentType: 'contentType',
    ext: 'ext',
    size: 'size',
    templateType: 'templateType',
    file: 'file',
    version: 'version',
    updatedAt: 'updatedAt',
    updatedId: 'updatedId',
    updatedBy: 'updatedBy'
  };

  export type TemplateHistoryScalarFieldEnum = (typeof TemplateHistoryScalarFieldEnum)[keyof typeof TemplateHistoryScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CustomerType'
   */
  export type EnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType'>
    


  /**
   * Reference to a field of type 'CustomerType[]'
   */
  export type ListEnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType[]'>
    


  /**
   * Reference to a field of type 'HoryuStatusType'
   */
  export type EnumHoryuStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HoryuStatusType'>
    


  /**
   * Reference to a field of type 'HoryuStatusType[]'
   */
  export type ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HoryuStatusType[]'>
    


  /**
   * Reference to a field of type 'InheritanceType'
   */
  export type EnumInheritanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InheritanceType'>
    


  /**
   * Reference to a field of type 'InheritanceType[]'
   */
  export type ListEnumInheritanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InheritanceType[]'>
    


  /**
   * Reference to a field of type 'ExtType'
   */
  export type EnumExtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtType'>
    


  /**
   * Reference to a field of type 'ExtType[]'
   */
  export type ListEnumExtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtType[]'>
    


  /**
   * Reference to a field of type 'TemplateType'
   */
  export type EnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType'>
    


  /**
   * Reference to a field of type 'TemplateType[]'
   */
  export type ListEnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdId?: StringFilter<"User"> | string
    createdBy?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    updatedId?: StringFilter<"User"> | string
    updatedBy?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdId?: StringFilter<"User"> | string
    createdBy?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    updatedId?: StringFilter<"User"> | string
    updatedBy?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdId?: StringWithAggregatesFilter<"User"> | string
    createdBy?: StringWithAggregatesFilter<"User"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedId?: StringWithAggregatesFilter<"User"> | string
    updatedBy?: StringWithAggregatesFilter<"User"> | string
  }

  export type SBIMPUserWhereInput = {
    AND?: SBIMPUserWhereInput | SBIMPUserWhereInput[]
    OR?: SBIMPUserWhereInput[]
    NOT?: SBIMPUserWhereInput | SBIMPUserWhereInput[]
    id?: StringFilter<"SBIMPUser"> | string
    email?: StringFilter<"SBIMPUser"> | string
    name?: StringNullableFilter<"SBIMPUser"> | string | null
    role?: EnumUserRoleFilter<"SBIMPUser"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"SBIMPUser"> | $Enums.UserType
    isDeleted?: BoolFilter<"SBIMPUser"> | boolean
    createdAt?: DateTimeFilter<"SBIMPUser"> | Date | string
    createdId?: StringFilter<"SBIMPUser"> | string
    createdBy?: StringFilter<"SBIMPUser"> | string
    updatedAt?: DateTimeFilter<"SBIMPUser"> | Date | string
    updatedId?: StringFilter<"SBIMPUser"> | string
    updatedBy?: StringFilter<"SBIMPUser"> | string
  }

  export type SBIMPUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type SBIMPUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SBIMPUserWhereInput | SBIMPUserWhereInput[]
    OR?: SBIMPUserWhereInput[]
    NOT?: SBIMPUserWhereInput | SBIMPUserWhereInput[]
    name?: StringNullableFilter<"SBIMPUser"> | string | null
    role?: EnumUserRoleFilter<"SBIMPUser"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"SBIMPUser"> | $Enums.UserType
    isDeleted?: BoolFilter<"SBIMPUser"> | boolean
    createdAt?: DateTimeFilter<"SBIMPUser"> | Date | string
    createdId?: StringFilter<"SBIMPUser"> | string
    createdBy?: StringFilter<"SBIMPUser"> | string
    updatedAt?: DateTimeFilter<"SBIMPUser"> | Date | string
    updatedId?: StringFilter<"SBIMPUser"> | string
    updatedBy?: StringFilter<"SBIMPUser"> | string
  }, "id" | "email">

  export type SBIMPUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: SBIMPUserCountOrderByAggregateInput
    _max?: SBIMPUserMaxOrderByAggregateInput
    _min?: SBIMPUserMinOrderByAggregateInput
  }

  export type SBIMPUserScalarWhereWithAggregatesInput = {
    AND?: SBIMPUserScalarWhereWithAggregatesInput | SBIMPUserScalarWhereWithAggregatesInput[]
    OR?: SBIMPUserScalarWhereWithAggregatesInput[]
    NOT?: SBIMPUserScalarWhereWithAggregatesInput | SBIMPUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SBIMPUser"> | string
    email?: StringWithAggregatesFilter<"SBIMPUser"> | string
    name?: StringNullableWithAggregatesFilter<"SBIMPUser"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"SBIMPUser"> | $Enums.UserRole
    userType?: EnumUserTypeWithAggregatesFilter<"SBIMPUser"> | $Enums.UserType
    isDeleted?: BoolWithAggregatesFilter<"SBIMPUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SBIMPUser"> | Date | string
    createdId?: StringWithAggregatesFilter<"SBIMPUser"> | string
    createdBy?: StringWithAggregatesFilter<"SBIMPUser"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SBIMPUser"> | Date | string
    updatedId?: StringWithAggregatesFilter<"SBIMPUser"> | string
    updatedBy?: StringWithAggregatesFilter<"SBIMPUser"> | string
  }

  export type EAJUserWhereInput = {
    AND?: EAJUserWhereInput | EAJUserWhereInput[]
    OR?: EAJUserWhereInput[]
    NOT?: EAJUserWhereInput | EAJUserWhereInput[]
    id?: StringFilter<"EAJUser"> | string
    email?: StringFilter<"EAJUser"> | string
    name?: StringNullableFilter<"EAJUser"> | string | null
    role?: EnumUserRoleFilter<"EAJUser"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"EAJUser"> | $Enums.UserType
    isDeleted?: BoolFilter<"EAJUser"> | boolean
    createdAt?: DateTimeFilter<"EAJUser"> | Date | string
    createdId?: StringFilter<"EAJUser"> | string
    createdBy?: StringFilter<"EAJUser"> | string
    updatedAt?: DateTimeFilter<"EAJUser"> | Date | string
    updatedId?: StringFilter<"EAJUser"> | string
    updatedBy?: StringFilter<"EAJUser"> | string
  }

  export type EAJUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type EAJUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EAJUserWhereInput | EAJUserWhereInput[]
    OR?: EAJUserWhereInput[]
    NOT?: EAJUserWhereInput | EAJUserWhereInput[]
    name?: StringNullableFilter<"EAJUser"> | string | null
    role?: EnumUserRoleFilter<"EAJUser"> | $Enums.UserRole
    userType?: EnumUserTypeFilter<"EAJUser"> | $Enums.UserType
    isDeleted?: BoolFilter<"EAJUser"> | boolean
    createdAt?: DateTimeFilter<"EAJUser"> | Date | string
    createdId?: StringFilter<"EAJUser"> | string
    createdBy?: StringFilter<"EAJUser"> | string
    updatedAt?: DateTimeFilter<"EAJUser"> | Date | string
    updatedId?: StringFilter<"EAJUser"> | string
    updatedBy?: StringFilter<"EAJUser"> | string
  }, "id" | "email">

  export type EAJUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: EAJUserCountOrderByAggregateInput
    _max?: EAJUserMaxOrderByAggregateInput
    _min?: EAJUserMinOrderByAggregateInput
  }

  export type EAJUserScalarWhereWithAggregatesInput = {
    AND?: EAJUserScalarWhereWithAggregatesInput | EAJUserScalarWhereWithAggregatesInput[]
    OR?: EAJUserScalarWhereWithAggregatesInput[]
    NOT?: EAJUserScalarWhereWithAggregatesInput | EAJUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EAJUser"> | string
    email?: StringWithAggregatesFilter<"EAJUser"> | string
    name?: StringNullableWithAggregatesFilter<"EAJUser"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"EAJUser"> | $Enums.UserRole
    userType?: EnumUserTypeWithAggregatesFilter<"EAJUser"> | $Enums.UserType
    isDeleted?: BoolWithAggregatesFilter<"EAJUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EAJUser"> | Date | string
    createdId?: StringWithAggregatesFilter<"EAJUser"> | string
    createdBy?: StringWithAggregatesFilter<"EAJUser"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"EAJUser"> | Date | string
    updatedId?: StringWithAggregatesFilter<"EAJUser"> | string
    updatedBy?: StringWithAggregatesFilter<"EAJUser"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type KiWhereInput = {
    AND?: KiWhereInput | KiWhereInput[]
    OR?: KiWhereInput[]
    NOT?: KiWhereInput | KiWhereInput[]
    id?: StringFilter<"Ki"> | string
    year?: IntFilter<"Ki"> | number
    month?: IntFilter<"Ki"> | number
    completed?: BoolFilter<"Ki"> | boolean
    createdAt?: DateTimeFilter<"Ki"> | Date | string
    createdId?: StringFilter<"Ki"> | string
    createdBy?: StringFilter<"Ki"> | string
    updatedAt?: DateTimeFilter<"Ki"> | Date | string
    updatedId?: StringFilter<"Ki"> | string
    updatedBy?: StringFilter<"Ki"> | string
    ProjectKis?: ProjectKiListRelationFilter
    AssetKis?: AssetKiListRelationFilter
  }

  export type KiOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    ProjectKis?: ProjectKiOrderByRelationAggregateInput
    AssetKis?: AssetKiOrderByRelationAggregateInput
  }

  export type KiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KiWhereInput | KiWhereInput[]
    OR?: KiWhereInput[]
    NOT?: KiWhereInput | KiWhereInput[]
    year?: IntFilter<"Ki"> | number
    month?: IntFilter<"Ki"> | number
    completed?: BoolFilter<"Ki"> | boolean
    createdAt?: DateTimeFilter<"Ki"> | Date | string
    createdId?: StringFilter<"Ki"> | string
    createdBy?: StringFilter<"Ki"> | string
    updatedAt?: DateTimeFilter<"Ki"> | Date | string
    updatedId?: StringFilter<"Ki"> | string
    updatedBy?: StringFilter<"Ki"> | string
    ProjectKis?: ProjectKiListRelationFilter
    AssetKis?: AssetKiListRelationFilter
  }, "id">

  export type KiOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: KiCountOrderByAggregateInput
    _avg?: KiAvgOrderByAggregateInput
    _max?: KiMaxOrderByAggregateInput
    _min?: KiMinOrderByAggregateInput
    _sum?: KiSumOrderByAggregateInput
  }

  export type KiScalarWhereWithAggregatesInput = {
    AND?: KiScalarWhereWithAggregatesInput | KiScalarWhereWithAggregatesInput[]
    OR?: KiScalarWhereWithAggregatesInput[]
    NOT?: KiScalarWhereWithAggregatesInput | KiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ki"> | string
    year?: IntWithAggregatesFilter<"Ki"> | number
    month?: IntWithAggregatesFilter<"Ki"> | number
    completed?: BoolWithAggregatesFilter<"Ki"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Ki"> | Date | string
    createdId?: StringWithAggregatesFilter<"Ki"> | string
    createdBy?: StringWithAggregatesFilter<"Ki"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ki"> | Date | string
    updatedId?: StringWithAggregatesFilter<"Ki"> | string
    updatedBy?: StringWithAggregatesFilter<"Ki"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    sbimpId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    shortName?: StringFilter<"Project"> | string
    totalUnit?: IntFilter<"Project"> | number
    totalAmount?: BigIntFilter<"Project"> | bigint | number
    unitAmount?: IntFilter<"Project"> | number
    trustTermStart?: DateTimeFilter<"Project"> | Date | string
    trustTermEnd?: DateTimeFilter<"Project"> | Date | string
    dividendYield?: FloatFilter<"Project"> | number
    fullOccupancyYield?: FloatFilter<"Project"> | number
    totalKubun?: IntFilter<"Project"> | number
    residenceKubun?: IntFilter<"Project"> | number
    kamiyachoFlag?: BoolFilter<"Project"> | boolean
    mlspcFlag?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdId?: StringFilter<"Project"> | string
    createdBy?: StringFilter<"Project"> | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    updatedId?: StringFilter<"Project"> | string
    updatedBy?: StringFilter<"Project"> | string
    ProjectKis?: ProjectKiListRelationFilter
    Assets?: AssetListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    trustTermStart?: SortOrder
    trustTermEnd?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
    kamiyachoFlag?: SortOrder
    mlspcFlag?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    ProjectKis?: ProjectKiOrderByRelationAggregateInput
    Assets?: AssetOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sbimpId?: string
    name?: string
    shortName?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    totalUnit?: IntFilter<"Project"> | number
    totalAmount?: BigIntFilter<"Project"> | bigint | number
    unitAmount?: IntFilter<"Project"> | number
    trustTermStart?: DateTimeFilter<"Project"> | Date | string
    trustTermEnd?: DateTimeFilter<"Project"> | Date | string
    dividendYield?: FloatFilter<"Project"> | number
    fullOccupancyYield?: FloatFilter<"Project"> | number
    totalKubun?: IntFilter<"Project"> | number
    residenceKubun?: IntFilter<"Project"> | number
    kamiyachoFlag?: BoolFilter<"Project"> | boolean
    mlspcFlag?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdId?: StringFilter<"Project"> | string
    createdBy?: StringFilter<"Project"> | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    updatedId?: StringFilter<"Project"> | string
    updatedBy?: StringFilter<"Project"> | string
    ProjectKis?: ProjectKiListRelationFilter
    Assets?: AssetListRelationFilter
  }, "id" | "sbimpId" | "name" | "shortName">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    trustTermStart?: SortOrder
    trustTermEnd?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
    kamiyachoFlag?: SortOrder
    mlspcFlag?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    sbimpId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    shortName?: StringWithAggregatesFilter<"Project"> | string
    totalUnit?: IntWithAggregatesFilter<"Project"> | number
    totalAmount?: BigIntWithAggregatesFilter<"Project"> | bigint | number
    unitAmount?: IntWithAggregatesFilter<"Project"> | number
    trustTermStart?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    trustTermEnd?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    dividendYield?: FloatWithAggregatesFilter<"Project"> | number
    fullOccupancyYield?: FloatWithAggregatesFilter<"Project"> | number
    totalKubun?: IntWithAggregatesFilter<"Project"> | number
    residenceKubun?: IntWithAggregatesFilter<"Project"> | number
    kamiyachoFlag?: BoolWithAggregatesFilter<"Project"> | boolean
    mlspcFlag?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    createdId?: StringWithAggregatesFilter<"Project"> | string
    createdBy?: StringWithAggregatesFilter<"Project"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedId?: StringWithAggregatesFilter<"Project"> | string
    updatedBy?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ProjectKiWhereInput = {
    AND?: ProjectKiWhereInput | ProjectKiWhereInput[]
    OR?: ProjectKiWhereInput[]
    NOT?: ProjectKiWhereInput | ProjectKiWhereInput[]
    id?: StringFilter<"ProjectKi"> | string
    projectId?: StringFilter<"ProjectKi"> | string
    kiId?: StringFilter<"ProjectKi"> | string
    projectKi?: IntFilter<"ProjectKi"> | number
    paymentDate?: DateTimeFilter<"ProjectKi"> | Date | string
    reportDate?: DateTimeFilter<"ProjectKi"> | Date | string
    topic?: StringFilter<"ProjectKi"> | string
    createdAt?: DateTimeFilter<"ProjectKi"> | Date | string
    createdId?: StringFilter<"ProjectKi"> | string
    createdBy?: StringFilter<"ProjectKi"> | string
    updatedAt?: DateTimeFilter<"ProjectKi"> | Date | string
    updatedId?: StringFilter<"ProjectKi"> | string
    updatedBy?: StringFilter<"ProjectKi"> | string
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Ki?: XOR<KiRelationFilter, KiWhereInput>
    CustomerFunds?: CustomerFundListRelationFilter
  }

  export type ProjectKiOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    paymentDate?: SortOrder
    reportDate?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    Project?: ProjectOrderByWithRelationInput
    Ki?: KiOrderByWithRelationInput
    CustomerFunds?: CustomerFundOrderByRelationAggregateInput
  }

  export type ProjectKiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    project_ki_identifier?: ProjectKiProject_ki_identifierCompoundUniqueInput
    project_prj_ki_identifier?: ProjectKiProject_prj_ki_identifierCompoundUniqueInput
    AND?: ProjectKiWhereInput | ProjectKiWhereInput[]
    OR?: ProjectKiWhereInput[]
    NOT?: ProjectKiWhereInput | ProjectKiWhereInput[]
    projectId?: StringFilter<"ProjectKi"> | string
    kiId?: StringFilter<"ProjectKi"> | string
    projectKi?: IntFilter<"ProjectKi"> | number
    paymentDate?: DateTimeFilter<"ProjectKi"> | Date | string
    reportDate?: DateTimeFilter<"ProjectKi"> | Date | string
    topic?: StringFilter<"ProjectKi"> | string
    createdAt?: DateTimeFilter<"ProjectKi"> | Date | string
    createdId?: StringFilter<"ProjectKi"> | string
    createdBy?: StringFilter<"ProjectKi"> | string
    updatedAt?: DateTimeFilter<"ProjectKi"> | Date | string
    updatedId?: StringFilter<"ProjectKi"> | string
    updatedBy?: StringFilter<"ProjectKi"> | string
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Ki?: XOR<KiRelationFilter, KiWhereInput>
    CustomerFunds?: CustomerFundListRelationFilter
  }, "id" | "project_ki_identifier" | "project_prj_ki_identifier">

  export type ProjectKiOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    paymentDate?: SortOrder
    reportDate?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: ProjectKiCountOrderByAggregateInput
    _avg?: ProjectKiAvgOrderByAggregateInput
    _max?: ProjectKiMaxOrderByAggregateInput
    _min?: ProjectKiMinOrderByAggregateInput
    _sum?: ProjectKiSumOrderByAggregateInput
  }

  export type ProjectKiScalarWhereWithAggregatesInput = {
    AND?: ProjectKiScalarWhereWithAggregatesInput | ProjectKiScalarWhereWithAggregatesInput[]
    OR?: ProjectKiScalarWhereWithAggregatesInput[]
    NOT?: ProjectKiScalarWhereWithAggregatesInput | ProjectKiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectKi"> | string
    projectId?: StringWithAggregatesFilter<"ProjectKi"> | string
    kiId?: StringWithAggregatesFilter<"ProjectKi"> | string
    projectKi?: IntWithAggregatesFilter<"ProjectKi"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"ProjectKi"> | Date | string
    reportDate?: DateTimeWithAggregatesFilter<"ProjectKi"> | Date | string
    topic?: StringWithAggregatesFilter<"ProjectKi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectKi"> | Date | string
    createdId?: StringWithAggregatesFilter<"ProjectKi"> | string
    createdBy?: StringWithAggregatesFilter<"ProjectKi"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectKi"> | Date | string
    updatedId?: StringWithAggregatesFilter<"ProjectKi"> | string
    updatedBy?: StringWithAggregatesFilter<"ProjectKi"> | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    address?: StringFilter<"Asset"> | string
    registeredAddress?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    createdId?: StringFilter<"Asset"> | string
    createdBy?: StringFilter<"Asset"> | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    updatedId?: StringFilter<"Asset"> | string
    updatedBy?: StringFilter<"Asset"> | string
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    AssetKis?: AssetKiListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    registeredAddress?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    Project?: ProjectOrderByWithRelationInput
    AssetKis?: AssetKiOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    projectId?: StringFilter<"Asset"> | string
    address?: StringFilter<"Asset"> | string
    registeredAddress?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    createdId?: StringFilter<"Asset"> | string
    createdBy?: StringFilter<"Asset"> | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    updatedId?: StringFilter<"Asset"> | string
    updatedBy?: StringFilter<"Asset"> | string
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    AssetKis?: AssetKiListRelationFilter
  }, "id" | "name">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    registeredAddress?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    projectId?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    address?: StringWithAggregatesFilter<"Asset"> | string
    registeredAddress?: StringWithAggregatesFilter<"Asset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    createdId?: StringWithAggregatesFilter<"Asset"> | string
    createdBy?: StringWithAggregatesFilter<"Asset"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedId?: StringWithAggregatesFilter<"Asset"> | string
    updatedBy?: StringWithAggregatesFilter<"Asset"> | string
  }

  export type AssetKiWhereInput = {
    AND?: AssetKiWhereInput | AssetKiWhereInput[]
    OR?: AssetKiWhereInput[]
    NOT?: AssetKiWhereInput | AssetKiWhereInput[]
    id?: StringFilter<"AssetKi"> | string
    assetId?: StringFilter<"AssetKi"> | string
    kiId?: StringFilter<"AssetKi"> | string
    projectKi?: IntFilter<"AssetKi"> | number
    situation?: StringFilter<"AssetKi"> | string
    photoDate?: DateTimeFilter<"AssetKi"> | Date | string
    photo1?: StringNullableFilter<"AssetKi"> | string | null
    photo2?: StringNullableFilter<"AssetKi"> | string | null
    photo3?: StringNullableFilter<"AssetKi"> | string | null
    photo4?: StringNullableFilter<"AssetKi"> | string | null
    createdAt?: DateTimeFilter<"AssetKi"> | Date | string
    createdId?: StringFilter<"AssetKi"> | string
    createdBy?: StringFilter<"AssetKi"> | string
    updatedAt?: DateTimeFilter<"AssetKi"> | Date | string
    updatedId?: StringFilter<"AssetKi"> | string
    updatedBy?: StringFilter<"AssetKi"> | string
    Asset?: XOR<AssetRelationFilter, AssetWhereInput>
    Ki?: XOR<KiRelationFilter, KiWhereInput>
  }

  export type AssetKiOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    situation?: SortOrder
    photoDate?: SortOrder
    photo1?: SortOrderInput | SortOrder
    photo2?: SortOrderInput | SortOrder
    photo3?: SortOrderInput | SortOrder
    photo4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    Asset?: AssetOrderByWithRelationInput
    Ki?: KiOrderByWithRelationInput
  }

  export type AssetKiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assetKi_ki_identifier?: AssetKiAssetKi_ki_identifierCompoundUniqueInput
    AND?: AssetKiWhereInput | AssetKiWhereInput[]
    OR?: AssetKiWhereInput[]
    NOT?: AssetKiWhereInput | AssetKiWhereInput[]
    assetId?: StringFilter<"AssetKi"> | string
    kiId?: StringFilter<"AssetKi"> | string
    projectKi?: IntFilter<"AssetKi"> | number
    situation?: StringFilter<"AssetKi"> | string
    photoDate?: DateTimeFilter<"AssetKi"> | Date | string
    photo1?: StringNullableFilter<"AssetKi"> | string | null
    photo2?: StringNullableFilter<"AssetKi"> | string | null
    photo3?: StringNullableFilter<"AssetKi"> | string | null
    photo4?: StringNullableFilter<"AssetKi"> | string | null
    createdAt?: DateTimeFilter<"AssetKi"> | Date | string
    createdId?: StringFilter<"AssetKi"> | string
    createdBy?: StringFilter<"AssetKi"> | string
    updatedAt?: DateTimeFilter<"AssetKi"> | Date | string
    updatedId?: StringFilter<"AssetKi"> | string
    updatedBy?: StringFilter<"AssetKi"> | string
    Asset?: XOR<AssetRelationFilter, AssetWhereInput>
    Ki?: XOR<KiRelationFilter, KiWhereInput>
  }, "id" | "assetKi_ki_identifier">

  export type AssetKiOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    situation?: SortOrder
    photoDate?: SortOrder
    photo1?: SortOrderInput | SortOrder
    photo2?: SortOrderInput | SortOrder
    photo3?: SortOrderInput | SortOrder
    photo4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: AssetKiCountOrderByAggregateInput
    _avg?: AssetKiAvgOrderByAggregateInput
    _max?: AssetKiMaxOrderByAggregateInput
    _min?: AssetKiMinOrderByAggregateInput
    _sum?: AssetKiSumOrderByAggregateInput
  }

  export type AssetKiScalarWhereWithAggregatesInput = {
    AND?: AssetKiScalarWhereWithAggregatesInput | AssetKiScalarWhereWithAggregatesInput[]
    OR?: AssetKiScalarWhereWithAggregatesInput[]
    NOT?: AssetKiScalarWhereWithAggregatesInput | AssetKiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetKi"> | string
    assetId?: StringWithAggregatesFilter<"AssetKi"> | string
    kiId?: StringWithAggregatesFilter<"AssetKi"> | string
    projectKi?: IntWithAggregatesFilter<"AssetKi"> | number
    situation?: StringWithAggregatesFilter<"AssetKi"> | string
    photoDate?: DateTimeWithAggregatesFilter<"AssetKi"> | Date | string
    photo1?: StringNullableWithAggregatesFilter<"AssetKi"> | string | null
    photo2?: StringNullableWithAggregatesFilter<"AssetKi"> | string | null
    photo3?: StringNullableWithAggregatesFilter<"AssetKi"> | string | null
    photo4?: StringNullableWithAggregatesFilter<"AssetKi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssetKi"> | Date | string
    createdId?: StringWithAggregatesFilter<"AssetKi"> | string
    createdBy?: StringWithAggregatesFilter<"AssetKi"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssetKi"> | Date | string
    updatedId?: StringWithAggregatesFilter<"AssetKi"> | string
    updatedBy?: StringWithAggregatesFilter<"AssetKi"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    sbimpId?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    nameFurigana?: StringFilter<"Customer"> | string
    birthday?: DateTimeNullableFilter<"Customer"> | Date | string | null
    customerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    horyuStatus?: EnumHoryuStatusTypeNullableFilter<"Customer"> | $Enums.HoryuStatusType | null
    invoice?: BoolFilter<"Customer"> | boolean
    postName?: StringFilter<"Customer"> | string
    zip?: StringFilter<"Customer"> | string
    fullAddress?: StringFilter<"Customer"> | string
    prefecture?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    isDeleted?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    createdId?: StringFilter<"Customer"> | string
    createdBy?: StringFilter<"Customer"> | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    updatedId?: StringFilter<"Customer"> | string
    updatedBy?: StringFilter<"Customer"> | string
    CustomerFunds?: CustomerFundListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    sbimpId?: SortOrderInput | SortOrder
    name?: SortOrder
    nameFurigana?: SortOrder
    birthday?: SortOrderInput | SortOrder
    customerType?: SortOrder
    horyuStatus?: SortOrderInput | SortOrder
    invoice?: SortOrder
    postName?: SortOrder
    zip?: SortOrder
    fullAddress?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    CustomerFunds?: CustomerFundOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    sbimpId?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    nameFurigana?: StringFilter<"Customer"> | string
    birthday?: DateTimeNullableFilter<"Customer"> | Date | string | null
    customerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    horyuStatus?: EnumHoryuStatusTypeNullableFilter<"Customer"> | $Enums.HoryuStatusType | null
    invoice?: BoolFilter<"Customer"> | boolean
    postName?: StringFilter<"Customer"> | string
    zip?: StringFilter<"Customer"> | string
    fullAddress?: StringFilter<"Customer"> | string
    prefecture?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    isDeleted?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    createdId?: StringFilter<"Customer"> | string
    createdBy?: StringFilter<"Customer"> | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    updatedId?: StringFilter<"Customer"> | string
    updatedBy?: StringFilter<"Customer"> | string
    CustomerFunds?: CustomerFundListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    sbimpId?: SortOrderInput | SortOrder
    name?: SortOrder
    nameFurigana?: SortOrder
    birthday?: SortOrderInput | SortOrder
    customerType?: SortOrder
    horyuStatus?: SortOrderInput | SortOrder
    invoice?: SortOrder
    postName?: SortOrder
    zip?: SortOrder
    fullAddress?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    sbimpId?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    name?: StringWithAggregatesFilter<"Customer"> | string
    nameFurigana?: StringWithAggregatesFilter<"Customer"> | string
    birthday?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    customerType?: EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType
    horyuStatus?: EnumHoryuStatusTypeNullableWithAggregatesFilter<"Customer"> | $Enums.HoryuStatusType | null
    invoice?: BoolWithAggregatesFilter<"Customer"> | boolean
    postName?: StringWithAggregatesFilter<"Customer"> | string
    zip?: StringWithAggregatesFilter<"Customer"> | string
    fullAddress?: StringWithAggregatesFilter<"Customer"> | string
    prefecture?: StringWithAggregatesFilter<"Customer"> | string
    city?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    isDeleted?: BoolWithAggregatesFilter<"Customer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    createdId?: StringWithAggregatesFilter<"Customer"> | string
    createdBy?: StringWithAggregatesFilter<"Customer"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedId?: StringWithAggregatesFilter<"Customer"> | string
    updatedBy?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type CustomerFundWhereInput = {
    AND?: CustomerFundWhereInput | CustomerFundWhereInput[]
    OR?: CustomerFundWhereInput[]
    NOT?: CustomerFundWhereInput | CustomerFundWhereInput[]
    id?: StringFilter<"CustomerFund"> | string
    fundId?: StringFilter<"CustomerFund"> | string
    customerId?: StringFilter<"CustomerFund"> | string
    projectKiId?: StringFilter<"CustomerFund"> | string
    fundStatus?: StringFilter<"CustomerFund"> | string
    applyUnit?: IntFilter<"CustomerFund"> | number
    bankCode?: IntFilter<"CustomerFund"> | number
    bankName?: StringFilter<"CustomerFund"> | string
    bankBranchCode?: IntFilter<"CustomerFund"> | number
    bankBranchName?: StringFilter<"CustomerFund"> | string
    bankAccountTypeCode?: IntFilter<"CustomerFund"> | number
    bankAccountType?: StringFilter<"CustomerFund"> | string
    bankAccount?: StringFilter<"CustomerFund"> | string
    inheritanceType?: EnumInheritanceTypeNullableFilter<"CustomerFund"> | $Enums.InheritanceType | null
    inheritanceStatus?: StringNullableFilter<"CustomerFund"> | string | null
    giftContractDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    trustTransferDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    oldBunpaiEndDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    newBunpaiStartDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    bunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    instructionDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    holdPayment?: BoolFilter<"CustomerFund"> | boolean
    holdMemo?: StringNullableFilter<"CustomerFund"> | string | null
    createdAt?: DateTimeFilter<"CustomerFund"> | Date | string
    createdId?: StringFilter<"CustomerFund"> | string
    createdBy?: StringFilter<"CustomerFund"> | string
    updatedAt?: DateTimeFilter<"CustomerFund"> | Date | string
    updatedId?: StringFilter<"CustomerFund"> | string
    updatedBy?: StringFilter<"CustomerFund"> | string
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    ProjectKi?: XOR<ProjectKiRelationFilter, ProjectKiWhereInput>
  }

  export type CustomerFundOrderByWithRelationInput = {
    id?: SortOrder
    fundId?: SortOrder
    customerId?: SortOrder
    projectKiId?: SortOrder
    fundStatus?: SortOrder
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankName?: SortOrder
    bankBranchCode?: SortOrder
    bankBranchName?: SortOrder
    bankAccountTypeCode?: SortOrder
    bankAccountType?: SortOrder
    bankAccount?: SortOrder
    inheritanceType?: SortOrderInput | SortOrder
    inheritanceStatus?: SortOrderInput | SortOrder
    giftContractDate?: SortOrderInput | SortOrder
    trustTransferDate?: SortOrderInput | SortOrder
    oldBunpaiEndDate?: SortOrderInput | SortOrder
    newBunpaiStartDate?: SortOrderInput | SortOrder
    bunpaiThisKi?: SortOrderInput | SortOrder
    bunpaiYear?: SortOrderInput | SortOrder
    bunpaiTotal?: SortOrderInput | SortOrder
    otherBunpaiThisKi?: SortOrderInput | SortOrder
    otherBunpaiYear?: SortOrderInput | SortOrder
    otherBunpaiTotal?: SortOrderInput | SortOrder
    instructionDueDate?: SortOrderInput | SortOrder
    paymentDueDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    holdPayment?: SortOrder
    holdMemo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
    ProjectKi?: ProjectKiOrderByWithRelationInput
  }

  export type CustomerFundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fund_projectKi_identifier?: CustomerFundFund_projectKi_identifierCompoundUniqueInput
    AND?: CustomerFundWhereInput | CustomerFundWhereInput[]
    OR?: CustomerFundWhereInput[]
    NOT?: CustomerFundWhereInput | CustomerFundWhereInput[]
    fundId?: StringFilter<"CustomerFund"> | string
    customerId?: StringFilter<"CustomerFund"> | string
    projectKiId?: StringFilter<"CustomerFund"> | string
    fundStatus?: StringFilter<"CustomerFund"> | string
    applyUnit?: IntFilter<"CustomerFund"> | number
    bankCode?: IntFilter<"CustomerFund"> | number
    bankName?: StringFilter<"CustomerFund"> | string
    bankBranchCode?: IntFilter<"CustomerFund"> | number
    bankBranchName?: StringFilter<"CustomerFund"> | string
    bankAccountTypeCode?: IntFilter<"CustomerFund"> | number
    bankAccountType?: StringFilter<"CustomerFund"> | string
    bankAccount?: StringFilter<"CustomerFund"> | string
    inheritanceType?: EnumInheritanceTypeNullableFilter<"CustomerFund"> | $Enums.InheritanceType | null
    inheritanceStatus?: StringNullableFilter<"CustomerFund"> | string | null
    giftContractDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    trustTransferDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    oldBunpaiEndDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    newBunpaiStartDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    bunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    instructionDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    holdPayment?: BoolFilter<"CustomerFund"> | boolean
    holdMemo?: StringNullableFilter<"CustomerFund"> | string | null
    createdAt?: DateTimeFilter<"CustomerFund"> | Date | string
    createdId?: StringFilter<"CustomerFund"> | string
    createdBy?: StringFilter<"CustomerFund"> | string
    updatedAt?: DateTimeFilter<"CustomerFund"> | Date | string
    updatedId?: StringFilter<"CustomerFund"> | string
    updatedBy?: StringFilter<"CustomerFund"> | string
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    ProjectKi?: XOR<ProjectKiRelationFilter, ProjectKiWhereInput>
  }, "id" | "fund_projectKi_identifier">

  export type CustomerFundOrderByWithAggregationInput = {
    id?: SortOrder
    fundId?: SortOrder
    customerId?: SortOrder
    projectKiId?: SortOrder
    fundStatus?: SortOrder
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankName?: SortOrder
    bankBranchCode?: SortOrder
    bankBranchName?: SortOrder
    bankAccountTypeCode?: SortOrder
    bankAccountType?: SortOrder
    bankAccount?: SortOrder
    inheritanceType?: SortOrderInput | SortOrder
    inheritanceStatus?: SortOrderInput | SortOrder
    giftContractDate?: SortOrderInput | SortOrder
    trustTransferDate?: SortOrderInput | SortOrder
    oldBunpaiEndDate?: SortOrderInput | SortOrder
    newBunpaiStartDate?: SortOrderInput | SortOrder
    bunpaiThisKi?: SortOrderInput | SortOrder
    bunpaiYear?: SortOrderInput | SortOrder
    bunpaiTotal?: SortOrderInput | SortOrder
    otherBunpaiThisKi?: SortOrderInput | SortOrder
    otherBunpaiYear?: SortOrderInput | SortOrder
    otherBunpaiTotal?: SortOrderInput | SortOrder
    instructionDueDate?: SortOrderInput | SortOrder
    paymentDueDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    holdPayment?: SortOrder
    holdMemo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: CustomerFundCountOrderByAggregateInput
    _avg?: CustomerFundAvgOrderByAggregateInput
    _max?: CustomerFundMaxOrderByAggregateInput
    _min?: CustomerFundMinOrderByAggregateInput
    _sum?: CustomerFundSumOrderByAggregateInput
  }

  export type CustomerFundScalarWhereWithAggregatesInput = {
    AND?: CustomerFundScalarWhereWithAggregatesInput | CustomerFundScalarWhereWithAggregatesInput[]
    OR?: CustomerFundScalarWhereWithAggregatesInput[]
    NOT?: CustomerFundScalarWhereWithAggregatesInput | CustomerFundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerFund"> | string
    fundId?: StringWithAggregatesFilter<"CustomerFund"> | string
    customerId?: StringWithAggregatesFilter<"CustomerFund"> | string
    projectKiId?: StringWithAggregatesFilter<"CustomerFund"> | string
    fundStatus?: StringWithAggregatesFilter<"CustomerFund"> | string
    applyUnit?: IntWithAggregatesFilter<"CustomerFund"> | number
    bankCode?: IntWithAggregatesFilter<"CustomerFund"> | number
    bankName?: StringWithAggregatesFilter<"CustomerFund"> | string
    bankBranchCode?: IntWithAggregatesFilter<"CustomerFund"> | number
    bankBranchName?: StringWithAggregatesFilter<"CustomerFund"> | string
    bankAccountTypeCode?: IntWithAggregatesFilter<"CustomerFund"> | number
    bankAccountType?: StringWithAggregatesFilter<"CustomerFund"> | string
    bankAccount?: StringWithAggregatesFilter<"CustomerFund"> | string
    inheritanceType?: EnumInheritanceTypeNullableWithAggregatesFilter<"CustomerFund"> | $Enums.InheritanceType | null
    inheritanceStatus?: StringNullableWithAggregatesFilter<"CustomerFund"> | string | null
    giftContractDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    trustTransferDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    oldBunpaiEndDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    newBunpaiStartDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    bunpaiThisKi?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    bunpaiYear?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    bunpaiTotal?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    otherBunpaiThisKi?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    otherBunpaiYear?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    otherBunpaiTotal?: IntNullableWithAggregatesFilter<"CustomerFund"> | number | null
    instructionDueDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    paymentDueDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    paymentDate?: DateTimeNullableWithAggregatesFilter<"CustomerFund"> | Date | string | null
    holdPayment?: BoolWithAggregatesFilter<"CustomerFund"> | boolean
    holdMemo?: StringNullableWithAggregatesFilter<"CustomerFund"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerFund"> | Date | string
    createdId?: StringWithAggregatesFilter<"CustomerFund"> | string
    createdBy?: StringWithAggregatesFilter<"CustomerFund"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerFund"> | Date | string
    updatedId?: StringWithAggregatesFilter<"CustomerFund"> | string
    updatedBy?: StringWithAggregatesFilter<"CustomerFund"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    contentType?: StringFilter<"Template"> | string
    ext?: EnumExtTypeFilter<"Template"> | $Enums.ExtType
    size?: IntFilter<"Template"> | number
    templateType?: EnumTemplateTypeFilter<"Template"> | $Enums.TemplateType
    file?: BytesFilter<"Template"> | Buffer
    version?: IntFilter<"Template"> | number
    createdAt?: DateTimeFilter<"Template"> | Date | string
    createdId?: StringFilter<"Template"> | string
    createdBy?: StringFilter<"Template"> | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    updatedId?: StringFilter<"Template"> | string
    updatedBy?: StringFilter<"Template"> | string
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    contentType?: StringFilter<"Template"> | string
    ext?: EnumExtTypeFilter<"Template"> | $Enums.ExtType
    size?: IntFilter<"Template"> | number
    templateType?: EnumTemplateTypeFilter<"Template"> | $Enums.TemplateType
    file?: BytesFilter<"Template"> | Buffer
    version?: IntFilter<"Template"> | number
    createdAt?: DateTimeFilter<"Template"> | Date | string
    createdId?: StringFilter<"Template"> | string
    createdBy?: StringFilter<"Template"> | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    updatedId?: StringFilter<"Template"> | string
    updatedBy?: StringFilter<"Template"> | string
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    contentType?: StringWithAggregatesFilter<"Template"> | string
    ext?: EnumExtTypeWithAggregatesFilter<"Template"> | $Enums.ExtType
    size?: IntWithAggregatesFilter<"Template"> | number
    templateType?: EnumTemplateTypeWithAggregatesFilter<"Template"> | $Enums.TemplateType
    file?: BytesWithAggregatesFilter<"Template"> | Buffer
    version?: IntWithAggregatesFilter<"Template"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    createdId?: StringWithAggregatesFilter<"Template"> | string
    createdBy?: StringWithAggregatesFilter<"Template"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedId?: StringWithAggregatesFilter<"Template"> | string
    updatedBy?: StringWithAggregatesFilter<"Template"> | string
  }

  export type TemplateHistoryWhereInput = {
    AND?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    OR?: TemplateHistoryWhereInput[]
    NOT?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    id?: StringFilter<"TemplateHistory"> | string
    templateId?: StringFilter<"TemplateHistory"> | string
    name?: StringFilter<"TemplateHistory"> | string
    contentType?: StringFilter<"TemplateHistory"> | string
    ext?: EnumExtTypeFilter<"TemplateHistory"> | $Enums.ExtType
    size?: IntFilter<"TemplateHistory"> | number
    templateType?: EnumTemplateTypeFilter<"TemplateHistory"> | $Enums.TemplateType
    file?: BytesFilter<"TemplateHistory"> | Buffer
    version?: IntFilter<"TemplateHistory"> | number
    updatedAt?: DateTimeFilter<"TemplateHistory"> | Date | string
    updatedId?: StringFilter<"TemplateHistory"> | string
    updatedBy?: StringFilter<"TemplateHistory"> | string
  }

  export type TemplateHistoryOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    OR?: TemplateHistoryWhereInput[]
    NOT?: TemplateHistoryWhereInput | TemplateHistoryWhereInput[]
    templateId?: StringFilter<"TemplateHistory"> | string
    name?: StringFilter<"TemplateHistory"> | string
    contentType?: StringFilter<"TemplateHistory"> | string
    ext?: EnumExtTypeFilter<"TemplateHistory"> | $Enums.ExtType
    size?: IntFilter<"TemplateHistory"> | number
    templateType?: EnumTemplateTypeFilter<"TemplateHistory"> | $Enums.TemplateType
    file?: BytesFilter<"TemplateHistory"> | Buffer
    version?: IntFilter<"TemplateHistory"> | number
    updatedAt?: DateTimeFilter<"TemplateHistory"> | Date | string
    updatedId?: StringFilter<"TemplateHistory"> | string
    updatedBy?: StringFilter<"TemplateHistory"> | string
  }, "id">

  export type TemplateHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
    _count?: TemplateHistoryCountOrderByAggregateInput
    _avg?: TemplateHistoryAvgOrderByAggregateInput
    _max?: TemplateHistoryMaxOrderByAggregateInput
    _min?: TemplateHistoryMinOrderByAggregateInput
    _sum?: TemplateHistorySumOrderByAggregateInput
  }

  export type TemplateHistoryScalarWhereWithAggregatesInput = {
    AND?: TemplateHistoryScalarWhereWithAggregatesInput | TemplateHistoryScalarWhereWithAggregatesInput[]
    OR?: TemplateHistoryScalarWhereWithAggregatesInput[]
    NOT?: TemplateHistoryScalarWhereWithAggregatesInput | TemplateHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateHistory"> | string
    templateId?: StringWithAggregatesFilter<"TemplateHistory"> | string
    name?: StringWithAggregatesFilter<"TemplateHistory"> | string
    contentType?: StringWithAggregatesFilter<"TemplateHistory"> | string
    ext?: EnumExtTypeWithAggregatesFilter<"TemplateHistory"> | $Enums.ExtType
    size?: IntWithAggregatesFilter<"TemplateHistory"> | number
    templateType?: EnumTemplateTypeWithAggregatesFilter<"TemplateHistory"> | $Enums.TemplateType
    file?: BytesWithAggregatesFilter<"TemplateHistory"> | Buffer
    version?: IntWithAggregatesFilter<"TemplateHistory"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateHistory"> | Date | string
    updatedId?: StringWithAggregatesFilter<"TemplateHistory"> | string
    updatedBy?: StringWithAggregatesFilter<"TemplateHistory"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SBIMPUserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type SBIMPUserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type SBIMPUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SBIMPUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SBIMPUserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type SBIMPUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SBIMPUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EAJUserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type EAJUserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type EAJUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EAJUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EAJUserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    userType?: $Enums.UserType
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type EAJUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EAJUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KiCreateInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiCreateNestedManyWithoutKiInput
    AssetKis?: AssetKiCreateNestedManyWithoutKiInput
  }

  export type KiUncheckedCreateInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiUncheckedCreateNestedManyWithoutKiInput
    AssetKis?: AssetKiUncheckedCreateNestedManyWithoutKiInput
  }

  export type KiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUpdateManyWithoutKiNestedInput
    AssetKis?: AssetKiUpdateManyWithoutKiNestedInput
  }

  export type KiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUncheckedUpdateManyWithoutKiNestedInput
    AssetKis?: AssetKiUncheckedUpdateManyWithoutKiNestedInput
  }

  export type KiCreateManyInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type KiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type KiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiCreateNestedManyWithoutProjectInput
    Assets?: AssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiUncheckedCreateNestedManyWithoutProjectInput
    Assets?: AssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUpdateManyWithoutProjectNestedInput
    Assets?: AssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUncheckedUpdateManyWithoutProjectNestedInput
    Assets?: AssetUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectKiCreateInput = {
    id?: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Project: ProjectCreateNestedOneWithoutProjectKisInput
    Ki: KiCreateNestedOneWithoutProjectKisInput
    CustomerFunds?: CustomerFundCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiUncheckedCreateInput = {
    id?: string
    projectId: string
    kiId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    CustomerFunds?: CustomerFundUncheckedCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutProjectKisNestedInput
    Ki?: KiUpdateOneRequiredWithoutProjectKisNestedInput
    CustomerFunds?: CustomerFundUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    CustomerFunds?: CustomerFundUncheckedUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiCreateManyInput = {
    id?: string
    projectId: string
    kiId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type ProjectKiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectKiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateInput = {
    id?: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Project: ProjectCreateNestedOneWithoutAssetsInput
    AssetKis?: AssetKiCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    AssetKis?: AssetKiUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
    AssetKis?: AssetKiUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    AssetKis?: AssetKiUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    projectId: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiCreateInput = {
    id?: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Asset: AssetCreateNestedOneWithoutAssetKisInput
    Ki: KiCreateNestedOneWithoutAssetKisInput
  }

  export type AssetKiUncheckedCreateInput = {
    id?: string
    assetId: string
    kiId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Asset?: AssetUpdateOneRequiredWithoutAssetKisNestedInput
    Ki?: KiUpdateOneRequiredWithoutAssetKisNestedInput
  }

  export type AssetKiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiCreateManyInput = {
    id?: string
    assetId: string
    kiId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    sbimpId?: string | null
    name: string
    nameFurigana: string
    birthday?: Date | string | null
    customerType?: $Enums.CustomerType
    horyuStatus?: $Enums.HoryuStatusType | null
    invoice?: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    CustomerFunds?: CustomerFundCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    sbimpId?: string | null
    name: string
    nameFurigana: string
    birthday?: Date | string | null
    customerType?: $Enums.CustomerType
    horyuStatus?: $Enums.HoryuStatusType | null
    invoice?: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    CustomerFunds?: CustomerFundUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    CustomerFunds?: CustomerFundUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    CustomerFunds?: CustomerFundUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    sbimpId?: string | null
    name: string
    nameFurigana: string
    birthday?: Date | string | null
    customerType?: $Enums.CustomerType
    horyuStatus?: $Enums.HoryuStatusType | null
    invoice?: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundCreateInput = {
    id?: string
    fundId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Customer: CustomerCreateNestedOneWithoutCustomerFundsInput
    ProjectKi: ProjectKiCreateNestedOneWithoutCustomerFundsInput
  }

  export type CustomerFundUncheckedCreateInput = {
    id?: string
    fundId: string
    customerId: string
    projectKiId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Customer?: CustomerUpdateOneRequiredWithoutCustomerFundsNestedInput
    ProjectKi?: ProjectKiUpdateOneRequiredWithoutCustomerFundsNestedInput
  }

  export type CustomerFundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    projectKiId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundCreateManyInput = {
    id?: string
    fundId: string
    customerId: string
    projectKiId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    projectKiId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version?: number
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version?: number
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version?: number
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateHistoryCreateInput = {
    id?: string
    templateId: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version: number
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateHistoryUncheckedCreateInput = {
    id?: string
    templateId: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version: number
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateHistoryCreateManyInput = {
    id?: string
    templateId: string
    name: string
    contentType: string
    ext: $Enums.ExtType
    size: number
    templateType: $Enums.TemplateType
    file: Buffer
    version: number
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type TemplateHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    ext?: EnumExtTypeFieldUpdateOperationsInput | $Enums.ExtType
    size?: IntFieldUpdateOperationsInput | number
    templateType?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    file?: BytesFieldUpdateOperationsInput | Buffer
    version?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SBIMPUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type SBIMPUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type SBIMPUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type EAJUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type EAJUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type EAJUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    userType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type ProjectKiListRelationFilter = {
    every?: ProjectKiWhereInput
    some?: ProjectKiWhereInput
    none?: ProjectKiWhereInput
  }

  export type AssetKiListRelationFilter = {
    every?: AssetKiWhereInput
    some?: AssetKiWhereInput
    none?: AssetKiWhereInput
  }

  export type ProjectKiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetKiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KiCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type KiAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
  }

  export type KiMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type KiMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type KiSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    trustTermStart?: SortOrder
    trustTermEnd?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
    kamiyachoFlag?: SortOrder
    mlspcFlag?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    trustTermStart?: SortOrder
    trustTermEnd?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
    kamiyachoFlag?: SortOrder
    mlspcFlag?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    trustTermStart?: SortOrder
    trustTermEnd?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
    kamiyachoFlag?: SortOrder
    mlspcFlag?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    totalUnit?: SortOrder
    totalAmount?: SortOrder
    unitAmount?: SortOrder
    dividendYield?: SortOrder
    fullOccupancyYield?: SortOrder
    totalKubun?: SortOrder
    residenceKubun?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type KiRelationFilter = {
    is?: KiWhereInput
    isNot?: KiWhereInput
  }

  export type CustomerFundListRelationFilter = {
    every?: CustomerFundWhereInput
    some?: CustomerFundWhereInput
    none?: CustomerFundWhereInput
  }

  export type CustomerFundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectKiProject_ki_identifierCompoundUniqueInput = {
    projectId: string
    kiId: string
  }

  export type ProjectKiProject_prj_ki_identifierCompoundUniqueInput = {
    projectId: string
    projectKi: number
  }

  export type ProjectKiCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    paymentDate?: SortOrder
    reportDate?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectKiAvgOrderByAggregateInput = {
    projectKi?: SortOrder
  }

  export type ProjectKiMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    paymentDate?: SortOrder
    reportDate?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectKiMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    paymentDate?: SortOrder
    reportDate?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProjectKiSumOrderByAggregateInput = {
    projectKi?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    registeredAddress?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    registeredAddress?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    registeredAddress?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type AssetKiAssetKi_ki_identifierCompoundUniqueInput = {
    assetId: string
    kiId: string
  }

  export type AssetKiCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    situation?: SortOrder
    photoDate?: SortOrder
    photo1?: SortOrder
    photo2?: SortOrder
    photo3?: SortOrder
    photo4?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetKiAvgOrderByAggregateInput = {
    projectKi?: SortOrder
  }

  export type AssetKiMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    situation?: SortOrder
    photoDate?: SortOrder
    photo1?: SortOrder
    photo2?: SortOrder
    photo3?: SortOrder
    photo4?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetKiMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    kiId?: SortOrder
    projectKi?: SortOrder
    situation?: SortOrder
    photoDate?: SortOrder
    photo1?: SortOrder
    photo2?: SortOrder
    photo3?: SortOrder
    photo4?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type AssetKiSumOrderByAggregateInput = {
    projectKi?: SortOrder
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

  export type EnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type EnumHoryuStatusTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HoryuStatusType | EnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel> | $Enums.HoryuStatusType | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    nameFurigana?: SortOrder
    birthday?: SortOrder
    customerType?: SortOrder
    horyuStatus?: SortOrder
    invoice?: SortOrder
    postName?: SortOrder
    zip?: SortOrder
    fullAddress?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    nameFurigana?: SortOrder
    birthday?: SortOrder
    customerType?: SortOrder
    horyuStatus?: SortOrder
    invoice?: SortOrder
    postName?: SortOrder
    zip?: SortOrder
    fullAddress?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    sbimpId?: SortOrder
    name?: SortOrder
    nameFurigana?: SortOrder
    birthday?: SortOrder
    customerType?: SortOrder
    horyuStatus?: SortOrder
    invoice?: SortOrder
    postName?: SortOrder
    zip?: SortOrder
    fullAddress?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
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

  export type EnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type EnumHoryuStatusTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HoryuStatusType | EnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHoryuStatusTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HoryuStatusType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel>
  }

  export type EnumInheritanceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InheritanceType | EnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel> | $Enums.InheritanceType | null
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

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ProjectKiRelationFilter = {
    is?: ProjectKiWhereInput
    isNot?: ProjectKiWhereInput
  }

  export type CustomerFundFund_projectKi_identifierCompoundUniqueInput = {
    fundId: string
    projectKiId: string
  }

  export type CustomerFundCountOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    customerId?: SortOrder
    projectKiId?: SortOrder
    fundStatus?: SortOrder
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankName?: SortOrder
    bankBranchCode?: SortOrder
    bankBranchName?: SortOrder
    bankAccountTypeCode?: SortOrder
    bankAccountType?: SortOrder
    bankAccount?: SortOrder
    inheritanceType?: SortOrder
    inheritanceStatus?: SortOrder
    giftContractDate?: SortOrder
    trustTransferDate?: SortOrder
    oldBunpaiEndDate?: SortOrder
    newBunpaiStartDate?: SortOrder
    bunpaiThisKi?: SortOrder
    bunpaiYear?: SortOrder
    bunpaiTotal?: SortOrder
    otherBunpaiThisKi?: SortOrder
    otherBunpaiYear?: SortOrder
    otherBunpaiTotal?: SortOrder
    instructionDueDate?: SortOrder
    paymentDueDate?: SortOrder
    paymentDate?: SortOrder
    holdPayment?: SortOrder
    holdMemo?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CustomerFundAvgOrderByAggregateInput = {
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankBranchCode?: SortOrder
    bankAccountTypeCode?: SortOrder
    bunpaiThisKi?: SortOrder
    bunpaiYear?: SortOrder
    bunpaiTotal?: SortOrder
    otherBunpaiThisKi?: SortOrder
    otherBunpaiYear?: SortOrder
    otherBunpaiTotal?: SortOrder
  }

  export type CustomerFundMaxOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    customerId?: SortOrder
    projectKiId?: SortOrder
    fundStatus?: SortOrder
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankName?: SortOrder
    bankBranchCode?: SortOrder
    bankBranchName?: SortOrder
    bankAccountTypeCode?: SortOrder
    bankAccountType?: SortOrder
    bankAccount?: SortOrder
    inheritanceType?: SortOrder
    inheritanceStatus?: SortOrder
    giftContractDate?: SortOrder
    trustTransferDate?: SortOrder
    oldBunpaiEndDate?: SortOrder
    newBunpaiStartDate?: SortOrder
    bunpaiThisKi?: SortOrder
    bunpaiYear?: SortOrder
    bunpaiTotal?: SortOrder
    otherBunpaiThisKi?: SortOrder
    otherBunpaiYear?: SortOrder
    otherBunpaiTotal?: SortOrder
    instructionDueDate?: SortOrder
    paymentDueDate?: SortOrder
    paymentDate?: SortOrder
    holdPayment?: SortOrder
    holdMemo?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CustomerFundMinOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    customerId?: SortOrder
    projectKiId?: SortOrder
    fundStatus?: SortOrder
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankName?: SortOrder
    bankBranchCode?: SortOrder
    bankBranchName?: SortOrder
    bankAccountTypeCode?: SortOrder
    bankAccountType?: SortOrder
    bankAccount?: SortOrder
    inheritanceType?: SortOrder
    inheritanceStatus?: SortOrder
    giftContractDate?: SortOrder
    trustTransferDate?: SortOrder
    oldBunpaiEndDate?: SortOrder
    newBunpaiStartDate?: SortOrder
    bunpaiThisKi?: SortOrder
    bunpaiYear?: SortOrder
    bunpaiTotal?: SortOrder
    otherBunpaiThisKi?: SortOrder
    otherBunpaiYear?: SortOrder
    otherBunpaiTotal?: SortOrder
    instructionDueDate?: SortOrder
    paymentDueDate?: SortOrder
    paymentDate?: SortOrder
    holdPayment?: SortOrder
    holdMemo?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type CustomerFundSumOrderByAggregateInput = {
    applyUnit?: SortOrder
    bankCode?: SortOrder
    bankBranchCode?: SortOrder
    bankAccountTypeCode?: SortOrder
    bunpaiThisKi?: SortOrder
    bunpaiYear?: SortOrder
    bunpaiTotal?: SortOrder
    otherBunpaiThisKi?: SortOrder
    otherBunpaiYear?: SortOrder
    otherBunpaiTotal?: SortOrder
  }

  export type EnumInheritanceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InheritanceType | EnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInheritanceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InheritanceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel>
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

  export type EnumExtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtType | EnumExtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtTypeFilter<$PrismaModel> | $Enums.ExtType
  }

  export type EnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    size?: SortOrder
    version?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    createdId?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    size?: SortOrder
    version?: SortOrder
  }

  export type EnumExtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtType | EnumExtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtTypeFilter<$PrismaModel>
    _max?: NestedEnumExtTypeFilter<$PrismaModel>
  }

  export type EnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type TemplateHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateHistoryAvgOrderByAggregateInput = {
    size?: SortOrder
    version?: SortOrder
  }

  export type TemplateHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    name?: SortOrder
    contentType?: SortOrder
    ext?: SortOrder
    size?: SortOrder
    templateType?: SortOrder
    file?: SortOrder
    version?: SortOrder
    updatedAt?: SortOrder
    updatedId?: SortOrder
    updatedBy?: SortOrder
  }

  export type TemplateHistorySumOrderByAggregateInput = {
    size?: SortOrder
    version?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectKiCreateNestedManyWithoutKiInput = {
    create?: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput> | ProjectKiCreateWithoutKiInput[] | ProjectKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutKiInput | ProjectKiCreateOrConnectWithoutKiInput[]
    createMany?: ProjectKiCreateManyKiInputEnvelope
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
  }

  export type AssetKiCreateNestedManyWithoutKiInput = {
    create?: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput> | AssetKiCreateWithoutKiInput[] | AssetKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutKiInput | AssetKiCreateOrConnectWithoutKiInput[]
    createMany?: AssetKiCreateManyKiInputEnvelope
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
  }

  export type ProjectKiUncheckedCreateNestedManyWithoutKiInput = {
    create?: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput> | ProjectKiCreateWithoutKiInput[] | ProjectKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutKiInput | ProjectKiCreateOrConnectWithoutKiInput[]
    createMany?: ProjectKiCreateManyKiInputEnvelope
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
  }

  export type AssetKiUncheckedCreateNestedManyWithoutKiInput = {
    create?: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput> | AssetKiCreateWithoutKiInput[] | AssetKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutKiInput | AssetKiCreateOrConnectWithoutKiInput[]
    createMany?: AssetKiCreateManyKiInputEnvelope
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectKiUpdateManyWithoutKiNestedInput = {
    create?: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput> | ProjectKiCreateWithoutKiInput[] | ProjectKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutKiInput | ProjectKiCreateOrConnectWithoutKiInput[]
    upsert?: ProjectKiUpsertWithWhereUniqueWithoutKiInput | ProjectKiUpsertWithWhereUniqueWithoutKiInput[]
    createMany?: ProjectKiCreateManyKiInputEnvelope
    set?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    disconnect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    delete?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    update?: ProjectKiUpdateWithWhereUniqueWithoutKiInput | ProjectKiUpdateWithWhereUniqueWithoutKiInput[]
    updateMany?: ProjectKiUpdateManyWithWhereWithoutKiInput | ProjectKiUpdateManyWithWhereWithoutKiInput[]
    deleteMany?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
  }

  export type AssetKiUpdateManyWithoutKiNestedInput = {
    create?: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput> | AssetKiCreateWithoutKiInput[] | AssetKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutKiInput | AssetKiCreateOrConnectWithoutKiInput[]
    upsert?: AssetKiUpsertWithWhereUniqueWithoutKiInput | AssetKiUpsertWithWhereUniqueWithoutKiInput[]
    createMany?: AssetKiCreateManyKiInputEnvelope
    set?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    disconnect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    delete?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    update?: AssetKiUpdateWithWhereUniqueWithoutKiInput | AssetKiUpdateWithWhereUniqueWithoutKiInput[]
    updateMany?: AssetKiUpdateManyWithWhereWithoutKiInput | AssetKiUpdateManyWithWhereWithoutKiInput[]
    deleteMany?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
  }

  export type ProjectKiUncheckedUpdateManyWithoutKiNestedInput = {
    create?: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput> | ProjectKiCreateWithoutKiInput[] | ProjectKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutKiInput | ProjectKiCreateOrConnectWithoutKiInput[]
    upsert?: ProjectKiUpsertWithWhereUniqueWithoutKiInput | ProjectKiUpsertWithWhereUniqueWithoutKiInput[]
    createMany?: ProjectKiCreateManyKiInputEnvelope
    set?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    disconnect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    delete?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    update?: ProjectKiUpdateWithWhereUniqueWithoutKiInput | ProjectKiUpdateWithWhereUniqueWithoutKiInput[]
    updateMany?: ProjectKiUpdateManyWithWhereWithoutKiInput | ProjectKiUpdateManyWithWhereWithoutKiInput[]
    deleteMany?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
  }

  export type AssetKiUncheckedUpdateManyWithoutKiNestedInput = {
    create?: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput> | AssetKiCreateWithoutKiInput[] | AssetKiUncheckedCreateWithoutKiInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutKiInput | AssetKiCreateOrConnectWithoutKiInput[]
    upsert?: AssetKiUpsertWithWhereUniqueWithoutKiInput | AssetKiUpsertWithWhereUniqueWithoutKiInput[]
    createMany?: AssetKiCreateManyKiInputEnvelope
    set?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    disconnect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    delete?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    update?: AssetKiUpdateWithWhereUniqueWithoutKiInput | AssetKiUpdateWithWhereUniqueWithoutKiInput[]
    updateMany?: AssetKiUpdateManyWithWhereWithoutKiInput | AssetKiUpdateManyWithWhereWithoutKiInput[]
    deleteMany?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
  }

  export type ProjectKiCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput> | ProjectKiCreateWithoutProjectInput[] | ProjectKiUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutProjectInput | ProjectKiCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectKiCreateManyProjectInputEnvelope
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
  }

  export type AssetCreateNestedManyWithoutProjectInput = {
    create?: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput> | AssetCreateWithoutProjectInput[] | AssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutProjectInput | AssetCreateOrConnectWithoutProjectInput[]
    createMany?: AssetCreateManyProjectInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type ProjectKiUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput> | ProjectKiCreateWithoutProjectInput[] | ProjectKiUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutProjectInput | ProjectKiCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectKiCreateManyProjectInputEnvelope
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput> | AssetCreateWithoutProjectInput[] | AssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutProjectInput | AssetCreateOrConnectWithoutProjectInput[]
    createMany?: AssetCreateManyProjectInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectKiUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput> | ProjectKiCreateWithoutProjectInput[] | ProjectKiUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutProjectInput | ProjectKiCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectKiUpsertWithWhereUniqueWithoutProjectInput | ProjectKiUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectKiCreateManyProjectInputEnvelope
    set?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    disconnect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    delete?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    update?: ProjectKiUpdateWithWhereUniqueWithoutProjectInput | ProjectKiUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectKiUpdateManyWithWhereWithoutProjectInput | ProjectKiUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
  }

  export type AssetUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput> | AssetCreateWithoutProjectInput[] | AssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutProjectInput | AssetCreateOrConnectWithoutProjectInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutProjectInput | AssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AssetCreateManyProjectInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutProjectInput | AssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutProjectInput | AssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type ProjectKiUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput> | ProjectKiCreateWithoutProjectInput[] | ProjectKiUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectKiCreateOrConnectWithoutProjectInput | ProjectKiCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectKiUpsertWithWhereUniqueWithoutProjectInput | ProjectKiUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectKiCreateManyProjectInputEnvelope
    set?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    disconnect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    delete?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    connect?: ProjectKiWhereUniqueInput | ProjectKiWhereUniqueInput[]
    update?: ProjectKiUpdateWithWhereUniqueWithoutProjectInput | ProjectKiUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectKiUpdateManyWithWhereWithoutProjectInput | ProjectKiUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput> | AssetCreateWithoutProjectInput[] | AssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutProjectInput | AssetCreateOrConnectWithoutProjectInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutProjectInput | AssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AssetCreateManyProjectInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutProjectInput | AssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutProjectInput | AssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectKisInput = {
    create?: XOR<ProjectCreateWithoutProjectKisInput, ProjectUncheckedCreateWithoutProjectKisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectKisInput
    connect?: ProjectWhereUniqueInput
  }

  export type KiCreateNestedOneWithoutProjectKisInput = {
    create?: XOR<KiCreateWithoutProjectKisInput, KiUncheckedCreateWithoutProjectKisInput>
    connectOrCreate?: KiCreateOrConnectWithoutProjectKisInput
    connect?: KiWhereUniqueInput
  }

  export type CustomerFundCreateNestedManyWithoutProjectKiInput = {
    create?: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput> | CustomerFundCreateWithoutProjectKiInput[] | CustomerFundUncheckedCreateWithoutProjectKiInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutProjectKiInput | CustomerFundCreateOrConnectWithoutProjectKiInput[]
    createMany?: CustomerFundCreateManyProjectKiInputEnvelope
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
  }

  export type CustomerFundUncheckedCreateNestedManyWithoutProjectKiInput = {
    create?: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput> | CustomerFundCreateWithoutProjectKiInput[] | CustomerFundUncheckedCreateWithoutProjectKiInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutProjectKiInput | CustomerFundCreateOrConnectWithoutProjectKiInput[]
    createMany?: CustomerFundCreateManyProjectKiInputEnvelope
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutProjectKisNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectKisInput, ProjectUncheckedCreateWithoutProjectKisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectKisInput
    upsert?: ProjectUpsertWithoutProjectKisInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectKisInput, ProjectUpdateWithoutProjectKisInput>, ProjectUncheckedUpdateWithoutProjectKisInput>
  }

  export type KiUpdateOneRequiredWithoutProjectKisNestedInput = {
    create?: XOR<KiCreateWithoutProjectKisInput, KiUncheckedCreateWithoutProjectKisInput>
    connectOrCreate?: KiCreateOrConnectWithoutProjectKisInput
    upsert?: KiUpsertWithoutProjectKisInput
    connect?: KiWhereUniqueInput
    update?: XOR<XOR<KiUpdateToOneWithWhereWithoutProjectKisInput, KiUpdateWithoutProjectKisInput>, KiUncheckedUpdateWithoutProjectKisInput>
  }

  export type CustomerFundUpdateManyWithoutProjectKiNestedInput = {
    create?: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput> | CustomerFundCreateWithoutProjectKiInput[] | CustomerFundUncheckedCreateWithoutProjectKiInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutProjectKiInput | CustomerFundCreateOrConnectWithoutProjectKiInput[]
    upsert?: CustomerFundUpsertWithWhereUniqueWithoutProjectKiInput | CustomerFundUpsertWithWhereUniqueWithoutProjectKiInput[]
    createMany?: CustomerFundCreateManyProjectKiInputEnvelope
    set?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    disconnect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    delete?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    update?: CustomerFundUpdateWithWhereUniqueWithoutProjectKiInput | CustomerFundUpdateWithWhereUniqueWithoutProjectKiInput[]
    updateMany?: CustomerFundUpdateManyWithWhereWithoutProjectKiInput | CustomerFundUpdateManyWithWhereWithoutProjectKiInput[]
    deleteMany?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
  }

  export type CustomerFundUncheckedUpdateManyWithoutProjectKiNestedInput = {
    create?: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput> | CustomerFundCreateWithoutProjectKiInput[] | CustomerFundUncheckedCreateWithoutProjectKiInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutProjectKiInput | CustomerFundCreateOrConnectWithoutProjectKiInput[]
    upsert?: CustomerFundUpsertWithWhereUniqueWithoutProjectKiInput | CustomerFundUpsertWithWhereUniqueWithoutProjectKiInput[]
    createMany?: CustomerFundCreateManyProjectKiInputEnvelope
    set?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    disconnect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    delete?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    update?: CustomerFundUpdateWithWhereUniqueWithoutProjectKiInput | CustomerFundUpdateWithWhereUniqueWithoutProjectKiInput[]
    updateMany?: CustomerFundUpdateManyWithWhereWithoutProjectKiInput | CustomerFundUpdateManyWithWhereWithoutProjectKiInput[]
    deleteMany?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
  }

  export type AssetKiCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput> | AssetKiCreateWithoutAssetInput[] | AssetKiUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutAssetInput | AssetKiCreateOrConnectWithoutAssetInput[]
    createMany?: AssetKiCreateManyAssetInputEnvelope
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
  }

  export type AssetKiUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput> | AssetKiCreateWithoutAssetInput[] | AssetKiUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutAssetInput | AssetKiCreateOrConnectWithoutAssetInput[]
    createMany?: AssetKiCreateManyAssetInputEnvelope
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    upsert?: ProjectUpsertWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAssetsInput, ProjectUpdateWithoutAssetsInput>, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetKiUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput> | AssetKiCreateWithoutAssetInput[] | AssetKiUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutAssetInput | AssetKiCreateOrConnectWithoutAssetInput[]
    upsert?: AssetKiUpsertWithWhereUniqueWithoutAssetInput | AssetKiUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetKiCreateManyAssetInputEnvelope
    set?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    disconnect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    delete?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    update?: AssetKiUpdateWithWhereUniqueWithoutAssetInput | AssetKiUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetKiUpdateManyWithWhereWithoutAssetInput | AssetKiUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
  }

  export type AssetKiUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput> | AssetKiCreateWithoutAssetInput[] | AssetKiUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetKiCreateOrConnectWithoutAssetInput | AssetKiCreateOrConnectWithoutAssetInput[]
    upsert?: AssetKiUpsertWithWhereUniqueWithoutAssetInput | AssetKiUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetKiCreateManyAssetInputEnvelope
    set?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    disconnect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    delete?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    connect?: AssetKiWhereUniqueInput | AssetKiWhereUniqueInput[]
    update?: AssetKiUpdateWithWhereUniqueWithoutAssetInput | AssetKiUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetKiUpdateManyWithWhereWithoutAssetInput | AssetKiUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutAssetKisInput = {
    create?: XOR<AssetCreateWithoutAssetKisInput, AssetUncheckedCreateWithoutAssetKisInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAssetKisInput
    connect?: AssetWhereUniqueInput
  }

  export type KiCreateNestedOneWithoutAssetKisInput = {
    create?: XOR<KiCreateWithoutAssetKisInput, KiUncheckedCreateWithoutAssetKisInput>
    connectOrCreate?: KiCreateOrConnectWithoutAssetKisInput
    connect?: KiWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutAssetKisNestedInput = {
    create?: XOR<AssetCreateWithoutAssetKisInput, AssetUncheckedCreateWithoutAssetKisInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAssetKisInput
    upsert?: AssetUpsertWithoutAssetKisInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutAssetKisInput, AssetUpdateWithoutAssetKisInput>, AssetUncheckedUpdateWithoutAssetKisInput>
  }

  export type KiUpdateOneRequiredWithoutAssetKisNestedInput = {
    create?: XOR<KiCreateWithoutAssetKisInput, KiUncheckedCreateWithoutAssetKisInput>
    connectOrCreate?: KiCreateOrConnectWithoutAssetKisInput
    upsert?: KiUpsertWithoutAssetKisInput
    connect?: KiWhereUniqueInput
    update?: XOR<XOR<KiUpdateToOneWithWhereWithoutAssetKisInput, KiUpdateWithoutAssetKisInput>, KiUncheckedUpdateWithoutAssetKisInput>
  }

  export type CustomerFundCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput> | CustomerFundCreateWithoutCustomerInput[] | CustomerFundUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutCustomerInput | CustomerFundCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerFundCreateManyCustomerInputEnvelope
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
  }

  export type CustomerFundUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput> | CustomerFundCreateWithoutCustomerInput[] | CustomerFundUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutCustomerInput | CustomerFundCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerFundCreateManyCustomerInputEnvelope
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType
  }

  export type NullableEnumHoryuStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.HoryuStatusType | null
  }

  export type CustomerFundUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput> | CustomerFundCreateWithoutCustomerInput[] | CustomerFundUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutCustomerInput | CustomerFundCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerFundUpsertWithWhereUniqueWithoutCustomerInput | CustomerFundUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerFundCreateManyCustomerInputEnvelope
    set?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    disconnect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    delete?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    update?: CustomerFundUpdateWithWhereUniqueWithoutCustomerInput | CustomerFundUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerFundUpdateManyWithWhereWithoutCustomerInput | CustomerFundUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
  }

  export type CustomerFundUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput> | CustomerFundCreateWithoutCustomerInput[] | CustomerFundUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFundCreateOrConnectWithoutCustomerInput | CustomerFundCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerFundUpsertWithWhereUniqueWithoutCustomerInput | CustomerFundUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerFundCreateManyCustomerInputEnvelope
    set?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    disconnect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    delete?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    connect?: CustomerFundWhereUniqueInput | CustomerFundWhereUniqueInput[]
    update?: CustomerFundUpdateWithWhereUniqueWithoutCustomerInput | CustomerFundUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerFundUpdateManyWithWhereWithoutCustomerInput | CustomerFundUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCustomerFundsInput = {
    create?: XOR<CustomerCreateWithoutCustomerFundsInput, CustomerUncheckedCreateWithoutCustomerFundsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerFundsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProjectKiCreateNestedOneWithoutCustomerFundsInput = {
    create?: XOR<ProjectKiCreateWithoutCustomerFundsInput, ProjectKiUncheckedCreateWithoutCustomerFundsInput>
    connectOrCreate?: ProjectKiCreateOrConnectWithoutCustomerFundsInput
    connect?: ProjectKiWhereUniqueInput
  }

  export type NullableEnumInheritanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InheritanceType | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutCustomerFundsNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomerFundsInput, CustomerUncheckedCreateWithoutCustomerFundsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerFundsInput
    upsert?: CustomerUpsertWithoutCustomerFundsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomerFundsInput, CustomerUpdateWithoutCustomerFundsInput>, CustomerUncheckedUpdateWithoutCustomerFundsInput>
  }

  export type ProjectKiUpdateOneRequiredWithoutCustomerFundsNestedInput = {
    create?: XOR<ProjectKiCreateWithoutCustomerFundsInput, ProjectKiUncheckedCreateWithoutCustomerFundsInput>
    connectOrCreate?: ProjectKiCreateOrConnectWithoutCustomerFundsInput
    upsert?: ProjectKiUpsertWithoutCustomerFundsInput
    connect?: ProjectKiWhereUniqueInput
    update?: XOR<XOR<ProjectKiUpdateToOneWithWhereWithoutCustomerFundsInput, ProjectKiUpdateWithoutCustomerFundsInput>, ProjectKiUncheckedUpdateWithoutCustomerFundsInput>
  }

  export type EnumExtTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExtType
  }

  export type EnumTemplateTypeFieldUpdateOperationsInput = {
    set?: $Enums.TemplateType
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HoryuStatusType | EnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel> | $Enums.HoryuStatusType | null
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

  export type NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type NestedEnumHoryuStatusTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HoryuStatusType | EnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HoryuStatusType[] | ListEnumHoryuStatusTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHoryuStatusTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HoryuStatusType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHoryuStatusTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumInheritanceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InheritanceType | EnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel> | $Enums.InheritanceType | null
  }

  export type NestedEnumInheritanceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InheritanceType | EnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InheritanceType[] | ListEnumInheritanceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInheritanceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InheritanceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumInheritanceTypeNullableFilter<$PrismaModel>
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

  export type NestedEnumExtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtType | EnumExtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtTypeFilter<$PrismaModel> | $Enums.ExtType
  }

  export type NestedEnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedEnumExtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtType | EnumExtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtType[] | ListEnumExtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtTypeFilter<$PrismaModel>
    _max?: NestedEnumExtTypeFilter<$PrismaModel>
  }

  export type NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ProjectKiCreateWithoutKiInput = {
    id?: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Project: ProjectCreateNestedOneWithoutProjectKisInput
    CustomerFunds?: CustomerFundCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiUncheckedCreateWithoutKiInput = {
    id?: string
    projectId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    CustomerFunds?: CustomerFundUncheckedCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiCreateOrConnectWithoutKiInput = {
    where: ProjectKiWhereUniqueInput
    create: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput>
  }

  export type ProjectKiCreateManyKiInputEnvelope = {
    data: ProjectKiCreateManyKiInput | ProjectKiCreateManyKiInput[]
    skipDuplicates?: boolean
  }

  export type AssetKiCreateWithoutKiInput = {
    id?: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Asset: AssetCreateNestedOneWithoutAssetKisInput
  }

  export type AssetKiUncheckedCreateWithoutKiInput = {
    id?: string
    assetId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiCreateOrConnectWithoutKiInput = {
    where: AssetKiWhereUniqueInput
    create: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput>
  }

  export type AssetKiCreateManyKiInputEnvelope = {
    data: AssetKiCreateManyKiInput | AssetKiCreateManyKiInput[]
    skipDuplicates?: boolean
  }

  export type ProjectKiUpsertWithWhereUniqueWithoutKiInput = {
    where: ProjectKiWhereUniqueInput
    update: XOR<ProjectKiUpdateWithoutKiInput, ProjectKiUncheckedUpdateWithoutKiInput>
    create: XOR<ProjectKiCreateWithoutKiInput, ProjectKiUncheckedCreateWithoutKiInput>
  }

  export type ProjectKiUpdateWithWhereUniqueWithoutKiInput = {
    where: ProjectKiWhereUniqueInput
    data: XOR<ProjectKiUpdateWithoutKiInput, ProjectKiUncheckedUpdateWithoutKiInput>
  }

  export type ProjectKiUpdateManyWithWhereWithoutKiInput = {
    where: ProjectKiScalarWhereInput
    data: XOR<ProjectKiUpdateManyMutationInput, ProjectKiUncheckedUpdateManyWithoutKiInput>
  }

  export type ProjectKiScalarWhereInput = {
    AND?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
    OR?: ProjectKiScalarWhereInput[]
    NOT?: ProjectKiScalarWhereInput | ProjectKiScalarWhereInput[]
    id?: StringFilter<"ProjectKi"> | string
    projectId?: StringFilter<"ProjectKi"> | string
    kiId?: StringFilter<"ProjectKi"> | string
    projectKi?: IntFilter<"ProjectKi"> | number
    paymentDate?: DateTimeFilter<"ProjectKi"> | Date | string
    reportDate?: DateTimeFilter<"ProjectKi"> | Date | string
    topic?: StringFilter<"ProjectKi"> | string
    createdAt?: DateTimeFilter<"ProjectKi"> | Date | string
    createdId?: StringFilter<"ProjectKi"> | string
    createdBy?: StringFilter<"ProjectKi"> | string
    updatedAt?: DateTimeFilter<"ProjectKi"> | Date | string
    updatedId?: StringFilter<"ProjectKi"> | string
    updatedBy?: StringFilter<"ProjectKi"> | string
  }

  export type AssetKiUpsertWithWhereUniqueWithoutKiInput = {
    where: AssetKiWhereUniqueInput
    update: XOR<AssetKiUpdateWithoutKiInput, AssetKiUncheckedUpdateWithoutKiInput>
    create: XOR<AssetKiCreateWithoutKiInput, AssetKiUncheckedCreateWithoutKiInput>
  }

  export type AssetKiUpdateWithWhereUniqueWithoutKiInput = {
    where: AssetKiWhereUniqueInput
    data: XOR<AssetKiUpdateWithoutKiInput, AssetKiUncheckedUpdateWithoutKiInput>
  }

  export type AssetKiUpdateManyWithWhereWithoutKiInput = {
    where: AssetKiScalarWhereInput
    data: XOR<AssetKiUpdateManyMutationInput, AssetKiUncheckedUpdateManyWithoutKiInput>
  }

  export type AssetKiScalarWhereInput = {
    AND?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
    OR?: AssetKiScalarWhereInput[]
    NOT?: AssetKiScalarWhereInput | AssetKiScalarWhereInput[]
    id?: StringFilter<"AssetKi"> | string
    assetId?: StringFilter<"AssetKi"> | string
    kiId?: StringFilter<"AssetKi"> | string
    projectKi?: IntFilter<"AssetKi"> | number
    situation?: StringFilter<"AssetKi"> | string
    photoDate?: DateTimeFilter<"AssetKi"> | Date | string
    photo1?: StringNullableFilter<"AssetKi"> | string | null
    photo2?: StringNullableFilter<"AssetKi"> | string | null
    photo3?: StringNullableFilter<"AssetKi"> | string | null
    photo4?: StringNullableFilter<"AssetKi"> | string | null
    createdAt?: DateTimeFilter<"AssetKi"> | Date | string
    createdId?: StringFilter<"AssetKi"> | string
    createdBy?: StringFilter<"AssetKi"> | string
    updatedAt?: DateTimeFilter<"AssetKi"> | Date | string
    updatedId?: StringFilter<"AssetKi"> | string
    updatedBy?: StringFilter<"AssetKi"> | string
  }

  export type ProjectKiCreateWithoutProjectInput = {
    id?: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Ki: KiCreateNestedOneWithoutProjectKisInput
    CustomerFunds?: CustomerFundCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiUncheckedCreateWithoutProjectInput = {
    id?: string
    kiId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    CustomerFunds?: CustomerFundUncheckedCreateNestedManyWithoutProjectKiInput
  }

  export type ProjectKiCreateOrConnectWithoutProjectInput = {
    where: ProjectKiWhereUniqueInput
    create: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput>
  }

  export type ProjectKiCreateManyProjectInputEnvelope = {
    data: ProjectKiCreateManyProjectInput | ProjectKiCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AssetCreateWithoutProjectInput = {
    id?: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    AssetKis?: AssetKiCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    AssetKis?: AssetKiUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutProjectInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput>
  }

  export type AssetCreateManyProjectInputEnvelope = {
    data: AssetCreateManyProjectInput | AssetCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectKiUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectKiWhereUniqueInput
    update: XOR<ProjectKiUpdateWithoutProjectInput, ProjectKiUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectKiCreateWithoutProjectInput, ProjectKiUncheckedCreateWithoutProjectInput>
  }

  export type ProjectKiUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectKiWhereUniqueInput
    data: XOR<ProjectKiUpdateWithoutProjectInput, ProjectKiUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectKiUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectKiScalarWhereInput
    data: XOR<ProjectKiUpdateManyMutationInput, ProjectKiUncheckedUpdateManyWithoutProjectInput>
  }

  export type AssetUpsertWithWhereUniqueWithoutProjectInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutProjectInput, AssetUncheckedUpdateWithoutProjectInput>
    create: XOR<AssetCreateWithoutProjectInput, AssetUncheckedCreateWithoutProjectInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutProjectInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutProjectInput, AssetUncheckedUpdateWithoutProjectInput>
  }

  export type AssetUpdateManyWithWhereWithoutProjectInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutProjectInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    projectId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    address?: StringFilter<"Asset"> | string
    registeredAddress?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    createdId?: StringFilter<"Asset"> | string
    createdBy?: StringFilter<"Asset"> | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    updatedId?: StringFilter<"Asset"> | string
    updatedBy?: StringFilter<"Asset"> | string
  }

  export type ProjectCreateWithoutProjectKisInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Assets?: AssetCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectKisInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Assets?: AssetUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectKisInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectKisInput, ProjectUncheckedCreateWithoutProjectKisInput>
  }

  export type KiCreateWithoutProjectKisInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    AssetKis?: AssetKiCreateNestedManyWithoutKiInput
  }

  export type KiUncheckedCreateWithoutProjectKisInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    AssetKis?: AssetKiUncheckedCreateNestedManyWithoutKiInput
  }

  export type KiCreateOrConnectWithoutProjectKisInput = {
    where: KiWhereUniqueInput
    create: XOR<KiCreateWithoutProjectKisInput, KiUncheckedCreateWithoutProjectKisInput>
  }

  export type CustomerFundCreateWithoutProjectKiInput = {
    id?: string
    fundId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Customer: CustomerCreateNestedOneWithoutCustomerFundsInput
  }

  export type CustomerFundUncheckedCreateWithoutProjectKiInput = {
    id?: string
    fundId: string
    customerId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundCreateOrConnectWithoutProjectKiInput = {
    where: CustomerFundWhereUniqueInput
    create: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput>
  }

  export type CustomerFundCreateManyProjectKiInputEnvelope = {
    data: CustomerFundCreateManyProjectKiInput | CustomerFundCreateManyProjectKiInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutProjectKisInput = {
    update: XOR<ProjectUpdateWithoutProjectKisInput, ProjectUncheckedUpdateWithoutProjectKisInput>
    create: XOR<ProjectCreateWithoutProjectKisInput, ProjectUncheckedCreateWithoutProjectKisInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectKisInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectKisInput, ProjectUncheckedUpdateWithoutProjectKisInput>
  }

  export type ProjectUpdateWithoutProjectKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Assets?: AssetUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Assets?: AssetUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type KiUpsertWithoutProjectKisInput = {
    update: XOR<KiUpdateWithoutProjectKisInput, KiUncheckedUpdateWithoutProjectKisInput>
    create: XOR<KiCreateWithoutProjectKisInput, KiUncheckedCreateWithoutProjectKisInput>
    where?: KiWhereInput
  }

  export type KiUpdateToOneWithWhereWithoutProjectKisInput = {
    where?: KiWhereInput
    data: XOR<KiUpdateWithoutProjectKisInput, KiUncheckedUpdateWithoutProjectKisInput>
  }

  export type KiUpdateWithoutProjectKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    AssetKis?: AssetKiUpdateManyWithoutKiNestedInput
  }

  export type KiUncheckedUpdateWithoutProjectKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    AssetKis?: AssetKiUncheckedUpdateManyWithoutKiNestedInput
  }

  export type CustomerFundUpsertWithWhereUniqueWithoutProjectKiInput = {
    where: CustomerFundWhereUniqueInput
    update: XOR<CustomerFundUpdateWithoutProjectKiInput, CustomerFundUncheckedUpdateWithoutProjectKiInput>
    create: XOR<CustomerFundCreateWithoutProjectKiInput, CustomerFundUncheckedCreateWithoutProjectKiInput>
  }

  export type CustomerFundUpdateWithWhereUniqueWithoutProjectKiInput = {
    where: CustomerFundWhereUniqueInput
    data: XOR<CustomerFundUpdateWithoutProjectKiInput, CustomerFundUncheckedUpdateWithoutProjectKiInput>
  }

  export type CustomerFundUpdateManyWithWhereWithoutProjectKiInput = {
    where: CustomerFundScalarWhereInput
    data: XOR<CustomerFundUpdateManyMutationInput, CustomerFundUncheckedUpdateManyWithoutProjectKiInput>
  }

  export type CustomerFundScalarWhereInput = {
    AND?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
    OR?: CustomerFundScalarWhereInput[]
    NOT?: CustomerFundScalarWhereInput | CustomerFundScalarWhereInput[]
    id?: StringFilter<"CustomerFund"> | string
    fundId?: StringFilter<"CustomerFund"> | string
    customerId?: StringFilter<"CustomerFund"> | string
    projectKiId?: StringFilter<"CustomerFund"> | string
    fundStatus?: StringFilter<"CustomerFund"> | string
    applyUnit?: IntFilter<"CustomerFund"> | number
    bankCode?: IntFilter<"CustomerFund"> | number
    bankName?: StringFilter<"CustomerFund"> | string
    bankBranchCode?: IntFilter<"CustomerFund"> | number
    bankBranchName?: StringFilter<"CustomerFund"> | string
    bankAccountTypeCode?: IntFilter<"CustomerFund"> | number
    bankAccountType?: StringFilter<"CustomerFund"> | string
    bankAccount?: StringFilter<"CustomerFund"> | string
    inheritanceType?: EnumInheritanceTypeNullableFilter<"CustomerFund"> | $Enums.InheritanceType | null
    inheritanceStatus?: StringNullableFilter<"CustomerFund"> | string | null
    giftContractDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    trustTransferDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    oldBunpaiEndDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    newBunpaiStartDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    bunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    bunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiThisKi?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiYear?: IntNullableFilter<"CustomerFund"> | number | null
    otherBunpaiTotal?: IntNullableFilter<"CustomerFund"> | number | null
    instructionDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDueDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerFund"> | Date | string | null
    holdPayment?: BoolFilter<"CustomerFund"> | boolean
    holdMemo?: StringNullableFilter<"CustomerFund"> | string | null
    createdAt?: DateTimeFilter<"CustomerFund"> | Date | string
    createdId?: StringFilter<"CustomerFund"> | string
    createdBy?: StringFilter<"CustomerFund"> | string
    updatedAt?: DateTimeFilter<"CustomerFund"> | Date | string
    updatedId?: StringFilter<"CustomerFund"> | string
    updatedBy?: StringFilter<"CustomerFund"> | string
  }

  export type ProjectCreateWithoutAssetsInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAssetsInput = {
    id: string
    sbimpId: string
    name: string
    shortName: string
    totalUnit: number
    totalAmount: bigint | number
    unitAmount: number
    trustTermStart: Date | string
    trustTermEnd: Date | string
    dividendYield: number
    fullOccupancyYield: number
    totalKubun?: number
    residenceKubun?: number
    kamiyachoFlag?: boolean
    mlspcFlag?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAssetsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
  }

  export type AssetKiCreateWithoutAssetInput = {
    id?: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Ki: KiCreateNestedOneWithoutAssetKisInput
  }

  export type AssetKiUncheckedCreateWithoutAssetInput = {
    id?: string
    kiId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiCreateOrConnectWithoutAssetInput = {
    where: AssetKiWhereUniqueInput
    create: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput>
  }

  export type AssetKiCreateManyAssetInputEnvelope = {
    data: AssetKiCreateManyAssetInput | AssetKiCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutAssetsInput = {
    update: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type ProjectUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    totalUnit?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unitAmount?: IntFieldUpdateOperationsInput | number
    trustTermStart?: DateTimeFieldUpdateOperationsInput | Date | string
    trustTermEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendYield?: FloatFieldUpdateOperationsInput | number
    fullOccupancyYield?: FloatFieldUpdateOperationsInput | number
    totalKubun?: IntFieldUpdateOperationsInput | number
    residenceKubun?: IntFieldUpdateOperationsInput | number
    kamiyachoFlag?: BoolFieldUpdateOperationsInput | boolean
    mlspcFlag?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AssetKiUpsertWithWhereUniqueWithoutAssetInput = {
    where: AssetKiWhereUniqueInput
    update: XOR<AssetKiUpdateWithoutAssetInput, AssetKiUncheckedUpdateWithoutAssetInput>
    create: XOR<AssetKiCreateWithoutAssetInput, AssetKiUncheckedCreateWithoutAssetInput>
  }

  export type AssetKiUpdateWithWhereUniqueWithoutAssetInput = {
    where: AssetKiWhereUniqueInput
    data: XOR<AssetKiUpdateWithoutAssetInput, AssetKiUncheckedUpdateWithoutAssetInput>
  }

  export type AssetKiUpdateManyWithWhereWithoutAssetInput = {
    where: AssetKiScalarWhereInput
    data: XOR<AssetKiUpdateManyMutationInput, AssetKiUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetCreateWithoutAssetKisInput = {
    id?: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Project: ProjectCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutAssetKisInput = {
    id?: string
    projectId: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetCreateOrConnectWithoutAssetKisInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutAssetKisInput, AssetUncheckedCreateWithoutAssetKisInput>
  }

  export type KiCreateWithoutAssetKisInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiCreateNestedManyWithoutKiInput
  }

  export type KiUncheckedCreateWithoutAssetKisInput = {
    id: string
    year: number
    month: number
    completed?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKis?: ProjectKiUncheckedCreateNestedManyWithoutKiInput
  }

  export type KiCreateOrConnectWithoutAssetKisInput = {
    where: KiWhereUniqueInput
    create: XOR<KiCreateWithoutAssetKisInput, KiUncheckedCreateWithoutAssetKisInput>
  }

  export type AssetUpsertWithoutAssetKisInput = {
    update: XOR<AssetUpdateWithoutAssetKisInput, AssetUncheckedUpdateWithoutAssetKisInput>
    create: XOR<AssetCreateWithoutAssetKisInput, AssetUncheckedCreateWithoutAssetKisInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutAssetKisInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutAssetKisInput, AssetUncheckedUpdateWithoutAssetKisInput>
  }

  export type AssetUpdateWithoutAssetKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutAssetKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type KiUpsertWithoutAssetKisInput = {
    update: XOR<KiUpdateWithoutAssetKisInput, KiUncheckedUpdateWithoutAssetKisInput>
    create: XOR<KiCreateWithoutAssetKisInput, KiUncheckedCreateWithoutAssetKisInput>
    where?: KiWhereInput
  }

  export type KiUpdateToOneWithWhereWithoutAssetKisInput = {
    where?: KiWhereInput
    data: XOR<KiUpdateWithoutAssetKisInput, KiUncheckedUpdateWithoutAssetKisInput>
  }

  export type KiUpdateWithoutAssetKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUpdateManyWithoutKiNestedInput
  }

  export type KiUncheckedUpdateWithoutAssetKisInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKis?: ProjectKiUncheckedUpdateManyWithoutKiNestedInput
  }

  export type CustomerFundCreateWithoutCustomerInput = {
    id?: string
    fundId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    ProjectKi: ProjectKiCreateNestedOneWithoutCustomerFundsInput
  }

  export type CustomerFundUncheckedCreateWithoutCustomerInput = {
    id?: string
    fundId: string
    projectKiId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundCreateOrConnectWithoutCustomerInput = {
    where: CustomerFundWhereUniqueInput
    create: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerFundCreateManyCustomerInputEnvelope = {
    data: CustomerFundCreateManyCustomerInput | CustomerFundCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerFundUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerFundWhereUniqueInput
    update: XOR<CustomerFundUpdateWithoutCustomerInput, CustomerFundUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerFundCreateWithoutCustomerInput, CustomerFundUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerFundUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerFundWhereUniqueInput
    data: XOR<CustomerFundUpdateWithoutCustomerInput, CustomerFundUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerFundUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerFundScalarWhereInput
    data: XOR<CustomerFundUpdateManyMutationInput, CustomerFundUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutCustomerFundsInput = {
    id?: string
    sbimpId?: string | null
    name: string
    nameFurigana: string
    birthday?: Date | string | null
    customerType?: $Enums.CustomerType
    horyuStatus?: $Enums.HoryuStatusType | null
    invoice?: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerUncheckedCreateWithoutCustomerFundsInput = {
    id?: string
    sbimpId?: string | null
    name: string
    nameFurigana: string
    birthday?: Date | string | null
    customerType?: $Enums.CustomerType
    horyuStatus?: $Enums.HoryuStatusType | null
    invoice?: boolean
    postName: string
    zip: string
    fullAddress: string
    prefecture: string
    city: string
    address: string
    isDeleted?: boolean
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerCreateOrConnectWithoutCustomerFundsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomerFundsInput, CustomerUncheckedCreateWithoutCustomerFundsInput>
  }

  export type ProjectKiCreateWithoutCustomerFundsInput = {
    id?: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
    Project: ProjectCreateNestedOneWithoutProjectKisInput
    Ki: KiCreateNestedOneWithoutProjectKisInput
  }

  export type ProjectKiUncheckedCreateWithoutCustomerFundsInput = {
    id?: string
    projectId: string
    kiId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type ProjectKiCreateOrConnectWithoutCustomerFundsInput = {
    where: ProjectKiWhereUniqueInput
    create: XOR<ProjectKiCreateWithoutCustomerFundsInput, ProjectKiUncheckedCreateWithoutCustomerFundsInput>
  }

  export type CustomerUpsertWithoutCustomerFundsInput = {
    update: XOR<CustomerUpdateWithoutCustomerFundsInput, CustomerUncheckedUpdateWithoutCustomerFundsInput>
    create: XOR<CustomerCreateWithoutCustomerFundsInput, CustomerUncheckedCreateWithoutCustomerFundsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomerFundsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomerFundsInput, CustomerUncheckedUpdateWithoutCustomerFundsInput>
  }

  export type CustomerUpdateWithoutCustomerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutCustomerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sbimpId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameFurigana?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    horyuStatus?: NullableEnumHoryuStatusTypeFieldUpdateOperationsInput | $Enums.HoryuStatusType | null
    invoice?: BoolFieldUpdateOperationsInput | boolean
    postName?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectKiUpsertWithoutCustomerFundsInput = {
    update: XOR<ProjectKiUpdateWithoutCustomerFundsInput, ProjectKiUncheckedUpdateWithoutCustomerFundsInput>
    create: XOR<ProjectKiCreateWithoutCustomerFundsInput, ProjectKiUncheckedCreateWithoutCustomerFundsInput>
    where?: ProjectKiWhereInput
  }

  export type ProjectKiUpdateToOneWithWhereWithoutCustomerFundsInput = {
    where?: ProjectKiWhereInput
    data: XOR<ProjectKiUpdateWithoutCustomerFundsInput, ProjectKiUncheckedUpdateWithoutCustomerFundsInput>
  }

  export type ProjectKiUpdateWithoutCustomerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutProjectKisNestedInput
    Ki?: KiUpdateOneRequiredWithoutProjectKisNestedInput
  }

  export type ProjectKiUncheckedUpdateWithoutCustomerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectKiCreateManyKiInput = {
    id?: string
    projectId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiCreateManyKiInput = {
    id?: string
    assetId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type ProjectKiUpdateWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutProjectKisNestedInput
    CustomerFunds?: CustomerFundUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiUncheckedUpdateWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    CustomerFunds?: CustomerFundUncheckedUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiUncheckedUpdateManyWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiUpdateWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Asset?: AssetUpdateOneRequiredWithoutAssetKisNestedInput
  }

  export type AssetKiUncheckedUpdateWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiUncheckedUpdateManyWithoutKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectKiCreateManyProjectInput = {
    id?: string
    kiId: string
    projectKi: number
    paymentDate: Date | string
    reportDate: Date | string
    topic: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetCreateManyProjectInput = {
    id?: string
    name: string
    address: string
    registeredAddress: string
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type ProjectKiUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Ki?: KiUpdateOneRequiredWithoutProjectKisNestedInput
    CustomerFunds?: CustomerFundUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    CustomerFunds?: CustomerFundUncheckedUpdateManyWithoutProjectKiNestedInput
  }

  export type ProjectKiUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    AssetKis?: AssetKiUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    AssetKis?: AssetKiUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    registeredAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundCreateManyProjectKiInput = {
    id?: string
    fundId: string
    customerId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundUpdateWithoutProjectKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Customer?: CustomerUpdateOneRequiredWithoutCustomerFundsNestedInput
  }

  export type CustomerFundUncheckedUpdateWithoutProjectKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundUncheckedUpdateManyWithoutProjectKiInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiCreateManyAssetInput = {
    id?: string
    kiId: string
    projectKi: number
    situation: string
    photoDate: Date | string
    photo1?: string | null
    photo2?: string | null
    photo3?: string | null
    photo4?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type AssetKiUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    Ki?: KiUpdateOneRequiredWithoutAssetKisNestedInput
  }

  export type AssetKiUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AssetKiUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    kiId?: StringFieldUpdateOperationsInput | string
    projectKi?: IntFieldUpdateOperationsInput | number
    situation?: StringFieldUpdateOperationsInput | string
    photoDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photo1?: NullableStringFieldUpdateOperationsInput | string | null
    photo2?: NullableStringFieldUpdateOperationsInput | string | null
    photo3?: NullableStringFieldUpdateOperationsInput | string | null
    photo4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundCreateManyCustomerInput = {
    id?: string
    fundId: string
    projectKiId: string
    fundStatus: string
    applyUnit: number
    bankCode: number
    bankName: string
    bankBranchCode: number
    bankBranchName: string
    bankAccountTypeCode: number
    bankAccountType: string
    bankAccount: string
    inheritanceType?: $Enums.InheritanceType | null
    inheritanceStatus?: string | null
    giftContractDate?: Date | string | null
    trustTransferDate?: Date | string | null
    oldBunpaiEndDate?: Date | string | null
    newBunpaiStartDate?: Date | string | null
    bunpaiThisKi?: number | null
    bunpaiYear?: number | null
    bunpaiTotal?: number | null
    otherBunpaiThisKi?: number | null
    otherBunpaiYear?: number | null
    otherBunpaiTotal?: number | null
    instructionDueDate?: Date | string | null
    paymentDueDate?: Date | string | null
    paymentDate?: Date | string | null
    holdPayment?: boolean
    holdMemo?: string | null
    createdAt?: Date | string
    createdId: string
    createdBy: string
    updatedAt?: Date | string
    updatedId: string
    updatedBy: string
  }

  export type CustomerFundUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ProjectKi?: ProjectKiUpdateOneRequiredWithoutCustomerFundsNestedInput
  }

  export type CustomerFundUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    projectKiId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerFundUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    projectKiId?: StringFieldUpdateOperationsInput | string
    fundStatus?: StringFieldUpdateOperationsInput | string
    applyUnit?: IntFieldUpdateOperationsInput | number
    bankCode?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankBranchCode?: IntFieldUpdateOperationsInput | number
    bankBranchName?: StringFieldUpdateOperationsInput | string
    bankAccountTypeCode?: IntFieldUpdateOperationsInput | number
    bankAccountType?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    inheritanceType?: NullableEnumInheritanceTypeFieldUpdateOperationsInput | $Enums.InheritanceType | null
    inheritanceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    giftContractDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trustTransferDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oldBunpaiEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    newBunpaiStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    bunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiThisKi?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiYear?: NullableIntFieldUpdateOperationsInput | number | null
    otherBunpaiTotal?: NullableIntFieldUpdateOperationsInput | number | null
    instructionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    holdPayment?: BoolFieldUpdateOperationsInput | boolean
    holdMemo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use KiCountOutputTypeDefaultArgs instead
     */
    export type KiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectKiCountOutputTypeDefaultArgs instead
     */
    export type ProjectKiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectKiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetCountOutputTypeDefaultArgs instead
     */
    export type AssetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SBIMPUserDefaultArgs instead
     */
    export type SBIMPUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SBIMPUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EAJUserDefaultArgs instead
     */
    export type EAJUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EAJUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KiDefaultArgs instead
     */
    export type KiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectKiDefaultArgs instead
     */
    export type ProjectKiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectKiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetDefaultArgs instead
     */
    export type AssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetKiDefaultArgs instead
     */
    export type AssetKiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetKiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerFundDefaultArgs instead
     */
    export type CustomerFundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerFundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateDefaultArgs instead
     */
    export type TemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateHistoryDefaultArgs instead
     */
    export type TemplateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateHistoryDefaultArgs<ExtArgs>

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