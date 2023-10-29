import { productRepository } from "@/modules/products/server"
import { getProductRating } from "./get-product-rating"
import { ProductEntity } from "@/modules/products"
import { Id } from "@/shared/types/Id"

export async function updateProductRating(productId: Id): Promise<ProductEntity> {
  const newProductRating = await getProductRating(productId)
  return await productRepository.updateById(productId, { rating: newProductRating })
}