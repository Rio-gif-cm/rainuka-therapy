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
  SpecialtyFAQ,
  SpecialtyWhyRainuka,
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { CareerIcon } from '@/components/SpecialtyIcons'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.career

// Career custom SVG color
const careerColor = '#1565c0'

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <SpecialtyHero
          accent={accent}
          eyebrow="Career & Burnout"
          title="Career Clarity That Honors Your Whole Self"
          lead="🎯 Career transitions don't have to feel impossible."
          description="Burnout, doubt, identity questions, career anxiety—you don't have to figure it out alone. Practical. Warm. Secular."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 — Who this is for */}
        <SpecialtySection id="suitability" tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="Are You…"
            intro="Career questions are rarely just about the job. If any of these are yours right now, we have somewhere to start."
          />
          <SpecialtyChecklist
            accent={accent}
            items={[
              "Burned out so deep you can't see a way out",
              '"Is this really what I want?" (identity questions)',
              "Dealing with imposter syndrome (they'll figure it out)",
              'Worried about career-change FOMO (what if I choose wrong?)',
              'Misaligned with the values your job asks of you',
              'Trapped in a perfectionism and overwork spiral',
            ]}
          />
        </SpecialtySection>

        {/* 2 — What I'm not */}
        <SpecialtySection tone="sage">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Setting expectations"
            title="Important: What I'm NOT"
          />

          <SpecialtyNote accent={accent} title="I'm not a life coach.">
            <p className="mb-0">
              I&apos;m not going to tell you what job to get or whether you should quit.
            </p>
          </SpecialtyNote>

          <div className="mt-6">
            <SpecialtyGrid>
              <SpecialtyCard accent={accent} title="What I AM">
                <p>
                  A therapist who helps you work through the mental and emotional pieces of career
                  decisions. Process fear. Untangle real anxiety from decision avoidance. Clarify
                  your values. Build confidence.
                </p>
              </SpecialtyCard>

              <SpecialtyCard accent={accent} title="The difference">
                <p>
                  You make the decision. I help you think clearly so <strong>you</strong> can
                  decide—without the fog, the panic, or the borrowed &quot;shoulds.&quot;
                </p>
              </SpecialtyCard>
            </SpecialtyGrid>
          </div>
        </SpecialtySection>

        {/* 3 — Why therapy */}
        <SpecialtySection tone="white">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Why this works"
            title="Why Therapy for Career Stuff"
            intro="Career decisions are identity decisions. &ldquo;What should I do?&rdquo; is really &ldquo;Who am I?&rdquo;"
          />

          <SpecialtyChecklist
            accent={accent}
            cols={1}
            items={[
              <>
                <strong>Burnout isn&apos;t laziness.</strong> It&apos;s your system telling you
                something has to change.
              </>,
              <>
                <strong>Doubt doesn&apos;t mean you&apos;re failing.</strong> It means you&apos;re
                paying attention to something real.
              </>,
              <>
                <strong>Clarity beats certainty.</strong> Therapy helps you untangle genuine anxiety
                from fear of change, so you can move without waiting to feel sure.
              </>,
              <>
                <strong>Your values, not the borrowed ones.</strong> We clarify what actually
                matters to you—not what you think you &quot;should&quot; want.
              </>,
            ]}
          />
        </SpecialtySection>

        {/* 4 — What we work on */}
        <SpecialtySection tone="cream" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="In session"
            title="What We Work On Together"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Burnout Recovery">
              <p>
                Understanding what led to burnout. Rest without guilt. Rebuilding sustainable work
                habits that survive contact with a real job.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Values Clarification">
              <p>
                What actually matters to YOU—not your parents, not your peers. What work feels
                aligned with your values and your life.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Decision-Making Paralysis">
              <p>
                Working through analysis paralysis. Building tolerance for uncertainty. Moving from
                &quot;I don&apos;t know&quot; to &quot;here&apos;s what I&apos;ll try.&quot;
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Imposter Syndrome">
              <p>
                The voice that says &quot;they&apos;ll figure out you don&apos;t belong.&quot;
                Building evidence-based confidence instead of louder reassurance.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Perfectionism & Overwork">
              <p>
                Perfectionism usually isn&apos;t a character flaw; it&apos;s a learned survival
                strategy. Maybe perfect grades meant love. Maybe mistakes meant shame.
              </p>
              <p>
                That strategy kept you safe then. It&apos;s exhausting you now. We separate your
                standards (worth keeping) from the fear underneath them (worth releasing).
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Grief for Paths Not Taken">
              <p>
                Mourning the career you thought you&apos;d have. Building genuine excitement for
                what&apos;s actually possible from here.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 5 — FAQ */}
        <SpecialtySection tone="white">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Questions"
            title="How It Works"
          />
          <SpecialtyFAQ
            accent={accent}
            items={[
              {
                q: 'How often do we meet, and for how long?',
                a: 'Typically weekly, 50-minute sessions. Some people need 6 sessions; some need 20. It depends on what you\u2019re navigating and what feels right—we reassess as we go.',
              },
              {
                q: 'Does telehealth actually work for career work?',
                a: 'Very well. No interruptions, no commute eating your energy, and continuity of thinking between sessions. You\u2019re in your own space, which usually makes the honest conversations easier.',
              },
              {
                q: 'What happens in the first few sessions?',
                a: 'We map what led to the burnout or the doubt, name the pressures you\u2019re actually under, and start clarifying your values. You leave with a clearer picture of the problem, not just a vaguer feeling about it.',
              },
              {
                q: 'Will you tell me whether to quit my job?',
                a: 'No. That decision is yours, and it should be. My job is to clear enough fog that you can make it deliberately rather than reactively—and to be there for the fallout either way.',
              },
            ]}
          />
        </SpecialtySection>

        {/* Testimonials */}
        {testimonialsByCategory.career.length > 0 && (
          <SpecialtySection tone="tint" width="wide">
            <SpecialtySectionHeader
              accent={accent}
              eyebrow="What Clients Say"
              title="From Burnout to Clarity"
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonialsByCategory.career.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  totalReviews={testimonialsByCategory.career.length}
                />
              ))}
            </div>
          </SpecialtySection>
        )}

        <SpecialtyWhyRainuka accent={accent}>
          Career transitions expose identity questions. I help you move through burnout, perfectionism, and paralysis—with trauma-informed understanding of how work shapes your nervous system and practical strategy for what comes next.
        </SpecialtyWhyRainuka>

        <SpecialtyCTA
          accent={accent}
          title="You don't have to figure this out alone"
          body="Let's talk about what's holding you back—and what's possible."
          ctaLabel="Book Your Free Call"
        />
      </main>

      <Footer />
    </div>
  )
}
