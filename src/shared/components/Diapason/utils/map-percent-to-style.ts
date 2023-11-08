import { indicatorSizeInPx } from "../constants"

export function mapPercentToStyle(percent: number): string {
  return `calc(${percent}% - ${indicatorSizeInPx / 2}px)`
}