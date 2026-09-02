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

const pregnancyFAQ: FAQItem[] = [
  {
    q: 'Is it normal to feel anxious or ambivalent during a wanted pregnancy?',
    a: 'Yes. Wanting a pregnancy and dreading parts of it are not contradictory. Ambivalence during pregnancy is extremely common and almost never discussed, which is why it feels so isolating. It says nothing about whether you will love your child.',
  },
  {
    q: 'Can I start therapy while pregnant, or should I wait until after?',
    a: 'Starting during pregnancy is often better. Untreated anxiety and depression in pregnancy are risk factors for postpartum difficulty, and building a therapeutic relationship before the baby arrives means support is already in place when you are least able to arrange it.',
  },
  {
    q: 'I am pregnant after a loss and I cannot let myself be happy about it.',
    a: 'Pregnancy after loss is its own experience, not a resolution of the previous one. Guarded attachment, dread around scan appointments, and refusing to plan or celebrate are protective responses—your system is bracing. Therapy focuses on tolerating the uncertainty rather than forcing optimism you do not feel.',
  },
  {
    q: 'I am terrified of birth. Is that something therapy addresses?',
    a: 'Yes. Fear of childbirth ranges from ordinary nervousness to tokophobia, an intense fear that can affect decisions about pregnancy itself. If a previous birth was traumatic, that fear is a trauma response and responds to trauma-focused treatment—not to reassurance.',
  },
]

const postpartumFAQ: FAQItem[] = [
  {
    q: 'What is the difference between baby blues and postpartum depression?',
    a: 'Baby blues affects the majority of new mothers, starts within a few days of birth, involves tearfulness and mood swings, and resolves on its own within about two weeks. Postpartum depression persists beyond that, is more intense, and interferes with functioning. If you are past two weeks and it is not lifting, that is the line worth taking seriously.',
  },
  {
    q: 'Can postpartum depression start months after birth?',
    a: 'Yes. Onset can occur any time in the first year and often coincides with weaning, returning to work, or a return of menstruation. Late onset is not less real, and it frequently goes unrecognized precisely because people assume the window has closed.',
  },
  {
    q: 'I have horrifying intrusive thoughts about my baby being hurt. Am I dangerous?',
    a: 'Intrusive thoughts in the postpartum period are very common—experienced by most new parents—and are a hallmark of postpartum anxiety and OCD, not of psychosis. They are unwanted, they horrify you, and your distress about them is precisely the evidence that they run against your values. Postpartum psychosis is a different, rare, and medically urgent condition involving confusion, losing touch with reality, or thoughts that feel reasonable rather than horrifying. If you are ever unsure which you are experiencing, treat it as urgent and get seen the same day.',
  },
  {
    q: 'What is postpartum rage? Nobody mentioned that.',
    a: 'Sudden, disproportionate anger—often at a partner, sometimes at the baby, followed by intense guilt. It is a genuine and underdiscussed presentation of postpartum mood disorders, frequently masking depression or anxiety underneath. It is treatable and it is not who you are.',
  },
  {
    q: 'Do partners and non-birthing parents get postpartum depression?',
    a: 'Yes. Roughly one in ten fathers and non-birthing partners experience postpartum depression, and it is drastically underscreened. It often presents as irritability, withdrawal, or overwork rather than sadness. Adoptive parents experience it too.',
  },
  {
    q: 'I do not feel bonded to my baby. What is wrong with me?',
    a: 'Bonding is not always instantaneous, and the cultural script insisting it is causes enormous unnecessary shame. Delayed bonding is common after a difficult birth, with untreated depression, or simply on its own. It is not a permanent state and it is not a verdict on you as a parent.',
  },
]

const lossFertilityFAQ: FAQItem[] = [
  {
    q: 'I had an early miscarriage. Am I allowed to grieve this much?',
    a: 'Yes. Grief does not scale to gestational age. You are grieving a future, an identity, and a relationship that was real to you regardless of how many weeks it lasted. Early loss is also socially unrecognized—often unknown to the people around you—which makes it disenfranchised grief and genuinely harder to carry.',
  },
  {
    q: 'How long should grief after pregnancy loss last?',
    a: 'There is no schedule. Grief tends to arrive in waves rather than stages, and due dates, anniversaries, and other people\u2019s pregnancy announcements can reopen it years later. That is not regression. What matters is whether it is moving at all, and whether you have support.',
  },
  {
    q: 'Infertility treatment is consuming my life. Is therapy going to tell me to relax?',
    a: 'No—and "just relax" is both unkind and unsupported by evidence. Fertility treatment involves repeated hope-and-loss cycles, hormonal disruption, financial strain, invasive procedures, and a scheduling burden that eats everything else. Therapy addresses the actual weight of that, including decisions about when to continue and when to stop.',
  },
  {
    q: 'Everyone around me is pregnant and I cannot cope with it.',
    a: 'Announcements, baby showers, and social feeds become minefields. Avoidance is a legitimate short-term strategy, not a moral failing, and you are permitted to decline invitations. We also work on what to say to people, and on the guilt that follows feeling envy toward someone you love.',
  },
  {
    q: 'My partner and I are grieving completely differently and it is straining us.',
    a: 'Incongruent grief is one of the most common sources of conflict after loss. Different tempos and expressions of grief get misread as not caring. Understanding the difference usually reduces the conflict substantially—and couples sessions can help when it does not.',
  },
  {
    q: 'Is there support for termination for medical reasons, or ending a wanted pregnancy?',
    a: 'Yes. This is among the most isolating losses there is, because grief sits alongside a decision you made, often with little social permission to mourn. It deserves care that holds both without asking you to justify anything.',
  },
]

const treatmentFAQ: FAQItem[] = [
  {
    q: 'Can I do therapy with a baby in the room?',
    a: 'Yes. Telehealth sessions with a nursing, sleeping, or fussing baby are completely normal here. Sessions can be interrupted, resumed, or rescheduled. The alternative—waiting until childcare exists—means most parents never get support at all.',
  },
  {
    q: 'Will you report me if I say something alarming?',
    a: 'Mandatory reporting applies narrowly: active risk of harm to yourself or someone else, or suspected abuse or neglect. Intrusive thoughts, resentment, regret, and rage are none of those. Being able to speak them plainly is the treatment, and I have heard all of it before.',
  },
  {
    q: 'Can I take medication while pregnant or breastfeeding?',
    a: 'Many are considered compatible with pregnancy and lactation, and the risks of untreated depression and anxiety are real and often understated in these conversations. Prescribing is outside my scope as an LCSW, but I can help you frame the questions and refer you to a reproductive psychiatrist who specializes in exactly this.',
  },
  {
    q: 'How long does treatment for perinatal mental health issues take?',
    a: 'Postpartum anxiety and depression often improve meaningfully within 12 to 20 sessions. Birth trauma and grief work vary widely. Perinatal conditions generally respond well to treatment—the biggest predictor of a hard course is going untreated, not the severity at the start.',
  },
  {
    q: 'How do I know when it is time to reach out?',
    a: 'You do not need to hit a threshold. If it has been more than two weeks, if it is affecting sleep beyond what the baby causes, if you feel disconnected from yourself or your baby, if the anxiety is constant, or if you are simply not okay—that is enough. Sooner is better, but there is no point at which it becomes too late.',
  },
]

const allFAQ = [...pregnancyFAQ, ...postpartumFAQ, ...lossFertilityFAQ, ...treatmentFAQ]

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
  title: 'Perinatal Mental Health FAQ — Postpartum, Loss & Fertility | Wonderloud Therapy',
  description:
    'Answers on postpartum depression and anxiety, intrusive thoughts, postpartum rage, pregnancy loss grief, infertility, birth trauma, and starting therapy with a newborn.',
  openGraph: {
    title: 'Perinatal Mental Health FAQ | Wonderloud Therapy',
    description:
      'Postpartum anxiety and OCD, pregnancy loss, infertility, and birth trauma—answered honestly.',
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

export default function PerinatalFAQPage() {
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
        {/* Hero - matches /perinatal warm rose */}
        <section
          className="hero-section py-20"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 245, 243, 1) 0%, rgba(248, 250, 247, 1) 100%)',
          }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Perinatal Mental Health: Questions &amp; Answers
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: '#d97757' }}>
              The questions people are afraid to ask out loud.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Postpartum anxiety and OCD, intrusive thoughts, rage, pregnancy loss, infertility, and
              birth trauma—answered plainly, without judgment.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
          </div>
        </section>

        {/* Urgent care callout */}
        <section className="pt-8 bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <div
              className="p-6 bg-red-50 rounded-lg border-l-4"
              style={{ borderLeftColor: '#dc2626' }}
            >
              <p className="font-semibold text-warm-gray-900 mb-2" style={{ color: '#b91c1c' }}>
                If you need help right now
              </p>
              <p className="text-sm text-warm-gray-700">
                Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) or the{' '}
                <strong>National Maternal Mental Health Hotline at 1-833-TLC-MAMA
                (1-833-852-6262)</strong>, available 24/7. If you are experiencing confusion,
                hallucinations, or thoughts that feel reasonable rather than frightening, seek
                emergency care the same day—postpartum psychosis is a medical emergency and is highly
                treatable when caught quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <FAQSection title="Pregnancy &amp; Anticipating Birth" items={pregnancyFAQ} />
            <FAQSection title="Postpartum Mood &amp; Anxiety" items={postpartumFAQ} />
            <FAQSection title="Loss, Infertility &amp; Grief" items={lossFertilityFAQ} />
            <FAQSection title="Starting Therapy &amp; Treatment" items={treatmentFAQ} />

            <div className="bg-sage-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-warm-gray-600 mb-6">
                You do not need to have the right words, a diagnosis, or a tidy explanation. The free
                30-minute call is a conversation, not an assessment.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/perinatal" className="inline-block btn btn-primary">
                  Perinatal Therapy
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
              <Link href="/perinatal" className="text-sage-600 underline">
                Perinatal Mental Health Therapy
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/parents" className="text-sage-600 underline">
                Parents &amp; Caregivers
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/grief" className="text-sage-600 underline">
                Grief Support
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/faq" className="text-sage-600 underline">
                General FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
