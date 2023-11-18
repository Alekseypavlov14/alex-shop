import { ReactNode } from "react"

export interface NavbarLink {
  href: string
  content: ReactNode
}

export const navbarLinks: NavbarLink[] = [
  { href: '/search', content: 'Products' },
  { href: '/blog', content: 'Blog' },
]