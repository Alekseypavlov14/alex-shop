import { FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import styles from './Link.module.scss'

interface LinkProps extends NextLinkProps {
  children: ReactNode
  className?: string
  classNames?: string[]
}

export const Link: FC<LinkProps> = ({ 
  href,
  children,
  className = '',
  classNames = [],
  ...props 
}) => {
  const combinedClassName = clsx(styles.Link, className, ...classNames)

  return (
    <NextLink href={href} className={combinedClassName} {...props}>
      {children}
    </NextLink>
  )
}