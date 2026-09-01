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

  const handleChange = (field: keyof PreCommitmentData, value: any) => {
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

  const isComplete = data.whatBringsYou.trim().length >= 10 && data.hopingTherapyHelps.trim().length >= 10 && data.firstTimeTherapy !== null

  const handleContinue = () => {
    if (isComplete) {
      onComplete(data)
    }
  }

  return (
    <div className="card bg-gradient-to-br from-sage-50 to-cream-50 border-2 border-sage-200 mb-8">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">
          Before We Book: Let Me Understand
        </h3>
        <p className="text-warm-gray-600">
          I want to make sure we're a good fit. Take 2 minutes to share what brings you here—no judgment, just so I can meet you where you're at.
        </p>
      </div>

      <div className="space-y-6">
        {/* Question 1: What brings you to therapy */}
        <div>
          <label htmlFor="whatBringsYou" className="form-label mb-2 block">
            What's bringing you to therapy right now?
          </label>
          <textarea
            id="whatBringsYou"
            value={data.whatBringsYou}
            onChange={(e) => handleChange('whatBringsYou', e.target.value)}
            onBlur={() => handleFieldBlur('whatBringsYou')}
            placeholder="Share what's been on your mind... (just a few sentences)"
            className={`form-input h-24 resize-none transition-all ${
              fieldTouched.whatBringsYou
                ? data.whatBringsYou.trim().length >= 10
                  ? 'border-green-500 bg-green-50'
                  : 'border-orange-400 bg-orange-50'
                : ''
            }`}
          />
          <p className="text-sm text-warm-gray-500 mt-2">
            {data.whatBringsYou.length} characters • Helps me understand what you're navigating
          </p>
        </div>

        {/* Question 2: What are you hoping therapy could help with */}
        <div>
          <label htmlFor="hopingTherapyHelps" className="form-label mb-2 block">
            What are you hoping therapy could help you with?
          </label>
          <textarea
            id="hopingTherapyHelps"
            value={data.hopingTherapyHelps}
            onChange={(e) => handleChange('hopingTherapyHelps', e.target.value)}
            onBlur={() => handleFieldBlur('hopingTherapyHelps')}
            placeholder="What does success look like for you? What changes would matter?"
            className={`form-input h-24 resize-none transition-all ${
              fieldTouched.hopingTherapyHelps
                ? data.hopingTherapyHelps.trim().length >= 10
                  ? 'border-green-500 bg-green-50'
                  : 'border-orange-400 bg-orange-50'
                : ''
            }`}
          />
          <p className="text-sm text-warm-gray-500 mt-2">
            {data.hopingTherapyHelps.length} characters • I'll keep this in mind as we work
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
                  ? 'bg-sage-400 text-white border-2 border-sage-500 shadow-md'
                  : 'bg-white text-warm-gray-600 border-2 border-warm-gray-200 hover:border-sage-300'
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
                  ? 'bg-sage-400 text-white border-2 border-sage-500 shadow-md'
                  : 'bg-white text-warm-gray-600 border-2 border-warm-gray-200 hover:border-sage-300'
              }`}
            >
              No, I've tried before
            </button>
          </div>
          <p className="text-sm text-warm-gray-500 mt-2">
            {data.firstTimeTherapy === null ? 'No judgment either way' : data.firstTimeTherapy ? "That's great—we'll make it feel safe and clear." : "I'm curious what your experience was like."}
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

      {/* CTA to move to form */}
      <div className="mt-8 pt-6 border-t border-sage-200">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isComplete}
          className={`btn btn-primary w-full transition-all ${!isComplete ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
        >
          {isComplete ? "Let's Get You Scheduled" : 'Share a bit more above to continue →'}
        </button>
        <p className="text-xs text-center text-warm-gray-500 mt-3">
          ✓ I've read what you've shared and I think I can help. Now let's get you on the calendar.
        </p>
      </div>
    </div>
  )
}
