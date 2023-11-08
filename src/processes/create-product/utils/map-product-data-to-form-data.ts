import { productCategoryIdInputName, productDescriptionInputName, productImagesInputName, productInfoInputName, productKeywordsInputName, productNameInputName, productPriceInputName } from '../constants'
import { ProductData } from "../types/product-data"

export function mapProductDataToFormData(productData: ProductData) {
  const formData = new FormData()

  formData.append(productNameInputName, productData.name)
  formData.append(productDescriptionInputName, productData.description)
  formData.append(productPriceInputName, String(productData.price))
  formData.append(productCategoryIdInputName, productData.categoryId)
  formData.append(productInfoInputName, JSON.stringify(productData.info))

  productData.keywords.forEach(keyword => formData.append(productKeywordsInputName, keyword))
  productData.images.forEach(image => formData.append(productImagesInputName, image))

  return formData
}