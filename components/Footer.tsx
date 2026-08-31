import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-warm-gray-900 text-cream-50 py-12 md:py-16">
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-serif font-bold text-cream-50 mb-4">Rainuka Oberoi, LCSW</h4>
            <p className="text-sm leading-relaxed text-cream-100">
              Trauma-informed therapy for perinatal mental health, adult ADHD, and career transitions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-cream-50 mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/perinatal" className="text-cream-100 hover:text-cream-50">Perinatal Mental Health</Link></li>
              <li><Link href="/adhd" className="text-cream-100 hover:text-cream-50">ADHD Therapy</Link></li>
              <li><Link href="/career" className="text-cream-100 hover:text-cream-50">Career Transitions</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-semibold text-cream-50 mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-cream-100 hover:text-cream-50">About</Link></li>
              <li><Link href="/faq" className="text-cream-100 hover:text-cream-50">FAQ</Link></li>
              <li><Link href="/contact" className="text-cream-100 hover:text-cream-50">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-cream-50 mb-4">Get in Touch</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1-555-123-4567" className="text-cream-100 hover:text-cream-50">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:contact@rainukatherapy.com" className="text-cream-100 hover:text-cream-50">
                  contact@rainukatherapy.com
                </a>
              </li>
              <li className="text-xs text-cream-100 mt-4">
                Telehealth • Sliding Scale Available
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-cream-200">
            <p>&copy; {new Date().getFullYear()} Rainuka Oberoi, LCSW. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-cream-50">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cream-50">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
