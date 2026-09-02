# SEO POLISHER #1 — PHASE 1 QUICK START (Weeks 1-2)
**Status:** Ready to implement immediately  
**Blocking Items:** 4 Rainuka decisions (see below)  
**Non-Blocking Tasks:** Can start NOW

---

## 🟩 CAN START NOW (No Blocking Dependencies)

### Task 1: Add "Last Updated" Dates to Guides
**Files:** `app/guides/page.tsx`  
**Effort:** 15 minutes  
**Impact:** Freshness signals to Google  

**Action:**
1. Check guide frontmatter for publication dates
2. For guides older than 6 months (before March 2026), add `updatedDate` field
3. Display on card as: "Published [date] • Updated [date]" OR "Updated [month year]"

---

### Task 2: Draft 5 New Content Sections
**Effort:** 2-3 hours (async drafting, no implementation yet)  
**Impact:** Ready for Design + Copy Lead review  

**Content to Draft (Share in Slack for async feedback):**

1. **ADHD in Women** (350 words)
   - Diagnostic delay, masking, emotional dysregulation
   - Identity reconstruction after late diagnosis
   - File: Will go in `app/adhd/page.tsx`

2. **Pregnancy vs. Postpartum Anxiety** (400-500 words)
   - Comparison: triggers, timeline, treatment
   - LSI keywords: prenatal, antenatal, postpartum OCD
   - File: Will go in `app/perinatal/page.tsx`

3. **Career Loss & Professional Identity Grief** (300 words)
   - Why career loss is grief
   - Types (layoff, burnout, career pivot)
   - Therapy approach
   - File: Will go in `app/grief/page.tsx`

4. **Affair Recovery Timeline** (300 words)
   - 3 phases: month-by-month expectations
   - Realistic recovery window
   - Therapy's role in each phase
   - File: Will go in `app/couples/page.tsx`

5. **Who I'm Best Suited For** (200-250 words)
   - Great fit if...
   - Better specialized fit if... (crisis, substance use, primary PTSD, etc.)
   - File: Will go in `app/about/page.tsx`

**Next Step:** Share drafts in #rainuka-seo-polishers for Copy Lead review

---

## 🟥 AWAITING RAINUKA DECISIONS (Blocking Phase 1 Commits)

**Form to Send to @Rainuka:**

```
SEO POLISHER #1 — Critical Decisions Needed (Sept 1, 2026)

Please confirm by EOD Sept 2 so we can commit Phase 1 (metadata) on Sept 3:

1. BRAND NAME STANDARDIZATION
   Current state: "Rainuka Therapy" on homepage, "Wonderloud Therapy" on ADHD page
   Decision needed: Which ONE brand should we use everywhere?
   Options:
   [ ] Rainuka Therapy (recommended — clearer, more personal)
   [ ] Wonderloud Therapy (would require homepage update too)
   
   Impact: Updates metadata on 7 pages (About, ADHD, Couples, Grief, Perinatal, FAQ, Guides)

2. CANADIAN REGULATORY BODY
   Current state: About page has placeholder text: "I am regulated in Canada by [Provincial Regulatory Body]"
   Decision needed: Are you licensed in Canada? If yes, which province?
   Options:
   [ ] BC College of Social Workers (BC-based)
   [ ] Ontario College of Social Workers (ON-based)
   [ ] Other: _________________
   [ ] No Canada license → Remove Canada references entirely
   
   Impact: About page credibility + compliance

3. CURRENT PRICING
   Current FAQ claim: "$150/session for 50 minutes. Sliding scale $80-$120"
   Decision needed: Is this still accurate as of September 2026?
   [ ] Yes, still accurate
   [ ] Updated to: ________________
   
   Impact: FAQ page trust (wrong pricing = immediate credibility loss)

4. TELEHEALTH GEOGRAPHIC SCOPE
   Current Perinatal page claim: "Telehealth Available. 28 states served."
   Decision needed: Is "28 states" still accurate?
   [ ] Yes, 28 states still correct
   [ ] Updated to: _______ states
   [ ] Serves all U.S. states + Canada
   [ ] Other: ________________
   
   Impact: Geo-targeting accuracy + compliance
```

---

## 📝 IMPLEMENTATION SEQUENCE (Once Decisions Arrive)

### When Rainuka Confirms Brand Name:
**Estimated 45 minutes**

```
Files to update:
- app/about/page.tsx (metadata title + description)
- app/adhd/page.tsx (metadata title + description)
- app/couples/page.tsx (metadata title + description)
- app/grief/page.tsx (metadata title + description)
- app/perinatal/page.tsx (metadata title + description)
- app/faq/page.tsx (metadata title + description)
- app/guides/page.tsx (metadata title + description)

Pattern:
OLD: "Adult ADHD Therapy | Diagnosis, Executive Function | Wonderloud Therapy"
NEW: "Adult ADHD Therapy | Diagnosis, Executive Function | Rainuka Therapy"

(Or vice versa if Wonderloud is chosen)
```

### When Rainuka Confirms Regulatory Body:
**Estimated 15 minutes**

```
File: app/about/page.tsx (lines 210-216)

OLD:
"For Canadian clients, note that LCSW is a U.S. credential. 
I am regulated in Canada by [Provincial Regulatory Body]."

NEW (Example if BC):
"For Canadian clients, note that LCSW is a U.S. credential. 
I am regulated in British Columbia by the BC College of Social Workers."

OR if removing Canada references:
"I am a Licensed Clinical Social Worker (LCSW) licensed in the United States, 
serving clients across multiple states via telehealth."
```

### When Rainuka Confirms Pricing:
**Estimated 10 minutes**

```
File: app/faq/page.tsx (line 28)

OLD: "$150/session for 50 minutes. Sliding scale $80-$120..."

NEW: [Update to current pricing or confirm unchanged]
```

### When Rainuka Confirms Telehealth States:
**Estimated 10 minutes**

```
File: app/perinatal/page.tsx (line 200)

OLD: "Telehealth Available - Sessions from home, your office, or wherever feels comfortable. 28 states served."

NEW: [Update to current state count or replace with general statement]
```

---

## ✅ PHASE 1 CHECKLIST (Commits Once Decisions Received)

- [ ] Receive Rainuka decisions (by EOD Sept 2)
- [ ] Update brand name metadata on 7 pages
- [ ] Fix credentials placeholder + confirm regulatory body
- [ ] Verify & update FAQ pricing
- [ ] Update telehealth geographic claim
- [ ] Add "Last Updated" dates to guides
- [ ] Git commit: `fix: Standardize brand name and metadata consistency across all pages`
- [ ] Git commit: `fix: Update credentials, pricing, and telehealth geographic claims`

**Expected Phase 1 Completion:** Sept 3, 2026 (morning)

---

## 🚀 PARALLEL WORK (Week 2-3, No Blocking)

While waiting for decisions + Design/Copy feedback:

1. **Internal Linking Audit** (1 hour)
   - Map which specialty pages should link to which
   - Create linking strategy document
   - Share with Design Lead for visual guidance

2. **LSI Keyword Research** (1-2 hours)
   - Verify each LSI keyword list is accurate
   - Check if keywords are searchable (Google Search Console trends)
   - Prioritize keywords by search volume

3. **Readability Analysis** (30 minutes)
   - Run About page bio through Flesch-Kincaid score
   - Identify 500+ word single paragraphs
   - Flag for Design Lead: should these be broken up? Tabbed?

4. **Competitor Content Benchmarking** (30 minutes)
   - Compare ADHD content depth: Rainuka vs. competitors
   - Note what competitors cover that Rainuka doesn't
   - Ensure new sections fill gaps

---

## 📊 SUCCESS METRICS (Phase 1)

| Metric | Goal | Status |
|--------|------|--------|
| Metadata consistency | 100% (7 pages) | ⏳ Pending decisions |
| Credential placeholders removed | 0 remaining | ⏳ Pending decision |
| Pricing verified | Current + accurate | ⏳ Pending decision |
| Telehealth claims | Accurate to today | ⏳ Pending decision |
| Guide freshness dates | Added to old guides | ⏳ Ready to implement |
| Content drafts ready for review | 5 sections (1500+ words) | ⏳ In progress |

---

## 📅 TIMELINE

**Today (Sept 1):** Drafts proposed, team feedback requested  
**Sept 2 (EOD):** Rainuka decisions due  
**Sept 3 (Morning):** Phase 1 commits (metadata, credentials, pricing, freshness)  
**Sept 4-10:** Design + Copy feedback on 5 new content sections  
**Sept 11-14:** Phase 2 (integrate content + LSI keywords)  
**Sept 15-21:** Phase 3 (internal linking + readability)  
**Sept 22-28:** Phase 4 (QA + final polish)  

---

## 💬 COMMUNICATION

**Slack:** `#rainuka-seo-polishers`  
**Decision Form:** Send to @Rainuka today  
**Review Cadence:** Async reviews on 48-hour cycle  
**Questions:** Reply in thread to daily standup

---

**Status:** 🟡 DRAFT READY FOR TEAM FEEDBACK + RAINUKA DECISIONS

Next: Share with Design Lead + Copy Lead for visual/voice guidance while awaiting Rainuka confirmation.
