import { FavoriteRepository } from "./favorite.repository"
import { FavoriteCreateDTO } from "./dto/favorite.create"
import { FavoriteEntity } from "../favorite.entity"
import { FavoriteModel } from "./favorite.model"
import { HTTPException } from "@/services/http"
import { generateId } from "@/shared/utils/generateId"
import { Id } from "@/shared/types/Id"

export class FavoriteMongoRepository implements FavoriteRepository {
  async getByUserId(userId: Id) {
    return await FavoriteModel.find<FavoriteEntity>({ userId })
  }

  async create(favoriteCreateDTO: FavoriteCreateDTO) {
    const newFavorite: FavoriteEntity = {
      ...favoriteCreateDTO,
      id: generateId(),
      created: Date.now()
    }
    
    return await FavoriteModel.create<FavoriteEntity>(newFavorite)
      .catch(() => {throw new HTTPException(400)}) as FavoriteEntity
  }

  async deleteById(id: Id) {
    const favorite = await FavoriteModel.findOneAndDelete<FavoriteEntity>({ id })
    if (!favorite) throw new HTTPException(404)
    return favorite
  }
}
