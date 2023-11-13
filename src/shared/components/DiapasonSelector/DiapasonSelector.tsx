'use client'

import { useIndicators } from './hooks/useIndicators'
import { FC, useRef } from 'react'
import { Diapason } from '@/shared/types/Diapason'
import { clsx } from '@/shared/utils/clsx'
import styles from './DiapasonSelector.module.scss'

interface DiapasonSelectorProps {
  diapason: Diapason,
  value: Diapason,
  onChange: (diapason: Diapason) => void
  debounced?: boolean
  className?: string
  classNames?: string[]
}

export const DiapasonSelector: FC<DiapasonSelectorProps> = ({ 
  diapason, 
  value, 
  onChange,
  debounced = false,
  className,
  classNames = []
}) => {
  const minimalIndicatorRef = useRef<HTMLDivElement>(null)
  const maximumIndicatorRef = useRef<HTMLDivElement>(null)
  const selectedDiapasonRef = useRef<HTMLDivElement>(null)

  const combinedClassNames = clsx(styles.DiapasonSelector, className, ...classNames)

  useIndicators({
    minIndicatorRef: minimalIndicatorRef,
    maxIndicatorRef: maximumIndicatorRef,
    diapasonRef: selectedDiapasonRef,
    value,
    diapason,
    onChange,
    debounced
  })

  const minIndicatorClassNames = clsx(styles.Indicator, styles.MinIndicator)
  const maxIndicatorClassNames = clsx(styles.Indicator, styles.MaxIndicator)

  return (
    <div className={combinedClassNames}>
      <div className={styles.DiapasonRails}>
        <div className={minIndicatorClassNames} ref={minimalIndicatorRef} data-indicator>
          <div className={styles.IndicatorReference}>
            <div className={styles.IndicatorLabel} data-indicator-label></div>
          </div>
        </div>
        <div className={maxIndicatorClassNames} ref={maximumIndicatorRef} data-indicator>
          <div className={styles.IndicatorReference}>
            <div className={styles.IndicatorLabel} data-indicator-label></div>
          </div>
        </div>
        <div className={styles.SelectedDiapason} ref={selectedDiapasonRef}></div>
      </div>
    </div>
  )
}