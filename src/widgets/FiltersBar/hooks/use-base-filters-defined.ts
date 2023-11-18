import { BaseSearchFilters } from "@/processes/search-products"

export function useBaseFiltersDefined(baseFilters: BaseSearchFilters | null): baseFilters is BaseSearchFilters {
  return Boolean(baseFilters)
}