'use client'

import { Icons } from '@/components/Icons'
import { SignUpForm } from '@/components/form/SignUpForm'
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

const SignUp: FC<SignInProps> = ({ onToggle }) => {
  const t = useTranslations('Auth')
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t('signUp')}</CardTitle>
        <CardDescription>{t('signUpCardDescription')}</CardDescription>
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
        <SignUpForm></SignUpForm>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          <div className="hidden sm:block">
            {t('alreadyHaveAnAccount')}
            <Button
              type="button"
              variant="link"
              size="sm"
              className="hover:no-underline"
              onClick={onToggle}
            >
              {t('signIn')}
            </Button>
          </div>
          <Link
            aria-label={t('signIn')}
            href="/sign-in"
            className="text-primary underline-offset-4 transition-colors hover:underline sm:hidden"
          >
            {t('signIn')}
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
export default SignUp
