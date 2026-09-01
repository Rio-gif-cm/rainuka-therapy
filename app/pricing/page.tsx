import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-cream-50">
          <div className="container-base text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warm-gray-900 mb-3 md:mb-4">
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Clear pricing from the start. No surprises, no hidden fees. Therapy should be accessible—here's how we make it work.
            </p>
          </div>
        </section>

        {/* Standard Rate Section */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-sage-50 to-cream-50 p-6 md:p-10 lg:p-12 rounded-lg border border-sage-200 mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-warm-gray-900 mb-2 text-center">
                Standard Session Rate
              </h2>
              <p className="text-center text-warm-gray-600 mb-6 md:mb-8">
                For 50-minute therapy sessions
              </p>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-sage-700 mb-2">
                  $150
                </div>
                <p className="text-warm-gray-600 text-base md:text-lg">
                  per session
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-sage-200">
                <h3 className="font-semibold text-warm-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3 text-warm-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-500 font-bold">✓</span>
                    <span>50-minute confidential therapy session via secure video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-500 font-bold">✓</span>
                    <span>Trauma-informed, personalized approach to your specific needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-500 font-bold">✓</span>
                    <span>HIPAA-compliant confidentiality and secure platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-500 font-bold">✓</span>
                    <span>Between-session support via email when needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card card-tinted card-static">
              <p className="text-warm-gray-700 text-center">
                <strong>Ready to start?</strong> The free 15-minute consultation is where we discuss your specific situation, answer any questions, and talk about payment options that work for you.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="/booking" 
                  className="inline-block px-8 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sliding Scale Section */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-6 md:mb-8 text-center">
              Sliding Scale Options
            </h2>

            <p className="text-warm-gray-600 text-center mb-6 md:mb-8 max-w-2xl mx-auto">
              Therapy should be accessible to everyone who needs it. I have a limited number of reduced-fee slots available based on financial need.
            </p>

            <div className="card card-static mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-warm-gray-900 mb-4 md:mb-6">How Sliding Scale Works</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-warm-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-sage-200 text-sage-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    Income-Based Rate Range
                  </h4>
                  <p className="text-warm-gray-600 ml-10">
                    Reduced-fee slots are $80–$120 per session, depending on your household income and financial circumstances. We'll discuss what feels sustainable for you.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-warm-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-sage-200 text-sage-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    Limited Availability
                  </h4>
                  <p className="text-warm-gray-600 ml-10">
                    I maintain a small number of sliding-scale slots to ensure I can offer quality care while keeping my practice sustainable. They're allocated on a first-come, first-served basis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-warm-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-sage-200 text-sage-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    No Financial Verification Stress
                  </h4>
                  <p className="text-warm-gray-600 ml-10">
                    During our free consultation, we'll have an honest conversation about what you can afford. You share what feels true for your situation—no tax returns or invasive documentation required.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-warm-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-sage-200 text-sage-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    Same Quality Care
                  </h4>
                  <p className="text-warm-gray-600 ml-10">
                    Regardless of the rate you pay, you receive the same level of care, expertise, and attention. Your rate doesn't determine the depth of our work together.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-sage-200 bg-sage-50 p-6 rounded">
                <p className="text-warm-gray-700 text-center font-medium">
                  <strong>To inquire about sliding scale availability:</strong> Mention it during your free consultation, and we'll explore what makes sense for your financial situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Out-of-Network Section */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-6 md:mb-8 text-center">
              Insurance & Out-of-Network Reimbursement
            </h2>

            <div className="space-y-6 md:space-y-8">
              {/* In-Network */}
              <div className="card card-tinted card-static">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-4">
                  ✓ In-Network Insurance
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  I'm in-network with most major insurance providers. You can:
                </p>
                <ul className="space-y-2 text-warm-gray-600 ml-6">
                  <li>• Pay only your copay at each session (typically $20–$50)</li>
                  <li>• I bill your insurance directly</li>
                  <li>• No additional paperwork on your end</li>
                </ul>
                <p className="text-warm-gray-600 mt-4 pt-4 border-t border-cream-300">
                  <strong>Want to verify coverage?</strong> During your free consultation, you can share your insurance provider, and I'll confirm coverage details with you.
                </p>
              </div>

              {/* Out-of-Network Superbill */}
              <div className="bg-gradient-to-br from-sage-50 to-cream-50 p-8 rounded-lg border border-sage-200">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-4">
                  💰 Out-of-Network Reimbursement (Superbill)
                </h3>
                <p className="text-warm-gray-600 mb-6">
                  If you have out-of-network (OON) mental health benefits, you may be able to get reimbursed <strong>even though I don't take your insurance directly.</strong>
                </p>

                <div className="bg-white p-6 rounded mb-6 border border-sage-100">
                  <h4 className="font-semibold text-warm-gray-900 mb-4">How It Works</h4>
                  <div className="space-y-4 text-warm-gray-600 text-sm">
                    <div className="flex gap-4">
                      <span className="text-sage-600 font-bold flex-shrink-0">Step 1:</span>
                      <span>You attend your therapy session at the full rate ($150/session)</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-sage-600 font-bold flex-shrink-0">Step 2:</span>
                      <span>I provide you with a superbill (detailed receipt with diagnosis, CPT codes, and session fee)</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-sage-600 font-bold flex-shrink-0">Step 3:</span>
                      <span>You submit the superbill to your insurance company</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-sage-600 font-bold flex-shrink-0">Step 4:</span>
                      <span>Insurance reimburses you directly (typically 50–80% of the session cost)</span>
                    </div>
                  </div>
                </div>

                <p className="text-warm-gray-600 mb-4">
                  <strong>Real example:</strong> A client pays $150/session upfront but gets reimbursed $100 by insurance. Their effective cost is only $50/session—without me ever discounting or dealing with insurance directly.
                </p>

                <div className="bg-white p-4 rounded border-l-4 border-sage-400">
                  <p className="text-warm-gray-600 text-sm">
                    <strong>💡 Pro tip:</strong> Many people with PPO or POS plans have OON mental health benefits they don't know about. During your consultation, we can discuss whether this option might work for you.
                  </p>
                </div>
              </div>

              {/* No Insurance */}
              <div className="card card-tinted card-static">
                <h3 className="text-xl font-bold text-warm-gray-900 mb-4">
                  🤝 Payment Plans (No Insurance)
                </h3>
                <p className="text-warm-gray-600 mb-4">
                  If you don't have insurance or prefer not to use it, payment plans and flexible arrangements can be discussed during your consultation.
                </p>
                <p className="text-warm-gray-600">
                  The goal is to find what works for your budget without compromising the quality of your care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-6 md:mb-8 text-center">
              Payment Methods
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="card card-compact card-static text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-warm-gray-900 mb-3">Credit/Debit Card</h3>
                <p className="text-warm-gray-600 text-sm">
                  Secure online payment. Billed after each session.
                </p>
              </div>

              <div className="card card-compact card-static text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-bold text-warm-gray-900 mb-3">Bank Transfer</h3>
                <p className="text-warm-gray-600 text-sm">
                  ACH transfer or check. Flexible billing arrangements available.
                </p>
              </div>

              <div className="card card-compact card-static text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-warm-gray-900 mb-3">Insurance Direct</h3>
                <p className="text-warm-gray-600 text-sm">
                  I bill in-network insurance. You pay copay per session.
                </p>
              </div>
            </div>

            <div className="card card-compact card-static mt-6 md:mt-8">
              <p className="text-warm-gray-600 text-center">
                <strong>Questions about payment?</strong> We can discuss any concerns during your free consultation. The goal is to set up something that feels sustainable for you.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ: Pricing & Costs */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-6 md:mb-8 text-center">
              Pricing FAQs
            </h2>

            <div className="space-y-3 md:space-y-4">
              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Is there a free consultation?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. The first 15-minute call is completely free and is just to see if we're a good fit. During this call, we'll also discuss payment options, insurance, and any financial concerns you have. You're under no obligation to move forward.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do you really have sliding scale, or is it just talk?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  I genuinely maintain a few sliding-scale slots. They're limited because I need to keep my practice sustainable, but they're real—not a marketing gimmick. If you have financial constraints, we discuss it honestly during our consultation. No shame, no judgment.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if I can't afford $80–$150 per session?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  We have three options: (1) Sliding scale if a slot is available, (2) Out-of-network insurance reimbursement if you have OON benefits, or (3) Explore if there are other resources in your area I can recommend. I'm committed to helping you find a solution, but I also need to be honest if my practice can't be the right fit right now.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  How do I know if my insurance covers out-of-network therapy?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Call the number on the back of your insurance card and ask about out-of-network (OON) mental health benefits. Ask specifically: "What's my reimbursement percentage for out-of-network therapy?" Typically it's 50–80%. During your free consultation, we can discuss your specific plan.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do you offer payment plans?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. We can discuss payment arrangements based on your financial situation. Life happens—job changes, unexpected expenses, hard times. If you're in ongoing treatment with me, we can find a way to make it work, within reason.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do I pay for cancellations?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  If you cancel with less than 24 hours' notice, I charge the full session fee. Life gets messy, and I try to be flexible with one-offs, but I hold the time for you. If you need to reschedule, just let me know as soon as you can.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Why are your rates transparent?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Because therapy is already vulnerable and scary. The last thing you need is to wonder if you can afford it or if you're being taken advantage of. Transparency is respect. I believe you should know what you're getting into before you make any decision.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  What if insurance denies my claim or superbill?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Sometimes insurance denies claims for various reasons (authorization issues, diagnosis code mismatches, coverage limits). If that happens, we'll problem-solve together. I'll appeal if needed or help you understand your options. You're not alone in figuring this out.
                </p>
              </details>

              <details className="card cursor-pointer">
                <summary className="font-semibold text-warm-gray-900 flex justify-between items-center">
                  Do you offer teletherapy at the same rate?
                  <span className="text-sage-400">▼</span>
                </summary>
                <p className="text-warm-gray-600 mt-4">
                  Yes. Telehealth is my primary modality. Whether you're in your home, office, or anywhere comfortable, the rate and level of care are the same. Video therapy can be just as effective as in-person—and it's often more convenient.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="section-padding bg-gradient-to-br from-sage-50 to-cream-50">
          <div className="container-base max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-3 md:mb-4">
                Transparency Matters
              </h2>
              <p className="text-warm-gray-600">
                Therapy asks you to be vulnerable. The least I can do is be honest about the cost, the process, and what to expect.
              </p>
            </div>

            <div className="card card-static">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">🔓</div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">No Hidden Fees</h3>
                    <p className="text-warm-gray-600">
                      The price you see is the price you pay. No surprise charges, no admin fees, no "processing costs." Just straightforward, honest pricing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Real Sliding Scale</h3>
                    <p className="text-warm-gray-600">
                      I actually maintain reduced-fee slots. Not a marketing tool—actual financial flexibility based on real need.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Honest Conversation</h3>
                    <p className="text-warm-gray-600">
                      If money is a barrier to your care, we talk about it. No judgment. We'll explore options together—sliding scale, insurance, payment plans, or resources elsewhere.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">🤝</div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Respect for Your Budget</h3>
                    <p className="text-warm-gray-600">
                      Your financial reality matters. Just as much as your emotional reality. Treatment that ignores either one isn't complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-warm-gray-600 mb-8 text-lg">
              The free 15-minute consultation is where we discuss your situation, your goals, and all the financial details. No pressure. Just honest conversation.
            </p>
            <a 
              href="/booking" 
              className="inline-block px-10 py-4 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors text-lg"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
