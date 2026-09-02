'use client'

import { useState } from 'react'
import PreCommitmentExploration from './PreCommitmentExploration'
import BookingForm from './BookingForm'

interface PreCommitmentData {
  whatBringsYou: string
  hopingTherapyHelps: string
  firstTimeTherapy: boolean | null
  preferences: string
}

export default function BookingFormWrapper() {
  const [preCommitmentComplete, setPreCommitmentComplete] = useState(false)
  const [preCommitmentData, setPreCommitmentData] = useState<PreCommitmentData | null>(null)

  if (!preCommitmentComplete) {
    return (
      <PreCommitmentExploration
        onComplete={(data) => {
          setPreCommitmentData(data)
          setPreCommitmentComplete(true)
        }}
      />
    )
  }

  return (
    <>
      {/* Confirmation message showing pre-commitment was recorded */}
      <div className="card bg-burgundy-50 border border-burgundy-200 mb-8">
        <div className="flex gap-3 items-start">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-semibold text-burgundy-800">I've heard you</p>
            <p className="text-sm text-burgundy-700 mt-1">
              I saw what you shared about {preCommitmentData?.whatBringsYou?.substring(0, 30)}... I think I can help. Now let's get you on the calendar.
            </p>
          </div>
        </div>
      </div>

      {/* Booking form with pre-commitment data passed (for reference/future use) */}
      <BookingForm preCommitmentData={preCommitmentData} />
    </>
  )
}
