import { pageUrls } from '@/configs/pages-urls'
import heartIcon from '@/shared/icons/heart-outlined.svg'
import cartIcon from '@/shared/icons/cart.svg'

interface HeaderIcon {
  href: string
  icon: any
}

export const headerIcons: HeaderIcon[] = [
  { href: pageUrls.favoritesPage, icon: heartIcon },
  { href: pageUrls.cartPage, icon: cartIcon }
]