import { Schema, model, models } from "mongoose"
import { ProductEntity } from "../product.entity"

const productSchema = new Schema<ProductEntity>({
  id: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  categoryId: { type: String, required: true },
  imagePaths: { type: [String], required: true },
  keywords: { type: [String], required: true }
})

export const ProductModel = models?.Product || model('Product', productSchema)