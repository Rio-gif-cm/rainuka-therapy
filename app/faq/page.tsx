import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getFAQPageSchema } from '@/lib/faq-schema'

export const metadata: Metadata = {
  title: 'Therapy FAQs | Questions Answered',
  description: 'Answers to common therapy questions: cost, what to expect, therapy length, and more. Learn how working with Rainuka can help you heal.',
  keywords: 'therapy FAQ, therapy questions, therapy cost, what is therapy, how therapy works',
}

const FAQData = [
  {
    q: 'Is this first-time therapy?',
    a: 'Doesn\'t matter-whether you\'ve done this before or you\'re walking in cold, I meet you where you are. No shame. No assumptions.',
  },
  {
    q: 'Will you judge me?',
    a: 'Not at all. I\'ve heard it all, and nothing surprises me. You\'re paying me to understand what\'s happening for you, not to evaluate whether it\'s "right" or "wrong."',
  },
  {
    q: 'How is therapy different from talking to friends?',
    a: 'Friends are amazing, but they can\'t step outside the relationship to help you see patterns. I can. Plus, there\'s no fallout-you don\'t have to manage my feelings or worry I\'ll judge you at parties.',
  },
  {
    q: 'Will you tell me what to do?',
    a: 'No. You\'re the expert on your life. I help you think through what\'s actually true, name what matters, and then you decide.',
  },
  {
    q: 'How long does therapy typically take?',
    a: 'It varies wildly. Some people feel relief in 6-8 sessions. Others work with me for months or years. We figure it out together as you go.',
  },
  {
    q: 'How much does therapy cost?',
    a: '$150/session for 50 minutes. If that\'s tight, I have sliding scale ($80-$120) for a few slots. Insurance options exist too-more on the pricing page. Real talk: cost shouldn\'t be the reason you don\'t start.',
  },
  {
    q: 'Do you take insurance?',
    a: 'I\'m in-network with several providers. If I\'m out-of-network for you, I give you a superbill and many clients end up paying $50-$75 out-of-pocket instead of $150. Ask during our free call-we\'ll figure out your best option.',
  },
  {
    q: 'What if I can\'t afford $150/session?',
    a: 'Let\'s work with what you have. Sliding scale, insurance workarounds, payment plans, or I can point you to resources. Money shouldn\'t be the wall between you and help.',
  },
  {
    q: 'Can I get reimbursed by insurance if you\'re out-of-network?',
    a: 'Yes, if your plan covers out-of-network mental health. I give you a detailed receipt (superbill), you send it to insurance, they cut you a check. Lots of people go from paying full price to paying $50-$75.',
  },
  {
    q: 'How often do people typically meet?',
    a: 'Most start weekly. Once we build momentum and you feel steadier, we might stretch to every other week. We adjust based on what\'s actually happening.',
  },
  {
    q: 'Is telehealth as effective as in-person?',
    a: 'Yes. Research backs it up. You\'re in your own space (less intimidating), no commute, and the connection is real. I can see your face and hear what you\'re saying.',
  },
  {
    q: 'Is therapy confidential?',
    a: 'Completely. HIPAA protects everything. I don\'t tell anyone. The only exceptions: if you tell me you\'re planning to hurt yourself or someone else, I have to act.',
  },
  {
    q: 'What happens if you think I\'m a danger to myself or others?',
    a: 'I\'m legally required to step in-I call emergency services, your family, or local authorities. Sounds scary, but it\'s about keeping you safe. We talk about this upfront in your first session.',
  },
  {
    q: 'Do you use my information for anything else?',
    a: 'Never. Your info is just for your care. Not for marketing, research, or anything else. It stays secure and it\'s yours.',
  },
  {
    q: 'What\'s your data security like?',
    a: 'Our video platform is HIPAA-compliant and encrypted. Notes live in a secure system with full data protection. I take this seriously because you have to be able to trust me.',
  },
  {
    q: 'Do I need to have a diagnosis to work with you?',
    a: 'No. You don\'t need a label to explore what\'s happening. If you\'re wondering about ADHD or perinatal anxiety, we can talk through it without a formal diagnosis on the table.',
  },
  {
    q: 'Is postpartum depression/anxiety real?',
    a: 'One hundred percent. It\'s as real as any other health condition. It\'s common, treatable, and you\'re not weak or broken for experiencing it.',
  },
  {
    q: 'Can I do therapy while pregnant?',
    a: 'Absolutely. Pregnancy is a big transition. Therapy helps with the anxiety, fears about birth, questions about motherhood-all of it. We can work together before the baby comes.',
  },
  {
    q: 'Will therapy help with ADHD symptoms?',
    a: 'It works best alongside medication if you take it. Therapy helps you stop blaming yourself for ADHD stuff, build systems that fit your brain, and untangle the shame.',
  },
  {
    q: 'Should I quit my job before starting therapy?',
    a: 'Hold on-let\'s talk first about what\'s really going on. Job burnout and misalignment look similar but they\'re different. Therapy helps you untangle it so you don\'t make a move you\'ll regret.',
  },
  {
    q: 'Will therapy help my postpartum anxiety?',
    a: 'Yes. Postpartum anxiety is really treatable. We work on understanding what\'s happening in your body and mind, calming your nervous system, and helping you reconnect with yourself as a mom. Many clients feel better faster than they expect.',
  },
  {
    q: 'How long after birth should I wait to start therapy?',
    a: 'You don\'t have to wait. Start anytime during pregnancy or postpartum. Early support stops things from piling up. And I adjust to your energy and recovery-no pressure to be ready for anything.',
  },
  {
    q: 'When should I seek an ADHD diagnosis?',
    a: 'If focus, time management, emotional regulation, or organization have always been hard, a diagnosis might be the answer. It explains lifelong stuff and opens doors to help. We can explore whether it fits what you\'re dealing with.',
  },
  {
    q: 'Is adult ADHD diagnosis worth it?',
    a: 'Often, yes. A diagnosis can kill the shame, explain patterns that made no sense, unlock workplace accommodations, and help you build systems that actually work for how your brain works instead of fighting it.',
  },
  {
    q: 'How do I know if my career change is burnout or misalignment?',
    a: 'Burnout is exhaustion from overwork. Misalignment is draining because the job doesn\'t fit your values. Often it\'s both. Therapy helps you see clearly so your next move actually helps.',
  },
  {
    q: 'Can therapy help me fix a stalling career?',
    a: 'Yes. Self-doubt, imposter feelings, networking fear-we work through it. Clients often clarify what they actually want, find the confidence to go after it, or pivot to something that fits.',
  },
  {
    q: 'What if I cry or get upset during a session?',
    a: 'That\'s the whole point. Sessions are built for you to feel things and work through them. Crying is information. Getting frustrated is real. You\'re safe here.',
  },
  {
    q: 'How do couples work on communication together?',
    a: 'Both of you get heard. We name what\'s actually happening (not just surface stuff), and you practice new ways of connecting while I\'m in the room. Real change happens when both people feel understood and actually want to shift.',
  },
  {
    q: 'What if my partner won\'t come to therapy with me?',
    a: 'Individual therapy still works. You can shift how you show up, set boundaries that matter, and get clarity on what you need. Sometimes that opens the door for your partner to join later.',
  },
  {
    q: 'Do you offer evening or weekend appointments?',
    a: 'Yes-I have some evening and weekend slots. Let\'s find a time that doesn\'t destroy your week during your free call.',
  },
  {
    q: 'What if I can\'t commit to a regular weekly schedule?',
    a: 'We can work bi-weekly or adjust as your life changes. Weekly is ideal, but consistent beats perfect. Flexibility means you actually come.',
  },
]

// Schema.org FAQPage JSON-LD for rich snippets in Google Search
const faqSchema = getFAQPageSchema(
  FAQData,
  'https://rainuka-therapy.com/faq',
  'Therapy FAQs'
)

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

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-burgundy-50">
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
                      <span className="text-burgundy-400">▼</span>
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
                      <span className="text-burgundy-400">▼</span>
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
                      <span className="text-burgundy-400">▼</span>
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
                {FAQData.slice(14, 32).map((faq, index) => (
                  <details key={index} className="card card-info cursor-pointer">
                    <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                      {faq.q}
                      <span className="text-burgundy-400">▼</span>
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
                I have detailed information about sliding scale, insurance options, superbills, and payment plans on our pricing page. Still have questions? I'm here to answer anything during your free consultation.
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
