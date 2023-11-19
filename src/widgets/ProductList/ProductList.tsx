'use client'

import { FC } from 'react'
import { ProductCard, useProducts } from '@/features/search'
import styles from './ProductList.module.scss'

interface ProductListProps {}

export const ProductList: FC<ProductListProps> = () => {
  const products = useProducts()

  return (
    <div className={styles.ProductList}>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}