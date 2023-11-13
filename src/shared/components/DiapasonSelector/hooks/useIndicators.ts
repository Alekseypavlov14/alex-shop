import { RefObject, useEffect, useState } from "react"
import { updateIndicatorsLabels } from "../utils/update-indicators-labels"
import { setZeroDiapasonStyles } from "../utils/set-zero-diapason-styles"
import { normalizeMinMaxValues } from "../utils/normalize-mix-max-values"
import { updateDiapasonStyles } from "../utils/update-diapason-styles"
import { isDiapasonEqualZero } from "../utils/is-diapason-equal-zero"
import { mapPercentToValue } from "../utils/map-percent-to-value"
import { mapValueToStyle } from "../utils/map-value-to-styles"
import { moveByMouse } from "../utils/move-by-mouse"
import { useDebounce } from "@/shared/hooks/useDebounce"
import { Comparisons } from "@/shared/utils/comparisons"
import { Diapason } from "@/shared/types/Diapason"

interface UseIndicatorsConfig {
  minIndicatorRef: RefObject<HTMLDivElement>
  maxIndicatorRef: RefObject<HTMLDivElement>
  diapasonRef: RefObject<HTMLDivElement>
  value: Diapason
  diapason: Diapason
  onChange: (value: Diapason) => void
  debounced: boolean
}

export function useIndicators(config: UseIndicatorsConfig) {
  const { minIndicatorRef, maxIndicatorRef, diapasonRef, value, diapason, onChange, debounced } = config

  const [min, setMin] = useState<number>(value.min)
  const [max, setMax] = useState<number>(value.max)
  
  const debouncedMin = useDebounce(min)
  const debouncedMax = useDebounce(max)
  
  useEffect(() => {
    if (!minIndicatorRef.current || !maxIndicatorRef.current) return
    
    // if diapason equals zero, do not subscribe on indicators
    if (isDiapasonEqualZero(diapason)) return

    // subscribe on mouse moves
    const unsubscribeMinIndicator = moveByMouse(minIndicatorRef.current, (percent) => setMin(mapPercentToValue(percent, diapason)))
    const unsubscribeMaxIndicator = moveByMouse(maxIndicatorRef.current, (percent) => setMax(mapPercentToValue(percent, diapason)))

    // update value
    setMin((min) => Comparisons.withinDiapason(diapason.min, min, diapason.max))
    setMax((max) => Comparisons.withinDiapason(diapason.min, max, diapason.max))

    return () => {
      unsubscribeMinIndicator()
      unsubscribeMaxIndicator()
    }
  }, [diapason])

  useEffect(() => {
    if (!minIndicatorRef.current || !maxIndicatorRef.current) return
    
    // update indicators
    updateIndicatorsLabels(minIndicatorRef, maxIndicatorRef, { min, max })
    
    // if diapason equals zero, set default styles
    if (isDiapasonEqualZero(diapason)) return setZeroDiapasonStyles(minIndicatorRef, maxIndicatorRef, diapasonRef)
    
    // sync indicator values
    minIndicatorRef.current.style.left = mapValueToStyle(min, diapason)
    maxIndicatorRef.current.style.left = mapValueToStyle(max, diapason)

    // update diapason
    const selectedValue = normalizeMinMaxValues({ min, max })
    updateDiapasonStyles(diapasonRef, selectedValue, diapason)

    if (!debounced) onChange(selectedValue)
  }, [min, max])

  useEffect(() => {
    if (!debounced) return

    const selectedValue = normalizeMinMaxValues({ min: debouncedMin, max: debouncedMax })
    onChange(selectedValue)
  }, [debouncedMin, debouncedMax])

  useEffect(() => {
    const isMinGreaterThanMax = value.min > value.max

    // if min indicator stays righter than max indicator, it must be saved by switching min and max values
    const adoptedMin = isMinGreaterThanMax ? value.max : value.min
    const adoptedMax = isMinGreaterThanMax ? value.min : value.max 
    
    setMin(Comparisons.withinDiapason(diapason.min, adoptedMin, diapason.max))
    setMax(Comparisons.withinDiapason(diapason.min, adoptedMax, diapason.max))
  }, [value])
}