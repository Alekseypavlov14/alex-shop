import { useUpdateBaseFilters, useUpdatePage, useUpdateProducts, useUpdateStatus } from '@/stores/search'
import { errorSearchStatus, pendingSearchStatus, successSearchStatus } from '../constants'
import { authenticationClientService } from '@/processes/authentication/client'
import { mapPageToPaginationQuery } from '@/processes/search-products'
import { getDefaultSortStrategy } from '../utils/get-default-sort-strategy'
import { useUpdateTextQuery } from "./use-update-text-query"
import { useUpdateFilters } from "./use-update-filters"
import { useResetFilters } from './use-reset-filters'
import { searchProducts } from '@/processes/search-products/client'
import { HTTPException } from '@/services/http'
import { Id } from '@/shared/types/Id'

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
