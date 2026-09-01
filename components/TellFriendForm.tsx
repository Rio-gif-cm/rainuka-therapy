'use client';

import { useState } from 'react';
import { Heart, Users, Zap } from 'lucide-react';

interface TellFriendFormProps {
  onSubmit?: (email: string, message: string) => void;
}

export default function TellFriendForm({ onSubmit }: TellFriendFormProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, message);
    }
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 mb-2">✓</div>
        <p className="text-green-800 font-medium">Thanks for thinking of your friend!</p>
        <p className="text-green-700 text-sm mt-1">
          Your message has been noted. The most powerful referral is a personal conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="friend-email" className="block text-sm font-medium text-slate-700 mb-2">
          Your Friend's Email (Optional)
        </label>
        <input
          id="friend-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="friend@example.com"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
        <p className="text-xs text-slate-500 mt-1">
          We won't email them without your permission. This is just for your reference.
        </p>
      </div>

      <div>
        <label htmlFor="personal-message" className="block text-sm font-medium text-slate-700 mb-2">
          Personal Message (Optional)
        </label>
        <textarea
          id="personal-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What helped you most? (e.g., 'She really helped me work through postpartum anxiety...')"
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 resize-none"
        />
        <p className="text-xs text-slate-500 mt-1">
          Keep it personal. The best referrals come from genuine experiences.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Save This Referral
      </button>
    </form>
  );
}
