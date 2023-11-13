import { Diapason } from "@/shared/types/Diapason"

export function mapValueToPercent(value: number, diapason: Diapason) {
  const percent = (value - diapason.min) / (diapason.max - diapason.min) * 100
  return percent || 0
}