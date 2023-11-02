import { FC } from 'react'
import { navbarLinks } from '@/configs/navbar-links'
import { Link } from '@/shared/components/Link'
import styles from './Navbar.module.scss'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={styles.Navbar}>
      {navbarLinks.map((navLink, index) => (
        <Link className={styles.NavLink} href={navLink.href} key={index}>
          {navLink.content}
        </Link>
      ))}
    </div>
  )
}