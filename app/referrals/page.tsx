import { Metadata } from 'next';
import ReferralCode from '@/components/ReferralCode';
import TellFriendForm from '@/components/TellFriendForm';
import { Heart, Users, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Share Therapy Support | Rainuka Oberoi',
  description:
    'Know someone who might benefit from therapy? Share your referral link—no strings attached, just helping friends find the right support.',
  openGraph: {
    title: 'Help a Friend Find Therapy Support',
    description:
      'Friend recommendations are the most trusted way people find therapists. Share your experience with someone you care about.',
  },
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
            <Heart className="text-slate-700" size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Help a Friend Find Support
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            The best way people find a therapist? A recommendation from someone they trust.
          </p>
          <p className="text-slate-600">
            If therapy has helped you, sharing your experience could be exactly what a friend needs to take that first step.
          </p>
        </div>

        {/* Why Referrals Work Section */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users size={18} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Trusted Source</h3>
            </div>
            <p className="text-sm text-slate-600">
              Friend recommendations carry 92% more trust than ads or marketing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Removes Barriers</h3>
            </div>
            <p className="text-sm text-slate-600">
              Many people want therapy but don't know where to start. Your recommendation helps.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield size={18} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Privacy First</h3>
            </div>
            <p className="text-sm text-slate-600">
              No tracking, no public leaderboards. Just you sharing privately with people you care about.
            </p>
          </div>
        </div>

        {/* Two-Column Layout: Referral Code + Tell Friend */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {/* Left: Referral Code */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Step 1: Copy Your Link</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Click the button below to copy your unique referral link. You can share it however feels natural—text, email, LinkedIn, or in conversation.
            </p>
            <ReferralCode code="FRIEND-RAINUKA-" />
          </div>

          {/* Right: Tell Friend Form */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Step 2: Tell Me About Them</h2>
            <p className="text-slate-600 mb-4 text-sm">
              No pressure—this is optional. If you want to share a friend's email or your personal story, it helps me understand how I can best support the people you care about.
            </p>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <TellFriendForm />
            </div>
          </div>
        </div>

        {/* FAQ / Why This Matters */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">Why Referrals Matter</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">For Your Friend:</h3>
              <p className="text-slate-600 text-sm">
                Seeking therapy for the first time can feel scary and overwhelming. Hearing from someone who's been through it—and benefited—makes all the difference. It removes shame, reduces uncertainty, and shows them that therapy is an act of self-care, not a sign of weakness.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">For Me:</h3>
              <p className="text-slate-600 text-sm">
                I build my practice on genuine relationships and trust. When someone comes to me because a friend recommended me, I know I'm working with someone who's already comfortable with the idea of therapy. That foundation of trust helps us do better work together.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">No Strings Attached:</h3>
              <p className="text-slate-600 text-sm">
                There are no incentives, discounts, or rewards for referrals. Just the satisfaction of helping someone you care about find professional support. Your friend's privacy is protected—I'll never know who referred them unless you tell me directly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Share?</h2>
          <p className="text-slate-100 mb-6">
            Your link is ready to go. Share it with someone who might benefit, or simply mention Rainuka in conversation. That's it.
          </p>
          <p className="text-sm text-slate-300">
            Questions? Reply to any email you've received from me, or use the contact form. I'm here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
