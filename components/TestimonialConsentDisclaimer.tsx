'use client'

import { colors } from '@/app/styles'

export default function TestimonialConsentDisclaimer() {
  return (
    <div
      style={{
        backgroundColor: colors.sage[50],
        borderLeft: `4px solid ${colors.sage[600]}`,
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '0.25rem',
      }}
    >
      <p
        style={{
          fontSize: '0.875rem',
          color: colors.warmGray[700],
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        <strong>Privacy Notice (PIPEDA):</strong> All testimonials shared here are from clients who gave explicit written consent for their use. 
        In compliance with PIPEDA (Personal Information Protection and Electronic Documents Act), clients retain full control of their personal information and may request modification or removal of their testimonial at any time by contacting us at [contact email/phone]. 
        We do not share client information for marketing purposes without prior written consent.
      </p>
    </div>
  )
}
