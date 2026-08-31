import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50">
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
                    <a href="tel:+1-555-123-4567" className="text-sage-400 hover:text-sage-500 font-semibold">
                      (555) 123-4567
                    </a>
                    <p className="text-sm text-warm-gray-600 mt-1">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@rainukatherapy.com" className="text-sage-400 hover:text-sage-500 font-semibold">
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
                        <a href="/booking" className="text-sage-400 hover:text-sage-500">
                          Schedule Your Free Call →
                        </a>
                      </li>
                      <li>
                        <a href="/faq" className="text-sage-400 hover:text-sage-500">
                          View FAQ →
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-sage-400 hover:text-sage-500">
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
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me what's on your mind..."
                      rows={5}
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>

                  <p className="text-xs text-warm-gray-500 text-center">
                    I'll respond within 24 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-sage-50">
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-12 text-center">
              How to Reach Me
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Book Online</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Schedule your free consultation directly in your preferred time.
                </p>
                <a href="/booking" className="text-sage-400 font-semibold text-sm hover:text-sage-500">
                  Book Now →
                </a>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Email</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Prefer written communication? Send me an email.
                </p>
                <a href="mailto:contact@rainukatherapy.com" className="text-sage-400 font-semibold text-sm hover:text-sage-500">
                  Send Email →
                </a>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">☎️</div>
                <h3 className="font-bold text-warm-gray-900 mb-2">Call</h3>
                <p className="text-sm text-warm-gray-600 mb-4">
                  Prefer to talk? Give me a call during business hours.
                </p>
                <a href="tel:+1-555-123-4567" className="text-sage-400 font-semibold text-sm hover:text-sage-500">
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
              <div className="flex justify-between items-center p-4 bg-cream-50 rounded-lg">
                <span className="font-semibold text-warm-gray-900">Monday - Friday</span>
                <span className="text-warm-gray-600">9:00 AM - 5:00 PM EST</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-cream-50 rounded-lg">
                <span className="font-semibold text-warm-gray-900">Tuesday - Thursday Evenings</span>
                <span className="text-warm-gray-600">6:00 PM - 8:00 PM EST</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-cream-50 rounded-lg">
                <span className="font-semibold text-warm-gray-900">Saturday</span>
                <span className="text-warm-gray-600">By appointment</span>
              </div>

              <p className="text-sm text-warm-gray-600 mt-6">
                * Response times may be longer during holidays or emergency closures
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
