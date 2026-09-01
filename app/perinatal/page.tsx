import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PerinatalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="hero-section bg-gradient-to-br from-cream-50 to-sage-50 py-20">
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Perinatal Mental Health Therapy
            </h1>
            <p className="text-xl font-semibold text-sage-600 mb-4 max-w-2xl mx-auto">
              Pregnancy, loss, postpartum. What you're carrying isn't weakness.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Infertility shame. Pregnancy loss grief. Postpartum anxiety/OCD. Reproductive trauma. 
              I specialize in what often goes unnamed—and help you feel less alone.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule Your Free 30-Min Call
            </Link>
          </div>
        </section>

        {/* Who I Help */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              If You're Carrying...
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Infertility or pregnancy loss (the invisible grief)',
                'Pregnancy anxiety or OCD (racing thoughts about baby safety)',
                'Postpartum anxiety, depression, rage (yes, rage is real)',
                'Reproductive trauma or termination grief',
                'Identity shifts in motherhood',
                '"Was I ready for this?" doubts',
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p className="text-warm-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              My Approach
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Trauma-Informed
                </h3>
                <p className="text-warm-gray-600">
                  Perinatal experiences—especially loss and reproductive trauma—are deeply held in the body. 
                  I work slowly, respecting your nervous system and your timeline.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Validation, Not Platitudes
                </h3>
                <p className="text-warm-gray-600">
                  No "you should just be grateful" or "at least you can try again." Your grief is real. 
                  Your anxiety is real. And both can coexist with joy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Practical Tools
                </h3>
                <p className="text-warm-gray-600">
                  You'll learn strategies to manage anxiety, process grief, and rebuild identity. 
                  Therapy that fits into your actual life.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
                  Culturally Humble
                </h3>
                <p className="text-warm-gray-600">
                  Reproductive choices vary by culture, community, and values. I meet you where you are, 
                  not where I think you "should" be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Therapy Helps */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              What You'll Get in Therapy
            </h2>

            {/* Reassurance Box - Trauma-Informed Microcopy */}
            <div className="mb-8 p-6 rounded-lg bg-sage-50 border-l-4 border-sage-400">
              <p className="text-sm font-semibold text-sage-700 uppercase tracking-wide mb-2">
                Safe Space for Your Experience
              </p>
              <p className="text-warm-gray-700">
                This is a judgment-free environment. Your timeline, your pace. Every emotion you bring—grief, joy, rage, ambivalence—is welcomed here.
              </p>
            </div>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                <strong>A space where you're not "too much."</strong> Your anxiety isn't annoying. 
                Your grief isn't weakness. You won't be rushed.
              </p>

              <p>
                <strong>Real understanding of what's happening.</strong> Perinatal hormones affect your brain, 
                your body, your emotions. We'll make sense of that together.
              </p>

              <p>
                <strong>Permission to feel all of it.</strong> Joy and grief. Relief and loss. Hope and fear. 
                They can all be true at once.
              </p>

              <p>
                <strong>Practical strategies you can use today.</strong> Anxiety management. Grounding techniques. 
                How to talk to your partner about what you're experiencing.
              </p>

              <p>
                <strong>Rebuilding your sense of self.</strong> Motherhood, pregnancy loss, and reproductive 
                experiences change who you are. We'll help you integrate that.
              </p>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-6 text-center">
              How We'll Work Together
            </h2>

            <div className="space-y-4 text-warm-gray-600">
              <p className="font-semibold text-warm-gray-900">Modalities I use:</p>
              <ul className="space-y-2 ml-6">
                <li>• Trauma-focused CBT (processing difficult experiences)</li>
                <li>• Somatic approaches (body-aware therapy)</li>
                <li>• Attachment-informed therapy (relationships, bonding)</li>
                <li>• Mindfulness and grounding techniques</li>
              </ul>

              <div className="mt-8 p-6 bg-sage-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-2">Telehealth Available</p>
                <p>
                  Sessions from home, your office, or wherever feels comfortable. 
                  28 states served. Perfect for new parents who can't leave the house.
                </p>
              </div>

              <div className="p-6 bg-sage-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-2">Sliding Scale</p>
                <p>
                  Financial stress from infertility or loss shouldn't keep you from care. 
                  We'll figure out rates that work for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-sage-400 text-white">
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              You're not alone in this
            </h2>
            <p className="text-lg mb-8 text-sage-50 max-w-2xl mx-auto">
              Let's talk about what you're carrying. No judgment, no pressure—just compassionate support tailored to your experience.
            </p>
            <Link href="/booking" className="inline-block bg-white text-sage-400 px-8 py-4 font-semibold rounded-lg hover:bg-sage-50">
              Schedule Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
