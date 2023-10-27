import { ReviewCreateDTO } from "../repository"
import { ReviewEntity } from "../review.entity"
import { httpService } from "@/services/http"
import { Id } from "@/shared/types/Id"

interface ReviewsClientServiceInterface {
  getById: (id: Id) => Promise<ReviewEntity>
  getByProductId: (id: Id) => Promise<ReviewEntity[]>
  create: (reviewCreateDTO: ReviewCreateDTO) => Promise<ReviewEntity>
  updateById: (id: Id, reviewData: Partial<ReviewCreateDTO>) => Promise<ReviewEntity>
  deleteById: (id: Id) => Promise<ReviewEntity>
}

class ReviewsClientService implements ReviewsClientServiceInterface {
  async getById(id: Id) {
    return await httpService.get<ReviewEntity>(`/api/reviews/${id}`)
  }

  async getByProductId(id: Id) {
    return await httpService.get<ReviewEntity[]>(`/api/reviews/product/${id}`)
  }

  async create(reviewCreateDTO: ReviewCreateDTO) {
    return await httpService.post<ReviewCreateDTO, ReviewEntity>('/api/reviews', reviewCreateDTO)
  }

  async updateById(id: Id, reviewData: ReviewCreateDTO) {
    return await httpService.put<Partial<ReviewCreateDTO>, ReviewEntity>(`/api/reviews/${id}`, reviewData)
  }

  async deleteById(id: Id) {
    return await httpService.delete<ReviewEntity>(`/api/reviews/${id}`)
  }
}

export const reviewsClientService = new ReviewsClientService()