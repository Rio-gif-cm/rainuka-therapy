'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px on mobile
      const shouldShow = window.scrollY > 500 && window.innerWidth < 768;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-warm-gray-900 border-t border-warm-gray-300 px-4 py-3 shadow-lg z-40">
      <Link 
        href="/booking"
        className="block w-full py-3 px-4 bg-primary-500 text-white font-semibold text-center rounded-lg hover:bg-primary-600 transition-colors text-base"
      >
        Book a Free Consultation
      </Link>
      <p className="text-xs text-warm-gray-400 text-center mt-2">
        30-minute video call, no commitment
      </p>
    </div>
  );
}
