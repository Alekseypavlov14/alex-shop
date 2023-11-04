import { favoriteRepository } from "@/modules/favorites/repository"
import { PreparedProduct } from "../types/prepared-product"
import { saleRepository } from "@/modules/sales/server"
import { ProductEntity } from "@/modules/products"
import { Comparisons } from "@/shared/utils/comparisons"
import { SaleEntity } from "@/modules/sales"
import { Id } from "@/shared/types/Id"

export async function prepareProductForUser(product: ProductEntity, userId: Id): Promise<PreparedProduct> {
  const sales: SaleEntity[] = await saleRepository.getByProductId(product.id)
  const lastSale = Comparisons.getMaximumBy(sales, sale => sale.created)
  const isLastSaleActive = lastSale && Date.now() < lastSale.terminates
  const sale = isLastSaleActive ? lastSale : null

  const userFavorites = await favoriteRepository.getByUserId(userId)
  const liked = userFavorites.map(favorite => favorite.productId).includes(product.id)

  return ({ ...product, sale, liked })
}