'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  includeSchema?: boolean
}

/**
 * Breadcrumb Navigation Component
 * Improves SEO, UX clarity, and navigation between specialty pages
 * Includes BreadcrumbList schema.org markup for rich snippets
 * 
 * Usage:
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Services', href: '/#services' },
 *   { label: 'ADHD Therapy' }
 * ]} includeSchema />
 */
export function Breadcrumb({ items, className = '', includeSchema = true }: BreadcrumbProps) {
  // Add BreadcrumbList schema to head
  useEffect(() => {
    if (includeSchema && items.length > 0) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://rainukatherapy.com'
      
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.href ? `${baseUrl}${item.href}` : undefined,
        })).filter(item => item.item), // Only include items with URLs
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.innerHTML = JSON.stringify(schemaData)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [items, includeSchema])

  return (
    <nav
      className={`flex items-center gap-2 text-sm text-sage-600 mb-8 ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-sage-400" aria-hidden />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-sage-900 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-sage-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb
