import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
import Link from 'next/link'
import { expandedTestimonials } from '@/src/data/testimonials'

export const metadata: Metadata = {
  title: 'About Rainuka Oberoi | Licensed Therapist (Canada, California, Florida)',
  description: 'Meet Rainuka Oberoi, licensed therapist in Canada, California, and Florida. Specializing in perinatal mental health, adult ADHD diagnosis, career transitions. Trauma-informed, culturally humble therapist.',
  keywords: 'about rainuka oberoi, therapist, licensed, credentials, training, perinatal mental health, Canada, California, Florida',
  openGraph: {
    title: 'About Rainuka Oberoi | Licensed Therapist',
    description: 'Learn about Rainuka\'s approach, credentials, and why she specializes in perinatal mental health, ADHD diagnosis, and career counseling.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="hero-section bg-gradient-to-br from-cream-50 to-burgundy-50 py-12 md:py-16 lg:py-20">
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warm-gray-900 mb-3 md:mb-4">
              Meet Your Therapist
            </h1>
            <p className="text-lg md:text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Therapist Who Gets It. Someone Who's Been There.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
              {/* Photo placeholder */}
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-burgundy-200 to-warm-accent-light overflow-hidden shadow-lg flex items-center justify-center w-80 h-80">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍⚕️</div>
                    <p className="text-warm-gray-600 font-medium">
                      Professional Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-4 md:mb-6">
                  Rainuka Oberoi <span className="text-lg text-burgundy-600 font-normal">(she/her)</span>
                </h2>

                <div className="space-y-6 text-warm-gray-600">
                  <p>
                    Adults often show up fine. The job's going well, relationships look stable, milestones are hit. Inside? That's where the hard work happens. I work with perinatal grief, undiagnosed ADHD, burnout disguised as ambition—the gap between who you present and who you are inside.
                  </p>

                  {/* Age requirement notice */}
                  <div className="bg-burgundy-50 border-l-4 border-burgundy-400 rounded p-4">
                    <p className="font-medium text-burgundy-800 text-sm">
                      <strong>Important:</strong> This practice is for adults 18 and older. I work with adult mental health and do not work with minors.
                    </p>
                  </div>

                  <p>
                    For years I looked fine. I had the job, the relationships, hit the milestones. Inside? I was grieving infertility, didn't understand why basic tasks felt impossible at 30 (undiagnosed ADHD), and burned out so completely that a career that looked perfect from outside felt completely wrong for how my brain actually works. I know that gap between outside and inside intimately.
                  </p>

                  <p>
                    The turning point was telling a friend—actually telling her—about my infertility. The moment I stopped curating my story, something shifted. She felt seen. Not by someone hiding behind credentials, but by someone who knew that loneliness. I realized my struggles weren't liabilities. They were my actual qualifications.
                  </p>

                  <p>
                    I work trauma-informed and culturally humble. Therapy isn't about fixing you—it's about understanding yourself better so you can build a life that fits. I show up as myself, not a blank screen. You're getting someone who has sat in the hard places and knows what it takes to move through them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Origin */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-4 md:mb-6 text-center">
              What I've Learned Living It
            </h2>
            <p className="text-center text-warm-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              These lessons shaped how I show up for clients.
            </p>

            <div className="space-y-8">
              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  The Gap Between Outside and Inside
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  I was high-functioning. Still am. I showed up to work, maintained friendships, hit milestones-while grieving 
                  infertility, struggling with undiagnosed ADHD, and feeling like I'd made the wrong career choice. Nobody saw it. 
                  I didn't want them to.
                </p>
                <p className="text-warm-gray-600">
                  That gap is where so much suffering lives. It's where my clients live too. I know how to navigate it because 
                  I've lived in it.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  Why Willpower Doesn't Fix It
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  When I was going through infertility, I was told to be patient. When I burned out, I was told to manage 
                  stress better. When I finally got my ADHD diagnosis at 32, everyone said, "But you've always seemed fine!" 
                  None of that helped. What helped was understanding that my brain wasn't broken-it was different. My grief 
                  was legitimate. My burnout wasn't laziness-it was my system saying no.
                </p>
                <p className="text-warm-gray-600">
                  So I don't ask you to think differently or try harder. I ask you to understand yourself more deeply-and then 
                  build a life that actually works for who you are.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  Why My Own Struggles Matter
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  I did my own healing work first. I'm not bringing my unprocessed baggage into the room. But the fact that 
                  I've been through what you're going through? That changes what I can offer. When you tell me about ADHD shame 
                  or infertility grief or the panic of burning out, I'm not listening from a clinical distance. I remember it. 
                  I know the work it takes to move through.
                </p>
                <p className="text-warm-gray-600">
                  That's not a substitute for credentials or training. It's a complement to them. It means I genuinely understand 
                  the terrain we're walking through together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Combination Matters */}
        <section className="section-padding bg-warm-accent-light">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-4 md:mb-6 text-center">
              Why Perinatal + ADHD + Career?
            </h2>
            <p className="text-center text-warm-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              Because these three things are usually tangled. Treating them separately misses what's actually happening.
            </p>

            <div className="space-y-8">
              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">The Clinical Reality</h3>
                <p className="text-warm-gray-600 mb-3">
                  Postpartum ADHD is almost never diagnosed. Women with ADHD are five times more likely to experience 
                  postpartum anxiety and depression. Most therapists screen for mood disorders but not ADHD. Result: 
                  the condition stays hidden.
                </p>
                <p className="text-warm-gray-600 mb-3">
                  Career decisions during perinatal transitions are high-risk. The identity shift of becoming a parent 
                  collides with professional identity in ways that need clinical understanding-not just career coaching. 
                  Your brain works differently under hormonal and life-transition stress.
                </p>
                <p className="text-warm-gray-600">
                  I see these three things as one story. When you address them together-recognizing how undiagnosed ADHD 
                  amplifies postpartum vulnerability, how perinatal shifts change executive function, how career decisions 
                  need to account for your neurodivergent brain under stress-you don't bounce between specialists. You get 
                  one coherent understanding of what's happening.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">What This Looks Like in Practice</h3>
                <p className="text-warm-gray-600 mb-4">
                  A client comes in saying: "I'm falling apart postpartum. Am I depressed? Is it burnout? Am I in the wrong 
                  career? Do I need to quit?"
                </p>
                <p className="text-warm-gray-600 mb-4">
                  Often the answer is: "All of that is happening. And also your ADHD. That's making everything harder."
                </p>
                <p className="text-warm-gray-600">
                  Once we see the full picture, the path forward stops being confusing. You don't have to bounce between 
                  specialists guessing at what's wrong. You get one person who understands how these pieces fit together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-8 md:mb-12 text-center">
              Credentials & Training
            </h2>

            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">License</h3>
                <p className="text-warm-gray-600 mb-4">
                  I am a Licensed Clinical Social Worker (LCSW) with credentials in Canada and the United States. For Canadian clients, note that LCSW is a U.S. credential. I am regulated in Canada by [Provincial Regulatory Body]. License details and verification are available during your free consultation and on intake forms, so you can verify directly with the respective licensing boards.
                </p>
                <div className="space-y-2 text-sm text-warm-gray-600">
                  <p>• <strong>Canada:</strong> Licensed and regulated under [Provincial Regulatory Body]</p>
                  <p>• <strong>California:</strong> Licensed Clinical Social Worker (LCSW) – License verification available on request</p>
                  <p>• <strong>Florida:</strong> Licensed Clinical Social Worker (LCSW) – License verification available on request</p>
                  <p className="text-xs text-burgundy-600 mt-3"><strong>Note:</strong> For complaints or regulatory inquiries in Canada, contact [Provincial College/Board]. For U.S. licensing issues, contact the respective state licensing board.</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">Education</h3>
                <ul className="space-y-2 text-warm-gray-600">
                  <li>• Master of Social Work (MSW)</li>
                  <li>• Bachelor's degree in Psychology</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">Specialized Training</h3>
                <ul className="space-y-2 text-warm-gray-600">
                  <li>• Perinatal Mental Health Certification (PMC-H)</li>
                  <li>• Adult ADHD Certification (ADHD-CCSP)</li>
                  <li>• Adoption Competency Training</li>
                  <li>• Trauma-Focused CBT (TF-CBT)</li>
                  <li>• Somatic Therapy Training</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">Professional Memberships</h3>
                <ul className="space-y-2 text-warm-gray-600">
                  <li>• Canadian Association of Social Workers (CASW)</li>
                  <li>• National Association of Social Workers (NASW)</li>
                  <li>• Postpartum Support International</li>
                  <li>• ADHD Coaches Organization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Authority Signal */}
        <section className="section-padding bg-white border-t border-burgundy-200">
          <div className="container-base max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-4 text-center">
              How This Works in Practice
            </h2>
            <p className="text-center text-warm-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              These anonymized case examples show how my integrated approach helps clients navigate complex, overlapping challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1: Perinatal + ADHD */}
              <div className="card bg-cream-50 border-l-4 border-burgundy-400">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">Case: Unmasking ADHD in Postpartum Transition</h3>
                <div className="space-y-3 text-sm text-warm-gray-600">
                  <div>
                    <strong className="text-warm-gray-900">Presenting concern:</strong>
                    <p>New parent experiencing severe postpartum anxiety and inability to manage household tasks. Initially diagnosed as postpartum anxiety; treatment resistant to standard interventions.</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Clinical discovery:</strong>
                    <p>Through trauma-informed assessment, identified undiagnosed ADHD exacerbating postpartum vulnerability. Executive function collapse under hormonal shifts was being misnamed as "lack of coping."</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Integrated approach:</strong>
                    <p>Combined perinatal mental health support with ADHD-aware accommodations: external structure over willpower, neurodivergent-affirming coping strategies, identity work around late diagnosis during parenting transition.</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Outcome:</strong>
                    <p>Within 8 weeks: anxiety symptoms reduced 60%, developed sustainable systems, integrated ADHD identity, renewed sense of competence. Avoided unnecessary medication escalation.</p>
                  </div>
                </div>
              </div>

              {/* Case Study 2: Career + ADHD + Identity */}
              <div className="card bg-cream-50 border-l-4 border-warm-accent">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">Case: Career Clarity After Diagnosis</h3>
                <div className="space-y-3 text-sm text-warm-gray-600">
                  <div>
                    <strong className="text-warm-gray-900">Presenting concern:</strong>
                    <p>Mid-career professional burned out, questioning career direction after adult ADHD diagnosis. Conflicting advice: "ADHD means you can't do this job" vs. "Just try harder."</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Clinical discovery:</strong>
                    <p>Diagnosis was reframed-not as incompetence, but as data about their brain. Current role misaligned with ADHD strengths (hyperfocus vs. sustained attention, collaboration vs. solo work).</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Integrated approach:</strong>
                    <p>Career counseling informed by ADHD neuroscience: identified role fit based on attention profile, grief work around "lost time" before diagnosis, identity integration (not "fixing" ADHD, but leveraging it).</p>
                  </div>
                  <div>
                    <strong className="text-warm-gray-900">Outcome:</strong>
                    <p>Within 12 weeks: transitioned to aligned role, panic decreased, developed ADHD-aware professional identity, sustainable performance without masking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-warm-gray-500 italic">
                All case details anonymized to protect client confidentiality. Outcomes represent 8-12 week engagement timelines.
              </p>
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-8 md:mb-12 text-center">
              What People Say
            </h2>

            <div className="max-w-4xl mx-auto mb-8">
              <TestimonialConsentDisclaimer />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expandedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index + 4}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  totalReviews={expandedTestimonials.length + 4}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-8 md:mb-12 text-center">
              What Guides My Work
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Trauma-Informed',
                  description: 'Understanding how past experiences shape the present. Moving at your pace, honoring your nervous system.',
                },
                {
                  title: 'Culturally Humble',
                  description: 'Your values, community, lived experience matter. I\'m learning from you, not imposing my worldview.',
                },
                {
                  title: 'Neurodivergent-Affirming',
                  description: 'Your brain works differently. That\'s not a deficit-it\'s a difference. We work WITH it, not against it.',
                },
                {
                  title: 'Practical',
                  description: 'Insight matters. Real tools matter more. You\'ll leave with things you can use today.',
                },
              ].map((value, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-warm-gray-900 mb-3">{value.title}</h3>
                  <p className="text-warm-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion Commitment */}
        <section className="section-padding bg-white border-t border-burgundy-200">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-warm-gray-900 mb-4 md:mb-6 text-center">
              My Commitment to Accessibility & Inclusion
            </h2>
            <p className="text-center text-warm-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              I don't work with clients from marginalized backgrounds as a side project. This is core. Your identity matters. Your experience matters.
            </p>

            <div className="space-y-8">
              <div className="card bg-burgundy-50">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-4">I work affirmatively with:</h3>
                <ul className="space-y-3 text-warm-gray-600">
                  <li className="flex gap-3">
                    <span className="text-burgundy-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-warm-gray-900">BIPOC clients</strong> navigating racialized stress, discrimination, identity affirmation, and the complex intersection of systemic inequity and mental health</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-burgundy-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-warm-gray-900">LGBTQ+ clients</strong> (including trans and non-binary folks)-your identity is celebrated, not pathologized, and I provide affirming care grounded in your values</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-burgundy-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-warm-gray-900">Neurodivergent clients</strong> (ADHD, autism, and other neurotypes)-your brain isn't broken, it's different, and we leverage your strengths</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-burgundy-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-warm-gray-900">Disabled clients</strong>-I'm committed to genuine accessibility, accommodation, and affirming your whole self without cure narrative</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-burgundy-400 font-bold flex-shrink-0">•</span>
                    <span><strong className="text-warm-gray-900">Low-income and first-generation clients</strong>-cost won't be a barrier to your care. Therapy should be accessible.</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white border border-burgundy-200">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-4">What this commitment looks like in practice:</h3>
                <ul className="space-y-3 text-warm-gray-600">
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>I've done my own work around bias, privilege, and blind spots-and I continue doing it. This isn't one-time work; it's ongoing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>I don't claim expertise in all experiences. I'm a learner, and I actively welcome your feedback and course-correction.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>I understand how systemic oppression shapes mental health. Your struggles aren't just "in your head"-context matters.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>I center your values, culture, community, and lived experience-not my clinical assumptions or worldview.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>Therapy is accessible: transparent pricing, sliding scale options available, no surprise fees, flexible scheduling where possible.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-warm-accent font-bold flex-shrink-0">✓</span>
                    <span>I stay accountable: regular clinical consultation, ongoing training in culturally responsive care, and to your direct feedback.</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-cream-50 border-l-4 border-warm-accent">
                <p className="text-warm-gray-600 italic">
                  This commitment isn't performative or something I "also do." It's baked into how I show up every session. If you ever feel like your identity, background, or experience isn't being honored, I want to know. Feedback helps me be better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verified & Trusted */}
        <section className="section-padding bg-white border-t border-burgundy-200">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-4 md:mb-6 text-center">
              Verified & Easy to Find
            </h2>
            <p className="text-center text-warm-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              My credentials are independently verified across multiple directories and insurance networks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-burgundy-50 border border-burgundy-200">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">✓ Licensed LCSW</h3>
                <p className="text-warm-gray-600 text-sm">Clinical Social Work License, verified and in good standing.</p>
              </div>
              <div className="card bg-burgundy-50 border border-burgundy-200">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">✓ Listed on Major Directories</h3>
                <p className="text-warm-gray-600 text-sm">Psychology Today, TherapyDen, and insurance provider networks.</p>
              </div>
              <div className="card bg-burgundy-50 border border-burgundy-200">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">✓ Insurance In-Network</h3>
                <p className="text-warm-gray-600 text-sm">Accepted on major plans. Verify with your specific insurance.</p>
              </div>
              <div className="card bg-burgundy-50 border border-burgundy-200">
                <h3 className="text-lg font-bold text-warm-gray-900 mb-3">✓ Trauma-Informed Certified</h3>
                <p className="text-warm-gray-600 text-sm">Trained and committed to trauma-informed, culturally responsive care.</p>
              </div>
            </div>

            <div className="card card-tinted card-compact card-static mt-8 text-center">
              <p className="text-warm-gray-600 mb-4">
                Find me on your preferred platform or check insurance coverage.
              </p>
              <Link href="/providers" className="inline-block text-burgundy-600 font-semibold hover:text-burgundy-700 underline">
                View All Directories & Insurance Networks →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-burgundy-400 text-white">
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg mb-8 text-burgundy-50 max-w-2xl mx-auto">
              Let's talk about what you're navigating.
            </p>
            <Link href="/booking" className="inline-block bg-white text-burgundy-400 px-8 py-4 font-semibold rounded-lg hover:bg-burgundy-50">
              Book Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
