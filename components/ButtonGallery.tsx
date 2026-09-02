'use client'

import React, { useState } from 'react'
import { EnhancedButton, EnhancedFormInput, EnhancedTextarea } from './EnhancedComponents.v2'

/**
 * BUTTON & INTERACTIVE ELEMENTS GALLERY
 * 
 * Interactive demo of all button variants, sizes, and states.
 * Useful for testing accessibility, visual feedback, and consistency.
 * 
 * Features:
 * - All size variants (xs, sm, md, lg, xl)
 * - All visual variants (primary, secondary, outline)
 * - State demos (hover, focus, disabled, loading)
 * - Form input examples with validation states
 * - Responsive layout
 */

export default function ButtonGallery() {
  const [loadingButtons, setLoadingButtons] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formTouched, setFormTouched] = useState<Record<string, boolean>>({})

  const toggleLoading = (id: string) => {
    setLoadingButtons(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFieldBlur = (field: string) => {
    setFormTouched(prev => ({
      ...prev,
      [field]: true,
    }))

    // Basic validation
    const newErrors = { ...formErrors }
    if (field === 'email' && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    } else {
      delete newErrors.email
    }
    setFormErrors(newErrors)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'var(--font-inter)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
        Button & Interactive Elements Gallery
      </h1>
      <p style={{ color: 'var(--warm-gray-700)', marginBottom: '3rem' }}>
        Test all button variants, sizes, and interactive states. Use keyboard navigation (Tab) to test focus states.
      </p>

      {/* ========================================
          BUTTON SIZES
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Button Sizes
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <EnhancedButton size="xs">Extra Small (xs)</EnhancedButton>
          <EnhancedButton size="sm">Small (sm)</EnhancedButton>
          <EnhancedButton size="md">Medium (md)</EnhancedButton>
          <EnhancedButton size="lg">Large (lg)</EnhancedButton>
          <EnhancedButton size="xl">Extra Large (xl)</EnhancedButton>
        </div>
      </section>

      {/* ========================================
          PRIMARY VARIANT
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Primary Variant (Brand Green)
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Default State
            </h3>
            <EnhancedButton variant="primary">Primary Button</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Hover State (Move mouse over)
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Darker green + lift + shadow
            </p>
            <EnhancedButton variant="primary">Hover Me</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Focus State (Tab to focus)
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ White outline ring (WCAG AA)
            </p>
            <EnhancedButton variant="primary">
              Focus Ring Visible
            </EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Disabled State
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Lighter color (sage-300) + not clickable
            </p>
            <EnhancedButton variant="primary" disabled>
              Disabled
            </EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Loading State
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Spinner + waiting cursor
            </p>
            <EnhancedButton
              variant="primary"
              loading={loadingButtons['primary-loading']}
              loadingText="Submitting..."
              onClick={() => toggleLoading('primary-loading')}
            >
              Click to Load
            </EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Full Width
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Fills parent container
            </p>
            <EnhancedButton variant="primary" fullWidth>
              Full Width Button
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* ========================================
          SECONDARY VARIANT (REDESIGNED)
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Secondary Variant (Light Green) — NEW DESIGN
        </h2>
        <p style={{ color: 'var(--warm-gray-600)', marginBottom: '1rem' }}>
          De-emphasized secondary actions. Clear visual hierarchy with primary buttons.
        </p>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Default State
            </h3>
            <EnhancedButton variant="secondary">Secondary Button</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Hover State
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Darker background + border
            </p>
            <EnhancedButton variant="secondary">Hover Me</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Disabled State
            </h3>
            <EnhancedButton variant="secondary" disabled>
              Disabled
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* ========================================
          OUTLINE VARIANT
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Outline Variant
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Default State
            </h3>
            <EnhancedButton variant="outline">Outline Button</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Hover State
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray-600)', marginBottom: '0.5rem' }}>
              ↓ Light background fill
            </p>
            <EnhancedButton variant="outline">Hover Me</EnhancedButton>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--warm-gray-700)' }}>
              Disabled State
            </h3>
            <EnhancedButton variant="outline" disabled>
              Disabled
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* ========================================
          FORM INPUTS WITH VALIDATION STATES
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Form Inputs with Validation States
        </h2>
        <div style={{ maxWidth: '500px' }}>
          <EnhancedFormInput
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onBlur={() => handleFieldBlur('name')}
            required
          />

          <EnhancedFormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            onBlur={() => handleFieldBlur('email')}
            error={formTouched.email && formErrors.email ? formErrors.email : undefined}
            success={formTouched.email && !formErrors.email && formData.email ? true : false}
            successMessage="Email looks good!"
            required
          />

          <EnhancedTextarea
            label="Message"
            name="message"
            placeholder="Tell us more..."
            value={formData.message}
            onChange={(e) => handleFieldChange('message', e.target.value)}
            onBlur={() => handleFieldBlur('message')}
            success={formData.message.length > 10}
            successMessage={formData.message.length > 10 ? 'Great message!' : undefined}
          />

          <EnhancedButton variant="primary" fullWidth size="lg" type="submit">
            Submit Form
          </EnhancedButton>
        </div>
      </section>

      {/* ========================================
          ACCESSIBILITY TESTING
          ======================================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Accessibility Testing
        </h2>
        <div style={{
          backgroundColor: 'var(--sage-50)',
          padding: '2rem',
          borderRadius: '0.75rem',
          border: '1px solid var(--sage-200)',
        }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--sage-700)' }}>
            Keyboard Navigation
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--warm-gray-700)' }}>
            Use <strong>Tab</strong> to move between buttons. All interactive elements should receive focus.
            Press <strong>Enter</strong> or <strong>Space</strong> to activate.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <EnhancedButton variant="primary">Tab Test 1</EnhancedButton>
            <EnhancedButton variant="secondary">Tab Test 2</EnhancedButton>
            <EnhancedButton variant="outline">Tab Test 3</EnhancedButton>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--sage-700)' }}>
            Color Contrast
          </h3>
          <p style={{ color: 'var(--warm-gray-700)' }}>
            All button text meets WCAG AA 4.5:1 contrast requirement.
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--sage-700)' }}>
            Screen Reader Testing
          </h3>
          <p style={{ color: 'var(--warm-gray-700)' }}>
            Loading buttons include <code>aria-busy="true"</code>.
            Disabled buttons include <code>disabled</code> attribute.
          </p>
        </div>
      </section>

      {/* ========================================
          IMPLEMENTATION CHECKLIST
          ======================================== */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
          Audit Improvements Implemented
        </h2>
        <ul style={{ maxWidth: '600px', lineHeight: '2' }}>
          <li>✅ #1: Add xl size variant (1.25rem padding, 64px height)</li>
          <li>✅ #2: Add xs size variant (0.375rem padding, 36px height)</li>
          <li>✅ #3: Add fullWidth prop for form contexts</li>
          <li>✅ #4: Primary button hover background shift (sage-600 → sage-700)</li>
          <li>✅ #5: Enhanced disabled state with cursor behavior</li>
          <li>✅ #6: Loading state with aria-busy attribute</li>
          <li>✅ #7: Focus-visible ring styling (WCAG AA compliant)</li>
          <li>✅ #9: Enhanced disabled state styling (color shift)</li>
          <li>✅ #11: Robust loading animation keyframes (spin)</li>
          <li>✅ #12: Loading text option (loadingText prop)</li>
          <li>✅ #14: Redesigned secondary variant (light background)</li>
        </ul>
      </section>
    </div>
  )
}
