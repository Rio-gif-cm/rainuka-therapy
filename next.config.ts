import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Service Worker Support & Offline Caching
  // Cache Headers for Better Performance on Repeat Visits
  headers: async () => {
    return [
      // API routes: no cache (always fresh)
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      // Static assets: long-term cache
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Images: long-term cache
      {
        source: '/:path*.(svg|png|jpg|jpeg|webp|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // /resources has no page of its own - the guides index IS the
  // "Guides & Resources" hub. Redirect instead of serving a 404.
  redirects: async () => {
    return [
      {
        source: '/resources',
        destination: '/guides',
        permanent: true,
      },
    ]
  },

  // Optimize images for mobile (better LCP)
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Use Turbopack (default in Next.js 16)
  turbopack: {},

  // Service Worker: 2026-08-31-18:45
}

export default nextConfig
