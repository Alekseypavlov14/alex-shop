import { mapValueToPercent } from "./map-value-to-percent"
import { RefObject } from "react"
import { Diapason } from "@/shared/types/Diapason"

export function updateDiapasonStyles(diapasonRef: RefObject<HTMLDivElement>, value: Diapason, diapason: Diapason) {
  if (!diapasonRef.current) return

  const selectedDiapasonStart = Math.max(value.min, diapason.min)
  const selectedDiapasonEnd = Math.min(value.max, diapason.max)

  const selectedDiapason = selectedDiapasonEnd - selectedDiapasonStart

  const selectedDiapasonPercent = mapValueToPercent(selectedDiapason + diapason.min, diapason)
  const minValuePercent = mapValueToPercent(selectedDiapasonStart, diapason)

  const width = `${selectedDiapasonPercent}%`
  const left = `${minValuePercent}%`

  diapasonRef.current.style.width = width
  diapasonRef.current.style.left = left
}