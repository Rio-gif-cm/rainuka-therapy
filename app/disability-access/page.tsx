import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disability-Affirming Therapy | Wonderloud Therapy',
  description:
    'Disability-affirming therapy that honors your lived experience. Accessible telehealth, flexible scheduling, accommodations honored, and support for chronic illness and invisible disabilities.',
}

const ACCENT = '#3f566d'

export default function DisabilityAccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero */}
        <section
          className="hero-section py-20"
          style={{ background: 'linear-gradient(135deg, rgba(245, 242, 249, 1) 0%, rgba(248, 250, 247, 1) 100%)' }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <p
              className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: '#e6ecf3', color: ACCENT }}
            >
              Disability-Affirming Approach
            </p>
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Therapy That Honors Your Disability
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: ACCENT }}>
              Disability isn&apos;t a problem to fix.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              It&apos;s a real part of your life that deserves compassionate, accessible support.
              Here, we meet you where you are&mdash;on your terms, at your pace.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
          </div>
        </section>

        {/* What Disability-Affirming Means */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="♿" level={2} color={colors.warmGray[900]}>
              What Disability-Affirming Therapy Means
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Disability-affirmative therapy recognizes disability and chronic illness as natural parts of human
                diversity&mdash;not conditions that need to be &quot;fixed&quot; or cured. This approach centers{' '}
                <em>your lived experience</em>, honors your knowledge of your own body and needs, and focuses on what
                actually works <em>for you</em>.
              </p>

              <div
                className="p-6 rounded"
                style={{ backgroundColor: '#f5f7fa', borderLeft: `4px solid ${ACCENT}` }}
              >
                <p className="font-semibold text-warm-gray-900 mb-2">Core Principle:</p>
                <p>
                  The problem isn&apos;t you. The problem is living in a world built without accessibility in mind.
                  Therapy helps you process the real emotional impact of ableism while building strength and
                  self-advocacy.
                </p>
              </div>

              <p>
                Unlike traditional therapy that might focus on &quot;independence,&quot; &quot;returning to
                normal,&quot; or reducing symptoms at all costs, disability-affirmative therapy focuses on:
              </p>

              <ul className="space-y-4">
                {[
                  {
                    icon: '❤️',
                    title: 'Acceptance and identity',
                    body: 'Disability is a valid identity, not a personal failure',
                  },
                  {
                    icon: '👥',
                    title: 'Recognizing ableism',
                    body: 'Naming the social barriers you face daily, not blaming yourself for them',
                  },
                  {
                    icon: '🛡️',
                    title: 'Realistic goals',
                    body: 'Setting expectations that honor your actual capacity and energy levels',
                  },
                  {
                    icon: '⏰',
                    title: 'Pacing and sustainability',
                    body: 'Building a life that doesn\u2019t require "pushing through" constant pain or exhaustion',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>
                      <strong className="text-warm-gray-900">{item.title}</strong> &mdash; {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Accessibility Commitments */}
        <section className="section-padding bg-gradient-to-b from-white to-burgundy-50">
          <div className="container-base">
            <IconHeading icon="✅" level={2} color={colors.warmGray[900]}>
              Our Accessibility Commitments
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Virtual Therapy (Telehealth)',
                  intro: 'No travel required. Session from home, your bed, or wherever feels safe and accessible.',
                  points: [
                    'Secure, HIPAA-compliant video sessions',
                    'Phone-only option available',
                    'Works around mobility limitations, pain flares, and fatigue',
                  ],
                },
                {
                  title: 'In-Person Accessibility',
                  intro: 'The office is designed with you in mind.',
                  points: [
                    'Wheelchair accessible entrance and seating',
                    'Accessible parking nearby',
                    'Fragrance-free environment',
                    'Quiet, low-sensory reception area',
                  ],
                },
                {
                  title: 'Flexible Scheduling',
                  intro: 'Your disability doesn\u2019t follow a 9-to-5 schedule. Neither do we.',
                  points: [
                    'Extended cancellation window (72 hours)',
                    'No-charge rescheduling for flare-ups or unpredictable symptoms',
                    'Morning, evening, and weekend availability',
                    'Shorter sessions available (20\u201330 min)',
                  ],
                },
                {
                  title: 'All Accommodations Honored',
                  intro: 'You know your needs. I listen and adapt.',
                  points: [
                    'Service animals and emotional support animals welcome',
                    'Sensory accommodations (lighting, volume, scent)',
                    'Cognitive access support (written summaries, longer processing time)',
                    'Pain management considerations (cushions, standing/reclining options)',
                  ],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="card card-compact card-static"
                >
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-3 flex items-center gap-2">
                    <span aria-hidden="true" style={{ color: colors.sage[600] }}>
                      ✓
                    </span>
                    {card.title}
                  </h3>
                  <p className="text-warm-gray-700 mb-4">{card.intro}</p>
                  <ul className="space-y-2 text-warm-gray-700 text-sm">
                    {card.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chronic Illness & Disability Support */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🌿" level={2} color={colors.warmGray[900]}>
              Therapy for Chronic Illness &amp; Disability
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-4">What We Work On Together</h3>
                <p className="mb-6">
                  Living with chronic illness or disability means managing far more than physical symptoms.
                  You&apos;re navigating grief, identity shifts, medical trauma, and the emotional weight of living in
                  an ableist world.
                </p>

                <div className="card card-tinted card-compact card-static">
                  <p className="font-semibold text-warm-gray-900 mb-4">
                    Common experiences I support clients through:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: 'Grief and identity loss',
                        body: 'Processing how your life has changed, without "moving on" meaning giving up who you are',
                      },
                      {
                        title: 'Medical trauma',
                        body: 'Healing from dismissal, invalidation, or harm experienced in healthcare settings',
                      },
                      {
                        title: 'Fatigue, pain, and emotional overwhelm',
                        body: 'Coping with unpredictable symptoms without self-blame',
                      },
                      {
                        title: 'Isolation and relationships',
                        body: 'Rebuilding connection when disability limits your social world',
                      },
                      {
                        title: 'Self-advocacy and boundaries',
                        body: 'Learning to ask for what you need without guilt',
                      },
                      {
                        title: 'Ableism and microaggressions',
                        body: 'Processing the daily weight of living in a world not built for you',
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="font-bold" style={{ color: colors.sage[600] }} aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong className="text-warm-gray-900">{item.title}</strong> &mdash; {item.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-4">
                  How Therapy Actually Works With Your Reality
                </h3>
                <p className="mb-6">
                  This isn&apos;t about &quot;thinking positively&quot; or &quot;pushing harder.&quot; It&apos;s about
                  building acceptance, realistic goals, and genuine connection to what matters to you.
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      title: 'We pace work together',
                      body: 'Adjusting intensity based on your energy that day, week, or season',
                    },
                    {
                      title: 'We challenge ableist messaging',
                      body: 'Including the thoughts you\u2019ve internalized about yourself',
                    },
                    {
                      title: 'We build on your strengths',
                      body: 'Not what a "normal" person would do, but what actually works for you',
                    },
                    {
                      title: 'We validate the real impact',
                      body: 'Of ableism, discrimination, and living without accessibility',
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="font-bold" style={{ color: colors.sage[600] }} aria-hidden="true">
                        →
                      </span>
                      <span>
                        <strong className="text-warm-gray-900">{item.title}</strong> &mdash; {item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* What You Won't Hear Here */}
        <section className="section-padding bg-cream-50">
          <div className="container-base">
            <IconHeading icon="🚫" level={2} color={colors.warmGray[900]}>
              What You Won&apos;t Hear In This Office
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { quote: '"You should just try harder."', response: 'Your effort is not the problem.' },
                {
                  quote: '"You need to accept your new normal."',
                  response: 'We build acceptance together, on your timeline.',
                },
                {
                  quote: '"Let\u2019s focus on independence."',
                  response: 'We focus on what independence means to you.',
                },
                { quote: '"You\u2019re too negative."', response: 'Your emotional reality is valid and important.' },
                {
                  quote: '"Have you tried yoga/meditation/positive thinking?"',
                  response: 'These may be tools, not solutions.',
                },
                {
                  quote: '"Your disability shouldn\u2019t affect your performance."',
                  response: 'Let\u2019s talk about what\u2019s actually realistic.',
                },
              ].map((item, index) => (
                <div key={index} className="card card-compact card-static">
                  <p className="text-warm-gray-900 font-semibold mb-2">{item.quote}</p>
                  <p className="text-warm-gray-700">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Invisible Disabilities */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="👁️" level={2} color={colors.warmGray[900]}>
              Invisible Disabilities Are Real
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Your disability doesn&apos;t need to be visible to be real. Chronic fatigue, autoimmune conditions,
                pain syndromes, neurological differences, and psychiatric disabilities are often invisible&mdash;but
                their impact is very real.
              </p>

              <div
                className="p-6 rounded"
                style={{ backgroundColor: colors.sage[50], borderLeft: `4px solid ${colors.sage[600]}` }}
              >
                <p>
                  You don&apos;t need to <em>look sick</em> to deserve accommodations, support, and recognition. Your
                  lived experience is proof enough.
                </p>
              </div>

              <p>
                I specialize in supporting people with invisible disabilities because I understand the specific
                challenges: being told you &quot;look fine,&quot; having to justify your limitations repeatedly, the
                isolation of living with something others can&apos;t see, and the internalized ableism that comes from
                being constantly questioned.
              </p>

              <p>
                Here, your disability is believed, honored, and central to our work together&mdash;not as something
                broken about you, but as a real part of your life that deserves real support.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-burgundy-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="💜" level={2} color={colors.warmGray[900]}>
              Your Disability Doesn&apos;t Disqualify You From Care
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              It makes you exactly who needs this approach. You deserve therapy that doesn&apos;t ask you to
              &quot;fix&quot; yourself&mdash;just support as you navigate a world that wasn&apos;t built with you in
              mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
                Get Started Today
              </Link>
              <Link href="/faq" className="inline-block btn btn-outline text-lg px-8 py-3">
                Questions? See FAQ
              </Link>
            </div>

            <p className="text-warm-gray-600 text-sm mt-6">
              Free 30-minute consultation • Confidential • Accommodations honored
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
