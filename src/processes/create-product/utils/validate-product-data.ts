import { PRODUCT_CATEGORY_ID_MINIMAL_LENGTH, PRODUCT_DESCRIPTION_MINIMAL_NAME, PRODUCT_NAME_MINIMAL_LENGTH } from "@/shared/constants/products"
import { ProductData } from "../types/product-data"

export function validateProductData(productData: ProductData) {
  return (
    productData.name.length >= PRODUCT_NAME_MINIMAL_LENGTH &&
    productData.description.length >= PRODUCT_DESCRIPTION_MINIMAL_NAME &&
    productData.categoryId.length >= PRODUCT_CATEGORY_ID_MINIMAL_LENGTH &&
    productData.image !== null
  )
}