# Deployment Guide for Rainuka's Therapy Website

## Quick Summary

Your complete Next.js website is built and ready to deploy. This guide walks you through deploying to Vercel (frontend hosting).

## Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] GitHub account (free at github.com)
- [ ] Vercel account (free at vercel.com)
- [ ] Custom domain registered (rainukatherapy.com or your choice)
- [ ] Therapist photo (JPG or PNG, at least 400x400px)
- [ ] Updated all contact information in code
- [ ] Tested booking form locally (npm run dev)
- [ ] Configured email service (optional but recommended)

## Step 1: Push Code to GitHub

### 1.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → New repository
3. Name it: `rainuka-therapy` (or your choice)
4. Add description: "Therapy practice website for Rainuka Oberoi, LCSW"
5. Choose "Public" (for easier Vercel integration)
6. Click "Create repository"

### 1.2 Connect Your Local Repository

In your terminal, from the project directory:

```bash
cd C:/Users/Roanm/rainuka-therapy

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete therapy website with homepage, specialty pages, booking form, and FAQ"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/rainuka-therapy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Expected output**: Your code is now on GitHub.

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (create account if needed)
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste your GitHub repo URL: `https://github.com/YOUR-USERNAME/rainuka-therapy`
5. Click "Import"

### 2.2 Configure Project

On the "Create Project" page:

- **Project Name**: `rainuka-therapy`
- **Root Directory**: Leave blank (it's already at the root)
- **Framework Preset**: Should auto-detect "Next.js"
- **Build Command**: `npm run build` (should be auto-filled)
- **Output Directory**: `.next` (should be auto-filled)

Click "Deploy"

**Expected**: Vercel starts building. Wait 2-3 minutes.

### 2.3 View Your Site

Once deployment completes:

1. You'll see a "Congratulations" message
2. Click the "Visit" button (or your deployment URL)
3. Your site is now live at something like: `https://rainuka-therapy-abc123.vercel.app`

## Step 3: Add Your Custom Domain

### 3.1 Point Domain to Vercel

1. Back in Vercel dashboard, click your project
2. Go to "Settings" → "Domains"
3. Enter your domain: `rainukatherapy.com`
4. Click "Add"

### 3.2 Update DNS (at Your Domain Registrar)

Vercel will show you DNS records to add. Go to your domain registrar (GoDaddy, Namecheap, etc.) and:

1. Find "DNS Settings" or "Manage DNS"
2. Add the records Vercel specifies (usually CNAME or A records)
3. Wait 15-30 minutes for DNS to propagate

**Verification**: When you can visit `https://rainukatherapy.com`, DNS is working.

## Step 4: Set Environment Variables

### 4.1 In Vercel Dashboard

1. Go to your project → Settings → Environment Variables
2. Add each variable from `.env.local.example`:

```
NEXT_PUBLIC_API_URL = https://rainukatherapy.com/api
BACKEND_API_URL = https://your-backend-api.com (if you have one)
EMAIL_API_KEY = your-email-service-key (optional for now)
ADMIN_EMAIL = contact@rainukatherapy.com
```

3. Click "Save"
4. Redeploy (click "Deployments" → "Redeploy")

## Step 5: Configure Email (Optional but Recommended)

To send booking confirmations automatically:

### 5.1 Sign Up for Brevo (Free Tier)

1. Go to [brevo.com](https://brevo.com)
2. Click "Sign Up"
3. Create account with your email
4. Go to "Settings" → "SMTP & API"
5. Copy your "API Key"

### 5.2 Add to Vercel

1. Go back to Vercel project
2. Settings → Environment Variables
3. Add:
   ```
   EMAIL_API_KEY = (paste your Brevo API key)
   EMAIL_API_URL = https://api.brevo.com/v3/smtp/email
   ```
4. Redeploy

### 5.3 Test Email

1. Go to your website at `https://rainukatherapy.com/booking`
2. Fill out the booking form
3. Submit
4. Check your email (contact@rainukatherapy.com) for confirmation

## Step 6: Update Therapist Information

Now that your site is live, update it with real information:

### 6.1 Update Therapist Photo

1. Replace the photo placeholder:
   - Get a high-quality JPG or PNG (at least 400x400px)
   - Add it to: `public/therapist-photo.jpg`
   - Update image references in components

2. Push changes:
   ```bash
   git add public/therapist-photo.jpg
   git commit -m "Add therapist photo"
   git push origin main
   ```

3. Vercel auto-redeploys

### 6.2 Update Contact Information

Search for these placeholders and replace:

- `contact@rainukatherapy.com` → Your real email
- `(555) 123-4567` → Your real phone
- `[location]` → Your office location (or "Telehealth Only")
- `[State]` → Your state/region
- `[Insurance providers]` → Insurance you actually accept

**Files to update**:
- `components/Navigation.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- All specialty pages

### 6.3 Update Bio and Credentials

Replace placeholder text with your real:
- Professional bio (app/about/page.tsx)
- Credentials (degrees, licenses, certifications)
- Years of experience
- Training & specializations

**Push changes**:
```bash
git add .
git commit -m "Update therapist information and contact details"
git push origin main
```

## Step 7: Test Everything

### 7.1 Test on Mobile

1. Visit `https://rainukatherapy.com` on your phone
2. Try navigation and booking form
3. Test buttons (should work on all screen sizes)

### 7.2 Test Booking Form

1. Go to `/booking`
2. Fill out the form
3. Verify submission works
4. Check console for errors (F12 → Console tab)

### 7.3 Test Accessibility

1. Press Tab key - can you navigate the whole site?
2. Press Enter - can you activate buttons?
3. Check colors have enough contrast (use WebAIM Contrast Checker)

### 7.4 Performance

Check with Vercel analytics:
1. Dashboard → "Analytics"
2. Check page load times
3. If slow, enable caching or optimize images

## Step 8: Google Business Profile

### 8.1 Create/Claim Profile

1. Go to [google.com/business](https://google.com/business)
2. Sign in with your Google account
3. Claim or create your business
4. Add information:
   - Name: Rainuka Oberoi, LCSW
   - Category: Psychotherapist or Counselor
   - Website: https://rainukatherapy.com
   - Phone: Your phone number
   - Hours: Your office hours

### 8.2 Add Services

In the "Services" section, add:
- Perinatal mental health therapy
- Adult ADHD therapy
- Career counseling

This helps people find you in Google Search and Maps.

## Ongoing Maintenance

### Weekly
- Check for new bookings
- Respond to inquiries within 24 hours
- Monitor error logs (Vercel → Deployments)

### Monthly
- Review Google Analytics traffic
- Update therapist availability if needed
- Collect client testimonials (with consent)

### As Needed
- Update rates if they change
- Add new blog posts or pages
- Improve copy based on client feedback

## Troubleshooting

### Form submissions not working

1. Check Vercel logs: Dashboard → Functions
2. Verify `BACKEND_API_URL` is correct
3. Test locally: `npm run dev` → `/booking`

### Site shows old version

1. Hard refresh: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
2. Clear browser cache
3. Force Vercel rebuild: Dashboard → Deployments → Redeploy

### SSL certificate issues

1. Wait 24 hours (DNS propagation)
2. Vercel auto-generates SSL certificates
3. Should show green lock icon 🔒

### Email not sending

1. Verify `EMAIL_API_KEY` is correct
2. Check Brevo dashboard → Logs
3. Test with curl (advanced)

## Next Features to Add

After launch, consider:

- [ ] Blog section (content marketing for SEO)
- [ ] Client testimonials with photos
- [ ] Video introduction of Rainuka
- [ ] Online scheduler integration (Calendly, Acuity)
- [ ] Google Analytics 4
- [ ] Trust badges (certifications, ratings)
- [ ] Resource library (PDFs, articles)
- [ ] Newsletter signup
- [ ] Client portal (portal to manage appointments)

## Support

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Need Help?
- Vercel Support: https://vercel.com/support
- GitHub Discussions: https://github.com/vercel/next.js/discussions
- Create an issue on your GitHub repo

---

**Deployed and live in less than 30 minutes. Congratulations!** 🎉

Your site is now:
- ✅ Live at your custom domain
- ✅ Hosted on fast global CDN
- ✅ HTTPS secure
- ✅ Auto-scaling
- ✅ Zero maintenance

Every time you push code to GitHub, Vercel automatically rebuilds and deploys. No manual upload needed.
