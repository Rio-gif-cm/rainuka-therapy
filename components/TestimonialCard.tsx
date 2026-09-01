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
      <div className="card">
        {/* Star Rating Display */}
        <div className="mb-3 flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i} style={{ color: '#6b944f', fontSize: '1.125rem' }}>
              ★
            </span>
          ))}
        </div>

        <p className="text-warm-gray-600 mb-4 italic">"{quote}"</p>
        <div>
          <p className="font-semibold text-warm-gray-900">— {author}</p>
          {context && <p className="text-sm text-warm-gray-500">{context}</p>}
        </div>
      </div>
    </>
  )
}
