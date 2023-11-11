import { MAXIMUM_RATING, MINIMAL_RATING } from "@/shared/constants/rating"
import { Schema, model, models } from "mongoose"
import { ProductEntity } from "../product.entity"

const productSchema = new Schema<ProductEntity>({
  id: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: {
    value: { type: Number, required: true },
    amount: { type: Number, required: true, min: MINIMAL_RATING, max: MAXIMUM_RATING }
  },
  categoryId: { type: String, required: true },
  imagePaths: { type: [String], required: true },
  keywords: { type: [String], required: true },
  created: { type: Number, required: true },
  info: { type: Schema.Types.Map, required: true },
})

export const ProductModel = models?.Product || model('Product', productSchema)