import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export default function PerinatalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - Perinatal: Warm rose accents (#d97757) for warmth, hope, and safety */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(255, 245, 243, 1) 0%, rgba(248, 250, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Perinatal Mental Health Therapy
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{color: '#d97757'}}>
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
            <IconHeading icon="🤰" level={2} color={colors.warmGray[900]}>
              If You're Carrying...
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Infertility or pregnancy loss (the invisible grief)',
                'Pregnancy anxiety or OCD (racing thoughts about baby safety)',
                'Postpartum anxiety, depression, rage (yes, rage is real)',
                'Reproductive trauma or termination grief',
                'Identity shifts in motherhood',
                '"Was I ready for this?" doubts',
              ].map((item, index) => (
                <IconListItem key={index} icon="✓" color="#d97757">
                  {item}
                </IconListItem>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* My Approach */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🛡️" level={2} color={colors.warmGray[900]}>
              My Approach
            </IconHeading>

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
            <div className="mb-8 p-6 rounded-lg border-l-4" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)', borderLeftColor: '#d97757'}}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{color: '#d97757'}}>
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

        {/* Hope & Recovery - Research-Backed */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              You're Not Broken—Your Brain Is Adapting
            </h2>

            <div className="space-y-6 text-warm-gray-600">
              <div className="p-6 rounded-lg border-l-4" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)', borderLeftColor: '#d97757'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#d97757'}}>
                  Your Anxiety Has a Name
                </h3>
                <p className="mb-3">
                  Postpartum anxiety affects 1 in 5 mothers. It's not weakness—it's a biological response to hormonal shifts and identity changes.
                </p>
                <p>
                  Your brain is working overtime to protect your baby. That's real. That's treatable.
                </p>
              </div>

              <div className="p-6 rounded-lg border-l-4" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)', borderLeftColor: '#d97757'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#d97757'}}>
                  Mixed Feelings Don't Mean You Love Less
                </h3>
                <p className="mb-3">
                  You can feel profound love for your baby AND want space. You can grieve a pregnancy loss AND feel relief.
                </p>
                <p className="mb-3">
                  You can be grateful AND exhausted. This is emotional honesty.
                </p>
                <p>
                  Therapy helps you stop being ashamed of your complexity.
                </p>
              </div>

              <div className="p-6 rounded-lg border-l-4" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)', borderLeftColor: '#d97757'}}>
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-2" style={{color: '#d97757'}}>
                  Recovery Is Real
                </h3>
                <p>
                  Perinatal mental health conditions respond to treatment. With the right support—therapy, possibly 
                  medication, and practical strategies—most clients see significant improvement. You won't feel this way forever. 
                  This is a moment in time, not your identity.
                </p>
              </div>
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

              <div className="mt-8 p-6 rounded-lg" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#d97757'}}>Telehealth Available</p>
                <p>
                  Sessions from home, your office, or wherever feels comfortable. 
                  28 states served. Perfect for new parents who can't leave the house.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(217, 119, 87, 0.08)'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#d97757'}}>Sliding Scale</p>
                <p>
                  Financial stress from infertility or loss shouldn't keep you from care. 
                  We'll figure out rates that work for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Perinatal rose accent */}
        <section className="section-padding text-white" style={{backgroundColor: '#d97757'}}>
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              You're not alone in this
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Let's talk about what you're carrying. No judgment, no pressure—just compassionate support tailored to your experience.
            </p>
            <Link href="/booking" className="inline-block bg-white px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90" style={{color: '#d97757'}}>
              Schedule Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
