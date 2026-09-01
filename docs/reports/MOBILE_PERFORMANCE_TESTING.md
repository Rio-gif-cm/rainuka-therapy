# Mobile Performance Testing Guide - Slow 3G Throttling

## Quick Start (5 Minutes)

### Setup
1. Deploy: `git push origin main` (Vercel auto-deploys)
2. Wait: ~5 minutes for deployment
3. Visit: `https://rainukatherapy.com`
4. Open: Chrome DevTools (F12)

### Test LCP Improvement (Slow 3G)

#### Step 1: Enable Network Throttling
```
DevTools → Network Tab → Throttling Dropdown → "Slow 3G"
```
This simulates 400 kbps download / 400 kbps upload

#### Step 2: First Visit (No Cache)
1. **Ctrl+Shift+R** (Hard refresh, bypasses all caches)
2. **Observe:** LCP appears in DevTools → Performance tab
3. **Note the time:** Typical 6-10 seconds on slow 3G (network-limited)
4. **Check console:** Should see:
   ```
   [SW] Service Worker registered...
   [Perf] LCP: 7234 ms
   ```

#### Step 3: Verify Service Worker Registered
```
DevTools → Application Tab → Service Workers
Status: "activated and running"
Scope: "/"
```

#### Step 4: Second Visit (With Cache)
1. **F5** (Soft refresh, uses service worker + cache)
2. **Observe:** LCP should be **60-70% faster**
   - First visit: ~7 seconds
   - Second visit: ~2-3 seconds
3. **Check console:** Same LCP logs, but faster
4. **Check cache hit:**
   ```
   DevTools → Application → Cache Storage → rainuka-therapy-runtime-v1
   Should show 50+ cached items (HTML, CSS, JS, fonts, images)
   ```

#### Step 5: Verify Cache Strategies
Navigate to different pages and check Network tab:

**Images (Cache First):**
```
Network tab → Filter by "Img"
Size: Shows "[disk cache]" or "[memory cache]"
Time to Load: < 100ms
```

**API Calls (Network First):**
```
Network tab → Filter by "Fetch/XHR"
POST /api/bookings → Status: 200
Shows actual network request (not cached) ✓
```

**HTML Pages (Stale While Revalidate):**
```
Network tab → Filter by "Document"
GET / → Response Headers → Cache-Control: varies
DevTools → Application → Cache Storage → Shows cached version
```

---

## Expected Results Summary

| Metric | First Visit | Repeat Visit | Improvement |
|--------|-------------|--------------|-------------|
| LCP | 6-10s | 1-3s | 60-70% faster |
| FCP | 2-4s | 0.5-1s | 50-80% faster |
| Total Load | 8-12s | 2-4s | 75-80% faster |
| Cache Hit Rate | 0% | 95%+ | - |

---

## Debugging Service Worker Issues

### Issue 1: Service Worker Not Registering
**Symptom:** Console shows no `[SW] Service Worker registered` message

**Diagnosis:**
```javascript
// Run in console:
navigator.serviceWorker.getRegistrations()
  .then(regs => console.log('Found registrations:', regs.length))
```

**Solutions:**
1. Check HTTPS: Service workers only work on `https://` (not http://)
2. Check file: Verify `public/sw.js` exists and serves (F12 → Network)
3. Check errors: F12 → Console → Look for red errors
4. Clear cache: F12 → Application → Service Workers → Unregister → Hard refresh

### Issue 2: LCP Not Improving on Repeat Visits
**Symptom:** Second page load still takes 6+ seconds

**Diagnosis:**
```javascript
// Run in console:
caches.keys().then(names => {
  console.log('Cache stores:', names);
  names.forEach(name => {
    caches.open(name).then(cache => {
      cache.keys().then(reqs => console.log(`${name}: ${reqs.length} items`))
    })
  })
})
```

**Solutions:**
1. Service worker may not be activated → Hard refresh (Ctrl+Shift+R)
2. Cache may be empty → First visit didn't cache → Try again
3. API calls slow → Check Network tab, may need backend optimization
4. Images too large → Check DevTools → Application → Cache Storage → individual file sizes

### Issue 3: Service Worker Conflicts
**Symptom:** New version deployed, but old cache still being served

**Solution:** Service worker automatically cleans old caches on activate, but may need:
```javascript
// Run in console to force clear all caches:
caches.keys().then(names => {
  names.forEach(name => caches.delete(name))
})
// Then hard refresh (Ctrl+Shift+R)
```

---

## Performance Monitoring Commands

### Check Cache Headers (Production)
```bash
# Images should have long cache:
curl -i https://rainukatherapy.com/next.svg | grep Cache-Control
# Expected: Cache-Control: public, max-age=31536000, immutable

# API should not cache:
curl -i -X POST https://rainukatherapy.com/api/bookings \
  -H "Content-Type: application/json" \
  -d '{}' 2>/dev/null | grep Cache-Control
# Expected: Cache-Control: public, max-age=0, must-revalidate

# HTML varies:
curl -i https://rainukatherapy.com/ | grep Cache-Control
# Expected: Varies based on Stale While Revalidate strategy
```

### Monitor Service Worker in Console
```javascript
// Get current service worker:
navigator.serviceWorker.controller

// Listen for updates:
if (navigator.serviceWorker.controller) {
  navigator.serviceWorker.controller.addEventListener('controllerchange', () => {
    console.log('SW updated!')
  })
}

// Manual update check:
navigator.serviceWorker.getRegistrations()
  .then(regs => regs[0]?.update())
```

---

## Real User Monitoring (RUM) Setup

### Google Analytics 4 Integration
To track LCP in production:

1. Add Google Analytics script to `app/layout.tsx`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.gtag = function() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. Uncomment gtag call in performance observer:
```javascript
if (window.gtag) {
  gtag('event', 'page_view', { value: entry.renderTime || entry.loadTime });
}
```

3. View metrics in GA4:
- **Reports** → **Engagement** → **Scroll depth** (shows LCP context)
- Or custom event tracking: **Events** → Search for "page_view"

---

## Vercel Deployment Monitoring

### Check Deployment Status
```bash
# View recent deployments:
vercel ls

# View specific deployment logs:
vercel logs <deployment-url>
```

### Check Service Worker Delivery
```bash
# Verify sw.js is deployed:
curl -i https://rainukatherapy.com/sw.js | head -20
# Should return status 200 with JavaScript content

# Check response headers:
curl -i https://rainukatherapy.com/sw.js | grep -E "(Cache-Control|Content-Type|Content-Length)"
# Expected: Cache-Control: public, max-age=3600 (1 hour for SW itself)
```

---

## Success Criteria

✅ **Implementation Complete When:**
1. Service worker registers without errors (console shows `[SW] Service Worker registered`)
2. Cache populated after first visit (DevTools → Application → Cache Storage shows items)
3. Repeat visit LCP < 3 seconds on Slow 3G
4. Cache hit rate > 90% (Application → Cache Storage shows most assets cached)
5. Offline fallback works (DevTools → Network → Mark offline → refresh → shows message)
6. No errors in console on production deployment

✅ **Performance Improved When:**
- Slow 3G first visit: 6-10 seconds
- Slow 3G repeat visit: 2-3 seconds
- **Improvement: 60-70% faster on repeat visits**

---

## Commit & Deployment Timeline

- **Committed:** August 31, 2026, ~18:45 UTC-7
- **Pushed:** `git push origin main`
- **Vercel Deployment:** Auto-triggered (5 minutes)
- **Live Status:** https://rainukatherapy.com (check Network tab for sw.js)

## Files Modified
- `public/sw.js` ← Service worker (6.2 KB)
- `next.config.ts` ← Cache headers
- `app/layout.tsx` ← Performance monitoring

---

## Questions?

Run these in DevTools console for diagnostics:
```javascript
// Check service worker
navigator.serviceWorker.getRegistrations()

// Check cache
caches.keys().then(k => console.log('Caches:', k))

// Monitor performance
new PerformanceObserver(list => {
  list.getEntries().forEach(e => console.log('Performance:', e))
}).observe({ entryTypes: ['largest-contentful-paint', 'navigation'] })
```

