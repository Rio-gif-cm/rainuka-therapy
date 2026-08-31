import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="section-padding bg-cream-50">
          <div className="container-base max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-warm-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-warm-gray max-w-none">
              <p className="text-warm-gray-600 mb-6">
                <strong>Last Updated:</strong> August 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  Rainuka Oberoi, LCSW ("I" or "Rainuka") is committed to protecting your privacy. 
                  This Privacy Policy explains how I collect, use, and protect your personal information 
                  when you visit this website or use my services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  2. Information I Collect
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  When you use this website or contact me, I may collect:
                </p>
                <ul className="list-disc list-inside text-warm-gray-600 space-y-2 mb-4">
                  <li>Name, email address, phone number</li>
                  <li>Information about your primary concern or reason for contacting me</li>
                  <li>Your preferred times for sessions</li>
                  <li>Information collected automatically (IP address, browser type, pages visited)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  3. How I Use Your Information
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  I use your information to:
                </p>
                <ul className="list-disc list-inside text-warm-gray-600 space-y-2 mb-4">
                  <li>Respond to your inquiries</li>
                  <li>Schedule and confirm sessions</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Improve the website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  4. HIPAA Compliance
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  As a licensed clinical social worker, I am required to comply with HIPAA 
                  (Health Insurance Portability and Accountability Act). Your health information is protected 
                  and kept confidential. I will never share your information with third parties without your 
                  explicit consent, except as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  I use industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-warm-gray-600 space-y-2 mb-4">
                  <li>Encryption of data in transit (HTTPS)</li>
                  <li>Secure password protection</li>
                  <li>Regular security audits</li>
                  <li>Limited access to personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  6. Cookies & Tracking
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  This website may use cookies for analytics and user experience. These cookies do not 
                  collect personal health information. You can disable cookies in your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  7. Your Rights
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-warm-gray-600 space-y-2 mb-4">
                  <li>Access your personal information</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                  8. Contact Me
                </h2>
                <p className="text-warm-gray-600">
                  If you have questions about this Privacy Policy or want to exercise your rights, 
                  contact me at contact@rainukatherapy.com or (555) 123-4567.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
