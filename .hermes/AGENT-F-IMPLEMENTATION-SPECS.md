# Visual Humanization: Implementation Sketches & Technical Specs

---

## CONCEPT 1: Photo + Handwritten Font

### Component: Enhanced HeroSection

```tsx
// components/HeroSection.tsx (updated)
export default function HeroSection() {
  return (
    <section className="hero-section-enhanced">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/photography/rainuka-hero.jpg"
          alt="Rainuka, LCSW therapist"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Sage overlay (translucent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/60 via-transparent to-warm-gray-50/60" />
      </div>
      
      {/* Content: text-right on desktop, stacked on mobile */}
      <div className="relative z-10 container-base py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:block" /> {/* Spacer for photo */}
        
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-sage-600 mb-2">
            Therapy that fits your actual life
          </p>
          
          {/* Handwritten accent: "Trauma-Informed" */}
          <h1 className="font-caveat text-5xl md:text-7xl text-warm-gray-900 leading-tight mb-4">
            Trauma-Informed
          </h1>
          
          <p className="text-lg text-warm-gray-700 max-w-md mb-8 leading-relaxed">
            Perinatal mental health, adult ADHD diagnosis, and career transitions.
            Telehealth. Sliding scale. Your pace.
          </p>
          
          <div className="flex gap-4">
            <Link href="/booking" className="btn btn-primary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### CSS (tailwind.config.ts)

```ts
export default {
  theme: {
    fontFamily: {
      // Add to existing fontFamily
      caveat: ['Caveat', 'cursive'], // handwritten accent
      geist: ['var(--font-geist-sans)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(248,250,247,0.6), transparent, rgba(237,232,227,0.6))',
      }
    }
  }
}
```

### Asset Requirements
```
/public/photography/
├── rainuka-hero.jpg          (1200x1600px, 180-220KB, optimized)
├── rainuka-hero-mobile.jpg   (400x600px, 40-60KB)
└── rainuka-office.jpg        (1600x900px for ambient backgrounds)
```

### Font Import (app/layout.tsx or globals.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
```

### Accessibility
- Alt text: "Rainuka Oberoi, LCSW, trauma-informed therapist"
- Image serves decorative + informational purpose → include in semantic markup

---

## CONCEPT 2: Avatar Initials + Niche Icons

### Component: TestimonialCard with Avatar

```tsx
interface TestimonialCardProps {
  quote: string
  author: string
  initials: string        // "MC" for Maya C.
  context?: string
  niche?: 'perinatal' | 'adhd' | 'career'
  rating?: number
  index: number
}

export default function TestimonialCard({
  quote,
  author,
  initials,
  niche = 'perinatal',
  rating = 5,
  index,
}: TestimonialCardProps) {
  const nicheIcons = {
    perinatal: '🍃', // or SVG icon
    adhd: '✦',
    career: '→',
  }

  return (
    <div className="card card-elevated">
      {/* Avatar + Author */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar Circle */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
            <span className="font-semibold text-sage-700 text-sm">
              {initials}
            </span>
          </div>
          {/* Niche micro-icon (optional) */}
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border border-sage-100">
            <span className="text-xs">{nicheIcons[niche]}</span>
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-sage-600">★</span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-warm-gray-700 leading-relaxed mb-4">
        {quote}
      </p>

      {/* Author */}
      <div className="border-t border-sage-100 pt-3">
        <p className="font-semibold text-warm-gray-900 text-sm">
          {author}
        </p>
        {context && (
          <p className="text-xs text-sage-600 mt-1">
            {context}
          </p>
        )}
      </div>
    </div>
  )
}
```

### Usage Example

```tsx
// On homepage or case studies
<TestimonialCard
  quote="Rainuka's approach helped me see patterns I couldn't see myself."
  author="Maya C."
  initials="MC"
  niche="perinatal"
  rating={5}
  context="Postpartum anxiety → nervous system regulation"
  index={0}
/>
```

### CSS Enhancements

```css
/* Subtle hover effect on avatar */
.card:hover .avatar {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(107, 148, 79, 0.1);
  transition: all 200ms ease-out;
}
```

---

## CONCEPT 3: SVG Niche Illustrations

### Illustration Set: 3 Custom Icons

```xml
<!-- /public/illustrations/perinatal-icon.svg -->
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .stroke { stroke: #6b944f; stroke-width: 1.5; fill: none; }
      .fill { fill: #d1dcc8; }
    </style>
  </defs>
  
  <!-- Compass rose (grounding) -->
  <circle cx="60" cy="45" r="18" class="stroke"/>
  <line x1="60" y1="27" x2="60" y2="15" class="stroke"/>
  <line x1="78" y1="45" x2="90" y2="45" class="stroke"/>
  <polygon points="60,15 58,22 62,22" class="fill"/>
  
  <!-- Figure cradling -->
  <path d="M 35 60 Q 35 70 40 80 L 50 85 Q 55 70 60 65" class="stroke"/>
  <circle cx="40" cy="55" r="5" class="stroke"/>
  
  <!-- Tender motion lines -->
  <path d="M 25 50 Q 20 45 18 35" class="stroke" stroke-dasharray="2,2"/>
</svg>
```

```xml
<!-- /public/illustrations/adhd-icon.svg -->
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .stroke { stroke: #6b944f; stroke-width: 1.5; fill: none; }
      .fill { fill: #d1dcc8; }
    </style>
  </defs>
  
  <!-- Brain outline -->
  <ellipse cx="60" cy="55" rx="25" ry="28" class="stroke"/>
  <path d="M 50 50 Q 55 45 60 50" class="stroke"/>
  <path d="M 70 50 Q 65 45 60 50" class="stroke"/>
  
  <!-- Orbiting energy dots -->
  <circle cx="85" cy="35" r="3" class="fill"/>
  <circle cx="35" cy="35" r="3" class="fill"/>
  <circle cx="90" cy="60" r="2.5" class="fill"/>
  
  <!-- Orbital paths (subtle) -->
  <circle cx="60" cy="50" r="32" class="stroke" stroke-dasharray="3,3" opacity="0.5"/>
</svg>
```

```xml
<!-- /public/illustrations/career-icon.svg -->
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .stroke { stroke: #6b944f; stroke-width: 1.5; fill: none; }
      .fill { fill: #d1dcc8; }
    </style>
  </defs>
  
  <!-- Winding path -->
  <path d="M 30 85 Q 45 75 50 55 Q 55 35 70 30 Q 85 25 90 40" class="stroke"/>
  
  <!-- Waypoint dots -->
  <circle cx="30" cy="85" r="3" class="fill"/>
  <circle cx="50" cy="55" r="3" class="fill"/>
  <circle cx="90" cy="40" r="3" class="fill"/>
  
  <!-- Beacon/light (top) -->
  <circle cx="90" cy="40" r="8" class="stroke"/>
  <path d="M 98 32 L 105 25" class="stroke"/>
  <path d="M 105 40 L 112 40" class="stroke"/>
</svg>
```

### React Component: NicheIcon

```tsx
interface NicheIconProps {
  niche: 'perinatal' | 'adhd' | 'career'
  size?: number
}

export function NicheIcon({ niche, size = 120 }: NicheIconProps) {
  const iconPaths = {
    perinatal: '/illustrations/perinatal-icon.svg',
    adhd: '/illustrations/adhd-icon.svg',
    career: '/illustrations/career-icon.svg',
  }

  const labels = {
    perinatal: 'Perinatal mental health',
    adhd: 'ADHD therapy',
    career: 'Career transitions',
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={iconPaths[niche]}
        alt={`${labels[niche]} icon`}
        width={size}
        height={size}
        className="transition-transform hover:scale-110"
        loading="lazy"
      />
      <p className="text-sm font-medium text-warm-gray-900 mt-3">
        {labels[niche]}
      </p>
    </div>
  )
}
```

### Usage in Hero Persona Section

```tsx
// In HeroSection.tsx
<div className="grid grid-cols-3 gap-8">
  {personas.map(p => (
    <Link key={p.id} href={p.link} className="hover:opacity-80 transition">
      <NicheIcon niche={p.id as any} size={140} />
    </Link>
  ))}
</div>
```

---

## CONCEPT 4: Video Testimonials

### Component: VideoTestimonial

```tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface VideoTestimonialProps {
  videoUrl: string       // Cloudinary URL
  thumbnailUrl: string
  title: string
  author: string
  niche: string
}

export function VideoTestimonial({
  videoUrl,
  thumbnailUrl,
  title,
  author,
  niche,
}: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="group relative aspect-video rounded-lg overflow-hidden bg-warm-gray-100">
      {/* Thumbnail fallback */}
      <Image
        src={thumbnailUrl}
        alt={`${author} testimonial`}
        fill
        className="object-cover"
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play button overlay (when not playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play()
                setIsPlaying(true)
              }
            }}
            className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center hover:bg-sage-700 transition"
            aria-label="Play video"
          >
            <span className="text-white text-xl">▶</span>
          </button>
        </div>
      )}

      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
        <p className="font-semibold text-sm">{author}</p>
        <p className="text-xs opacity-90">{niche}</p>
      </div>
    </div>
  )
}
```

### Section: VideoTestimonials

```tsx
const videoTestimonials = [
  {
    videoUrl: 'https://res.cloudinary.com/rainuka/.../perinatal-testimonial-1.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/rainuka/.../perinatal-1-thumb.jpg',
    title: 'Perinatal Anxiety Support',
    author: 'Sarah M.',
    niche: 'Postpartum anxiety',
  },
  // ... more videos
]

export function VideoTestimonialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <h2 className="font-caveat text-4xl text-warm-gray-900 mb-12">
          Hear from Clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.map((video, i) => (
            <VideoTestimonial key={i} {...video} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Asset Requirements
```
Cloudinary folder structure:
/rainuka-therapy/testimonials/
├── perinatal-testimonial-1.mp4    (< 5MB, optimized)
├── perinatal-1-thumb.jpg          (thumbnail, 400x300px)
├── adhd-testimonial-1.mp4
├── adhd-1-thumb.jpg
├── career-testimonial-1.mp4
└── career-1-thumb.jpg

Video specs:
- Format: H.264 MP4, 1080p or 720p
- Bitrate: 2-3 Mbps
- Audio: AAC, 128 kbps
- Duration: 60-90 sec per testimonial
```

---

## CONCEPT 5: Ambient Photography Backgrounds

### Implementation: Hero Sections with Photo Backgrounds

```tsx
// components/AmbientPhotoHero.tsx
interface AmbientPhotoHeroProps {
  photo: string          // /photography/... path
  heading: string
  subheading: string
  opacity?: number       // 0.15-0.25
}

export function AmbientPhotoHero({
  photo,
  heading,
  subheading,
  opacity = 0.2,
}: AmbientPhotoHeroProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${photo})`,
          opacity,
        }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-gray-50/40 to-sage-50/40" />

      {/* Content */}
      <div className="relative z-10 container-base py-12">
        <h1 className="font-caveat text-5xl text-warm-gray-900 mb-4">
          {heading}
        </h1>
        <p className="text-lg text-warm-gray-700 max-w-2xl">
          {subheading}
        </p>
      </div>
    </section>
  )
}
```

### Usage

```tsx
// On About page
<AmbientPhotoHero
  photo="/photography/rainuka-office.jpg"
  heading="About Rainuka"
  subheading="A therapist who believes your nervous system matters."
  opacity={0.15}
/>

// On Contact page
<AmbientPhotoHero
  photo="/photography/rainuka-plants.jpg"
  heading="Let's Connect"
  subheading="Book a free 15-minute consultation call."
  opacity={0.18}
/>
```

### Asset Requirements

```
/public/photography/
├── rainuka-office.jpg         (1600x900px, 180KB)
├── rainuka-plants.jpg         (1600x900px, 170KB)
├── rainuka-desk-detail.jpg    (1600x1000px, 160KB)
├── rainuka-window.jpg         (1600x900px, 150KB)
└── therapy-space.jpg          (1600x900px, 155KB)

Photo Requirements:
- Warm color grading (match sage + warm gray palette)
- Natural light preferred
- Slightly desaturated (85-90% saturation)
- All at 200-250KB max (optimized via ImageOptim/TinyJPG)
```

---

## 🔧 Integration Checklist

### Files to Create
- [ ] `/public/photography/rainuka-hero.jpg`
- [ ] `/public/photography/rainuka-hero-mobile.jpg`
- [ ] `/public/photography/rainuka-office.jpg` (+ 3-4 more ambient photos)
- [ ] `/public/illustrations/perinatal-icon.svg`
- [ ] `/public/illustrations/adhd-icon.svg`
- [ ] `/public/illustrations/career-icon.svg`
- [ ] `components/VideoTestimonial.tsx`
- [ ] `components/AmbientPhotoHero.tsx`
- [ ] `components/NicheIcon.tsx`

### Files to Update
- [ ] `components/HeroSection.tsx` — Add photo + handwritten header
- [ ] `components/TestimonialCard.tsx` — Add avatar + niche micro-icon
- [ ] `tailwind.config.ts` — Add Caveat font family
- [ ] `app/layout.tsx` — Import Caveat font
- [ ] `app/page.tsx` — Add VideoTestimonialSection
- [ ] `app/about/page.tsx` — Use AmbientPhotoHero
- [ ] `app/contact/page.tsx` — Use AmbientPhotoHero

### Performance Checklist
- [ ] All images: WEBP format + fallback JPG, lazy-loaded
- [ ] Video: Cloudinary optimization, thumbnails cached
- [ ] Fonts: `font-display: swap` for Caveat
- [ ] Illustrations: Inline SVG or optimized PNGs (<50KB each)
- [ ] Lighthouse score: Target 85+ (desktop), 75+ (mobile)

### Accessibility Checklist
- [ ] All images: Descriptive alt text
- [ ] All videos: Captions + transcripts
- [ ] Color contrast: WCAG AA minimum (4.5:1 text, 3:1 graphics)
- [ ] Animations: Respects `prefers-reduced-motion`
- [ ] Handwritten font: Falls back to serif if unavailable

---

## 📏 Visual Hierarchy Reference

```
Hero Photo + Handwritten Font (highest visual impact)
├── 1600x1000px photo (40% opacity overlay)
├── Caveat 5xl-7xl heading
└── Geist Sans body copy

Testimonial Avatars (medium impact)
├── 48-64px sage circle + initials
├── Micro-icon accent
└── 5-star rating

Niche Illustrations (medium impact)
├── 120-140px SVG icons
├── Sage stroke + warm-gray fill
└── Hover: scale 1.1

Video Testimonials (high engagement)
├── 16:9 aspect ratio
├── Scroll-to-autoplay
└── Play button overlay + captions

Ambient Photos (subtle, atmospheric)
├── 15-25% opacity on backgrounds
├── Warm color grade
└── Subtle to support copy, not distract
```

---

**Ready for technical review by Agent E (Accessibility/Engineering)**
