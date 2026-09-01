'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'

export default function HeroSection() {
  return (
    <section style={{ ...styles.section, backgroundColor: colors.warmGray[50] }}>
      <div style={{ ...styles.container, display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
        {/* Text Content */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={styles.h1}>
            Therapy for what's been invisible or misunderstood
          </h1>
          
          <p style={{ ...styles.p, fontSize: '1.125rem', fontWeight: 500 }}>
            Perinatal & reproductive mental health • Adult ADHD • Career transitions
          </p>

          <p style={{ ...styles.p, fontSize: '1.0625rem', color: colors.warmGray[600], maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
            Trauma-informed, culturally humble, and practical. I specialize in what feels stuck—and help you find clarity, belonging, and your own answers.
          </p>

          {/* Trust signals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem', fontSize: '0.875rem', color: colors.warmGray[700], fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <span style={{ color: colors.sage[600], fontSize: '1.125rem' }}>✓</span>
              <span>Telehealth • Sliding Scale</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <span style={{ color: colors.sage[600], fontSize: '1.125rem' }}>✓</span>
              <span>HIPAA Secure</span>
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
            >
              Book a Free 15-Minute Call
            </Link>
            <Link 
              href="/about" 
              style={{ 
                ...styles.button,
                ...styles.btnOutline,
                minWidth: '200px',
              }}
            >
              Learn More About My Approach
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div style={{ flex: 1, width: '100%' }}>
          <div style={{
            aspectRatio: '1',
            borderRadius: '1rem',
            background: `linear-gradient(to bottom right, ${colors.sage[200]} 0%, ${colors.sage[100]} 50%, ${colors.warmGray[100]} 100%)`,
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${colors.sage[200]}`,
          }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '4.5rem', marginBottom: '1rem', opacity: 0.8 }}>👩‍⚕️</div>
              <p style={{ ...styles.p, color: colors.warmGray[700], fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Your Photo Here
              </p>
              <p style={{ ...styles.p, fontSize: '0.875rem', color: colors.warmGray[600] }}>
                Update with Rainuka's professional headshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
