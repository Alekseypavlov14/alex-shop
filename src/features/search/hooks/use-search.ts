import { errorSearchStatus, pendingSearchStatus, successSearchStatus } from '../constants'
import { authenticationClientService } from '@/processes/authentication/client'
import { mapPageToPaginationQuery } from '@/processes/search-products'
import { searchProducts } from '@/processes/search-products/client'
import { HTTPException } from '@/services/http'
import { Id } from '@/shared/types/Id'
import {
  useUpdateTextQuery, 
  useUpdateFilters, 
  useResetFilters, 
  useUpdateBaseFilters, 
  useUpdatePage, 
  useUpdateProducts, 
  useUpdateStatus, 
  useSortStrategy
} from '../store'

export function useSearch() {
  const firstPageIndex = 0
  const sortStrategy = useSortStrategy()

  const updateTextQuery = useUpdateTextQuery()
  const updateFilters = useUpdateFilters()
  const resetFilters = useResetFilters()
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
      sortStrategy: sortStrategy,
      userId: userId
    }).catch(() => {
      updateTextQuery('')
      resetFilters()
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
