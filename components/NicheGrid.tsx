import Link from 'next/link'

const specialties = [
  {
    slug: 'perinatal',
    title: 'Perinatal Mental Health',
    icon: '🤰',
    description: 'Pregnancy loss, infertility, postpartum anxiety—what you\'re carrying isn\'t weakness.',
    link: '/perinatal',
  },
  {
    slug: 'adhd',
    title: 'ADHD Therapy',
    icon: '🧠',
    description: 'Late ADHD diagnosis? That shame + relief = what we work with.',
    link: '/adhd',
  },
  {
    slug: 'career',
    title: 'Career Transitions',
    icon: '🚀',
    description: 'Career doubt, burnout, identity questions—transitions are hard. You don\'t have to figure it out alone.',
    link: '/career',
  },
]

export default function NicheGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-warm-gray-900 mb-4">
            What I Specialize In
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Three areas where I've developed deep expertise—and where you might find yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <Link href={specialty.link} key={specialty.slug}>
              <div className="card hover:shadow-lg cursor-pointer h-full transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{specialty.icon}</div>
                <h3 className="font-serif text-xl font-bold text-warm-gray-900 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-warm-gray-600 mb-6">
                  {specialty.description}
                </p>
                <span className="inline-block text-sage-400 font-semibold hover:text-sage-500">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
