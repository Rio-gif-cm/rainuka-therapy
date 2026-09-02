'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface MobileStickyCTAProps {
  /**
   * Dismissible sticky booking button for mobile (375px+)
   * - 44px+ touch target for WCAG compliance
   * - Sticky position on scroll
   * - Dismissible overlay to prevent navigation obstruction
   * - Mobile-only (hidden on desktop)
   */
}

export default function MobileStickyCTA() {
  const [isDismissed, setIsDismissed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check localStorage for dismissed state
    const dismissed = localStorage.getItem('mobile-cta-dismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('mobile-cta-dismissed', 'true')
  }

  const handleBooking = () => {
    // Reset dismissal when user clicks to book
    localStorage.removeItem('mobile-cta-dismissed')
  }

  if (!isMounted || isDismissed) {
    return null
  }

  return (
    <>
      {/* Mobile-only sticky booking button container */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        {/* Safe area for notch/home indicator */}
        <div className="bg-light-200 border-t border-secondary-200 shadow-lg">
          <div className="flex items-center gap-2 px-3 py-3">
            {/* Primary CTA: Booking button */}
            <Link
              href="/booking"
              onClick={handleBooking}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 h-11 rounded-lg bg-primary-500 text-white font-medium text-base hover:bg-primary-600 active:bg-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Book an appointment"
            >
              Book Now
            </Link>

            {/* Dismiss button - icon only, 44px touch target */}
            <button
              onClick={handleDismiss}
              className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-warm-gray-100 active:bg-warm-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2"
              aria-label="Dismiss booking button"
              type="button"
            >
              <svg
                className="w-5 h-5 text-warm-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom spacing on mobile to prevent content overlap */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  )
}
