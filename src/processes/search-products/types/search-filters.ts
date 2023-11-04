import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

export interface SearchFilters {
  categories?: Id[]
  price?: Partial<Diapason>
  rating?: Partial<Diapason>
}