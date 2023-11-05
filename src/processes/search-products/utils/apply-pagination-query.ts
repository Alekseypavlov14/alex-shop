import { PaginationQuery } from "../types/pagination-query"
import { PreparedProduct } from "../types/prepared-product"

// gets slice of products that user requests by pagination
export function applyPaginationQuery(products: PreparedProduct[], paginationQuery: PaginationQuery) {
  const { limit, skip } = paginationQuery
  return products.slice(skip, skip + limit)
}