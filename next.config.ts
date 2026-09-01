import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Cache Headers for Better Performance
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(svg|png|jpg|jpeg|webp|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Optimize images for mobile
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 375, 425, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Minimal config - let Next.js defaults handle everything
  // Service Worker: 2026-08-31-18:45
}

export default nextConfig
