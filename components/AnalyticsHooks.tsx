'use client';

import { useEffect, useRef } from 'react';
import { trackSectionEngagement, trackSectionView, GA_ID } from '@/lib/analytics';

/**
 * Hook to track when a section enters/leaves viewport
 * Triggers section_view event and engagement timing
 * 
 * Usage:
 * const ref = useSectionTracking('hero_section');
 * <section ref={ref}>...</section>
 */
export function useSectionTracking(sectionName: string, scrollThreshold = 0.5) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);
  const enterTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!GA_ID || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          // Section entered viewport
          hasTracked.current = true;
          enterTimeRef.current = Date.now();
          
          // Get scroll depth at time of view
          const scrollDepth = Math.round(
            (window.scrollY / document.documentElement.scrollHeight) * 100
          );
          
          trackSectionView(sectionName, scrollDepth);
        } else if (!entry.isIntersecting && hasTracked.current) {
          // Section left viewport - track engagement time
          const timeSpent = Math.round((Date.now() - enterTimeRef.current) / 1000);
          if (timeSpent > 0) {
            trackSectionEngagement(sectionName, timeSpent);
          }
          hasTracked.current = false;
        }
      },
      { threshold: scrollThreshold }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sectionName]);

  return sectionRef;
}

/**
 * Hook to track form field interactions and submission
 * 
 * Usage:
 * useFormTracking('booking_form', {
 *   onStart: () => console.log('form started'),
 *   onSubmit: (data) => console.log('form submitted', data)
 * });
 */
interface FormTrackingOptions {
  onStart?: () => void;
  onSubmit?: () => void;
  onError?: (error: string) => void;
}

export function useFormTracking(formName: string, options?: FormTrackingOptions) {
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!GA_ID) return;

    const handleFormStart = (e: Event) => {
      if (!hasStarted.current && e.target instanceof HTMLInputElement) {
        hasStarted.current = true;

        // Import here to avoid circular dependencies
        import('@/lib/analytics').then(({ trackFormStart }) => {
          trackFormStart(formName);
          options?.onStart?.();
        });
      }
    };

    const formElement = document.querySelector(`form[name="${formName}"]`);
    if (!formElement) {
      console.warn(`[Analytics] Form with name "${formName}" not found`);
      return;
    }

    // Listen for first input interaction
    formElement.addEventListener('focusin', handleFormStart);

    return () => {
      formElement.removeEventListener('focusin', handleFormStart);
    };
  }, [formName, options]);

  return { hasStarted: hasStarted.current };
}
