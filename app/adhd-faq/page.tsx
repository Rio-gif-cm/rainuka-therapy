import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'

interface FAQItem {
  q: string
  a: string
}

const diagnosisFAQ: FAQItem[] = [
  {
    q: 'Can I really have ADHD if I made it to adulthood without anyone noticing?',
    a: 'Yes, and it is extremely common-particularly for women, for people who were academically capable, and for anyone whose presentation was primarily inattentive rather than hyperactive. Intelligence and high effort mask ADHD very effectively until demands outgrow the compensation. That is why so many diagnoses land in the 30s and 40s, often when a promotion, a baby, or a burnout removes the scaffolding.',
  },
  {
    q: 'Do you diagnose ADHD?',
    a: 'As a licensed therapist I do not conduct formal psychological testing or prescribe medication. What I can do is help you recognize patterns, decide whether pursuing an evaluation makes sense for you, and connect you with a psychologist or psychiatrist who does assessments. Then I work with you on everything that comes after.',
  },
  {
    q: 'Do I need a formal diagnosis to work on this?',
    a: 'No. Plenty of people benefit from ADHD-informed therapy while they are still deciding whether to pursue an evaluation-or after deciding not to. A diagnosis matters for medication and formal accommodations. It is not a prerequisite for understanding yourself.',
  },
  {
    q: 'Why do I feel grief about being diagnosed? Should I not feel relieved?',
    a: 'Most people feel both, and the grief surprises them. Relief that there is an explanation. Grief for the years spent believing you were lazy, careless, or not trying hard enough-and for what might have been different with earlier support. Both are legitimate. Neither cancels the other, and the grief is a real part of the process rather than ingratitude.',
  },
  {
    q: 'My symptoms got dramatically worse recently. Did I develop ADHD as an adult?',
    a: 'ADHD is neurodevelopmental-it does not begin in adulthood. What changes is the demand. New parenthood, perimenopause, a role with less structure, grief, or losing a partner who was quietly holding your systems together can all unmask symptoms that were always present but managed. Hormonal shifts in particular have a well-documented effect on ADHD symptoms.',
  },
]

const treatmentFAQ: FAQItem[] = [
  {
    q: 'I take medication. What would therapy add?',
    a: 'Medication generally improves attention regulation. It does not teach you systems, undo twenty years of internalized shame, repair relationships strained by unreliability, or help you decide what you actually want. Those are therapy. Most people do best with both, and each works better alongside the other.',
  },
  {
    q: 'What does ADHD therapy actually involve?',
    a: 'Typically: understanding how your specific brain works, building external systems that fit it rather than fighting it, unpacking the shame layer, addressing anxiety or depression that developed on top of the ADHD, and working on emotional regulation and rejection sensitivity. It is practical and it is also deeper than productivity coaching.',
  },
  {
    q: 'Will you just tell me to use a planner?',
    a: 'No. You have tried the planners. Standard organizational advice is built for brains that already have working executive function, which is why it fails and then leaves you feeling worse. We build systems around low activation energy, external accountability, and reduced friction-and we accept that any system you use will eventually need replacing, which is normal rather than failure.',
  },
  {
    q: 'What is executive dysfunction? It sounds like an excuse.',
    a: 'Executive function is the set of mental processes handling initiation, planning, working memory, task-switching, and self-monitoring. In ADHD these are measurably impaired, which is why you can genuinely want to do something, know exactly how, and still be unable to start. Understanding this is not permission to stop trying-it just directs the effort somewhere it can actually work.',
  },
  {
    q: 'Why can I hyperfocus for nine hours on one thing and not answer a two-line email?',
    a: 'ADHD is better described as dysregulated attention than absent attention. Attention gets allocated by interest, novelty, challenge, and urgency rather than by importance. That is why the same brain produces both hyperfocus and complete paralysis-and why "you can focus when you want to" fundamentally misreads the mechanism.',
  },
  {
    q: 'What is rejection sensitive dysphoria?',
    a: 'An intense, disproportionate emotional response to perceived rejection, criticism, or failure-often physical and overwhelming, arriving faster than thought. It is not a formal DSM diagnosis but it is very widely reported by people with ADHD, and it makes sense given a lifetime of correction. It responds well to therapy that combines emotional regulation skills with the shame work underneath.',
  },
]

const dailyLifeFAQ: FAQItem[] = [
  {
    q: 'Why is my house a disaster when I care so much about it being clean?',
    a: 'Caring is not the bottleneck. Task initiation, sequencing, and object permanence are. "Clean the kitchen" is not one task-it is roughly forty, and ADHD brains struggle to auto-decompose it. This is also why visible storage tends to beat tidy closed cupboards: out of sight is genuinely out of mind.',
  },
  {
    q: 'Is time blindness a real thing?',
    a: 'Yes. Difficulty perceiving the passage of time and estimating duration is a core, well-documented feature of ADHD. It is why you are late while leaving early, why "five more minutes" becomes ninety, and why deadlines feel abstract until they are suddenly on top of you. External time cues-visible timers, alarms, body-doubling-help far more than trying harder to feel time.',
  },
  {
    q: 'My partner says I do not listen. I am trying. What is happening?',
    a: 'Working memory limits mean information can be genuinely heard and then not retained. Divided attention makes it worse. This is one of the most relationship-corrosive ADHD symptoms because it reads as indifference. Naming the mechanism, plus concrete strategies-capturing things in writing immediately, single-tasking conversations-usually shifts it considerably. Sometimes couples sessions help.',
  },
  {
    q: 'I have ADHD and so does my kid. Where do I even start?',
    a: 'Parenting with ADHD while parenting a child with ADHD is a genuinely harder job, and it doubles the shame load-your own, plus guilt about what you passed on. You did not choose your genes. Practically, the household usually needs systems that work for two dysregulated executive-function profiles rather than one, and you need support that is not just about your child.',
  },
  {
    q: 'Do I have to tell my employer?',
    a: 'That is entirely your call and there are real tradeoffs. Formal accommodations under the ADA require disclosure; many useful adjustments-written follow-ups, deadline structure, quieter space-can often be requested without naming a diagnosis. We can think through your specific workplace before you decide anything.',
  },
  {
    q: 'Am I actually ADHD, or is this anxiety, depression, or trauma?',
    a: 'It can be several at once, and they overlap substantially-which is exactly why misdiagnosis is common, especially in women who get treated for anxiety or depression for years first. The distinctions matter for treatment, so a proper evaluation is worth it. In the meantime, the coping and shame work is useful regardless of the final label.',
  },
]

const allFAQ = [...diagnosisFAQ, ...treatmentFAQ, ...dailyLifeFAQ]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFAQ.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export const metadata = {
  title: 'Adult ADHD FAQ - Late Diagnosis, Therapy & Daily Life | Wonderloud Therapy',
  description: 'ADHD FAQ: late diagnosis, executive dysfunction, rejection sensitivity, medication vs therapy, time blindness, work accommodations. Rainuka Oberoi, LCSW.',
  openGraph: {
    title: 'Adult ADHD FAQ | Wonderloud Therapy',
    description: 'Late ADHD diagnosis, executive dysfunction, RSD, and what therapy adds to medication-answered plainly.',
    type: 'website',
  },
}

function FAQSection({ title, items }: { title: string; items: FAQItem[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">{title}</h2>
      <div className="space-y-4">
        {items.map((faq, index) => (
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
  )
}

export default function ADHDFAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, null, 2),
        }}
      />

      <main className="flex-grow">
        {/* Hero - matches /adhd clear sky blue */}
        <section
          className="hero-section py-20"
          style={{
            background:
              'linear-gradient(135deg, rgba(240, 249, 255, 1) 0%, rgba(248, 250, 247, 1) 100%)',
          }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Adult ADHD: Questions &amp; Answers
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              Late diagnosis, executive dysfunction, medication, shame, and everything nobody
              explained to you.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Straight answers, neurodivergent-affirming, no productivity lectures.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <FAQSection title="Diagnosis &amp; Late Recognition" items={diagnosisFAQ} />
            <FAQSection title="Treatment &amp; Therapy" items={treatmentFAQ} />
            <FAQSection title="Daily Life, Work &amp; Relationships" items={dailyLifeFAQ} />

            <div className="card card-tinted card-static text-center">
              <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-warm-gray-600 mb-6">
                The free 30-minute consultation exists exactly for this. No commitment, no
                assessment, no pressure-just a conversation about whether this is a fit.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/adhd" className="inline-block btn btn-primary">
                  ADHD Therapy
                </Link>
                <Link href="/booking" className="inline-block btn btn-primary">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🔗" level={2} color={colors.warmGray[900]}>
              Related Pages
            </IconHeading>
            <div className="flex gap-4 flex-wrap">
              <Link href="/adhd" className="text-sage-600 underline">
                ADHD Therapy for Adults
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/parents" className="text-sage-600 underline">
                Parents &amp; Caregivers
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/faq" className="text-sage-600 underline">
                General FAQ
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/pricing" className="text-sage-600 underline">
                Pricing &amp; Insurance
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
