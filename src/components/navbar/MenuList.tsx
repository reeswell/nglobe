'use client'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import useMobileMenuOverlay from '@/hooks/useMobileMenuOverlay'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

const menuItems = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/me', label: 'me' },
]

interface MenuListProps {
  className?: string
}

const MenuList: FC<MenuListProps> = ({ className = '' }) => {
  const t = useTranslations('Menu')
  const router = useRouter()
  const mobileMenuOverlay = useMobileMenuOverlay()
  const locale = useLocale()

  const handleClick = (path: string) => {
    mobileMenuOverlay.setOpen(false)
    const newPath = `/${locale}${path}`
    router.push(newPath)
  }

  return (
    <ul
      className={`${className} flex list-none justify-start gap-3 p-0  sm:items-center`}
    >
      {menuItems.map(({ path, label }) => (
        <li className="dropdown_link" key={path}>
          <Button
            variant="link"
            className="hover:no-underline"
            onClick={() => handleClick(path)}
          >
            {t(label)}
          </Button>
        </li>
      ))}
      <li className="dropdown_link">
        <LanguageSwitcher />
      </li>
    </ul>
  )
}

export default MenuList
