import { Diapason } from "@/shared/types/Diapason"

export function usePriceFilterDefined(priceFilter: Partial<Diapason> | undefined): priceFilter is Diapason {
  return Boolean(priceFilter)
}