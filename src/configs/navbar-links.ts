import { ReactNode } from "react"
import { pageUrls } from '@/configs/pages-urls'

export interface NavbarLink {
  href: string
  content: ReactNode
}

export const navbarLinks: NavbarLink[] = [
  { href: pageUrls.searchPage, content: 'Products' },
  { href: pageUrls.blogPage, content: 'Blog' },
]