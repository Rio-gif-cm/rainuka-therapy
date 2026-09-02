import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import NicheGrid from '@/components/NicheGrid'
import TestimonialCard from '@/components/TestimonialCard'
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
import Link from 'next/link'
import { homepageTestimonials, testimonials } from '@/src/data/testimonials'
import { getAggregateRatingSchema } from '@/lib/schema'
import { buttonPresets } from '@/lib/button-styles'

export const metadata: Metadata = {
  title: 'Therapy for Perinatal, ADHD & Career | Wonderloud',
  description: 'Trauma-informed therapy for perinatal grief, postpartum anxiety, ADHD diagnosis, and career burnout. Get your free 15-minute consultation today.',
  keywords: 'therapy, therapist, perinatal mental health, ADHD, career counseling, postpartum anxiety, trauma-informed',
  openGraph: {
    title: 'Therapy for Perinatal, ADHD & Career | Wonderloud',
    description: 'Trauma-informed therapy for perinatal grief, postpartum anxiety, ADHD diagnosis, and career burnout. Get your free 15-minute consultation today.',
    type: 'website',
    url: 'https://wonderloud-therapy.com',
  },
}

/**
 * Homepage narrative arc (background rhythm alternates tint / white,
 * with a single sage accent band as the emotional peak):
 *
 *   1. Hero              - warm tint  (bg set inside HeroSection)
 *   2. Hero Social Proof - white      ← NEW: 2 testimonials for early impact
 *   3. Specializations   - white      (bg set inside NicheGrid)
 *   4. Approach          - warm tint
 *   5. Social proof      - white
 *   6. CTA               - sage accent  ← peak
 *   7. FAQ teaser        - warm tint
 *   8. Footer CTA        - white        ← soft landing into the footer
 */

const approach = [
  {
    title: 'Trauma-Informed',
    description:
      'I track your nervous system. Your healing happens at your pace, not mine.',
  },
  {
    title: 'Culturally Humble',
    description:
      "Your values and background guide our work. I'm learning from you, not guessing about what matters.",
  },
  {
    title: 'Practical',
    description:
      'Real tools. Things you\'ll actually use this week. Not endless talking—actual strategies that shift how you function at home, work, with your kids.',
  },
]

// Note: testimonials is now imported at the top for accessing specific items
// homepageTestimonials is used for the full section below

const faqs = [
  {
    q: 'How long is the free consultation?',
    a: "Fifteen minutes. We'll chat about what's bringing you in, I'll share a bit about how I work, and we'll see if it feels like a fit.",
  },
  {
    q: 'How much does therapy cost?',
    a: "I offer sliding scale sessions from $80-$150 per 50-minute session. Let's figure out what works for your budget.",
  },
  {
    q: 'Do you take insurance?',
    a: "I'm happy to provide a superbill for out-of-network reimbursement, and I can walk you through how to use it on our first call.",
  },
  {
    q: 'Are sessions confidential?',
    a: 'Yes. Everything you share is protected by privacy laws (PIPEDA in Canada, HIPAA in the US) and therapist-client privilege. The only exceptions are mandatory reporting situations.',
  },
]

export default function Home() {
  // AggregateRating schema for social proof (all testimonials)
  // LocalBusiness schema is now in layout.tsx as the single source of truth
  const aggregateRatingSchema = getAggregateRatingSchema(testimonials.length)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />

        {/* ---------- 1. Hero - warm tint ---------- */}
        <HeroSection />

        {/* ---------- 2. Hero Social Proof - white, immediate impact ---------- */}
        <section className="section-padding bg-white border-b border-burgundy-100">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                What clients report
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <TestimonialConsentDisclaimer />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                key="jessica-adhd"
                index={0}
                quote={testimonials[1].quote}
                author={testimonials[1].author}
                context={testimonials[1].context}
                rating={testimonials[1].rating}
                totalReviews={homepageTestimonials.length}
              />
              <TestimonialCard
                key="priya-perinatal"
                index={1}
                quote={testimonials[5].quote}
                author={testimonials[5].author}
                context={testimonials[5].context}
                rating={testimonials[5].rating}
                totalReviews={homepageTestimonials.length}
              />
            </div>
          </div>
        </section>

        {/* ---------- 3. Specializations - white ---------- */}
        <NicheGrid />

        {/* ---------- 4. Approach - warm tint ---------- */}
        <section className="section-padding bg-warm-gray-50 border-t border-burgundy-100">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                How I Work
              </p>
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6">
                Therapy that fits the life you actually have
              </h2>
              <p className="text-lg text-warm-gray-600">
                You don't come to fix what's broken. You come to understand why you react the way you do, to see patterns you keep missing, and to find solid ground when everything feels tangled.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              {approach.map((item) => (
                <div key={item.title} className="card card-elevated text-center">
                  <h3 className="font-serif text-xl font-bold text-warm-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 5. Social proof - white ---------- */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                What people tell me after sessions
              </p>
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900">
                Client stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.author}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  context={testimonial.context}
                  rating={testimonial.rating}
                  totalReviews={testimonials.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 6. CTA - burgundy accent (the peak) ---------- */}
        <section className="section-padding text-white" style={{ backgroundColor: '#6d3a47' }}>
          <div className="container-base text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to talk?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#ede3e5' }}>
              Fifteen free minutes. No pressure, no forms ahead of time.
            </p>
            <Link
              href="/booking"
              className={buttonPresets.heroCtaPrimary}
            >
              Book your consultation
            </Link>
            <p className="text-sm mt-6" style={{ color: '#c19b9f' }}>
              No forms beforehand. No commitment to continue.
            </p>
          </div>
        </section>

        {/* ---------- 7. FAQ teaser - warm tint ---------- */}
        <section className="section-padding bg-warm-gray-50">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                Before you reach out
              </p>
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900">
                Common questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <details key={faq.q} className="card card-elevated cursor-pointer">
                  <summary className="font-semibold text-warm-gray-900 flex justify-between items-center gap-4">
                    {faq.q}
                    <span className="text-burgundy-600" aria-hidden="true">
                      ▼
                    </span>
                  </summary>
                  <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/faq" className={buttonPresets.tertiary}>
                See all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- 8. Footer CTA - white, soft landing ---------- */}
        <section className="section-padding bg-white border-t border-burgundy-100">
          <div className="container-base max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-5">
              Got questions?
            </h2>
            <p className="text-lg text-warm-gray-600 mb-8">
              I respond within 24 hours. Let's talk about what's actually going on for you.
            </p>
            <Link href="/about" className={buttonPresets.tertiary}>
              Learn more about me →
            </Link>
            <p className="text-sm text-warm-gray-600 mt-8">
              Telehealth • Sliding scale • I respond within 24 hours
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
