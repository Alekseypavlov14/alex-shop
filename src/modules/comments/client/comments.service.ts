import { CommentCreateDTO } from "../repository"
import { CommentEntity } from "../comment.entity"
import { httpService } from "@/services/http"
import { Id } from "@/shared/types/Id"

interface CommentsClientServiceInterface {
  getById: (id: Id) => Promise<CommentEntity>
  getByProductId: (id: Id) => Promise<CommentEntity[]>
  create: (commentCreateDTO: CommentCreateDTO) => Promise<CommentEntity>
  updateById: (id: Id, commentData: Partial<CommentCreateDTO>) => Promise<CommentEntity>
  deleteById: (id: Id) => Promise<CommentEntity>
}

class CommentClientService implements CommentsClientServiceInterface {
  async getById(id: string) {
    return await httpService.get<CommentEntity>(`/api/comments/${id}`)
  }

  async getByProductId(id: string) {
    return await httpService.get<CommentEntity[]>(`/api/comments/product/${id}`)
  }

  async create(commentCreateDTO: CommentCreateDTO) {
    return await httpService.post<CommentCreateDTO, CommentEntity>('/api/comments', commentCreateDTO)
  }

  async updateById(id: string, commentData: Partial<CommentEntity>) {
    return await httpService.put<Partial<CommentCreateDTO>, CommentEntity>(`/api/comments/${id}`, commentData)
  }

  async deleteById(id: string) {
    return await httpService.delete<CommentEntity>(`/api/comments/${id}`)
  }
}

export const commentClientService = new CommentClientService()