/**
 * EXAMPLE: Enhanced BookingForm Integration
 * 
 * This file shows how to refactor BookingForm.tsx to use EnhancedFormInput
 * and EnhancedButton components for smoother, more delightful micro-interactions.
 * 
 * Key improvements:
 * - Animated success checkmarks on valid fields
 * - Smooth error message slide-in
 * - Enhanced button hover/press feedback
 * - Consistent motion system (250ms base, 150ms fast)
 * - Full keyboard navigation support
 * - Respects prefers-reduced-motion
 */

import { useState } from 'react'
import { EnhancedFormInput, EnhancedButton, EnhancedTextarea } from '@/components/EnhancedComponents'

type FormStep = 'contact' | 'concern' | 'confirmation'

export function BookingFormExample() {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
  })
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [fieldTouched, setFieldTouched] = useState<Record<string, boolean>>({})
  const [validFields, setValidFields] = useState<Record<string, boolean>>({})

  // Validation functions
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length >= 10
  }

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!validateName(value)) {
          return "Your name helps me know how to greet you."
        }
        break
      case 'email':
        if (!validateEmail(value)) {
          return "I'll send your confirmation to this email. Double-check it's correct."
        }
        break
      case 'phone':
        if (!validatePhone(value)) {
          return "Please enter a complete phone number (at least 10 digits)."
        }
        break
      case 'concern':
        if (value && value.trim().length < 10) {
          return "Share a bit about what's on your mind-even one sentence helps."
        }
        break
    }
    return undefined
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Real-time validation if field was touched
    if (fieldTouched[name]) {
      const error = validateField(name, value)
      setFieldErrors(prev => ({
        ...prev,
        [name]: error || '',
      }))
      setValidFields(prev => ({
        ...prev,
        [name]: !error && value.length > 0,
      }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFieldTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name, value)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error || '',
    }))
    setValidFields(prev => ({
      ...prev,
      [name]: !error && value.length > 0,
    }))
  }

  const handleStepChange = (newStep: FormStep) => {
    // Validate current step before moving
    const errors: Record<string, string> = {}

    if (currentStep === 'contact') {
      errors.name = validateField('name', formData.name) || ''
      errors.email = validateField('email', formData.email) || ''
      errors.phone = validateField('phone', formData.phone) || ''

      const hasErrors = Object.values(errors).some(e => e)
      if (hasErrors) {
        setFieldErrors(errors)
        setFieldTouched({ name: true, email: true, phone: true })
        return
      }
    }

    // Animate step transition
    setCurrentStep(newStep)
  }

  // Contact Step
  if (currentStep === 'contact') {
    return (
      <div
        className="form-step-enter"
        style={{
          animation: 'stepEnterFromRight var(--duration-base) var(--ease-standard) both',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem' }}>Let's Get Started</h2>

        <EnhancedFormInput
          label="Your Name"
          name="name"
          type="text"
          placeholder="First or full name-whatever feels right"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldErrors.name}
          success={validFields.name}
          successMessage="Name confirmed"
          required
        />

        <EnhancedFormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldErrors.email}
          success={validFields.email}
          successMessage="Email confirmed"
          required
        />

        <EnhancedFormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldErrors.phone}
          success={validFields.phone}
          successMessage="Phone confirmed"
          required
        />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <EnhancedButton
            type="button"
            variant="primary"
            onClick={() => handleStepChange('concern')}
          >
            Continue
          </EnhancedButton>
          <EnhancedButton
            type="button"
            variant="outline"
            onClick={() => console.log('Cancel')}
          >
            Cancel
          </EnhancedButton>
        </div>
      </div>
    )
  }

  // Concern Step
  if (currentStep === 'concern') {
    return (
      <div
        className="form-step-enter"
        style={{
          animation: 'stepEnterFromRight var(--duration-base) var(--ease-standard) both',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem' }}>What's on your mind?</h2>

        <EnhancedTextarea
          label="Tell me what brings you in"
          name="concern"
          placeholder="Share what's on your mind. Even one sentence helps me prepare."
          value={formData.concern}
          onChange={handleChange}
          onBlur={handleBlur}
          error={fieldErrors.concern}
          success={validFields.concern}
          successMessage="Got it-let's talk about this"
          rows={5}
        />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <EnhancedButton
            type="button"
            variant="outline"
            onClick={() => handleStepChange('contact')}
          >
            Back
          </EnhancedButton>
          <EnhancedButton
            type="button"
            variant="primary"
            onClick={() => handleStepChange('confirmation')}
          >
            Next: Review & Confirm
          </EnhancedButton>
        </div>
      </div>
    )
  }

  // Confirmation Step
  if (currentStep === 'confirmation') {
    return (
      <div
        className="form-step-enter"
        style={{
          animation: 'stepEnterFromRight var(--duration-base) var(--ease-standard) both',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem' }}>Ready to book?</h2>

        <div
          style={{
            padding: '1.5rem',
            backgroundColor: 'var(--burgundy-50)',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            border: '1px solid var(--burgundy-100)',
          }}
        >
          <p>
            <strong>{formData.name}</strong>
          </p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          {formData.concern && (
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--warm-gray-700)' }}>
              "{formData.concern}"
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <EnhancedButton
            type="button"
            variant="outline"
            onClick={() => handleStepChange('concern')}
          >
            Back
          </EnhancedButton>
          <EnhancedButton
            type="submit"
            variant="primary"
            onClick={() => console.log('Submitted:', formData)}
          >
            Confirm & Book
          </EnhancedButton>
        </div>
      </div>
    )
  }

  return null
}

export default BookingFormExample
