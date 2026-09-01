'use client'

import Link from 'next/link'
import { colors, styles } from '@/app/styles'
import VerificationBadge from '@/components/VerificationBadge'

export default function ProviderDirectoriesPage() {
  const directories = [
    {
      name: 'Psychology Today',
      description:
        'The largest therapist directory in the world. Psychology Today profiles are indexed by search engines and trusted by millions of therapy seekers.',
      verified: true,
      traffic: 'Highest organic reach',
      icon: '🔍',
      url: 'https://www.psychologytoday.com/',
      cost: '$29.95/month',
      benefits: ['Largest visibility', 'SEO advantage', 'Integrated messaging', 'Insurance filtering'],
    },
    {
      name: 'TherapyDen',
      description:
        'LGBTQ+-focused directory with refined search filters. Therapists report strong client referrals from engaged users seeking identity-inclusive care.',
      verified: true,
      traffic: 'High engagement',
      icon: '🌈',
      url: 'https://www.therapyden.com/',
      cost: 'Varies by market',
      benefits: ['Identity-inclusive filtering', 'Strong LGBTQ+ audience', 'Active community', 'Quality over quantity'],
    },
    {
      name: 'Zocdoc',
      description:
        'Real-time appointment booking and verified reviews. Popular for finding medication providers and therapists with immediate availability.',
      verified: false,
      traffic: 'Growing referrals',
      icon: '⭐',
      url: 'https://www.zocdoc.com/',
      cost: 'Variable',
      benefits: ['Verified reviews', 'Real-time booking', 'Patient ratings', 'Mobile-first'],
    },
    {
      name: 'GoodTherapy',
      description:
        'Curated directory with strong organic search presence. Therapists maintain profiles with CE course offerings and practice management tools.',
      verified: false,
      traffic: 'Consistent referrals',
      icon: '✨',
      url: 'https://www.goodtherapy.org/',
      cost: '$49.95/month',
      benefits: ['Organic visibility', 'CE courses available', 'Practice tools', 'Affordable'],
    },
    {
      name: 'Insurance Provider Networks',
      description:
        'In-network status on major plans (Blue Cross, Aetna, Cigna, Anthem, etc.) drives 10-15% of qualified referrals. Clients actively check insurance acceptance before booking.',
      verified: false,
      traffic: 'Qualified leads',
      icon: '💳',
      url: '#insurance-networks',
      cost: 'Varies by plan',
      benefits: ['Qualified patients', 'Higher conversion', 'Reduced objections', 'Recurring appointments'],
    },
  ]

  const insuranceCompanies = [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'Anthem',
    'UnitedHealthcare',
    'Humana',
    'Medicaid (state programs)',
  ]

  const trustedBadges = [
    { label: 'Licensed LCSW', verified: true, icon: '🎓' },
    { label: 'Psychology Today Verified', verified: true, icon: '✓' },
    { label: 'Trauma-Informed Care', verified: true, icon: '🛡️' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.warmGray[50] }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: colors.sage[50],
          paddingTop: '4rem',
          paddingBottom: '3rem',
          borderBottom: `3px solid ${colors.sage[200]}`,
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          <h1 style={{ ...styles.h1, marginBottom: '1rem', color: colors.sage[900] }}>
            Where to Find Us
          </h1>
          <p
            style={{
              ...styles.p,
              fontSize: '1.1rem',
              color: colors.sage[800],
              marginBottom: 0,
            }}
          >
            Rainuka is listed on multiple trusted directories and insurance networks to make it easy
            for you to find and connect with the right therapist. Each platform verifies credentials
            and ensures quality care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div
        style={{
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Verification Badges at Top */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, marginBottom: '1.5rem', color: colors.warmGray[900] }}>
            Verified Credentials
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {trustedBadges.map((badge, idx) => (
              <VerificationBadge
                key={idx}
                platform={badge.label}
                verified={badge.verified}
                icon={badge.icon}
                label={badge.label}
              />
            ))}
          </div>
        </section>

        {/* Directory Listings */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, marginBottom: '2rem', color: colors.warmGray[900] }}>
            Find Your Next Appointment
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {directories.map((dir, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  border: `2px solid ${colors.warmGray[200]}`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 16px rgba(0,0,0,0.1)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = colors.sage[300]
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = colors.warmGray[200]
                }}
              >
                {/* Icon and Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{dir.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...styles.h3, margin: 0, color: colors.warmGray[900] }}>
                      {dir.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: colors.sage[600],
                        fontWeight: '600',
                        margin: '0.25rem 0 0 0',
                      }}
                    >
                      {dir.traffic}
                    </p>
                  </div>
                  {dir.verified && (
                    <VerificationBadge platform="Verified" verified={true} label="✓" />
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    ...styles.p,
                    color: colors.warmGray[700],
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                  }}
                >
                  {dir.description}
                </p>

                {/* Benefits */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: colors.warmGray[600],
                      marginBottom: '0.5rem',
                    }}
                  >
                    Key Benefits:
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    {dir.benefits.map((benefit, bidx) => (
                      <li
                        key={bidx}
                        style={{
                          fontSize: '0.85rem',
                          color: colors.warmGray[700],
                          paddingLeft: '1.5rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: colors.sage[600],
                          }}
                        >
                          •
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost and CTA */}
                <div
                  style={{
                    borderTop: `1px solid ${colors.warmGray[200]}`,
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ ...styles.p, fontSize: '0.85rem', margin: 0, color: colors.warmGray[600] }}>
                    {dir.cost}
                  </p>
                  <a
                    href={dir.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: colors.sage[600],
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      transition: 'background-color 0.2s ease',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[700]
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[600]
                    }}
                  >
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance Networks Section */}
        <section id="insurance-networks" style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, marginBottom: '1.5rem', color: colors.warmGray[900] }}>
            Accepted Insurance Networks
          </h2>
          <div
            style={{
              backgroundColor: 'white',
              border: `2px solid ${colors.warmGray[200]}`,
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <p
              style={{
                ...styles.p,
                color: colors.warmGray[700],
                marginBottom: '1.5rem',
              }}
            >
              In-network insurance status ensures clients have better coverage and predictable costs.
              Being listed on insurance provider networks drives qualified referrals from patients
              actively checking whether their insurance covers therapy.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
              }}
            >
              {insuranceCompanies.map((company, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: colors.sage[50],
                    border: `1px solid ${colors.sage[200]}`,
                    borderRadius: '8px',
                    padding: '1rem',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    color: colors.sage[900],
                    fontWeight: '500',
                  }}
                >
                  {company}
                </div>
              ))}
            </div>

            <p
              style={{
                ...styles.p,
                color: colors.warmGray[600],
                fontSize: '0.85rem',
                marginTop: '1.5rem',
                marginBottom: 0,
                fontStyle: 'italic',
              }}
            >
              ✓ Verification status varies by plan and location. Contact your insurance provider to
              verify in-network status for your specific plan.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...styles.h2, marginBottom: '1.5rem', color: colors.warmGray[900] }}>
            Why Directory Listings Matter
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            <div
              style={{
                backgroundColor: colors.warmGray[100],
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: `4px solid ${colors.sage[600]}`,
              }}
            >
              <h3 style={{ ...styles.h3, marginBottom: '0.5rem', color: colors.warmGray[900] }}>
                10-20% of Bookings
              </h3>
              <p style={{ ...styles.p, color: colors.warmGray[700], margin: 0 }}>
                Directory listings and insurance networks drive a significant portion of qualified
                therapy referrals, especially for new clients.
              </p>
            </div>
            <div
              style={{
                backgroundColor: colors.warmGray[100],
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: `4px solid ${colors.sage[600]}`,
              }}
            >
              <h3 style={{ ...styles.h3, marginBottom: '0.5rem', color: colors.warmGray[900] }}>
                Trust Verification
              </h3>
              <p style={{ ...styles.p, color: colors.warmGray[700], margin: 0 }}>
                Third-party directory verification creates credibility signals that anxious or
                first-time clients need to make their decision to reach out.
              </p>
            </div>
            <div
              style={{
                backgroundColor: colors.warmGray[100],
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: `4px solid ${colors.sage[600]}`,
              }}
            >
              <h3 style={{ ...styles.h3, marginBottom: '0.5rem', color: colors.warmGray[900] }}>
                Search Accessibility
              </h3>
              <p style={{ ...styles.p, color: colors.warmGray[700], margin: 0 }}>
                Being discoverable on Psychology Today, insurance networks, and other platforms
                ensures clients searching "therapist in [location]" can find you.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            backgroundColor: colors.sage[50],
            border: `2px solid ${colors.sage[200]}`,
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ ...styles.h2, marginBottom: '1rem', color: colors.sage[900] }}>
            Ready to Start?
          </h2>
          <p
            style={{
              ...styles.p,
              color: colors.sage[800],
              marginBottom: '1.5rem',
            }}
          >
            You can find and connect with Rainuka through any of these platforms, or book directly
            on this website.
          </p>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              backgroundColor: colors.sage[600],
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'background-color 0.2s ease',
              marginRight: '1rem',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[700]
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[600]
            }}
          >
            Book Appointment
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: colors.sage[700],
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              border: `2px solid ${colors.sage[600]}`,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[50]
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
