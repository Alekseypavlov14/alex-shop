import { FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import Image from 'next/image'
import cancelIcon from '@/shared/icons/cancel-small.svg'
import styles from './Chip.module.scss'

interface ChipProps {
  className?: string
  classNames?: string[]
  children: ReactNode
  onDelete: () => void
}

export const Chip: FC<ChipProps> = ({ 
  className, 
  classNames = [], 
  children, 
  onDelete 
}) => {
  const combinedClassName = clsx(styles.Chip, className, ...classNames)

  return (
    <div className={combinedClassName}>
      <div className={styles.Value}>{children}</div>
      <Image className={styles.CancelIcon} src={cancelIcon} alt='' onClick={onDelete} />
    </div>
  )
}