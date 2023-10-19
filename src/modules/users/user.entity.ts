import { Id } from "@/shared/types/Id"

export interface UserEntity {
  id: Id
  login: string
  password: string
}