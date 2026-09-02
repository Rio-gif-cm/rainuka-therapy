import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Perinatal Anxiety Signs | Checklist & Help Guide',
  description: 'Recognize physical, emotional, behavioral perinatal anxiety signs. Free checklist and when to seek help. Get consultation today.',
  keywords:
    "perinatal anxiety, postpartum anxiety, maternal anxiety, anxiety symptoms after birth",
  openGraph: {
    title: "Signs You Might Have Perinatal Anxiety: Symptoms & Treatment",
    description:
      "Understand perinatal anxiety signs and get evidence-based treatment. 1 in 5 mothers experience this-you're not alone.",
    type: "article",
  },
};

export default function PerinatalAnxietyGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-burgundy-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-burgundy-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6">
            Signs You Might Have Perinatal Anxiety
          </h1>
          <p className="text-xl text-warm-gray-700 mb-8">
            A practical guide to understanding postpartum anxiety symptoms,
            when to seek help, and what therapy can offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="card card-compact card-static">
              <p className="text-sm text-warm-gray-600">
                <strong>1 in 5 mothers</strong> experience perinatal anxiety
              </p>
            </div>
            <div className="card card-compact card-static">
              <p className="text-sm text-warm-gray-600">
                Most see <strong>50%+ improvement</strong> in 6-8 weeks
              </p>
            </div>
          </div>
          <p className="text-warm-gray-600 italic">
            Reading time: 8 minutes | Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Quick Checklist CTA */}
      <section className="px-4 py-12 bg-white border-t-2 border-burgundy-200">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dusk-50 border-l-4 border-dusk-300 p-6 rounded">
            <h2 className="text-lg font-semibold text-warm-gray-900 mb-4">
              Quick Check: Do Any of These Sound Like You?
            </h2>
            <ul className="space-y-2 text-warm-gray-700 mb-6">
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom1"
                  disabled
                />
                <label htmlFor="symptom1">
                  Racing heart or chest tightness, especially during routine care
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom2"
                  disabled
                />
                <label htmlFor="symptom2">
                  Insomnia or difficulty sleeping even when baby sleeps
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom3"
                  disabled
                />
                <label htmlFor="symptom3">
                  Obsessive thoughts about baby's safety (SIDS, illness, harm)
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom4"
                  disabled
                />
                <label htmlFor="symptom4">
                  Constantly checking if baby is breathing or seeking reassurance
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom5"
                  disabled
                />
                <label htmlFor="symptom5">
                  Difficulty bonding despite wanting to feel connected
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom6"
                  disabled
                />
                <label htmlFor="symptom6">
                  Panic attacks or overwhelming sense of dread
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  id="symptom7"
                  disabled
                />
                <label htmlFor="symptom7">
                  Avoiding situations where you're alone with baby
                </label>
              </li>
            </ul>
            <p className="text-warm-gray-700 mb-4">
              If 3+ of these resonate with you, you might have perinatal anxiety.
              <strong> This is treatable.</strong>
            </p>
            <a
              href="#booking"
              className="inline-block bg-dusk-600 hover:bg-dusk-700 text-white font-semibold py-3 px-6 rounded transition"
            >
              Schedule a Free 15-Minute Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-warm-gray-900 prose-a:text-dusk-600 max-w-none">
          <h2>What Is Perinatal Anxiety?</h2>
          <p>
            Perinatal anxiety refers to anxiety that develops during pregnancy
            (prenatal) or in the year after birth (postpartum). It's distinct
            from postpartum depression, though they often occur together. Anxiety
            creates a persistent sense of threat-your nervous system stays in
            "high alert" mode, flooding your body with stress hormones even when
            the baby is safe and asleep.
          </p>
          <p>
            This isn't about being a "worried parent." Perinatal anxiety
            interferes with sleep, bonding, daily functioning, and quality of
            life. It responds remarkably well to therapy and, when needed,
            medication.
          </p>

          <h2>Physical Signs of Perinatal Anxiety</h2>
          <p>
            Your nervous system knows something's wrong before your mind does.
            Watch for these physical patterns:
          </p>

          <h3>Racing Heart & Chest Tightness</h3>
          <ul>
            <li>Heart pounds during feeding, diaper changes, or for no apparent reason</li>
            <li>Chest feels tight, like it's hard to take a full breath</li>
            <li>Feeling like you're "about to have a heart attack"</li>
          </ul>
          <p>
            <em>Why it happens:</em> Anxiety keeps your sympathetic nervous system
            activated (the "fight or flight" system), triggering adrenaline and
            elevated heart rate.
          </p>

          <h3>Insomnia-Even When the Baby Sleeps</h3>
          <ul>
            <li>You're exhausted but can't fall asleep (or wake after 2-3 hours)</li>
            <li>Your mind races with "what if" scenarios</li>
            <li>You wake in a panic even on nights when baby doesn't wake</li>
            <li>Sleep feels dangerous-fear of "missing something"</li>
          </ul>

          <h3>Constant Physical Tension</h3>
          <ul>
            <li>Jaw clenched, shoulders up around your ears</li>
            <li>Feeling "wired" or jittery</li>
            <li>Trembling, shaking, or feeling unsteady</li>
            <li>Muscle aches that don't improve with rest</li>
          </ul>

          <h2>Mental & Emotional Signs</h2>

          <h3>Obsessive Thoughts About Baby's Safety</h3>
          <p>
            This is the signature symptom of perinatal anxiety. It's not normal
            worry; it's repetitive, intrusive, and distressing.
          </p>
          <ul>
            <li>Constant fear the baby will stop breathing</li>
            <li>Repeated thoughts about the baby getting sick or hurt</li>
            <li>
              Inability to stop catastrophizing (repeating the same "what if"
              hundreds of times)
            </li>
            <li>
              Seeking reassurance-checking if baby is breathing, asking partner
              repeatedly
            </li>
          </ul>

          <h3>Difficulty Bonding or Emotional Numbness</h3>
          <ul>
            <li>Feeling disconnected from the baby despite wanting to bond</li>
            <li>Guilt and shame about not feeling "instant love"</li>
            <li>Anxiety so overwhelming it overshadows joy</li>
          </ul>

          <h3>Panic Attacks</h3>
          <ul>
            <li>Sudden onset of intense fear (peaks in 5-10 minutes)</li>
            <li>"Attacks" seem to come out of nowhere</li>
            <li>Fear of having panic in public (leads to avoidance)</li>
          </ul>

          <h2>Behavioral Signs</h2>
          <ul>
            <li>
              <strong>Compulsive checking:</strong> Constantly verifying baby is
              breathing
            </li>
            <li>
              <strong>Avoidance:</strong> Difficulty being alone with baby or
              leaving the house
            </li>
            <li>
              <strong>Over-researching:</strong> Spending 2-3+ hours daily
              googling symptoms
            </li>
            <li>
              <strong>Hypervigilance:</strong> Unable to relax, constantly
              scanning for threats
            </li>
            <li>
              <strong>Social withdrawal:</strong> Isolating from support and
              friends
            </li>
          </ul>

          <h2>When to Seek Help</h2>
          <p>
            <strong>Reach out to a therapist or OB if:</strong>
          </p>
          <ul>
            <li>
              Anxiety symptoms persist for more than 2 weeks and interfere with
              daily life
            </li>
            <li>You're unable to sleep even when the baby sleeps</li>
            <li>Intrusive thoughts are causing significant distress</li>
            <li>Anxiety is affecting bonding or your ability to care for yourself</li>
            <li>You're isolating or withdrawing from support</li>
          </ul>

          <h2>What Treatment Looks Like</h2>

          <h3>Therapy Approaches That Work</h3>
          <p>
            <strong>Cognitive-Behavioral Therapy (CBT)</strong> targets the thought
            patterns driving anxiety and teaches you to observe anxious thoughts
            without fighting them. Most people see 50%+ improvement in 8-12
            sessions.
          </p>
          <p>
            <strong>Somatic Therapy</strong> focuses on releasing physical tension
            and regulating your nervous system. This is especially helpful for
            insomnia and hypervigilance.
          </p>
          <p>
            <strong>Attachment-Focused Therapy</strong> specifically addresses
            bonding barriers and maternal shame, helping you understand how
            anxiety blocks connection.
          </p>

          <h2>Key Takeaway</h2>
          <p>
            <strong>Perinatal anxiety is treatable. You're not alone. Help works.</strong>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="booking"
        className="px-4 py-16 bg-burgundy-100 border-t-2 border-burgundy-300"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-warm-gray-900 mb-4">
            You Don't Have to Do This Alone
          </h2>
          <p className="text-lg text-warm-gray-700 mb-8">
            I specialize in perinatal mental health and have worked with hundreds
            of mothers through this exact experience. Let's talk about what you're
            experiencing and what therapy can offer.
          </p>
          <div className="card card-static">
            <h3 className="text-xl font-semibold text-warm-gray-900 mb-4">
              Free 15-Minute Consultation
            </h3>
            <p className="text-warm-gray-700 mb-6">
              We'll discuss your symptoms, your concerns, and whether therapy is
              right for you. No judgment, no pressure.
            </p>
            <a
              href="https://calendly.com/rainuka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dusk-600 hover:bg-dusk-700 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
            >
              Schedule Your Free Consultation
            </a>
            <p className="text-sm text-warm-gray-600 mt-4">
              Available for in-person and telehealth sessions
            </p>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm text-warm-gray-600 mb-8">
            <strong>About the Author</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="sm:w-1/4">
              <div className="w-24 h-24 bg-burgundy-200 rounded-full mx-auto"></div>
            </div>
            <div className="sm:w-3/4">
              <h3 className="text-lg font-semibold text-warm-gray-900">
                Rainuka Oberoi, Licensed Therapist
              </h3>
              <p className="text-warm-gray-700 mb-4">
                Licensed therapist specializing in perinatal mental
                health, ADHD in adults, and career transitions. 12+ years helping
                clients navigate anxiety, identity, and life changes.
              </p>
              <ul className="text-sm text-warm-gray-600 space-y-1">
                <li>✓ Licensed in Canada, California, and Florida</li>
                <li>✓ Specialized training in perinatal anxiety</li>
                <li>✓ CBT, somatic, and attachment-focused therapy</li>
                <li>✓ In-person (Oakland) & telehealth (CA-licensed only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 bg-warm-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-warm-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="card card-compact card-static cursor-pointer">
              <summary className="font-semibold text-warm-gray-900">
                Is perinatal anxiety different from postpartum depression?
              </summary>
              <p className="mt-4 text-warm-gray-700">
                Yes. Anxiety is characterized by racing thoughts, hypervigilance,
                and a sense of threat. Depression is characterized by numbness,
                hopelessness, and lack of motivation. Many people experience both,
                but they respond to different treatment approaches.
              </p>
            </details>

            <details className="card card-compact card-static cursor-pointer">
              <summary className="font-semibold text-warm-gray-900">
                Can I breastfeed if I take medication for anxiety?
              </summary>
              <p className="mt-4 text-warm-gray-700">
                Many SSRIs (Sertraline, Paroxetine) are considered safe during
                breastfeeding. Your OB or psychiatrist can review your specific
                situation and recommend options. Don't stop medication without
                consulting your doctor.
              </p>
            </details>

            <details className="card card-compact card-static cursor-pointer">
              <summary className="font-semibold text-warm-gray-900">
                How quickly does therapy help?
              </summary>
              <p className="mt-4 text-warm-gray-700">
                Most people notice shifts in 2-4 sessions. Significant improvement
                (50%+) typically takes 8-12 sessions. This is one of the most
                responsive anxiety presentations to therapy.
              </p>
            </details>

            <details className="card card-compact card-static cursor-pointer">
              <summary className="font-semibold text-warm-gray-900">
                Does therapy replace medication?
              </summary>
              <p className="mt-4 text-warm-gray-700">
                Therapy and medication work well together and often faster than
                either alone. Discuss with your OB or psychiatrist whether
                medication is right for your situation.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 bg-white border-t-2 border-burgundy-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-warm-gray-700 mb-6">
            <em>
              This guide is educational and not a substitute for professional
              medical advice. If you're experiencing severe symptoms or thoughts of
              self-harm, contact your OB, psychiatrist, or call 988 (Suicide &
              Crisis Lifeline).
            </em>
          </p>
          <a
            href="https://calendly.com/rainuka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dusk-600 hover:bg-dusk-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Ready to Talk? Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
