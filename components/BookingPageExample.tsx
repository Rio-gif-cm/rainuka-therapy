/**
 * EXAMPLE: Booking Page with GA4 Event Tracking
 * 
 * This example shows how to integrate GA4 tracking into existing pages.
 * Copy this pattern to other pages/forms as needed.
 */

'use client';

import { useState } from 'react';
import { trackCTAClick, trackFormSubmission, trackFormError, GA_ID } from '@/lib/analytics';
import { useSectionTracking } from '@/components/AnalyticsHooks';

export default function BookingPageExample() {
  const sectionRef = useSectionTracking('booking_section');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBookingClick = () => {
    // Track CTA click
    trackCTAClick('book_appointment_button', 'booking');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission
      const formData = new FormData(e.currentTarget);
      
      // Validate (example)
      if (!formData.get('email')) {
        throw new Error('Email is required');
      }

      // Track form submission attempt
      trackFormSubmission('booking_form', 'booking');

      // Send to backend (replace with actual API call)
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   body: formData
      // });

      console.log('Form submitted:', Object.fromEntries(formData));
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      
      // Track form error
      trackFormError('booking_form', errorMessage, 'email');
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="booking-section py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Schedule Your Session</h1>
        
        {!GA_ID && (
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-6">
            <p className="text-sm text-yellow-800">
              ⚠️ Analytics not configured. Set <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code> in .env.local
            </p>
          </div>
        )}

        <form onSubmit={handleFormSubmit} name="booking_form" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border rounded"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-2 border rounded"
              placeholder="(555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              What brings you in today?
            </label>
            <select
              id="topic"
              name="topic"
              required
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select a topic</option>
              <option value="perinatal">Perinatal/Postpartum</option>
              <option value="adhd">ADHD</option>
              <option value="career">Career Transitions</option>
              <option value="other">Other</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 p-3 rounded text-red-800">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleBookingClick}
            className="w-full bg-sage-500 hover:bg-sage-600 text-white py-2 rounded font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Questions? <a href="tel:+15551234567" className="text-sage-600 hover:underline" 
            onClick={() => trackCTAClick('phone_call', 'booking')}>
            Call us
          </a>
        </p>
      </div>
    </section>
  );
}
