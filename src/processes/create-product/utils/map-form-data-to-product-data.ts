import { productCategoryIdInputName, productDescriptionInputName, productNameInputName, productImagesInputName, productPriceInputName, productKeywordsInputName } from "../constants"
import { ProductData } from "../types/product-data"

export function mapFormDataToProductData(formData: FormData): ProductData {
  const productName = formData.get(productNameInputName) as string || ''
  const productDescription = formData.get(productDescriptionInputName) as string || ''
  const productPrice = formData.get(productPriceInputName) as string || ''
  const productCategoryId = formData.get(productCategoryIdInputName) as string || ''
  const productImages = formData.getAll(productImagesInputName) as File[] | null || []
  const productKeywords = formData.getAll(productKeywordsInputName) as string[] | null || []

  return ({
    name: productName,
    description: productDescription,
    price: Number(productPrice),
    categoryId: productCategoryId,
    images: productImages,
    keywords: productKeywords
  })
}