import { productCategoryIdInputName, productDescriptionInputName, productNameInputName, productImageInputName, productPriceInputName } from "../constants"
import { HTTPException } from "@/services/http"
import { ProductData } from "../types/product-data"

export function mapFormDataToProductData(formData: FormData): ProductData {
  const productName = formData.get(productNameInputName) as string || ''
  const productDescription = formData.get(productDescriptionInputName) as string || ''
  const productPrice = formData.get(productPriceInputName) as string || ''
  const productCategoryId = formData.get(productCategoryIdInputName) as string || ''
  const productImage = formData.get(productImageInputName) as File | null

  if (!productImage) throw new HTTPException(400)

  return ({
    name: productName,
    description: productDescription,
    price: Number(productPrice),
    categoryId: productCategoryId,
    image: productImage
  })
}