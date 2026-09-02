# 🎨 Agent F: Visual Humanization — Quick Reference Card

**Status:** ✅ COMPLETE | Ready for team feedback  
**Deliverables:** 6 detailed docs + code specs + wireframes  
**Next:** Agents D, E, G feedback (Sept 2) → Roadmap lock (Sept 3) → Build (Sept 3-7)

---

## 📋 The 5 Concepts (30-second overview)

| Concept | What | Why | Effort | Impact |
|---------|------|-----|--------|--------|
| **1. Photo Hero + Handwritten Font** | Rainuka's photo in hero + Caveat (handwritten) section headers | Personal connection + immediate differentiation | ⭐ Low | ⭐⭐⭐ High |
| **2. Avatar Initials + Niche Micro-Icons** | Sage circles with initials + tiny icons (leaf/spiral/arrow) on testimonials | Humanize testimonials, reinforce specializations | ⭐ Low | ⭐⭐ Medium |
| **3. Hand-Drawn SVG Illustrations** | 3 custom icons for perinatal/ADHD/career niches | Cohesive visual identity, not emoji | ⭐⭐ Medium | ⭐⭐ Medium |
| **4. Video Testimonials** | Client & Rainuka intro videos, scroll-to-autoplay | Highest trust signal, strong differentiation | ⭐⭐⭐ High | ⭐⭐⭐ High |
| **5. Ambient Photography** | Low-opacity office/desk/space photos as backgrounds | Atmospheric warmth, grounded reality | ⭐⭐ Medium | ⭐⭐ Medium |

---

## 📂 Documentation Files (in `.hermes/`)

**Start here:** `AGENT-F-SUMMARY.md` (9.4 KB)
- Executive summary, roadmap, next steps

**Quick visual:** `AGENT-F-ASCII-MOCKUPS.md` (26 KB)
- Desktop/mobile wireframes, sketches, visual hierarchy

**Full concepts:** `AGENT-F-VISUAL-HUMANIZATION.md` (13 KB)
- Detailed rationale for each concept, "why it works"

**Code ready:** `AGENT-F-IMPLEMENTATION-SPECS.md` (17 KB)
- React components (copy-paste ready), SVG specs, CSS integration

**Team workflow:** `AGENT-F-COLLABORATION-FRAMEWORK.md` (8.7 KB)
- Feedback templates for Agents D, E, G
- 3-round feedback process (Sept 1-3)

---

## 🎯 For Each Team Member

### Agent D (Content/UX) — 5 min read
1. Open `AGENT-F-SUMMARY.md` → scan "Executive Summary"
2. Open `AGENT-F-VISUAL-HUMANIZATION.md` → read "Thesis"
3. Answer feedback Qs in `AGENT-F-COLLABORATION-FRAMEWORK.md`
   - Does photo + handwritten font feel authentic?
   - Which 2 concepts feel most human?
   - Any UX concerns on mobile?

### Agent E (Accessibility/Engineering) — 5 min read
1. Open `AGENT-F-SUMMARY.md` → scan "Implementation Roadmap"
2. Open `AGENT-F-IMPLEMENTATION-SPECS.md` → skim component code
3. Answer feedback Qs in `AGENT-F-COLLABORATION-FRAMEWORK.md`
   - Performance concerns? (photo load time, video autoplay)
   - Accessibility flags? (alt text, captions, contrast)
   - Phase 1 timeline realistic?

### Agent G (Brand/Voice) — 5 min read
1. Open `AGENT-F-ASCII-MOCKUPS.md` → visual overview
2. Open `AGENT-F-VISUAL-HUMANIZATION.md` → "Thesis" section
3. Answer feedback Qs in `AGENT-F-COLLABORATION-FRAMEWORK.md`
   - Photo: trustworthy or too casual?
   - Handwritten font: professional or trendy?
   - Priority ranking of all 5 concepts?

---

## ✅ Phase 1 (Quick Wins) — Ready to Ship

```
[ Handwritten Font ]
  └─ Update tailwind.config.ts (add Caveat family)
  └─ Import Google Fonts (Caveat)
  └─ Update HeroSection: handwritten header option
  └─ ~2 hours dev work, zero asset budget

[ Avatar Initials + Icons ]
  └─ Update TestimonialCard: accept initials + niche props
  └─ Add sage circle + micro-icon overlay
  └─ No photos needed, component-only
  └─ ~3 hours dev work

[ SVG Illustrations ]
  └─ Create 3 SVG files (perinatal, ADHD, career icons)
  └─ Sage-600 stroke + burgundy-200 fill
  └─ ~4-6 hours design work (or 2 hours if using Excalidraw)
  └─ Ready to commit + ship

TOTAL PHASE 1: ~1 week, $0 asset budget
IMPACT: Clear visual humanization, immediate differentiation
```

---

## 📸 Phase 2 (Deferred) — Requires Assets

```
[ Professional Headshot ]
  └─ Commission photographer (~$300-500)
  └─ 2-3 hour shoot, Rainuka + office/lifestyle shots
  └─ Integrate into Hero + ambient backgrounds

[ Video Testimonials ]
  └─ Record 2-3 client videos + Rainuka intro (30-60 min)
  └─ Cloudinary hosting setup + optimization
  └─ Build VideoTestimonial React component
  └─ Deploy VideoTestimonialSection

TOTAL PHASE 2: ~2 weeks, ~$1k asset budget
IMPACT: Highest trust building, strongest differentiation
```

---

## 🤝 Feedback Process (Next 48 hours)

**TODAY (Sept 1):** You're reading this → review proposals  
**TOMORROW (Sept 2):** Reply with feedback  
→ Use template in `AGENT-F-COLLABORATION-FRAMEWORK.md`  
→ Create `.hermes/AGENT-[D/E/G]-FEEDBACK.md` with your take

**Sept 2 PM:** Cross-agent dialogue (D↔G, E↔D, G↔E)  
→ Integrate each other's perspectives

**Sept 3:** Agent F consolidates all feedback  
→ Finalize prioritized roadmap  
→ Team reviews + agrees on Phase 1 scope

**Sept 3-7:** BUILD Phase 1  
→ Commit working code + assets

---

## 🚀 Next Immediate Steps

1. **Read** `AGENT-F-SUMMARY.md` (5 min)
2. **Skim** either mockups or implementation specs (5-10 min)
3. **Fill out** feedback template in `AGENT-F-COLLABORATION-FRAMEWORK.md` (15 min)
4. **Reply** with `.hermes/AGENT-[Your Letter]-FEEDBACK.md` file

**Timeline to commit:**
- Feedback replies by EOD Sept 2 ✓
- Roadmap lock Sept 3 ✓
- Phase 1 ship by Sept 7 ✓

---

## 📞 Quick Answers

**Q: Are these all required?**  
A: No. Phase 1 (concepts 1-3) are quick wins. Phase 2 (4-5) are higher impact but need budget + time.

**Q: What if we only ship 1-2 concepts?**  
A: Photo hero + handwritten font (concept 1) is the highest-impact quick win. Ship that, iterate.

**Q: Can we A/B test?**  
A: Yes. Photo hero is easiest to A/B test (show 50% of users photo, 50% without).

**Q: Mobile friendly?**  
A: Yes. Wireframes show desktop + mobile for all concepts. Lazy-load images, muted video autoplay, responsive stack.

**Q: Will this slow down the site?**  
A: No. See `AGENT-F-IMPLEMENTATION-SPECS.md` for performance targets (LCP <2.5s, optimized images/videos).

---

**Questions?** Reply in `.hermes/` or @ Agent F  
**Ready?** Reply with feedback template by EOD Sept 2  
**Let's ship:** Roadmap lock Sept 3, build Phase 1 Sept 3-7
