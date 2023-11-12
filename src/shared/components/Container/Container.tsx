import { FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const combinedClassName = clsx(styles.Container, className)

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  )
}