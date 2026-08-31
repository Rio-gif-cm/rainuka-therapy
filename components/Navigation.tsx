import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-warm-gray-200">
      <div className="container-base py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <span className="text-white font-serif font-bold text-lg">R</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-bold text-base text-warm-gray-900 block leading-tight">Rainuka</span>
            <span className="font-serif text-xs text-sage-600 font-medium">LCSW</span>
          </div>
        </Link>

        <ul className="flex items-center gap-1 md:gap-6 text-sm font-medium">
          <li><Link href="/" className="text-warm-gray-700 hover:text-sage-600 px-3 py-2 rounded-md transition-colors">Home</Link></li>
          <li><Link href="/about" className="text-warm-gray-700 hover:text-sage-600 px-3 py-2 rounded-md transition-colors">About</Link></li>
          <li className="hidden md:block"><Link href="/faq" className="text-warm-gray-700 hover:text-sage-600 px-3 py-2 rounded-md transition-colors">FAQ</Link></li>
          <li><Link href="/contact" className="text-warm-gray-700 hover:text-sage-600 px-3 py-2 rounded-md transition-colors">Contact</Link></li>
          <li>
            <Link href="/booking" className="btn btn-primary text-sm">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
