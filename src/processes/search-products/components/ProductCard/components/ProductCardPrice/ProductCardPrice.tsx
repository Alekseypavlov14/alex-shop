import { FC } from 'react'
import { SaleEntity } from '@/modules/sales'
import styles from './ProductCardPrice.module.scss'

interface ProductCardPriceProps {
  price: number
  sale: SaleEntity | null
}

export const ProductCardPrice: FC<ProductCardPriceProps> = ({ sale, price }) => {
  return (
    <div className={styles.ProductCardPrice}>
      {sale ? (
        <>
          <div className={styles.OldPrice}>${price}</div>
          <div className={styles.CurrentPrice}>${sale.newPrice}</div>
        </>
      ) : (
        <>
          <div className={styles.OldPricePlaceholder}>&nbsp;</div>
          <div className={styles.Price}>${price}</div>
        </>
      )}
    </div>
  )
}