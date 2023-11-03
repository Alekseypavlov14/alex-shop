import { FavoriteCreateDTO } from "./dto/favorite.create"
import { FavoriteEntity } from "../favorite.entity"
import { Id } from "@/shared/types/Id"

export interface FavoriteRepository {
  getByUserId: (userId: Id) => Promise<FavoriteEntity[]>
  create: (favoriteCreateDTO: FavoriteCreateDTO) => Promise<FavoriteEntity>
  deleteById: (id: Id) => Promise<FavoriteEntity>
}