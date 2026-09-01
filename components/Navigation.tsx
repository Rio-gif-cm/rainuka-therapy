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
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
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
            transition: 'color 0.2s ease',
            outline: '2px solid transparent',
            outlineOffset: '2px',
            borderRadius: '0.25rem',
            padding: '0.25rem',
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = colors.sage[700]
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.color = colors.sage[600]
          }}
          onFocus={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.outline = `2px solid ${colors.sage[600]}`
          }}
          onBlur={(e) => {
            const target = e.currentTarget as HTMLElement
            target.style.outline = '2px solid transparent'
          }}>
            Rainuka Oberoi, LCSW
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}>
          <Link href="/about" 
            style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s ease', paddingBottom: '0.25rem', borderBottom: `2px solid transparent`, outline: '2px solid transparent', outlineOffset: '2px', borderRadius: '0.25rem', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.sage[600]
              target.style.borderBottomColor = colors.sage[600]
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.warmGray[700]
              target.style.borderBottomColor = 'transparent'
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}>
            About
          </Link>
          <Link href="/perinatal" 
            style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s ease', paddingBottom: '0.25rem', borderBottom: `2px solid transparent`, outline: '2px solid transparent', outlineOffset: '2px', borderRadius: '0.25rem', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.sage[600]
              target.style.borderBottomColor = colors.sage[600]
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.warmGray[700]
              target.style.borderBottomColor = 'transparent'
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}>
            Perinatal
          </Link>
          <Link href="/adhd" 
            style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s ease', paddingBottom: '0.25rem', borderBottom: `2px solid transparent`, outline: '2px solid transparent', outlineOffset: '2px', borderRadius: '0.25rem', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.sage[600]
              target.style.borderBottomColor = colors.sage[600]
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.warmGray[700]
              target.style.borderBottomColor = 'transparent'
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}>
            ADHD
          </Link>
          <Link href="/career" 
            style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s ease', paddingBottom: '0.25rem', borderBottom: `2px solid transparent`, outline: '2px solid transparent', outlineOffset: '2px', borderRadius: '0.25rem', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.sage[600]
              target.style.borderBottomColor = colors.sage[600]
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.warmGray[700]
              target.style.borderBottomColor = 'transparent'
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}>
            Career
          </Link>
          <Link href="/faq" 
            style={{ color: colors.warmGray[700], textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s ease', paddingBottom: '0.25rem', borderBottom: `2px solid transparent`, outline: '2px solid transparent', outlineOffset: '2px', borderRadius: '0.25rem', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.sage[600]
              target.style.borderBottomColor = colors.sage[600]
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.color = colors.warmGray[700]
              target.style.borderBottomColor = 'transparent'
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}>
            FAQ
          </Link>
          <Link 
            href="/booking" 
            style={{ 
              ...styles.button,
              ...styles.btnPrimary,
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem',
              outline: '2px solid transparent',
              outlineOffset: '2px',
            }}
            onFocus={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = `2px solid ${colors.sage[600]}`
            }}
            onBlur={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.outline = '2px solid transparent'
            }}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  )
}
