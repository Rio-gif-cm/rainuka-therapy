'use client';

import { useState } from 'react';
import { Copy, Share2, Mail, MessageCircle, Linkedin } from 'lucide-react';

interface ReferralCodeProps {
  code: string;
}

export default function ReferralCode({ code }: ReferralCodeProps) {
  const [copied, setCopied] = useState(false);
  const referralUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/welcome?ref=${code}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share button helpers
  const shareToEmail = () => {
    const subject = "I Found a Therapist That's Really Helping Me";
    const body = `Hi! I wanted to share something with you.\n\nI've been working with Rainuka Oberoi, a therapist who specializes in perinatal mental health, ADHD, and career transitions. If you're thinking about therapy or have been considering it, she's wonderful.\n\nHere's a link to learn more: ${referralUrl}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const shareToLinkedin = () => {
    const text = `I've been working with @RainukaTherapy and wanted to share. If you're navigating career transitions, ADHD, or need support, Rainuka is exceptional. No pressure—just thought it might help. 💙 ${referralUrl}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralUrl)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const text = `I wanted to share something with you. 💙\n\nI'm working with a therapist named Rainuka Oberoi, and she's been really helpful. If you ever think about therapy, she specializes in perinatal stuff, ADHD, and career changes.\n\n${referralUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 p-6">
      {/* Referral Link Card */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">Your Personal Referral Link</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-3 flex items-center gap-3">
              <code className="text-sm text-slate-600 flex-1 break-all font-mono">{referralUrl}</code>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 p-2 rounded-md transition-all ${
                  copied
                    ? 'bg-green-100 text-green-600'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="Copy to clipboard"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>
          {copied && <p className="text-xs text-green-600 mt-2">✓ Copied to clipboard</p>}
        </div>

        {/* Share Buttons Section */}
        <div>
          <p className="text-sm font-medium text-slate-700 mb-3">Share With Friends</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={shareToEmail}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
              title="Share via email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </button>
            <button
              onClick={shareToWhatsApp}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
              title="Share via WhatsApp"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button
              onClick={shareToLinkedin}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
              title="Share on LinkedIn"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Rainuka Oberoi - Therapist',
                    text: 'I found a therapist who is really helping me.',
                    url: referralUrl,
                  });
                }
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
              title="Share"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline">More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
