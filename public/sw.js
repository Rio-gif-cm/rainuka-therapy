/**
 * Service Worker for Rainuka Therapy Website
 * Provides offline support and intelligent asset caching
 * 
 * Caching Strategy:
 * - Network First (API calls): Serve from network, fallback to cache
 * - Cache First (Assets): Serve from cache, fallback to network
 * - Stale While Revalidate (HTML): Serve cached, update in background
 */

const CACHE_PREFIX = 'rainuka-therapy'
const CACHE_VERSION = 'v1'
const RUNTIME_CACHE = `${CACHE_PREFIX}-runtime-${CACHE_VERSION}`
const IMAGE_CACHE = `${CACHE_PREFIX}-images-${CACHE_VERSION}`
const FONT_CACHE = `${CACHE_PREFIX}-fonts-${CACHE_VERSION}`

// Assets to pre-cache on service worker install
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/next.svg',
  '/vercel.svg',
]

// Install event: pre-cache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')
  event.waitUntil(
    caches.open(RUNTIME_CACHE).then((cache) => {
      console.log('[SW] Pre-caching critical assets')
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-cache failed (some assets may not exist):', err)
        // Don't fail install; continue with selective caching
      })
    })
  )
  self.skipWaiting()
})

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old cache versions
          if (
            cacheName.startsWith(CACHE_PREFIX) &&
            !cacheName.includes(CACHE_VERSION)
          ) {
            console.log('[SW] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
          return Promise.resolve()
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event: implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-HTTP requests
  if (!url.protocol.startsWith('http')) {
    return
  }

  // Skip API calls to external services (except our own API)
  if (request.url.includes('/api/') && !request.url.includes('rainuka')) {
    return
  }

  // STRATEGY 1: API calls - Network First
  if (request.url.includes('/api/')) {
    event.respondWith(networkFirst(request))
    return
  }

  // STRATEGY 2: Images - Cache First
  if (
    request.destination === 'image' ||
    request.url.includes('/images/') ||
    request.url.includes('.svg') ||
    request.url.includes('.png') ||
    request.url.includes('.jpg') ||
    request.url.includes('.jpeg') ||
    request.url.includes('.webp')
  ) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE))
    return
  }

  // STRATEGY 3: Fonts - Cache First
  if (
    request.destination === 'font' ||
    request.url.includes('/fonts/') ||
    url.origin !== self.location.origin
  ) {
    event.respondWith(cacheFirst(request, FONT_CACHE))
    return
  }

  // STRATEGY 4: HTML documents - Stale While Revalidate
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(staleWhileRevalidate(request))
    return
  }

  // STRATEGY 5: Scripts, stylesheets - Cache First with fallback
  if (
    request.destination === 'script' ||
    request.destination === 'style'
  ) {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE))
    return
  }

  // DEFAULT: Network First for everything else
  event.respondWith(networkFirst(request))
})

/**
 * Network First Strategy
 * Try network first, fall back to cache if offline
 * Good for: API calls, frequently updated content
 */
async function networkFirst(request) {
  try {
    const response = await fetch(request)
    // Cache successful responses
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url)
    const cached = await caches.match(request)
    if (cached) {
      return cached
    }
    // Return offline page if no cache
    return new Response('You are offline. Please check your connection.', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
    })
  }
}

/**
 * Cache First Strategy
 * Serve from cache, fall back to network if not found
 * Good for: Static assets (images, fonts, rarely changing files)
 */
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request)
  if (cached) {
    return cached
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.log('[SW] Cache miss and network failed:', request.url)
    return new Response('Resource not available offline.', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
    })
  }
}

/**
 * Stale While Revalidate Strategy
 * Return cached version immediately, update cache in background
 * Good for: HTML documents (balance speed + freshness)
 */
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request)

  // Return cached version immediately (if available)
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        const cache = caches.open(RUNTIME_CACHE)
        cache.then((c) => c.put(request, response.clone()))
      }
      return response
    })
    .catch((error) => {
      console.log('[SW] Background update failed:', error)
      return cached || new Response('You are offline.', { status: 503 })
    })

  // Return cached version immediately, or wait for network
  return cached || fetchPromise
}

// Handle messages from the app (e.g., cache updates)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Skipping waiting, activating new version')
    self.skipWaiting()
  }
})

console.log('[SW] Service Worker loaded and ready')
