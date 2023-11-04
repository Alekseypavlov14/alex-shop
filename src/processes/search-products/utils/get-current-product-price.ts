import { PreparedProduct } from "../types/prepared-product"

export function getCurrentProductPrice(product: PreparedProduct) {
  return product.sale ? product.sale.newPrice : product.price
}