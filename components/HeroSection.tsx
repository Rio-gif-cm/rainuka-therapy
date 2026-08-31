'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-br from-cream-50 via-white to-sage-50">
      <div className="container-base flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-hero md:text-5xl font-serif font-bold text-warm-gray-900 mb-4">
            Therapy for what's been invisible or misunderstood
          </h1>
          
          <p className="text-xl text-warm-gray-700 mb-6 leading-relaxed">
            Perinatal/reproductive mental health • Adult ADHD • Career transitions
          </p>

          <p className="text-body text-warm-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
            Trauma-informed, culturally humble, and practical. I specialize in what feels stuck—and help you find clarity, belonging, and your own answers.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center lg:justify-start text-sm text-warm-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sage-400 font-bold">✓</span>
              <span>Telehealth • Sliding Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sage-400 font-bold">✓</span>
              <span>HIPAA Secure</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/booking" className="btn btn-primary">
              Book a Free 15-Minute Call
            </Link>
            <Link href="/specialties" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="flex-1 w-full">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-sage-200 to-warm-accent-light overflow-hidden shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👩‍⚕️</div>
              <p className="text-warm-gray-600 font-medium">
                Professional Photo Placeholder
              </p>
              <p className="text-sm text-warm-gray-500 mt-2">
                Update with Rainuka's headshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
