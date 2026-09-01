/**
 * Image Gallery Component
 * Features PEI-inspired and therapeutic imagery
 */

'use client'

import { colors, styles } from '@/app/styles'

export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Peaceful coastal landscape - PEI-inspired',
      title: 'Finding Calm',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      alt: 'Woman in thoughtful reflection',
      title: 'Self-Discovery',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516684303652-48a9ae4d44ed?w=800&h=600&fit=crop',
      alt: 'Supportive hands together',
      title: 'Connection',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=600&fit=crop',
      alt: 'Ocean waves at sunrise',
      title: 'PEI Coastal Beauty',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1500995617113-cf789436313d?w=800&h=600&fit=crop',
      alt: 'Woman meditating in nature',
      title: 'Inner Peace',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      alt: 'Scenic coastal cliffs',
      title: 'Natural Strength',
    },
  ]

  return (
    <section style={{ ...styles.section, backgroundColor: colors.warmGray[50] }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, textAlign: 'center', marginBottom: '3rem' }}>
          A Visual Journey
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {images.map((image) => (
            <div
              key={image.id}
              style={{
                ...styles.card,
                overflow: 'hidden',
                padding: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ ...styles.h3, marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                  {image.title}
                </h3>
                <p style={{ ...styles.p, fontSize: '0.9rem', color: colors.warmGray[600], margin: 0 }}>
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
