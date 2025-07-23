import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Shedula</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/booking">Book Appointment</Link>
      </div>
    </nav>
  )
}
