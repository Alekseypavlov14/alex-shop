import { Diapason } from "@/shared/types/Diapason"

export function useRatingFilterDefined(ratingFilter: Partial<Diapason> | undefined): ratingFilter is Diapason {
  return Boolean(ratingFilter)
}