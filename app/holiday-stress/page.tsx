import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'

export default function HolidayStressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - Holiday Stress: Cool silver/blue for calm and reassurance */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(240, 248, 255, 1) 0%, rgba(245, 247, 250, 1) 100%)'}}>

          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Holiday Stress is Real
            </h1>
            <p className="text-xl text-warm-gray-600 mb-4 max-w-2xl mx-auto">
              The family tension. The financial pressure. The grief that resurfaces. The seasonal low mood that won't lift.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Whether it's difficult family dynamics, seasonal mood changes, or the overwhelm of juggling too much at once—holiday stress is one of the most common things I help people navigate. And with the right tools, you can get through this season with less white-knuckling and more actual presence.
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule a 15-Minute Call
            </Link>
          </div>
        </section>

        {/* What You're Experiencing */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="💭" level={2} color={colors.warmGray[900]}>
              Does This Sound Familiar?
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Family gatherings feel draining instead of joyful',
                'Grief for someone who\'s gone hits harder around the holidays',
                'Financial pressure from gifts, travel, and spending',
                'Pressure to be happy and grateful when you don\'t feel it',
                'Seasonal low mood—dark mornings, gray afternoons drain your energy',
                'Loneliness despite being surrounded by people',
              ].map((item, index) => (
                <IconListItem key={index} icon="✓" color={colors.sage[600]}>
                  {item}
                </IconListItem>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Why Holiday Stress Happens */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="🧠" level={2} color={colors.warmGray[900]}>
              Why the Holidays Feel Harder (Science + Psychology)
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                The holidays stack multiple stressors at once: less daylight (circadian rhythm disruption), heightened family expectations, financial pressure, grief for who's missing, and the pressure to perform happiness. Your nervous system picks up on all of it.
              </p>

              <div className="card card-callout card-compact card-static" style={{borderLeftColor: '#547c3f'}}>
                <p className="font-semibold text-warm-gray-900 mb-4" style={{color: '#547c3f'}}>
                  What's actually happening:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Reduced sunlight (Oct-Feb):</strong> Disrupts melatonin/serotonin balance → low mood, fatigue, carb cravings</li>
                  <li>• <strong>Family dynamics:</strong> Old conflicts resurface; boundaries get blurry; grief intensifies in group settings</li>
                  <li>• <strong>Financial strain:</strong> Holiday spending collides with your nervous system's "scarcity alarm"</li>
                  <li>• <strong>Expectation pressure:</strong> "Perfect holiday" messaging vs. reality—breeding ground for shame</li>
                  <li>• <strong>Work + personal collision:</strong> End-of-year projects + holiday obligations = burnout on steroids</li>
                  <li>• <strong>Loneliness paradox:</strong> Constant socializing can feel isolating when you're not being seen</li>
                </ul>
              </div>

              <p>
                <strong>Here's what matters:</strong> This isn't weakness or failure. Your nervous system is responding logically to real stressors that happen to all pile up at the same time. Therapy helps you navigate that load—not by making it disappear, but by giving you tools to stay grounded when things feel overwhelming.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* How Therapy Helps */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              How Therapy Helps This Season
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: '💡',
                  title: 'Cognitive Behavioral Therapy (CBT)',
                  desc: 'Identify thought patterns that fuel anxiety (catastrophizing, perfectionism) and replace them with more grounded thinking. You learn to manage the narrative, not just the emotions.'
                },
                {
                  icon: '🫂',
                  title: 'Emotion-Focused Therapy',
                  desc: 'Create space for grief, anger, disappointment—the feelings the holidays are supposed to suppress. When you can feel them without drowning in them, you have more freedom.'
                },
                {
                  icon: '🛡️',
                  title: 'Boundary Setting & Family Dynamics',
                  desc: 'Learn to say "no" without guilt. Practice standing your ground without severing relationships. Navigate conflict with skill instead of avoidance.'
                },
                {
                  icon: '🌞',
                  title: 'Seasonal Affective Disorder Management',
                  desc: 'If low mood is part of your winter, we address it directly: light therapy guidance, behavioral activation, and addressing circadian rhythm disruption.'
                },
                {
                  icon: '✋',
                  title: 'Stress Inoculation',
                  desc: 'Before you walk into the gathering, you\'re prepared. We rehearse difficult conversations, build a plan B for when things get tense, practice grounding techniques.'
                },
                {
                  icon: '🧩',
                  title: 'Financial Anxiety',
                  desc: 'Address money stress head-on. Create a spending plan. Practice the conversation with family about your budget. Release shame around financial boundaries.'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-3xl min-w-max">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">{item.title}</h3>
                    <p className="text-warm-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* For Parents: Specific Validation */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <IconHeading icon="👨‍👩‍👧‍👦" level={2} color={colors.warmGray[900]}>
              If You're a Parent: Permission to Set Boundaries
            </IconHeading>

            <div className="space-y-6 text-warm-gray-600">
              <p>
                You cannot make the holidays perfect for everyone. You cannot manage your own stress, your child's emotions, your family's expectations, and your work deadlines all at once. 
              </p>

              <div className="card card-compact card-static" style={{backgroundColor: '#f5f7fa'}}>
                <p className="text-warm-gray-900 font-semibold mb-4">
                  What therapy helps you do:
                </p>
                <ul className="space-y-3 text-sm">
                  <li>✓ Set boundaries without guilt (your kid's anxiety is not your responsibility to fix)</li>
                  <li>✓ Prioritize which family traditions matter vs. which are obligations you can release</li>
                  <li>✓ Name the feeling ("I'm burnt out") without turning it into a character flaw</li>
                  <li>✓ Model healthy stress management for your kids (they learn more from how you handle it than what you say)</li>
                  <li>✓ Give yourself permission to take breaks, skip events, say no</li>
                </ul>
              </div>

              <p>
                Your child doesn't need a perfect holiday. They need you regulated enough to be present. Therapy helps you get there.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Objection Handlers */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Common Concerns (Answered)
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: '"Therapy takes months. I need help NOW."',
                  a: '4-8 sessions can shift how you show up. You don\'t need months to get tools that work this season. We\'ll focus on what\'s practical and immediate.'
                },
                {
                  q: '"Won\'t therapy make me sadder by bringing up all my feelings?"',
                  a: 'The opposite. Right now you\'re either stuffing feelings or drowning in them—both hurt. Therapy helps you feel what\'s there without being overwhelmed by it. That\'s freedom.'
                },
                {
                  q: '"It\'s just the holidays. Everyone\'s stressed. Am I overreacting?"',
                  a: 'Yes, everyone\'s stressed. AND that\'s exactly why support matters. You deserve to have one person in your corner who gets it. Seeking help isn\'t overreacting; it\'s wisdom.'
                },
                {
                  q: '"I can\'t fit therapy into my schedule during the holidays."',
                  a: 'We offer virtual sessions + flexible scheduling (evenings, early mornings, weekends). We make it work around your chaos, not add to it.'
                },
                {
                  q: '"What if therapy doesn\'t work for me?"',
                  a: 'We\'ll know within 2-3 sessions. If something isn\'t landing, we adjust the approach. You\'re not locked in. But most people notice something shift within the first few conversations.'
                },
                {
                  q: '"Can I afford therapy right now?"',
                  a: 'We offer sliding scale rates. Many insurance plans cover therapy. We can talk about what works for your budget before you commit to anything.'
                },
              ].map((item, index) => (
                <div key={index} className="border-l-4 pl-6" style={{borderLeftColor: '#547c3f'}}>
                  <p className="font-semibold text-warm-gray-900 mb-2">{item.q}</p>
                  <p className="text-warm-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Social Proof & Data */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
              You're Not Alone
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-4xl font-bold" style={{color: '#547c3f'}}>57%</p>
                <p className="text-warm-gray-600 text-sm mt-2">of Americans report the holiday season as stressful</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{color: '#547c3f'}}>32%</p>
                <p className="text-warm-gray-600 text-sm mt-2">report worsening mental health in Nov-Dec specifically</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{color: '#547c3f'}}>36%</p>
                <p className="text-warm-gray-600 text-sm mt-2">of people skip therapy end-of-year due to stress overload</p>
              </div>
            </div>

            <div className="card card-static">
              <p className="text-lg italic text-warm-gray-700 mb-4">
                "By the time we got to November, I realized I was just white-knuckling through life. Work was intense, my mom was visiting, and I couldn't even see my own anxiety until we talked about it. Having tools—actual ways to handle the stress—made December feel completely different. I could still be stressed, but I wasn't drowning in it."
              </p>
              <p className="font-semibold text-warm-gray-900">— Client, after 6 sessions</p>
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How many sessions do I need?',
                  a: 'Most people start with 4-8 sessions focused on this season. Some continue into January to process the aftermath and plan for next year. It\'s your call.'
                },
                {
                  q: 'Do you offer video sessions?',
                  a: 'Yes. Virtual sessions work especially well during the holidays—no travel time, you can do it from anywhere. Same quality as in-person.'
                },
                {
                  q: 'What if I\'ve never been to therapy before?',
                  a: 'That\'s normal. I\'ll explain what to expect, answer your questions, and we\'ll move at your pace. No judgment, no jargon.'
                },
                {
                  q: 'Can I bring my partner or family member?',
                  a: 'Yes, couples or family sessions are an option. We can work on communication and conflict resolution together.'
                },
                {
                  q: 'What happens if family dynamics are really toxic?',
                  a: 'We address it honestly. Sometimes the healthiest thing is creating distance or setting firmer boundaries. Therapy helps you make that choice consciously, not reactively.'
                },
                {
                  q: 'Is everything I share confidential?',
                  a: 'Yes, with rare exceptions (imminent harm to yourself or others). What you share stays between us. That trust is fundamental.'
                },
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-semibold text-warm-gray-900 mb-2">{item.q}</p>
                  <p className="text-warm-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider margin="3rem" />

        {/* Final CTA */}
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-6">
              You Don't Have to White-Knuckle Through This
            </h2>

            <p className="text-lg text-warm-gray-600 mb-8 max-w-2xl mx-auto">
              Holiday stress, seasonal mood changes, family tension—these are all things therapy is designed to help with. You deserve support this season.
            </p>

            <Link href="/booking" className="inline-block btn btn-primary">
              Schedule a 15-Minute Call
            </Link>

            <p className="text-warm-gray-600 text-sm mt-6">
              First sessions are judgment-free. We'll talk about what brought you in and what you're hoping to get out of therapy. That's it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
