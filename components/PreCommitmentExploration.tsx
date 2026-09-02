'use client'

import { useState } from 'react'

interface PreCommitmentData {
  whatBringsYou: string
  hopingTherapyHelps: string
  firstTimeTherapy: boolean | null
  preferences: string
}

interface PreCommitmentExplorationProps {
  onComplete: (data: PreCommitmentData) => void
}

export default function PreCommitmentExploration({ onComplete }: PreCommitmentExplorationProps) {
  const [data, setData] = useState<PreCommitmentData>({
    whatBringsYou: '',
    hopingTherapyHelps: '',
    firstTimeTherapy: null,
    preferences: '',
  })

  const [fieldTouched, setFieldTouched] = useState({
    whatBringsYou: false,
    hopingTherapyHelps: false,
    firstTimeTherapy: false,
    preferences: false,
  })

  const handleChange = (field: keyof PreCommitmentData, value: string | boolean) => {
    setData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFieldBlur = (field: keyof PreCommitmentData) => {
    setFieldTouched(prev => ({
      ...prev,
      [field]: true,
    }))
  }

  const isComplete = data.whatBringsYou.trim().length >= 10 && data.firstTimeTherapy !== null

  const handleContinue = () => {
    if (isComplete) {
      onComplete(data)
    }
  }

  return (
    <>
      {/* URGENCY SIGNAL: Social Proof + Timeline (High-Impact Trust Builder) */}
      <div className="card bg-gradient-to-br from-burgundy-50 to-burgundy-50 border-2 border-burgundy-200 mb-8">
        <div className="flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">✓</span>
          <div className="flex-grow">
            <p className="font-semibold text-burgundy-800 text-lg mb-1">
              95% of clients book ongoing sessions after their free call
            </p>
            <p className="text-sm text-burgundy-700">
              This takes 2 minutes. Most people book within 1-2 weeks of their free call.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-gradient-to-br from-burgundy-50 to-cream-50 border-2 border-burgundy-200 mb-8">
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
            Before We Book: Let Me Understand
          </h3>
          <p className="text-warm-gray-600">
            I want to make sure we're a good fit. Share what brings you here and what you're hoping to change-no judgment, just so I can meet you where you're at.
          </p>
        </div>

        <div className="space-y-6">
          {/* COMBINED QUESTION 1&2: What brings you + what you're hoping to change (Friction Reduction) */}
          <div>
            <label htmlFor="whatBringsYou" className="form-label mb-2 block">
              What's bringing you here, and what are you hoping to change?
            </label>
            <textarea
              id="whatBringsYou"
              value={data.whatBringsYou}
              onChange={(e) => handleChange('whatBringsYou', e.target.value)}
              onBlur={() => handleFieldBlur('whatBringsYou')}
              placeholder="Share what's on your mind and what would feel better. Just a few sentences is perfect."
              className={`form-input h-28 resize-none transition-all ${
                fieldTouched.whatBringsYou
                  ? data.whatBringsYou.trim().length >= 10
                    ? 'border-burgundy-500 bg-burgundy-50'
                    : 'border-honey-300 bg-honey-50'
                  : ''
              }`}
            />
            <p className="text-sm text-warm-gray-500 mt-2">
              {data.whatBringsYou.trim().length >= 10 ? '✓ Got it' : 'Share a bit more'} • This helps me understand what you're navigating
            </p>
          </div>

          {/* Question 3: First time therapy */}
          <div>
            <label className="form-label mb-3 block">
              Is this your first time seeking therapy?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => handleChange('firstTimeTherapy', true)}
                onBlur={() => handleFieldBlur('firstTimeTherapy')}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  data.firstTimeTherapy === true
                    ? 'bg-burgundy-400 text-white border-2 border-burgundy-500 shadow-md'
                    : 'bg-white text-warm-gray-600 border-2 border-warm-gray-200 hover:border-burgundy-300'
                }`}
              >
                Yes, first time
              </button>
              <button
                type="button"
                onClick={() => handleChange('firstTimeTherapy', false)}
                onBlur={() => handleFieldBlur('firstTimeTherapy')}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  data.firstTimeTherapy === false
                    ? 'bg-burgundy-400 text-white border-2 border-burgundy-500 shadow-md'
                    : 'bg-white text-warm-gray-600 border-2 border-warm-gray-200 hover:border-burgundy-300'
                }`}
              >
                No, I've tried before
              </button>
            </div>
            <p className="text-sm text-warm-gray-500 mt-2">
              {data.firstTimeTherapy === null ? 'No judgment either way' : data.firstTimeTherapy ? "That's great-we'll make it feel safe and clear." : "I'm curious what your experience was like."}
            </p>
          </div>

          {/* Question 4: Preferences (optional) */}
          <div>
            <label htmlFor="preferences" className="form-label mb-2 block">
              Any preferences for how we work together? (optional)
            </label>
            <textarea
              id="preferences"
              value={data.preferences}
              onChange={(e) => handleChange('preferences', e.target.value)}
              onBlur={() => handleFieldBlur('preferences')}
              placeholder="E.g., pace, style, things that matter to you..."
              className="form-input h-20 resize-none"
            />
            <p className="text-sm text-warm-gray-500 mt-2">
              This helps me personalize our sessions to what works best for you.
            </p>
          </div>
        </div>

        {/* CTA to move to form - OPTIMIZED WITH PROGRESS + OUTCOME-FIRST COPY */}
        <div className="mt-8 pt-6 border-t border-burgundy-200">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!isComplete}
            className={`btn btn-primary w-full transition-all ${!isComplete ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
          >
            {isComplete ? "Yes, I'm Ready to Book" : 'Share what brought you here to continue →'}
          </button>
          <p className="text-xs text-center text-warm-gray-500 mt-3">
            ✓ One more step: Just share your contact info and we'll schedule your free 15-minute call.
          </p>
        </div>
      </div>
    </>
  )
}
