import Navbar from '@/components/navbar/Navbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background py-1">
      <div className="sm:container">
        <Navbar></Navbar>
      </div>
    </header>
  )
}
