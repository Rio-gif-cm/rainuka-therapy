# Canadian Compliance - Implementation Code Snippets

Ready-to-use code for fixing critical gaps.

---

## 1. PRIVACY POLICY UPDATE (app/privacy/page.tsx)

### Find and Replace

**SEARCH FOR:**
```tsx
{/* HIPAA Compliance */}
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
  HIPAA Compliance & Security
</h2>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
  All session data is protected under HIPAA (Health Insurance Portability and Accountability Act):
</p>
```

**REPLACE WITH:**
```tsx
{/* PIPEDA Compliance */}
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
  PIPEDA Compliance & Data Protection
</h2>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
  All session data is protected under <strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act), Canada's federal privacy law, and applicable provincial privacy legislation.
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
  <li>✅ Compliance with PIPEDA Standards</li>
</ul>

{/* PIPEDA Rights */}
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
  Your Rights Under PIPEDA
</h2>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
  You have the following rights under Canada's PIPEDA and applicable provincial privacy laws:
</p>
<ul
  style={{
    marginBottom: '2rem',
    paddingLeft: '2rem',
    color: colors.warmGray[700],
    lineHeight: 1.8,
  }}
>
  <li><strong>Access:</strong> Request and receive a copy of all your personal information in our records</li>
  <li><strong>Accuracy:</strong> Request correction of inaccurate, incomplete, or outdated information</li>
  <li><strong>Delete:</strong> Request deletion of your data (subject to legal/clinical record retention requirements)</li>
  <li><strong>Challenge:</strong> Challenge our practices, policies, or handling of your information</li>
  <li><strong>Portability:</strong> Request your data in portable, accessible format</li>
  <li><strong>Withdraw Consent:</strong> Withdraw consent for data collection anytime (affects future services only)</li>
</ul>

{/* Privacy Commissioner Contact */}
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
  Privacy Concerns or Complaints
</h2>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
  If you have concerns about how your data is handled, please contact us first at:
</p>
<p
  style={{
    fontSize: '1rem',
    fontWeight: 600,
    color: colors.sage[600],
    marginBottom: '1rem',
  }}
>
  📧 privacy@rainukatherapy.com
</p>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700] }}>
  If your concerns are not addressed, you may file a privacy complaint with:
</p>
<p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.warmGray[700], marginTop: '1rem' }}>
  <strong>Office of the Privacy Commissioner of Canada</strong><br />
  Toll-free: 1-800-282-1376<br />
  Website: <a href="https://www.priv.gc.ca" className="text-burgundy-600 underline">www.priv.gc.ca</a>
</p>
```

---

## 2. FOOTER HEALTHCARE DISCLAIMER

Create file: `components/Footer.tsx` or update if exists

```tsx
'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-warm-gray-900 text-cream-50 mt-16">
      <div className="container-base section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Rainuka Oberoi Therapy</h3>
            <p className="text-warm-gray-200 text-sm leading-relaxed">
              Trauma-informed therapy for perinatal mental health, adult ADHD diagnosis, and career transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-warm-gray-200">
              <li><Link href="/about" className="hover:text-cream-50">About</Link></li>
              <li><Link href="/booking" className="hover:text-cream-50">Book a Session</Link></li>
              <li><Link href="/faq" className="hover:text-cream-50">FAQ</Link></li>
              <li><Link href="/accessibility" className="hover:text-cream-50">Accessibility</Link></li>
              <li><Link href="/privacy" className="hover:text-cream-50">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cream-50">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-warm-gray-200">
              <li>
                <a href="mailto:contact@rainukatherapy.com" className="hover:text-cream-50">
                  contact@rainukatherapy.com
                </a>
              </li>
              <li>
                <a href="tel:+1-555-123-4567" className="hover:text-cream-50">
                  (555) 123-4567
                </a>
              </li>
              <li className="text-xs text-warm-gray-400">
                Mon–Fri, 9am–5pm EST
              </li>
            </ul>
          </div>
        </div>

        {/* HEALTHCARE DISCLAIMER - CRITICAL */}
        <div className="bg-warm-accent-light bg-opacity-20 border-t-2 border-warm-accent pt-8 mb-8">
          <div className="text-xs text-warm-gray-300 leading-relaxed max-w-4xl">
            <p className="font-bold mb-2">⚠️ IMPORTANT DISCLAIMER:</p>
            <p className="mb-3">
              This website provides information about therapy services and personal development. 
              <strong> Therapy is NOT medical treatment</strong> and does not replace care from a physician, 
              psychiatrist, psychologist, or other medical professional. Rainuka Oberoi holds an LCSW (Licensed 
              Clinical Social Worker) credential, which is regulated in the United States. For Canadian clients: 
              I am [insert Canadian regulatory status]. See our{' '}
              <Link href="/about" className="underline hover:text-cream-50">
                About page
              </Link>
              {' '}for license details.
            </p>
            <p className="mb-3">
              If you are experiencing a mental health emergency, severe symptoms, or thoughts of self-harm 
              or suicide, <strong>do NOT rely on this website.</strong> Please take immediate action:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
              <li><strong>Emergency:</strong> Call 911 or go to your nearest emergency room</li>
              <li><strong>Canada Suicide &amp; Crisis Lifeline:</strong> 988 or 1-833-456-4566</li>
              <li><strong>Crisis Text Line:</strong> Text 741741</li>
              <li><strong>211 Information Line:</strong> Call 211 for local mental health resources</li>
              <li><strong>Kids Help Phone:</strong> 1-800-668-6868 (youth)</li>
            </ul>
            <p>
              By using this website, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-cream-50">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="underline hover:text-cream-50">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-warm-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-warm-gray-400">
          <p>&copy; {currentYear} Rainuka Oberoi Therapy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-cream-50">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream-50">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-cream-50">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## 3. UPDATE ABOUT PAGE - CREDENTIALS SECTION

**File:** `app/about/page.tsx` (around line 223)

**REPLACE:**
```tsx
<div className="card">
  <h3 className="text-xl font-bold text-warm-gray-900 mb-2">License</h3>
  <p className="text-warm-gray-600">
    Licensed Clinical Social Worker (LCSW). Full license number and
    issuing state are provided during your free consultation and on
    any intake paperwork, so you can verify them directly with the
    state licensing board.
  </p>
</div>
```

**WITH:**
```tsx
<div className="card">
  <h3 className="text-xl font-bold text-warm-gray-900 mb-2">License & Regulation</h3>
  <p className="text-warm-gray-600 mb-3">
    <strong>Licensed Clinical Social Worker (LCSW)</strong> — regulated in [U.S. State].
    Full license number and issuing state are provided during your free consultation 
    and on any intake paperwork, so you can verify them directly with the state 
    licensing board.
  </p>
  <p className="text-warm-gray-600 mb-3 text-sm italic border-l-4 border-warm-accent pl-3">
    <strong>For Canadian Clients:</strong> LCSW is a U.S. credential. I am [regulated by 
    [Canadian regulatory body] / not regulated by a Canadian provincial body]. To verify 
    my credentials or file a complaint, contact [Provincial Regulator Name].
  </p>
</div>
```

---

## 4. CREATE TERMS OF SERVICE PAGE

**File:** `app/terms/page.tsx` (new file)

```tsx
'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-cream-50 to-burgundy-50">
          <div className="container-base">
            <Link href="/" className="text-burgundy-600 hover:text-burgundy-700 mb-8 inline-flex items-center">
              ← Back to home
            </Link>
            <h1 className="text-4xl font-bold mb-2 text-warm-gray-900">Terms of Service</h1>
            <p className="text-lg text-warm-gray-600 max-w-2xl">
              Please read these terms carefully before scheduling therapy.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">1. Therapy Services</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                Rainuka Oberoi provides individual therapy services via telehealth. Therapy is a collaborative 
                process designed to help you understand yourself better and build a life that fits you. Therapy 
                is NOT medical treatment and does not replace care from a physician, psychiatrist, or other 
                medical professional.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">2. Confidentiality & Limits</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                Confidentiality is foundational to therapy. Information shared in sessions is private and 
                protected by law. However, I am legally required to break confidentiality in the following situations:
              </p>
              <ul className="list-disc list-inside text-warm-gray-600 space-y-2 ml-4 mb-3">
                <li>You express intent to harm yourself or others</li>
                <li>Child abuse, elder abuse, or abuse of vulnerable adults is disclosed</li>
                <li>A court orders release of records</li>
                <li>You authorize release of information in writing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">3. Cancellation & No-Show Policy</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                <strong>Cancellation:</strong> If you need to cancel a session, please provide at least 
                24 hours' notice by email or phone. Cancellations with less than 24 hours' notice may 
                incur a cancellation fee.
              </p>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                <strong>No-Show:</strong> If you miss a scheduled session without notice, the full session fee applies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">4. Fees & Payment</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                Session fees are [insert fee structure]. Payment is due at the time of session or as otherwise 
                agreed. A sliding scale is available based on financial need. HST [where applicable] is added 
                to invoiced fees. Tax receipts are available upon request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">5. Telehealth Consent</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                By scheduling a telehealth session, you consent to:
              </p>
              <ul className="list-disc list-inside text-warm-gray-600 space-y-2 ml-4 mb-3">
                <li>Video therapy via [Zoom/other platform]</li>
                <li>I will verify your identity at the start of each session</li>
                <li>You will be in a private location where others cannot see or hear you</li>
                <li>You understand that video platforms have privacy limitations</li>
                <li>Sessions cannot be recorded without written consent</li>
                <li>If connection drops, we will reschedule</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">6. Liability Limitations</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                Rainuka Oberoi Therapy is not liable for indirect, incidental, or consequential damages arising 
                from therapy services. You use this service at your own risk. If you believe there is a complaint 
                about therapy services, you may file a complaint with [insert Canadian regulatory body].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">7. Governing Law</h2>
              <p className="text-warm-gray-600 leading-relaxed">
                These Terms are governed by the laws of [Canadian Province] and the laws of Canada applicable therein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">8. Contact & Complaints</h2>
              <p className="text-warm-gray-600 mb-3 leading-relaxed">
                For questions about these terms, contact: contact@rainukatherapy.com
              </p>
              <p className="text-warm-gray-600 leading-relaxed">
                To file a regulatory complaint, contact: [Canadian Regulatory Body]
              </p>
            </div>

            <div className="bg-warm-accent-light p-6 rounded-lg mt-8">
              <p className="text-sm text-warm-gray-700">
                <strong>Last Updated:</strong> September 1, 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
```

---

## 5. FIX TEMPLATE PLACEHOLDERS

**File:** `app/contact/page.tsx` (around line 58)

**CHANGE:**
```tsx
// BEFORE:
"Telehealth Only
Serving [State] & 27 other states"

// TO:
"Telehealth Only
Serving Ontario, British Columbia, Alberta, and other Canadian provinces
Regulated by [insert Canadian regulatory body or 'Not regulated under provincial healthcare regulation']"
```

**File:** `app/layout.tsx` (line 53)

**CHANGE:**
```tsx
// BEFORE:
description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions. Telehealth available. Sliding scale. Based in [location].',

// TO:
description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions. Telehealth available across Canada. Sliding scale available.',
```

---

## Implementation Checklist

- [ ] Update `app/privacy/page.tsx` with PIPEDA language
- [ ] Create/update `components/Footer.tsx` with healthcare disclaimer
- [ ] Update `app/about/page.tsx` credentials section
- [ ] Create `app/terms/page.tsx`
- [ ] Fix template placeholders in `app/contact/page.tsx` and `app/layout.tsx`
- [ ] Add link to `/terms` in footer
- [ ] Test all pages render correctly
- [ ] Run final compliance check

---

**All code snippets are production-ready. Customize [bracketed sections] with actual business information before deploying.**
