import { CommentMongoRepository } from "./comment.mongo.repository"

export type { CommentRepository } from './comment.repository'
export type { CommentCreateDTO } from './dto/comment.create'

export const commentRepository = new CommentMongoRepository()