import { Schema, model } from 'mongoose'
import { UserEntity } from '../user.entity'

const userSchema = new Schema<UserEntity>({
  id: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true }
})

export const UserModel = model('User', userSchema)