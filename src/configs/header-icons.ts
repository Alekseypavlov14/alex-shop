import heartIcon from '@/shared/icons/heart-outlined.svg'
import cartIcon from '@/shared/icons/cart.svg'

interface HeaderIcon {
  href: string
  icon: any
}

export const headerIcons: HeaderIcon[] = [
  { href: '/favorite', icon: heartIcon },
  { href: '/cart', icon: cartIcon }
]