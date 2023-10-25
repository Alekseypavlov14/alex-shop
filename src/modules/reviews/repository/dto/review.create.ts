import { ReviewEntity } from "../../review.entity"

export interface ReviewCreateDTO extends Omit<ReviewEntity, 'id'> {}