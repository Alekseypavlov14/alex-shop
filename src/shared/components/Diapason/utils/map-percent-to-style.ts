import { indicatorSizeInPx } from "../constants"

export function mapPercentToStyle(percent: number): string {
  // min and max to protect from moving out of the container
  const min = `-${indicatorSizeInPx / 2}px`
  const max = `calc(100% - ${indicatorSizeInPx / 2}px)`

  return `clamp(${min}, calc(${percent}% - ${indicatorSizeInPx / 2}px), ${max})`
}