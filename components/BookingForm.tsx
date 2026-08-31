'use client'

import { useState } from 'react'

type FormStep = 'contact' | 'concern' | 'confirmation'

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    preferredTime: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNextStep = () => {
    if (currentStep === 'contact') {
      if (formData.name && formData.email && formData.phone) {
        setCurrentStep('concern')
      }
    } else if (currentStep === 'concern') {
      if (formData.concern && formData.preferredTime) {
        setCurrentStep('confirmation')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', concern: '', preferredTime: '' })
          setCurrentStep('contact')
          setSubmitSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Submission error:', error)
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
            Let's start with the basics
          </h3>

          <div>
            <label htmlFor="name" className="form-label">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jane Doe"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jane@example.com"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="form-label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              className="form-input"
              required
            />
          </div>

          <p className="text-sm text-warm-gray-500 mt-6">
            * Required fields. I'll reach out within 24 hours to confirm your consultation.
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
            <label htmlFor="concern" className="form-label">
              What's your primary concern? *
            </label>
            <textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleInputChange}
              placeholder="Share what's been on your mind... (just a few sentences is fine)"
              className="form-input h-32 resize-none"
              required
            />
            <p className="text-sm text-warm-gray-500 mt-2">
              This helps me understand what you're navigating.
            </p>
          </div>

          <div>
            <label htmlFor="preferredTime" className="form-label">
              When are you usually available? *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select a time preference</option>
              <option value="morning">Morning (8am-12pm)</option>
              <option value="afternoon">Afternoon (12pm-5pm)</option>
              <option value="evening">Evening (5pm-8pm)</option>
              <option value="weekends">Weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {currentStep === 'confirmation' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            Ready to book?
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

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Next Steps:</strong> I'll review your information and send you a confirmation email within 24 hours with available times for our free 15-minute consultation call.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="consent" className="mt-1" required />
            <label htmlFor="consent" className="text-sm text-warm-gray-600">
              I agree to be contacted by email and phone. I've read and understand the privacy policy.
            </label>
          </div>
        </div>
      )}

      {/* Success Message */}
      {submitSuccess && (
        <div className="card bg-green-50 border border-green-200 animate-fade-in-up">
          <p className="text-green-900 font-semibold">
            ✓ Thank you! I've received your information. You'll hear from me within 24 hours.
          </p>
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
            className="btn btn-outline"
          >
            Back
          </button>
        )}

        {currentStep !== 'confirmation' && (
          <button
            type="button"
            onClick={handleNextStep}
            className="btn btn-primary ml-auto"
          >
            Continue
          </button>
        )}

        {currentStep === 'confirmation' && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Complete Booking'}
          </button>
        )}
      </div>
    </form>
  )
}
