import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PrivacyAssuranceSection from '@/components/PrivacyAssuranceSection'
import ObjectionHandler from '@/components/ObjectionHandler'

// Lazy-load BookingFormWrapper to reduce initial JS bundle
// This component includes form validation and interaction logic
// Loading skeleton prevents CLS while form loads asynchronously
const BookingFormWrapper = dynamic(
  () => import('@/components/BookingFormWrapper'),
  {
    ssr: true,
    loading: () => (
      <div className="w-full max-w-2xl mx-auto rounded-lg bg-warm-gray-50 border border-warm-gray-200 p-8 animate-pulse">
        <div className="space-y-4">
          <div className="h-6 bg-warm-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-warm-gray-100 rounded"></div>
          <div className="h-10 bg-warm-gray-200 rounded mt-6"></div>
          <div className="h-10 bg-warm-gray-200 rounded"></div>
          <div className="h-10 bg-warm-gray-200 rounded"></div>
        </div>
      </div>
    ),
  }
)

export const metadata: Metadata = {
  title: 'Book Free Therapy Consultation | Schedule Today',
  description: 'Schedule your free 15-minute consultation today. Telehealth available, licensed in Canada, California, and Florida. Start your therapy journey now.',
  keywords: 'book therapy, schedule consultation, free therapy consultation, online therapy booking',
  openGraph: {
    title: 'Book Your Free Consultation | Wonderloud Therapy',
    description: 'Schedule your free 15-minute therapy consultation. Telehealth available, licensed therapist.',
    type: 'website',
    url: 'https://wonderloud-therapy.com/booking',
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-burgundy-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Let's talk.
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto mb-4">
              Fifteen free minutes. I'll reach out within 24 hours.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-2xl mx-auto">
              {/* Trust Signal Before Form */}
              {/* SOCIAL PROOF BADGE - High-impact trust signal */}
              <div className="card card-callout card-static bg-gradient-to-r from-burgundy-50 to-burgundy-100 mb-12 border-2 border-burgundy-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="font-semibold text-warm-gray-900 text-lg">
                        Most people feel heard in that first 15 minutes. The work builds from there.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  Tell me what's going on
                </h2>
                <p className="text-warm-gray-600">
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <BookingFormWrapper />
            </div>
          </div>
        </section>

        {/* Privacy Assurance Section */}
        <PrivacyAssuranceSection />

        {/* Objection Handler: Cost & Time Concerns */}
        <ObjectionHandler />

        {/* Info Section */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Step 1: Your Information</h3>
                <p className="text-warm-gray-600 text-sm">
                  Share your basic info and what brings you here.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Step 2: Free 15-Minute Call</h3>
                <p className="text-warm-gray-600 text-sm">
                  We'll chat about what you're navigating and how I can help.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Step 3: Decide Together</h3>
                <p className="text-warm-gray-600 text-sm">
                  If it feels right, we'll schedule your first session.
                </p>
              </div>
            </div>

            <div className="card card-tinted card-static mt-12">
              <h3 className="text-xl font-bold text-warm-gray-900 mb-4">Practical Details</h3>
              <div className="space-y-4 text-warm-gray-600">
                <p>
                  <strong>Session cost:</strong> $80-$150 sliding scale.
                </p>
                <p>
                  <strong>How we meet:</strong> Secure telehealth. Anywhere comfortable.
                </p>
                <p>
                  <strong>Insurance:</strong> In-network + superbills available.
                </p>
                <p>
                  <strong>Confidentiality:</strong> Privacy-protected & therapist-client privilege (PIPEDA-compliant for Canadian clients, HIPAA for US).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Booking Questions
            </h2>

            <div className="space-y-4">
              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I'm not sure if I'm ready?
                  <span className="text-burgundy-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That's literally what the free call is for. No pressure. We just talk.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What happens in that 15 minutes?
                  <span className="text-burgundy-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  You tell me what's happening. I listen and ask questions. We figure out if we fit. You can ask me anything too.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  How quickly can I get in?
                  <span className="text-burgundy-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  I respond within 24 hours and we usually find a slot within 1-2 weeks.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I have to reschedule?
                  <span className="text-burgundy-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Give me 24 hours notice if you can. Life happens. We'll work it out.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Does insurance work?
                  <span className="text-burgundy-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. I'm in-network with some plans and can do superbills for others.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
