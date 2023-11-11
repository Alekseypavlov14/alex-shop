import { SortDirection, SortPriority, SortStrategy } from "../types/sort-strategy"
import { getCurrentProductPrice } from "./get-current-product-price"
import { getProductRatingValue } from "./get-product-rating-value"
import { Comparisons, Selector } from "@/shared/utils/comparisons"
import { ascendingDirection } from "../constants"
import { PreparedProduct } from "../types/prepared-product"

export function sortByStrategy(products: PreparedProduct[], sortStrategy: SortStrategy): PreparedProduct[] {
  const { priority, direction } = sortStrategy
  
  const sortStrategySelectors: Record<SortPriority, Selector<PreparedProduct>> = {
    price: getCurrentProductPrice,
    rating: getProductRatingValue,
    date: product => product.created,
  }

  return sortProducts(products, sortStrategySelectors[priority], direction)
}

function sortProducts(products: PreparedProduct[], selector: Selector<PreparedProduct>, direction: SortDirection): PreparedProduct[] {
  const [firstProduct, ...restProducts] = products

  if (!firstProduct) return []
  if (!restProducts.length) return [firstProduct]

  const productsWithLessPriorityProperty = Comparisons.filterByLessOrEqualThan(restProducts, selector, selector(firstProduct))
  const productsWithGreaterPriorityProperty = Comparisons.filterByGreaterThan(restProducts, selector, selector(firstProduct))

  return direction === ascendingDirection
    ? [...sortProducts(productsWithLessPriorityProperty, selector, direction), firstProduct, ...sortProducts(productsWithGreaterPriorityProperty, selector, direction)]
    : [...sortProducts(productsWithGreaterPriorityProperty, selector, direction), firstProduct, ...sortProducts(productsWithLessPriorityProperty, selector, direction)]
}