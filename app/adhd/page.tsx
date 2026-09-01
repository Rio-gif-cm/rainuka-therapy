import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
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
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.adhd

export const metadata: Metadata = {
  title: 'Adult ADHD Therapy | Diagnosis, Executive Function | Rainuka Oberoi, LCSW',
  description: 'Therapy for adult ADHD diagnosis, rejection sensitivity, executive dysfunction, burnout. Rainuka specializes in ADHD-informed therapy.',
  keywords: 'ADHD therapy, adult ADHD, ADHD diagnosis, executive dysfunction, ADHD coaching',
  openGraph: {
    title: 'Adult ADHD Therapy | Rainuka Oberoi, LCSW',
    description: 'ADHD diagnosis, rejection sensitivity, executive dysfunction. Integrated ADHD-informed therapy.',
    type: 'website',
  },
  canonical: 'https://rainukatherapy.com/adhd',
}

export default function ADHDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <SpecialtyHero
          accent={accent}
          eyebrow="Adult ADHD"
          title="ADHD Therapy That Actually Understands You"
          lead="Diagnosed at 30? 40? 50? Finally it makes sense."
          description="Late ADHD diagnosis comes with grief, relief, and confusion. Therapy to understand yourself—not fix yourself. Shame-aware. Neurodivergent-affirming."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 — Who this is for */}
        <SpecialtySection tone="white" width="wide">
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

        {/* 2 — What ADHD actually is */}
        <SpecialtySection tone="sage">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="The basics"
            title="What ADHD Actually Is"
            intro="ADHD isn't laziness. It's not a character flaw. It's an executive function difference—your brain prioritizes and organizes differently than neurotypical brains."
          />

          <SpecialtyNote accent={accent} title="This might show up as:">
            <ul>
              <li>Time blindness (&quot;wait, how long was I doing that?&quot;)</li>
              <li>Starting projects (paralyzed by choice or overwhelm)</li>
              <li>Emotional regulation (feelings hit harder, faster)</li>
              <li>Organization (systems feel impossible to keep)</li>
              <li>Shame (feeling broken because you can&apos;t &quot;just do it&quot;)</li>
            </ul>
          </SpecialtyNote>

          <p className="text-warm-gray-700 mt-6 mb-0">
            <strong>The real talk:</strong> Late ADHD diagnosis—especially in women—comes with
            grief. Grief for lost time. Grief for the ways you blamed yourself. And also relief:
            &quot;So I&apos;m not broken. I&apos;m just different.&quot;
          </p>
        </SpecialtySection>

        {/* 3 — How I work */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="My approach"
            title="How I Work With ADHD"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon="💪" title="Strengths-Based">
              <p>
                ADHD ≠ deficit. Your brain is different, not broken. We&apos;ll understand your
                specific presentation and build on your actual strengths.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🕊️" title="No Shame">
              <p>
                You&apos;re not lazy. You&apos;re not broken. You&apos;re not &quot;not trying hard
                enough.&quot; Therapy helps you replace shame with self-understanding.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🧰" title="Practical Systems">
              <p>
                Not shame-based productivity tips. Real strategies that work WITH your ADHD brain—
                time management, task initiation, emotional regulation tools.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🌱" title="Grief + Excitement">
              <p>
                We process grief for lost time while exploring what&apos;s possible now. ADHD
                identity integration, not just diagnosis acceptance.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🗣️" title="Neurodivergent-Affirming Language">
              <p>
                You&apos;ll never hear &quot;fix your brain&quot; or &quot;overcome your ADHD.&quot;
                We work with your neurodiversity, not against it.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="👩" title="ADHD in Women">
              <p>
                High masking, perfectionism, and anxiety that hides the hyperactivity. You learned
                early how to appear &quot;normal&quot; while burning out internally.
              </p>
              <p>Late diagnosis for women carries its own specific grief. We make room for it.</p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 4 — Identity reconstruction */}
        <SpecialtySection tone="cream">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="The real work"
            title="You Are Not Broken. Identity Reconstruction Starts Here."
            intro="For decades, you may have believed something was fundamentally wrong with you. That belief didn't come from nowhere—it's the result of missed deadlines, forgotten promises, and criticism internalized until struggling felt like evidence of who you are."
          />

          <SpecialtyNote accent={accent} title="Research on late ADHD diagnosis shows us:">
            <ul>
              <li>
                <strong>Shame is inherited, not intrinsic.</strong> You internalized criticism
                because your ADHD went unrecognized.
              </li>
              <li>
                <strong>Self-compassion rewires how you treat yourself.</strong> Adults with ADHD
                who develop self-compassion see marked improvement in mental health.
              </li>
              <li>
                <strong>Identity reconstruction is the real work.</strong> Instead of &quot;I&apos;m
                lazy,&quot; it becomes &quot;I was working with challenges no one recognized.&quot;
              </li>
            </ul>
          </SpecialtyNote>

          <p className="text-lg font-semibold mt-8 mb-4" style={{ color: accent.accentText }}>
            The shift you&apos;re making now is not from broken to fixed. It&apos;s from
            self-attack to self-understanding.
          </p>

          <p className="text-warm-gray-700 mb-0">
            That doesn&apos;t happen overnight. But it begins with a single truth: your ADHD brain
            isn&apos;t proof that you&apos;re not good enough. It&apos;s proof that you&apos;ve been
            surviving without the tools you needed. Now that you know, everything changes.
          </p>
        </SpecialtySection>

        {/* 5 — Social proof */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="You're in good company"
            title="Late Diagnosis Isn't a Flaw"
            intro="It's actually common—and it changes everything when you finally understand yourself."
          />

          <SpecialtyGrid>
            <SpecialtyStat
              accent={accent}
              value="60%+"
              label="of ADHD diagnoses happen in adulthood, many in the 30s–50s"
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
                &quot;What feels broken about you has a name. And understanding it—with support—is
                where real change starts.&quot;
              </p>
            </SpecialtyNote>
          </div>
        </SpecialtySection>

        {/* 6 — FAQ */}
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
                a: "Not in the hustle-culture sense. But yes—you'll learn strategies that work WITH your brain, making tasks feel less impossible.",
              },
              {
                q: 'What if I have ADHD + anxiety or depression?',
                a: "This is common. We address all of it together. Sometimes anxiety is worsened by ADHD struggles; sometimes they're separate. We figure out what's what.",
              },
              {
                q: 'I was diagnosed decades late. Is it too late to do anything about it?',
                a: 'No. Understanding your brain reframes your entire history and changes how you build the next chapter. Clients who start in their 40s and 50s often describe it as the most clarifying work they have ever done.',
              },
            ]}
          />
        </SpecialtySection>

        {/* Testimonials */}
        {testimonialsByCategory.adhd.length > 0 && (
          <SpecialtySection tone="warm-tint" width="wide">
            <SpecialtySectionHeader
              accent={accent}
              eyebrow="What Clients Say"
              title="Stories of Recognition"
            />
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
