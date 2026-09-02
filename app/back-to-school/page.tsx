import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export default function BackToSchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero - Back to School: Warm golden/peachy for comfort and reassurance */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(255, 251, 240, 1) 0%, rgba(248, 247, 245, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Back to School Anxiety is Real
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              The knot in your stomach. The sleepless nights. The dread that won't fade.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Whether it's your first day at a new school, separation from your child, or the overwhelm of a new routine-anxiety about back to school is one of the most common things I help people navigate. And it's so treatable.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule a 15-Minute Call
            </Link>
          </div>
        </section>

        {/* What You're Experiencing */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="💭" level={2} color={colors.warmGray[900]}>
              Does This Sound Like You?
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Anxiety starts in late August and doesn\'t stop',
                'Sleepless nights worrying about what might go wrong',
                'Separation anxiety (yours or your child\'s)',
                'Dread about new routines, new teachers, new social dynamics',
                'Catastrophizing ("What if I don\'t fit in?" / "What if my child gets hurt?")',
                'Physical symptoms: stomach issues, headaches, racing heart',
              ].map((item, index) => (
                <IconListItem key={index} icon="✓" color={colors.sage[600]}>
                  {item}
                </IconListItem>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Why Back to School Anxiety Happens */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🧠" level={2} color={colors.warmGray[900]}>
              Why This Happens (And Why It's Not Your Fault)
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Back to school represents a major transition: new routines, new people, less predictability, less control. 
                Your nervous system-or your child's-picks up on this change and sounds the alarm.
              </p>

              <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#d4a574'}}>
                <p className="font-semibold text-warm-gray-900 mb-4" style={{color: '#d4a574'}}>
                  Common triggers:
                </p>
                <ul className="space-y-2">
                  <li>• Loss of summer routine (your nervous system craves predictability)</li>
                  <li>• New classroom, new teacher, new social dynamics (uncertainty)</li>
                  <li>• Separation from caregiver / primary attachment figure</li>
                  <li>• Academic pressure ("What if I can't keep up?" / "What if I fail?")</li>
                  <li>• Social anxiety ("Will I fit in?" / "What if nobody likes me?")</li>
                  <li>• Identity shift ("I'm not a summer kid anymore; I'm a student")</li>
                </ul>
              </div>

              <p>
                <strong>Here's what matters:</strong> Anxiety isn't weakness. It's your nervous system doing its job-maybe a little too well. 
                And that's exactly what therapy helps with: teaching your nervous system that you're safe, that you can handle uncertainty, and that you have tools to navigate transitions.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* My Approach */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How Therapy Helps
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  We Don't Ignore the Anxiety
                </h3>
                <p className="text-warm-gray-600">
                  We validate it. Anxiety is your body's way of saying "I care about this." That's not broken-that's human. 
                  We work with it, not against it.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Build Real Coping Tools
                </h3>
                <p className="text-warm-gray-600">
                  Grounding techniques, cognitive tools to challenge catastrophizing, breathing exercises that actually work. 
                  Not generic advice-strategies tailored to how YOUR anxiety shows up.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Increase Confidence and Predictability
                </h3>
                <p className="text-warm-gray-600">
                  As your nervous system settles and you practice managing anxiety, confidence grows. 
                  You move from "I can't handle this" to "I can handle this-and I have support."
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Work With Your Timeline
                </h3>
                <p className="text-warm-gray-600">
                  If school starts September 5th, we have 5 days to build skills. If you're looking ahead to next year-great, 
                  we have time to do deeper work. Either way, we meet you where you are.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Trauma-Informed Care
                </h3>
                <p className="text-warm-gray-600">
                  If past experiences made anxiety worse (previous bullying, abuse, transitions gone wrong), 
                  we address those too. Therapy integrates your whole story.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* For Parents */}
        <section className="section-padding bg-white border-t-4" style={{borderTopColor: '#d4a574'}}>
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="👨‍👩‍👧" level={2} color={colors.warmGray[900]}>
              If Your Child Has Back to School Anxiety
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Your job isn't to make the anxiety disappear. (You can't-and trying to makes it worse.) 
                Your job is to support your child in learning to manage it.
              </p>

              <div className="card card-callout card-static" style={{backgroundColor: 'rgba(212, 165, 116, 0.08)', borderLeftColor: '#d4a574'}}>
                <p className="font-semibold text-warm-gray-900" style={{color: '#d4a574'}}>
                  What research shows us:
                </p>
                <ul className="space-y-3 mt-4">
                  <li><strong>Early intervention works.</strong> Therapy in August prevents anxiety from spiraling through September and beyond.</li>
                  <li><strong>Kids recover faster than you think.</strong> With the right tools, most kids show improvement in 4-8 sessions.</li>
                  <li><strong>You're not failing as a parent.</strong> Anxiety isn't caused by something you did. Getting help IS what good parents do.</li>
                  <li><strong>Your calm helps their calm.</strong> When you model confidence and manage your own worry, kids pick up on that.</li>
                </ul>
              </div>

              <p>
                Therapy gives your child a safe space to practice handling transitions. And it gives you tools to support them 
                (without taking their anxiety on yourself).
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Objection Handlers */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Common Concerns
            </h2>

            <div className="space-y-4">
              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if therapy doesn't help? My anxiety is too bad.
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Severe anxiety is actually more responsive to therapy than mild anxiety-there's more room for change. 
                  And if you need medication support alongside therapy, I can refer you to a psychiatrist. We work as a team.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  I don't have time for therapy during back to school prep.
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That's exactly when you need it most. A 15-minute consultation or one focused session can give you tools 
                  you use immediately. Think of it as investing in your peace of mind (and your kid's smooth transition).
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Will therapy make my child talk about feelings they're not ready for?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  No. I meet kids where they are. We might use play, art, games, or conversation-whatever helps them feel safe. 
                  We don't force feelings. We create space for them to emerge.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Isn't some back to school anxiety normal?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. A little nervousness is normal. But if anxiety is interfering with sleep, eating, relationships, or quality of life-
                  that's the sign therapy can help. We work with what's actually happening, not what "should" be normal.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if my child's anxiety is caused by real trauma or past bullying?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Then we address that directly. Trauma-informed therapy means we help your child process what happened, 
                  rebuild safety, and move forward. This is actually where therapy shows its most powerful results.
                </p>
              </details>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Social Proof & Data */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              You're Not Alone In This
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(212, 165, 116, 0.1)'}}>
                <p className="text-4xl font-bold mb-2" style={{color: '#d4a574'}}>32%</p>
                <p className="text-warm-gray-600">
                  Spike in therapy demand during back-to-school season
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(212, 165, 116, 0.1)'}}>
                <p className="text-4xl font-bold mb-2" style={{color: '#d4a574'}}>4-8</p>
                <p className="text-warm-gray-600">
                  Sessions typically needed for noticeable improvement
                </p>
              </div>
            </div>

            <p className="text-center text-warm-gray-600 mb-6">
              September and October are the busiest months for therapists-not because therapy is rare, but because so many people reach out right now. 
              Anxiety about back to school is one of the most treatable challenges I work with.
            </p>

            <div className="bg-cream-50 border-l-4 p-6 rounded" style={{borderLeftColor: '#d4a574'}}>
              <p className="text-warm-gray-600 italic">
                "I scheduled therapy on August 28th because I couldn't sleep thinking about school. By mid-September, I had actual tools. 
                I'm still nervous, but now I know I can handle it. That's everything." - Parent of 2nd grader
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Back to School Questions
            </h2>

            <div className="space-y-4">
              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  How many sessions do we need?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That depends on your situation. Sometimes one focused session gives you the tools you need. 
                  Other times, 4-8 sessions builds lasting change. We'll talk about this on our first call.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Can we do telehealth? I'm traveling.
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. I offer flexible telehealth sessions. We can work around your schedule and your location.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What's the cost?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  I offer a sliding scale based on income, and I work with most insurance plans. 
                  Let's talk about what works for your budget.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  My child won't open up to a stranger. Will this work?
                  <span style={{color: '#d4a574'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  It's normal for kids to be shy at first. I'm trained in building trust quickly. And the first session is often 
                  just getting to know each other-no deep conversations required. Most kids warm up quickly when they realize 
                  this is a safe, no-judgment space.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA - Warm peachy tone */}
        <section className="section-padding text-white" style={{backgroundColor: '#d4a574'}}>
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              You Don't Have to White-Knuckle Through This
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Back to school anxiety is treatable. Tools exist. Support is available. Let's talk about what you need.
            </p>
            <Link href="/booking" className="inline-block bg-white px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90" style={{color: '#d4a574'}}>
              Schedule Your 15-Minute Call Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
