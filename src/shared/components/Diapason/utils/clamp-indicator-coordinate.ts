import { indicatorSizeInPx } from "../constants"
import { mapPercentToStyle } from "./map-percent-to-style"

export function clampIndicatorCoordinate(percent: number) {
  const min = `-${indicatorSizeInPx / 2}px`
  const max = `calc(100% - ${indicatorSizeInPx / 2}px)`

  return `clamp(${min}, ${mapPercentToStyle(percent)}, ${max})`
}