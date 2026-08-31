'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container-base flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-gray-900 mb-6 leading-tight">
            Therapy for what's been invisible or misunderstood
          </h1>
          
          <p className="text-lg md:text-xl text-warm-gray-700 mb-6 font-medium">
            Perinatal & reproductive mental health • Adult ADHD • Career transitions
          </p>

          <p className="text-base md:text-lg text-warm-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Trauma-informed, culturally humble, and practical. I specialize in what feels stuck—and help you find clarity, belonging, and your own answers.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center lg:justify-start text-sm text-warm-gray-700 mb-10 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-sage-600 text-lg">✓</span>
              <span>Telehealth • Sliding Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sage-600 text-lg">✓</span>
              <span>HIPAA Secure</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/booking" className="btn btn-primary px-8 py-3 text-lg">
              Book a Free 15-Minute Call
            </Link>
            <Link href="/about" className="btn btn-outline px-8 py-3 text-lg">
              Learn More About My Approach
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="flex-1 w-full h-full">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage-200 via-sage-100 to-warm-gray-100 overflow-hidden shadow-xl flex items-center justify-center border border-sage-200">
            <div className="text-center px-4">
              <div className="text-7xl mb-4 opacity-80">👩‍⚕️</div>
              <p className="text-warm-gray-700 font-semibold text-lg mb-2">
                Your Photo Here
              </p>
              <p className="text-sm text-warm-gray-600">
                Update with Rainuka's professional headshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
