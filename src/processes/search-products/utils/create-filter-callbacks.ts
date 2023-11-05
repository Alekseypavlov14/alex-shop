import { getCurrentProductPrice } from "./get-current-product-price"
import { PreparedProduct } from "../types/prepared-product"
import { FilterCallback } from "../types/filter-callback"
import { SearchFilters } from "../types/search-filters"
import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

// map filter data to filter callbacks that might be used in array.filter()
export function createFilterCallbacks(filters: SearchFilters): FilterCallback[] {
  const categoryFilter = createCategoriesFilter(filters.categories)
  const priceFilter = createPriceFilter(filters.price)
  const ratingCategory = createRatingFilter(filters.rating)

  return [categoryFilter, priceFilter, ratingCategory]
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