import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingFormWrapper from '@/components/BookingFormWrapper'
import PrivacyAssuranceSection from '@/components/PrivacyAssuranceSection'

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto mb-4">
              15 minutes to explore if we're a good fit. No obligation, no pressure.
            </p>
            <p className="text-lg text-sage-700 font-medium max-w-2xl mx-auto">
              ⏰ I usually respond within 24 hours and have availability within 1-2 weeks
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-2xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  Let's get started
                </h2>
                <p className="text-warm-gray-600">
                  I'll use the information below to reach out and schedule your free 15-minute consultation. 
                  I respond within 24 hours.
                </p>
              </div>

              <BookingForm />
            </div>
          </div>
        </section>

        {/* Privacy Assurance Section */}
        <PrivacyAssuranceSection />

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

            <div className="bg-sage-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-warm-gray-900 mb-4">Practical Details</h3>
              <div className="space-y-4 text-warm-gray-600">
                <p>
                  <strong>Session cost:</strong> $80-$150 per 50-minute session on a sliding scale. 
                  We'll discuss rates during our free call.
                </p>
                <p>
                  <strong>How we meet:</strong> Telehealth via secure video. You can be home, in your office, 
                  or any comfortable space.
                </p>
                <p>
                  <strong>Insurance:</strong> I'm in-network with [insurance providers]. 
                  I also provide superbills for out-of-network claims.
                </p>
                <p>
                  <strong>Confidentiality:</strong> Everything you share is protected by HIPAA and 
                  therapist-client privilege.
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
                  That's the free call's purpose. We'll talk about whether therapy feels right. 
                  No decision is final until you're ready.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What happens in the free 15-minute call?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  We'll chat briefly about what brought you in, how I can help, and whether we seem like a good fit. 
                  You can ask any questions too.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  How quickly can I get an appointment?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  I respond to booking requests within 24 hours and typically have openings within 1-2 weeks 
                  for your first session.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I have to reschedule?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That's fine. Just let me know as soon as you can. I require 24-hour notice to reschedule 
                  without being charged.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do you work with insurance?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes, I'm in-network with several insurances. I can also provide superbills if you want to 
                  submit yourself for out-of-network reimbursement.
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
