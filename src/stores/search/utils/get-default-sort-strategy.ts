import { SortStrategy, dateSortPriority, descendingDirection } from "@/processes/search-products"

export function getDefaultSortStrategy(): SortStrategy {
  return { priority: dateSortPriority, direction: descendingDirection }
}