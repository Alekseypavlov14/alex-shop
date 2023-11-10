import { removeDuplicates } from "@/shared/utils/removeDuplicates"
import { ProductEntity } from "@/modules/products"

// return products that match with text request
export function searchByTextQuery(products: ProductEntity[], textQuery: string): ProductEntity[] {
  const productsMatchedByName = findByProductName(products, textQuery)
  const productsMatchedByDescription = findByDescription(products, textQuery)
  const productsMatchedByKeywords = findByKeywords(products, textQuery)

  return removeDuplicates([
    ...productsMatchedByName, 
    ...productsMatchedByDescription, 
    ...productsMatchedByKeywords
  ])
}

function findByProductName(products: ProductEntity[], text: string) {
  return products.filter(product => product.name.includes(text))
}

function findByDescription(products: ProductEntity[], text: string) {
  return products.filter(product => product.description.includes(text))
}

function findByKeywords(products: ProductEntity[], text: string) {
  const textQueryWords = splitBySpaceSymbols(text)

  const bestMatched = products.filter(product => product.keywords.every(hasSubstringsAmong(textQueryWords)))
  const simpleMatched = products.filter(products => products.keywords.some(hasSubstringsAmong(textQueryWords)))

  return [...bestMatched, ...simpleMatched]
}

function splitBySpaceSymbols(text: string) {
  return text.split(/\s/).filter(substring => substring.length)
}

function hasSubstringsAmong(substrings: string[]) {
  return (text: string) => substrings.some(isSubstringOf(text))
}

function isSubstringOf(text: string) {
  return (substring: string) => text.includes(substring)
}