import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
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
  SpecialtyFAQ,
  SpecialtyWhyRainuka,
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { CareerIcon } from '@/components/SpecialtyIcons'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.career

// Career custom SVG color
const careerColor = 'var(--neutral-sage-900)'

export const metadata: Metadata = {
  title: 'Career Therapy | Burnout Support & Life Redesign',
  description: 'Therapy for career burnout, job transitions, and meaningful work. Redesign your career path with professional support. Schedule free consultation today.',
  keywords: 'career therapy, career counseling, burnout, job transition, career change, meaningful work',
  openGraph: {
    title: 'Career Therapy | Burnout & Transition Support',
    description: 'Career counseling for burnout, job transitions, and meaningful work. Therapy for career satisfaction and life redesign.',
    type: 'website',
    url: 'https://wonderloud-therapy.com/career',
  },
}

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Specialties', href: '/#specialties' },
              { label: 'Career Therapy' },
            ]}
            includeSchema
          />
        </div>

        <SpecialtyHero
          accent={accent}
          eyebrow="Career & Burnout"
          title="When Your Job Stops Working"
          lead="Career transitions feel impossible when you're alone with the doubt."
          description="Burnout. Identity questions. The panic when you can't tell if you're failing or if the job itself is wrong. You don't have to untangle this alone. We work through it together."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 - Who this is for */}
        <SpecialtySection id="suitability" tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="You might be here if…"
            intro="Career confusion usually means something real needs to change. Not weakness-just a signal worth listening to."
          />
          <SpecialtyChecklist
            accent={accent}
            items={[
              "Burnout so deep you can't imagine it lifting",
              'The question "Is this what I actually want?" won\'t go away',
              'Imposter syndrome-convinced you\'re about to be found out',
              "Scared of making the wrong move, so you move nowhere",
              "Your values and the job's values don't align",
              "Perfectionism and overwork became how you stay safe",
            ]}
          />
        </SpecialtySection>

        {/* 2 - What I'm not */}
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

        {/* 3 - Why therapy */}
        <SpecialtySection tone="white">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Why this works"
            title="Why Therapy for Career Stuff"
            intro="Career decisions are identity decisions. Who you are at work, what you'll tolerate, what's worth the cost."
          />

          <SpecialtyChecklist
            accent={accent}
            cols={1}
            items={[
              <>
                <strong>Burnout is real.</strong> Your system has hit a limit. That's not laziness-that's data.
              </>,
              <>
                <strong>Doubt is honest.</strong> If something feels wrong, you're picking up on something true.
              </>,
              <>
                <strong>Clarity is enough.</strong> You don't need certainty to move. You need to know why you're moving.
              </>,
              <>
                <strong>Your values, not borrowed ones.</strong> Separate what you want from what you've been told to want.
              </>,
            ]}
          />
        </SpecialtySection>

        {/* 4 - What we work on */}
        <SpecialtySection tone="cream" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="In session"
            title="What We Work On Together"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Burnout Recovery">
              <p>
                What happens when rest becomes guilt? When can you stop running? We map the exhaustion and rebuild without shame.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Values Clarification">
              <p>
                Your real wants, not the ones you inherited. Does the job align with them?
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Decision-Making Paralysis">
              <p>
                Every option feels wrong because you're judging them without clarity. We narrow it. Then you move.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Imposter Syndrome">
              <p>
                The voice that says you'll be found out. It's loud. Let's look at the evidence instead.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Perfectionism & Overwork">
              <p>
                It kept you safe once. Now it's the trap. Separate who you are from what you produce.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<CareerIcon size={28} color={careerColor} />} title="Grief for Paths Not Taken">
              <p>
                Every choice closes doors. Acknowledge what you're leaving behind. Then look at what's ahead.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 5 - FAQ */}
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
                a: 'Weekly, 50-minute sessions. Most people need 6 to 20 sessions. It depends on what you\'re working with and what feels right. We check in and adjust.',
              },
              {
                q: 'Does telehealth actually work for career work?',
                a: 'Yes. No commute draining your energy, no interruptions, and you\'re in a space where honesty comes easier. Continuity between sessions is real too.',
              },
              {
                q: 'What happens in the first few sessions?',
                a: 'We map what led to the burnout or the doubt. We name the actual pressures you\'re under. We test your values. You leave with a clear picture of the problem instead of just a feeling that something\'s wrong.',
              },
              {
                q: 'Will you tell me whether to quit my job?',
                a: 'No. That decision stays yours. My job is to clear the fog so you make it deliberately instead of reactively. And I\'ll be here for what comes after.',
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
            <div className="max-w-4xl mx-auto mb-8">
              <TestimonialConsentDisclaimer />
            </div>
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
          Real career work. Burnout doesn't fix itself, and neither do decisions made in panic.
        </SpecialtyWhyRainuka>

        <SpecialtyCTA
          accent={accent}
          title="Career confusion isn't something you figure out alone"
          body="Let's talk about what's stopping you. And what moves you forward."
          ctaLabel="Book Your Free Call"
        />
      </main>

      <Footer />
    </div>
  )
}
