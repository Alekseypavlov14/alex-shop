import { FC, InputHTMLAttributes } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string[]
}

export const Input: FC<InputProps> = ({ 
  className, 
  classNames = [], 
  ...props 
}) => {
  const combinedClassName = clsx(styles.Input, className, ...classNames)

  return (
    <input className={combinedClassName} {...props} />
  )
}