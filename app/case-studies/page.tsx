import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Success Stories | Wonderloud Therapy',
  description:
    'Read real transformation stories from clients who worked through perinatal anxiety, ADHD, career challenges, and grief. De-identified case studies showing what lasting change looks like.',
}

const mayaSections = [
  {
    heading: 'The Presenting Concern',
    pullQuote: 'I felt like I was drowning in silence.',
    paragraphs: [
      'When Maya came to therapy, she was functioning \u2014 kids were fed, work deadlines were met, the house was orderly. But inside, her mind was moving at triple speed. Am I doing this right? Is my child safe? What if I\u2019m failing? The questions came like waves, morning to night. She couldn\u2019t sleep properly even when exhausted. At social events, she smiled and gave the right answers, but it felt like acting. Nobody knew she was struggling.',
    ],
    accent: colors.sage[600],
    background: colors.sage[50],
  },
  {
    heading: 'The Discovery',
    pullQuote: 'I realized I\u2019d been performing wellness instead of experiencing it.',
    paragraphs: [
      'In our first session, when Maya described her daily rhythm \u2014 the 5 AM wake-up with her racing mind, the constant mental checklists \u2014 something shifted. I said gently, "That\u2019s exhaustion. Your nervous system is in fight mode."',
      'She paused. "I thought that was just... motherhood." Her eyes filled with tears. We talked about what anxiety actually does to the body, especially when you\u2019re already depleted. And we talked about how invisible anxiety can be.',
    ],
    accent: colors.sage[500],
    background: '#f5f0eb',
  },
  {
    heading: 'The Approach',
    pullQuote: 'We built a toolkit for my nervous system, not just my thoughts.',
    paragraphs: [
      'We worked using somatic grounding techniques Maya could do in 90 seconds \u2014 feeling her feet on the ground, naming five things she could see. We practiced what I call "permission-giving": examining the invisible perfectionism rules her brain had generated. And we worked on vulnerability \u2014 she started texting one close friend "I\u2019m struggling today."',
    ],
    accent: colors.warmGray[300],
    background: colors.warmGray[50],
  },
  {
    heading: 'The Outcome',
    pullQuote: 'After 10 weeks, I could be human instead of just functional.',
    paragraphs: [
      'By week 8, Maya could handle difficult parenting moments without her body going into panic. The exhaustion lifted. By week 10, she played on the floor with her kids without making mental lists of everything she should be doing. Three months later, she said no to chairing a committee and felt okay with it \u2014 the old her would have said yes and resented everyone.',
    ],
    accent: colors.sage[700],
    background: colors.sage[100],
  },
]

const whyItMatters = [
  {
    title: 'Real Recognition',
    body: 'When you see yourself in someone else\u2019s story, it changes something. You realize you\u2019re not alone, and you\u2019re not broken.',
    icon: '🪞',
  },
  {
    title: 'Realistic Expectations',
    body: 'Therapy isn\u2019t magic. You can see the timeline, the approach, and the effort. You know what to expect.',
    icon: '📈',
  },
  {
    title: 'Permission to Hope',
    body: 'Real change is possible. People like you have found their way back to themselves.',
    icon: '🌱',
  },
  {
    title: 'Privacy Protected',
    body: 'All stories are de-identified and shared with written consent. Your privacy matters.',
    icon: '🔒',
  },
]

export default function CaseStudiesPage() {
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
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">Real Stories. Real Change.</h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: colors.sage[700] }}>
              Not miracles. Real, honest progress.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              These are the stories of clients who came in struggling and found their way back to themselves.
              De-identified and shared with consent, these case studies show what transformation actually looks like.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
          </div>
        </section>

        {/* Case Study 1 */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <article className="max-w-3xl mx-auto">
              <header className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-2">From Invisible to Heard</h2>
                <p className="text-xl font-semibold mb-4" style={{ color: colors.sage[700] }}>
                  Maya: Rediscovering Voice After Perinatal Anxiety
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-warm-gray-600">
                  <span>Early 40s, working parent</span>
                  <span aria-hidden="true">•</span>
                  <span>Postpartum anxiety</span>
                  <span aria-hidden="true">•</span>
                  <span>10 weeks of therapy</span>
                </div>
              </header>

              <div className="space-y-6">
                {mayaSections.map((section, index) => (
                  <div
                    key={index}
                    className="p-6 rounded"
                    style={{ backgroundColor: section.background, borderLeft: `4px solid ${section.accent}` }}
                  >
                    <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">{section.heading}</h3>
                    <p className="text-warm-gray-700 italic mb-3">&ldquo;{section.pullQuote}&rdquo;</p>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-warm-gray-700 leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="border-t border-burgundy-200 pt-6 mt-8">
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">What Maya Would Tell You</h3>
                <blockquote
                  className="text-lg italic text-warm-gray-700 pl-6 py-2"
                  style={{ borderLeft: `4px solid ${colors.sage[600]}` }}
                >
                  &ldquo;Therapy isn&apos;t about becoming a better version of the person you think you should be.
                  It&apos;s about finding your way back to yourself. The hardest step is admitting you need
                  support.&rdquo;
                </blockquote>
              </div>

              <p className="text-xs text-warm-gray-600 italic mt-6">
                This story is composite and de-identified to protect client privacy. Details, names, family structure,
                and timeline have been changed. Shared with written consent.
              </p>
            </article>
          </div>
        </section>

        <SectionDivider />

        {/* More Stories Coming */}
        <section className="section-padding bg-gradient-to-b from-white to-burgundy-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="✍️" level={2} color={colors.warmGray[900]}>
              More Stories Coming
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              Each month I share new de-identified client stories about overcoming ADHD shame, navigating career
              transitions, and rebuilding after grief.
            </p>

            <div className="card card-static max-w-2xl mx-auto">
              <p className="text-warm-gray-700 mb-6">
                Want updates when new stories are shared? Get occasional notes about resources, research, and client
                stories.
              </p>
              <Link href="/contact" className="inline-block btn btn-primary">
                Get Story Updates
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Why These Stories Matter */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="💡" level={2} color={colors.warmGray[900]}>
              Why These Stories Matter
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyItMatters.map((item, index) => (
                <div
                  key={index}
                  className="card card-compact card-static"
                >
                  <p className="text-4xl mb-3" aria-hidden="true">
                    {item.icon}
                  </p>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                  <p className="text-warm-gray-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-burgundy-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="🌿" level={2} color={colors.warmGray[900]}>
              Your Story Could Be Different Tomorrow
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              If you&apos;re struggling with anxiety, identity questions, or grief, it&apos;s worth exploring what
              therapy could offer you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
                Schedule a Consultation
              </Link>
              <Link href="/faq" className="inline-block btn btn-outline text-lg px-8 py-3">
                Learn More
              </Link>
            </div>

            <p className="text-warm-gray-600 text-sm mt-6">
              Free 30-minute consultation • Confidential • De-identified stories only
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
