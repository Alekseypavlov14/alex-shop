import { productCategoryIdInputName, productDescriptionInputName, productImagesInputName, productNameInputName, productPriceInputName } from '../constants'
import { ProductData } from "../types/product-data"

export function mapProductDataToFormData(productData: ProductData) {
  const formData = new FormData()

  formData.append(productNameInputName, productData.name)
  formData.append(productDescriptionInputName, productData.description)
  formData.append(productPriceInputName, String(productData.price))
  formData.append(productCategoryIdInputName, productData.categoryId)
  
  productData.images.map(image => formData.append(productImagesInputName, image))

  return formData
}