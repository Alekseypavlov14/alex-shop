import { ProductEntity } from "../../product.entity"

export interface ProductCreateDTO extends Omit<ProductEntity, 'id' | 'rating'> {}