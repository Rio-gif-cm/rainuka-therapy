/**
 * Therapist Availability Configuration
 * 
 * This file defines Rainuka's available booking times.
 * Update this to reflect actual availability.
 * 
 * Format: Day -> Array of time slots
 * Each slot has start and end times in 24-hour format
 */

export interface TimeSlot {
  start: string // HH:MM (24-hour format)
  end: string   // HH:MM (24-hour format)
}

export interface DaySchedule {
  [key: string]: TimeSlot[]
}

/**
 * Weekly recurring schedule
 * Note: This is a base schedule. Specific dates can be overridden
 * via blockedDates or specialAvailability
 */
export const weeklySchedule: DaySchedule = {
  monday: [
    { start: '09:00', end: '11:30' },    // Morning session
    { start: '13:00', end: '17:00' },    // Afternoon session
  ],
  tuesday: [
    { start: '09:00', end: '11:30' },
    { start: '13:00', end: '17:00' },
  ],
  wednesday: [
    { start: '09:00', end: '11:30' },
    { start: '13:00', end: '17:00' },
  ],
  thursday: [
    { start: '09:00', end: '11:30' },
    { start: '13:00', end: '17:00' },
  ],
  friday: [
    { start: '09:00', end: '11:30' },
    { start: '13:00', end: '14:30' },    // Shorter Friday
  ],
  saturday: [], // Not available
  sunday: [],   // Not available
}

/**
 * Specific dates that are blocked (holidays, vacation, etc.)
 * Format: 'YYYY-MM-DD'
 */
export const blockedDates: string[] = [
  // Example: '2026-12-25', // Christmas
  // Example: '2026-09-01', // Labor Day
]

/**
 * Special availability for specific dates (overrides weekly schedule)
 * Use this for extended hours, special sessions, or exceptions
 */
export const specialAvailability: { [date: string]: TimeSlot[] } = {
  // Example: '2026-09-10': [{ start: '18:00', end: '19:00' }], // Evening slot
}

/**
 * Minimum buffer between end of one session and start of another
 * In minutes (therapy sessions need transition/documentation time)
 */
export const bufferBetweenSessions = 15

/**
 * Helper function: Get available time slots for a specific date
 * Returns empty array if date is blocked or outside office hours
 */
export function getAvailableSlotsForDate(date: Date): TimeSlot[] {
  const dateStr = date.toISOString().split('T')[0] // YYYY-MM-DD

  // Check if date is blocked
  if (blockedDates.includes(dateStr)) {
    return []
  }

  // Check for special availability first
  if (specialAvailability[dateStr]) {
    return specialAvailability[dateStr]
  }

  // Fall back to weekly schedule
  const dayName = date.toLocaleDateString('en-US', { weekday: 'lowercase' })
  return weeklySchedule[dayName] || []
}

/**
 * Helper function: Check if a date is available
 * (has at least one time slot)
 */
export function isDateAvailable(date: Date): boolean {
  return getAvailableSlotsForDate(date).length > 0
}

/**
 * Helper function: Format time slot for display
 * Converts '14:30' to '2:30 PM'
 */
export function formatTimeSlot(time: string): string {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours, 10)
  const minute = minutes
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12

  return `${displayHour}:${minute} ${ampm}`
}

/**
 * Helper function: Get all available dates in a date range
 * Useful for highlighting available dates in calendar
 */
export function getAvailableDatesInRange(startDate: Date, endDate: Date): Date[] {
  const available: Date[] = []
  const current = new Date(startDate)

  while (current <= endDate) {
    if (isDateAvailable(current)) {
      available.push(new Date(current)) // Push a copy
    }
    current.setDate(current.getDate() + 1)
  }

  return available
}
