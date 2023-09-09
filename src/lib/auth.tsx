import { db } from '@/lib/db'
import { authValidator } from '@/lib/validations/auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = authValidator.parse(credentials)

        const user = await db.user.findUnique({
          where: {
            email,
          },
        })
        if (user) {
          const isCorrectPassword = await bcrypt.compare(
            password,
            user.hashedPassword!
          )
          if (!isCorrectPassword) {
            throw new Error('Invalid password')
          }
          return user
        } else {
          const hashedPassword = await bcrypt.hash(password, 12)
          const newUser = await db.user.create({
            data: {
              email,
              hashedPassword,
            },
          })
          return newUser
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
}
