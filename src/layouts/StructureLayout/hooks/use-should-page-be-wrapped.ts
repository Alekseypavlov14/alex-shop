'use client'

import { useEffect, useState } from 'react'
import { pagesWithStructure } from '../constants'
import { Path } from '@/shared/utils/path'

export function useShouldPageBeWrapped() {
  const [shouldBeWrapped, setShouldBeWrapped] = useState(false)

  useEffect(() => {
    const pagePath = window.location.pathname
    const matchesWithPaths = Path.matches(pagePath, pagesWithStructure)
    setShouldBeWrapped(matchesWithPaths)
  }, [])
    
  return shouldBeWrapped
}