'use client'

import { colors } from '@/app/styles'

/**
 * SectionDivider Component
 * Subtle visual break between content sections.
 * Helps reduce cognitive load by creating "calm states" between concept blocks.
 * 
 * Usage: <SectionDivider margin="3rem" />
 */
interface SectionDividerProps {
  margin?: string // Space around divider (default "2rem")
  color?: string // Line color (default burgundy-200)
}

export default function SectionDivider({ 
  margin = '2rem', 
  color = colors.sage[200] 
}: SectionDividerProps) {
  return (
    <div style={{
      margin: `${margin} 0`,
      height: '1px',
      backgroundColor: color,
      opacity: 0.8,
    }} 
    role="separator" 
    aria-hidden="true"
    />
  )
}
