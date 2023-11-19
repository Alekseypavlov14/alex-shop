import { FC } from 'react'
import { getImageSrcProperty } from './utils/get-image-src-property'
import { ProductCardRating } from './components/ProductCardRating'
import { ProductCardPrice } from './components/ProductCardPrice'
import { PreparedProduct } from '@/processes/search-products'
import heartIconOutlined from '@/shared/icons/heart-outlined.svg'
import heartIconFilled from '@/shared/icons/heart-filled.svg'
import cartIcon from '@/shared/icons/cart.svg'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

interface ProductCardProps {
  product: PreparedProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const heartIcon = product.liked ? heartIconFilled : heartIconOutlined

  const imagePath = getImageSrcProperty(product.imagePaths[0])

  return (
    <div className={styles.ProductCard}>
      <div className={styles.CardHeader}>
        <div className={styles.CardHeaderIcon}>
          <Image src={heartIcon} alt='' />
        </div>
        <div className={styles.CardHeaderIcon}>
          <Image src={cartIcon} alt='' />
        </div>
      </div>

      <div className={styles.CardImageContainer}>
        <Image className={styles.CardImage} src={imagePath} alt='' width={160} height={110} />
      </div>

      <div className={styles.CardInfoBlock}>
        <div className={styles.CardTitle}>{product.name}</div>
        <ProductCardRating rating={product.rating} />
      </div>

      <ProductCardPrice price={product.price} sale={product.sale} />
    </div>
  )
}