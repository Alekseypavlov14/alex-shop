import { mapValueToPercent } from "./map-value-to-percent"
import { indicatorSizeInPx } from "../constants"
import { Diapason } from "@/shared/types/Diapason"

export function mapValueToStyle(value: number, diapason: Diapason): string {
  const percents = mapValueToPercent(value, diapason)
  const style = `calc(${percents}% - ${indicatorSizeInPx / 2}px)`
  return style
}