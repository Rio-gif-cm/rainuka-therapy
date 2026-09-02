import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export const metadata = {
  title: 'Neurodivergent Therapy | ADHD, Autism & Affirming',
  description: 'Affirming therapy for neurodivergent adults: ADHD, autism, diagnosis, masking, burnout recovery. Strengths-based. Schedule today.',
}

const ACCENT = 'var(--neutral-sage-800)'

export default function NeurodivergentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero - Neurodivergent: Calm slate-teal for regulation, clarity, and low sensory load */}
        <section
          className="hero-section py-20"
          style={{ background: 'linear-gradient(135deg, rgba(240, 246, 248, 1) 0%, rgba(248, 250, 247, 1) 100%)' }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Neurodivergent Therapy: Your Brain Is Not the Problem
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: ACCENT }}>
              Your brain isn&apos;t broken. It&apos;s wired differently. Let&apos;s work with that.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              ADHD. Autism. AuDHD. Late diagnosis and identity integration. Masking and burnout
              recovery. Therapy that celebrates how your brain actually works instead of coaching you
              to perform neurotypicality more convincingly.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
            <p className="text-warm-gray-600 text-sm mt-6">
              No diagnosis required. Self-identification is welcome here.
            </p>
          </div>
        </section>

        {/* What Affirming Therapy Means */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🧠" level={2} color={colors.warmGray[900]}>
              What Affirming Therapy Actually Means
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Not compliance. Not teaching you to mask more convincingly so the neurotypical world stops noticing you&apos;re different.
                Real affirmation of your neurodivergent identity, your actual strengths, and what your brain actually needs to thrive.
              </p>

              <div className="p-6 rounded" style={{ backgroundColor: 'var(--neutral-sage-50)', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">The Core Commitment:</p>
                <p>
                  We work from the neurodiversity paradigm: ADHD and autism are natural variations in
                  how brains work, not defects to be cured or &quot;corrected&quot; so you fit the mold. The goal is a life that fits
                  you-not a you that fits someone else&apos;s expectations. You&apos;ve been trying to be normal for long enough. Let&apos;s build something that actually works.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {[
                {
                  title: 'No "Fix" Language',
                  description:
                    'Your neurodivergence is not a disorder to overcome. It is a core part of who you are-a different neurotype, not a deficit. We are not here to make you less autistic or less ADHD.',
                  icon: '🚫',
                },
                {
                  title: 'Strengths-Based, Not Deficit-Focused',
                  description:
                    'ADHD hyperfocus, autistic pattern recognition, deep integrity, fierce loyalty, creative problem-solving-your neurodivergence comes with real gifts that aren&apos;t just &quot;managing compensations.&quot; We explore what you are genuinely good at and build on it, not just manage or minimize symptoms. You don&apos;t need to be less of who you are.',
                  icon: '💪',
                },
                {
                  title: 'Identity-First Language',
                  description:
                    'I use &quot;autistic person&quot; and &quot;ADHD adult,&quot; not &quot;person with autism&quot; or &quot;individual with ADHD.&quot; Your neurodivergence is integral to your identity-it shapes how you think, relate, and move through the world. It&apos;s not something separate to discuss at arm&apos;s length. If you prefer person-first language or something else entirely, we use your language.',
                  icon: '💬',
                },
                {
                  title: 'Sensory-Informed Care',
                  description:
                    'Sensory processing affects everything-how you regulate emotions, how executive function works, how you move through the world and relate to your own body. We talk about your sensory needs openly and build regulation into your actual coping strategies. Not as an accommodation, but as central to understanding you.',
                  icon: '🌊',
                },
              ].map((item, index) => (
                <div key={index} className="card card-compact card-static">
                  <p className="text-4xl mb-3">{item.icon}</p>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                  <p className="text-warm-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Paths I Walk With Clients */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-base">
            <IconHeading icon="🧭" level={2} color={colors.warmGray[900]}>
              Paths I Walk With Clients
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                These are the journeys I work with regularly. You might recognize yourself here-or in
                the overlap of several.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Late Diagnosis & Identity Integration',
                    body: 'Discovering you are autistic or ADHD in adulthood. Reframing your entire life story through that lens. Understanding why you struggled, where your gifts come from, and who you are beneath the masking.',
                    note: 'This is profound identity work. It changes how you see yourself, your relationships, and what you expect from yourself.',
                  },
                  {
                    title: 'Masking & Burnout Recovery',
                    body: 'Years of performing neurotypicality take a toll. Autistic burnout. ADHD depletion. Exhaustion that sleep does not fix, because it is not tiredness-it is the cost of pretending to be someone else.',
                    note: 'We talk about unmasking safely, recognizing burnout patterns early, and building a life that does not require constant adaptation.',
                  },
                  {
                    title: 'Executive Function & ADHD Strategies',
                    body: 'Time blindness, task initiation, working memory. ADHD is not about willpower-it is about how your brain prioritizes and processes. We work with your actual neurobiology, not against it.',
                    note: 'We develop strategies that fit your brain: systems, accountability structures, and self-compassion for how your mind actually works.',
                  },
                  {
                    title: 'Social Navigation & Autistic Relationships',
                    body: 'Finding authentic connection that does not require masking. Communicating directly without being labeled rude. Building relationships that honor how you actually relate.',
                    note: 'Your communication style is valid. Your need for direct language, your boundaries, your differences-not flaws to fix.',
                  },
                  {
                    title: 'AuDHD: ADHD and Autism Together',
                    body: 'Some people are both. The combination creates unique strengths and tensions: intense focus paired with difficulty regulating that focus, high sensitivity plus deep pattern recognition.',
                    note: 'We honor both neurotypes and how they actually interact in your specific life.',
                  },
                  {
                    title: 'Internalized Ableism & Self-Acceptance',
                    body: 'Years of being told you are too much, not enough, or that you would be fine if you just tried harder. Shame and self-criticism become internalized until you believe the world was right about you.',
                    note: 'We challenge those messages and rebuild your relationship with your own neurodivergence. You are not broken. The world was just not built for how you work.',
                  },
                ].map((item, index) => (
                  <div key={index} className="pl-6 py-4" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h4>
                    <p className="text-warm-gray-700 mb-2">{item.body}</p>
                    <p className="text-warm-gray-600 text-sm">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: 'var(--neutral-sage-50)', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="text-warm-gray-700">
                  Looking specifically for adult ADHD support? See the dedicated{' '}
                  <Link href="/adhd" className="underline">ADHD therapy page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Intersections */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="✳️" level={2} color={colors.warmGray[900]}>
              Neurodivergent and Other Identities
            </IconHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-warm-gray-700 mb-8 text-center">
                You are not just neurodivergent. You are also everything else you are-and that
                intersection matters.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '🏳️‍🌈 Neurodivergent and LGBTQ+',
                    body: 'Autistic trans individuals. Queer ADHD folks working out identity. The real overlap between neurodivergence and gender or sexuality. We honor all of it together.',
                    href: '/lgbtq',
                    linkLabel: 'LGBTQ+ affirming therapy',
                  },
                  {
                    title: '🌍 Neurodivergent and BIPOC',
                    body: 'Navigating neurodivergence in cultural and familial contexts where ADHD and autism are not recognized, or are read as disrespect. Racism intersecting with ableism.',
                    href: '/bipoc',
                    linkLabel: 'BIPOC therapy',
                  },
                  {
                    title: '♿ Neurodivergent and Disabled',
                    body: 'Chronic illness alongside ADHD or autism. Accessibility needs. The relationship between sensory processing and pain. Your body as it is.',
                    href: '/accessibility',
                    linkLabel: 'Accessibility',
                  },
                  {
                    title: '🔗 Neurodivergent and Trauma',
                    body: 'Neurodivergent people who have experienced trauma. How masking increases trauma risk. How dysregulation looks different when your baseline is already different.',
                    href: '/grief',
                    linkLabel: 'Grief & loss support',
                  },
                ].map((item, index) => (
                  <div key={index} className="card card-tinted card-compact card-static">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-700 mb-3">{item.body}</p>
                    <Link href={item.href} className="text-sm font-semibold" style={{ color: ACCENT }}>
                      {item.linkLabel} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Accessible Care */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-base">
            <IconHeading icon="🤲" level={2} color={colors.warmGray[900]}>
              Accessible Care
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8 text-center">
                Therapy should work with your neurodivergence, not against it.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: '📱 Telehealth',
                    body: 'Sessions from your regulated space. No commute overwhelm. Camera on or off. You control your sensory environment.',
                  },
                  {
                    title: '💳 Sliding Scale',
                    body: 'What you pay is what you can actually afford right now. No proof of hardship, no shame.',
                  },
                  {
                    title: '💬 Communication Flexibility',
                    body: 'Phone calls hard? We can work by message, email check-ins, or written reflections. We use how your brain communicates best.',
                  },
                ].map((item, index) => (
                  <div key={index} className="card card-compact card-static text-center">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: 'var(--neutral-sage-50)', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">
                  Cost, logistics, or sensory access shouldn&apos;t block you from care.
                </p>
                <p className="text-warm-gray-700">
                  If accessibility is a barrier, we solve for it together. See{' '}
                  <Link href="/pricing" className="underline">pricing</Link> or{' '}
                  <Link href="/accessibility" className="underline">accessibility details</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Community Resources */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🌐" level={2} color={colors.warmGray[900]}>
              Community Resources
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                You are not alone. These are communities and resources led by neurodivergent people.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Autistic Self Advocacy Network (ASAN)',
                    body: 'Advocacy, resources, and community led by autistic people. Identity-affirming perspective on autism and neurodiversity.',
                    site: 'autisticadvocacy.org',
                  },
                  {
                    name: 'Neurodivergent Insights',
                    body: 'Clinical education on neurodivergent-affirming therapy, led by an AuDHD psychologist.',
                    site: 'neurodivergentinsights.com',
                  },
                  {
                    name: 'How to ADHD',
                    body: 'Video and article content about ADHD from an ADHD coach. Practical strategies and a large community.',
                    site: 'howtoadhd.com',
                  },
                  {
                    name: 'CHADD',
                    body: 'Long-running nonprofit for children and adults with ADHD: education, support groups, and evidence summaries.',
                    site: 'chadd.org',
                  },
                  {
                    name: 'Peer Communities',
                    body: 'r/autism, r/ADHD, r/autisticadults and similar spaces offer peer support and shared experience.',
                    site: 'reddit.com',
                  },
                  {
                    name: 'Neurodivergent Creators',
                    body: 'Creators sharing lived experience, strategies, and community. Search #ActuallyAutistic and #Neurodivergent.',
                    site: 'YouTube • TikTok',
                  },
                ].map((item, index) => (
                  <div key={index} className="card card-tinted card-compact card-static">
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.name}</h4>
                    <p className="text-warm-gray-700 text-sm mb-3">{item.body}</p>
                    <p className="text-warm-gray-600 text-xs">{item.site}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: 'var(--neutral-sage-50)', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="text-warm-gray-700">
                  <strong>These are neurodiversity-affirming spaces</strong> run by neurodivergent
                  people. Use them to learn about yourself, connect with community, and know you are
                  not alone in this.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="💙" level={2} color={colors.warmGray[900]}>
              Ready to Start?
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              A free 30-minute call is just a conversation. We&apos;ll talk about what&apos;s actually
              happening in your life right now-no diagnosis required, no judgment, and no expectation
              that you mask your way through the intake.
            </p>

            <p className="text-warm-gray-700 mb-12 text-lg leading-relaxed font-semibold" style={{ color: ACCENT }}>
              You deserve therapy that honors how your brain actually works.
            </p>

            <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
              Book Your Free Consultation
            </Link>

            <p className="text-warm-gray-600 text-sm mt-6">
              Telehealth • Sliding scale available • Sensory-informed • Affirming
            </p>
          </div>
        </section>

        {/* Why Rainuka */}
        <section className="section-padding bg-white border-t-4" style={{borderColor: 'var(--neutral-sage-900)'}}>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4" style={{color: 'var(--neutral-sage-900)'}}>
              Why Rainuka for Your Journey
            </h2>
            <p className="text-lg text-warm-gray-700 leading-relaxed">
              Autism, ADHD, dyslexia, dyspraxia-neurodivergence often masks trauma and identity questions. I provide affirming, neurotype-aware therapy that celebrates how you think.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
