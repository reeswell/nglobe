import { Icons } from '@/components/Icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="mt-10 w-full  border-t">
      <div className="flex items-center justify-center py-6">
        <p>{t('authorDescription')}</p>
        <Link
          href="https://github.com/reeswell/nglobe"
          target="_blank"
          rel="noreferrer"
        >
          <Icons.gitHub className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
