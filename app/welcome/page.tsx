import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome | Rainuka Oberoi',
  description: 'Start your therapy journey. Support when you need it.',
};

export default async function WelcomePage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const params = await searchParams;
  const hasReferral = params.ref !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-2xl mx-auto px-4 py-20">
        {hasReferral && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-blue-800 font-medium">Thank you for being recommended.</p>
          </div>
        )}

        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">You're in the Right Place</h1>
        <p className="text-lg text-slate-600 text-center mb-12">Therapy is self-care.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Link href="/perinatal" className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Perinatal</h3>
            <p className="text-sm text-slate-600">Postpartum support</p>
          </Link>
          <Link href="/adhd" className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">ADHD</h3>
            <p className="text-sm text-slate-600">Neurodiversity support</p>
          </Link>
          <Link href="/career" className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Career</h3>
            <p className="text-sm text-slate-600">Transitions & growth</p>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/booking" className="bg-slate-700 text-white font-semibold py-4 rounded-lg text-center">
            Book Now
          </Link>
          <Link href="/about" className="bg-slate-100 text-slate-900 font-semibold py-4 rounded-lg text-center border border-slate-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
