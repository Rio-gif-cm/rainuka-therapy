import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - Career: Gold/Amber for confidence, professionalism, forward momentum */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(255, 248, 240, 1) 0%, rgba(248, 250, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Career Transitions & Burnout
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              Career transitions don't have to feel impossible.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Burnout, doubt, identity questions, career anxiety—you don't have to figure it out alone.
              Practical. Warm. Secular.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </section>

        {/* Who I Help */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Are You...
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Burned out so deep you can\'t see a way out',
                '"Is this really what I want?" (identity questions)',
                'Dealing with imposter syndrome (they\'ll figure it out)',
                'Worried about career change FOMO (what if I choose wrong?)',
                'Misaligned with your job values',
                'Trapped in perfectionism + overwork spiral',
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl" style={{color: '#b45309'}}>✓</div>
                  <p className="text-warm-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I'm NOT */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Important: What I'm NOT
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                I'm not a life coach. I'm not going to tell you what job to get or whether you should quit.
              </p>

              <p>
                <strong>What I AM:</strong> A therapist who helps you work through the mental and emotional pieces 
                of career decisions. Process fear. Untangle real anxiety from decision avoidance. Clarify your values. 
                Build confidence.
              </p>

              <p>
                <strong>The difference:</strong> You make the decision. I help you think clearly so YOU can decide.
              </p>
            </div>
          </div>
        </section>

        {/* Why Therapy Helps */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Why Therapy for Career Stuff
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Career decisions are identity decisions. "What should I do?" is really "Who am I?"
              </p>

              <p>
                <strong>Burnout isn't laziness.</strong> It's your system telling you something's gotta change.
              </p>

              <p>
                <strong>Doubt doesn't mean you're failing.</strong> It means you're paying attention to something real.
              </p>

              <p>
                Therapy helps you untangle what's real anxiety vs. fear of change. Clarify what actually matters to you 
                (not what you think you "should" want). Build confidence in whatever path you choose.
              </p>
            </div>
          </div>
        </section>

        {/* What We Work On */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              What We Work On Together
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Burnout Recovery
                </h3>
                <p className="text-warm-gray-600">
                  Understanding what led to burnout. Rest without guilt. Rebuilding sustainable work habits.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Values Clarification
                </h3>
                <p className="text-warm-gray-600">
                  What actually matters to YOU (not your parents, not your peers). What work feels aligned with 
                  your values and your life.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Decision-Making Paralysis
                </h3>
                <p className="text-warm-gray-600">
                  Working through analysis paralysis. Building tolerance for uncertainty. 
                  Moving from "I don't know" to "Here's what I'll try."
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Imposter Syndrome
                </h3>
                <p className="text-warm-gray-600">
                  The voice that says "they'll figure out you don't belong." Building evidence-based confidence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Perfectionism & Overwork
                </h3>
                <p className="text-warm-gray-600">
                  Not everything requires perfection to be valuable—but high-achievers often learned it does. We separate your standards (worth keeping) from the fear underneath them (worth releasing). Your ambition doesn't need anxiety as its fuel.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3" style={{color: '#b45309'}}>
                  Grief for Paths Not Taken
                </h3>
                <p className="text-warm-gray-600">
                  Mourning the career you thought you'd have. Building excitement for what's actually possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How It Works
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Telehealth works great for career work. No interruptions. Continuity of thinking between sessions. 
                You're in your comfortable space.
              </p>

              <p>
                Typically, we meet weekly for 50-minute sessions. Some people need 6 sessions; some need 20. 
                It depends on what you're navigating and what feels right.
              </p>

              <p>
                <strong>What to expect:</strong> We'll explore what led to burnout or doubt. Clarify your values. 
                Work through anxiety about change. Build confidence. You'll leave knowing yourself better and clearer 
                about what's possible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA - Career gold accent */}
        <section className="section-padding text-white" style={{backgroundColor: '#b45309'}}>
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              You don't have to figure this out alone
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Let's talk about what's holding you back—and what's possible.
            </p>
            <Link href="/booking" className="inline-block bg-white px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90" style={{color: '#b45309'}}>
              Book Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
