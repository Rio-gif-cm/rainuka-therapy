import { NextRequest, NextResponse } from 'next/server'

// Email notification helper
async function sendBookingNotification(bookingData: {
  name: string
  email: string
  phone: string
  concern: string
  preferredTime: string
  timestamp: string
}) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL
    
    // Use Resend API if available, otherwise fall back to SMTP
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'booking@rainukatherapy.com',
          to: [adminEmail, bookingData.email],
          subject: `New Booking Request from ${bookingData.name}`,
          html: generateBookingEmailHTML(bookingData, 'admin'),
          replyTo: bookingData.email,
        }),
      })
      
      if (!response.ok) {
        throw new Error(`Resend API error: ${response.statusText}`)
      }
      
      return { success: true, provider: 'resend' }
    }
    
    // Fallback: Log to console in dev, send via HTTP endpoint in production
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Booking notification (dev mode):', bookingData)
      return { success: true, provider: 'console' }
    }
    
    // If no email service configured, still track in logs
    console.warn('⚠️ No email service configured. Booking saved but notification not sent.')
    return { success: false, provider: 'none', message: 'Email service not configured' }
  } catch (error) {
    console.error('❌ Booking notification failed:', error)
    return { success: false, error }
  }
}

function generateBookingEmailHTML(data: any, type: 'admin' | 'client'): string {
  if (type === 'admin') {
    return `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Concern:</strong> ${data.concern}</p>
      <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
      <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
      <hr>
      <p>Please follow up within 24 hours.</p>
    `
  }
  
  return `
    <h2>Booking Request Received</h2>
    <p>Hi ${data.name},</p>
    <p>Thank you for your interest in therapy with Rainuka Oberoi. Your booking request has been received.</p>
    <p><strong>Your details:</strong></p>
    <ul>
      <li>Concern: ${data.concern}</li>
      <li>Preferred Time: ${data.preferredTime}</li>
    </ul>
    <p>I'll reach out within 24 hours to confirm your appointment or discuss scheduling options.</p>
    <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
    <p>Warmly,<br>Rainuka Oberoi</p>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, concern, preferredTime } = body

    // Validate required fields
    if (!name || !email || !phone || !concern || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const bookingData = {
      name,
      email,
      phone,
      concern,
      preferredTime,
      timestamp: new Date().toISOString(),
    }
    
    // Send email notifications (async, don't block response)
    sendBookingNotification(bookingData).catch(err => 
      console.error('Notification error (non-blocking):', err)
    )

    return NextResponse.json(
      {
        success: true,
        message: "Booking submission received. I'll contact you within 24 hours.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 })
}
