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
  { label: 'Date', value: dateSortPriority },
  { label: 'Price', value: priceSortPriority },
  { label: 'Rating', value: ratingSortPriority },
] 

export const directionOptions: Option<SortDirection>[] = [  
  { label: 'Descending', value: descendingDirection },
  { label: 'Ascending', value: ascendingDirection },
]