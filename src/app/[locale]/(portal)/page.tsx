import ProductFeatures from '@/components/ProductFeatures'

export const dynamicParams = false
export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <div>
      <ProductFeatures></ProductFeatures>
    </div>
  )
}
