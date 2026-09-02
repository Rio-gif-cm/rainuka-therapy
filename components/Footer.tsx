'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

/* ------------------------------------------------------------------ */
/*  Footer link model - grouped into balanced, scannable columns       */
/* ------------------------------------------------------------------ */

const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: 'Specialties',
    links: [
      { href: '/perinatal', label: 'Perinatal & Reproductive' },
      { href: '/adhd', label: 'Adult ADHD' },
      { href: '/career', label: 'Career Transitions' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/guides', label: 'Guides & Articles' },
      { href: '/back-to-school', label: 'Back to School Anxiety' },
      { href: '/holiday-stress', label: 'Holiday Stress' },
      { href: '/providers', label: 'Directories & Insurance' },
      { href: '/referrals', label: 'Refer Someone' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { href: '/about', label: 'About Rainuka' },
      { href: '/pricing', label: 'Fees & Sliding Scale' },
      { href: '/faq', label: 'Common Questions' },
      { href: '/booking', label: 'Book a Consult' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

const MUTED = 'rgba(255, 255, 255, 0.62)'
const BRIGHT = 'rgba(255, 255, 255, 0.9)'
const HAIRLINE = 'rgba(255, 255, 255, 0.12)'

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className="text-sm text-[rgba(255,255,255,0.62)] hover:text-white transition-colors inline-block leading-relaxed"
      >
        {label}
      </Link>
    </li>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: colors.sage[300] }}>
      {children}
    </h3>
  )
}

export default function Footer() {
  return (
    <footer className="mt-20" style={{ backgroundColor: colors.warmGray[900], color: 'white' }}>
      {/* ---------- Main grid ---------- */}
      <div className="max-w-3xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 gap-x-10 items-start">
        {/* Brand block */}
        <div className="lg:col-span-1 min-w-xs">
          <Link href="/" className="no-underline inline-block">
            <span className="block font-serif text-lg font-bold text-white tracking-tighter">
              Rainuka Oberoi
            </span>
            <span
              className="block text-xs font-medium tracking-widest uppercase mt-1"
              style={{ color: colors.sage[300] }}
            >
              Licensed Clinical Social Worker
            </span>
          </Link>

          <p className="text-sm text-[rgba(255,255,255,0.62)] leading-relaxed mt-5 max-w-xs">
            Trauma-informed therapy for perinatal mental health, adult ADHD, relationships, and
            career transitions.
          </p>

          <p
            className="inline-flex items-center gap-2 mt-5 px-3 py-1 border border-[rgba(255,255,255,0.12)] rounded-full text-xs text-[rgba(255,255,255,0.9)]"
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.sage[400] }}
            />
            Telehealth · Sliding scale available
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <ColumnHeading>{column.heading}</ColumnHeading>
            <ul className="list-none p-0 m-0">
              {column.links.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact column */}
        <div>
          <ColumnHeading>Get in Touch</ColumnHeading>
          <ul className="list-none p-0 m-0">
            <li className="mb-3">
              <a
                href="tel:+155****4567"
                className="text-[rgba(255,255,255,0.9)] no-underline font-medium"
              >
                (555) 123-4567
              </a>
            </li>
            <li className="mb-5">
              <a
                href="mailto:contact@rainukatherapy.com"
                className="text-sm text-[rgba(255,255,255,0.62)] no-underline break-words"
              >
                contact@rainukatherapy.com
              </a>
            </li>
            <li>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-full text-sm no-underline transition-colors"
                style={{ backgroundColor: colors.sage[600] }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[500]
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[600]
                }}
              >
                Book a free consult
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- Crisis note ---------- */}
      <div className="max-w-3xl mx-auto px-6">
        <p
          className="my-0 p-4 rounded-lg border text-xs text-[rgba(255,255,255,0.62)] leading-relaxed"
          style={{ borderColor: HAIRLINE, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
        >
          <strong style={{ color: BRIGHT, fontWeight: 600 }}>In a crisis?</strong> This site is not
          an emergency service. Call or text <strong style={{ color: BRIGHT }}>988</strong> (Suicide
          &amp; Crisis Lifeline) or dial 911 if you or someone else is in immediate danger.
        </p>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div
        className="max-w-3xl mx-auto mt-10 px-6 py-6 border-t border-[rgba(255,255,255,0.12)] flex flex-wrap items-center justify-between gap-4"
      >
        <p className="my-0 text-xs text-[rgba(255,255,255,0.45)]">
          © {new Date().getFullYear()} Wonderloud Therapy. All rights reserved.
        </p>

        <div className="flex items-center flex-wrap gap-3 text-xs">
          {[
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/accessibility', label: 'Accessibility' },
          ].map((link, i) => (
            <span key={link.href} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="text-[rgba(255,255,255,0.62)] no-underline hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
