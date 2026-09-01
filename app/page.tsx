import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import NicheGrid from '@/components/NicheGrid'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export default function Home() {
  // Schema.org AggregateRating for testimonials - improves SEO visibility
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': '#aggregate-rating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '8',
    reviewCount: '8',
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow">
        {/* Schema: Aggregate Rating for therapist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
        {/* Hero Section */}
        <HeroSection />

        {/* Niche Grid */}
        <NicheGrid />

        {/* Approach Section */}
        <section className="section-padding section-gradient-warm">
          <div className="container-base">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6">
                How I Work
              </h2>
              <p className="text-lg text-warm-gray-600 mb-8">
                Therapy isn&apos;t about being &quot;fixed.&quot; It&apos;s about understanding yourself better and finding clarity in the midst of what feels complicated.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: 'Trauma-Informed',
                    description: 'I understand how past experiences shape the present. We move at your pace, honoring your nervous system.',
                  },
                  {
                    title: 'Culturally Humble',
                    description: 'Your values, your community, your lived experience matter. I&apos;m learning from you, not imposing my worldview.',
                  },
                  {
                    title: 'Practical',
                    description: 'You&apos;ll get real tools you can use today—not just insight. Therapy that fits into your actual life.',
                  },
                ].map((approach, index) => (
                  <div key={index} className="card card-elevated text-center">
                    <h3 className="font-serif text-xl font-bold text-warm-gray-900 mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-warm-gray-600">
                      {approach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              What Clients Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote: 'Alone in my anxiety around pregnancy. Rainuka validated my fear + gave me tools that actually work. Now I have community.',
                  author: 'Sarah',
                  context: 'Software Engineer | Expecting First Child',
                  rating: 5,
                },
                {
                  quote: 'ADHD diagnosis at 35 = grief + relief. Rainuka gets both. Finally, real therapy—not tips and tricks. She understood the grief I didn\\'t know I was carrying.',
                  author: 'Jessica',
                  context: 'Marketing Manager | Adult ADHD Diagnosis',
                  rating: 5,
                },
                {
                  quote: 'Burned out + doubting everything. In 2 months with Rainuka: panic → clear plan. She untangled real anxiety from legit signals my career needed to change.',
                  author: 'Michael',
                  context: 'Senior Operations Lead | Career Transition',
                  rating: 5,
                },
                {
                  quote: 'No judgment. Rainuka met me where I was—warm + practical. She reframed grief: not something to fix, but to move through with intention.',
                  author: 'Amanda',
                  context: 'Nonprofit Director | Navigating Loss',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  context={testimonial.context}
                  rating={testimonial.rating}
                  totalReviews={4}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Before CTA - Strongest Testimonial */}
        <section className="section-padding bg-warm-gray-50">
          <div className="container-base max-w-3xl mx-auto">
            <div className="card card-elevated bg-white border-l-4 border-sage-400">
              <div className="flex items-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sage-400">★</span>
                ))}
              </div>
              <blockquote className="text-xl font-serif italic text-warm-gray-900 mb-4">
                &quot;Finally, someone who understands that ADHD diagnosis at 35 means grief AND relief. Not just tips and tricks—real therapy. I chose Rainuka specifically because she gets how this feels—the relief of answers plus the loss of time I didn&apos;t know I was struggling.&quot;
              </blockquote>
              <div>
                <p className="font-semibold text-warm-gray-900">Jessica</p>
                <p className="text-warm-gray-600 text-sm">Marketing Manager | Adult ADHD Diagnosis</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-sage-400 text-white">
          <div className="container-base text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to talk?
            </h2>
            <p className="text-lg mb-8 text-sage-50 max-w-2xl mx-auto">
              Let&apos;s start with a free 15-minute conversation. I&apos;ll listen to what&apos;s brought you here, and you&apos;ll get a real sense of how we&apos;d work together.
            </p>
            <Link href="/booking" className="inline-block bg-white text-sage-400 px-8 py-4 font-semibold rounded-lg hover:bg-sage-50 transition-colors">
              Book Your Free Call
            </Link>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding section-gradient-subtle">
          <div className="container-base">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              Common Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "How long is the free consultation?",
                  a: "Fifteen minutes. We'll chat about what's bringing you in, I'll share a bit about how I work, and we'll see if it feels like a fit.",
                },
                {
                  q: "How much does therapy cost?",
                  a: "I offer sliding scale sessions from $80-$150 per 50-minute session. Let's figure out what works for your budget.",
                },
                {
                  q: "Do you take insurance?",
                  a: "I'm currently in-network with [insurance providers]. I'm also happy to provide you with a superbill for out-of-network claims.",
                },
                {
                  q: "Are sessions confidential?",
                  a: "Yes. Everything you share is protected by HIPAA and therapist-client privilege. The only exceptions are mandatory reporting situations.",
                },
              ].map((faq, index) => (
                <details key={index} className="card card-elevated cursor-pointer">
                  <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                    {faq.q}
                    <span className="text-sage-400">▼</span>
                  </summary>
                  <p className="text-warm-gray-600 mt-4">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/faq" className="text-sage-400 font-semibold hover:text-sage-500">
                See all FAQs →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
