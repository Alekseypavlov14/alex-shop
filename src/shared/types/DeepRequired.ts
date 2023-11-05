export type DeepRequired<T> = Required<T> & {
  [K in keyof T]: Required<DeepRequired<T[K]>>
}
