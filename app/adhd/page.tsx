import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
import {
  specialtyAccents,
  SpecialtyHero,
  SpecialtySection,
  SpecialtySectionHeader,
  SpecialtyGrid,
  SpecialtyCard,
  SpecialtyNote,
  SpecialtyChecklist,
  SpecialtyStat,
  SpecialtyFAQ,
  SpecialtyWhyRainuka,
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { ADHDIcon } from '@/components/SpecialtyIcons'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.adhd

// ADHD custom SVG color
const adhdColor = '#e67e31'

export const metadata: Metadata = {
  title: 'Adult ADHD Therapy | Diagnosis & Executive Function',
  description: 'ADHD therapy for late diagnosis, rejection sensitivity, and executive dysfunction. Get help with burnout and shame. Book your free 15-minute ADHD consultation.',
  keywords: 'adult ADHD, ADHD therapy, ADHD diagnosis, executive function, adult ADHD therapy',
  canonical: 'https://wonderloud-therapy.com/adhd',
  openGraph: {
    title: 'Adult ADHD Therapy | Diagnosis & Executive Function',
    description: 'ADHD therapy for late diagnosis, rejection sensitivity, and executive dysfunction. Get help with burnout and shame. Book your free 15-minute ADHD consultation.',
    type: 'website',
    url: 'https://wonderloud-therapy.com/adhd',
  },
}
  keywords: 'ADHD therapy, adult ADHD, ADHD diagnosis, executive dysfunction, ADHD coaching',
  openGraph: {
    title: 'Adult ADHD Therapy | Wonderloud Therapy',
    description: 'ADHD diagnosis, rejection sensitivity, executive dysfunction. Integrated ADHD-informed therapy.',
    type: 'website',
  },
}

export default function ADHDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <SpecialtyHero
          accent={accent}
          eyebrow="Adult ADHD"
          title="ADHD Therapy That Reframes Your Brain, Not Your Shame"
          lead="🧠 Diagnosed at 30? 40? 50? Finally it makes sense."
          description="Late ADHD diagnosis comes with grief, relief, and confusion. Therapy to understand yourself, not fix yourself. Shame-aware. Neurodivergent-affirming."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 - Who this is for */}
        <SpecialtySection id="suitability" tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="If You're Experiencing…"
            intro="Late diagnosis rearranges everything you thought you knew about yourself. These are the threads we pull on together."
          />
          <SpecialtyChecklist
            accent={accent}
            items={[
              '"Why didn\'t anyone catch this earlier?" (late diagnosis grief)',
              'Internalized shame ("I\'m broken / lazy / not trying hard enough")',
              '"I\'m masking all the time" (the exhaustion of hiding)',
              'Rejection sensitivity (replaying every interaction)',
              'ADHD + anxiety + depression overlap (very common)',
              'Career and relationship patterns suddenly making sense',
            ]}
          />
        </SpecialtySection>

        {/* 2 - What ADHD actually is */}
        <SpecialtySection tone="sage">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="The basics"
            title="What ADHD Actually Is"
            intro="Executive function difference-your brain works differently."
          />

          <SpecialtyNote accent={accent} title="What this shows up as:">
            <ul>
              <li>Time blindness: "wait, how long was I doing that?"</li>
              <li>Starting projects-paralyzed by choice or overwhelm</li>
              <li>Emotional regulation: feelings hit harder and faster</li>
              <li>Organization: systems feel impossible to maintain</li>
              <li>Shame: the story that you're broken because you can't "just do it"</li>
            </ul>
          </SpecialtyNote>

          <p className="text-warm-gray-700 mt-6 mb-0">
            You might feel relief (finally has a name) and grief (lost decades). Both are normal. That's where therapy comes in.
          </p>
        </SpecialtySection>

        {/* 3 - How I work */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="My approach"
            title="How I Work With ADHD"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="Strengths-Based">
              <p>
                Different, not broken. We&apos;ll build on your strengths.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="No Shame">
              <p>
                Replace shame with self-understanding.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="Practical Systems">
              <p>
                Real strategies that work WITH your brain.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="Grief + Excitement">
              <p>
                You'll process the grief of lost time and explore what's possible now. That's identity integration.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="Neurodivergent-Affirming Language">
              <p>
                Work with your neurodiversity, not against it.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<ADHDIcon size={28} color={adhdColor} />} title="ADHD in Women">
              <p>
                High masking hides hyperactivity. Diagnosis reveals what&apos;s always been there.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 4 - Identity reconstruction */}
        <SpecialtySection tone="cream">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="The hard part"
            title="You Are Not Broken. Identity Reconstruction Starts Here."
            intro="Decades of internalized criticism. Now you know why. That changes everything."
          />

          <SpecialtyNote accent={accent} title="Research on late ADHD diagnosis shows us:">
            <ul>
              <li>
                <strong>Shame is inherited, not intrinsic.</strong> You internalized criticism
                because your ADHD went unrecognized.
              </li>
              <li>
                <strong>Self-compassion rewires how you treat yourself.</strong> Research shows that developing self-compassion leads to measurably lower anxiety and depression scores in adults with ADHD.
              </li>
              <li>
                <strong>Identity reconstruction is what actually changes things.</strong> Instead of &quot;I&apos;m
                lazy,&quot; it becomes &quot;I was working with challenges no one recognized.&quot;
              </li>
            </ul>
          </SpecialtyNote>

          <p className="text-lg font-semibold mt-8 mb-4" style={{ color: accent.accentText }}>
            You're moving from self-attack to self-understanding. That's the actual shift.
          </p>

          <p className="text-warm-gray-700 mb-0">
            You&apos;ve been surviving without the tools. Now you know. Everything changes.
          </p>
        </SpecialtySection>

        {/* 5 - Social proof */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="You're in good company"
            title="Late Diagnosis Isn't a Flaw"
            intro="It's actually common-and it changes everything when you finally understand yourself."
          />

          <SpecialtyGrid>
            <SpecialtyStat
              accent={accent}
              value="60%+"
              label="of ADHD diagnoses happen in adulthood, many in the 30s-50s"
            />
            <SpecialtyStat
              accent={accent}
              value="3:1"
              label="Women historically under-diagnosed due to masking and different presentation"
            />
          </SpecialtyGrid>

          <div className="mt-8">
            <SpecialtyNote accent={accent}>
              <p className="italic mb-0">
                &quot;What feels broken about you has a name. And understanding it-with support-is
                where real change starts.&quot;
              </p>
            </SpecialtyNote>
          </div>
        </SpecialtySection>

        {/* 6 - FAQ */}
        <SpecialtySection tone="sage">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Questions"
            title="Common ADHD Questions"
          />
          <SpecialtyFAQ
            accent={accent}
            items={[
              {
                q: 'Do I need medication?',
                a: "That's between you and your psychiatrist. Therapy helps you understand yourself while medication does its work. We can talk about both.",
              },
              {
                q: 'Will therapy help me be "more productive"?',
                a: "Not in the hustle-culture sense. But yes-you'll learn strategies that work WITH your brain, making tasks feel less impossible.",
              },
              {
                q: 'What if I have ADHD + anxiety or depression?',
                a: "This is common. We address all of it together. Sometimes anxiety is worsened by ADHD struggles; sometimes they're separate. We figure out what's what.",
              },
              {
                q: 'I was diagnosed decades late. Is it too late to do anything about it?',
                a: 'No. Understanding your brain reframes everything. Clients who start therapy in their 40s and 50s report that it finally makes sense of decades of patterns they couldn\'t explain before.',
              },
            ]}
          />
        </SpecialtySection>

        {/* Testimonials */}
        {testimonialsByCategory.adhd.length > 0 && (
          <SpecialtySection tone="tint" width="wide">
            <SpecialtySectionHeader
              accent={accent}
              eyebrow="What Clients Say"
              title="Stories of Recognition"
            />
            <div className="max-w-4xl mx-auto mb-8">
              <TestimonialConsentDisclaimer />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonialsByCategory.adhd.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  totalReviews={testimonialsByCategory.adhd.length}
                />
              ))}
            </div>
          </SpecialtySection>
        )}

        <SpecialtyWhyRainuka accent={accent}>
          Untangle ADHD from shame. Affirming, neurodiversity-grounded support.
        </SpecialtyWhyRainuka>

        <SpecialtyCTA
          accent={accent}
          title="Finally understanding yourself"
          body="ADHD diagnosis changes everything. Let's make sense of it together."
          ctaLabel="Book Your Free Call"
        />
      </main>

      <Footer />
    </div>
  )
}
