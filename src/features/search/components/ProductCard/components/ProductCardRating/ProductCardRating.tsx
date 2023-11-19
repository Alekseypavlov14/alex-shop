import { FC } from 'react'
import { ProductEntityRating } from '@/modules/products'
import { MAXIMUM_RATING } from '@/shared/constants/rating'
import starOutlinedIcon from '@/shared/icons/star-outlined.svg'
import starFilledIcon from '@/shared/icons/star-filled.svg'
import styles from './ProductCardRating.module.scss'
import Image from 'next/image'

interface ProductCardRatingProps {
  rating: ProductEntityRating
}

export const ProductCardRating: FC<ProductCardRatingProps> = ({ rating }) => {
  const starsAmount = Math.round(rating.value)
  const emptyStarsAmount = MAXIMUM_RATING - starsAmount

  const filledStars = new Array(starsAmount).fill(starFilledIcon)
  const outlinedStars = new Array(emptyStarsAmount).fill(starOutlinedIcon)

  const displayedRatingValue = rating.value.toFixed(1)

  return (
    <div className={styles.ProductCardRating}>
      <div className={styles.ProductCardRatingStars}>
        {filledStars.map((star, index) => (
          <Image src={star} alt='' key={index} />
        ))}

        {outlinedStars.map((star, index) => (
          <Image src={star} alt='' key={index} />
        ))}
      </div>

      <div className={styles.RatingsAmount}>{displayedRatingValue} ({rating.amount})</div>
    </div>
  )
}