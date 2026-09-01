import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { referralCode } = await request.json();

    if (!referralCode) {
      return NextResponse.json({ error: 'Missing referral code' }, { status: 400 });
    }

    const logEntry = {
      event: 'referral_click',
      referralCode,
      timestamp: new Date().toISOString(),
    };

    // Referral tracked for analytics (log to backend analytics service in production)

    return NextResponse.json({
      success: true,
      message: 'Referral tracked',
    });
  } catch (error) {
    console.error('Referral tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track referral' },
      { status: 500 }\n    );
  }
}
