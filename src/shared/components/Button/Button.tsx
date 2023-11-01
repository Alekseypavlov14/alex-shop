import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  outlined?: boolean
  classNames?: string[]
}

export const Button: FC<ButtonProps> = ({ 
  onClick, 
  children, 
  outlined = false, 
  classNames = [], 
  className = '',
  ...props 
}) => {
  const combinedClassName = clsx(styles.Button, outlined && styles.Outlined, className,  ...classNames)

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  )
}