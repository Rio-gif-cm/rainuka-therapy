'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'

const specialties = [
  {
    slug: 'perinatal',
    title: 'Perinatal Mental Health',
    icon: '🤰',
    description: 'Pregnancy loss, infertility, postpartum anxiety—what you\'re carrying isn\'t weakness.',
    link: '/perinatal',
    color: colors.sage[600],
  },
  {
    slug: 'adhd',
    title: 'ADHD Therapy',
    icon: '🧠',
    description: 'Late ADHD diagnosis? That shame + relief = what we work with.',
    link: '/adhd',
    color: colors.sage[600],
  },
  {
    slug: 'career',
    title: 'Career Transitions',
    icon: '🚀',
    description: 'Career doubt, burnout, identity questions—transitions are hard. You don\'t have to figure it out alone.',
    link: '/career',
    color: colors.sage[600],
  },
]

export default function NicheGrid() {
  return (
    <section style={{ ...styles.section, backgroundColor: 'white' }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, textAlign: 'center', marginBottom: '1rem' }}>
            What I Specialize In
          </h2>
          <p style={{ ...styles.p, maxWidth: '42rem', margin: '0 auto', fontSize: '1.0625rem', color: colors.warmGray[600] }}>
            Three areas where I've developed deep expertise—and where you might find yourself.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {specialties.map((specialty) => (
            <Link href={specialty.link} key={specialty.slug} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  ...styles.card,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  outline: '2px solid transparent',
                  outlineOffset: '2px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-8px)'
                  el.style.boxShadow = '0 20px 40px -10px rgba(107, 148, 79, 0.12)'
                  el.style.backgroundColor = colors.sage[50]
                  const arrow = el.querySelector('[data-explore-arrow]') as HTMLElement
                  if (arrow) arrow.style.color = colors.sage[700]
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  el.style.backgroundColor = 'white'
                  const arrow = el.querySelector('[data-explore-arrow]') as HTMLElement
                  if (arrow) arrow.style.color = colors.sage[600]
                }}
                onFocus={(e) => {
                  const el = e.currentTarget
                  el.style.outline = `2px solid ${colors.sage[600]}`
                }}
                onBlur={(e) => {
                  const el = e.currentTarget
                  el.style.outline = '2px solid transparent'
                }}
                tabIndex={0}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }} aria-label={specialty.title}>
                  {specialty.icon}
                </div>
                <h3 style={{ ...styles.h3, marginBottom: '1rem', fontSize: '1.25rem' }}>
                  {specialty.title}
                </h3>
                <p style={{ ...styles.p, color: colors.warmGray[600], marginBottom: '1.5rem', flex: 1 }}>
                  {specialty.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  color: specialty.color,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                }}
                data-explore-arrow
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
