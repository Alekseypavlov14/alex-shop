import { ProductData } from "../types/product-data"
import { 
  PRODUCT_CATEGORY_ID_MINIMAL_LENGTH, 
  PRODUCT_DESCRIPTION_MINIMAL_NAME, 
  PRODUCT_MAXIMUM_IMAGES_AMOUNT, 
  PRODUCT_MAXIMUM_KEYWORDS_AMOUNT, 
  PRODUCT_MINIMAL_IMAGES_AMOUNT, 
  PRODUCT_MINIMAL_PRICE, 
  PRODUCT_NAME_MINIMAL_LENGTH 
} from "@/shared/constants/products"

export function validateProductData(productData: ProductData) {
  return (
    productData.name.length >= PRODUCT_NAME_MINIMAL_LENGTH &&
    productData.description.length >= PRODUCT_DESCRIPTION_MINIMAL_NAME &&
    productData.price >= PRODUCT_MINIMAL_PRICE &&
    productData.categoryId.length >= PRODUCT_CATEGORY_ID_MINIMAL_LENGTH &&
    productData.images.length >= PRODUCT_MINIMAL_IMAGES_AMOUNT &&
    productData.images.length <= PRODUCT_MAXIMUM_IMAGES_AMOUNT &&
    productData.keywords.length <= PRODUCT_MAXIMUM_KEYWORDS_AMOUNT
  )
}