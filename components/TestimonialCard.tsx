import { ReactNode } from 'react'

interface TestimonialCardProps {
  quote: string
  author: string
  context?: string
  rating?: number
  index: number
  totalReviews?: number
}

export default function TestimonialCard({
  quote,
  author,
  context,
  rating = 5,
  index,
  totalReviews = 8,
}: TestimonialCardProps) {
  // Generate schema for individual review
  const reviewSchema = {
    '@type': 'Review',
    '@id': `#review-${index}`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewBody: quote,
    datePublished: new Date().toISOString().split('T')[0],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <div className="card card-elevated">
        {/* Star Rating Display - Enhanced Visual Weight */}
        <div className="mb-5 flex gap-1.5">
          {[...Array(rating)].map((_, i) => (
            <span
              key={i}
              className="text-burgundy-600 text-2xl drop-shadow-md transition-transform hover:scale-110"
              style={{ 
                textShadow: '0 2px 4px rgba(107, 148, 79, 0.15)',
                letterSpacing: '0.05em'
              }}
              aria-label={`${i + 1} of ${rating} stars`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Quote Section with Icon */}
        <div className="mb-4 relative pl-6">
          {/* Quote Icon - Subtle Sage Accent */}
          <span
            className="absolute left-0 top-0 text-3xl text-burgundy-400 opacity-60 leading-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="text-warm-gray-600 leading-relaxed">
            {quote}
          </p>
        </div>

        {/* Author Attribution - Cleaner Styling */}
        <div className="border-t border-burgundy-100 pt-4">
          <p className="font-semibold text-warm-gray-900 text-base">
            {author}
          </p>
          {context && (
            <p className="text-xs text-warm-gray-500 font-medium tracking-tight mt-1">
              {context}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
