import { FC } from 'react'
import Image from 'next/image'
import logo from './Logo.svg'
import Link from 'next/link'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='' />
    </Link>
  )
}