import { ProductInfoSearchFilters, SearchFilters } from "../types/search-filters"
import { getCurrentProductPrice } from "./get-current-product-price"
import { getProductRatingValue } from "./get-product-rating-value"
import { PreparedProduct } from "../types/prepared-product"
import { FilterCallback } from "../types/filter-callback"
import { combineFilters } from "./combine-filters"
import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

// map filter data to filter callbacks that might be used in array.filter()
export function createFilterCallbacks(filters: SearchFilters): FilterCallback[] {
  const categoryFilter = createCategoriesFilter(filters.categories)
  const priceFilter = createPriceFilter(filters.price)
  const ratingFilter = createRatingFilter(filters.rating)
  const infoFilter = createInfoFilter(filters.info)

  return [categoryFilter, priceFilter, ratingFilter, infoFilter]
} 

function createCategoriesFilter(categories?: Id[]) {
  return (products: PreparedProduct[]) => {
    if (!categories) return products

    return products.filter(product => categories.includes(product.categoryId))
  }
}

function createPriceFilter(priceDiapason?: Diapason) {
  return (products: PreparedProduct[]) => {
    if (!priceDiapason) return products

    return products.filter(product => (
      getCurrentProductPrice(product) >= priceDiapason.min &&
      getCurrentProductPrice(product) <= priceDiapason.max
    ))
  }
}

function createRatingFilter(ratingDiapason?: Diapason) {
  return (products: PreparedProduct[]) => {
    if (!ratingDiapason) return products

    return products.filter(product => (
      getProductRatingValue(product) >= ratingDiapason.min &&
      getProductRatingValue(product) <= ratingDiapason.max
    ))
  }
}

function createInfoFilter(productInfo?: Partial<ProductInfoSearchFilters>): FilterCallback {
  return (products: PreparedProduct[]) => {
    if (!productInfo) return products

    const filters = Object.keys(productInfo).map(productInfoProperty => {
      return (products: PreparedProduct[]) => products.filter(product => {
        return productInfo[productInfoProperty]?.includes(product.info[productInfoProperty])
      })
    })

    const combinedInfoFilter = combineFilters(filters)

    return combinedInfoFilter(products)
  }
}