import { SortDirection, SortPriority } from "./types/sort-strategy"

export const ascendingDirection: SortDirection = 'asc'
export const descendingDirection: SortDirection = 'desc'

export const priceSortPriority: SortPriority = 'price'
export const ratingSortPriority: SortPriority = 'rating'
export const dateSortPriority: SortPriority = 'date'

export const maximumProductPerPage = 20