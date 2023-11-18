import { productsSelector, useSearchStore } from "../search-store";

export function useProducts() {
  return useSearchStore(productsSelector)
}