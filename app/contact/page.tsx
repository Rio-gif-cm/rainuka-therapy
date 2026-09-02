import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Rainuka | Get in Touch',
  description: 'Contact Wonderloud Therapy to schedule a free 15-minute consultation. Questions about therapy? Reach out—I respond within 24 hours.',
  keywords: 'contact therapy, schedule consultation, therapy contact, get in touch, book therapy',
  openGraph: {
    title: 'Contact Rainuka | Get in Touch',
    description: 'Contact Wonderloud Therapy to schedule a free 15-minute consultation. I respond within 24 hours.',
    type: 'website',
    url: 'https://wonderloud-therapy.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-grow" role="main">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-burgundy-50">
          <div className="container-base text-center">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Questions about therapy? Ready to book? Just want to say hello?
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Phone</h3>
                    <a href="tel:+1-555-123-4567" className="text-burgundy-400 hover:text-burgundy-500 font-semibold">
                      (555) 123-4567
                    </a>
                    <p className="text-sm text-warm-gray-600 mt-1">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@rainukatherapy.com" className="text-burgundy-400 hover:text-burgundy-500 font-semibold">
                      contact@rainukatherapy.com
                    </a>
                    <p className="text-sm text-warm-gray-600 mt-1">
                      I respond within 24 hours
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Location</h3>
                    <p className="text-warm-gray-600">
                      Telehealth Only
                      <br />
                      Serving [State] & 27 other states
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/booking" className="text-burgundy-400 hover:text-burgundy-500">
                          Schedule Your Free Call →
                        </a>
                      </li>
                      <li>
                        <a href="/faq" className="text-burgundy-400 hover:text-burgundy-500">
                          View FAQ →
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-burgundy-400 hover:text-burgundy-500">
                          Learn About Me →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8">
                  Send a Message
                </h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label block font-semibold text-warm-gray-900 mb-2">
                      What should I call you? *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane"
                      className="form-input w-full"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label block font-semibold text-warm-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="form-input w-full"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label block font-semibold text-warm-gray-900 mb-2">
                      How can I help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me what's on your mind..."
                      rows={5}
                      className="form-input resize-none w-full"
                      required
                      aria-required="true"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>

                  <p className="text-xs text-warm-gray-500 text-center">
                    I'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-burgundy-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              How to Reach Me
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Book Online</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Pick a time that works for you.
                </p>
                <a href="/booking" className="text-burgundy-400 font-semibold text-sm hover:text-burgundy-500">
                  Book Now →
                </a>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Email</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Send me a message anytime.
                </p>
                <a href="mailto:contact@rainukatherapy.com" className="text-burgundy-400 font-semibold text-sm hover:text-burgundy-500">
                  Send Email →
                </a>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">☎️</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Call</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Give me a call. I'm here Mon-Fri 9am-5pm EST.
                </p>
                <a href="tel:+1-555-123-4567" className="text-burgundy-400 font-semibold text-sm hover:text-burgundy-500">
                  Call Now →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="section-padding bg-white">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-8 text-center">
              Availability
            </h2>

            <div className="space-y-4">
              <div className="card card-tinted card-compact card-static flex justify-between items-center">
                <span className="font-semibold text-warm-gray-900">Monday - Friday</span>
                <span className="text-warm-gray-600">9:00 AM - 5:00 PM EST</span>
              </div>

              <div className="card card-tinted card-compact card-static flex justify-between items-center">
                <span className="font-semibold text-warm-gray-900">Tuesday - Thursday Evenings</span>
                <span className="text-warm-gray-600">6:00 PM - 8:00 PM EST</span>
              </div>

              <div className="card card-tinted card-compact card-static flex justify-between items-center">
                <span className="font-semibold text-warm-gray-900">Saturday</span>
                <span className="text-warm-gray-600">By appointment</span>
              </div>

              <p className="text-sm text-warm-gray-600 mt-6">
                Heads up: I might be slower around holidays or if something unexpected comes up.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
