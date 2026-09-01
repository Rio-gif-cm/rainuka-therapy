import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ADHDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - ADHD: Clear sky blue for clarity, focus, calm without overstimulation */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(240, 249, 255, 1) 0%, rgba(248, 250, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              ADHD Therapy for Adults
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              Diagnosed at 30? 40? 50? Finally it makes sense.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Late ADHD diagnosis comes with grief, relief, and confusion. Therapy to understand yourself—not fix yourself.
              Shame-aware. Neurodivergent-affirming.
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
              If You're Experiencing...
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                '"Why didn\'t anyone catch this earlier?" (late diagnosis grief)',
                'Internalized shame ("I\'m broken / lazy / not trying hard enough")',
                '"I\'m masking / performing all the time" (exhaustion from hiding)',
                'Rejection sensitivity (why did they reject me?)',
                'ADHD + anxiety + depression overlap (common)',
                'Career/relationship patterns suddenly making sense',
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl" style={{color: '#0369a1'}}>✓</div>
                  <p className="text-warm-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is ADHD */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              What ADHD Actually Is
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                ADHD isn't laziness. It's not a character flaw. It's an executive function difference—meaning your brain 
                prioritizes and organizes things differently than neurotypical brains.
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4" style={{borderLeftColor: '#0369a1'}}>
                <p className="font-semibold text-warm-gray-900 mb-4" style={{color: '#0369a1'}}>
                  This might show up as:
                </p>
                <ul className="space-y-2">
                  <li>• Time blindness ('Wait, how long was I doing that?')</li>
                  <li>• Starting projects (paralyzed by choice or overwhelm)</li>
                  <li>• Emotional regulation (feelings hit harder, faster)</li>
                  <li>• Organization (systems feel impossible)</li>
                  <li>• Shame (feeling broken because you can't 'just do it')</li>
                </ul>
              </div>

              <p>
                <strong>The Real Talk:</strong> Late ADHD diagnosis—especially in women—comes with grief. 
                Grief for lost time. Grief for the ways you blamed yourself. And also relief: 
                "So I'm not broken. I'm just different."
              </p>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How I Work With ADHD
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Strengths-Based
                </h3>
                <p className="text-warm-gray-600">
                  ADHD ≠ deficit. Your brain is different, not broken. We'll understand your specific presentation 
                  and build on your actual strengths.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  No Shame
                </h3>
                <p className="text-warm-gray-600">
                  You're not lazy. You're not broken. You're not "not trying hard enough." 
                  Therapy helps you replace shame with self-understanding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Practical Systems
                </h3>
                <p className="text-warm-gray-600">
                  Not shame-based productivity tips. Real strategies that work WITH your ADHD brain (not against it). 
                  Time management, task initiation, emotional regulation tools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Grief + Excitement
                </h3>
                <p className="text-warm-gray-600">
                  We process grief for lost time while exploring what's possible now. 
                  ADHD identity integration, not diagnosis acceptance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Neurodivergent-Affirming Language
                </h3>
                <p className="text-warm-gray-600">
                  You'll never hear "fix your brain" or "overcome your ADHD." 
                  We work with your neurodiversity, not against it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Identity Affirmation: The Shame-to-Self-Compassion Shift */}
        <section className="section-padding bg-white border-t-4" style={{borderTopColor: '#0369a1'}}>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              You Are Not Broken. Identity Reconstruction Starts Here.
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p className="text-lg leading-relaxed mb-4">
                For decades, you may have believed: <em>"Something is fundamentally wrong with me."</em> That belief didn't come from nowhere.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                It's the result of repeated experiences—missed deadlines, forgotten promises, relationships strained, criticism internalized—until struggling felt like evidence of who you are.
              </p>

              <div className="p-8 rounded-lg border-l-4" style={{backgroundColor: 'rgba(3, 105, 161, 0.06)', borderLeftColor: '#0369a1'}}>
                <p className="font-semibold text-warm-gray-900" style={{color: '#0369a1'}}>
                  Research on late ADHD diagnosis shows us something crucial:
                </p>
                <ul className="space-y-3 mt-4">
                  <li><strong>Shame is inherited, not intrinsic.</strong> You internalized criticism because your ADHD went unrecognized.</li>
                  <li><strong>Self-compassion rewires how you treat yourself.</strong> Adults with ADHD who develop self-compassion experience marked improvement in mental health.</li>
                  <li><strong>Identity reconstruction is the real work.</strong> Therapy is about rewriting the story you've told yourself. Instead of "I'm lazy," it becomes "I was working with challenges no one recognized."</li>
                </ul>
              </div>

              <p className="text-lg font-semibold" style={{color: '#0369a1'}}>
                The shift you're making now is not from broken to fixed. It's from self-attack to self-understanding.
              </p>

              <p>
                That doesn't happen overnight. But it begins with a single truth: Your ADHD brain isn't proof that you're not good enough. 
                It's proof that you've been surviving without the tools you needed. Now that you know, everything changes.
              </p>
            </div>
          </div>
        </section>

        {/* For Women */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              ADHD in Women
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                ADHD often shows differently in women: high masking, perfectionism, depression/anxiety that masks 
                the hyperactivity. You learned early how to appear "normal" while burning out internally.
              </p>

              <p>
                Late diagnosis comes with a specific grief: "How much of my life was shaped by unmasking? 
                What could I have done if I'd known?"
              </p>

              <p>
                <strong>You're not alone in this.</strong> If you're discovering ADHD at 30, 40, 50+—I understand. 
                And therapy helps you integrate this new self-understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof: Confidence Building */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              You're In Good Company
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(3, 105, 161, 0.08)'}}>
                <p className="text-4xl font-bold mb-2" style={{color: '#0369a1'}}>60%+</p>
                <p className="text-warm-gray-600">
                  of ADHD diagnoses happen in adulthood, many in the 30s–50s
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(3, 105, 161, 0.08)'}}>
                <p className="text-4xl font-bold mb-2" style={{color: '#0369a1'}}>3:1</p>
                <p className="text-warm-gray-600">
                  Women historically under-diagnosed due to masking and different presentation
                </p>
              </div>
            </div>

            <p className="text-center text-warm-gray-600 mb-6">
              Late diagnosis isn't a flaw. It's actually common—and it changes everything when you finally understand yourself.
            </p>

            <div className="bg-cream-50 border-l-4 p-6 rounded" style={{borderLeftColor: '#0369a1'}}>
              <p className="text-warm-gray-600 italic">
                "What feels broken about you has a name. And understanding it—with support—is where real change starts."
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Common ADHD Questions
            </h2>

            <div className="space-y-4">
              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do I need medication?
                  <span style={{color: '#0369a1'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  That's between you and your psychiatrist. Therapy helps you understand yourself while medication 
                  does its work. We can talk about both.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Will therapy help me be "more productive"?
                  <span style={{color: '#0369a1'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Not in the hustle-culture sense. But yes—you'll learn strategies that work WITH your brain, 
                  making tasks feel less impossible.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I have ADHD + anxiety/depression?
                  <span style={{color: '#0369a1'}}>▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  This is common. We address all of it together. Sometimes anxiety is worsened by ADHD struggles; 
                  sometimes they're separate. We figure out what's what.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA - ADHD clear sky blue */}
        <section className="section-padding text-white" style={{backgroundColor: '#0369a1'}}>
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Finally understanding yourself
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              ADHD diagnosis changes everything. Let's make sense of it together.
            </p>
            <Link href="/booking" className="inline-block bg-white px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90" style={{color: '#0369a1'}}>
              Book Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
