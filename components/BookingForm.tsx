'use client'

import { useState } from 'react'

type FormStep = 'contact' | 'concern' | 'confirmation'

interface PreCommitmentData {
  whatBringsYou: string
  hopingTherapyHelps: string
  firstTimeTherapy: boolean | null
  preferences: string
}

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  concern?: string
  preferredTime?: string
  consent?: string
}

interface FieldTouched {
  name?: boolean
  email?: boolean
  phone?: boolean
  concern?: boolean
  preferredTime?: boolean
  consent?: boolean
}

interface BookingFormProps {
  preCommitmentData?: PreCommitmentData | null
}

export default function BookingForm({ preCommitmentData }: BookingFormProps = {}) {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    preferredTime: '',
    consent: false,
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [fieldTouched, setFieldTouched] = useState<FieldTouched>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length >= 10
  }

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2
  }

  const validateField = (name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && !validateName(value as string))) {
          return 'Please enter a valid name (at least 2 characters)'
        }
        break
      case 'email':
        if (!value || (typeof value === 'string' && !validateEmail(value as string))) {
          return 'Please enter a valid email address'
        }
        break
      case 'phone':
        if (!value || (typeof value === 'string' && !validatePhone(value as string))) {
          return 'Please enter a valid phone number (at least 10 digits)'
        }
        break
      case 'concern':
        if (!value || (typeof value === 'string' && (value as string).trim().length < 10)) {
          return 'Please provide at least 10 characters describing your concern'
        }
        break
      case 'preferredTime':
        if (!value) {
          return 'Please select a preferred time'
        }
        break
      case 'consent':
        if (!value) {
          return 'You must agree to the terms to proceed'
        }
        break
    }
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }))

    // Real-time validation
    if (fieldTouched[name as keyof FieldTouched]) {
      const error = validateField(name, newValue)
      setFieldErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFieldTouched(prev => ({
      ...prev,
      [name]: true,
    }))

    const error = validateField(name, fieldValue)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error,
    }))
  }

  const validateStep = (step: FormStep): boolean => {
    const errors: FieldErrors = {}

    if (step === 'contact') {
      errors.name = validateField('name', formData.name)
      errors.email = validateField('email', formData.email)
      errors.phone = validateField('phone', formData.phone)
    } else if (step === 'concern') {
      errors.concern = validateField('concern', formData.concern)
      errors.preferredTime = validateField('preferredTime', formData.preferredTime)
    } else if (step === 'confirmation') {
      errors.consent = validateField('consent', formData.consent)
    }

    const filteredErrors = Object.fromEntries(
      Object.entries(errors).filter(([, v]) => v !== undefined)
    )

    if (Object.keys(filteredErrors).length > 0) {
      setFieldErrors(filteredErrors)
      setFieldTouched({
        name: true,
        email: true,
        phone: true,
        concern: true,
        preferredTime: true,
        consent: true,
      })
      return false
    }

    return true
  }

  const handleNextStep = () => {
    if (currentStep === 'contact' && validateStep('contact')) {
      setCurrentStep('concern')
      setFieldErrors({})
    } else if (currentStep === 'concern' && validateStep('concern')) {
      setCurrentStep('confirmation')
      setFieldErrors({})
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate confirmation step
    if (!validateStep('confirmation')) {
      setSubmitError('Please agree to the terms to proceed')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFieldErrors({})
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', concern: '', preferredTime: '', consent: false })
          setCurrentStep('contact')
          setSubmitSuccess(false)
          setFieldTouched({})
        }, 3000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitError(errorData.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Progress indicators */}
      <div className="flex gap-4 mb-8">
        {['contact', 'concern', 'confirmation'].map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                currentStep === step || ['contact', 'concern'].includes(currentStep)
                  ? 'bg-sage-400 text-white'
                  : 'bg-warm-gray-200 text-warm-gray-600'
              }`}
            >
              {index + 1}
            </div>
            {index < 2 && <div className="hidden sm:block w-8 h-1 bg-warm-gray-200"></div>}
          </div>
        ))}
      </div>

      {/* Step 1: Contact Information */}
      {currentStep === 'contact' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            Let&apos;s start with the basics
          </h3>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="name" className="form-label">
                Your Name *
              </label>
              {formData.name && !fieldErrors.name && fieldTouched.name && (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="Jane Doe"
              className={`form-input transition-all ${
                fieldTouched.name
                  ? fieldErrors.name
                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                    : 'border-green-500 bg-green-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.name && !!fieldErrors.name}
              aria-describedby={fieldTouched.name && fieldErrors.name ? 'name-error' : undefined}
              required
            />
            {fieldTouched.name && fieldErrors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-2 font-medium">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              {formData.email && !fieldErrors.email && fieldTouched.email && (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="jane@example.com"
              className={`form-input transition-all ${
                fieldTouched.email
                  ? fieldErrors.email
                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                    : 'border-green-500 bg-green-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.email && !!fieldErrors.email}
              aria-describedby={fieldTouched.email && fieldErrors.email ? 'email-error' : undefined}
              required
            />
            {fieldTouched.email && fieldErrors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-2 font-medium">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              {formData.phone && !fieldErrors.phone && fieldTouched.phone && (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="(555) 123-4567"
              className={`form-input transition-all ${
                fieldTouched.phone
                  ? fieldErrors.phone
                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                    : 'border-green-500 bg-green-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.phone && !!fieldErrors.phone}
              aria-describedby={fieldTouched.phone && fieldErrors.phone ? 'phone-error' : undefined}
              required
            />
            {fieldTouched.phone && fieldErrors.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-2 font-medium">
                {fieldErrors.phone}
              </p>
            )}
          </div>

          <p className="text-sm text-warm-gray-500 mt-6">
            * Required fields. I&apos;ll reach out within 24 hours to confirm your consultation.
          </p>
        </div>
      )}

      {/* Step 2: Primary Concern */}
      {currentStep === 'concern' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            What brings you here?
          </h3>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="concern" className="form-label">
                What&apos;s your primary concern? *
              </label>
              {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="Share what&apos;s been on your mind... (just a few sentences is fine)"
              className={`form-input h-32 resize-none transition-all ${
                fieldTouched.concern
                  ? fieldErrors.concern
                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                    : 'border-green-500 bg-green-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.concern && !!fieldErrors.concern}
              aria-describedby={fieldTouched.concern && fieldErrors.concern ? 'concern-error' : 'concern-help'}
              required
            />
            {fieldTouched.concern && fieldErrors.concern ? (
              <p id="concern-error" className="text-red-600 text-sm mt-2 font-medium">
                {fieldErrors.concern}
              </p>
            ) : (
              <p id="concern-help" className="text-sm text-warm-gray-500 mt-2">
                This helps me understand what you&apos;re navigating.
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="preferredTime" className="form-label">
                When are you usually available? *
              </label>
              {formData.preferredTime && !fieldErrors.preferredTime && fieldTouched.preferredTime && (
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              className={`form-input transition-all ${
                fieldTouched.preferredTime
                  ? fieldErrors.preferredTime
                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                    : 'border-green-500 bg-green-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.preferredTime && !!fieldErrors.preferredTime}
              aria-describedby={fieldTouched.preferredTime && fieldErrors.preferredTime ? 'preferredTime-error' : undefined}
              required
            >
              <option value="">Select a time preference</option>
              <option value="morning">Morning (8am-12pm)</option>
              <option value="afternoon">Afternoon (12pm-5pm)</option>
              <option value="evening">Evening (5pm-8pm)</option>
              <option value="weekends">Weekends</option>
              <option value="flexible">Flexible</option>
            </select>
            {fieldTouched.preferredTime && fieldErrors.preferredTime && (
              <p id="preferredTime-error" className="text-red-600 text-sm mt-2 font-medium">
                {fieldErrors.preferredTime}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {currentStep === 'confirmation' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            Almost ready to book
          </h3>

          <div className="card bg-sage-50 border border-sage-200">
            <h4 className="font-semibold text-warm-gray-900 mb-4">Your Information</h4>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              <p><span className="font-medium">Primary Concern:</span> {formData.concern}</p>
              <p><span className="font-medium">Preferred Time:</span> {formData.preferredTime}</p>
            </div>
          </div>

          {/* MICROCOPY OPTIMIZATION: Reassurance moved UP, before CTA - addresses trust anxiety before submission */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex gap-3">
              <span className="text-lg flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-semibold text-green-900">100% confidential &amp; HIPAA-protected</p>
                <p className="text-xs text-green-800 mt-1">Your privacy and trust matter. Everything you share is secure and stays between us.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-5">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">What happens next</p>
                  <p className="text-xs text-warm-gray-600 mt-1">I&apos;ll review your information and respond within 24 hours with available times for our free 15-minute call. Most people meet with me within 1-2 weeks.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xl">📋</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">No commitment yet</p>
                  <p className="text-xs text-warm-gray-600 mt-1">This is just a chance to connect and see if we&apos;re a good fit. You decide after our call.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex items-start gap-3 p-4 rounded-lg transition-all ${
            fieldTouched.consent && fieldErrors.consent
              ? 'bg-red-50 border border-red-300'
              : ''
          }`}>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              className="mt-1.5 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              style={{ minWidth: '56px', minHeight: '56px', padding: '16px', appearance: 'none', WebkitAppearance: 'none' }}
              aria-invalid={fieldTouched.consent && !!fieldErrors.consent}
              aria-describedby={fieldTouched.consent && fieldErrors.consent ? 'consent-error' : undefined}
            />
            <label htmlFor="consent" className="text-sm text-warm-gray-600 cursor-pointer flex-1">
              I agree to be contacted by email and phone. I&apos;ve read and understand the privacy policy.
            </label>
          </div>
          {fieldTouched.consent && fieldErrors.consent && (
            <p id="consent-error" className="text-red-600 text-sm font-medium">
              {fieldErrors.consent}
            </p>
          )}
        </div>
      )}

      {/* Success Message */}
      {submitSuccess && (
        <div className="card bg-green-50 border-2 border-green-400 animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div className="flex-1">
              <p className="text-green-900 font-semibold mb-1">
                Booking submitted successfully!
              </p>
              <p className="text-green-800 text-sm">
                Thank you! I&apos;ve received your information. You&apos;ll receive a confirmation email within 24 hours with available times for your free 15-minute consultation call.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="card bg-red-50 border-2 border-red-400 animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠</span>
            <div className="flex-1">
              <p className="text-red-900 font-semibold mb-1">
                Something went wrong
              </p>
              <p className="text-red-800 text-sm">
                {submitError}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between pt-6 border-t border-warm-gray-200">
        {currentStep !== 'contact' && (
          <button
            type="button"
            onClick={() => {
              if (currentStep === 'concern') setCurrentStep('contact')
              if (currentStep === 'confirmation') setCurrentStep('concern')
            }}
            className="btn btn-outline transition-all hover:shadow-md active:shadow-sm"
          >
            Back
          </button>
        )}

        {currentStep !== 'confirmation' && (
          <button
            type="button"
            onClick={handleNextStep}
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        )}

        {currentStep === 'confirmation' && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '⏳ Submitting...' : 'Secure My Consultation'}
          </button>
        )}
      </div>
    </form>
  )
}
