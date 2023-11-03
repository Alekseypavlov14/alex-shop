import { FavoriteMongoRepository } from './favorite.mongo.repository'

export type { FavoriteCreateDTO } from './dto/favorite.create'
export type { FavoriteRepository } from './favorite.repository'

export const favoriteRepository = new FavoriteMongoRepository()