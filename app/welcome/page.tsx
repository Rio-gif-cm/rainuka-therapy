import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WelcomePageProps {
  searchParams: Promise<{ ref?: string }>;
}

export const metadata: Metadata = {
  title: 'Welcome | Rainuka Oberoi, Therapist',
  description: 'Start your therapy journey with Rainuka Oberoi. Specializing in perinatal mental health, ADHD, and career transitions.',
};

export default async function WelcomePage({ searchParams }: WelcomePageProps) {
  const params = await searchParams;
  const hasReferral = params.ref !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          {hasReferral && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm font-medium">
                💙 Thank you for being recommended. Someone cares about your wellbeing.
              </p>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            You're in the Right Place
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-2">
            Therapy is an act of self-care, not a sign of weakness.
          </p>
          <p className="text-slate-600">
            Whether you're navigating postpartum anxiety, ADHD overwhelm, career burnout, or something else entirely—I'm here to help you find clarity and peace.
          </p>
        </div>

        {/* Specializations Quick Links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Link
            href="/perinatal"
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-slate-900 mb-2">Perinatal Mental Health</h3>
            <p className="text-sm text-slate-600 mb-4">
              Postpartum anxiety, depression, identity shifts, and the complexity of motherhood.
            </p>
            <span className="text-slate-700 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            href="/adhd"
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-slate-900 mb-2">ADHD & Neurodiversity</h3>
            <p className="text-sm text-slate-600 mb-4">
              Late-diagnosis ADHD, shame, perfectionism, and building a life that fits you.
            </p>
            <span className="text-slate-700 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            href="/career"
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-slate-900 mb-2">Career Transitions</h3>
            <p className="text-sm text-slate-600 mb-4">
              Burnout recovery, identity loss, perfectionism, and finding work that matters.
            </p>
            <span className="text-slate-700 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* How It Works */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How We Start</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Free Consultation</h3>
                <p className="text-slate-600 text-sm">
                  We start with a 15-minute phone call to see if we're a good fit. No commitment, no pressure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Full Intake Session</h3>
                <p className="text-slate-600 text-sm">
                  We dive deeper into your story, goals, and what's been on your mind. This is where the real work begins.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Ongoing Support</h3>
                <p className="text-slate-600 text-sm">
                  Therapy is a journey, not a destination. We work together at your pace, building skills and insight along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <Link
            href="/booking"
            className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 rounded-lg text-center transition-colors"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            href="/about"
            className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-4 rounded-lg text-center transition-colors border border-slate-300"
          >
            Learn About Me
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
          <p className="text-slate-600 text-sm mb-3">
            <strong>Privacy & Confidentiality:</strong> Everything you share is protected under therapist-client confidentiality. Your privacy is sacred.
          </p>
          <p className="text-slate-600 text-sm">
            <strong>Accessibility:</strong> I offer sliding scale rates and work with most insurance plans. Financial barriers should never prevent you from getting help.
          </p>
        </div>
      </div>
    </div>
  );
}
