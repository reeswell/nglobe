import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import type { AvatarProps } from '@radix-ui/react-avatar'
import type { User } from 'next-auth'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <>
      <Avatar {...props}>
        {user?.image ? (
          <div className="relative aspect-square h-full w-full">
            <Image
              fill
              src={user.image}
              alt="profile picture"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user?.name}</span>
            <FaUserCircle className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
    </>
  )
}
