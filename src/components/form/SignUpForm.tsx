'use client'

import { PasswordInput } from '@/components/PasswordInput'
import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { authValidator } from '@/lib/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { PiSpinnerGapBold } from 'react-icons/pi'
import type * as z from 'zod'

type Inputs = z.infer<typeof authValidator>

export function SignUpForm() {
  const t = useTranslations('Auth')
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: Inputs) {
    setIsLoading(true)
    const response = await signIn('credentials', {
      ...values,
      redirect: false,
    })
    setIsLoading(false)
    if (response?.error) {
      return toast.error(response.error)
    }
    // if we are on the sign in page
    if (pathname.includes('/sign-in')) {
      return router.push('/')
    }
    router.refresh()
  }
  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:text-slate-400"
                  placeholder="helloworld@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password')}</FormLabel>
              <FormControl>
                <PasswordInput
                  className="placeholder:text-slate-400"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading && (
            <PiSpinnerGapBold
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {t('signUp')}
          <span className="sr-only">{t('signUp')}</span>
        </Button>
      </form>
    </Form>
  )
}
