export interface SortStrategy {
  priority: SortPriority
  direction: SortDirection
}

export type SortPriority = 'rating' | 'price' | 'date'
export type SortDirection = 'asc' | 'desc'