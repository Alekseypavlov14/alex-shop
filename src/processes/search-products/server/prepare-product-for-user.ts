import { favoriteRepository } from "@/modules/favorites/repository"
import { PreparedProduct } from "../types/prepared-product"
import { saleRepository } from "@/modules/sales/server"
import { ProductEntity } from "@/modules/products"
import { SaleEntity } from "@/modules/sales"
import { Id } from "@/shared/types/Id"

export async function prepareProductForUser(product: ProductEntity, userId: Id): Promise<PreparedProduct> {
  const sale: SaleEntity | null = await saleRepository.getByProductId(product.id).catch(() => null) 

  const userFavorites = await favoriteRepository.getByUserId(userId)
  const liked = userFavorites.map(favorite => favorite.productId).includes(product.id)

  return ({ ...product, sale, liked })
}