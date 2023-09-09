'use client'

import { Icons } from '@/components/Icons'
import { SignInForm } from '@/components/form/SignInForm'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { FC } from 'react'

interface SignInProps {
  onToggle?: () => void
}

const SignIn: FC<SignInProps> = ({ onToggle }) => {
  const t = useTranslations('Auth')
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t('signIn')}</CardTitle>
        <CardDescription>{t('signInCardDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" onClick={() => signIn('github')}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" onClick={() => signIn('google')}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t('divisionText')}
            </span>
          </div>
        </div>
        <SignInForm></SignInForm>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <div className="hidden sm:block ">
            <span className="mr-1 hidden sm:inline-block">
              {t('signUpText')}
            </span>
            <Button
              type="button"
              variant="link"
              size="sm"
              className=" hover:no-underline"
              onClick={onToggle}
            >
              {t('signUp')}
            </Button>
          </div>
          <Link
            aria-label={t('signUp')}
            href="/sign-up"
            className="text-primary underline-offset-4 transition-colors hover:underline sm:hidden"
          >
            {t('signUp')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
export default SignIn
