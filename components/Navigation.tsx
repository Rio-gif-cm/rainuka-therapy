'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'

export default function Navigation() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'white',
      borderBottom: `1px solid ${colors.warmGray[200]}`,
    }}>
      <div style={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none', marginRight: '2rem' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: colors.sage[600],
            fontFamily: 'var(--font-merriweather), serif',
          }}>
            Rainuka Oberoi, LCSW
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}>
          <Link href="/about" style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            About
          </Link>
          <Link href="/perinatal" style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            Perinatal
          </Link>
          <Link href="/adhd" style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            ADHD
          </Link>
          <Link href="/career" style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            Career
          </Link>
          <Link href="/faq" style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            FAQ
          </Link>
          <Link 
            href="/booking" 
            style={{ 
              ...styles.button,
              ...styles.btnPrimary,
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem',
            }}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  )
}
