import { Schema, models, model } from 'mongoose'
import { SaleEntity } from '../sale.entity'

const saleSchema = new Schema<SaleEntity>({
  id: { type: String, required: true, unique: true },
  productId: { type: String, required: true },
  newPrice: { type: Number, required: true },
  created: { type: Number, required: true },
  terminates: { type: Number, required: true },
})

export const SaleModel = models?.Sale || model('Sale', saleSchema)