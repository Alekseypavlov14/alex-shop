import { maximumProductPerPage } from "../constants"
import { PaginationQuery } from "../types/pagination-query"

export function mapPageToPaginationQuery(page: number): PaginationQuery {
  return { skip: page * maximumProductPerPage, limit: maximumProductPerPage }
}