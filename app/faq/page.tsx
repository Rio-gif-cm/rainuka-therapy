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
  {
    q: 'Will therapy help my postpartum anxiety?',
    a: 'Yes. Postpartum anxiety is treatable, and therapy helps you understand what\'s happening, calm your nervous system, and reconnect with your sense of self as a mother—often quickly.',
  },
  {
    q: 'How long after birth should I wait to start therapy?',
    a: 'You don\'t have to wait. We can work together anytime during pregnancy or postpartum. Early support prevents struggles from deepening, and we adjust to your energy and recovery needs.',
  },
  {
    q: 'When should I seek an ADHD diagnosis?',
    a: 'If you\'re struggling with focus, time management, emotional regulation, or organizing your life, evaluation might help. Many adults benefit from understanding their ADHD, with or without medication. We can explore whether diagnosis fits your needs.',
  },
  {
    q: 'Is adult ADHD diagnosis worth it?',
    a: 'It often is. A diagnosis can reduce shame, explain lifelong patterns, unlock accommodations at work, guide treatment options, and help you build systems that actually work for your brain—not against it.',
  },
  {
    q: 'How do I know if my career change is burnout or misalignment?',
    a: 'Burnout is exhaustion from overwork; misalignment is draining because the role doesn\'t fit your values or strengths. Therapy helps you untangle which one (or both) is true so you can make a move that actually helps.',
  },
  {
    q: 'Can therapy help me fix a stalling career?',
    a: 'Absolutely. We work through self-doubt, imposter feelings, networking anxiety, and career identity. Many clients clarify direction, find confidence to pursue opportunities, or pivot toward roles that feel more aligned.',
  },
  {
    q: 'How do couples work on communication together?',
    a: 'Couples therapy creates a safe space where both partners are heard, patterns are named, and new ways of connecting are practiced. Progress happens when both people feel understood and committed to change.',
  },
  {
    q: 'What if my partner won\'t come to therapy with me?',
    a: 'Individual therapy still helps tremendously. You can shift your patterns, set boundaries, and build clarity on what you need. Sometimes that creates space for your partner to be open to joining later.',
  },
  {
    q: 'Do you offer evening or weekend appointments?',
    a: 'Yes. I have limited evening and weekend slots to fit busy schedules. Let\'s find a time that works for you during your free consultation call.',
  },
  {
    q: 'What if I can\'t commit to a regular weekly schedule?',
    a: 'We can start with bi-weekly sessions or adjust frequency as your life changes. Consistency helps, but flexible scheduling makes therapy accessible to you.',
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
  title: 'Therapy FAQs - Perinatal, ADHD & Career | Wonderloud Therapy',
  description: 'Answers to therapy questions: confidentiality, pricing, ADHD diagnosis, perinatal anxiety, and what to expect. Get your questions answered by Rainuka Oberoi, LCSW.',
  openGraph: {
    title: 'Frequently Asked Questions About Therapy | Wonderloud Therapy',
    description: 'Common questions answered: confidentiality, pricing, specialties, and what to expect from therapy.',
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
                {FAQData.slice(0, 4).map((faq, index) => (
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
                {FAQData.slice(4, 10).map((faq, index) => (
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
                {FAQData.slice(10, 14).map((faq, index) => (
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
                {FAQData.slice(14, 30).map((faq, index) => (
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
            <div className="card card-tinted card-static text-center">
              <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                Want more details about pricing?
              </h3>
              <p className="text-warm-gray-600 mb-6">
                I have detailed information about sliding scale, insurance options, superbills, and payment plans on our pricing page. Still have questions? I\'m here to answer anything during your free consultation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/pricing" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 1.75rem', fontWeight: 600, fontSize: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                  View Pricing
                </Link>
                <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 1.75rem', fontWeight: 600, fontSize: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
