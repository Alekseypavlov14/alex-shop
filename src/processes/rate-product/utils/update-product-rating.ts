import { calculateProductRating } from "./get-product-rating"
import { productRepository } from "@/modules/products/server"
import { ProductEntity } from "@/modules/products"
import { Id } from "@/shared/types/Id"

export async function updateProductRating(productId: Id): Promise<ProductEntity> {
  const newProductRating = await calculateProductRating(productId)
  return await productRepository.updateById(productId, { rating: newProductRating })
}