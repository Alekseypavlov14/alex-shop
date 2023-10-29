import { ReviewEntity } from "../reviews"

export interface CommentEntity extends ReviewEntity {
  content: string
}