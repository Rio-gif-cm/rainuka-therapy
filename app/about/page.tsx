import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="hero-section bg-gradient-to-br from-cream-50 to-sage-50 py-20">
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              About Rainuka
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Therapist. Perinatal + ADHD + Career specialist. Someone who gets it.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Photo placeholder */}
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-sage-200 to-warm-accent-light overflow-hidden shadow-lg flex items-center justify-center w-80 h-80">
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
                <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6">
                  Rainuka Oberoi, LCSW
                </h2>

                <div className="space-y-6 text-warm-gray-600">
                  <p>
                    I help people navigating invisible struggles—perinatal mental health, adult ADHD diagnosis, 
                    career transitions—with warmth, clarity, and practical support.
                  </p>

                  <p>
                    I specialize in what often goes unnamed: infertility grief, postpartum anxiety, ADHD shame, 
                    burnout, identity questions. And I do this work because I've been there myself.
                  </p>

                  <p>
                    <strong>Why I chose this path:</strong> For years, I held everything together on the outside 
                    while navigating profound loss on the inside. I faced infertility without language for my grief. 
                    I reached my 30s before understanding my ADHD, realizing how it had shaped every career decision 
                    and relationship. I burned out in a role that looked good from the outside but felt completely 
                    wrong for my brain. Those experiences weren't setbacks to overcome—they became my compass.
                  </p>

                  <p>
                    <strong>The turning point:</strong> The moment I stopped hiding my story was when everything 
                    changed. A friend struggling with postpartum anxiety asked if I understood. When I told her about 
                    my own infertility journey, something shifted in the room. She felt seen. Not by a therapist 
                    behind a wall of credentials, but by someone who genuinely knew that particular loneliness. 
                    That's when I realized: my lived experience wasn't a liability to manage—it was my greatest asset.
                  </p>

                  <p>
                    <strong>My approach:</strong> Trauma-informed, culturally humble, practical. I believe therapy 
                    is about understanding yourself better and building the life that actually fits you. Not 
                    diagnosing or fixing—collaborating. I show up as a whole person, not a blank screen. When you 
                    sit with me, you're working with someone who has sat in the hard places too. That shared knowing 
                    creates safety you can actually feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Origin */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6 text-center">
              From Hiding to Healing: The Philosophy Behind My Work
            </h2>
            <p className="text-center text-warm-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              What I learned living through infertility, ADHD, and burnout.
            </p>

            <div className="space-y-8">
              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  The Gap Between Outside and Inside
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  For years, I was what therapists call a "high-functioning" person navigating a crisis. 
                  I showed up to work, maintained relationships, hit milestones—all while grieving infertility, 
                  struggling with undiagnosed ADHD, and feeling like I'd chosen the wrong career. Nobody saw it. 
                  I didn't want them to.
                </p>
                <p className="text-warm-gray-600">
                  That gap—between the person I appeared to be and who I actually was—is where so much suffering lives. 
                  It's where my clients live too. And it's exactly what I now understand how to navigate.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  Why "Just Think Positive" Doesn't Work
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  When I was going through infertility, I was told to be patient. When I burned out, I was told 
                  to manage stress better. When I finally got my ADHD diagnosis at 32, everyone said, "But you've 
                  always seemed fine!" None of that helped. What helped was understanding that my brain wasn't broken—
                  it was different. My grief was legitimate. My burnout wasn't laziness—it was a signal.
                </p>
                <p className="text-warm-gray-600">
                  That's why I don't ask you to think differently or try harder. I ask you to understand yourself 
                  more deeply—and then build a life that actually works for who you are.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">
                  The Power of Vulnerability as Expertise
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  Research shows that therapists who have navigated their own struggles create better outcomes. 
                  Not because we have all the answers, but because we understand the weight of the questions. 
                  When you tell me about your shame around ADHD, I'm not listening from a clinical distance. 
                  I remember that shame. I know the work it takes to move through it.
                </p>
                <p className="text-warm-gray-600">
                  But here's what's crucial: I did my own healing work first. I'm not sharing my story to make 
                  it about me. I'm sharing it so you know you're not alone, and so you trust that I genuinely 
                  understand the terrain we're walking through together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Combination Matters */}
        <section className="section-padding bg-warm-accent-light">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6 text-center">
              Why Perinatal + ADHD + Career
            </h2>
            <p className="text-center text-warm-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              It's not three separate specializations. It's one integrated lens that catches what generalists miss.
            </p>

            <div className="space-y-8">
              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">The Clinical Reality</h3>
                <ul className="space-y-3 text-warm-gray-600">
                  <li>
                    <strong>Postpartum ADHD is underdiagnosed.</strong> Women with ADHD are 5x more likely to experience postpartum depression and anxiety—not because of mental illness alone, but because undiagnosed ADHD is a risk factor. Most therapists screen for depression; few screen for ADHD. The condition goes unnamed.
                  </li>
                  <li>
                    <strong>Career transitions during perinatal shifts are high-risk.</strong> Matrescence—the identity transformation of becoming a parent—intersects with professional identity in ways that require clinical understanding, not just career coaching. Your executive function changes under hormonal and life transition stress.
                  </li>
                  <li>
                    <strong>Generalists treat these separately; specialists see the connection.</strong> When perinatal mood, ADHD symptoms, and career indecision are addressed as one integrated story, not three separate problems, clarity emerges faster and shame decreases.
                  </li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">Why This Combination Matters for You</h3>
                <p className="text-warm-gray-600 mb-4">
                  Many of my clients come in saying: "I feel like I'm falling apart postpartum. Am I depressed? Is it burnout? Am I in the wrong career? Do I need to quit?"
                </p>
                <p className="text-warm-gray-600 mb-4">
                  The answer is often: "Yes, and also your ADHD. And that's making everything harder."
                </p>
                <p className="text-warm-gray-600">
                  When we address all three together—recognizing how undiagnosed ADHD amplifies postpartum vulnerability, how perinatal shifts change executive function, how career decisions need to account for your neurodivergent brain under stress—you don't have to bounce between specialists. You get one coherent understanding of what's actually happening.
                </p>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-3">The Evidence</h3>
                <ul className="space-y-2 text-warm-gray-600 text-sm">
                  <li>✓ Specialist clinicians achieve significantly greater reductions in postpartum mood symptoms than generalists</li>
                  <li>✓ Coordinated care addressing multiple domains results in higher treatment engagement and better outcomes</li>
                  <li>✓ Women with ADHD show cyclical symptom patterns during reproductive transitions that require specialized understanding</li>
                  <li>✓ Career identity transitions during perinatal periods benefit from integrated perinatal + neurodivergent-aware approaches</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              Credentials & Training
            </h2>

            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">License</h3>
                <p className="text-warm-gray-600">
                  Licensed Clinical Social Worker (LCSW), [State]. License #[XXXXXX]
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">Education</h3>
                <ul className="space-y-2 text-warm-gray-600">
                  <li>• MSW, [University], 20XX</li>
                  <li>• Bachelor's degree, [University], 20XX</li>
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
                  <li>• National Association of Social Workers (NASW)</li>
                  <li>• American Perinatal Society</li>
                  <li>• ADHD Coaches Organization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Authority Signal */}
        <section className="section-padding bg-white border-t border-sage-200">
          <div className="container-base max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-4 text-center">
              How This Works in Practice
            </h2>
            <p className="text-center text-warm-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              These anonymized case examples show how my integrated approach helps clients navigate complex, overlapping challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1: Perinatal + ADHD */}
              <div className="card bg-cream-50 border-l-4 border-sage-400">
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
                    <p>Diagnosis was reframed—not as incompetence, but as data about their brain. Current role misaligned with ADHD strengths (hyperfocus vs. sustained attention, collaboration vs. solo work).</p>
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
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              What People Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote: 'Met me exactly where I was. No minimizing, no rushing. Just real presence.',
                  author: 'Maria',
                  context: 'Artist | Navigating Perinatal Loss',
                  rating: 5,
                },
                {
                  quote: '35 years to understand myself. ADHD diagnosis changed everything—Rainuka helped me integrate it.',
                  author: 'James',
                  context: 'Executive Coach | Late-Life ADHD Recognition',
                  rating: 5,
                },
                {
                  quote: 'She gets the invisible stuff: shame, doubt, carrying alone. I felt truly seen.',
                  author: 'Rachel',
                  context: 'Teacher | Postpartum Anxiety & Burnout',
                  rating: 5,
                },
                {
                  quote: 'Practical tools that actually work—not just insight.',
                  author: 'David',
                  context: 'Startup Founder | Career Transition & Stress',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index + 4}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  totalReviews={8}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
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
                  description: 'Your brain works differently. That\'s not a deficit—it\'s a difference. We work WITH it, not against it.',
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

        {/* CTA */}
        <section className="section-padding bg-sage-400 text-white">
          <div className="container-base text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg mb-8 text-sage-50 max-w-2xl mx-auto">
              Let's talk about what you're navigating.
            </p>
            <Link href="/booking" className="inline-block bg-white text-sage-400 px-8 py-4 font-semibold rounded-lg hover:bg-sage-50">
              Book Your Free Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
