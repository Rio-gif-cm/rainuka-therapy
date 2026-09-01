'use client'

import React from 'react'
import { colors, styles } from '@/app/styles'

interface VerificationBadgeProps {
  platform: string
  verified: boolean
  icon?: string
  url?: string
  label?: string
}

export default function VerificationBadge({
  platform,
  verified,
  icon,
  url,
  label,
}: VerificationBadgeProps) {
  const Badge = () => (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: verified ? colors.sageGreen[50] : colors.warmGray[50],
        border: `2px solid ${verified ? colors.sageGreen[300] : colors.warmGray[300]}`,
        borderRadius: '8px',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: verified ? colors.sageGreen[700] : colors.warmGray[700],
        transition: 'all 0.2s ease',
        cursor: url ? 'pointer' : 'default',
      }}
      onMouseEnter={(e) => {
        if (url) {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${verified ? colors.sageGreen[200] : colors.warmGray[200]}`
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
      }}
    >
      {icon && <span style={{ fontSize: '1rem' }}>{icon}</span>}
      <span>{label || platform}</span>
      {verified && (
        <span style={{ marginLeft: '0.25rem', fontSize: '1.1rem' }}>✓</span>
      )}
    </div>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        title={`View profile on ${platform}`}
      >
        <Badge />
      </a>
    )
  }

  return <Badge />
}
