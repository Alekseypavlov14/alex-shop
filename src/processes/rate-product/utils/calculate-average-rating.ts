export function calculateAverageRating(rates: number[]): number {
  if (rates.length === 0) return 0

  const ratesSum = rates.reduce((sum: number, rate: number) => sum += rate, 0)
  const averageRating = ratesSum / rates.length
  
  return averageRating
}