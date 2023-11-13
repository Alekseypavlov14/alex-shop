import { getBaseFilters } from "@/processes/search-products"
import { useProducts } from "./use-products"

export function useBaseFilters() {
  const products = useProducts()
  return getBaseFilters(products)
}