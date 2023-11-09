import { Diapason } from "@/shared/types/Diapason";

export function normalizeMinMaxValues(value: Diapason): Diapason {
  return ({
    min: Math.min(value.min, value.max),
    max: Math.max(value.min, value.max)
  })
}