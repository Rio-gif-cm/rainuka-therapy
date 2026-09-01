'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { colors, styles } from '@/app/styles'
import { useState, useEffect } from 'react'
import SensoryFriendlyToggle from './SensoryFriendlyToggle'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  isMobile?: boolean
}

function NavLink({ href, label, isActive, isMobile }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      style={{ 
        color: isActive ? colors.sage[600] : colors.warmGray[700],
        textDecoration: 'none', 
        fontSize: isMobile ? '0.9rem' : '0.95rem', 
        fontWeight: 500,
        paddingBottom: '0.25rem',
        /* Mobile-first touch target: 56×56px for anxiety users */
        padding: isMobile ? '0.75rem 1rem' : '0.5rem 0rem',
        minHeight: isMobile ? '56px' : 'auto',
        minWidth: isMobile ? '56px' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: isActive ? `2px solid ${colors.sage[600]}` : '2px solid transparent',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          const target = e.currentTarget as HTMLElement
          target.style.color = colors.sage[600]
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          const target = e.currentTarget as HTMLElement
          target.style.color = colors.warmGray[700]
        }
      }}
    >
      {label}
    </Link>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/perinatal', label: 'Perinatal' },
    { href: '/adhd', label: 'ADHD' },
    { href: '/career', label: 'Career' },
    { href: '/guides', label: 'Guides' },
    { href: '/back-to-school', label: 'Back to School' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ]

  // Mobile nav link padding to meet 56×56px touch target
  const mobileNavLinkPadding = isMobile ? '0.75rem 1rem' : '0rem'

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
        justifyContent: isMobile ? 'center' : 'space-between',
        flexWrap: 'wrap',
        gap: isMobile ? '0.5rem' : '1rem',
        flexDirection: isMobile ? 'column' : 'row',
      }}>
        <Link href="/" style={{ textDecoration: 'none', marginRight: isMobile ? '0rem' : '1rem' }}>
          <div style={{
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 4vw, 1.5rem)',
            fontWeight: 700,
            color: colors.sage[600],
            fontFamily: 'var(--font-merriweather), serif',
            whiteSpace: 'nowrap',
          }}>
            Rainuka Oberoi, LCSW
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '1rem' : '2rem',
          flexWrap: 'wrap',
          justifyContent: isMobile ? 'center' : 'flex-end',
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'auto',
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              isMobile={isMobile}
            />
          ))}
          <SensoryFriendlyToggle isMobile={isMobile} />
          <Link 
            href="/booking"
            style={{ 
              ...styles.button,
              ...styles.btnPrimary,
              padding: isMobile ? '1rem 1.5rem' : '0.5rem 1.25rem',
              minHeight: isMobile ? '56px' : 'auto',
              minWidth: isMobile ? '56px' : 'auto',
              fontSize: isMobile ? '1rem' : '0.9rem',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  )
}
