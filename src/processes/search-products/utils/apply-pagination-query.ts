import { PaginationQuery } from "../types/pagination-query"
import { PreparedProduct } from "../types/prepared-product"

export function applyPaginationQuery(products: PreparedProduct[], paginationQuery: PaginationQuery) {
  const { limit, skip } = paginationQuery
  return products.slice(skip, skip + limit)
}