'use client'

import { ReactNode } from 'react'
import { colors, styles } from '@/app/styles'

/**
 * IconHeading Component
 * Combines icon + heading for visual clarity + hierarchy.
 * Reduces cognitive load by creating visual anchors.
 * 
 * Icons paired with text = faster recognition + reduced mental processing
 * 
 * Usage:
 * <IconHeading icon="🧠" level={2}>ADHD Therapy</IconHeading>
 */
interface IconHeadingProps {
  icon: string // Emoji or icon symbol
  level: 1 | 2 | 3 | 4 // H1-H4
  children: ReactNode
  iconSize?: string // Icon font size (default "1.75rem")
  color?: string // Text color (default warmGray-900)
}

export function IconHeading({
  icon,
  level,
  children,
  iconSize = '1.75rem',
  color = colors.warmGray[900],
}: IconHeadingProps) {
  const headingTag = `h${level}` as const
  const headingSizes: Record<1 | 2 | 3 | 4, string> = {
    1: '3rem',
    2: '2rem',
    3: '1.5rem',
    4: '1.25rem',
  }

  const HeadingTag = headingTag as any

  return (
    <HeadingTag
      style={{
        ...styles.h2,
        fontSize: headingSizes[level],
        color,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <span style={{ fontSize: iconSize }} aria-hidden="true">
        {icon}
      </span>
      {children}
    </HeadingTag>
  )
}

/**
 * IconListItem Component
 * Icon + text for list items in "experiences" or "benefits" sections.
 * Checkmark icon signals affirmation ("you're not alone").
 * 
 * Usage:
 * <IconListItem icon="✓" color={colors.sage[600]}>
 *   Late ADHD diagnosis = grief + relief
 * </IconListItem>
 */
interface IconListItemProps {
  icon?: string // Icon (default ✓)
  children: ReactNode
  color?: string // Icon color
  iconSize?: string // Icon font size (default "1.5rem")
}

export function IconListItem({
  icon = '✓',
  children,
  color = colors.sage[600],
  iconSize = '1.5rem',
}: IconListItemProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          fontSize: iconSize,
          color,
          minWidth: iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <p style={{ ...styles.p, color: colors.warmGray[700], marginTop: 0 }}>
        {children}
      </p>
    </div>
  )
}
