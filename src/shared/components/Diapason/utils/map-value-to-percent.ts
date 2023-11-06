import { Diapason } from "@/shared/types/Diapason"

export function mapValueToPercent(value: number, diapason: Diapason) {
  return (value - diapason.min) / (diapason.max - diapason.min) * 100
}