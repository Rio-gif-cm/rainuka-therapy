import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export const metadata = {
  title: 'LGBTQ+ Therapy That Affirms Your Wholeness | Identity-Centered Care | Wonderloud Therapy',
  description:
    'Affirming therapy for LGBTQ+ clients: coming out, identity, relationships, family, trauma. No gatekeeping. Your identity is valid. Telehealth, sliding scale.',
}

const ACCENT = '#8c5c5b'

export default function LGBTQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - LGBTQ+: Soft plum accent for identity, pride, and affirmation */}
        <section
          className="hero-section py-20"
          style={{ background: 'linear-gradient(135deg, rgba(246, 242, 249, 1) 0%, rgba(248, 250, 247, 1) 100%)' }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              LGBTQ+ Therapy That Affirms Your Wholeness
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: ACCENT }}>
              Your identity is valid. Therapy that affirms who you are, not fixes you.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Coming out. Identity questions. Relationships. Family strain. Religious trauma.
              Gender-affirming care. You deserve a therapist who starts from the assumption that
              you are exactly who you say you are.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
            <p className="text-warm-gray-600 text-sm mt-6">
              Your first session is just a conversation. No diagnosis required. We start where you are.
            </p>
          </div>
        </section>

        {/* What Affirming Means */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🏳️‍🌈" level={2} color={colors.warmGray[900]}>
              What &quot;Affirming&quot; Means in This Room
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Not tolerance. Not &quot;I&apos;m fine with it.&quot; Not a therapist who tolerates you like you&apos;re
                doing them a favor. Real affirmation of your identity, your relationships, and your lived experience—held as 
                simple fact, not as a topic up for debate or therapy to resolve.
              </p>

              <div className="p-6 rounded" style={{ backgroundColor: '#fcf6f6', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">The Core Commitment:</p>
                <p>
                  You are not here to be evaluated, diagnosed as confused, or talked out of yourself.
                  There is no &quot;but let&apos;s work on&quot; hiding underneath my affirmation. You are here to do the work you came to do—with 
                  a therapist who has already accepted the premise of your life and who celebrates who you are.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {[
                {
                  title: 'Pronouns & Identity Matter',
                  description:
                    'I use the pronouns you use. The name you use. Your identity as you describe it. No assumptions, no "but what is your birth name," no clinical labels that erase your truth.',
                  icon: '💬',
                },
                {
                  title: 'Gender-Affirming Care',
                  description:
                    'If you are pursuing HRT, surgery, or social transition, I support that fully—not as therapy to change you, but as care for your wellbeing and your autonomy. No gatekeeping. No &quot;are you sure?&quot; or &quot;let&apos;s talk about this more&quot; disguised as clinical responsibility. My job is to support your decisions about your own body and your own life.',
                  icon: '🌱',
                },
                {
                  title: 'Trauma-Informed Foundation',
                  description:
                    'Many LGBTQ+ clients carry trauma: religious rejection, conversion efforts, violence, family loss. We address that trauma directly, knowing these are not personal failures—they are the weight of living in an unsafe world.',
                  icon: '🛡️',
                },
                {
                  title: 'Intersectionality Matters',
                  description:
                    'You are not just LGBTQ+. You are also LGBTQ+ and neurodivergent, LGBTQ+ and BIPOC, LGBTQ+ and disabled, and everything else you carry. Each identity matters. Each identity affects how you move through the world. I work with the whole of who you are—not checking boxes or treating identities separately.',
                  icon: '🔗',
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
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="🧭" level={2} color={colors.warmGray[900]}>
              Paths I Walk With Clients
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                These are the journeys I work with regularly. You might recognize yourself in one—or in
                the space between several.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Coming Out (Or Not)',
                    body: 'Deciding when, how, and to whom. Managing fear, grief over relationships that might change, and families with wildly different levels of acceptance.',
                    note: 'You do not have to come out. You also do not have to stay closeted. We explore what is actually safe for you right now.',
                  },
                  {
                    title: 'Identity Exploration & Transition',
                    body: 'Figuring out your gender, your sexuality, or both. Processing late-life discovery. Moving through social, medical, or other transitions.',
                    note: 'Identity is not static. We work with who you are becoming, not who you "should" be.',
                  },
                  {
                    title: 'LGBTQ+ Relationships',
                    body: 'Same-sex and same-gender relationships. Non-monogamy and ethical non-monogamy. Polyamorous families. Building partnership models that actually work for you.',
                    note: 'Therapy that honors how you actually love, not how the dominant culture says you should.',
                  },
                  {
                    title: 'LGBTQ+ Parenting & Chosen Family',
                    body: 'Same-sex parenting. Building or navigating chosen family. Protecting your children\'s identities while they are still forming. Making family on your own terms.',
                    note: 'Your family structure is valid. We work with the family you are building.',
                  },
                  {
                    title: 'Religious Trauma & Family Estrangement',
                    body: 'Processing rejection from religious communities or families. Grieving the life and identity you were expected to have. Rebuilding a sense of belonging.',
                    note: 'This is not about convincing anyone their faith is wrong. It is about processing what you survived and building a life that fits who you actually are.',
                  },
                  {
                    title: 'Grief & Loss',
                    body: 'Loss of relationships when you came out. Grief over the identity you left behind. Loss within the LGBTQ+ community from illness or violence.',
                    note: 'Grief is real. Your losses matter. We sit with that together.',
                  },
                ].map((item, index) => (
                  <div key={index} className="pl-6 py-4" style={{ borderLeft: `4px solid ${ACCENT}` }}>
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h4>
                    <p className="text-warm-gray-700 mb-2">{item.body}</p>
                    <p className="text-warm-gray-600 text-sm">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Intersections */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="✳️" level={2} color={colors.warmGray[900]}>
              LGBTQ+ and Other Identities
            </IconHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-warm-gray-700 mb-8 text-center">
                You are probably holding more than one identity. That complexity is the whole point.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '🧠 LGBTQ+ and Neurodivergent',
                    body: 'Late-diagnosed autistic and trans. ADHD and queer identity confusion. We work with how your brain works and how your identity unfolds, together.',
                    href: '/neurodivergent',
                    linkLabel: 'Neurodivergent-affirming therapy',
                  },
                  {
                    title: '🌍 LGBTQ+ and BIPOC',
                    body: 'Navigating LGBTQ+ identity inside cultural and religious communities. Different family expectations. Racism in queer spaces. Multiple layers of belonging.',
                    href: '/bipoc',
                    linkLabel: 'BIPOC therapy',
                  },
                  {
                    title: '♿ LGBTQ+ and Disabled',
                    body: 'Chronic illness and LGBTQ+ identity. Accessibility in queer spaces. Navigating care and autonomy. Your body as it is.',
                    href: '/accessibility',
                    linkLabel: 'Accessibility',
                  },
                  {
                    title: '🤰 LGBTQ+ and Perinatal',
                    body: 'Same-sex and same-gender parenting. Fertility questions. Postpartum anxiety, identity, and family. Parenting in a world that keeps missing you.',
                    href: '/perinatal',
                    linkLabel: 'Perinatal therapy',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-warm-gray-50 rounded-lg p-6 border border-warm-gray-200">
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
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="🤲" level={2} color={colors.warmGray[900]}>
              Accessible Care
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8 text-center">
                Therapy should work with your life, not against it.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: '📱 Telehealth',
                    body: 'Sessions from home, where you are comfortable. You control your environment. Camera on or off—negotiable.',
                  },
                  {
                    title: '💳 Sliding Scale',
                    body: 'What you pay depends on what you can afford right now—not documentation or proof of hardship.',
                  },
                  {
                    title: '🔒 Confidential & Secure',
                    body: 'Your privacy is non-negotiable. Everything stays between us, within the limits defined by law. HIPAA-compliant.',
                  },
                ].map((item, index) => (
                  <div key={index} className="card card-compact card-static text-center">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#fcf6f6', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">
                  Cost should never be the barrier to care.
                </p>
                <p className="text-warm-gray-700">
                  If you want to work together and cost is a concern, let&apos;s find a way. We&apos;re
                  problem-solvers here. See <Link href="/pricing" className="underline">pricing</Link> or
                  just ask on the call.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="💜" level={2} color={colors.warmGray[900]}>
              Ready to Start?
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              A free 30-minute call is just a conversation. We&apos;ll talk about what&apos;s actually
              happening in your life right now—no diagnosis required, no justifying yourself, no
              explaining the basics of who you are before we can begin.
            </p>

            <p className="text-warm-gray-700 mb-12 text-lg leading-relaxed font-semibold" style={{ color: ACCENT }}>
              You deserve therapy that celebrates who you are.
            </p>

            <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
              Book Your Free Consultation
            </Link>

            <p className="text-warm-gray-600 text-sm mt-6">
              Telehealth • Sliding scale available • Confidential & secure
            </p>
          </div>
        </section>

        {/* Why Rainuka */}
        <section className="section-padding bg-white border-t-4" style={{borderColor: '#c85a9f'}}>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4" style={{color: '#c85a9f'}}>
              Why Rainuka for Your Journey
            </h2>
            <p className="text-lg text-warm-gray-700 leading-relaxed">
              Coming out, transition, chosen family, discrimination—these are real experiences that shape your nervous system. I provide affirmative, trauma-informed care grounded in queer psychology.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
