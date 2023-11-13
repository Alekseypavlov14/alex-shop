import { getCurrentProductPrice } from "./get-current-product-price"
import { getProductRatingValue } from "./get-product-rating-value"
import { getBaseInfoFilters } from "./get-base-info-filters"
import { BaseSearchFilters } from "../types/base-search-filters"
import { removeDuplicates } from "@/shared/utils/removeDuplicates"
import { PreparedProduct } from "../types/prepared-product"
import { zeroDiapason } from "@/shared/constants/diapason"
import { Comparisons } from "@/shared/utils/comparisons"
import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

// returns data about price, rating diapasons and categories list of selected products
export function getBaseFilters(products: PreparedProduct[]): BaseSearchFilters {
  if (!products.length) return getEmptyBaseFilters()
  
  const categories: Id[] = removeDuplicates((products.map(product => product.categoryId)))

  const pricesDiapason: Diapason = {
    min: getCurrentProductPrice(Comparisons.getMinimumBy(products, getCurrentProductPrice)),
    max: getCurrentProductPrice(Comparisons.getMaximumBy(products, getCurrentProductPrice))
  }

  const ratingDiapason: Diapason = {
    min: getProductRatingValue(Comparisons.getMinimumBy(products, getProductRatingValue)),
    max: getProductRatingValue(Comparisons.getMaximumBy(products, getProductRatingValue))
  }

  const infoData = getBaseInfoFilters(products)

  return ({
    categories,
    price: pricesDiapason,
    rating: ratingDiapason,
    info: infoData
  })
}

function getEmptyBaseFilters(): BaseSearchFilters {
  return ({
    categories: [],
    price: zeroDiapason,
    rating: zeroDiapason,
    info: {}
  })
}