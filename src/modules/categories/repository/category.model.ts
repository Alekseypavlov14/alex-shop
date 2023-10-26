import { Schema, model, models } from "mongoose"
import { CategoryEntity } from "../category.entity"

const categorySchema = new Schema<CategoryEntity>({
  id: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true }
})

export const CategoryModel = models?.Category || model<CategoryEntity>('Category', categorySchema)