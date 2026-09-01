import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import { testimonialsByCategory } from '@/src/data/testimonials'

export default function CouplesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - Couples: Warm rose for connection, warmth, and intimacy */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(254, 242, 242, 1) 0%, rgba(255, 248, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Couples & Relationship Therapy
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              Reconnect with clarity. Navigate conflict with compassion. Rebuild trust after betrayal.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Relationships go through seasons. Sometimes you're disconnected, communicating past each other, or working through a crisis. Couples therapy isn't about saving the relationship at all costs—it's about helping you both make a clear, informed choice about your future together.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Book a Couples Consultation
            </Link>
          </div>
        </section>

        {/* Common Relationship Issues */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="💔" level={2} color={colors.warmGray[900]}>
              If You're Experiencing...
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Communication breakdown (talking past each other, not really listening)',
                'Unresolved conflict (the same fights, different days)',
                'Infidelity or betrayal (rebuilding trust feels impossible)',
                'Emotional distance or disconnection (feeling like roommates)',
                'Sexual or intimacy issues (mismatched needs or desire)',
                'Major life transitions (career change, parenthood, empty nest)',
              ].map((item, index) => (
                <IconListItem key={index} icon="✓" color={colors.sage[600]}>
                  {item}
                </IconListItem>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Communication Patterns */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="💬" level={2} color={colors.warmGray[900]}>
              Communication Patterns That Hurt (& How to Change Them)
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Research by John Gottman shows that certain communication patterns reliably predict relationship distress. The good news: these patterns are learnable, and couples who shift them see dramatic improvements.
              </p>

              <div className="space-y-4">
                <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#c96547'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#a5503a'}}>
                    1. Criticism (attacking the person, not the behavior)
                  </p>
                  <p className="text-sm text-warm-gray-600 mb-3">
                    "You're so selfish" vs. "When you don't help with housework, I feel resentful and unsupported."
                  </p>
                  <p className="text-sm font-medium text-warm-gray-700">
                    Antidote: Use "I feel" statements. Address the specific behavior, not the character.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#ab5943'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#934833'}}>
                    2. Contempt (mockery, sarcasm, eye-rolling, name-calling)
                  </p>
                  <p className="text-sm text-warm-gray-600 mb-3">
                    Gottman calls this the single greatest predictor of divorce. It corrodes the relationship faster than any other pattern.
                  </p>
                  <p className="text-sm font-medium text-warm-gray-700">
                    Antidote: Build genuine respect. When you feel contempt rising, pause and reconnect with what you appreciate about your partner.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#c08f5c'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#a3764a'}}>
                    3. Defensiveness (meeting their pain with excuses or counter-attacks)
                  </p>
                  <p className="text-sm text-warm-gray-600 mb-3">
                    "I'm not defensive, you're the problem here..." This shuts down real conversation.
                  </p>
                  <p className="text-sm font-medium text-warm-gray-700">
                    Antidote: Take accountability. Even if it's 70/30, own your 70%. Then discuss their 30%.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#61809f'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                    4. Stonewalling (shutting down, withdrawing, refusing to engage)
                  </p>
                  <p className="text-sm text-warm-gray-600 mb-3">
                    The silent treatment. Disappearing emotionally when conflict arises.
                  </p>
                  <p className="text-sm font-medium text-warm-gray-700">
                    Antidote: Call a time-out if you're overwhelmed, but return to the conversation. Set a specific time to reconnect.
                  </p>
                </div>
              </div>

              <div className="card card-callout card-compact card-static mt-8 bg-dusk-50" style={{borderLeftColor: '#61809f'}}>
                <p className="font-semibold text-warm-gray-900 mb-2" style={{color: '#4d6a86'}}>
                  The Pattern That Works: Balanced Communication
                </p>
                <p className="text-warm-gray-700">
                  Research shows couples who communicate with <strong>equality</strong> resolve conflicts more effectively. This means:
                  each partner has equal voice, neither dominates, both listen actively, and solutions are mutually satisfying (win-win, not win-lose).
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Conflict Styles */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="⚡" level={2} color={colors.warmGray[900]}>
              Conflict Styles: Understanding How You Fight
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Every couple has conflict. The question isn't whether you argue—it's how you argue. Do you understand each other's conflict style? Can you adapt to it?
              </p>

              <div className="grid gap-4">
                <div className="bg-gradient-to-br from-honey-50 to-honey-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">Pursuer</p>
                  <p className="text-sm text-warm-gray-700">Wants to talk through issues immediately. Gets frustrated when their partner withdraws. Often seeks reassurance.</p>
                </div>

                <div className="bg-gradient-to-br from-dusk-50 to-dusk-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">Withdrawer</p>
                  <p className="text-sm text-warm-gray-700">Needs space to process. Feels flooded and shuts down under pressure. Often stonewalls or avoids confrontation.</p>
                </div>

                <div className="bg-gradient-to-br from-blush-50 to-blush-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">Blamer</p>
                  <p className="text-sm text-warm-gray-700">Leads with criticism. Focuses on what the partner did wrong. Can feel contemptuous when stressed.</p>
                </div>

                <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-6 rounded-lg">
                  <p className="font-semibold text-warm-gray-900 mb-2">Placater</p>
                  <p className="text-sm text-warm-gray-700">Avoids conflict at all costs. Accommodates their partner's needs over their own. Can build resentment over time.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-warm-gray-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-3">
                  The Pursuer-Withdrawer Cycle (Most Common)
                </p>
                <p className="text-warm-gray-700 mb-4">
                  Pursuer pursues → Withdrawer withdraws → Pursuer pursues harder → Withdrawer withdraws further.
                  This cycle becomes self-reinforcing. Both partners feel misunderstood. Neither is wrong; they're just stuck.
                </p>
                <p className="font-medium text-warm-gray-700">
                  Therapy breaks this cycle by helping the withdrawer feel safe enough to engage and the pursuer understand that pursuit itself pushes their partner away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Infidelity & Betrayal Recovery */}
        <section className="section-padding bg-alert-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="💔" level={2} color={colors.warmGray[900]}>
              Infidelity & Betrayal: Can the Relationship Recover?
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                <strong>The research is clear:</strong> Yes. With skilled therapeutic support and genuine commitment from both partners, 
                couples can rebuild after infidelity—and often build relationships that are more honest and intentional than before.
              </p>

              <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#6b944f'}}>
                <p className="font-semibold text-warm-gray-900 mb-4" style={{color: '#547c3f'}}>
                  The Three Phases of Infidelity Recovery (Gottman Method)
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-warm-gray-800 mb-1">Phase 1: Atonement (1-3 months)</p>
                    <p className="text-sm">
                      The unfaithful partner takes full responsibility, answers questions honestly, 
                      demonstrates genuine remorse, and provides transparency (access to devices, schedules, etc.). 
                      The betrayed partner grieves, questions, and is believed.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-warm-gray-800 mb-1">Phase 2: Attunement (3-12 months)</p>
                    <p className="text-sm">
                      The couple examines what led to the affair—not to excuse it, but to understand unmet needs and vulnerabilities. 
                      Both partners rebuild emotional connection, practice the ATTUNE model (Awareness, Turning toward, Tolerance, Understanding, Non-defensiveness, Empathy).
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-warm-gray-800 mb-1">Phase 3: Attachment (6-24 months)</p>
                    <p className="text-sm">
                      The couple creates a new narrative about what happened, integrates the betrayal, and rebuilds trust through consistent behavior 
                      (not promises). Physical and emotional intimacy gradually return. Many couples describe this trust as more conscious and honest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-callout card-compact card-static mt-6" style={{borderLeftColor: '#ab5943'}}>
                <p className="font-semibold text-warm-gray-900 mb-3" style={{color: '#934833'}}>
                  Red Flags: When Recovery Isn't Possible
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• The unfaithful partner refuses to end the affair or won't be transparent</li>
                  <li>• No genuine remorse—only regret at being caught</li>
                  <li>• Pattern of repeated betrayals with no sustained effort to change</li>
                  <li>• Active safety concerns (domestic violence, abuse)</li>
                  <li>• One partner is unwilling to engage in therapy</li>
                </ul>
              </div>

              <div className="card card-compact card-static mt-6">
                <p className="font-medium text-warm-gray-900 mb-3">
                  What the Research Shows
                </p>
                <p className="text-sm mb-3">
                  <strong>Recovery timeline:</strong> 1-2 years of active therapeutic work. The first 3-6 months are the hardest (raw pain, intrusive thoughts, hypervigilance).
                </p>
                <p className="text-sm mb-3">
                  <strong>Success factors:</strong> Both partners committed. Unfaithful partner shows sustained, consistent behavior change. 
                  The betrayed partner gradually takes emotional risks again. A skilled therapist trained in trauma-informed couples work.
                </p>
                <p className="text-sm">
                  <strong>Forgiveness:</strong> Research shows forgiveness is a <em>result</em> of healing, not a prerequisite. 
                  You don't need to forgive to move forward. If it comes, it comes in its own time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Reconnection Approaches */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🤝" level={2} color={colors.warmGray[900]}>
              Reconnection Approaches: Building Intimacy Again
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                Whether you're reconnecting after years of distance, infidelity, or major life stress, 
                research-backed approaches can help you rebuild genuine connection.
              </p>

              <div className="space-y-4">
                <div className="card card-callout card-compact card-static bg-gradient-to-r from-sage-50 to-white" style={{borderLeftColor: '#6b944f'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">Love Maps (Gottman)</p>
                  <p className="text-sm text-warm-gray-700">
                    Deep knowledge of your partner's inner world—dreams, fears, values, daily stresses. 
                    Most couples lose these details over time. Therapy helps you rebuild them.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static bg-gradient-to-r from-dusk-50 to-white" style={{borderLeftColor: '#61809f'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">Turning Toward Bids (Gottman)</p>
                  <p className="text-sm text-warm-gray-700">
                    A "bid" is any attempt to connect ("Look at that sunset," "How was your day?"). 
                    Partners can turn toward (respond, connect), turn away (ignore), or turn against (dismiss harshly). 
                    Learning to turn toward rebuilds intimacy.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static bg-gradient-to-r from-blush-50 to-white" style={{borderLeftColor: '#c96547'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">Emotionally Focused Therapy (EFT)</p>
                  <p className="text-sm text-warm-gray-700">
                    Focuses on emotional connection and attachment. Helps couples move out of defensive patterns 
                    (criticism, defensiveness, stonewalling) and into genuine vulnerability and responsiveness. 
                    70% of couples become "symptom free" with EFT.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static bg-gradient-to-r from-honey-50 to-white" style={{borderLeftColor: '#c08f5c'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">Repair Attempts</p>
                  <p className="text-sm text-warm-gray-700">
                    Any effort to de-escalate, reconnect, or acknowledge the other's pain during a difficult moment. 
                    "I see I hurt you." "Can we try that conversation again?" "I know this is hard." 
                    Ability to make and receive repair attempts is the strongest predictor of relationship recovery.
                  </p>
                </div>

                <div className="card card-callout card-compact card-static bg-gradient-to-r from-sage-50 to-white" style={{borderLeftColor: '#82a86c'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">Shared Meaning</p>
                  <p className="text-sm text-warm-gray-700">
                    What do you want your relationship to <em>be</em>? Beyond daily logistics, what shared values or vision 
                    connects you? Reconnection often requires revisiting why you chose each other in the first place.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-warm-gray-50 rounded-lg">
                <p className="font-semibold text-warm-gray-900 mb-3">
                  How I Guide Reconnection
                </p>
                <ul className="space-y-2 text-sm text-warm-gray-700">
                  <li>• <strong>Create psychological safety:</strong> Both partners feel heard and respected (no judgment, no shame)</li>
                  <li>• <strong>Teach emotional attunement:</strong> Can you sense what your partner is feeling? Respond to that?</li>
                  <li>• <strong>Break defensive patterns:</strong> Move out of blame/defend/withdraw cycles</li>
                  <li>• <strong>Rebuild trust through action:</strong> Consistency, transparency, follow-through—not just words</li>
                  <li>• <strong>Reclaim physical and sexual intimacy:</strong> Gently reestablish touch and closeness at a pace that feels safe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* FAQ */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  What does couples therapy actually look like?
                </h3>
                <p className="text-warm-gray-600">
                  Typically 50-minute sessions, usually weekly. Sessions are facilitated conversations where each partner is heard. 
                  I help you communicate more effectively, understand each other's attachment needs, break negative patterns, 
                  and rebuild connection. Homework between sessions reinforces what you're learning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  How long does couples therapy take?
                </h3>
                <p className="text-warm-gray-600">
                  It varies. Some couples see major shifts in 8-12 weeks. Others work for 6-12 months. 
                  After infidelity, recovery typically takes 1-2 years. The timeline depends on how long the pattern has been entrenched, 
                  how committed both partners are, and whether trauma is involved.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  What if only one of us wants therapy?
                </h3>
                <p className="text-warm-gray-600">
                  Couples therapy requires both partners' participation. However, if one partner is hesitant, we can do a free 30-minute 
                  consultation to discuss what's possible and address concerns. Sometimes individual therapy helps someone get to a place 
                  where couples work becomes feasible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  How much does couples therapy cost?
                </h3>
                <p className="text-warm-gray-600">
                  Sessions are $X per 50 minutes (or your insurance rate if covered). Some insurance plans cover couples therapy; 
                  we can verify your coverage. I also offer sliding scale rates on a case-by-case basis if cost is a barrier.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  Is everything said in couples therapy confidential?
                </h3>
                <p className="text-warm-gray-600">
                  Yes. Couples therapy is confidential under therapist-client privilege. However, couples therapy is a bit different 
                  from individual therapy in that I'm not keeping "secrets" from either partner. I don't tell one partner something 
                  the other said; instead, I facilitate direct communication between you both. This transparency supports genuine healing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  What if one partner is keeping secrets (infidelity, financial issues, etc.)?
                </h3>
                <p className="text-warm-gray-600">
                  Secrets are often what create distance in relationships. I create a safe environment to disclose hidden information. 
                  That said, the timeline and method matter. If secrets are present, we may need to address them carefully with skilled facilitation. 
                  My role is to help you both become more honest with each other—not to police what's said, but to support healthier patterns.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  What if one partner is abusive or controlling?
                </h3>
                <p className="text-warm-gray-600">
                  Couples therapy is not appropriate if there is domestic violence or ongoing psychological abuse. Safety comes first. 
                  I can refer you to resources, and individual therapy may be more appropriate. An abusive dynamic needs to be addressed 
                  before couples work can proceed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3" style={{color: '#547c3f'}}>
                  Is it a sign of failure to go to couples therapy?
                </h3>
                <p className="text-warm-gray-600">
                  No. Couples therapy is a sign of commitment—to the relationship, to honesty, to growth. Many strong relationships use therapy 
                  as a tool to deepen connection or work through specific challenges. It's like a professional coach for your relationship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Testimonial */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            {testimonialsByCategory.couples.length > 0 && (
              <div className="card card-callout card-static bg-gradient-to-br from-blush-50 to-alert-50" style={{borderLeftColor: '#c96547'}}>
                <p className="text-lg text-warm-gray-700 italic mb-6 leading-relaxed">
                  "{testimonialsByCategory.couples[0].quote}"
                </p>
                <p className="font-semibold text-warm-gray-900" style={{color: '#a5503a'}}>
                  — {testimonialsByCategory.couples[0].author}
                </p>
                <p className="text-sm text-warm-gray-600 mt-2">
                  {testimonialsByCategory.couples[0].context}
                </p>
              </div>
            )}
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* My Approach */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How I Work With Couples
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🔍</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">Research-Backed Methods</h3>
                  <p className="text-warm-gray-600">
                    I'm trained in Emotionally Focused Therapy (EFT), the Gottman Method, and Attachment-Based approaches. 
                    These aren't guesses—they're backed by decades of outcome research showing measurable improvement in relationship satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🛡️</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">Psychological Safety First</h3>
                  <p className="text-warm-gray-600">
                    Couples can only be vulnerable if they feel safe. I structure sessions so both partners are heard and respected. 
                    No interrupting, no contempt, no blame—just honest conversation with skilled facilitation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">💬</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">Direct Communication</h3>
                  <p className="text-warm-gray-600">
                    I'm not here to mediate or take sides. I help you communicate directly with each other. 
                    You'll practice new patterns in session and build skills you take home.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">Clear, Practical Tools</h3>
                  <p className="text-warm-gray-600">
                    Rather than just talking about problems, we build specific skills: how to ask for what you need, 
                    how to hear criticism without defending, how to repair after conflict, how to rebuild trust.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-3xl">🤝</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">No Judgment About the Outcome</h3>
                  <p className="text-warm-gray-600">
                    Sometimes couples therapy leads to deeper connection and staying together. Sometimes it helps you both make 
                    the clear, conscious choice to separate. Either way, the goal is clarity and honesty—not forcing you to stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* When to Seek Help */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8">
              When to Seek Couples Therapy
            </h2>

            <div className="bg-dusk-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-warm-gray-700 mb-4">
                <strong>The best time to get help is now</strong>—before resentment becomes entrenched, 
                before you've decided the relationship is over, before communication has completely broken down.
              </p>
              <p className="text-warm-gray-700">
                But even if you're in crisis, therapy can help. Whether you want to rebuild, understand what happened, 
                or consciously choose to separate, a skilled therapist can guide you through it.
              </p>
            </div>

            <Link href="/booking" className="inline-block btn btn-primary">
              Get Support That Gets You
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
