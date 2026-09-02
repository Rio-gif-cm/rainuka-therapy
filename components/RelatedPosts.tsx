'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface RelatedPost {
  path: string
  label: string
  description: string
}

interface SpecialtyAccent {
  accent: string
  accentText: string
  accentDeep: string
  tint: string
  tintStrong: string
  heroTint: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  accent?: string | SpecialtyAccent
  title?: string
}

export default function RelatedPosts({
  posts,
  accent = 'var(--neutral-ash-600)',
  title = 'Explore Related Pages'
}: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  // Extract color from accent object if needed
  const accentColor = typeof accent === 'object' ? accent.accentText : accent

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.path}
              className="group block p-6 border-l-4 hover:shadow-lg transition-all duration-200"
              style={{ borderColor: accentColor }}
              data-testid={`related-post-${index}`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-opacity-80" style={{ color: accentColor }}>
                {post.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.description}
              </p>
              <span
                className="inline-block mt-4 text-sm font-medium transition-transform group-hover:translate-x-1 duration-200"
                style={{ color: accentColor }}
              >
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
