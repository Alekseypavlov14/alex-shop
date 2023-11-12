import { Option } from '@/shared/components/Select'
import { 
  SortPriority, 
  priceSortPriority, 
  ratingSortPriority, 
  dateSortPriority, 
  SortDirection,
  ascendingDirection,
  descendingDirection
} from '@/processes/search-products'

export const priorityOptions: Option<SortPriority>[] = [
  { label: 'Price', value: priceSortPriority },
  { label: 'Rating', value: ratingSortPriority },
  { label: 'Date', value: dateSortPriority },
] 

export const directionOptions: Option<SortDirection>[] = [  
  { label: 'Ascending', value: ascendingDirection },
  { label: 'Descending', value: descendingDirection }
]