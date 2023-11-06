import { mapValueToPercent } from "./map-value-to-percent"
import { RefObject } from "react"
import { Diapason } from "@/shared/types/Diapason"

export function updateDiapasonStyles(diapasonRef: RefObject<HTMLDivElement>, value: Diapason, diapason: Diapason) {
  if (!diapasonRef.current) return

  const width = `${mapValueToPercent(value.max - value.min + diapason.min, diapason)}%`
  const left = `${mapValueToPercent(value.min, diapason)}%`

  diapasonRef.current.style.width = width
  diapasonRef.current.style.left = left
}