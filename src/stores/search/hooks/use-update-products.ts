import { updateProductsSelector, useSearchStore } from "../search-store";

export function useUpdateProducts() {
  return useSearchStore(updateProductsSelector)
}