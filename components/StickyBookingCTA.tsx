import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * StickyBookingCTA
 * 
 * Global floating CTA button that appears after user scrolls past hero section.
 * Positioned fixed top-right, always accessible.
 * Uses CSS transitions instead of framer-motion for better performance.
 * 
 * Usage: Add to app/layout.tsx (appears on all pages)
 */
export function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px (past hero on most pages)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-6 right-6 z-40
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
      `}
    >
      <Link href="/booking">
        <button
          className="
            flex items-center gap-2 
            bg-burgundy-600 hover:bg-burgundy-700
            text-white font-semibold
            px-5 py-3 rounded-full
            shadow-lg hover:shadow-xl
            transition-all duration-200
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-600
          "
          aria-label="Book a free consultation call"
        >
          <span>📞</span>
          <span className="hidden sm:inline">Book Free Call</span>
          <span className="sm:hidden">Book Now</span>
        </button>
      </Link>
    </div>
  );
}
