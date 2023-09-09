import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function MePage() {
  const session = await getServerSession(authOptions)

  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
