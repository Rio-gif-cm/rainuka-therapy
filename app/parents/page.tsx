import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapy for Parents | Overwhelm, Anxiety, Kids Stress',
  description: 'Parenting feels impossible. Therapy helps you find your footing when kids anxiety, your own anxiety, or the chaos feels overwhelming. Support for new parents, adoptive parents, parents of neurodivergent kids.',
}

const parentsFAQ = [
  {
    q: 'Is it normal to feel anxious about my kids all the time?',
    a: 'Some worry is built into caregiving-your nervous system is doing its job. It becomes a problem when the worry runs constantly, disrupts sleep, drives checking behaviors, or makes it hard to let your child take normal age-appropriate risks. That version is treatable, and it responds well to therapy.',
  },
  {
    q: 'I love my kids but I resent my life right now. Does that make me a bad parent?',
    a: 'No. Resentment is usually a signal of unmet needs and depleted capacity-not a verdict on your love. Parents who can name resentment out loud tend to act on it less. In therapy we look at what is actually draining you rather than treating the feeling itself as the failure.',
  },
  {
    q: 'What is caregiver burnout, exactly?',
    a: 'Burnout is chronic depletion from sustained caregiving demand: emotional exhaustion, detachment or numbness toward people you love, irritability with a short fuse, and a sense that nothing you do is enough. It is not a character flaw and it does not resolve through willpower-it resolves through restored capacity, boundaries, and support.',
  },
  {
    q: "I'm caring for my kids and my aging parents. Is there help for that?",
    a: 'Yes. The "sandwich generation" carries two caregiving loads at once, often while working. Therapy focuses on triage, realistic boundary-setting, grief for the parent you are losing while still parenting your children, and dividing labor with siblings or a partner.',
  },
  {
    q: 'Do I have to bring my child to therapy?',
    a: 'No. This work is for you as the parent or caregiver. Change in a parent\u2019s regulation and boundaries reliably changes the household. If your child needs their own care, I can refer you to a child or family specialist.',
  },
  {
    q: 'I yelled at my kid and I feel awful. Can therapy help with that?',
    a: 'Yes-and rupture is not the end of the story. Research on parent-child attachment is clear that repair matters more than perfection. We work on lowering the reactivity that leads to the blow-up and on repairing well afterward, without collapsing into shame.',
  },
  {
    q: 'How do I set boundaries without feeling selfish?',
    a: 'Most caregivers are taught that boundaries and love are opposites. They are not. A boundary is a statement about what you will do, not a demand that someone else change. We practice concrete scripts-for kids, partners, in-laws, and the relative who keeps commenting on your parenting.',
  },
  {
    q: 'Is guilt ever useful?',
    a: 'Briefly. Guilt says "I did something that does not match my values," and it can prompt repair. Shame says "I am the problem," and it just paralyzes. A lot of parenting work is separating those two so you can act on the first and stop obeying the second.',
  },
  {
    q: 'I am a single parent with no backup. Will therapy just tell me to rest more?',
    a: 'No. Advice that assumes a partner, money, or free time is useless. We work with the actual constraints you have-including the ones you cannot change-and find the leverage that exists inside them.',
  },
  {
    q: 'How long does this take?',
    a: 'Many parents feel meaningful relief within 8\u201312 sessions, particularly around anxiety and boundary-setting. Deeper work-burnout recovery, or unlearning how you were parented-often runs longer. We reassess together as we go.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: parentsFAQ.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function ParentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, null, 2),
        }}
      />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero - Parents: Warm amber for steadiness, care, and being held */}
        <section
          className="hero-section py-20"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 251, 235, 1) 0%, rgba(248, 250, 247, 1) 100%)',
          }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Therapy for Parents &amp; Caregivers
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: 'var(--primary-bronze-900)' }}>
              You are the person everyone leans on. Who do you lean on?
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Parenting anxiety that never switches off. Burnout you cannot admit to. Guilt for
              needing anything at all. This is therapy for the caregiver-not the person being cared
              for.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </section>

        {/* Who this is for */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🫂" level={2} color={colors.warmGray[900]}>
              If Any of This Sounds Familiar...
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'You lie awake running worst-case scenarios about your child',
                'You snap over small things, then spend hours feeling terrible about it',
                'You cannot remember the last time you did something purely for yourself',
                'You are caring for children and aging parents at the same time',
                'You feel numb or detached from people you genuinely love',
                'You say yes to everything and quietly resent all of it',
                'You are single-parenting with no backup and no margin',
                'You are parenting a neurodivergent or high-needs child and running on fumes',
              ].map((item, index) => (
                <IconListItem key={index} icon="✓" color={colors.sage[600]}>
                  {item}
                </IconListItem>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Parenting anxiety normalization */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🌙" level={2} color={colors.warmGray[900]}>
              Parenting Anxiety: What&rsquo;s Normal, What&rsquo;s Not
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Anxiety is not evidence that you are failing at this. Caregiving recruits the exact
                brain systems built to scan for threat-which is why worry intensifies the moment
                someone becomes your responsibility. The question is never{' '}
                <em>&ldquo;do I worry?&rdquo;</em> It is{' '}
                <em>&ldquo;is the worry still working for me?&rdquo;</em>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div
                  className="card card-callout card-compact card-static"
                  style={{ borderLeftColor: 'var(--neutral-sage-700)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-3" style={{ color: 'var(--neutral-sage-900)' }}>
                    Expected caregiver worry
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Spikes around real events (illness, a new school, a hard milestone)</li>
                    <li>• Settles once the situation resolves</li>
                    <li>• Leads to useful action-a call, a plan, a conversation</li>
                    <li>• Still leaves room for enjoying your child</li>
                    <li>• Lets them take age-appropriate risks</li>
                  </ul>
                </div>

                <div
                  className="card card-callout card-compact card-static"
                  style={{ borderLeftColor: 'var(--secondary-sand-900)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-3" style={{ color: 'var(--primary-bronze-900)' }}>
                    Anxiety worth treating
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Runs constantly, with or without a trigger</li>
                    <li>• Wakes you or keeps you from sleeping</li>
                    <li>• Drives checking, googling, or repeated reassurance-seeking</li>
                    <li>• Shows up physically-chest tightness, nausea, jaw clenching</li>
                    <li>• Makes you restrict their world to manage your own fear</li>
                  </ul>
                </div>
              </div>

              <div
                className="card card-callout card-compact card-static mt-8"
                style={{ borderLeftColor: 'var(--secondary-sand-600)' }}
              >
                <p className="font-semibold text-warm-gray-900 mb-2" style={{ color: 'var(--primary-bronze-900)' }}>
                  The intrusive thoughts nobody warns you about
                </p>
                <p className="text-warm-gray-700 mb-3">
                  Sudden, graphic, unwanted images of something terrible happening to your child-or
                  of you somehow causing harm. Parents almost never say these out loud, which is
                  precisely why they feel so damning.
                </p>
                <p className="text-warm-gray-700">
                  They are extremely common, they are a recognized feature of perinatal and
                  parenting anxiety, and they are <strong>not</strong> desires or predictions. The
                  distress they cause is itself the evidence they run against your values. They
                  respond well to treatment-and they lose most of their power the moment they are
                  spoken to someone who is not shocked by them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Caregiver burnout */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🔋" level={2} color={colors.warmGray[900]}>
              Caregiver Burnout: The Slow Kind of Empty
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Burnout rarely announces itself. It accumulates-through years of being the person
                who remembers everything, absorbs everyone&rsquo;s feelings, and is never fully off
                duty. Then one day you notice you feel nothing much at all.
              </p>

              <div className="space-y-4">
                <div
                  className="bg-gradient-to-r from-honey-50 to-white p-6 rounded-lg border-l-4"
                  style={{ borderLeftColor: 'var(--secondary-sand-700)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-2">1. Emotional exhaustion</p>
                  <p className="text-sm text-warm-gray-700">
                    Sleep does not touch it. You are depleted before the day starts, and the demands
                    that used to feel manageable now feel like too much.
                  </p>
                </div>

                <div
                  className="bg-gradient-to-r from-dusk-50 to-white p-6 rounded-lg border-l-4"
                  style={{ borderLeftColor: 'var(--neutral-sage-700)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    2. Detachment &amp; depersonalization
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Going through the motions. Watching yourself parent from behind glass. This
                    numbness is protective-it is your system rationing what is left-but it costs you
                    the good moments along with the hard ones.
                  </p>
                </div>

                <div
                  className="bg-gradient-to-r from-blush-50 to-white p-6 rounded-lg border-l-4"
                  style={{ borderLeftColor: 'var(--secondary-sand-700)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    3. Reduced sense of accomplishment
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Nothing feels like enough. You did eleven things today and can only see the
                    twelfth. Caregiving is invisible labor with no completion signal, so the brain
                    never gets its &ldquo;done&rdquo; marker.
                  </p>
                </div>

                <div
                  className="bg-gradient-to-r from-burgundy-50 to-white p-6 rounded-lg border-l-4"
                  style={{ borderLeftColor: 'var(--neutral-sage-700)' }}
                >
                  <p className="font-semibold text-warm-gray-900 mb-2">4. Irritability &amp; a short fuse</p>
                  <p className="text-sm text-warm-gray-700">
                    Snapping at the people you most want to be gentle with. Not a character defect-a
                    depleted nervous system with no buffer left between stimulus and response.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-warm-gray-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-3">What actually helps</p>
                <ul className="space-y-2 text-sm text-warm-gray-700">
                  <li>
                    • <strong>Reduce the load, not just cope with it.</strong> Most burnout advice
                    optimizes your tolerance for an unsustainable demand. We look at the demand.
                  </li>
                  <li>
                    • <strong>Recovery periods that are real.</strong> Twenty genuinely off-duty
                    minutes beat three hours of &ldquo;rest&rdquo; spent monitoring everyone.
                  </li>
                  <li>
                    • <strong>Redistribute invisible labor.</strong> Naming the mental load out loud
                    is often the first time a partner sees it exists.
                  </li>
                  <li>
                    • <strong>Rebuild an identity outside caregiving.</strong> Not a luxury-a
                    protective factor with good evidence behind it.
                  </li>
                  <li>
                    • <strong>Screen for depression.</strong> Burnout and depression overlap heavily
                    and are treated differently. It matters which one you are carrying.
                  </li>
                </ul>
              </div>

              <div
                className="mt-6 p-6 bg-alert-50 rounded-lg border-l-4"
                style={{ borderLeftColor: 'var(--secondary-sand-900)' }}
              >
                <p className="font-semibold text-warm-gray-900 mb-2" style={{ color: 'var(--primary-bronze-900)' }}>
                  Please reach out sooner if
                </p>
                <p className="text-sm text-warm-gray-700">
                  You are having thoughts of harming yourself or your child, you feel unable to keep
                  everyone safe, you are using alcohol or substances to get through the day, or the
                  numbness has become total. These are signs of load exceeding capacity-not of being
                  a bad parent-and they need support quickly, not eventually. In the US you can call
                  or text <strong>988</strong> at any hour.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Guilt reduction */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🪶" level={2} color={colors.warmGray[900]}>
              Guilt: Putting It Down Without Giving Up
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Parental guilt is close to universal, and it is unusually sticky because it
                impersonates conscientiousness. It feels like proof that you care. Mostly it just
                makes you a worse-regulated version of the parent you already are.
              </p>

              <div className="card card-callout card-compact card-static" style={{ borderLeftColor: 'var(--neutral-sage-700)' }}>
                <p className="font-semibold text-warm-gray-900 mb-4" style={{ color: 'var(--neutral-sage-900)' }}>
                  Guilt vs. shame - the distinction that changes everything
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-warm-gray-800 mb-1">Guilt</p>
                    <p className="text-sm">
                      &ldquo;I did something that does not match my values.&rdquo; Points at a
                      behavior. Motivates repair. Time-limited and, in small doses, useful.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-warm-gray-800 mb-1">Shame</p>
                    <p className="text-sm">
                      &ldquo;I am fundamentally a bad parent.&rdquo; Points at your self. Motivates
                      hiding, defensiveness, and withdrawal. Predicts worse outcomes for both you and
                      your child.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="card card-compact card-static">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    The &ldquo;good enough&rdquo; standard is a real one
                  </p>
                  <p className="text-sm">
                    Donald Winnicott&rsquo;s term, and it is not a consolation prize. Children
                    develop resilience through <em>manageable</em> disappointment followed by repair.
                    A parent who never misattunes gives a child no practice at recovering. Attachment
                    research consistently finds that secure attachment does not require constant
                    attunement-it requires reliable repair.
                  </p>
                </div>

                <div className="card card-compact card-static">
                  <p className="font-semibold text-warm-gray-900 mb-2">Rupture and repair</p>
                  <p className="text-sm">
                    You will lose your temper. What your child encodes is what happens next. A real
                    repair sounds like: <em>&ldquo;I yelled. That was mine, not yours. I was
                    overwhelmed and I did not handle it well. I&rsquo;m sorry.&rdquo;</em> No
                    justification, no demand that they comfort you. Done consistently, this teaches
                    accountability better than never faltering ever could.
                  </p>
                </div>

                <div className="card card-compact card-static">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    Guilt about things you did not choose
                  </p>
                  <p className="text-sm">
                    Working because you have to. A birth that went differently than planned. A
                    divorce. Limited money, limited time, limited help. Guilt attaches itself to
                    constraint as readily as to choice-and that version deserves grieving, not
                    penance.
                  </p>
                </div>

                <div className="card card-compact card-static">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    Breaking cycles is its own kind of tired
                  </p>
                  <p className="text-sm">
                    If you are parenting differently than you were parented, you are doing two jobs
                    at once: raising your child and re-deciding, in real time, every reflex you
                    inherited. That is genuinely harder. The exhaustion is not weakness-it is the
                    cost of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Boundary setting */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🚪" level={2} color={colors.warmGray[900]}>
              Boundaries: Concrete Scripts, Not Vague Advice
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                A boundary is a statement about what <strong>you</strong> will do-not a demand that
                someone else change, and not a punishment. Caregivers often learn boundaries as
                rejection. They are closer to maintenance: they make continued care possible.
              </p>

              <div className="space-y-4">
                <div
                  className="bg-gradient-to-br from-honey-50 to-honey-100 p-6 rounded-lg"
                >
                  <p className="font-semibold text-warm-gray-900 mb-2">With your children</p>
                  <p className="text-sm text-warm-gray-700 mb-3">
                    <em>&ldquo;I&rsquo;m not available right now. I will be at 4:00, and then
                    I&rsquo;m all yours.&rdquo;</em>
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Children can tolerate a clear no far better than an anxious, resentful yes. What
                    destabilizes them is unpredictability-not limits.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blush-50 to-blush-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">With a partner</p>
                  <p className="text-sm text-warm-gray-700 mb-3">
                    <em>&ldquo;I need you to own bedtime three nights a week-not help with it, own
                    it. That includes remembering it is yours.&rdquo;</em>
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Delegating tasks while keeping the mental load is not a redistribution. Transfer
                    the whole thing: noticing, planning, and executing.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-dusk-50 to-dusk-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    With your own parents &amp; in-laws
                  </p>
                  <p className="text-sm text-warm-gray-700 mb-3">
                    <em>&ldquo;We&rsquo;ve decided how we&rsquo;re handling this. I&rsquo;m not
                    looking for input on it.&rdquo;</em>
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    You are not obligated to justify a parenting decision to someone who disagrees.
                    Repeat the same sentence rather than escalating the argument.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    With work, school, and everyone else
                  </p>
                  <p className="text-sm text-warm-gray-700 mb-3">
                    <em>&ldquo;I can&rsquo;t take that on this term.&rdquo;</em> Full sentence. No
                    appended excuse.
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Over-explaining invites negotiation. A brief, warm, unelaborated no is harder to
                    argue with than a detailed one.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-burgundy-50 to-white p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">
                    With yourself (the hardest one)
                  </p>
                  <p className="text-sm text-warm-gray-700">
                    Putting the phone down. Ending the 1 a.m. symptom search. Not re-litigating a
                    conversation from three days ago for the ninth time. Internal boundaries are
                    boundaries too, and they are usually the ones caregivers never think to set.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-warm-gray-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-3">
                  What to expect when you start
                </p>
                <p className="text-warm-gray-700 mb-3">
                  Pushback is not proof you got it wrong. People accustomed to unlimited access will
                  test a new limit-that is a predictable phase, not a verdict. Hold it kindly and
                  consistently and it usually settles within a few weeks.
                </p>
                <p className="text-warm-gray-700">
                  The guilt spike right after setting a boundary is also normal. It is old
                  conditioning firing, not new information. It fades with repetition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Caregiver FAQ */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              Caregiver Questions
            </h2>

            <div className="space-y-4">
              {parentsFAQ.map((faq, index) => (
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
        </section>

        <SectionDivider margin="3rem" />

        {/* Testimonial */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <div
              className="bg-gradient-to-br from-honey-50 to-honey-50 p-8 rounded-lg border-l-4"
              style={{ borderLeftColor: 'var(--secondary-sand-700)' }}
            >
              <p className="text-lg text-warm-gray-700 italic mb-6 leading-relaxed">
                &ldquo;I came in convinced I needed better time management. What I actually needed
                was permission to admit I was empty. I had two kids under six and my mother two
                towns over, and I had not had an hour to myself in about four years. We did not fix
                my schedule-we changed what I was willing to carry. I still get overwhelmed. But I
                do not hate myself for it anymore, and I say no now without writing a paragraph
                about why.&rdquo;
              </p>
              <p className="font-semibold text-warm-gray-900" style={{ color: 'var(--primary-bronze-900)' }}>
                - Priya, parent of two, sandwich-generation caregiver
              </p>
              <p className="text-sm text-warm-gray-600 mt-2">
                After 14 sessions focused on burnout recovery and boundary-setting
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* How I work */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How I Work With Parents &amp; Caregivers
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🚫</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                    No Parenting Advice You Did Not Ask For
                  </h3>
                  <p className="text-warm-gray-600">
                    You are drowning in parenting advice already. This is not another source of it.
                    We work on your capacity, your regulation, and your boundaries-your parenting
                    decisions stay yours.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                    Constraints Taken Seriously
                  </h3>
                  <p className="text-warm-gray-600">
                    Single parenting, shift work, no childcare, no money for a sitter, a
                    high-needs child. Strategies that assume resources you do not have are worse than
                    useless. We build inside your actual life.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🤲</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                    Shame-Aware and Unshockable
                  </h3>
                  <p className="text-warm-gray-600">
                    The resentment, the intrusive thoughts, the fantasy of driving past the exit and
                    not coming back-you can say all of it here. Naming it is what drains it.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🧭</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                    Practical Tools, Not Just Insight
                  </h3>
                  <p className="text-warm-gray-600">
                    Regulation skills you can use mid-meltdown. Scripts you can actually say out
                    loud. Repair language for after a hard moment. Insight matters, but you need
                    things that work on a Tuesday at 6 p.m.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🌿</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">
                    Trauma-Informed About Your Own Childhood
                  </h3>
                  <p className="text-warm-gray-600">
                    Parenting reliably surfaces how you were parented. If your child&rsquo;s age is
                    activating something old, that is worth attending to-gently, at your pace, and
                    only when you want to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Related pages + CTA */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8">
              You Do Not Have to Be in Crisis to Deserve Support
            </h2>

            <div className="bg-honey-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-warm-gray-700 mb-4">
                <strong>The most common thing parents tell me</strong> is that they waited because
                someone else always needed it more.
              </p>
              <p className="text-warm-gray-700">
                Depleted is reason enough. A free 30-minute consultation costs you nothing and
                commits you to nothing.
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link href="/perinatal" className="text-burgundy-600 underline">
                Perinatal Mental Health
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/adhd" className="text-burgundy-600 underline">
                Adult ADHD
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/couples" className="text-burgundy-600 underline">
                Couples Therapy
              </Link>
              <span className="text-warm-gray-300">•</span>
              <Link href="/back-to-school" className="text-burgundy-600 underline">
                Back-to-School Anxiety
              </Link>
            </div>

            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Why Rainuka */}
        <section className="section-padding bg-white border-t-4" style={{borderColor: 'var(--neutral-sage-700)'}}>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4" style={{color: 'var(--neutral-sage-700)'}}>
              Why Rainuka for Your Journey
            </h2>
            <p className="text-lg text-warm-gray-700 leading-relaxed">
              Parenting resurrects your own attachment wounds. I help you break cycles, manage overwhelm, and build secure attachment with your kids-while tending to your nervous system.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
