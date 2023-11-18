import { dateSortPriority, descendingDirection } from "../../constants"
import { SortStrategy } from "../../types/sort-strategy"

export function getDefaultSortStrategy(): SortStrategy {
  return { priority: dateSortPriority, direction: descendingDirection }
}