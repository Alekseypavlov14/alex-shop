import { FC } from 'react'
import { headerIcons } from '@/configs/header-icons'
import { Link } from '@/shared/components/Link'
import Image from 'next/image'
import styles from './Icons.module.scss'

interface IconsProps {}

export const Icons: FC<IconsProps> = () => {
  return (
    <div className={styles.Icons}>
      {headerIcons.map(icon => (
        <Link href={icon.href}>
          <Image src={icon.icon} alt='' />
        </Link>
      ))}
    </div>
  )
}