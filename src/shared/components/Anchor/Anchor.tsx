import { AnchorHTMLAttributes, FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Anchor.module.scss'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  classNames?: string[]
}

export const Anchor: FC<AnchorProps> = ({ 
  children, 
  className, 
  classNames = [], 
  target = '_blank',
  ...props 
}) => {
  const combinedClassName = clsx(styles.Anchor, className, ...classNames)

  return (
    <a 
      className={combinedClassName} 
      target={target} 
      {...props}
    >
      {children}
    </a>
  )
}