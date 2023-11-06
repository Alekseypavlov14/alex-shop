import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // update value only after delay
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}