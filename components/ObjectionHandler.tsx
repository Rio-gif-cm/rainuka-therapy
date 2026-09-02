'use client'

import { colors, styles } from '@/app/styles'
import { useState, useEffect } from 'react'

export default function ObjectionHandler() {
  const [expandedObjection, setExpandedObjection] = useState<string | null>('cost')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const objections = [
    {
      id: 'cost',
      objection: 'Cost concerns?',
      emoji: '💰',
      response: 'Sliding scale available',
      fullAnswer: 'I believe cost shouldn\'t be the barrier between you and the support you need. That\'s why I offer sliding scale pricing: $80-$150 per 50-minute session based on your actual situation. We\'ll discuss what works for your budget during our free call-no judgment, no assumptions. Many of my clients also use superbills for out-of-network insurance reimbursement, which can offset costs significantly.',
      highlight: 'Sliding scale: $80-$150/session',
    },
    {
      id: 'time',
      objection: 'Worried about time commitment?',
      emoji: '⏰',
      response: 'Sessions can be 30 or 50 min',
      fullAnswer: 'Therapy doesn\'t require rigid commitment to work. You can start with 30-minute sessions if that\'s what fits your life right now, or go with the traditional 50-minute format. Many clients prefer 30-min check-ins for ongoing support-especially during busy seasons or when you\'re building momentum. We\'ll figure out what rhythm actually works for you, and you can adjust anytime.',
      highlight: '30 or 50-minute sessions',
    },
    {
      id: 'readiness',
      objection: 'Not sure if I\'m "ready" for therapy?',
      emoji: '🤔',
      response: 'That free call is exactly for this',
      fullAnswer: 'Most people aren\'t sure if they\'re ready-and that uncertainty is completely normal. The free 15-minute call isn\'t a commitment; it\'s a conversation. We\'ll talk about what you\'re navigating, I\'ll share how I work, and you\'ll get a real sense of whether this feels right. You\'re not deciding to change your life in 15 minutes. You\'re just deciding to have one honest conversation.',
      highlight: 'Free 15-minute clarity call',
    },
  ]

  return (
    <section style={{
      ...styles.section,
      backgroundColor: colors.sage[50],
      borderTop: `1px solid ${colors.sage[200]}`,
      borderBottom: `1px solid ${colors.sage[200]}`,
    }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            color: colors.warmGray[900],
            marginBottom: '1rem',
          }}>
            Addressing the Real Stuff
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: colors.warmGray[700],
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            These are the questions I hear. Let's talk about them directly.
          </p>
        </div>

        {/* Objections Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {objections.map((obj) => (
            <div
              key={obj.id}
              onClick={() => setExpandedObjection(expandedObjection === obj.id ? null : obj.id)}
              style={{
                backgroundColor: expandedObjection === obj.id ? 'white' : colors.sage[100],
                border: `2px solid ${expandedObjection === obj.id ? colors.sage[400] : colors.sage[200]}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: expandedObjection === obj.id
                  ? `0 4px 16px rgba(var(--neutral-sage-700), 0.15)`
                  : 'none',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement
                if (expandedObjection !== obj.id) {
                  target.style.borderColor = colors.sage[300]
                  target.style.backgroundColor = colors.sage[50]
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement
                if (expandedObjection !== obj.id) {
                  target.style.borderColor = colors.sage[200]
                  target.style.backgroundColor = colors.sage[100]
                }
              }}
            >
              {/* Header - Always Visible */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{obj.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: colors.warmGray[900],
                    marginBottom: '0.25rem',
                    lineHeight: '1.4',
                  }}>
                    {obj.objection}
                  </h3>
                </div>
              </div>

              {/* Quick Answer - Always Visible */}
              <div style={{
                backgroundColor: colors.sage[200],
                color: colors.sage[700],
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: expandedObjection === obj.id ? '1rem' : '0',
                transition: 'all 0.3s ease',
              }}>
                {obj.response}
              </div>

              {/* Full Answer - Expanded */}
              {expandedObjection === obj.id && (
                <div style={{
                  animation: 'fadeIn 0.3s ease',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: `1px solid ${colors.sage[200]}`,
                }}>
                  <p style={{
                    color: colors.warmGray[700],
                    fontSize: '0.9375rem',
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                  }}>
                    {obj.fullAnswer}
                  </p>
                  <div style={{
                    backgroundColor: colors.sage[50],
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    borderLeft: `3px solid ${colors.sage[400]}`,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: colors.sage[700],
                  }}>
                    ✓ {obj.highlight}
                  </div>
                </div>
              )}

              {/* Collapse Hint */}
              <div style={{
                marginTop: expandedObjection === obj.id ? '0.75rem' : '0',
                fontSize: '0.75rem',
                color: colors.sage[600],
                fontWeight: 500,
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}>
                {expandedObjection === obj.id ? '↑ Click to close' : '↓ Click for details'}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '0.875rem',
          border: `1px solid ${colors.sage[100]}`,
        }}>
          <p style={{
            fontSize: '1rem',
            color: colors.warmGray[700],
            lineHeight: '1.6',
            fontStyle: 'italic',
          }}>
            <strong>The real truth:</strong> I want to work with people who are genuinely interested in understanding themselves better. If cost or time is genuinely a barrier, let's talk about it. That conversation is why the free call exists.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
