'use client'

import Link from 'next/link'
import { colors, styles, layout } from '@/app/styles'

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
  // Get all specialty links for "Explore other specialties" feature
  const getOtherSpecialties = (currentSlug: string) => {
    return specialties.filter((s) => s.slug !== currentSlug)
  }

  return (
    <section style={{ ...styles.section, backgroundColor: 'white' }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, textAlign: 'center', marginBottom: '1rem' }}>
            Find Your Path Forward
          </h2>
          <p style={{ ...styles.p, maxWidth: '42rem', margin: '0 auto', fontSize: '1.0625rem', color: colors.warmGray[600] }}>
            Three areas where I've developed deep expertise—and where you might find yourself. (Many clients discover they need support in more than one area.)
          </p>
        </div>

        <div style={{
          display: 'grid' as const,
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: layout.gapCard,
        }}>
          {specialties.map((specialty) => (
            <Link href={specialty.link} key={specialty.slug} style={{ textDecoration: 'none' }}>
              <div
                className="niche-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  outline: '2px solid transparent',
                  outlineOffset: '2px',
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
                <span 
                  className="explore-arrow"
                  style={{
                    display: 'inline-block',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  Find Your Path →
                </span>

                {/* MULTI-PERSONA: Cross-reference other specialties */}
                {getOtherSpecialties(specialty.slug).length > 0 && (
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: `1px solid ${colors.sage[100]}`,
                    fontSize: '0.8rem',
                    color: colors.sage[600],
                    fontStyle: 'italic',
                  }}>
                    💡 See also: {getOtherSpecialties(specialty.slug)
                      .map((s) => s.title)
                      .join(', ')}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* MULTI-PERSONA: Expanded context for overlapping needs */}
        <div className="card card-tinted card-static" style={{
          marginTop: '3rem',
          textAlign: 'center',
        }}>
          <p style={{
            ...styles.p,
            fontSize: '1rem',
            color: colors.warmGray[700],
            marginBottom: '1rem',
          }}>
            <strong>Finding yourself in multiple areas?</strong> That's common and expected. Many of my clients come in thinking they need support in one area, only to discover another piece of the puzzle—and that's where real progress happens.
          </p>
          <p style={{
            ...styles.p,
            fontSize: '0.95rem',
            color: colors.warmGray[600],
          }}>
            In our first conversation, we'll figure out what feels most urgent right now and how the pieces fit together. No judgment, just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
