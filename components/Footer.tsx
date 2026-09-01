'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: colors.warmGray[900],
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        <div>
          <h3 style={{ ...styles.h3, color: 'white', marginBottom: '1rem' }}>
            About
          </h3>
          <p style={{ ...styles.p, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            Trauma-informed therapy for perinatal mental health, adult ADHD, and career transitions.
          </p>
        </div>

        <div>
          <h3 style={{ ...styles.h3, color: 'white', marginBottom: '1rem' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/providers" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                Directories & Insurance
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/booking" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                Book
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/faq" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ ...styles.h3, color: 'white', marginBottom: '1rem' }}>
            Seasonal Support
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/back-to-school" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                Back to School Anxiety
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <p style={{ ...styles.p, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', margin: 0 }}>
                Therapy for seasonal transitions & challenges
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ ...styles.h3, color: 'white', marginBottom: '1rem' }}>
            Get in Touch
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="tel:+1-555-123-4567" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                (555) 123-4567
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="mailto:contact@rainukatherapy.com" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                contact@rainukatherapy.com
              </a>
            </li>
            <li>
              <p style={{ ...styles.p, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                Telehealth • Sliding Scale Available
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: `1px solid ${colors.warmGray[700]}`,
        paddingTop: '2rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.875rem',
      }}>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>
          © 2026 Rainuka Oberoi, LCSW. All rights reserved.
        </p>
        <p style={{ margin: 0, display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
          <Link href="/accessibility" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            Accessibility
          </Link>
        </p>
      </div>
    </footer>
  )
}
