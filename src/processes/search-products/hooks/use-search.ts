import { authenticationClientService } from '@/processes/authentication/client'
import { mapPageToPaginationQuery } from '../utils/map-page-to-pagination-query'
import { searchProducts } from '../client/search-products'
import { HTTPException } from '@/services/http'
import { Id } from '@/shared/types/Id'
import { 
  errorSearchStatus, 
  pendingSearchStatus, 
  successSearchStatus, 
  getDefaultSortStrategy, 
  useUpdateTextQuery, 
  useUpdateFilters, 
  useResetFilters, 
  useUpdateBaseFilters, 
  useUpdatePage, 
  useUpdateProducts, 
  useUpdateStatus 
} from '../store'

export function useSearch() {
  const firstPageIndex = 0

  const updateTextQuery = useUpdateTextQuery()
  const updateFilters = useUpdateFilters()
  const updateBaseFilters = useUpdateBaseFilters()
  const updateProducts = useUpdateProducts()
  const updatePage = useUpdatePage()
  const updateSearchStatus = useUpdateStatus()

  return async (textQuery: string) => {
    const userId: Id | null = await authenticationClientService.getUserId()
    if (!userId) throw new HTTPException(401)

    updateSearchStatus(pendingSearchStatus)

    const searchResult = await searchProducts({
      textQuery: textQuery,
      filters: {},
      paginationQuery: mapPageToPaginationQuery(firstPageIndex),
      sortStrategy: getDefaultSortStrategy(),
      userId: userId
    }).catch(() => {
      updateTextQuery('')
      useResetFilters()
      updateProducts([])
      updateBaseFilters(null)
      updatePage(firstPageIndex)
      updateSearchStatus(errorSearchStatus)

      throw new HTTPException(400)
    })

    updateSearchStatus(successSearchStatus)

    updateTextQuery(textQuery)
    updateFilters(searchResult.baseFilters)
    updateProducts(searchResult.products)
    updateBaseFilters(searchResult.baseFilters)
    updatePage(firstPageIndex)
  }
}
