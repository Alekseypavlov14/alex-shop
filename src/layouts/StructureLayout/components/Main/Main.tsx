import { FC, ReactNode } from 'react'
import styles from './Main.module.scss'

interface MainProps {
  children: ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.Main}>
      {children}
    </div>
  )
}