import { PreparedProduct } from "../types/prepared-product"
import { FilterCallback } from "../types/filter-callback"
import { SearchFilters } from "../types/search-filters"
import { Diapason } from "@/shared/types/Diapason"
import { Id } from "@/shared/types/Id"

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

function createPriceFilter(priceDiapason?: Diapason) {
  return (products: PreparedProduct[]) => {
    if (!priceDiapason) return products

    return products.filter(product => (
      product.price >= priceDiapason.min &&
      product.price <= priceDiapason.max
    ))
  }
}

function createRatingFilter(ratingDiapason?: Diapason) {
  return (products: PreparedProduct[]) => {
    if (!ratingDiapason) return products

    return products.filter(product => (
      product.rating >= ratingDiapason.min &&
      product.rating <= ratingDiapason.max
    ))
  }
}