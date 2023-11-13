import { RefObject } from "react"
import { indicatorSizeInPx } from "../constants"

export function setZeroDiapasonStyles(
  minIndicatorRef: RefObject<HTMLDivElement>, 
  maxIndicatorRef: RefObject<HTMLDivElement>,
  selectedDiapason: RefObject<HTMLDivElement>
) {
  if (!minIndicatorRef.current || !maxIndicatorRef.current || !selectedDiapason.current) return

  minIndicatorRef.current.style.left = `-${indicatorSizeInPx / 2}px`
  maxIndicatorRef.current.style.left = `calc(100% - ${indicatorSizeInPx / 2}px)`

  selectedDiapason.current.style.left = '0%'
  selectedDiapason.current.style.width = '100%'
}