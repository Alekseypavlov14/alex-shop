import { FC } from 'react'
import { HeaderSearchBar } from './components/HeaderSearchBar'
import { Navbar } from './components/Navbar'
import { Icons } from './components/Icons'
import { Logo } from '@/shared/components/Logo'
import styles from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <HeaderSearchBar />
        <Navbar />
        <Icons />
      </div>
    </div>
  )
}