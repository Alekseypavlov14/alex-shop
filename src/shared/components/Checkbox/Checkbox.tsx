import { FC, InputHTMLAttributes } from 'react'
import { clsx } from '@/shared/utils/clsx'
import Image from 'next/image'
import styles from './Checkbox.module.scss'
import checkIcon from './checkIcon.svg'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string[]
}

export const Checkbox: FC<CheckboxProps> = ({ 
  className,
  classNames = [],
  ...props
}) => {
  const combinedClassName = clsx(styles.Checkbox, className, ...classNames)

  return (
    <div className={styles.CheckboxWrapper}>
      <input type='checkbox' className={styles.CheckboxElement} {...props} />
      <div className={combinedClassName}>
        <div className={styles.CheckboxIndicator}>
          <Image src={checkIcon} alt="" />
        </div>
      </div>
    </div>
  )
}