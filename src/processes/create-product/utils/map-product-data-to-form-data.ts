import { productCategoryIdInputName, productDescriptionInputName, productImageInputName, productNameInputName } from '../constants'
import { ProductData } from "../types/product-data"

export function mapProductDataToFormData(productData: ProductData) {
  const formData = new FormData()

  formData.append(productNameInputName, productData.name)
  formData.append(productDescriptionInputName, productData.description)
  formData.append(productCategoryIdInputName, productData.categoryId)
  formData.append(productImageInputName, productData.image)

  return formData
}