import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export default function MenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(242, 245, 250, 1) 0%, rgba(248, 250, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Therapy for Men Who Actually Want to Understand Themselves
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{color: '#4d6a86'}}>
              Seeking help isn't weakness. It's wisdom.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Relationship struggles. Depression you've learned to hide. Burnout. Identity questions. 
              I work with men ready to understand themselves better.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Get Support That Gets You
            </Link>
          </div>
        </section>

        {/* Stigma & Strength */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="💪" level={2} color={colors.warmGray[900]}>
              Real Strength Looks Like This
            </IconHeading>

            <div className="card card-callout card-compact card-static mb-8" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
              <p className="text-warm-gray-700 leading-relaxed">
                You've heard "man up" your whole life. Suppress feelings. Handle it alone. Stay in control.
              </p>
              <p className="text-warm-gray-700 leading-relaxed mt-3">
                <strong>Real strength:</strong> Admitting when something isn't working. Asking for help. Being willing to look at your patterns. That's self-respect.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Common Issues */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🎯" level={2} color={colors.warmGray[900]}>
              Common Struggles Men Face
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {title: 'Relationships', desc: 'Communication gaps, intimacy issues, conflict patterns'},
                {title: 'Depression/Anxiety', desc: 'Often masked as irritability, anger, or pushing through'},
                {title: 'Career & Burnout', desc: 'Imposter syndrome, questioning your path, work identity'},
                {title: 'Grief & Loss', desc: 'Struggling alone instead of processing'},
                {title: 'Life Transitions', desc: 'Aging, divorce, becoming a father, career changes'},
                {title: 'Loneliness', desc: 'Isolation, not knowing who to talk to'},
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                  <h3 className="font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* What to Expect */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              What Therapy Actually Looks Like
            </h2>

            <div className="space-y-6">
              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  You're in Control
                </h3>
                <p className="text-warm-gray-600">
                  You set the pace and pick the topics. This is your space.
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  No Judgment. Period.
                </h3>
                <p className="text-warm-gray-600">
                  No lectures or judgment. What stays here stays here.
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Practical Tools You Can Use
                </h3>
                <p className="text-warm-gray-600">
                  Real skills for stress management, communication, and decision-making.
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Understanding Your Patterns
                </h3>
                <p className="text-warm-gray-600">
                  See what drives your choices in relationships and work. Understanding the why leads to change.
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)', borderLeftColor: '#4d6a86'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Confidentiality You Can Trust
                </h3>
                <p className="text-warm-gray-600">
                  Full honesty without worrying about judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Redefining Masculinity */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Redefining Strength
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Vulnerability Is Not Weakness
                </h3>
                <p>
                  Strength is understanding your feelings and using emotional awareness to make better choices.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Asking for Help Is Strategic
                </h3>
                <p>
                  Think of therapy like a coach. Top athletes and leaders don't perform without support.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Healthy Relationships Require Emotional Intelligence
                </h3>
                <p>
                  Real intimacy happens when you can express yourself, listen actively, and show up authentically.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  Self-Care Is Self-Respect
                </h3>
                <p>
                  Mental health care is essential maintenance. You deserve to feel good.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              Real Men, Real Change
            </h2>

            <div className="space-y-8">
              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(242, 245, 250, 1)', borderLeftColor: '#4d6a86'}}>
                <p className="text-warm-gray-700 italic mb-4">
                  "I thought something was broken in me. Turns out I had patterns from childhood playing out in my marriage. 
                  Understanding that—having someone help me through it—changed everything. My wife and I are closer than ever."
                </p>
                <p className="font-semibold text-warm-gray-900" style={{color: '#4d6a86'}}>
                  — Marcus, 38 (Relationships & Communication)
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(242, 245, 250, 1)', borderLeftColor: '#4d6a86'}}>
                <p className="text-warm-gray-700 italic mb-4">
                  "I was successful at work but miserable. Therapy helped me realize I was chasing someone else's success. 
                  Now I'm in a role aligned with my values and actually at peace."
                </p>
                <p className="font-semibold text-warm-gray-900" style={{color: '#4d6a86'}}>
                  — David, 45 (Career & Identity)
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(242, 245, 250, 1)', borderLeftColor: '#4d6a86'}}>
                <p className="text-warm-gray-700 italic mb-4">
                  "I didn't think I was depressed. I was just tired and didn't care anymore. Getting that named and learning strategies—
                  it was like someone turned the lights back on."
                </p>
                <p className="font-semibold text-warm-gray-900" style={{color: '#4d6a86'}}>
                  — James, 51 (Depression & Burnout)
                </p>
              </div>

              <div className="card card-callout card-compact card-static" style={{backgroundColor: 'rgba(242, 245, 250, 1)', borderLeftColor: '#4d6a86'}}>
                <p className="text-warm-gray-700 italic mb-4">
                  "I didn't know how to process my dad's death. Therapy gave me space to grieve and brought me closer to my kids. 
                  I'm teaching them it's okay to feel."
                </p>
                <p className="font-semibold text-warm-gray-900" style={{color: '#4d6a86'}}>
                  — Robert, 52 (Grief & Family)
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* How We Work */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-6 text-center">
              How We'll Work Together
            </h2>

            <div className="space-y-4 text-warm-gray-600">
              <p className="font-semibold text-warm-gray-900">Modalities I use:</p>
              <ul className="space-y-2 ml-6">
                <li>• Cognitive Behavioral Therapy (CBT) – understanding thought patterns</li>
                <li>• Psychodynamic therapy – exploring deeper patterns and root causes</li>
                <li>• Practical problem-solving – real strategies for real challenges</li>
                <li>• Communication skills coaching – improving relationships</li>
              </ul>

              <div className="mt-8 p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>Telehealth Available</p>
                <p>Sessions from home or your office. 28 states served.</p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>Flexible Scheduling</p>
                <p>Evening and weekend appointments available.</p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(77, 106, 134, 0.08)'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>Sliding Scale</p>
                <p>We'll figure out rates that work for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-white" style={{backgroundColor: '#4d6a86'}}>
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Show Up Differently?
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Therapy is about understanding yourself better so you can build the relationships and life you actually want.
            </p>
            <Link href="/booking" className="inline-block bg-white px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90" style={{color: '#4d6a86'}}>
              Schedule Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
