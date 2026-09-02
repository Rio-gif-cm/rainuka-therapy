import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import TestimonialCard from '@/components/TestimonialCard'
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
import RelatedPosts from '@/components/RelatedPosts'
import {
  specialtyAccents,
  SpecialtyHero,
  SpecialtySection,
  SpecialtySectionHeader,
  SpecialtyGrid,
  SpecialtyCard,
  SpecialtyNote,
  SpecialtyChecklist,
  SpecialtyWhyRainuka,
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { PerinatalIcon } from '@/components/SpecialtyIcons'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.perinatal

// Perinatal custom SVG color
const perinatalColor = '#c97660'

export const metadata: Metadata = {
  title: 'Perinatal Therapy | Pregnancy Loss & Postpartum Anxiety',
  description: 'Perinatal therapy for pregnancy loss, postpartum anxiety, and infertility. Trauma-informed support for reproductive grief. Schedule your free 15-minute consultation today.',
  keywords: 'perinatal therapy, postpartum anxiety, pregnancy loss, infertility, reproductive trauma',
  openGraph: {
    title: 'Perinatal Therapy | Pregnancy Loss & Postpartum Anxiety',
    description: 'Perinatal therapy for pregnancy loss, postpartum anxiety, and infertility. Trauma-informed support for reproductive grief. Schedule your free 15-minute consultation.',
    type: 'website',
    url: 'https://wonderloud-therapy.com/perinatal',
  },
}

export default function PerinatalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Specialties', href: '/#specialties' },
              { label: 'Perinatal Therapy' },
            ]}
            includeSchema
          />
        </div>

        <SpecialtyHero
          accent={accent}
          eyebrow="Perinatal Mental Health"
          title="Perinatal Therapy That Honors Your Body & Mind"
          lead="Pregnancy, loss, postpartum. What you're carrying—the grief, the fear, the exhaustion—isn't weakness."
          description="Infertility. Loss. Postpartum anxiety. Reproductive trauma. Specialized support for what often goes unspoken."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 - Who this is for */}
        <SpecialtySection id="suitability" tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="If You're Carrying…"
            intro="You don't need a diagnosis to start. If any of this sounds like your life right now, this is the right place."
          />
          <SpecialtyChecklist
            accent={accent}
            items={[
              'Infertility or pregnancy loss (the invisible grief)',
              'Pregnancy anxiety or OCD (racing thoughts about baby safety)',
              'Postpartum anxiety, depression, rage (yes, rage is real)',
              'Reproductive trauma or termination grief',
              'Identity shifts in motherhood',
              '"Was I ready for this?" doubts',
            ]}
          />
        </SpecialtySection>

        {/* 2 - Approach */}
        <SpecialtySection tone="sage" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="My approach"
            title="How I Support You"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Trauma-Informed">
              <p>
                Loss and trauma live in the body. We move at your pace.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Validation, Not Platitudes">
              <p>
                Your grief is real. Your anxiety is real. Both coexist with joy.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Practical Tools">
              <p>
                Strategies to manage anxiety, process grief, rebuild identity.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Culturally Humble">
              <p>
                I meet you where you are-not where I think you should be.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 3 - What you get */}
        <SpecialtySection tone="white">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="In session"
            title="What Changes in Therapy"
          />

          <SpecialtyNote accent={accent} title="A Room That Gets It">
            <p className="mb-0">
              Judgment-free. Your pace. Anger, despair, hope-all belong here.
            </p>
          </SpecialtyNote>

          <div className="mt-8">
            <SpecialtyChecklist
              accent={accent}
              cols={1}
              items={[
                <>
                  <strong>A space where you&apos;re not &quot;too much.&quot;</strong> Anxiety that keeps you up isn&apos;t annoying. Grief that crashes into joy isn&apos;t weakness.
                </>,
                <>
                  <strong>The biology behind what you&apos;re feeling.</strong> Perinatal hormones rewire your brain. Your emotions aren&apos;t random-they&apos;re a response.
                </>,
                <>
                  <strong>Permission to hold contradictions.</strong> Love your baby and resent the loss of freedom. Feel relief after loss. Want connection but need solitude. All real, all true.
                </>,
                <>
                  <strong>Tools that work off the couch.</strong> How to ground yourself when anxiety spikes. What to say to your partner. When to ask for help.
                </>,
                <>
                  <strong>Reclaiming who you are now.</strong> Motherhood shifts your identity-sometimes loss does too. We don&apos;t bypass that; we integrate it.
                </>,
              ]}
            />
          </div>
        </SpecialtySection>

        {/* 4 - Hope & recovery */}
        <SpecialtySection tone="cream" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="What the research says"
            title="You're Not Broken-Your Brain Is Adapting"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} title="Your Anxiety Has a Name">
              <p>
                1 in 5 mothers. Biological response. Treatable.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Mixed Feelings Don't Mean You Love Less">
              <p>
                Love and space coexist. Grief and relief coexist. Complexity is human.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Recovery Is Real">
              <p>
                Treatable. Responsive to therapy, medication, and strategies. You won&apos;t feel this way forever.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Naming It Changes It">
              <p>
                Naming what you experience is the first shift. Then we work with it.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 5 - Logistics */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Logistics"
            title="How We'll Work Together"
          />

          <SpecialtyNote accent={accent} title="Modalities I use">
            <ul>
              <li>Trauma-focused CBT (processing difficult experiences)</li>
              <li>Somatic approaches (body-aware therapy)</li>
              <li>Attachment-informed therapy (relationships, bonding)</li>
              <li>Mindfulness and grounding techniques</li>
            </ul>
          </SpecialtyNote>

          <div className="mt-6">
            <SpecialtyGrid>
              <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Telehealth Available">
                <p>
                  Sessions from home, your office, or wherever feels comfortable. 28 states served.
                  Built for new parents who can&apos;t easily leave the house.
                </p>
              </SpecialtyCard>

              <SpecialtyCard accent={accent} icon={<PerinatalIcon size={28} color={perinatalColor} />} title="Sliding Scale">
                <p>
                  Financial stress from infertility or loss shouldn&apos;t keep you from care.
                  We&apos;ll figure out rates that work for you.
                </p>
              </SpecialtyCard>
            </SpecialtyGrid>
          </div>
        </SpecialtySection>

        {/* Testimonials */}
        {testimonialsByCategory.perinatal.length > 0 && (
          <SpecialtySection tone="tint" width="wide">
            <SpecialtySectionHeader
              accent={accent}
              eyebrow="What Clients Say"
              title="You're Not Alone"
            />
            <div className="max-w-4xl mx-auto mb-8">
              <TestimonialConsentDisclaimer />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonialsByCategory.perinatal.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  totalReviews={testimonialsByCategory.perinatal.length}
                />
              ))}
            </div>
          </SpecialtySection>
        )}

        <SpecialtyWhyRainuka accent={accent}>
          Perinatal specialist. Trauma-informed. Validation instead of platitudes.
        </SpecialtyWhyRainuka>

        <SpecialtyCTA
          accent={accent}
          title="You're not alone in this"
          body="Let's talk about what you're carrying. No judgment, no pressure-just someone who understands perinatal grief, anxiety, and the identity shifts that come with it."
          ctaLabel="Schedule Your Free Call"
        />

        <RelatedPosts
          accent={accent}
          title="Explore Related Topics"
          posts={[
            {
              path: '/perinatal-faq',
              label: 'Perinatal FAQs',
              description: 'Common questions about pregnancy anxiety, postpartum depression, and reproductive grief. Get answers to what you\'re wondering about.'
            },
            {
              path: '/parents',
              label: 'Support for Parents',
              description: 'Therapy for the identity shifts, exhaustion, and ambivalence that parenthood brings. You\'re not alone in this.'
            }
          ]}
        />
      </main>

      <Footer />
    </div>
  )
}
