import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Questions about therapy, booking, or how I work? Find answers here.
            </p>
          </div>
        </section>

        {/* FAQs by Category */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            {/* About Therapy */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                About Therapy
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Is this first-time therapy?',
                    a: 'It doesn\'t matter. Whether you\'ve been in therapy before or this is your first time, I meet you where you are. No judgment.',
                  },
                  {
                    q: 'Will you judge me?',
                    a: 'No. My job isn\'t to judge—it\'s to understand. Anything you share is confidential and non-judgmental.',
                  },
                  {
                    q: 'How is therapy different from talking to friends?',
                    a: 'Friends care about you but aren\'t trained to help you process complex emotions or build new patterns. Therapy gives you that specialized support plus confidentiality and safety.',
                  },
                  {
                    q: 'Will you tell me what to do?',
                    a: 'No. I\'ll help you think clearly so YOU can decide. My role is support, not direction.',
                  },
                  {
                    q: 'How long does therapy typically take?',
                    a: 'It depends. Some people benefit from 6-8 sessions; others work with me for months or years. We\'ll figure out what feels right for you.',
                  },
                ].map((faq, index) => (
                  <details key={index} className="card cursor-pointer">
                    <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                      {faq.q}
                      <span className="text-sage-400">▼</span>
                    </summary>
                    <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Practical */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                Practical Information
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'How much does therapy cost?',
                    a: 'I offer sliding scale sessions from $80-$150 per 50-minute session. We\'ll figure out what works for your budget.',
                  },
                  {
                    q: 'Do you take insurance?',
                    a: 'I\'m in-network with several insurance providers. I also offer superbills for out-of-network reimbursement. Ask during your free call.',
                  },
                  {
                    q: 'How often do people typically meet?',
                    a: 'Most people start with weekly 50-minute sessions. Some adjust to bi-weekly after establishing momentum.',
                  },
                  {
                    q: 'What if I have to reschedule or cancel?',
                    a: 'Life happens. Just give me 24 hours notice. No charge for rescheduling with notice.',
                  },
                  {
                    q: 'What if I can\'t afford regular therapy?',
                    a: 'I offer sliding scale rates and can work with you on payment plans. If neither works, I\'m happy to refer you to lower-cost options.',
                  },
                  {
                    q: 'Is telehealth as effective as in-person?',
                    a: 'Research says yes. Telehealth works great for therapy. You\'re comfortable, no commute, and the connection is real.',
                  },
                ].map((faq, index) => (
                  <details key={index} className="card cursor-pointer">
                    <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                      {faq.q}
                      <span className="text-sage-400">▼</span>
                    </summary>
                    <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Privacy & Safety */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                Privacy & Confidentiality
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Is therapy confidential?',
                    a: 'Yes. Everything you share is protected by HIPAA and therapist-client privilege. The only exceptions are mandatory reporting situations (risk of harm to yourself or others).',
                  },
                  {
                    q: 'What happens if you think I\'m a danger to myself or others?',
                    a: 'I\'m required by law to take action (contact emergency services, family members, or authorities). We\'ll talk about this during your first session.',
                  },
                  {
                    q: 'Do you use my information for anything else?',
                    a: 'No. Your information is kept secure and used only for your care. I don\'t use client information for marketing or research.',
                  },
                  {
                    q: 'What\'s your data security like?',
                    a: 'Telehealth is through HIPAA-compliant, encrypted video. Your session notes are stored securely. All data is protected.',
                  },
                ].map((faq, index) => (
                  <details key={index} className="card cursor-pointer">
                    <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                      {faq.q}
                      <span className="text-sage-400">▼</span>
                    </summary>
                    <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Niche-Specific */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                About My Specialties
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Do I need to have a diagnosis to work with you?',
                    a: 'No. You don\'t need ADHD diagnosis to work on ADHD concerns. You don\'t need perinatal diagnosis to explore reproductive mental health. We work with what\'s happening for you.',
                  },
                  {
                    q: 'Is postpartum depression/anxiety real?',
                    a: 'Absolutely. Perinatal mental health challenges are real, common, and treatable. You\'re not weak or broken.',
                  },
                  {
                    q: 'Can I do therapy while pregnant?',
                    a: 'Yes. Therapy during pregnancy can be incredibly helpful for anxiety management, processing fears, and preparing for birth and postpartum.',
                  },
                  {
                    q: 'Will therapy help with ADHD symptoms?',
                    a: 'Therapy isn\'t a replacement for medication. But it helps you understand your ADHD, build systems that work for you, and process shame.',
                  },
                  {
                    q: 'Should I quit my job before starting therapy?',
                    a: 'Not necessarily. Let\'s talk through what\'s really going on first. Career therapy helps you decide, not pushes you toward an answer.',
                  },
                ].map((faq, index) => (
                  <details key={index} className="card cursor-pointer">
                    <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                      {faq.q}
                      <span className="text-sage-400">▼</span>
                    </summary>
                    <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-sage-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-warm-gray-600 mb-6">
                I'm here to answer anything. Reach out or ask me directly during your free consultation.
              </p>
              <Link href="/contact" className="inline-block btn btn-primary">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
