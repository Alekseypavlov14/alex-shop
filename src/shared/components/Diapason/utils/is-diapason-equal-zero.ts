import { Diapason } from "@/shared/types/Diapason"

export function isDiapasonEqualZero(diapason: Diapason) {
  return (diapason.max - diapason.min) === 0
}