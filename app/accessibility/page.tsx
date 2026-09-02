'use client'

import Link from 'next/link'

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="min-h-screen bg-warm-gray-50">
      {/* Header with back link */}
      <div className="container-base section-padding">
        <Link 
          href="/" 
          className="text-burgundy-600 hover:text-burgundy-700 mb-8 inline-flex items-center"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-2 text-warm-gray-900">Accessibility Statement</h1>
        <p className="text-lg text-warm-gray-600 mb-8">
          Our commitment to inclusive, accessible mental health care extends to our website.
        </p>
      </div>

      {/* Main content */}
      <div className="container-base pb-12 space-y-12">
        {/* WCAG Compliance */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">Our Accessibility Commitment</h2>
          <p className="text-warm-gray-700 mb-4 leading-relaxed">
            At Wonderloud Therapy, we believe that a therapy website should be as welcoming and accessible as our practice. We're committed to making this site usable by everyone, including people with disabilities and neurodivergent individuals.
          </p>
          <p className="text-warm-gray-700 leading-relaxed">
            We aim to meet <strong>WCAG 2.1 Level AA</strong> standards - the widely recognized baseline for web accessibility. More importantly, we go beyond compliance to honor the deeper accessibility needs of trauma survivors, disabled clients, neurodivergent people (ADHD, autism), and LGBTQ+ individuals who seek our care.
          </p>
        </section>

        {/* What We've Implemented */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">What We've Implemented</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Reduced Motion */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Reduced Motion Support</h3>
              <p className="text-warm-gray-700 mb-3">
                For users with vestibular disorders, migraines, ADHD, autism, or trauma sensitivity, animations can cause physical discomfort. We respect your operating system's "Reduce Motion" setting.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>Decorative animations are disabled when reduced motion is requested</li>
                <li>Functional feedback (focus states, color changes) is preserved</li>
                <li>No auto-playing video or audio content</li>
              </ul>
            </div>

            {/* Keyboard Navigation */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Keyboard Navigation</h3>
              <p className="text-warm-gray-700 mb-3">
                All features are accessible using only a keyboard. You can navigate the entire site using Tab, Shift+Tab, Enter, and Arrow keys.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>Skip to main content link available on every page</li>
                <li>Clear focus indicators (highlighted outline) on all interactive elements</li>
                <li>Logical tab order throughout the site</li>
              </ul>
            </div>

            {/* Semantic HTML & Screen Readers */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Screen Reader Friendly</h3>
              <p className="text-warm-gray-700 mb-3">
                Our site uses semantic HTML so assistive technologies can read and understand our content.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>Proper heading hierarchy (H1, H2, H3) for content structure</li>
                <li>Descriptive link text (not "click here")</li>
                <li>Form labels explicitly connected to inputs</li>
                <li>Alt text for all meaningful images</li>
              </ul>
            </div>

            {/* Clear Language */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Literal, Clear Language</h3>
              <p className="text-warm-gray-700 mb-3">
                Neurodivergent users and people under stress benefit from direct, literal language.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>"Sessions are 50 minutes" instead of vague metaphors</li>
                <li>Fees and sliding scale clearly stated</li>
                <li>What to expect in your first session (detailed)</li>
                <li>No hidden or unclear navigation</li>
              </ul>
            </div>

            {/* Color & Contrast */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Color & Contrast</h3>
              <p className="text-warm-gray-700 mb-3">
                Information is never conveyed by color alone. Text has sufficient contrast for readability.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>Color contrast ratio of at least 4.5:1 for standard text</li>
                <li>Links are underlined in addition to being colored</li>
                <li>Error messages use text + icon, not color alone</li>
              </ul>
            </div>

            {/* Touch Targets */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-warm-gray-900">Touch Targets</h3>
              <p className="text-warm-gray-700 mb-3">
                For users with motor disabilities, arthritis, tremor, or anyone using a mobile device, buttons and links are large enough to tap comfortably.
              </p>
              <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
                <li>Minimum 48×48 pixel touch targets on mobile</li>
                <li>Adequate spacing between interactive elements</li>
                <li>Forms work with one hand</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LGBTQ+ Affirmation */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">LGBTQ+ Affirming Practice</h2>
          <div className="card bg-burgundy-50 border-l-4 border-l-burgundy-600">
            <p className="text-warm-gray-700 mb-4 leading-relaxed">
              <strong>I work with LGBTQ+, trans, nonbinary, and gender-nonconforming clients. Your identity is not the problem-it's a source of strength.</strong>
            </p>
            <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
              <li>Respectful, inclusive language throughout our website</li>
              <li>Gender-neutral forms (partner, not spouse)</li>
              <li>Visible commitment to cultural competence and intersectionality</li>
              <li>Safe space for all gender identities and sexual orientations</li>
            </ul>
          </div>
        </section>

        {/* Known Limitations */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">Known Limitations</h2>
          <p className="text-warm-gray-700 mb-4 leading-relaxed">
            We strive for accessibility, but no website is perfect. Here are current areas where we're working to improve:
          </p>
          <ul className="list-disc list-inside text-warm-gray-700 space-y-3">
            <li><strong>Video content:</strong> We're working to add captions and transcripts to all videos. Please reach out if you need a transcript for a specific video.</li>
            <li><strong>PDF documents:</strong> Some downloadable PDFs may not be fully accessible. We can provide content as accessible HTML on request.</li>
            <li><strong>Third-party integrations:</strong> Our booking system and contact forms are provided by external vendors and may have accessibility gaps we're working to address.</li>
          </ul>
        </section>

        {/* Accessibility Testing */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">How We Test Accessibility</h2>
          <p className="text-warm-gray-700 mb-4 leading-relaxed">
            We use a combination of automated tools and real user testing to ensure accessibility:
          </p>
          <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
            <li>Automated testing with WAVE and axe accessibility browser extensions</li>
            <li>Keyboard-only navigation testing on all pages</li>
            <li>Screen reader testing with NVDA and JAWS</li>
            <li>Manual testing with users who have disabilities and neurodivergent individuals</li>
            <li>Compliance verification against WCAG 2.1 Level AA success criteria</li>
          </ul>
        </section>

        {/* Contact for Accessibility Issues */}
        <section className="card bg-warm-accent-light border-2 border-warm-accent">
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">Accessibility Issues?</h2>
          <p className="text-warm-gray-700 mb-4 leading-relaxed">
            If you encounter an accessibility barrier on this website, please let us know. We want to help and will work to resolve the issue as quickly as possible.
          </p>
          <div className="space-y-3 text-warm-gray-700">
            <p>
              <strong>Email:</strong> <a href="mailto:accessibility@rainukatherapy.com" className="text-burgundy-600 underline hover:text-burgundy-700">accessibility@rainukatherapy.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+1-555-123-4567" className="text-burgundy-600 underline hover:text-burgundy-700">(555) 123-4567</a>
            </p>
            <p className="text-sm italic">
              Please describe the accessibility barrier, what you were trying to do, and any assistive technology you use. We'll respond within 2 business days.
            </p>
          </div>
        </section>

        {/* WCAG Compliance Statement */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">WCAG 2.1 Compliance</h2>
          <p className="text-warm-gray-700 mb-4 leading-relaxed">
            Wonderloud Therapy is committed to ensuring digital accessibility. This website aims to conform to WCAG 2.1 Level AA standards. If you believe there is a failure to conform, please contact us using the information above.
          </p>
          <p className="text-sm text-warm-gray-600">
            Last updated: August 31, 2026
          </p>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-warm-gray-900">Additional Resources</h2>
          <p className="text-warm-gray-700 mb-4">
            If you'd like to learn more about web accessibility, here are some helpful resources:
          </p>
          <ul className="list-disc list-inside text-warm-gray-700 space-y-2">
            <li>
              <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-burgundy-600 underline hover:text-burgundy-700">
                WCAG 2.1 Quick Reference
              </a> - Web Accessibility Guidelines
            </li>
            <li>
              <a href="https://www.a11yproject.com/" className="text-burgundy-600 underline hover:text-burgundy-700">
                A11y Project
              </a> - Community for web accessibility
            </li>
            <li>
              <a href="https://www.section508.gov/" className="text-burgundy-600 underline hover:text-burgundy-700">
                Section 508
              </a> - U.S. Federal accessibility standards
            </li>
            <li>
              <a href="https://webaim.org/" className="text-burgundy-600 underline hover:text-burgundy-700">
                WebAIM
              </a> - Web accessibility information and resources
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
