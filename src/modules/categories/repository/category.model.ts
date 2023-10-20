import { CategoryEntity } from "../category.entity"
import { Schema, model } from "mongoose"

const categorySchema = new Schema<CategoryEntity>({
  id: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true }
})

export const CategoryModel = model<CategoryEntity>('Category', categorySchema)