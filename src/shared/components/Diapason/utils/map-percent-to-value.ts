import { Diapason } from "@/shared/types/Diapason"

export function mapPercentToValue(percent: number, diapason: Diapason) {
  return (percent / 100) * (diapason.max - diapason.min) + diapason.min
}