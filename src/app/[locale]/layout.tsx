import Providers from '@/components/Providers'
import '@/style/global.css'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

async function getMessages(locale: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (await import(`../../../locales/${locale}/index.json`))
      .default as AbstractIntlMessages
  } catch (error) {
    notFound()
  }
}
export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale)

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const t = createTranslator({ locale, messages })

  return {
    title: t('Meta.title'),
  }
}

type Props = {
  children: ReactNode
  params: { locale: string }
}
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const messages = await getMessages(locale)
  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
