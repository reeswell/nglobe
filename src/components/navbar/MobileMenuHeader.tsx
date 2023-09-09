'use client'

import { Icons } from '@/components/Icons'
import useMobileMenuOverlay from '@/hooks/useMobileMenuOverlay'
import Link from 'next/link'
import type { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface MobileMenuheaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileMenuHeader: FC<MobileMenuheaderProps> = ({ className }) => {
  const mobileMenuOverlay = useMobileMenuOverlay()

  const handleClose = () => {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
    mobileMenuOverlay.setOpen(false)
  }
  return (
    <header className={className}>
      <div className="flex items-center justify-center  p-2">
        <Link
          onClick={handleClose}
          href="/"
          className="flex items-center gap-2"
        >
          <Icons.logo
            centerPathClassName="center-rotate"
            className="logo h-8 w-8"
          />
        </Link>
      </div>
      <AiOutlineClose
        className="absolute right-4 top-3 h-6 w-6"
        onClick={handleClose}
      />
    </header>
  )
}
export default MobileMenuHeader
