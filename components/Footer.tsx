'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

/* ------------------------------------------------------------------ */
/*  Footer link model — grouped into balanced, scannable columns       */
/* ------------------------------------------------------------------ */

const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: 'Specialties',
    links: [
      { href: '/perinatal', label: 'Perinatal & Reproductive' },
      { href: '/adhd', label: 'Adult ADHD' },
      { href: '/couples', label: 'Couples' },
      { href: '/career', label: 'Career Transitions' },
      { href: '/grief', label: 'Grief & Loss' },
      { href: '/parents', label: 'Parents' },
      { href: '/men', label: "Men's Mental Health" },
      { href: '/lgbtq', label: 'LGBTQ+ Affirming' },
      { href: '/bipoc', label: 'BIPOC Therapy' },
      { href: '/neurodivergent', label: 'Neurodivergent' },
      { href: '/disability-access', label: 'Disability-Affirming' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/guides', label: 'Guides & Articles' },
      { href: '/back-to-school', label: 'Back to School Anxiety' },
      { href: '/holiday-stress', label: 'Holiday Stress' },
      { href: '/providers', label: 'Directories & Insurance' },
      { href: '/financial-access', label: 'Financial Access' },
      { href: '/referrals', label: 'Refer Someone' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { href: '/about', label: 'About Rainuka' },
      { href: '/case-studies', label: 'Client Stories' },
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
    <li style={{ marginBottom: '0.65rem' }}>
      <Link
        href={href}
        style={{
          color: MUTED,
          textDecoration: 'none',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          transition: 'color 0.2s ease',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.color = 'white'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.color = MUTED
        }}
      >
        {label}
      </Link>
    </li>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: colors.sage[300],
        margin: '0 0 1.1rem 0',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </h3>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.warmGray[900],
        color: 'white',
        marginTop: '5rem',
      }}
    >
      {/* ---------- Main grid ---------- */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4.5rem 1.5rem 3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem 2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Brand block */}
        <div style={{ gridColumn: 'span 1', minWidth: '220px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-merriweather), serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.01em',
              }}
            >
              Rainuka Oberoi
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: colors.sage[300],
                marginTop: '0.3rem',
              }}
            >
              Licensed Clinical Social Worker
            </span>
          </Link>

          <p
            style={{
              color: MUTED,
              fontSize: '0.875rem',
              lineHeight: 1.65,
              margin: '1.25rem 0 0 0',
              maxWidth: '30ch',
            }}
          >
            Trauma-informed therapy for perinatal mental health, adult ADHD, relationships, and
            career transitions.
          </p>

          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '1.25rem 0 0 0',
              padding: '0.35rem 0.7rem',
              border: `1px solid ${HAIRLINE}`,
              borderRadius: '999px',
              fontSize: '0.75rem',
              color: BRIGHT,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: colors.sage[400],
              }}
            />
            Telehealth · Sliding scale available
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <ColumnHeading>{column.heading}</ColumnHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {column.links.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact column */}
        <div>
          <ColumnHeading>Get in Touch</ColumnHeading>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.85rem' }}>
              <a
                href="tel:+15551234567"
                style={{
                  color: BRIGHT,
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}
              >
                (555) 123-4567
              </a>
            </li>
            <li style={{ marginBottom: '1.25rem' }}>
              <a
                href="mailto:contact@rainukatherapy.com"
                style={{
                  color: MUTED,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  wordBreak: 'break-word',
                }}
              >
                contact@rainukatherapy.com
              </a>
            </li>
            <li>
              <Link
                href="/booking"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.15rem',
                  backgroundColor: colors.sage[600],
                  color: 'white',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
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
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <p
          style={{
            margin: 0,
            padding: '1.1rem 1.25rem',
            borderRadius: '0.75rem',
            border: `1px solid ${HAIRLINE}`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            color: MUTED,
            fontSize: '0.8125rem',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: BRIGHT, fontWeight: 600 }}>In a crisis?</strong> This site is not
          an emergency service. Call or text <strong style={{ color: BRIGHT }}>988</strong> (Suicide
          &amp; Crisis Lifeline) or dial 911 if you or someone else is in immediate danger.
        </p>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: '2.5rem',
          padding: '1.5rem 1.5rem 2.5rem',
          borderTop: `1px solid ${HAIRLINE}`,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem' }}>
          © {new Date().getFullYear()} Rainuka Oberoi, LCSW. All rights reserved.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.8125rem',
          }}
        >
          {[
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/accessibility', label: 'Accessibility' },
          ].map((link, i) => (
            <span key={link.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  ·
                </span>
              )}
              <Link
                href={link.href}
                style={{ color: MUTED, textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = MUTED
                }}
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
