import { FC } from 'react'
import { SearchSection } from './components/SearchSection'
import { Navbar } from './components/Navbar'
import { Logo } from '@/shared/components/Logo'
import styles from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <Navbar />
        <SearchSection />
      </div>
    </div>
  )
}