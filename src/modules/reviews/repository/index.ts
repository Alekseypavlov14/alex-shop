import { ReviewMongoRepository } from "./review.mongo.repository"

export type { ReviewCreateDTO } from './dto/review.create' 
export type { ReviewRepository } from './review.repository'

export const reviewRepository = new ReviewMongoRepository()