import { ProductEntityInfo } from "@/modules/products"
import { Diapason } from "@/shared/types/Diapason"
import { Filters } from "../utils/get-filters-type"
import { Id } from "@/shared/types/Id"

export interface SearchFilters {
  categories?: Id[]
  price?: Partial<Diapason>
  rating?: Partial<Diapason>
  info?: Partial<ProductInfoSearchFilters>
}

export interface ProductInfoSearchFilters extends Filters<ProductEntityInfo> {}