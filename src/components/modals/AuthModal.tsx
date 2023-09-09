'use client'

import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/Dialog'
import useAuthModal from '@/hooks/useAuthModal'
import { useState } from 'react'
import { BsPersonDash } from 'react-icons/bs'

const AuthModal = () => {
  const authModal = useAuthModal()
  const [showSignIn, setShowSignIn] = useState(true)
  const toggleCard = () => {
    setShowSignIn((prevShowSignIn) => !prevShowSignIn)
  }

  return (
    <Dialog open={authModal.open} onOpenChange={authModal.setOpen}>
      <DialogTrigger asChild>
        <i>
          <BsPersonDash className="hidden h-6 w-6 sm:block" />
        </i>
      </DialogTrigger>
      <DialogContent className="border-0 p-0 sm:max-w-[425px]">
        {showSignIn ? (
          <SignIn onToggle={toggleCard} />
        ) : (
          <SignUp onToggle={toggleCard} />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
