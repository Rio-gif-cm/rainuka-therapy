import { NextRequest, NextResponse } from 'next/server'

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

    // Note: Email integration pending backend implementation
    // When ready, implement via process.env.EMAIL_API_URL with proper error handling
    const bookingData = {
      name,
      email,
      phone,
      concern,
      preferredTime,
      timestamp: new Date().toISOString(),
    }
    
    // TODO (BACKEND): Integrate email service to notify admin and client
    // See commented example below for implementation template
    // try {
    //   const emailResponse = await fetch(process.env.EMAIL_API_URL || '', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       to: process.env.ADMIN_EMAIL,
    //       subject: `New Booking Request from ${name}`,
    //       template: 'booking-notification',
    //       data: bookingData,
    //     }),
    //   });
    // } catch (emailError) {
    //   console.error('Email notification failed:', emailError);
    // }

    return NextResponse.json(
      {
        success: true,
        message: 'Booking submission received. I\'ll contact you within 24 hours.',
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
