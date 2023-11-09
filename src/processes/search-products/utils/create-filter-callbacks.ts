import { ProductInfoSearchFilters, SearchFilters } from "../types/search-filters"
import { getCurrentProductPrice } from "./get-current-product-price"
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

function createPriceFilter(priceDiapason?: Partial<Diapason>) {
  return (products: PreparedProduct[]) => {
    if (!priceDiapason) return products

    return products.filter(product => (
      (priceDiapason.min === undefined ? true : getCurrentProductPrice(product) >= priceDiapason.min) &&
      (priceDiapason.max === undefined ? true : getCurrentProductPrice(product) <= priceDiapason.max)
    ))
  }
}

function createRatingFilter(ratingDiapason?: Partial<Diapason>) {
  return (products: PreparedProduct[]) => {
    if (!ratingDiapason) return products

    return products.filter(product => (
      (ratingDiapason.min === undefined ? true : product.rating >= ratingDiapason.min) &&
      (ratingDiapason.max === undefined ? true : product.rating <= ratingDiapason.max)
    ))
  }
}

function createInfoFilter(productInfo?: Partial<ProductInfoSearchFilters>): FilterCallback {
  console.log(productInfo)

  return (products: PreparedProduct[]) => {
    if (!productInfo) return products

    const filters = Object.keys(productInfo).map(productInfoProperty => {
      return (products: PreparedProduct[]) => products.filter(product => {
        console.log('Property:', productInfoProperty)
        console.log('Value:', productInfo[productInfoProperty])
        console.log('Product:', product.info[productInfoProperty])
        return productInfo[productInfoProperty]?.includes(product.info[productInfoProperty])
      })
    })

    const combinedInfoFilter = combineFilters(filters)

    return combinedInfoFilter(products)
  }
}