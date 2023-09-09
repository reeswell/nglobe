'use client'

import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

interface ThemeSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      className={className}
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      {currentTheme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  )
}

export default ThemeSwitch
