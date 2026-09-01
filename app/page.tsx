import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import NicheGrid from '@/components/NicheGrid'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import { homepageTestimonials, testimonials } from '@/src/data/testimonials'
import { getAggregateRatingSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Trauma-Informed Therapy for Perinatal, ADHD & Career | Rainuka Oberoi, LCSW',
  description: 'Therapy for perinatal mental health, adult ADHD diagnosis, and career transitions. Telehealth, sliding scale. Trauma-informed, culturally humble approach. Rainuka Oberoi, LCSW.',
  keywords: 'therapy, therapist, perinatal mental health, ADHD, career counseling, postpartum anxiety, trauma-informed',
  openGraph: {
    title: 'Trauma-Informed Therapy for Perinatal, ADHD & Career | Rainuka Oberoi, LCSW',
    description: 'Therapy for perinatal mental health, adult ADHD diagnosis, and career transitions. Telehealth, sliding scale. Trauma-informed, culturally humble approach.',
    type: 'website',
  },
}

/**
 * Homepage narrative arc (background rhythm alternates tint / white,
 * with a single sage accent band as the emotional peak):
 *
 *   1. Hero              — warm tint  (bg set inside HeroSection)
 *   2. Hero Social Proof — white      ← NEW: 2 testimonials for early impact
 *   3. Specializations   — white      (bg set inside NicheGrid)
 *   4. Approach          — warm tint
 *   5. Social proof      — white
 *   6. CTA               — sage accent  ← peak
 *   7. FAQ teaser        — warm tint
 *   8. Footer CTA        — white        ← soft landing into the footer
 */

const approach = [
  {
    title: 'Trauma-Informed',
    description:
      'I understand how past experiences shape the present. We move at your pace, honoring your nervous system.',
  },
  {
    title: 'Culturally Humble',
    description:
      'Your values, your community, your lived experience matter. I\u2019m learning from you, not imposing my worldview.',
  },
  {
    title: 'Practical',
    description:
      'You\u2019ll get real tools you can use today\u2014not just insight. Therapy that fits into your actual life.',
  },
]

// Note: testimonials is now imported at the top for accessing specific items
// homepageTestimonials is used for the full section below

const faqs = [
  {
    q: 'How long is the free consultation?',
    a: 'Fifteen minutes. We\u2019ll chat about what\u2019s bringing you in, I\u2019ll share a bit about how I work, and we\u2019ll see if it feels like a fit.',
  },
  {
    q: 'How much does therapy cost?',
    a: 'I offer sliding scale sessions from $80\u2013$150 per 50-minute session. Let\u2019s figure out what works for your budget.',
  },
  {
    q: 'Do you take insurance?',
    a: 'I\u2019m happy to provide a superbill for out-of-network reimbursement, and I can walk you through how to use it on our first call.',
  },
  {
    q: 'Are sessions confidential?',
    a: 'Yes. Everything you share is protected by HIPAA and therapist-client privilege. The only exceptions are mandatory reporting situations.',
  },
]

export default function Home() {
  // AggregateRating schema for social proof (all testimonials)
  // LocalBusiness schema is now in layout.tsx as the single source of truth
  const aggregateRatingSchema = getAggregateRatingSchema(testimonials.length)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />

        {/* ---------- 1. Hero — warm tint ---------- */}
        <HeroSection />

        {/* ---------- 2. Hero Social Proof — white, immediate impact ---------- */}
        <section className="section-padding bg-white border-b border-sage-100">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage-600 mb-4">
                What clients say
              </p>
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

        {/* ---------- 3. Specializations — white ---------- */}
        <NicheGrid />

        {/* ---------- 4. Approach — warm tint ---------- */}
        <section className="section-padding bg-warm-gray-50 border-t border-sage-100">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage-600 mb-4">
                How I Work
              </p>
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6">
                Therapy that fits the life you actually have
              </h2>
              <p className="text-lg text-warm-gray-600">
                Therapy isn&apos;t about being &quot;fixed.&quot; It&apos;s about understanding
                yourself better and finding clarity in the middle of what feels complicated.
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

        {/* ---------- 5. Social proof — white ---------- */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage-600 mb-4">
                In Their Words
              </p>
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900">
                Stories of transformation from people just like you
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

        {/* ---------- 6. CTA — sage accent (the peak) ---------- */}
        <section className="section-padding text-white" style={{ backgroundColor: '#547c3f' }}>
          <div className="container-base text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Reclaim Your Peace?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#e8ede5' }}>
              Let&apos;s start with a free 15-minute conversation. I&apos;ll listen to what&apos;s
              brought you here, and you&apos;ll get a real sense of how we&apos;d work together.
            </p>
            <Link
              href="/booking"
              style={{
                display: 'inline-block',
                backgroundColor: 'white',
                color: '#547c3f',
                padding: '1rem 2rem',
                fontWeight: 600,
                borderRadius: '0.5rem',
                transition: 'all 0.15s ease-out',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Start Your Breakthrough Session
            </Link>
            <p className="text-sm mt-6" style={{ color: '#d1dcc8' }}>
              No forms beforehand. No obligation to continue.
            </p>
          </div>
        </section>

        {/* ---------- 7. FAQ teaser — warm tint ---------- */}
        <section className="section-padding bg-warm-gray-50">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage-600 mb-4">
                Before You Reach Out
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
                    <span className="text-sage-600" aria-hidden="true">
                      ▼
                    </span>
                  </summary>
                  <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/faq" className="btn-link" style={{ fontSize: '1rem', fontWeight: 600 }}>
                See all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- 8. Footer CTA — white, soft landing ---------- */}
        <section className="section-padding bg-white border-t border-sage-100">
          <div className="container-base max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-5">
              Ready for Clarity?
            </h2>
            <p className="text-lg text-warm-gray-600 mb-8">
              That&apos;s a reasonable place to be. Reaching out isn&apos;t a commitment to
              anything—it&apos;s just a conversation. Whenever you&apos;re ready, I&apos;m here.
            </p>
            <Link href="/about" className="btn-link" style={{ fontWeight: 600 }}>
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
