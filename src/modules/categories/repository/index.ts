import { CategoryMongoRepository } from "./category.mongo.repository";

export type { CategoryRepository } from './category.repository'
export type { CategoryCreateDTO } from './dto/category.create'

export const categoryRepository = new CategoryMongoRepository()