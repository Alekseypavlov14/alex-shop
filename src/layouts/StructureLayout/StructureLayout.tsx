'use client'

import { FC, ReactNode } from 'react'
import { useShouldPageBeWrapped } from './hooks/use-should-page-be-wrapped'
import { Wrapper } from './components/Wrapper'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { Main } from './components/Main'

interface StructureLayoutProps {
  children: ReactNode
}

export const StructureLayout: FC<StructureLayoutProps> = ({ children }) => {
  const shouldBeWrapped = useShouldPageBeWrapped()

  if(!shouldBeWrapped) return children

  return (
    <Wrapper>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </Wrapper>
  )
}