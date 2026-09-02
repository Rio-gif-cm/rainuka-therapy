import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export const metadata = {
  title: 'BIPOC Therapy | Cultural Humility & Anti-Racism Care | Wonderloud Therapy',
  description:
    'Therapy for BIPOC clients: cultural humility, diaspora support, racial trauma, anti-oppression approach. Color-conscious, culturally affirming care. Telehealth, sliding scale.',
}

const ACCENT = '#c96547'

export default function BIPOCPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero - BIPOC: Warm terracotta for heritage, grounding, and cultural strength */}
        <section
          className="hero-section py-20"
          style={{ background: 'linear-gradient(135deg, rgba(252, 245, 240, 1) 0%, rgba(248, 250, 247, 1) 100%)' }}
        >
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              BIPOC Therapy: Healing from Systemic Impact
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{ color: ACCENT }}>
              Cultural identity as strength. Racism trauma witnessed and held.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Diaspora journeys honored. Code-switching exhaustion named. Intergenerational weight
              understood. Therapy that doesn&apos;t ask you to shrink, assimilate, or explain your own
              life before it can begin.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
            <p className="text-warm-gray-600 text-sm mt-6">
              Your cultural identity is not a diagnosis. We start with who you are.
            </p>
          </div>
        </section>

        {/* What Anti-Racism Therapy Means */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🌍" level={2} color={colors.warmGray[900]}>
              What Anti-Racism Therapy Means
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Not colorblindness. Not &quot;I don&apos;t see race&quot; (which is just another way of saying &quot;I will ignore who you are&quot;). 
                Real, active recognition of who you are, what you have survived, and the systemic forces shaping your daily life.
              </p>

              <div className="p-6 rounded" style={{ backgroundColor: '#fdf7f4', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">The Core Commitment:</p>
                <p>
                  Your anger at injustice is not a pathology to manage-it&apos;s a rational response to real harm. Your caution in unsafe spaces is wisdom,
                  not paranoia or defensiveness. We name oppression directly and clearly, not as background noise in your own story. 
                  You won&apos;t have to explain racism to me. We can focus on how to survive it and thrive anyway.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {[
                {
                  title: 'Cultural Humility, Not Expertise',
                  description:
                    'I do not claim to know your culture or your family better than you do. I won&apos;t pretend I understand what it means to be you. Cultural humility means I stay genuinely curious about your lived experience, acknowledge openly what I do not know, and adapt to what you actually need-not the other way around. You are the expert on your own life.',
                  icon: '🙏',
                },
                {
                  title: 'Anti-Oppression Approach',
                  description:
                    'Racism, discrimination, and systemic inequality are not just external stressors-they are woven into your mental health. We name them directly rather than reframing them as personal deficits.',
                  icon: '⚖️',
                },
                {
                  title: 'Racial Trauma Is Real',
                  description:
                    'Race-based traumatic stress is a documented, treatable condition. Microaggressions accumulate. Hypervigilance in unsafe spaces makes sense. We process this trauma knowing it is rooted in real danger.',
                  icon: '🩹',
                },
                {
                  title: 'Color-Conscious, Not Colorblind',
                  description:
                    'I actively see your racial and ethnic identity. I will not erase it in the name of treating everyone the same. Your background shapes how you see, love, and survive-and it is a source of strength.',
                  icon: '🎨',
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

        {/* Diaspora & Immigrant Journeys */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="🧳" level={2} color={colors.warmGray[900]}>
              Diaspora & Immigrant Journeys
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                Living between cultures. Honoring family legacy while forging your own path. The quiet,
                constant work of belonging.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Immigration & Acculturation Stress',
                    body: 'Navigating a new country. Processing displacement, loss of homeland, cultural shift. Managing pressure to assimilate while honoring your roots.',
                    note: 'Acculturation is not easy or linear. Anxiety about belonging, grief over what you left behind, and joy in discovering new identity can all be true at once.',
                  },
                  {
                    title: 'Intergenerational & Family Dynamics',
                    body: 'Second and third generation navigating parental expectations against mainstream culture. Immigrant family trauma and unspoken losses passed down.',
                    note: 'You are not responsible for fixing your family\'s pain or living out their unrealized dreams. We explore loyalty, identity, and autonomy together.',
                  },
                  {
                    title: 'Code-Switching & Identity Exhaustion',
                    body: 'Constantly translating yourself across home, work, school, and mainstream spaces. The quiet exhaustion of being the different one in every room.',
                    note: 'Code-switching is a survival skill-and it is also depleting. We work with both: honoring your adaptability and addressing the toll it takes.',
                  },
                  {
                    title: 'Cultural Preservation & Belonging',
                    body: 'Keeping heritage alive. Deciding what to pass on to the next generation. Feeling in-between-not fully belonging to your culture of origin or the mainstream.',
                    note: 'Your cultural identity is not something to move past. It is something to integrate and claim on your own terms.',
                  },
                  {
                    title: 'Intergenerational Trauma',
                    body: 'Family histories of colonization, racism, or displacement. Unnamed losses passed down through silence. Patterns you did not choose but still carry.',
                    note: 'Breaking patterns while honoring the resilience that got your family here. Both can happen in the same room.',
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

        {/* Paths I Walk With Clients */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🧭" level={2} color={colors.warmGray[900]}>
              Paths I Walk With BIPOC Clients
            </IconHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-warm-gray-700 mb-8 text-center">
                These are common threads in this work. You might see yourself in one, or in several at once.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '🚨 Racism & Discrimination Trauma',
                    body: 'Processing experiences of racism, racial violence, or institutional discrimination. Healing from microaggressions that accumulate. Rebuilding safety and trust.',
                  },
                  {
                    title: '🎭 Code-Switching & Exhaustion',
                    body: 'Navigating predominantly White institutions. Managing the constant translation of self. Finding the parts of you that do not have to perform.',
                  },
                  {
                    title: '👨‍👩‍👧 Family & Cultural Expectations',
                    body: 'Parental expectations against your own path. Honoring culture while forging identity. Navigating loyalty, duty, and autonomy without betraying yourself.',
                  },
                  {
                    title: '🌍 Immigration & Belonging',
                    body: 'Displacement and loss of homeland. Acculturation stress. Grief, joy, and the complexity of holding two worlds. Building new roots.',
                  },
                  {
                    title: '⚡ Intersectional Identity',
                    body: 'BIPOC and LGBTQ+. BIPOC and disabled. BIPOC and neurodivergent. Multiple layers of difference, belonging, and resilience held at once.',
                  },
                  {
                    title: '🔗 Intergenerational Weight',
                    body: 'Family histories of colonization, racism, or displacement. Unnamed losses passed down. Breaking patterns while honoring resilience.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-warm-gray-50 rounded-lg p-6 border border-warm-gray-200">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#fdf7f4', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">Intersecting identities:</p>
                <p className="text-warm-gray-700">
                  Many clients hold more than one of these at once. See also{' '}
                  <Link href="/lgbtq" className="underline">LGBTQ+ affirming therapy</Link> and{' '}
                  <Link href="/neurodivergent" className="underline">neurodivergent-affirming therapy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Evidence-Based Foundations */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="📚" level={2} color={colors.warmGray[900]}>
              Evidence-Based Foundations
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                What the research tells us about culturally affirming therapy for BIPOC clients.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Cultural Humility Over Competence',
                    body: 'Cultural humility-a lifelong practice of self-reflection and curiosity-is associated with better therapy outcomes than cultural competence alone. Therapists have to examine their own cultural story first.',
                  },
                  {
                    title: 'Racial Trauma Is Documented',
                    body: 'Race-based traumatic stress is a recognized psychological phenomenon with measurable symptoms, rooted in ongoing experiences of racism and discrimination. It responds to trauma-informed, culturally responsive treatment.',
                  },
                  {
                    title: 'Microaggressions Affect Outcomes',
                    body: 'Microaggressions inside the therapy room are associated with poorer outcomes. Cultural humility and a strong working alliance are protective factors, especially for Black, Indigenous, and women of color clients.',
                  },
                  {
                    title: 'Color-Consciousness Matters',
                    body: 'Therapy that ignores racial and ethnic identity tends to produce worse outcomes. Clients benefit from therapists who actively see and affirm cultural background as a source of strength.',
                  },
                ].map((item, index) => (
                  <div key={index} className="card card-compact card-static">
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h4>
                    <p className="text-warm-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Accessible Care */}
        <section className="section-padding bg-white">
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
                    body: 'Sessions from home, where you are comfortable. You control your environment and pace. No unnecessary travel or time barriers.',
                  },
                  {
                    title: '💳 Sliding Scale',
                    body: 'What you pay depends on what you can afford right now-not documentation or proof of hardship.',
                  },
                  {
                    title: '🔒 Confidential & Secure',
                    body: 'Your privacy is non-negotiable. Everything stays between us, within the limits defined by law. Privacy-protected, PIPEDA-compliant.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-warm-gray-50 rounded-lg p-6 border border-warm-gray-200 text-center">
                    <h3 className="text-lg font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#fdf7f4', borderLeft: `4px solid ${ACCENT}` }}>
                <p className="font-semibold text-warm-gray-900 mb-2">
                  If we&apos;re a good fit and cost is a concern, let&apos;s find a way.
                </p>
                <p className="text-warm-gray-700">
                  You deserve support. See <Link href="/pricing" className="underline">pricing</Link> or
                  just bring it up on the consultation call.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Closing CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="🤎" level={2} color={colors.warmGray[900]}>
              Ready to Work With a Therapist Who Gets It?
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              A free 30-minute call is just a conversation. We&apos;ll talk about what&apos;s happening
              in your life right now, and whether we&apos;re a good fit for the work ahead-without you
              having to teach me the basics of your own experience first.
            </p>

            <p className="text-warm-gray-700 mb-12 text-lg leading-relaxed font-semibold" style={{ color: ACCENT }}>
              Your cultural story matters. You deserve care that centers it.
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
        <section className="section-padding bg-white border-t-4" style={{borderColor: '#b8714f'}}>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4" style={{color: '#b8714f'}}>
              Why Rainuka for Your Journey
            </h2>
            <p className="text-lg text-warm-gray-700 leading-relaxed">
              Race and identity shape trauma. I integrate understanding of racism, cultural identity, and systemic stress into my approach. Your experience is valid-your therapist gets it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
