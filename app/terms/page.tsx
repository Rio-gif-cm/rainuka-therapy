'use client'

import Link from 'next/link'
import { colors } from '@/app/styles'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            Conditions of therapy and service agreement.
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
          {/* Last Updated */}
          <p
            style={{
              fontSize: '0.875rem',
              color: colors.warmGray[500],
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}
          >
            Last updated: September 2, 2026
          </p>

          {/* 1. Agreement to Terms */}
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
            1. Agreement to Terms
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            By booking a consultation or session with Rainuka Oberoi Therapy, you agree to these terms and conditions. If you do not agree, please do not proceed with booking.
          </p>

          {/* 2. Scope of Services */}
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
            2. Scope of Services
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Therapy services</strong> provided by a Licensed Clinical Social Worker (LCSW) focus on mental health support, counseling, and therapeutic guidance.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>What therapy is NOT:</strong>
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Not a substitute for medical treatment or psychiatric care</li>
            <li>Not a substitute for emergency services (call 911 or crisis line)</li>
            <li>Does not include psychological testing or diagnosis by a psychiatrist</li>
            <li>Does not include prescription medications</li>
            <li>Does not guarantee any specific outcome or cure</li>
          </ul>

          {/* 3. Confidentiality & Privacy */}
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
            3. Confidentiality & Privacy
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            All sessions are confidential and subject to <strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) and applicable provincial privacy laws.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Limits to confidentiality:</strong> Your therapist is legally required to break confidentiality if:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>You pose an immediate danger to yourself or others</li>
            <li>There is reasonable belief of child abuse or elder abuse</li>
            <li>You are involved in a legal proceeding requiring disclosure</li>
            <li>You provide written authorization to release information</li>
            <li>A court order requires disclosure</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            For full privacy policy details, see our <Link href="/privacy" style={{ color: colors.burgundy[600], textDecoration: 'underline' }}>Privacy Policy</Link>.
          </p>

          {/* 4. Telehealth Consent */}
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
            4. Telehealth Consent & Technology
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Informed Consent to Telehealth:</strong> By scheduling a virtual session, you consent to receiving therapy via video conference. You acknowledge:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>You will be in a private location where you can speak freely</li>
            <li>You have a secure, reliable internet connection</li>
            <li>You understand the risks of virtual communication (connection loss, privacy risk)</li>
            <li>You have read the privacy and security information regarding the video platform</li>
            <li>This is NOT as secure as in-person therapy; there are inherent risks to digital communication</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Technical Issues:</strong> If your internet connection is lost during a session, your therapist will wait 15 minutes before assuming the session is ended. If you cannot reconnect, you will be offered a free rescheduled session.
          </p>

          {/* 5. Cancellation & No-Show Policy */}
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
            5. Cancellation & No-Show Policy
          </h2>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>Free cancellation:</strong> 48+ hours before appointment (no charge)</li>
            <li><strong>Late cancellation:</strong> Less than 48 hours: full session fee charged</li>
            <li><strong>No-show:</strong> Full session fee charged (unless emergency; please contact as soon as possible)</li>
            <li><strong>Emergency reschedule:</strong> Contact immediately. Exceptions may be made for genuine emergencies.</li>
          </ul>

          {/* 6. Fees & Payment */}
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
            6. Fees & Payment
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            Current session fees and sliding scale options are available on our <Link href="/pricing" style={{ color: colors.burgundy[600], textDecoration: 'underline' }}>Pricing page</Link>.
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>Payment:</strong> Due at time of service (can arrange monthly billing)</li>
            <li><strong>Insurance:</strong> We accept many major insurance plans (out-of-network accepted; you pay and submit for reimbursement)</li>
            <li><strong>Tax receipts:</strong> Available upon request for use as medical expense deductions</li>
            <li><strong>Sliding scale:</strong> Available for clients with financial constraints; please discuss during consultation</li>
          </ul>

          {/* 7. Liability Disclaimer */}
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
            7. Liability Disclaimer
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Therapy services are NOT medical treatment.</strong> While your therapist is trained and experienced, therapy cannot guarantee specific outcomes, cures, or solutions to mental health challenges.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            Your therapist is <strong>not responsible for</strong>:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Outcomes from therapeutic recommendations or interventions</li>
            <li>Crisis situations outside scheduled sessions (see emergency contact info in footer)</li>
            <li>Technical failures in telehealth (connection loss, platform outage)</li>
            <li>Advice given by third-party platforms or online resources</li>
            <li>Harm from failing to follow crisis procedures</li>
          </ul>

          {/* 8. Client Responsibilities */}
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
            8. Client Responsibilities
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            As a client, you agree to:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Provide accurate information during intake and sessions</li>
            <li>Inform your therapist of any substance use, medications, or medical conditions</li>
            <li>Seek emergency services (911 or crisis line) if in immediate danger</li>
            <li>Pay fees on time or discuss payment arrangements</li>
            <li>Respect the therapeutic boundary and confidentiality</li>
            <li>Not record sessions without prior written consent</li>
            <li>Maintain respectful communication with therapist and staff</li>
          </ul>

          {/* 9. Dispute Resolution & Governing Law */}
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
            9. Dispute Resolution & Governing Law
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Governing Law:</strong> These terms are governed by the laws of Canada and the province where therapy is provided.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Dispute Resolution:</strong> If you have concerns about services, please contact your therapist directly to discuss. If needed, disputes may be escalated to the relevant provincial regulatory body.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Complaints:</strong> Clients may file complaints with:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li>Your therapist directly (preferred first step)</li>
            <li>The relevant provincial college or regulatory board</li>
            <li>Local consumer protection office</li>
          </ul>

          {/* 10. Crisis Resources */}
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
            10. Crisis Resources
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>This website and therapy services are NOT emergency services.</strong> If you or someone else is in immediate danger:
          </p>
          <ul
            style={{
              marginBottom: '2rem',
              paddingLeft: '2rem',
              color: colors.warmGray[700],
              lineHeight: 1.8,
            }}
          >
            <li><strong>Call 911</strong> (Canada, United States) – Emergency services</li>
            <li><strong>Call 988</strong> (Canada, United States) – Suicide & Crisis Lifeline</li>
            <li><strong>Call 211</strong> (Canada) – Health & mental health resources</li>
            <li><strong>Text HOME to 741741</strong> – Crisis Text Line</li>
          </ul>

          {/* 11. Changes to Terms */}
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
            11. Changes to Terms
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            These terms may be updated at any time. Continued use of services after updates constitutes acceptance of new terms. Major changes will be communicated via email.
          </p>

          {/* 12. Contact & Questions */}
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
            12. Contact & Questions
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            Questions about these terms? Please contact:
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginBottom: '1rem' }}>
            <strong>Rainuka Oberoi Therapy</strong><br />
            Email: <a href="mailto:contact@rainukatherapy.com" style={{ color: colors.burgundy[600], textDecoration: 'none' }}>contact@rainukatherapy.com</a><br />
            Phone: <a href="tel:+15551234567" style={{ color: colors.burgundy[600], textDecoration: 'none' }}>(555) 123-4567</a>
          </p>

          {/* Acknowledgment */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2rem',
              backgroundColor: 'rgba(155, 77, 60, 0.05)',
              borderLeft: `4px solid ${colors.burgundy[600]}`,
              borderRadius: '0.5rem',
            }}
          >
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: colors.warmGray[700], margin: 0 }}>
              <strong>By booking a consultation or session,</strong> you acknowledge that you have read, understood, and agree to these Terms of Service. You further acknowledge that therapy is not emergency care, and you will seek appropriate emergency services if needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
