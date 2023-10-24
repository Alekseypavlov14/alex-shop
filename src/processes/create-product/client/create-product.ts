import { mapProductDataToFormData } from '../utils/map-product-data-to-form-data'
import { createProductRequest } from '../utils/create-product-request'
import { ProductData } from './../types/product-data'

export async function createProduct(productData: ProductData) {
  const productFormData = mapProductDataToFormData(productData)
  return await createProductRequest(productFormData)
}