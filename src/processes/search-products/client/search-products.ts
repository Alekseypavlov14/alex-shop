import { SearchResult } from "../types/search-result"
import { httpService } from "@/services/http/client"
import { SearchQuery } from "../types/search-query"

export async function searchProducts(searchQuery: SearchQuery): Promise<SearchResult> {
  return await httpService.post<SearchQuery, SearchResult>('/api/search', searchQuery)
}