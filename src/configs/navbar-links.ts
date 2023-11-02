import { ReactNode } from "react"

export interface NavbarLink {
  href: string
  content: ReactNode
}

export const navbarLinks: NavbarLink[] = [
  { href: '/', content: 'Products' },
  { href: '/blog', content: 'Blog' },
  { href: '/policy', content: 'Policy' }
]