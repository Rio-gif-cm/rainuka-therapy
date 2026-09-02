'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

export default function PrivacyAssuranceSection() {
  return (
    <section
      style={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundColor: colors.sage[50],
        borderTop: `1px solid ${colors.sage[200]}`,
        borderBottom: `1px solid ${colors.sage[200]}`,
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        {/* Main Badge Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Privacy Security Seal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: colors.sage[400],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: `0 4px 12px rgba(107, 148, 79, 0.15)`,
              }}
              aria-label="Privacy Secure badge"
            >
              🔒
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: colors.warmGray[900],
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-merriweather)',
                }}
              >
                Privacy-Protected & Confidential
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: colors.warmGray[700],
                  maxWidth: '400px',
                }}
              >
                Your privacy is sacred. All data encrypted, secure, and protected by law.
              </p>
            </div>
          </div>

          {/* Trust Signals Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            {[
              {
                icon: '🔐',
                title: 'Data Encrypted & Secure',
                description:
                  'AES-256 at rest, TLS 1.3 in transit. Industry-standard protection.',
              },
              {
                icon: '✓',
                title: '100% Confidential',
                description:
                  'Your therapy stays between us. Legally protected with clear exceptions.',
              },
              {
                icon: '🛡️',
                title: 'Your Privacy Priority',
                description:
                  'No analytics tracking. No data sharing. Just therapy, on your terms.',
              },
            ].map((signal, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.sage[200]}`,
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 1px 3px rgba(107, 148, 79, 0.08)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = `0 4px 12px rgba(107, 148, 79, 0.15)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = `0 1px 3px rgba(107, 148, 79, 0.08)`
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '0.75rem',
                  }}
                  aria-hidden="true"
                >
                  {signal.icon}
                </div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: colors.warmGray[900],
                    marginBottom: '0.5rem',
                  }}
                >
                  {signal.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: colors.warmGray[700],
                    lineHeight: 1.6,
                  }}
                >
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency & Contact */}
        <div
          style={{
            backgroundColor: 'white',
            border: `1px solid ${colors.sage[200]}`,
            borderRadius: '0.75rem',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.95rem',
              color: colors.warmGray[700],
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}
          >
            Transparency builds trust. Read our full{' '}
            <Link
              href="/privacy"
              style={{
                color: colors.sage[600],
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              Privacy & Data Protection policy
            </Link>{' '}
            for detailed information about how we handle your data, what we collect, and your rights.
          </p>

          <p
            style={{
              fontSize: '0.85rem',
              color: colors.warmGray[600],
            }}
          >
            Questions about your privacy?{' '}
            <a
              href="mailto:contact@rainukatherapy.com"
              style={{
                color: colors.sage[600],
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              contact@rainukatherapy.com
            </a>
          </p>
        </div>

        {/* Info Banner */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: colors.warmGray[50],
            borderRadius: '0.5rem',
            borderLeft: `4px solid ${colors.sage[400]}`,
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: colors.warmGray[700],
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            <strong>Note on confidentiality:</strong> While all information is protected by privacy laws (PIPEDA in Canada, HIPAA in the US) and therapist-client privilege, there are limited exceptions: mandatory reporting of abuse/neglect, imminent risk of harm to self or others, or valid court orders. We'll discuss these clearly at your first session.
          </p>
        </div>
      </div>
    </section>
  )
}
