import { UserMongoRepository } from "./user.mongo.repository"

export type { UserCreateDTO } from './dto/user.create'
export type { UserRepository } from './user.repository'

export const userRepository = new UserMongoRepository()