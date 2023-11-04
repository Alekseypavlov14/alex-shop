import { ProductEntity } from "@/modules/products"
import { isInArray } from "@/shared/utils/isInArray"

export function searchByTextQuery(products: ProductEntity[], textQuery: string): ProductEntity[] {
  return products.filter(product => {
    const textQueryWords = splitBySpaceSymbols(textQuery)
    
    const isMatched = (
      splitBySpaceSymbols(product.name).some(isInArray(textQueryWords)) ||
      product.keywords.some(isInArray(textQueryWords))
    )

    return isMatched
  })
}

function splitBySpaceSymbols(text: string) {
  return text.split(/\s/).filter(substring => substring.length)
}