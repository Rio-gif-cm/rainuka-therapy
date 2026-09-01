import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { IconHeading, IconListItem } from '@/components/IconComponents'
import { colors } from '@/app/styles'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonialsByCategory } from '@/src/data/testimonials'

export default function GriefPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero - Grief: Deep indigo accents (#3f566d) for depth, compassion, and holding space */}
        <section className="hero-section py-20" style={{background: 'linear-gradient(135deg, rgba(241, 244, 249, 1) 0%, rgba(248, 250, 247, 1) 100%)'}}>
          <div className="container-base text-center animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Grief Therapy That Honors Your Loss
            </h1>
            <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto" style={{color: '#3f566d'}}>
              Loss is real. Your grief is normal.
            </p>
            <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">
              Death. Miscarriage. Pet loss. Estrangement. Identity shifts. Anticipatory grief. 
              Every loss deserves space to be felt, understood, and integrated—not &quot;moved past.&quot;
            </p>
            <Link href="/booking" className="inline-block btn btn-primary">
              Get Support That Gets You
            </Link>
          </div>
        </section>

        {/* What Grief Is */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="💙" level={2} color={colors.warmGray[900]}>
              Grief Is Normal. Not Something to Fix.
            </IconHeading>

            <div className="max-w-3xl mx-auto text-warm-gray-700 space-y-6">
              <p>
                Grief is love with nowhere to go. It&apos;s not depression, anxiety, or weakness—it&apos;s the price of attachment, 
                the weight of meaning. When someone or something mattered, losing them matters too.
              </p>

              <div className="bg-dusk-50 border-l-4 border-dusk-300 p-6 rounded">
                <p className="font-semibold text-warm-gray-900 mb-2">The Core Truth:</p>
                <p>
                  Grief is the normal, healthy response to loss. There&apos;s no timeline for &quot;getting over it.&quot; 
                  Instead, grief transforms—you learn to carry it differently, to find meaning in what was, 
                  and to rebuild your sense of self and the world.
                </p>
              </div>

              <p>
                Many people grieve losses that others don&apos;t acknowledge: a pet, a pregnancy, an estranged family member, 
                a friendship that ended, a career, a version of yourself. These losses are as real as any death. 
                The grief is valid, even if society doesn&apos;t always agree.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Types of Grief */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="🌍" level={2} color={colors.warmGray[900]}>
              Types of Grief & Loss
            </IconHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Bereavement',
                  description: 'Death of a spouse, parent, child, sibling, or close friend. The most recognized form of grief, yet still profoundly isolating.',
                  icon: '🪦'
                },
                {
                  title: 'Pregnancy Loss & Miscarriage',
                  description: 'Miscarriage, stillbirth, ectopic pregnancy, or termination. The grief is deep even if the baby was never held. Your loss is real.',
                  icon: '🤍'
                },
                {
                  title: 'Pet Loss',
                  description: 'The death of a companion animal. Often disenfranchised—dismissed as "just a pet"—but the bond was real, and so is your grief.',
                  icon: '🐾'
                },
                {
                  title: 'Disenfranchised Grief',
                  description: 'Losses society doesn\'t openly acknowledge: estrangement, friendship loss, ex-partner, death by suicide, loss of identity or independence. Valid and deserving of support.',
                  icon: '🚫'
                },
                {
                  title: 'Anticipatory Grief',
                  description: 'Grief that begins before a loss—when someone has a terminal illness, when dementia takes a loved one\'s memory, or before a major life transition. Real grief, even though they\'re still alive.',
                  icon: '⏰'
                },
                {
                  title: 'Ambiguous Loss',
                  description: 'Loss without closure: estrangement, missing persons, dementia (losing the person while they\'re still here), chronic illness. Grief without finality—one of the hardest kinds.',
                  icon: '🌫️'
                },
              ].map((type, index) => (
                <div key={index} className="card card-compact card-static">
                  <p className="text-4xl mb-3">{type.icon}</p>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2">{type.title}</h3>
                  <p className="text-warm-gray-700">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto bg-dusk-50 border-l-4 border-dusk-300 p-6 rounded">
              <p className="font-semibold text-warm-gray-900 mb-2">Important:</p>
              <p className="text-warm-gray-700">
                If your loss isn&apos;t listed here, it still matters. Grief meets us in places others might not understand—
                that doesn&apos;t make it less real. In therapy, we honor the uniqueness of your loss and your attachment.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Grief Timeline & What to Expect */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="📅" level={2} color={colors.warmGray[900]}>
              Timeline & What to Expect (There Is No &quot;Normal&quot;)
            </IconHeading>

            <div className="max-w-3xl mx-auto">
              <p className="text-warm-gray-700 mb-8">
                The myth: grief has five stages (denial, anger, bargaining, depression, acceptance) and follows a predictable path. 
                <br /><br />
                The reality: grief is non-linear, unpredictable, and deeply personal. You might feel all five in one day, 
                or skip some entirely. There&apos;s no &quot;moving through&quot; it—you&apos;re learning to live with it.
              </p>

              <div className="space-y-6">
                {[
                  {
                    period: 'Weeks 1-4: Shock & Acute Grief',
                    details: [
                      'Numbness, disbelief, surreal quality ("this isn\'t real")',
                      'Exhaustion even though you\'re not doing anything',
                      'Moments of intense pain interrupted by strange calm',
                      'Difficulty with basic tasks: eating, sleeping, functioning',
                      'Your body might move on autopilot'
                    ]
                  },
                  {
                    period: 'Months 2-6: "Waves" & Reality Setting In',
                    details: [
                      'Grief hits in waves—some hours are bearable, some are crushing',
                      'Grief triggers: seeing their favorite food, their birthday, a song, a place',
                      'Anger, why questions, guilt ("why didn\'t I...", "if only...")',
                      'Brain fog, memory issues, inability to concentrate',
                      'The harsh truth: they\'re really gone'
                    ]
                  },
                  {
                    period: 'Months 6-12+: Integration & Continued Adaptation',
                    details: [
                      'The acute pain becomes chronic—duller but still present',
                      'You have more "normal" days, but grief can return without warning',
                      'Rebuilding identity without them in your daily life',
                      'Learning to hold their memory + continue living',
                      'Meaning-making: "What does this loss mean about me, life, the world?"'
                    ]
                  },
                  {
                    period: 'Year 2+: Permanent Change, Not "Moving On"',
                    details: [
                      'You don\'t "get over it"—you reorganize your life around it',
                      'Their absence becomes a permanent part of your story, not the whole story',
                      'Trigger days (birthday, anniversary, holidays) remain hard—that\'s normal',
                      'You carry them differently—in how you love, parent, show up, think',
                      'Grief and happiness can coexist: you can grieve and live fully'
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border-l-4 border-dusk-300 pl-6 py-4">
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-3">{phase.period}</h4>
                    <ul className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-dusk-300 mr-3 mt-1">•</span>
                          <span className="text-warm-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-honey-50 border-l-4 border-honey-300 p-6 rounded">
                <p className="font-semibold text-warm-gray-900 mb-2">⚠️ When Grief Becomes &quot;Complicated&quot;:</p>
                <p className="text-warm-gray-700 mb-3">
                  Most people experience &quot;uncomplicated grief&quot;—intense, painful, but manageable. 
                  If after 12+ months you experience the following, therapy is especially helpful:
                </p>
                <ul className="space-y-2 text-warm-gray-700">
                  <li>• Inability to function (work, hygiene, self-care, relationships)</li>
                  <li>• Suicidal thoughts or desire to join the person who died</li>
                  <li>• Complete isolation or inability to feel any joy or connection</li>
                  <li>• Intense anger or guilt that doesn&apos;t soften over time</li>
                  <li>• Unresolved ambivalence (complicated relationship with the person)</li>
                </ul>
                <p className="text-warm-gray-700 mt-3">
                  These aren&apos;t signs of weakness—they&apos;re signs that grief needs professional support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Therapeutic Approaches */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="🧠" level={2} color={colors.warmGray[900]}>
              How Grief Therapy Works
            </IconHeading>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  approach: 'Narrative Therapy: Restoring Your Story',
                  description: 'How it works:',
                  details: [
                    'You tell your story of the loss—not once, but many times, adding new details and meaning each time',
                    'We separate the grief from your identity: "Grief is happening TO you, it\'s not WHO you are"',
                    'You find "unique outcomes"—moments when grief didn\'t define you, when you still experienced joy or connection',
                    'We reauthor your narrative: from "I lost everything and can\'t move on" to "I lost something sacred, and I\'m learning to carry it in a new way"',
                    'Your loss becomes integrated into your larger life story—part of you, not all of you'
                  ],
                  icon: '📖'
                },
                {
                  approach: 'Meaning-Making: Finding the "Why" (Not Always the "Why Did This Happen")',
                  description: 'How it works:',
                  details: [
                    'Asking "What does this loss mean?" instead of just "Why did this happen?" (often unanswerable)',
                    'Exploring: What did they mean to me? What values did they embody? How do I carry them forward?',
                    'Finding purpose: "How does my grief speak to my deepest values? How can I honor them through how I live?"',
                    'Connection to legacy: writing letters, creating rituals, supporting others who grieve, donating, volunteering',
                    'Transforming pain into meaning—not erasing the loss, but making it count'
                  ],
                  icon: '✨'
                },
                {
                  approach: 'Dual Process Model: Oscillating Between Loss & Life',
                  description: 'How it works:',
                  details: [
                    'You don\'t need to "move on"—instead, you balance two types of coping:',
                    'Loss-oriented: grieving, crying, honoring them, feeling the absence',
                    'Restoration-oriented: rebuilding daily life, finding new routines, rediscovering joy, establishing identity without them',
                    'Healthy grief oscillates between these—some days you\'re in grief, some days you\'re rebuilding, most days you\'re doing both',
                    'We help you find rhythm, not forcing you to choose "healing" over "honoring"'
                  ],
                  icon: '⚖️'
                },
                {
                  approach: 'Continuing Bonds: They\'re Still Part of Your Life',
                  description: 'How it works:',
                  details: [
                    'Traditional therapy used to say "let them go"—modern grief work says they\'re always part of you',
                    'How do you want them present in your life going forward? As a memory? A value? A guide?',
                    'Building rituals: birthday acknowledgments, telling stories, making choices by their values',
                    'They\'re not coming back, but you\'re not forgetting them either—you\'re finding a new relationship with them',
                    'Grief doesn\'t end, it transforms into love + memory + meaning'
                  ],
                  icon: '🤝'
                }
              ].map((item, index) => (
                <div key={index} className="card card-compact card-static">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-warm-gray-900">{item.approach}</h4>
                      <p className="text-warm-gray-600 font-semibold mt-1">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-12">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-dusk-300 mr-3 mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-warm-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-dusk-50 border-l-4 border-dusk-300 p-6 rounded mt-8">
                <p className="font-semibold text-warm-gray-900 mb-2">What Grief Therapy Is NOT:</p>
                <ul className="space-y-2 text-warm-gray-700">
                  <li>• Trying to make you stop grieving ("you just need to move on")</li>
                  <li>• Fixing your pain or replacing what you lost</li>
                  <li>• Making you forget them</li>
                  <li>• Pretending the loss wasn&apos;t devastating</li>
                </ul>
                <p className="text-warm-gray-700 mt-3">
                  <strong>What it IS:</strong> Creating space to feel fully, understand what happened, honor what was, 
                  and slowly rebuild a life that includes both grief and joy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Support Resources */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <IconHeading icon="🤲" level={2} color={colors.warmGray[900]}>
              Support Beyond Therapy
            </IconHeading>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Grief Support Groups',
                    items: [
                      'Grief Share (Christian-based, local groups worldwide)',
                      'The Dinner Party (for people grieving in their 20s & 30s)',
                      'GriefShare Online',
                      'HUGS (Hope, Understanding, and Grief Support) for miscarriage/SIDS',
                      'The Dinner Party: Grief support for young adults'
                    ]
                  },
                  {
                    title: 'Specialized Resources',
                    items: [
                      'Missing & Murdered Indigenous Women awareness (MMIWG)',
                      'Association for Pet Loss and Bereavement',
                      'Resolve (for infertility & pregnancy loss)',
                      'National Alliance on Mental Illness (NAMI)',
                      'Crisis Text Line: Text HOME to 741741'
                    ]
                  },
                  {
                    title: 'Books & Meaning-Making',
                    items: [
                      '"The Year of Magical Thinking" by Joan Didion',
                      '"When Breath Becomes Air" by Paul Kalanithi',
                      '"What to Do When Someone Dies" by Salimah Samaldien',
                      '"It\'s Okay That You\'re Not Okay" by Megan Devine',
                      '"The Five Invitations" by Frank Ostaseski'
                    ]
                  },
                  {
                    title: 'Online Communities',
                    items: [
                      'Reddit r/grief (supportive, moderated)',
                      'What\'s Your Grief (articles, resources)',
                      'GriefNet (message boards by loss type)',
                      'Soaring Spirits (for widows/widowers)',
                      'Online memorial communities'
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-warm-gray-50 rounded-lg p-6 border border-warm-gray-200">
                    <h4 className="text-lg font-semibold text-warm-gray-900 mb-4">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-dusk-300 mr-3 mt-1">✓</span>
                          <span className="text-warm-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-dusk-50 border-l-4 border-dusk-300 p-6 rounded mt-8">
                <p className="font-semibold text-warm-gray-900 mb-2">🆘 Crisis Support (If You&apos;re in Danger):</p>
                <ul className="space-y-2 text-warm-gray-700">
                  <li>• <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (24/7, US)</li>
                  <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                  <li>• <strong>International Association for Suicide Prevention:</strong> https://www.iasp.info/resources/Crisis_Centres/</li>
                  <li>• <strong>Emergency:</strong> Call 911 or go to your nearest ER</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Grief FAQ */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray-50">
          <div className="container-base">
            <IconHeading icon="❓" level={2} color={colors.warmGray[900]}>
              Grief FAQ: Questions You Might Be Asking
            </IconHeading>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'How long will this take? Will I ever feel normal again?',
                  a: `There's no timeline. "Normal grief" (not complicated grief requiring treatment) typically feels intense for 6-12 months, with waves continuing for years. You won't go back to who you were—you'll become someone new, someone who's integrated this loss. That's not weakness; that's growth. The pain changes texture, not necessarily intensity. You learn to live with it.`
                },
                {
                  q: `I'm angry all the time. Is that normal?`,
                  a: `Yes. Anger is one of the five stages, and it's often underestimated. You might be angry at the person who died ("how could you leave me"), angry at God, angry at the unfairness of it all, angry at others who seem to move on easily, or angry at yourself. All of this is normal grief. In therapy, we can explore what the anger is protecting (often it's actually pain) and find ways to express it safely.`
                },
                {
                  q: `I'm laughing and having fun—does that mean I didn't love them?`,
                  a: `No. Grief and joy aren't opposites; they're both part of honoring a full life. You can miss someone deeply and still laugh at a memory, enjoy a meal, or have fun with friends. That's not betrayal—that's living. Your loved one likely wouldn't want you to suffer forever. Finding moments of lightness doesn't diminish your grief.`
                },
                {
                  q: `I feel like I'm "supposed" to be better by now. Everyone else seems to expect it.`,
                  a: `This is grief shame—the added pain of feeling like your grief is "too much" or "taking too long." Your timeline is yours. Compare yourself to no one. Some people move through intense grief faster; others need more time. Both are normal. Anyone who's judging your grief doesn't understand grief. In therapy, we work on honoring your pace and managing others' expectations.`
                },
                {
                  q: 'What if I\'m grieving someone I had a complicated relationship with?',
                  a: `This is called ambivalent grief, and it's common but often isolating (because people expect grief to be straightforward). You might grieve the relationship as it was, grieve the relationship as it could have been, feel guilty about unresolved conflict, or feel relief mixed with sadness. All of these feelings can coexist. Therapy provides space to untangle this without judgment.`
                },
                {
                  q: `I don't feel anything. Am I broken?`,
                  a: `No—you might be in shock or emotional numbness, which is your brain's protective mechanism. It's common in the early weeks/months. Your nervous system is protecting you from overwhelming pain. Don't force yourself to "feel more." In time, as you process the loss, feelings will emerge. If numbness persists beyond 6+ months, therapy can help.`
                },
                {
                  q: 'Should I remove their photos/belongings/keep their room the same?',
                  a: `There's no "should." Some people need to immediately pack things away; others need to keep everything the same for a long time. Neither is wrong. This is your grief, your pace. Consider: what helps you feel connected? What feels honest? What's sustainable? You can always change your mind later. Ritual (a specific time to go through their things) often feels better than sudden purging.`
                },
                {
                  q: `People keep saying "they're in a better place" or "it's God's plan." This makes me angrier.`,
                  a: `Platitudes, while well-intended, often feel dismissive. Your anger is justified. In therapy, we can work on how to redirect people toward more supportive language, set boundaries with people who aren't helping, and identify people who DO get it. You don't have to educate people about your grief.`
                },
                {
                  q: `I'm having thoughts about joining them or harming myself. What do I do?`,
                  a: `Please reach out: call 988 (Suicide & Crisis Lifeline), text "HOME" to 741741, or go to the ER. These thoughts often mean your pain has become unbearable and you need immediate support. This isn't weakness; it's a sign that grief needs professional intervention. You're not alone in having these thoughts, and they can change with help.`
                },
                {
                  q: `My grief is making my relationships harder. People seem tired of hearing about it.`,
                  a: `Grief-soaked relationships are real. Some people can hold space for deep grief; others get uncomfortable and distance themselves. This is painful but common. In therapy, we work on: expressing your needs clearly, finding people/communities who GET it (support groups, grief-informed friends), and managing your grief alone sometimes so you're not entirely dependent on your relationships.`
                },
                {
                  q: 'Is it disrespectful to move on or start dating again (after losing a spouse)?',
                  a: `No. There's no timeline for when you "can" start dating or be happy again. Every widow/widower grieves differently. Some are ready after months; others need years. Your person would likely want you to find connection and happiness again. The question isn't "is this disrespectful" but "am I doing this for the right reasons, or am I running from grief?" In therapy, we explore that.`
                },
                {
                  q: `My pet died and people say "it was just a pet." But I'm devastated.`,
                  a: `Pet loss is real grief. Your pet was there when you woke up, greeted you when you came home, and provided unconditional love. That bond mattered. Society often calls this "disenfranchised grief"—grief that's not socially acknowledged, which makes it lonelier. Your grief is valid. A good therapist honors the depth of your bond with your animal.`
                }
              ].map((item, index) => (
                <div key={index} className="card card-compact card-static">
                  <h4 className="text-lg font-semibold text-warm-gray-900 mb-3 text-dusk-700">
                    Q: {item.q}
                  </h4>
                  <p className="text-warm-gray-700 leading-relaxed">
                    <span className="font-semibold text-dusk-600">A: </span>{item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Closing: You're Not Alone */}
        <section className="section-padding bg-gradient-to-b from-white to-dusk-50">
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="💜" level={2} color={colors.warmGray[900]}>
              You&apos;re Not Alone in This
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              Grief is one of the most isolating human experiences. The world keeps moving, but you feel stuck. 
              People want you to be &quot;fine&quot; by now. You might feel like no one understands—the specific weight of YOUR loss, YOUR love, YOUR devastation.
            </p>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              In therapy, I create space where your grief doesn&apos;t need to be small or fast or convenient. 
              Where the love you had is honored. Where you&apos;re not &quot;moving on&quot; but learning to move differently, 
              carrying them with you in a way that lets you also live.
            </p>

            <p className="text-warm-gray-700 mb-12 text-lg leading-relaxed font-semibold" style={{color: '#3f566d'}}>
              Your grief is not a problem to be solved. It&apos;s evidence of love. And you deserve support in honoring it.
            </p>

            <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
              Let&apos;s Talk About Your Loss
            </Link>

            <p className="text-warm-gray-600 text-sm mt-6">
              Free 30-minute consultation • Confidential • Trauma-informed approach
            </p>
          </div>
        </section>

        {/* Testimonials */}
        {testimonialsByCategory.grief.length > 0 && (
          <section className="section-padding bg-warm-gray-50" style={{borderTop: `1px solid #e5dcd4`}}>
            <div className="container-base max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-4">
                  Stories of Living with Loss
                </h2>
                <p className="text-lg text-warm-gray-600">
                  How others have found meaning and continuity after grief
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonialsByCategory.grief.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    index={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    rating={testimonial.rating}
                    totalReviews={testimonialsByCategory.grief.length}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="section-padding bg-white" style={{borderTop: `1px solid #e5dcd4`}}>
          <div className="container-base text-center max-w-3xl mx-auto">
            <IconHeading icon="💜" level={2} color={colors.warmGray[900]}>
              You're Not Alone in This
            </IconHeading>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              Grief is one of the most isolating human experiences. The world keeps moving, but you feel stuck. 
              People want you to be "fine" by now. You might feel like no one understands—the specific weight of YOUR loss, YOUR love, YOUR devastation.
            </p>

            <p className="text-warm-gray-700 mb-8 text-lg leading-relaxed">
              In therapy, I create space where your grief doesn't need to be small or fast or convenient. 
              Where the love you had is honored. Where you're not "moving on" but learning to move differently, 
              carrying them with you in a way that lets you also live.
            </p>

            <p className="text-warm-gray-700 mb-12 text-lg leading-relaxed font-semibold" style={{color: '#3f566d'}}>
              Your grief is not a problem to be solved. It's evidence of love. And you deserve support in honoring it.
            </p>

            <Link href="/booking" className="inline-block btn btn-primary text-lg px-8 py-3">
              Let's Talk About Your Loss
            </Link>

            <p className="text-warm-gray-600 text-sm mt-6">
              Free 30-minute consultation • Confidential • Trauma-informed approach
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

