import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome | Your Therapy Journey Starts Here Now',
  description: 'Start your therapy journey. Get trauma-informed support for perinatal anxiety, ADHD, career transitions. Schedule consultation today.',
};

export default async function WelcomePage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const params = await searchParams;
  const hasReferral = params.ref !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-gray-50 via-white to-warm-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-20">
        {hasReferral && (
          <div className="bg-dusk-50 border border-dusk-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-dusk-700 font-medium">Thank you for being recommended.</p>
          </div>
        )}

        <h1 className="text-4xl font-bold text-warm-gray-900 text-center mb-4">You're in the Right Place</h1>
        <p className="text-lg text-warm-gray-600 text-center mb-12">Therapy is self-care.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Link href="/perinatal" className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">Perinatal</h3>
            <p className="text-sm text-warm-gray-600">Postpartum support</p>
          </Link>
          <Link href="/adhd" className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">ADHD</h3>
            <p className="text-sm text-warm-gray-600">Neurodiversity support</p>
          </Link>
          <Link href="/career" className="card card-compact card-static">
            <h3 className="font-semibold text-warm-gray-900 mb-2">Career</h3>
            <p className="text-sm text-warm-gray-600">Transitions & growth</p>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/booking" className="bg-warm-gray-700 text-white font-semibold py-4 rounded-lg text-center">
            Book Now
          </Link>
          <Link href="/about" className="bg-warm-gray-100 text-warm-gray-900 font-semibold py-4 rounded-lg text-center border border-warm-gray-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
