'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section style={{ ...styles.section, backgroundColor: colors.warmGray[50] }}>
      <div style={{ 
        ...styles.container, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isMobile ? '1.5rem' : '3rem', 
        alignItems: 'center',
      }}>
        {/* Text Content */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={styles.h1}>
            Therapy for what you've been carrying alone
          </h1>
          
          <p style={{ ...styles.p, fontSize: '1.125rem', fontWeight: 500 }}>
            I specialize in what feels stuck: perinatal anxiety, adult ADHD diagnosis, and career crossroads
          </p>

          <p style={{ ...styles.p, fontSize: '1.0625rem', color: colors.warmGray[600], maxWidth: '42rem', margin: '0 auto 1.5rem' }}>
            Trauma-informed, culturally humble, and practical. I specialize in what feels stuck—and help you find clarity, belonging, and your own answers.
          </p>

          {/* Fear-reduction messaging */}
          <p style={{ ...styles.p, fontSize: '0.9rem', color: colors.sage[700], fontWeight: 500, maxWidth: '42rem', margin: '0 auto 2rem', fontStyle: 'italic' }}>
            Whether you've been in therapy before or this is your first time—there's no judgment here. You're not broken for reaching out. You're taking care of yourself.
          </p>

          {/* Trust signals + Scarcity */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? '1rem' : '2rem', 
            justifyContent: 'center', 
            marginBottom: '2.5rem', 
            fontSize: '0.875rem', 
            color: colors.warmGray[700], 
            fontWeight: 500,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <span style={{ color: colors.sage[600], fontSize: '1.125rem' }} aria-hidden="true">✓</span>
              <span>Telehealth • Sliding Scale</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <span style={{ color: colors.sage[600], fontSize: '1.125rem' }} aria-hidden="true">✓</span>
              <span>HIPAA Secure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: colors.warmGray[700], fontWeight: 600 }}>
              <span style={{ fontSize: '1.125rem' }} aria-hidden="true">⏰</span>
              <span>Respond within 24 hours • Usually available within 1-2 weeks</span>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/booking" 
              style={{ 
                ...styles.button,
                ...styles.btnPrimary,
                minWidth: '200px',
                outline: '2px solid transparent',
                outlineOffset: '2px',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = colors.sage[700]
                target.style.boxShadow = `0 10px 25px rgba(107, 148, 79, 0.15)`
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = colors.sage[600]
                target.style.boxShadow = 'none'
              }}
              onFocus={(e) => {
                const target = e.target as HTMLElement
                target.style.outline = `2px solid ${colors.sage[600]}`
              }}
              onBlur={(e) => {
                const target = e.target as HTMLElement
                target.style.outline = '2px solid transparent'
              }}
            >
              Book a Free 15-Minute Call
            </Link>
            <Link 
              href="/about" 
              className="btn-outline"
              style={{ 
                ...styles.button,
                ...styles.btnOutline,
                minWidth: '200px',
                outline: '2px solid transparent',
                outlineOffset: '2px',
              }}
              onFocus={(e) => {
                const target = e.target as HTMLElement
                target.style.outline = `2px solid ${colors.sage[600]}`
              }}
              onBlur={(e) => {
                const target = e.target as HTMLElement
                target.style.outline = '2px solid transparent'
              }}
            >
              See How I Work
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder - Elegant Gradient with Enhanced Shadow */}
        <div style={{ flex: 1, width: '100%' }}>
          <div 
            style={{
              aspectRatio: '1',
              borderRadius: '1.5rem',
              background: `linear-gradient(135deg, ${colors.sage[300]} 0%, ${colors.sage[200]} 25%, ${colors.sage[100]} 50%, ${colors.warmGray[100]} 100%)`,
              overflow: 'hidden',
              /* Enhanced floating shadow hierarchy */
              boxShadow: '0 8px 16px rgba(107, 148, 79, 0.12), 0 20px 40px rgba(63, 57, 53, 0.15), 0 30px 60px -12px rgba(107, 148, 79, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px solid ${colors.sage[100]}`,
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            role="img"
            aria-label="Therapist photo placeholder with calming sage and warm gray gradient"
          >
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%)',
              pointerEvents: 'none',
            }} />
            <div style={{ textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem', opacity: 0.9 }} aria-hidden="true">🌿</div>
              <p style={{ ...styles.p, color: colors.sage[700], fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Space for Your Photo
              </p>
              <p style={{ ...styles.p, fontSize: '0.95rem', color: colors.sage[600] }}>
                Professional headshot will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
