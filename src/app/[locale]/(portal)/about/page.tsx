import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')
  return (
    <div className="mt-10">
      <h1 className="mb-4 text-4xl font-bold">{t('welcome')}</h1>
      <p className="mb-4">{t('description')}</p>
      <ul className="mb-4 ml-8 list-disc">
        <li>{t('features.multiLanguageSupport')}</li>
        <li>{t('features.thirdPartyLogin')}</li>
        <li>{t('features.customLogin')}</li>
        <li>{t('features.themeSwitching')}</li>
        <li>{t('features.responsiveDesign')}</li>
      </ul>
      <p>{t('powerfulFeatures')}</p>
    </div>
  )
}
