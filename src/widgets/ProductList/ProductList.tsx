import { FC } from 'react'
import { PreparedProduct } from '@/processes/search-products'
import { ProductCard } from '@/processes/search-products/client'
import styles from './ProductList.module.scss'

interface ProductListProps {
  products: PreparedProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.ProductList}>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}