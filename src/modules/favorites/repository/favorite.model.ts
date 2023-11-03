import { Schema, models, model } from 'mongoose'
import { FavoriteEntity } from '../favorite.entity'

const favoriteSchema = new Schema<FavoriteEntity>({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  created: { type: Number, required: true }
})

export const FavoriteModel = models?.Favorite || model('Favorite', favoriteSchema)