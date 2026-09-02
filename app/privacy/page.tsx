'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

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
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>
            Your Privacy, Protected
          </h1>
          <p style={{ fontSize: '1.125rem', color: colors.warmGray[600], maxWidth: '700px' }}>
            Everything you share is confidential. Here&apos;s how we keep you safe.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              PIPEDA & HIPAA Compliance
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Your therapy records and personal data are protected under:
            </p>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>
                <strong>PIPEDA (Canada)</strong> — Your information is governed by Canadian privacy law
              </li>
              <li>
                <strong>HIPAA (U.S.)</strong> — Healthcare privacy protections for U.S.-based clients
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              What We Collect
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              During booking and therapy, we collect:
            </p>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Name, email, phone number</li>
              <li>Therapy goals and presenting concerns (your story)</li>
              <li>Session notes and progress (therapy records)</li>
              <li>Billing information when applicable</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              How We Use It
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Your information is used only for:
            </p>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Providing therapy and clinical care</li>
              <li>Billing and appointment management</li>
              <li>Legal compliance and record-keeping</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginTop: '1rem', color: colors.warmGray[700] }}>
              <strong>We never:</strong> Sell your data, share without consent, or use your information for marketing.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Confidentiality Limits
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Therapy is confidential, with legal exceptions:
            </p>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Threat of harm to self or others</li>
              <li>Abuse or neglect of children/dependents</li>
              <li>Court order or legal requirement</li>
              <li>Your explicit written consent</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Your Rights
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              You have the right to:
            </p>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Access your therapy records</li>
              <li>Request corrections to your file</li>
              <li>Know how your data is used</li>
              <li>Request deletion (with clinical exceptions)</li>
              <li>File a privacy complaint with regulatory bodies</li>
            </ul>
          </div>

          <div
            style={{
              padding: '1.5rem',
              backgroundColor: colors.warmGray[100],
              borderRadius: '0.5rem',
              marginTop: '2rem',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: colors.warmGray[700] }}>
              <strong>Questions?</strong> Contact us at{' '}
              <Link href="/contact" style={{ color: colors.burgundy[600] }}>
                our contact page
              </Link>{' '}
              or email us directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
