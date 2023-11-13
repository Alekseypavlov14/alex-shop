import { indicatorLabelAttribute } from "../constants"
import { RefObject } from "react"
import { Diapason } from "@/shared/types/Diapason"

export function updateIndicatorsLabels(minIndicatorRef: RefObject<HTMLDivElement>, maxIndicatorRef: RefObject<HTMLDivElement>, value: Diapason) {
  if (!minIndicatorRef.current || !maxIndicatorRef.current) return

  const minIndicatorLabel = minIndicatorRef.current.querySelector(`[${indicatorLabelAttribute}]`)
  const maxIndicatorLabel = maxIndicatorRef.current.querySelector(`[${indicatorLabelAttribute}]`)

  if (!minIndicatorLabel || !maxIndicatorLabel) return

  minIndicatorLabel.innerHTML = parseFloat(value.min.toFixed(1)).toString()
  maxIndicatorLabel.innerHTML = parseFloat(value.max.toFixed(1)).toString()
}