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
  SpecialtyCTA,
} from '@/components/SpecialtyPage'
import { testimonialsByCategory } from '@/src/data/testimonials'

const accent = specialtyAccents.perinatal

export const metadata: Metadata = {
  title: 'Perinatal Therapy | Pregnancy Loss, Postpartum Anxiety, Infertility | Rainuka Oberoi, LCSW',
  description: 'Perinatal therapy for pregnancy loss, postpartum anxiety, infertility, and reproductive trauma. Rainuka specializes in trauma-informed perinatal mental health support.',
  openGraph: {
    title: 'Perinatal Therapy | Rainuka Oberoi, LCSW',
    description: 'Perinatal therapy for pregnancy loss, postpartum anxiety, infertility, reproductive trauma. Compassionate, trauma-informed support.',
    type: 'website',
  },
}

export default function PerinatalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <SpecialtyHero
          accent={accent}
          eyebrow="Perinatal Mental Health"
          title="Perinatal Therapy That Honors Your Journey"
          lead="Pregnancy, loss, postpartum. What you're carrying isn't weakness."
          description="Infertility shame. Pregnancy loss grief. Postpartum anxiety and OCD. Reproductive trauma. I specialize in what often goes unnamed—and help you feel less alone."
          ctaLabel="Get Support That Gets You"
        />

        {/* 1 — Who this is for */}
        <SpecialtySection tone="white" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="Who I help"
            title="If You're Navigating…"
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

        {/* 2 — Approach */}
        <SpecialtySection tone="sage" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="My approach"
            title="How I Support You"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} icon="🛡️" title="Trauma-Informed">
              <p>
                Perinatal experiences—especially loss and reproductive trauma—are deeply held in
                the body. I work slowly, respecting your nervous system and your timeline.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🤍" title="Validation, Not Platitudes">
              <p>
                No &quot;you should just be grateful&quot; or &quot;at least you can try again.&quot;
                Your grief is real. Your anxiety is real. And both can coexist with joy.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🧰" title="Practical Tools">
              <p>
                You&apos;ll learn strategies to manage anxiety, process grief, and rebuild identity.
                Therapy that fits into your actual life.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} icon="🌍" title="Culturally Humble">
              <p>
                Reproductive choices vary by culture, community, and values. I meet you where you
                are, not where I think you &quot;should&quot; be.
              </p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 3 — What you get */}
        <SpecialtySection tone="white">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="In session"
            title="What Changes in Therapy"
          />

          <SpecialtyNote accent={accent} title="Safe Space for Your Experience">
            <p className="mb-0">
              This is a judgment-free environment. Your timeline, your pace. Every emotion you
              bring—grief, joy, rage, ambivalence—is welcomed here.
            </p>
          </SpecialtyNote>

          <div className="mt-8">
            <SpecialtyChecklist
              accent={accent}
              cols={1}
              items={[
                <>
                  <strong>A space where you&apos;re not &quot;too much.&quot;</strong> Your anxiety
                  isn&apos;t annoying. Your grief isn&apos;t weakness. You won&apos;t be rushed.
                </>,
                <>
                  <strong>Real understanding of what&apos;s happening.</strong> Perinatal hormones
                  affect your brain, your body, your emotions. We&apos;ll make sense of that
                  together.
                </>,
                <>
                  <strong>Permission to feel all of it.</strong> Joy and grief. Relief and loss.
                  Hope and fear. They can all be true at once.
                </>,
                <>
                  <strong>Practical strategies you can use today.</strong> Anxiety management.
                  Grounding techniques. How to talk to your partner about what you&apos;re
                  experiencing.
                </>,
                <>
                  <strong>Rebuilding your sense of self.</strong> Motherhood, pregnancy loss, and
                  reproductive experiences change who you are. We&apos;ll help you integrate that.
                </>,
              ]}
            />
          </div>
        </SpecialtySection>

        {/* 4 — Hope & recovery */}
        <SpecialtySection tone="cream" width="wide">
          <SpecialtySectionHeader
            accent={accent}
            eyebrow="What the research says"
            title="You're Not Broken—Your Brain Is Adapting"
          />
          <SpecialtyGrid>
            <SpecialtyCard accent={accent} title="Your Anxiety Has a Name">
              <p>
                Postpartum anxiety affects 1 in 5 mothers. It&apos;s not weakness—it&apos;s a
                biological response to hormonal shifts and identity changes.
              </p>
              <p>
                Your brain is working overtime to protect your baby. That&apos;s real. That&apos;s
                treatable.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Mixed Feelings Don't Mean You Love Less">
              <p>
                You can feel profound love for your baby AND want space. You can grieve a pregnancy
                loss AND feel relief. You can be grateful AND exhausted.
              </p>
              <p>Therapy helps you stop being ashamed of your complexity.</p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Recovery Is Real">
              <p>
                Perinatal mental health conditions respond to treatment. With the right
                support—therapy, possibly medication, and practical strategies—most clients see
                significant improvement.
              </p>
              <p>
                You won&apos;t feel this way forever. This is a moment in time, not your identity.
              </p>
            </SpecialtyCard>

            <SpecialtyCard accent={accent} title="Naming It Changes It">
              <p>
                So much perinatal distress goes unspoken because it feels shameful to say out loud.
                Putting language to what you&apos;re experiencing is the first shift.
              </p>
              <p>Once it has a name, we can work with it instead of around it.</p>
            </SpecialtyCard>
          </SpecialtyGrid>
        </SpecialtySection>

        {/* 5 — Logistics */}
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
              <SpecialtyCard accent={accent} icon="💻" title="Telehealth Available">
                <p>
                  Sessions from home, your office, or wherever feels comfortable. 28 states served.
                  Built for new parents who can&apos;t easily leave the house.
                </p>
              </SpecialtyCard>

              <SpecialtyCard accent={accent} icon="🤝" title="Sliding Scale">
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
          <SpecialtySection tone="warm-tint" width="wide">
            <SpecialtySectionHeader
              accent={accent}
              eyebrow="What Clients Say"
              title="You're Not Alone"
            />
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

        <SpecialtyCTA
          accent={accent}
          title="You're not alone in this"
          body="Let's talk about what you're carrying. No judgment, no pressure—just compassionate support tailored to your experience."
          ctaLabel="Schedule Your Free Call"
        />
      </main>

      <Footer />
    </div>
  )
}
