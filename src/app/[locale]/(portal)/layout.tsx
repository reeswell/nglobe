import Layout from '@/components/layout/Layout'
import type { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default layout
