import { FavoriteCreateDTO } from "../repository"
import { FavoriteEntity } from "../favorite.entity"
import { httpService } from "@/services/http/client"
import { Id } from "@/shared/types/Id"

interface FavoritesServiceInterface {
  getByUserId: (userId: Id) => Promise<FavoriteEntity[]>
  create: (favoriteCreateDTO: FavoriteCreateDTO) => Promise<FavoriteEntity>
  deleteById: (userId: Id) => Promise<FavoriteEntity>
}

class FavoritesService implements FavoritesServiceInterface {
  async getByUserId(userId: Id) {
    return await httpService.get<FavoriteEntity[]>(`/api/favorites/user/${userId}`)
  }

  async create(favoriteCreateDTO: FavoriteCreateDTO) {
    return await httpService.post<FavoriteCreateDTO, FavoriteEntity>(`/api/favorites`, favoriteCreateDTO)
  }

  async deleteById(id: Id) {
    return await httpService.delete<FavoriteEntity>(`/api/favorites/${id}`)
  }
}

export const favoritesService = new FavoritesService()