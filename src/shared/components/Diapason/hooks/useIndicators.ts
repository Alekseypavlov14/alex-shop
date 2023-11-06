import { RefObject, useEffect, useState } from "react"
import { updateIndicatorsLabels } from "../utils/update-indicators-labels"
import { updateDiapasonStyles } from "../utils/update-diapason-styles"
import { mapPercentToValue } from "../utils/map-percent-to-value"
import { mapValueToStyle } from "../utils/map-value-to-styles"
import { moveByMouse } from "../utils/move-by-mouse"
import { Diapason } from "@/shared/types/Diapason"

interface UseIndicatorsConfig {
  minIndicatorRef: RefObject<HTMLDivElement>
  maxIndicatorRef: RefObject<HTMLDivElement>
  diapasonRef: RefObject<HTMLDivElement>
  value: Diapason
  diapason: Diapason
  onChange: (value: Diapason) => void
}

export function useIndicators(config: UseIndicatorsConfig) {
  const { minIndicatorRef, maxIndicatorRef, diapasonRef, value, diapason, onChange } = config

  const [min, setMin] = useState<number>(value.min)
  const [max, setMax] = useState<number>(value.max)
  
  useEffect(() => {
    if (!minIndicatorRef.current || !maxIndicatorRef.current) return

    // default values
    minIndicatorRef.current.style.left = mapValueToStyle(value.min, diapason)
    maxIndicatorRef.current.style.left = mapValueToStyle(value.max, diapason)

    // subscribe on mouse moves
    const unsubscribeMinIndicator = moveByMouse(minIndicatorRef.current, (percent) => setMin(mapPercentToValue(percent, diapason)))
    const unsubscribeMaxIndicator = moveByMouse(maxIndicatorRef.current, (percent) => setMax(mapPercentToValue(percent, diapason)))

    return () => {
      unsubscribeMinIndicator()
      unsubscribeMaxIndicator()
    }
  }, [])

  useEffect(() => {
    const realMinimal = Math.min(min, max)
    const realMaximum = Math.max(min, max)

    const selectedValue = { 
      min: realMinimal, 
      max: realMaximum
    }

    onChange(selectedValue)

    updateDiapasonStyles(diapasonRef, selectedValue, diapason)
    updateIndicatorsLabels(minIndicatorRef, maxIndicatorRef, { min, max })
  }, [min, max])
}