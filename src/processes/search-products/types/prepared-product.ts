import { ProductEntity } from "@/modules/products"
import { SaleEntity } from "@/modules/sales"

export interface PreparedProduct extends ProductEntity {
  sale: SaleEntity | null
  liked: boolean
}