import Menu from './Menu'
import ClientOnly from '@/components/ClientOnly'
import { Icons } from '@/components/Icons'
import ThemeSwitch from '@/components/ThemeSwitch'
import AuthModal from '@/components/modals/AuthModal'
import UserAccountNav from '@/components/navbar/UserAccountNav'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { BsPersonDash } from 'react-icons/bs'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-2">
      {/* logo */}
      <Link href="/" className="order-2 flex items-center gap-2 sm:order-1 ">
        <Icons.logo
          centerPathClassName="center-rotate"
          className="logo h-8 w-8"
        />
      </Link>
      {/* Menu */}
      <Menu className="order-1 sm:order-2 sm:mt-10" />

      {/* TODO: search bar */}

      {/* actions */}
      <div className="order-3 flex items-center justify-center">
        <ClientOnly>
          <ThemeSwitch className="mr-2 h-6 w-6" />
        </ClientOnly>

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <>
            <Link className="sm:hidden" href={`/sign-in`}>
              <BsPersonDash className="h-6 w-6" />
            </Link>
            <AuthModal />
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
