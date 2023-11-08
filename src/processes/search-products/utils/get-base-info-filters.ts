import { ProductInfoSearchFilters } from "../types/search-filters"
import { ProductEntityInfo } from "@/modules/products"
import { PreparedProduct } from "../types/prepared-product"

export function getBaseInfoFilters(products: PreparedProduct[]): ProductInfoSearchFilters {
  const productInfos: ProductEntityInfo[] = products.map(product => product.info)
  // get list of products info properties
  const productInfoProperties = Object.keys(Object.assign({}, ...productInfos))

  const productInfoFilters = {} as ProductInfoSearchFilters

  productInfoProperties.forEach(property => {
    // get all values of info property
    const allPropertyEntries = getProductsInfoPropertyValues(products, product => product.info[property])
    // add all values as base filter
    productInfoFilters[property] = allPropertyEntries
  })

  return productInfoFilters
}

function getProductsInfoPropertyValues(products: PreparedProduct[], selector: (product: PreparedProduct) => string) {
  const allProductInfoValues = products.map(selector)
  return Array.from(new Set(allProductInfoValues)).filter(Boolean)
}