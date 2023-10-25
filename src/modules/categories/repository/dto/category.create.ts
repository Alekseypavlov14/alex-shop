import { CategoryEntity } from "../../category.entity";

export interface CategoryCreateDTO extends Omit<CategoryEntity, 'id'> {}