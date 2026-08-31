import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-base py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-sage-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-serif font-bold text-lg text-warm-gray-800 hidden sm:block">Rainuka Oberoi</span>
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="text-warm-gray-700 hover:text-sage-400">Home</Link></li>
          <li><Link href="/about" className="text-warm-gray-700 hover:text-sage-400">About</Link></li>
          <li className="hidden sm:block"><Link href="/specialties" className="text-warm-gray-700 hover:text-sage-400">Services</Link></li>
          <li className="hidden sm:block"><Link href="/faq" className="text-warm-gray-700 hover:text-sage-400">FAQ</Link></li>
          <li><Link href="/contact" className="text-warm-gray-700 hover:text-sage-400">Contact</Link></li>
          <li>
            <Link href="/booking" className="btn btn-primary text-sm px-4 py-2">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
