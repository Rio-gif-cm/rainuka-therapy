import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

const FAQData = [
  {
    q: 'Is this first-time therapy?',
    a: 'It doesn\'t matter—whether you\'ve been before or this is your first time, I meet you where you are with no judgment.',
  },
  {
    q: 'Will you judge me?',
    a: 'No. My job is to understand, not judge. Everything you share stays confidential and judgment-free.',
  },
  {
    q: 'How is therapy different from talking to friends?',
    a: 'Friends care but aren\'t trained to help you process emotions or build new patterns. Therapy offers specialized support with confidentiality and safety.',
  },
  {
    q: 'Will you tell me what to do?',
    a: 'No. I help you think clearly so you can decide. My role is support and guidance, not direction.',
  },
  {
    q: 'How long does therapy typically take?',
    a: 'It varies. Some benefit from 6–8 sessions; others work with me for months or years. We\'ll figure out what\'s right for you.',
  },
  {
    q: 'How much does therapy cost?',
    a: 'Standard rate is $150/session for 50-minute therapy. I offer sliding scale ($80–$120) for limited slots based on financial need. For detailed pricing, insurance info, and payment options, see our pricing page.',
  },
  {
    q: 'Do you take insurance?',
    a: 'I\'m in-network with several insurance providers. I also offer superbills for out-of-network reimbursement, which can reduce your out-of-pocket cost significantly. Ask during your free call.',
  },
  {
    q: 'What if I can\'t afford $150/session?',
    a: 'We have several options: sliding scale (if slots are available), out-of-network insurance reimbursement, payment plans, or resources elsewhere. Financial barriers shouldn\'t prevent you from getting help.',
  },
  {
    q: 'Can I get reimbursed by insurance if you\'re out-of-network?',
    a: 'Yes, if you have out-of-network (OON) mental health benefits. I provide a superbill (detailed receipt), you submit it to insurance, and they reimburse you directly. Many clients go from $150 out-of-pocket to just $50–$75 effective cost.',
  },
  {
    q: 'How often do people typically meet?',
    a: 'Most start with weekly 50-minute sessions and adjust to bi-weekly after establishing momentum.',
  },
  {
    q: 'Is telehealth as effective as in-person?',
    a: 'Research confirms yes. You stay comfortable, avoid commute, and the connection is real.',
  },
  {
    q: 'Is therapy confidential?',
    a: 'Yes—everything is protected by HIPAA and therapist-client privilege, except mandatory reporting situations (risk of harm).',
  },
  {
    q: 'What happens if you think I\'m a danger to myself or others?',
    a: 'I\'m required by law to take action (emergency services, family contact, or authorities). We\'ll discuss this during your first session.',
  },
  {
    q: 'Do you use my information for anything else?',
    a: 'No. Your information stays secure and is used only for your care—never for marketing or research.',
  },
  {
    q: 'What\'s your data security like?',
    a: 'Sessions use HIPAA-compliant, encrypted video. Notes are stored securely with full data protection.',
  },
  {
    q: 'Do I need to have a diagnosis to work with you?',
    a: 'No. You don\'t need an ADHD or perinatal diagnosis to explore those concerns. We work with what\'s happening for you.',
  },
  {
    q: 'Is postpartum depression/anxiety real?',
    a: 'Absolutely. Perinatal mental health challenges are real, common, treatable—and you\'re not weak or broken.',
  },
  {
    q: 'Can I do therapy while pregnant?',
    a: 'Yes. Therapy during pregnancy helps with anxiety, processing fears, and preparing for birth and postpartum.',
  },
  {
    q: 'Will therapy help with ADHD symptoms?',
    a: 'Therapy complements medication by helping you understand ADHD, build systems that work, and process shame.',
  },
  {
    q: 'Should I quit my job before starting therapy?',
    a: 'Not necessarily. Let\'s talk through what\'s really happening first. Career therapy helps you decide, not pushes an answer.',
  },
]

// Schema.org FAQPage JSON-LD for rich snippets in Google Search
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQData.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export const metadata = {
  title: 'Therapy FAQs - Perinatal, ADHD & Career | Rainuka Oberoi, LCSW',
  description: 'Common questions about therapy with Rainuka: Is therapy confidential? How much does it cost? What about ADHD diagnosis and perinatal anxiety? Get answers to your therapy questions.',
  openGraph: {
    title: 'Frequently Asked Questions About Therapy | Rainuka Oberoi, LCSW',
    description: 'Your therapy questions answered: confidentiality, pricing, specialties, and what to expect.',
    type: 'website',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* FAQ Schema JSON-LD - renders as rich snippets in Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, null, 2),
        }}
      />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Common questions about therapy, confidentiality, pricing, and my specialties in perinatal mental health, ADHD, and career counseling.
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
                {FAQData.slice(0, 5).map((faq, index) => (
                  <details key={index} className="card card-info cursor-pointer">
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
                {FAQData.slice(5, 11).map((faq, index) => (
                  <details key={index} className="card card-info cursor-pointer">
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
                {FAQData.slice(11, 15).map((faq, index) => (
                  <details key={index} className="card card-info cursor-pointer">
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
                {FAQData.slice(15, 20).map((faq, index) => (
                  <details key={index} className="card card-info cursor-pointer">
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
              <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 1.75rem', fontWeight: 600, fontSize: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
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
