import { getCurrentProductPrice } from "./get-current-product-price"
import { BaseSearchFilters } from "../types/base-search-filters"
import { PreparedProduct } from "../types/prepared-product"
import { Comparisons } from "@/shared/utils/comparisons"
import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

// returns data about price, rating diapasons and categories list of selected products
export function getBaseFilters(products: PreparedProduct[]): BaseSearchFilters {
  const categories: Id[] = Array.from(new Set(products.map(product => product.categoryId)))

  const pricesDiapason: Diapason = {
    min: getCurrentProductPrice(Comparisons.getMinimumBy(products, getCurrentProductPrice)),
    max: getCurrentProductPrice(Comparisons.getMaximumBy(products, getCurrentProductPrice))
  }

  const ratingDiapason: Diapason = {
    min: Comparisons.getMinimumBy(products, product => product.rating).rating,
    max: Comparisons.getMaximumBy(products, product => product.rating).rating
  }

  return ({
    categories,
    price: pricesDiapason,
    rating: ratingDiapason
  })
}