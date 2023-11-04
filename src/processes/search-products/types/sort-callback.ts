import { PreparedProduct } from "./prepared-product"
import { SortDirection } from "./sort-strategy"

export type SortCallback = (products: PreparedProduct[], direction: SortDirection) => PreparedProduct[]