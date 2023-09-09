import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = () => {
  const locales = ['en', 'zh', 'de']
  const t = useTranslations('Locales')
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()

  const handleLanguageChange = (value: string) => {
    const path = pathname.replace(`/${locale}`, '')
    const newPath = `/${value}${path}`
    router.push(newPath)
  }

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={locale}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-background  font-medium  hover:text-foreground">
        {locales.map((locale) => (
          <SelectItem value={locale} key={locale}>
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher
