import { productCategoryIdInputName, productDescriptionInputName, productNameInputName, productImageInputName } from "../constants"
import { HTTPException } from "@/services/http"
import { ProductData } from "../types/product-data"

export function mapFormDataToProductData(formData: FormData): ProductData {
  const productName = formData.get(productNameInputName) as string || ''
  const productDescription = formData.get(productDescriptionInputName) as string || ''
  const productCategoryId = formData.get(productCategoryIdInputName) as string || ''
  const productImage = formData.get(productImageInputName) as File | null

  if (!productImage) throw new HTTPException(400)

  return ({
    name: productName,
    description: productDescription,
    categoryId: productCategoryId,
    image: productImage
  })
}