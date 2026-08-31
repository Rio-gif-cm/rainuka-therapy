# Launch Checklist for Rainuka's Website

Complete this checklist before deploying to production.

## Pre-Launch (This Week)

### Content & Copy
- [ ] Review all copy on each page for accuracy
- [ ] Update "therapist photo placeholder" with real professional headshot
- [ ] Update bio (app/about/page.tsx) with your real story and credentials
- [ ] Update license information (state, license number, verification link)
- [ ] Update phone number (in Navigation, Footer, Contact page)
- [ ] Update email address (in Navigation, Footer, Contact page)
- [ ] Update office location or confirm "Telehealth Only"
- [ ] Update specialization list on perinatal/ADHD/career pages
- [ ] Confirm all testimonials (get client consent if using real quotes)
- [ ] Update "28 states served" to your actual states if applicable

### Forms & Submissions
- [ ] Test booking form locally (npm run dev → /booking)
- [ ] Fill out all 3 steps, verify submission works
- [ ] Check browser console for any errors (F12 → Console)
- [ ] Decide on email service (Brevo recommended, free tier available)
- [ ] Get email API key (or leave .env.local empty for now)

### Design & Branding
- [ ] Check on mobile phone (actual device, not just emulator)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all images load
- [ ] Check link destinations (none should be broken)
- [ ] Test dark mode if applicable

### Accessibility
- [ ] Tab through entire site with keyboard (can you reach everything?)
- [ ] Check focus states visible (blue/green outline should appear)
- [ ] Verify color contrast with WebAIM Contrast Checker
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac)

### Performance
- [ ] Run Lighthouse in Chrome DevTools (target >90 on all metrics)
- [ ] Check page speed (should load <3 seconds on 4G)
- [ ] Compress therapist photo (aim for <200KB)

## Deployment (30 Minutes)

### GitHub & Version Control
- [ ] Create GitHub account (github.com)
- [ ] Create public repository: `rainuka-therapy`
- [ ] Push code to GitHub (see DEPLOYMENT.md for commands)

### Vercel Deployment
- [ ] Create Vercel account (vercel.com)
- [ ] Connect GitHub repo to Vercel
- [ ] Let Vercel auto-build (wait 2-3 minutes)
- [ ] Visit deployment URL and test
- [ ] Verify all pages load (test all major links)

### Domain Configuration
- [ ] Register domain (if not already done): rainukatherapy.com
- [ ] Add domain to Vercel project (Settings → Domains)
- [ ] Update DNS at registrar (follow Vercel instructions)
- [ ] Wait for DNS propagation (15-30 minutes)
- [ ] Verify domain works: https://rainukatherapy.com

### Environment Variables
- [ ] Create .env.local file (copy from .env.local.example)
- [ ] Add to Vercel project settings
- [ ] Redeploy on Vercel
- [ ] If using email, add EMAIL_API_KEY (Brevo)

## Post-Launch (First Week)

### Verification
- [ ] Visit https://rainukatherapy.com from different devices
- [ ] Click every link (verify they work)
- [ ] Submit test booking form
- [ ] Check email inbox for booking confirmation (if email service enabled)
- [ ] Check Vercel logs for any errors
- [ ] Test booking form on mobile

### Analytics & Monitoring
- [ ] Set up Google Business Profile (google.com/business)
- [ ] Add business info (location, phone, hours, services)
- [ ] Optionally: set up Google Analytics (takes 5 minutes)
- [ ] Check Vercel Analytics (Dashboard → Analytics)

### Search Visibility
- [ ] Submit site to Google Search Console (google.com/webmasters)
- [ ] Submit sitemap: https://rainukatherapy.com/sitemap.xml
- [ ] Request indexing for key pages

### Directory Listings
- [ ] Add to Psychology Today (psychologytoday.com)
- [ ] Add to TherapyDen (therapyden.com)
- [ ] Add to Headway (headway.co)
- [ ] Add to Verily (verilyhealthcare.com) - perinatal focus
- [ ] Add to IMONAD (imonad.com) - ADHD focus

## First Month

### Client Communication
- [ ] Share link with referral network (colleagues, past clients)
- [ ] Add to email signature
- [ ] Post on social media (if applicable)
- [ ] Tell past clients the site is live

### Booking Management
- [ ] Respond to bookings within 24 hours
- [ ] Keep phone number monitored
- [ ] Check email regularly (booking@rainukatherapy.com)

### Feedback & Improvement
- [ ] Ask clients: "Was the website helpful?"
- [ ] Collect feedback on booking form (too long? confusing?)
- [ ] Collect testimonials (ask permission to display)
- [ ] Monitor which pages get most traffic (Vercel Analytics)
- [ ] Watch for broken links in Vercel logs

## Optional Enhancements (Future)

- [ ] Blog section (add /app/blog/[slug]/ structure)
- [ ] Video introduction (embed YouTube on homepage)
- [ ] Online scheduler (Calendly or Acuity Scheduling embed)
- [ ] Client portal (manage appointments, forms)
- [ ] Email newsletter (Brevo automation)
- [ ] Google Review widget (show star rating)
- [ ] More testimonials (photo + quote + context)
- [ ] Insurance provider verification link
- [ ] Referral partner landing pages
- [ ] Resource library (downloadable PDFs)

## Troubleshooting

### If form doesn't submit
1. Check Vercel logs (Dashboard → Deployments → Logs)
2. Verify .env.local variables are set in Vercel
3. Test locally: npm run dev → /booking

### If site looks different on mobile
1. Hard refresh: Ctrl+Shift+Delete (clear cache)
2. Check Vercel deployment is latest
3. Test in Chrome DevTools mobile view vs. actual device

### If domain not working
1. Wait 30 minutes (DNS propagation)
2. Check DNS records in Vercel (Settings → Domains)
3. Contact domain registrar support if >1 hour

### If email not sending
1. Verify EMAIL_API_KEY is correct in Vercel
2. Check Brevo dashboard → Logs
3. Re-test form submission

## Contact Support

If stuck:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- This project README: README.md
- This project DEPLOYMENT guide: DEPLOYMENT.md

## Timeline

**Ideal Timeline**:
- Today: Complete code review & copy updates (1-2 hours)
- Today Evening: Deploy to Vercel (30 minutes)
- Tomorrow: Monitor logs & test on devices (30 minutes)
- This Week: Submit to directories (1 hour)
- Ongoing: Manage bookings & gather feedback

**Total Time to Live**: ~4 hours spread over 1 week

---

**Final Check Before Hitting "Deploy"**:

- [ ] All contact info updated?
- [ ] Photo added?
- [ ] Credentials accurate?
- [ ] Form tested locally?
- [ ] GitHub repo created?
- [ ] Vercel account ready?

✅ **You're ready to launch!**
