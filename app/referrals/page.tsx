import { Metadata } from 'next';
import ReferralCode from '@/components/ReferralCode';

export const metadata: Metadata = {
  title: 'Share Therapy Support | Rainuka Oberoi',
  description: 'Help a friend find therapy support. No strings attached.',
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-gray-50 via-white to-warm-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-warm-gray-900 mb-4">Help a Friend Find Support</h1>
          <p className="text-lg text-warm-gray-600">
            Friend recommendations are the most trusted way people find therapists.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">Trusted</h3>
            <p className="text-sm text-warm-gray-600">92% more trust than ads.</p>
          </div>
          <div className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">Removes Barriers</h3>
            <p className="text-sm text-warm-gray-600">Helps people take the first step.</p>
          </div>
          <div className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">Privacy First</h3>
            <p className="text-sm text-warm-gray-600">No tracking, no leaderboards.</p>
          </div>
        </div>

        <div className="card card-static mb-12">
          <h2 className="text-2xl font-bold text-warm-gray-900 mb-6">Copy Your Link</h2>
          <ReferralCode code="FRIEND-RAINUKA-" />
        </div>

        <div className="bg-warm-gray-50 border border-warm-gray-200 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-warm-gray-900 mb-4">Why This Matters</h2>
          <p className="text-warm-gray-600">
            Seeking therapy for the first time is scary. A friend's recommendation removes shame and builds trust. No incentives—just genuine help.
          </p>
        </div>
      </div>
    </div>
  );
}
