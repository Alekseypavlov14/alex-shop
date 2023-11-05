import { prepareProductForUser } from "./prepare-product-for-user"
import { applyPaginationQuery } from "../utils/apply-pagination-query"
import { productRepository } from "@/modules/products/repository"
import { searchByTextQuery } from "../utils/search-by-text-query"
import { getBaseFilters } from "../utils/get-base-filters"
import { sortByStrategy } from "../utils/sort-by-strategy"
import { applyFilters } from "../utils/apply-filters"
import { SearchResult } from "../types/search-result"
import { SearchQuery } from "../types/search-query"

export async function searchProducts(searchQuery: SearchQuery): Promise<SearchResult> {
  const { textQuery, userId, filters, paginationQuery, sortStrategy } = searchQuery

  const allProducts = await productRepository.getAll()
  const products = searchByTextQuery(allProducts, textQuery)
  const preparedProducts = await Promise.all(products.map(product => prepareProductForUser(product, userId)))
  
  const baseFilters = getBaseFilters(preparedProducts)

  const filteredProducts = applyFilters(preparedProducts, filters)

  const sortedFilteredProducts = sortByStrategy(filteredProducts, sortStrategy)
  const sortedFilteredProductsSelectedSlice = applyPaginationQuery(sortedFilteredProducts, paginationQuery)

  return ({
    products: sortedFilteredProductsSelectedSlice,
    baseFilters: baseFilters
  })
}