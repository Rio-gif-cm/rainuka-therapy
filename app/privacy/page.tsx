'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy & Client Confidentiality | Safety',
  description: 'Privacy commitment and confidentiality policy (PIPEDA-Canada, HIPAA-US) protect your therapy records and data. How we keep you safe. Review our policies.',
}

export default function PrivacyPage() {
  return (
    <main id="main-content" style={{ paddingTop: '2rem' }}>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: '4rem',
          paddingBottom: '2rem',
          backgroundColor: 'white',
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
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: colors.warmGray[900],
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Privacy & Data Protection
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            Your privacy is sacred. This page explains exactly how your data is handled.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          backgroundColor: colors.warmGray[50],
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          {/* Data Minimization */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            What Data We Collect
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            We collect <strong>only</strong> the information you provide:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Your name (booking only)</li>
            <li>Your email address (for scheduling & follow-up)</li>
            <li>Your phone number (for session reminders)</li>
            <li>Session notes <strong>during therapy only</strong> (encrypted, secure)</li>
          </ul>

          {/* What We Don't Collect */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            What We Do NOT Collect
          </h2>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>❌ Browsing history or tracking cookies</li>
            <li>❌ Device information or IP addresses (except for security)</li>
            <li>❌ Location data</li>
            <li>❌ Behavioral data or analytics beyond basic site performance</li>
            <li>❌ Health information outside of session context</li>
          </ul>

          {/* Canadian Privacy Compliance */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Canadian Privacy Compliance (PIPEDA & PHIPA)
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            All session data is protected under Canadian privacy legislation:
          </p>
          <ul
            style={{
              marginBottom: '1rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) – Federal privacy law governing personal information</li>
            <li><strong>PHIPA</strong> (Personal Health Information Protection Act) – Ontario provincial law protecting health information</li>
            <li><strong>Provincial Standards</strong> – We comply with the highest privacy standards across all provinces we serve</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Security protections:</strong>
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>✅ Data encrypted at rest (AES-256)</li>
            <li>✅ Data encrypted in transit (TLS 1.3)</li>
            <li>✅ Secure servers with regular security audits</li>
            <li>✅ No data sharing with third parties</li>
            <li>✅ Data retention policies (deleted 7 years after final session)</li>
          </ul>

          {/* Third-Party Services */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Third-Party Services
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            We use minimal third-party services, all compliant with <strong>PIPEDA</strong> (Canadian privacy law) and international security standards:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>Email service (Brevo):</strong> For appointment confirmations only. Encrypted.</li>
            <li><strong>Hosting (Render/Vercel):</strong> SOC 2 certified, secure infrastructure.</li>
            <li><strong>No analytics tracking:</strong> No Google Analytics, no behavioral tracking.</li>
          </ul>

          {/* Your Rights */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Your Rights
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            You have the right to:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>Access:</strong> Get a copy of all your data anytime</li>
            <li><strong>Correct:</strong> Update or fix your information</li>
            <li><strong>Delete:</strong> Request deletion of your data (with exceptions for legal requirements)</li>
            <li><strong>Opt-out:</strong> Unsubscribe from emails anytime (1-click unsubscribe)</li>
            <li><strong>Portability:</strong> Export your data in standard format</li>
          </ul>

          {/* Testimonials & Client Consent */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Testimonials & Client Consent
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            All client testimonials displayed on our website are shared with <strong>explicit written consent</strong>. 
            Each client has given permission for us to use their first name, professional context, and story in our 
            marketing materials.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Your rights:</strong>
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Clients are <strong>never compensated</strong> for testimonials</li>
            <li>Clients may <strong>request removal</strong> of their testimonial at any time</li>
            <li>All testimonials are <strong>authentic</strong> and not fabricated</li>
            <li>Consent records are maintained according to PIPEDA retention requirements (minimum 7 years)</li>
          </ul>

          {/* Opt-Out Controls */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Opt-Out Options
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            We respect your control:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>📧 <strong>Email reminders:</strong> Opt-out on any email (1-click unsubscribe)</li>
            <li>🔔 <strong>SMS reminders:</strong> Text STOP anytime to opt out</li>
            <li>🍪 <strong>Cookies:</strong> No tracking cookies used</li>
            <li>📊 <strong>Analytics:</strong> No behavioral tracking enabled</li>
          </ul>

          {/* Contact */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginTop: '3rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Questions About Your Privacy?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
            Contact us directly:
          </p>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: colors.sage[600],
              marginBottom: '2rem',
            }}
          >
            📧 contact@rainukatherapy.com
          </p>

          {/* Last Updated */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: `1px solid ${colors.warmGray[200]}`,
              fontSize: '0.875rem',
              color: colors.warmGray[600],
            }}
          >
            <p>
              <strong>Last updated:</strong> August 31, 2026
            </p>
            <p>
              This privacy policy is part of our <strong>trauma-informed design</strong> commitment. We believe
              transparency builds trust.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          backgroundColor: colors.sage[50],
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: colors.warmGray[900],
              marginBottom: '1rem',
              fontFamily: 'var(--font-merriweather)',
              fontWeight: 700,
            }}
          >
            Ready to Start?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '2rem' }}>
            Your data is safe with us. Book a session whenever you're ready.
          </p>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: colors.warmGray[900],
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = colors.sage[600]
              target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.backgroundColor = colors.warmGray[900]
              target.style.transform = 'translateY(0)'
            }}
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  )
}
