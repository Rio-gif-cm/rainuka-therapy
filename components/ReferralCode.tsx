'use client';

import { useState } from 'react';

interface ReferralCodeProps {
  code: string;
}

// Inline SVG icons to avoid lucide-react dependency
function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )
}

export default function ReferralCode({ code }: ReferralCodeProps) {
  const [copied, setCopied] = useState(false);
  const referralUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/welcome?ref=${code}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToEmail = () => {
    const subject = 'I Found a Therapist That\'s Really Helping Me';
    const body = `Hi!\n\nI've been working with Rainuka Oberoi and she's wonderful. If you're considering therapy, she specializes in perinatal mental health, ADHD, and career transitions.\n\n${referralUrl}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="bg-gradient-to-br from-warm-gray-50 to-warm-gray-100 rounded-lg border border-warm-gray-200 p-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-warm-gray-700 mb-2">Your Referral Link</p>
          <div className="flex gap-2">
            <div className="card card-static flex-1 px-4 py-3 flex items-center gap-3">
              <code className="text-sm text-warm-gray-600 flex-1 break-all font-mono">{referralUrl}</code>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 p-2 rounded-md transition-all ${
                  copied ? 'bg-burgundy-100 text-burgundy-600' : 'bg-warm-gray-100 text-warm-gray-600 hover:bg-warm-gray-200'
                }`}
              >
                <CopyIcon />
              </button>
            </div>
          </div>
          {copied && <p className="text-xs text-burgundy-600 mt-2">✓ Copied</p>}
        </div>

        <div>
          <p className="text-sm font-medium text-warm-gray-700 mb-3">Share</p>
          <button onClick={shareToEmail} className="card card-compact card-static hover:bg-warm-gray-50 w-full flex items-center justify-center gap-2">
            <MailIcon />
            <span>Email a Friend</span>
          </button>
        </div>
      </div>
    </div>
  );
}
