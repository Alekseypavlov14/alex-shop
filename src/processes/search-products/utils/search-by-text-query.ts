import { ProductEntity } from "@/modules/products"

// return products that match with text request
export function searchByTextQuery(products: ProductEntity[], textQuery: string): ProductEntity[] {
  return products.filter(product => {
    const textQueryWords = splitBySpaceSymbols(textQuery).map(toLowerCase)
    
    const isMatched = (
      splitBySpaceSymbols(product.name).map(toLowerCase).some(hasSubstringsAmong(textQueryWords)) ||
      product.keywords.some(keyword => textQueryWords.includes(keyword))
    )

    return isMatched
  })
}

function splitBySpaceSymbols(text: string) {
  return text.split(/\s/).filter(substring => substring.length)
}

function toLowerCase(text: string) {
  return text.toLowerCase()
}

function hasSubstringsAmong(substrings: string[]) {
  return (text: string) => substrings.some(isSubstringOf(text))
}

function isSubstringOf(text: string) {
  return (substring: string) => text.includes(substring)
}