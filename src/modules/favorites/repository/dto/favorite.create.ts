import { FavoriteEntity } from "../../favorite.entity"

export interface FavoriteCreateDTO extends Omit<FavoriteEntity, 'id' | 'created'> {}