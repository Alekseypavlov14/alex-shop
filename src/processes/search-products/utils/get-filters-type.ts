export type Filters<T> = {
  [K in keyof T]: T[K] extends any[] ? T[K] : T[K][]
}
