import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Helper to get all guides metadata
function getAllGuides() {
  const guidesDir = path.join(process.cwd(), 'app/guides')
  const files = fs.readdirSync(guidesDir).filter(f => f.endsWith('.mdx'))

  return files
    .map(file => {
      const filePath = path.join(guidesDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug: file.replace('.mdx', ''),
        frontmatter: data as any,
      }
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

export const metadata = {
  title: 'Therapy Guides & Resources | Rainuka Oberoi, LCSW',
  description: 'Read our curated guides on therapy, mental health, perinatal anxiety, ADHD, career transitions, and more. Practical insights to help you understand yourself better.',
  keywords: 'therapy guides, mental health resources, perinatal anxiety, ADHD, career counseling',
}

export default function GuidesPage() {
  const guides = getAllGuides()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-6">
                Guides & Resources
              </h1>
              <p className="text-xl text-warm-gray-600 mb-4">
                Thoughtful, practical articles to help you understand therapy, mental health, and yourself better.
              </p>
              <p className="text-lg text-warm-gray-500">
                Whether you're preparing for your first session, navigating perinatal anxiety, dealing with an ADHD diagnosis, or rethinking your career, these guides are here to meet you where you are.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-6 text-sm border-t border-sage-100 pt-6">
            <Link 
              href="/guides/archive" 
              className="text-sage-600 hover:text-sage-700 font-semibold flex items-center gap-2"
            >
              📚 View Archive
            </Link>
            <Link 
              href="/feed.xml" 
              className="text-sage-600 hover:text-sage-700 font-semibold flex items-center gap-2"
            >
              📡 Subscribe (RSS)
            </Link>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="group card card-elevated hover:shadow-lg transition-shadow"
              >
                <Link href={`/guides/${guide.slug}`} className="block no-underline h-full">
                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3 group-hover:text-sage-600 transition-colors">
                      {guide.frontmatter.title}
                    </h2>

                    {/* Description */}
                    <p className="text-warm-gray-600 mb-6 flex-grow">
                      {guide.frontmatter.description}
                    </p>

                    {/* Metadata Footer */}
                    <div className="flex flex-wrap gap-4 text-sm text-warm-gray-500 border-t border-sage-100 pt-4">
                      <span>{guide.frontmatter.readTime} read</span>
                      <span>{guide.frontmatter.date}</span>
                      <span className="ml-auto text-sage-600 font-semibold group-hover:text-sage-700">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {guides.length === 0 && (
            <div className="text-center py-12">
              <p className="text-warm-gray-600 text-lg">No guides yet. Check back soon.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 bg-sage-50 rounded-lg mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-4">
              Ready to go deeper?
            </h2>
            <p className="text-warm-gray-600 mb-8">
              These guides are here for reflection. If you're ready to work through these challenges with professional support, I&apos;d love to talk.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sage-700 transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
