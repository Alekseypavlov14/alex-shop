import { SaleEntity } from "../../sale.entity"

export interface SaleCreateDTO extends Omit<SaleEntity, 'id' | 'created'> {}