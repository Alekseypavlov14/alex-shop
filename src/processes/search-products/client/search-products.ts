import { PreparedProduct } from "../types/prepared-product"
import { httpService } from "@/services/http/client"
import { SearchQuery } from "../types/search-query"

export async function searchProducts(searchQuery: SearchQuery): Promise<PreparedProduct[]> {
  return await httpService.post<SearchQuery, PreparedProduct[]>('/api/search', searchQuery)
}