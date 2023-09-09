import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container h-full max-w-7xl">{children}</main>
      <Footer />
    </>
  )
}
