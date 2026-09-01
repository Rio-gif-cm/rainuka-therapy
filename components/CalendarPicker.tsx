'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { 
  getAvailableSlotsForDate, 
  isDateAvailable,
  formatTimeSlot,
  TimeSlot 
} from '@/lib/availabilityData'
import 'react-day-picker/dist/style.css'

interface CalendarPickerProps {
  onDateTimeSelect: (date: Date, time: string) => void
  selectedDate?: Date
  selectedTime?: string
  minDate?: Date
}

export default function CalendarPicker({
  onDateTimeSelect,
  selectedDate,
  selectedTime,
  minDate,
}: CalendarPickerProps) {
  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | undefined>(
    selectedDate || undefined
  )
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(selectedTime)

  // Get available time slots for the selected date
  const availableSlots = internalSelectedDate
    ? getAvailableSlotsForDate(internalSelectedDate)
    : []

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setInternalSelectedDate(date)
      setSelectedSlot(undefined) // Reset time selection when date changes
    }
  }

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    if (internalSelectedDate) {
      setSelectedSlot(timeSlot.start)
      onDateTimeSelect(internalSelectedDate, timeSlot.start)
    }
  }

  // Utility function to disable unavailable dates
  const isDisabledDate = (date: Date): boolean => {
    // Disable past dates
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (date < today) return true

    // Disable dates with no availability
    if (!isDateAvailable(date)) return true

    return false
  }

  return (
    <div className="space-y-6">
      {/* Calendar Section */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Choose a date that works for you
        </label>
        <div className="inline-block border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <DayPicker
            mode="single"
            selected={internalSelectedDate}
            onSelect={handleDateSelect}
            disabled={isDisabledDate}
            defaultMonth={minDate || new Date()}
            showOutsideDays={false}
            className="p-4"
            classNames={{
              months: 'space-y-4',
              month: 'space-y-4',
              head_cell: 'text-xs font-medium text-gray-600 h-10 w-10 p-0',
              cell: 'h-10 w-10 p-0 text-center text-sm',
              day: 'h-10 w-10 p-0 font-normal',
              day_selected: 'bg-green-600 text-white rounded-md',
              day_today: 'bg-gray-100',
              day_disabled: 'text-gray-300 cursor-not-allowed',
              day_outside: 'text-gray-400',
            }}
          />
        </div>
        {internalSelectedDate && (
          <p className="text-sm text-gray-600">
            Selected: <span className="font-semibold">{format(internalSelectedDate, 'EEEE, MMMM d')}</span>
          </p>
        )}
      </div>

      {/* Time Selection Section */}
      {internalSelectedDate && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Choose a time
          </label>
          {availableSlots.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(slot)}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors border-2 ${
                    selectedSlot === slot.start
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-green-500 hover:bg-green-50'
                  }`}
                >
                  {formatTimeSlot(slot.start)}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">
              No availability on this date. Please choose another.
            </p>
          )}
        </div>
      )}

      {/* Selection Summary */}
      {internalSelectedDate && selectedSlot && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3">
          <p className="text-sm text-gray-700">
            ✓ Appointment requested for <span className="font-semibold">{format(internalSelectedDate, 'MMMM d, yyyy')}</span> at{' '}
            <span className="font-semibold">{formatTimeSlot(selectedSlot)}</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">
            We'll confirm this time within 24 hours
          </p>
        </div>
      )}
    </div>
  )
}
