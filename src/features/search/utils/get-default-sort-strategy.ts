import { dateSortPriority, descendingDirection, SortStrategy } from "@/processes/search-products"

export function getDefaultSortStrategy(): SortStrategy {
  return { priority: dateSortPriority, direction: descendingDirection }
}