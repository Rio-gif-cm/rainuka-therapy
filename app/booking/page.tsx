import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingFormWrapper from '@/components/BookingFormWrapper'
import PrivacyAssuranceSection from '@/components/PrivacyAssuranceSection'
import ObjectionHandler from '@/components/ObjectionHandler'

export const metadata: Metadata = {
  title: 'Book Your Free Therapy Consultation | Wonderloud Therapy',
  description: 'Book your free 15-minute therapy consultation with Rainuka Oberoi, LCSW. Explore your needs, discuss your goals. No pressure, no obligation. Telehealth available.',
  openGraph: {
    title: 'Book Your Free Therapy Consultation | Wonderloud Therapy',
    description: 'Schedule your free therapy consultation. No obligation, no forms. Telehealth available.',
    type: 'website',
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Let's Talk
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto mb-4">
              Free 15-minute consultation. I'll reach out within 24 hours to find a time that works.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-2xl mx-auto">
              {/* Trust Signal Before Form */}
              {/* SOCIAL PROOF BADGE - High-impact trust signal */}
              <div className="card card-callout card-static bg-gradient-to-r from-sage-50 to-sage-100 mb-12 border-2 border-sage-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="font-semibold text-warm-gray-900 text-lg">
                        95% move forward with therapy. Real connection, real change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  Tell Me Your Story
                </h2>
                <p className="text-warm-gray-600">
                  I'll reach out within 24 hours.
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
                  <strong>Confidentiality:</strong> HIPAA + therapist-client privilege.
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
                  What if I'm not sure if I'm "ready" for therapy?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That's what the free call is for.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What happens in the free 15-minute call?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  We'll chat, see if we fit. You ask questions too.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  How quickly can I get an appointment?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  24 hours response. 1-2 week openings.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I have to reschedule?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Just give 24-hour notice.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do you work with insurance?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  In-network + superbills.
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
