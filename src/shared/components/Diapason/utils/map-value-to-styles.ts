import { mapValueToPercent } from "./map-value-to-percent"
import { mapPercentToStyle } from "./map-percent-to-style"
import { Diapason } from "@/shared/types/Diapason"

export function mapValueToStyle(value: number, diapason: Diapason): string {
  return mapPercentToStyle(mapValueToPercent(value, diapason))
}