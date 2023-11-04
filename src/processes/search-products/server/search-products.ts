import { prepareProductForUser } from "./prepare-product-for-user"
import { applyPaginationQuery } from "../utils/apply-pagination-query"
import { productRepository } from "@/modules/products/repository"
import { searchByTextQuery } from "../utils/search-by-text-query"
import { PreparedProduct } from "../types/prepared-product"
import { sortByStrategy } from "../utils/sort-by-strategy"
import { applyFilters } from "../utils/apply-filters"
import { SearchQuery } from "../types/search-query"

export async function searchProducts(searchQuery: SearchQuery): Promise<PreparedProduct[]> {
  const { textQuery, userId, filters, paginationQuery, sortStrategy } = searchQuery

  const allProducts = await productRepository.getAll()
  const products = searchByTextQuery(allProducts, textQuery)
  
  const preparedProducts = await Promise.all(products.map(product => prepareProductForUser(product, userId)))
  const filteredProducts = applyFilters(preparedProducts, filters)
  const sortedFilteredProducts = sortByStrategy(filteredProducts, sortStrategy)

  const sortedFilteredProductsSelectedSlice = applyPaginationQuery(sortedFilteredProducts, paginationQuery)

  return sortedFilteredProductsSelectedSlice
}