import { FC } from 'react'
import { HeaderSearchBar } from '../HeaderSearchBar'
import Image from 'next/image'
import Link from 'next/link'
import heartIcon from '@/shared/icons/heart-outlined.svg'
import cartIcon from '@/shared/icons/cart.svg'
import styles from './SearchSection.module.scss'

interface SearchSectionProps {}

export const SearchSection: FC<SearchSectionProps> = () => {
  return (
    <div className={styles.SearchSection}>
      <HeaderSearchBar />
      
      <div className={styles.Icons}>
        <Link href='/favorite'><Image src={heartIcon} alt='' /></Link>
        <Link href='/cart'><Image src={cartIcon} alt='' /></Link>
      </div>
    </div>
  )
}