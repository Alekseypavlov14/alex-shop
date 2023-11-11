import { ProductEntityRating } from "../product.entity";

export function getProductRating(ratings: number[]): ProductEntityRating {
  if (!ratings.length) return ({ value: 0, amount: 0 })

  const ratingsSum = ratings.reduce((rating, sum) => sum += rating, 0)

  const value = ratingsSum / ratings.length

  return ({
    value: value,
    amount: ratings.length
  })
}