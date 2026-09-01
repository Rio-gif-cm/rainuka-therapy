import { NextRequest, NextResponse } from 'next/server';

// This endpoint tracks when someone visits via a referral link
// WITHOUT storing identifying information about who referred them
// Privacy-first: we only log that a referral occurred, not the referrer

export async function POST(request: NextRequest) {
  try {
    const { referralCode, timestamp } = await request.json();

    // Validate input
    if (!referralCode) {
      return NextResponse.json({ error: 'Missing referral code' }, { status: 400 });
    }

    // Store minimal data: just that a referral occurred
    // In production, this would write to a database
    // For now, we log it for demonstration
    const logEntry = {
      event: 'referral_click',
      referralCode,
      timestamp: timestamp || new Date().toISOString(),
      // We intentionally do NOT store:
      // - IP address
      // - user agent
      // - any identifying information
      // - referrer details
    };

    console.log('Referral tracked:', logEntry);

    // In production, you would:
    // 1. Write to database with minimal schema
    // 2. Optionally send analytics to privacy-respecting service (Plausible, Fathom, etc.)
    // 3. Aggregate referral counts WITHOUT personal data

    return NextResponse.json({
      success: true,
      message: 'Referral tracked',
    });
  } catch (error) {
    console.error('Referral tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track referral' },
      { status: 500 }
    );
  }
}
