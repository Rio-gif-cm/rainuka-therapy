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
          title="When Your Job Stops Working"
          lead="Career transitions feel impossible when you're alone with the doubt."
          description="Burnout. Identity questions. The panic when you can't tell if you're failing or if the job itself is wrong. You don't have to untangle this alone. We work through it together."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 — Who this is for */}
        <SpecialtySection id="suitability" tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="You might be here if…"
            intro="Career confusion usually means something real needs to change. Not weakness—just a signal worth listening to."
          />
          <SpecialtyChecklist
            accent={accent}
            items={[
              "Burnout so deep you can't imagine it lifting",
              'The question "Is this what I actually want?" won\'t go away',
              'Imposter syndrome—convinced you\'re about to be found out',
              "Scared of making the wrong move, so you move nowhere",
              "Your values and the job's values don't align",
              "Perfectionism and overwork became how you stay safe",
            ]}
          />
        </SpecialtySection>

        {/* 2 — What I'm not */}
        <SpecialtySection tone="sage">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Setting expectations"
            title="What This Is Not"
          />

          <SpecialtyNote accent={accent} title="I won't tell you what to do.">
            <p className="mb-0">
              You know yourself better than anyone. My job is to slow things down so you can hear what you actually need, not what you think you should want.
            </p>
          </SpecialtyNote>

          <div className="mt-6">
            <SpecialtyGrid>
              <SpecialtyCard accent={accent} title="What we do instead">
                <p>
                  Map your burnout. Name the real pressures you're under. Test your values against what you're doing. Move from "I don't know" to "I know, and here's why."
                </p>
              </SpecialtyCard>

              <SpecialtyCard accent={accent} title="The actual difference">
                <p>
                  A coach tells you what to do. I help you think clearly enough to decide it yourself.
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
                <strong>Burnout isn&apos;t laziness.</strong> Your system is telling you something has to change.
              </>,
              <>
                <strong>Doubt doesn&apos;t mean you&apos;re failing.</strong> It means you&apos;re paying attention to something real.
              </>,
              <>
                <strong>Clarity beats certainty.</strong> Move without waiting to feel sure.
              </>,
              <>
                <strong>Your values, not the borrowed ones.</strong> Clarify what actually matters to you.
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
                Understand burnout. Rest without guilt. Rebuild sustainable habits.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Values Clarification">
              <p>
                What actually matters to you. Aligned work.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Decision-Making Paralysis">
              <p>
                Work through analysis paralysis. Move from &quot;I don&apos;t know&quot; to &quot;I&apos;ll try.&quot;
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Imposter Syndrome">
              <p>
                Replace the doubt voice with evidence-based confidence.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Perfectionism & Overwork">
              <p>
                Perfectionism was survival. Now it&apos;s exhausting. Separate worth from performance.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Grief for Paths Not Taken">
              <p>
                Mourn the path not taken. Build excitement for what&apos;s ahead.
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
          Trauma-informed career support. Burnout recovery and practical strategy.
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
