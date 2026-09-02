import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Access & Sliding Scale Fees | Wonderloud Therapy',
  description:
    'Transparent sliding scale therapy fees, payment plans, pro-bono availability, and community funding resources. Cost should not be the reason you go without support.',
}

const slidingScale = [
  {
    income: 'Under $30,000/year',
    fee: '$80-$90',
    why: 'Covers overhead and keeps the practice sustainable without cutting corners on your care.',
  },
  {
    income: '$30,000-$50,000/year',
    fee: '$100-$120',
    why: 'Balanced: affordable for mid-range income, sustainable for consistent quality care.',
  },
  {
    income: '$50,000-$75,000/year',
    fee: '$130-$140',
    why: 'Fair market rate that reflects both your financial capacity and clinical expertise.',
  },
  {
    income: '$75,000+/year',
    fee: '$150 (full rate)',
    why: 'Standard rate; reflects years of training, licensure, and personalized clinical attention.',
  },
]

const communityResources = [
  {
    icon: '🏥',
    title: 'Community Health Centers (HRSA-Funded)',
    body: [
      'Federally Qualified Health Centers (FQHCs) provide therapy on a sliding scale based on income, often for $0-$40 per session. They were founded to serve low-income and uninsured people.',
      'In 2023, over 31 million people relied on HRSA-funded health centers. They accept everyone, insured or not.',
    ],
    link: { href: 'https://findahealthcenter.hrsa.gov/', label: 'findahealthcenter.hrsa.gov' },
    linkIntro: 'How to find one: search',
    linkOutro: 'or call 211 (United Way\u2019s resource line) for local clinics.',
  },
  {
    icon: '📋',
    title: 'Medicaid',
    body: [
      'If your income is below roughly 138% of the federal poverty line, you may qualify for free or low-cost Medicaid coverage that includes mental health services.',
    ],
    link: { href: 'https://www.healthcare.gov', label: 'healthcare.gov' },
    linkIntro: 'How to apply: go to',
    linkOutro: 'or your state\u2019s Medicaid office. There is no application deadline \u2014 you can apply anytime.',
  },
  {
    icon: '🤰',
    title: 'National Maternal Mental Health Hotline',
    body: [
      'If you are pregnant or a new parent (up to one year postpartum), call or text 1-833-852-6262. Free, confidential support 24/7 in 60+ languages.',
      'They can connect you to local resources, support groups, and therapy options.',
    ],
    link: null,
    linkIntro: '',
    linkOutro: '',
  },
  {
    icon: '👥',
    title: 'Free Peer Support Groups',
    body: [
      'Organizations like NAMI, AA, NA, SMART Recovery, Postpartum Support International, and GriefShare offer free peer-led support groups in person and online.',
      'Not a replacement for therapy, but a powerful supplement \u2014 especially for grief, substance use, postpartum anxiety, and neurodivergence.',
    ],
    link: null,
    linkIntro: '',
    linkOutro: '',
  },
  {
    icon: '🆘',
    title: '988 Suicide & Crisis Lifeline',
    body: [
      'Call or text 988 anytime (24/7) if you are in crisis or having suicidal thoughts. Free, confidential, trained counselors. Also available via web chat.',
    ],
    link: null,
    linkIntro: '',
    linkOutro: '',
  },
]

const faqs = [
  {
    q: 'Do I need to show proof of income?',
    a: 'Usually I ask for a recent pay stub, tax return, or a simple one-page statement of your household income and size. I trust clients to be honest \u2014 the goal is to find a fee you can actually afford, not to police anyone.',
  },
  {
    q: 'What if my income changes mid-treatment?',
    a: 'Tell me. If you get a raise, we can adjust your fee upward. If you lose your job or face a hardship, we can adjust downward or explore other options. This conversation is normal and expected.',
  },
  {
    q: 'Can I use my insurance with a sliding scale fee?',
    a: 'I don\u2019t currently accept insurance, so the sliding scale is what you pay out of pocket. However, I can provide a superbill at the end of the year that you can submit to your insurer for potential reimbursement. We can talk about this during our first session.',
  },
  {
    q: 'Do you accept HSA/FSA funds?',
    a: 'Yes. If you have a Health Savings Account or Flexible Spending Account, you can often use pre-tax dollars to pay for therapy. Check with your plan administrator, and I can provide any documentation needed.',
  },
  {
    q: 'What if I still can\u2019t afford it?',
    a: 'First, we explore all options: pro-bono, payment plans, reduced frequency, community health centers, Medicaid, support groups, or crisis resources. I have a responsibility to help you find some path to support, even if it is not directly with me. It is never a flat no \u2014 it is always "let\u2019s problem-solve."',
  },
]

export default function FinancialAccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="hero-section py-20"
          style={{ background: 'linear-gradient(135deg, rgba(232, 237, 229, 1) 0%, rgba(248, 250, 247, 1) 100%)' }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">Therapy Should Be Accessible</h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: colors.sage[700] }}>
              Cost shouldn&apos;t be the reason you go without support.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Clear, transparent pricing with income-based sliding scale options, payment plans, and pro-bono slots &mdash;
              so quality therapy fits your actual budget.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="max-w-3xl mx-auto">
              <div className="p-6 rounded bg-cream-100" style={{ borderLeft: `4px solid ${colors.accent}` }}>
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  The Reality: Cost Is the #1 Barrier
                </h2>
                <p className="text-warm-gray-700 mb-3">
                  In 2023, the most common reason people didn&apos;t access mental health care they needed was{' '}
                  <strong>cost</strong>. 32% of adults who needed therapy didn&apos;t get it because they
                  couldn&apos;t afford it.
                </p>
                <p className="text-warm-gray-700">
                  Even with insurance, therapy copays add up. Out-of-pocket rates in major cities average{' '}
                  <strong>$150&ndash;$250 per session</strong> &mdash; a real burden on an already-stretched budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Sliding Scale */}
        <section className="section-padding bg-gradient-to-b from-white to-sage-50">
          <div className="container-base">
            <IconHeading icon="💰" level={2} color={colors.warmGray[900]}>
              Sliding Scale: Transparent Pricing
            </IconHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                I offer <strong>income-based sliding scale fees</strong>. You pay what&apos;s fair for your financial
                situation &mdash; not an arbitrary &quot;reduced&quot; rate. Here&apos;s exactly how it works:
              </p>

              <div className="card card-static overflow-x-auto mb-8">
                <table className="w-full text-left">
                  <thead className="bg-sage-50">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-warm-gray-900">Household Income</th>
                      <th className="px-6 py-3 font-semibold text-warm-gray-900">Session Fee</th>
                      <th className="px-6 py-3 font-semibold text-warm-gray-900">Why This Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slidingScale.map((row, index) => (
                      <tr key={index} className="border-t border-sage-100">
                        <td className="px-6 py-4 text-warm-gray-700">{row.income}</td>
                        <td className="px-6 py-4 font-semibold text-warm-gray-900">{row.fee}</td>
                        <td className="px-6 py-4 text-sm text-warm-gray-600">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="p-6 rounded"
                style={{ backgroundColor: colors.sage[50], borderLeft: `4px solid ${colors.sage[600]}` }}
              >
                <p className="font-semibold text-warm-gray-900 mb-2">How to Ask</p>
                <p className="text-warm-gray-700">
                  During your first call or email, just say:{' '}
                  <em>
                    &quot;I&apos;m interested in therapy with you. Do you offer sliding scale fees based on
                    income?&quot;
                  </em>{' '}
                  This is completely normal. I&apos;ll ask for basic income information (usually just your annual
                  household income and family size &mdash; no need for tax returns) so we can find the right fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Payment Plans */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="📅" level={2} color={colors.warmGray[900]}>
              Payment Plan Options
            </IconHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                If a sliding scale fee still stretches your budget, we can work together on a{' '}
                <strong>structured payment plan</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    title: 'Reduced Frequency',
                    body: 'Meet every other week instead of weekly. Many clients find this works just as well, especially after the first 6\u20138 weeks.',
                    points: ['Cuts monthly cost in half', 'Still maintains continuity of care'],
                  },
                  {
                    title: 'Staggered Payment',
                    body: 'Pay half before your session and half within two weeks after. Spreads the cost without added interest.',
                    points: ['No debt accumulation', 'Works with tight cash flow'],
                  },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="card card-compact card-static"
                  >
                    <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-warm-gray-700 mb-3">{plan.body}</p>
                    <ul className="space-y-1 text-sm text-warm-gray-600">
                      {plan.points.map((point, i) => (
                        <li key={i}>
                          <span style={{ color: colors.sage[600] }} aria-hidden="true">
                            ✓
                          </span>{' '}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-warm-gray-700 bg-cream-50 border border-warm-gray-200 rounded p-6">
                <strong className="text-warm-gray-900">No shame here:</strong> I work with people in real financial
                strain. If both of these options are still tough, let&apos;s talk. The goal is to get you support, not
                to create financial stress <em>about</em> therapy.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pro-Bono */}
        <section className="section-padding bg-gradient-to-b from-white to-sage-50">
          <div className="container-base">
            <IconHeading icon="🤝" level={2} color={colors.warmGray[900]}>
              Pro-Bono &amp; Reduced-Fee Availability
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                I maintain a small number of <strong>pro-bono slots</strong> (free therapy) for clients in financial
                crisis or experiencing homelessness. These slots are limited, but they&apos;re real.
              </p>

              <div className="card card-compact card-static">
                <p className="font-semibold text-warm-gray-900 mb-3">Who qualifies for pro-bono?</p>
                <ul className="space-y-2">
                  {[
                    'Living below the federal poverty line (roughly $15,000/year individual income)',
                    'Recently lost income due to job loss, illness, or family crisis',
                    'Experiencing housing instability or homelessness',
                    'Other urgent hardship cases (evaluated individually)',
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span style={{ color: colors.sage[600] }} aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Pro-bono spots are time-limited (usually 6&ndash;12 weeks) and intended to help you stabilize, not to
                serve as permanent free therapy. After that window, we can explore sliding scale options or connect you
                with community mental health centers.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Community Resources */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🧭" level={2} color={colors.warmGray[900]}>
              Community Funding &amp; HRSA Resources
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                You may qualify for <strong>free or near-free therapy</strong> through public funding. Here&apos;s
                where to look:
              </p>

              <div className="space-y-6">
                {communityResources.map((resource, index) => (
                  <div key={index} className="card card-compact card-static">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-3">
                      <span aria-hidden="true">{resource.icon}</span> {resource.title}
                    </h3>
                    {resource.body.map((paragraph, i) => (
                      <p key={i} className="text-warm-gray-700 mb-3">
                        {paragraph}
                      </p>
                    ))}
                    {resource.link && (
                      <p className="text-warm-gray-700">
                        <strong>{resource.linkIntro}</strong>{' '}
                        <a
                          href={resource.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          style={{ color: colors.sage[700] }}
                        >
                          {resource.link.label}
                        </a>{' '}
                        {resource.linkOutro}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Personal Story */}
        <section className="section-padding bg-cream-50">
          <div className="container-base">
            <div className="max-w-3xl mx-auto">
              <IconHeading icon="❤️" level={2} color={colors.warmGray[900]}>
                Why Affordability Matters to Me
              </IconHeading>

              <div className="text-warm-gray-700 space-y-4">
                <p>
                  I didn&apos;t grow up with money. My parents were immigrants, and early therapy &mdash; which helped
                  my mom through depression and our family through grief &mdash; was a luxury I watched them stress
                  about. Years later, I watched smart, capable people I cared about skip therapy because $150 a session
                  felt impossible on a $35,000 salary.
                </p>
                <p>
                  I became a therapist to help people. That becomes meaningless if therapy is only for people with
                  comfortable incomes or good insurance.
                </p>
                <p>
                  <strong className="text-warm-gray-900">Cost shouldn&apos;t determine who gets to heal.</strong> Your
                  financial situation is information I need to know &mdash; it&apos;s not judgment. It&apos;s the basis
                  for us finding an arrangement that actually works.
                </p>
                <p className="italic text-warm-gray-600">
                  If you&apos;re hesitating because of cost, reach out. We&apos;ll figure it out together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="❓" level={2} color={colors.warmGray[900]}>
              Common Questions
            </IconHeading>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card card-compact card-static">
                  <h3 className="text-lg font-semibold text-warm-gray-900 mb-3">Q: {faq.q}</h3>
                  <p className="text-warm-gray-700 leading-relaxed">
                    <span className="font-semibold" style={{ color: colors.sage[700] }}>
                      A:{' '}
                    </span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-sage-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="🌱" level={2} color={colors.warmGray[900]}>
              Ready to Take the Next Step?
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              Let&apos;s talk about what therapy could look like for you &mdash; and what makes financial sense. No
              judgment, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
                Book a Free Consultation
              </Link>
              <Link href="/pricing" className="inline-block btn btn-outline text-lg px-8 py-3">
                See Full Pricing
              </Link>
            </div>

            <p className="text-warm-gray-600 text-sm mt-6">
              Free 30-minute consultation • Sliding scale available • No judgment
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
