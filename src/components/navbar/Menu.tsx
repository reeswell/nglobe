'use client'

import MenuList from './MenuList'
import MobileMenuHeader from './MobileMenuHeader'
import useMobileMenuOverlay from '@/hooks/useMobileMenuOverlay'
import type { FC } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const Menu: FC<MenuProps> = ({ className }) => {
  const mobileMenuOverlay = useMobileMenuOverlay()

  return (
    <div className={className}>
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex">
        <MenuList />
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex flex-row sm:hidden ">
        <button
          className="nav-button"
          onClick={() => {
            document
              .getElementsByTagName('body')[0]
              .classList.add('overflow-hidden')
            mobileMenuOverlay.setOpen(true)
          }}
        >
          <AiOutlineMenuUnfold className="h-6 w-6" />
        </button>

        <div className={`${mobileMenuOverlay.open ? 'open' : ''} dropdown`}>
          <MobileMenuHeader className="border-b" />
          <MenuList className="flex-col bg-background" />
        </div>
      </nav>
    </div>
  )
}

export default Menu
