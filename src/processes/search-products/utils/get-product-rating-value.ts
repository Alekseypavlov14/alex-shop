import { PreparedProduct } from "../types/prepared-product";

export function getProductRatingValue(product: PreparedProduct) {
  return product.rating.value
}