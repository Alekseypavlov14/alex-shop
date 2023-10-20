import { ReviewRepository } from './review.repository'
import { ReviewCreateDTO } from './dto/review.create'
import { ReviewEntity } from './../review.entity'
import { ReviewModel } from './review.model'
import { generateId } from '@/shared/utils/generateId'
import { Id } from '@/shared/types/Id'

export class ReviewMongoRepository implements ReviewRepository {
  async getById(id: Id) {
    const reviewCandidate = await ReviewModel.findOne<ReviewEntity>({ id })
    if (!reviewCandidate) throw new Error()
    return reviewCandidate
  }

  async getByProductId(id: Id) {
    const reviewCandidate = await ReviewModel.findOne<ReviewEntity>({ productId: id })
    if (!reviewCandidate) throw new Error()
    return reviewCandidate
  }

  async create(reviewCreateDTO: ReviewCreateDTO) {
    const reviewData: ReviewEntity = { ...reviewCreateDTO, id: generateId() }
    return await ReviewModel.create<ReviewEntity>(reviewData)
  }

  async updateById(id: string, updatedData: Partial<ReviewEntity>) {
    const reviewCandidate = await ReviewModel.findOneAndUpdate<ReviewEntity>({ id }, updatedData)
    if (!reviewCandidate) throw new Error()
    return reviewCandidate
  }

  async deleteById(id: string) {
    const reviewCandidate = await ReviewModel.findOneAndDelete<ReviewEntity>({ id })
    if (!reviewCandidate) throw new Error()
    return reviewCandidate
  }
}