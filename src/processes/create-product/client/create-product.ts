import { mapProductDataToFormData } from '../utils/map-product-data-to-form-data'
import { productsClientService } from '@/modules/products/client'
import { ProductData } from './../types/product-data'

export async function createProduct(productData: ProductData) {
  const productFormData = mapProductDataToFormData(productData)
  return await productsClientService.create(productFormData)
}