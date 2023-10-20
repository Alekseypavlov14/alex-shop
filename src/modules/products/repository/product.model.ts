import { Schema, model } from "mongoose"
import { ProductEntity } from "../product.entity"

const productSchema = new Schema<ProductEntity>({
  id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  categoryId: { type: String, required: true }
})

export const ProductModel = model('Product', productSchema)