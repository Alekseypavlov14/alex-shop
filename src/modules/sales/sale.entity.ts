import { Id } from "@/shared/types/Id"

export interface SaleEntity {
  id: Id
  productId: Id
  newPrice: number
  created: number
  terminates: number
}