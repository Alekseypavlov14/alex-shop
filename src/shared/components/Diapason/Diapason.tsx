'use client'

import { Diapason as IDiapason } from '@/shared/types/Diapason'
import { useIndicators } from './hooks/useIndicators'
import { FC, useRef } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Diapason.module.scss'

interface DiapasonProps {
  diapason: IDiapason,
  value: IDiapason,
  onChange: (diapason: IDiapason) => void
  className?: string
  classNames?: string[]
}

export const Diapason: FC<DiapasonProps> = ({ 
  diapason, 
  value, 
  onChange,
  className,
  classNames = []
}) => {
  const minimalIndicatorRef = useRef<HTMLDivElement>(null)
  const maximumIndicatorRef = useRef<HTMLDivElement>(null)
  const selectedDiapasonRef = useRef<HTMLDivElement>(null)

  const combinedClassNames = clsx(styles.Diapason, className, ...classNames)

  useIndicators({
    minIndicatorRef: minimalIndicatorRef,
    maxIndicatorRef: maximumIndicatorRef,
    diapasonRef: selectedDiapasonRef,
    value,
    diapason,
    onChange
  })

  return (
    <div className={combinedClassNames}>
      <div className={styles.DiapasonRails}>
        <div className={styles.Indicator} ref={minimalIndicatorRef} data-indicator>
          <div className={styles.IndicatorReference}>
            <div className={styles.IndicatorLabel} data-indicator-label></div>
          </div>
        </div>
        <div className={styles.Indicator} ref={maximumIndicatorRef} data-indicator>
          <div className={styles.IndicatorReference}>
            <div className={styles.IndicatorLabel} data-indicator-label></div>
          </div>
        </div>
        <div className={styles.SelectedDiapason} ref={selectedDiapasonRef}></div>
      </div>
    </div>
  )
}