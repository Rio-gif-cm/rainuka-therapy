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
  title: 'Blog Archive | Therapy Guides & Resources | Wonderloud Therapy',
  description: 'Browse all therapy guides and mental health articles. Topics include therapy basics, perinatal anxiety, ADHD, career transitions, and more.',
  keywords: 'therapy blog, mental health articles, therapy guides, resources, perinatal mental health, ADHD, career counseling',
}

export default function BlogArchivePage() {
  const guides = getAllGuides()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link href="/guides" className="text-burgundy-600 hover:text-burgundy-700 font-semibold text-sm">
              ← Back to Guides
            </Link>
          </div>
          <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-6">
            Blog Archive
          </h1>
          <p className="text-xl text-warm-gray-600 mb-4">
            All articles, organized by date
          </p>
          <p className="text-lg text-warm-gray-500">
            Explore our growing library of guides on therapy, mental health, identity, and life transitions.
          </p>
          
          {/* RSS Feed Link */}
          <div className="mt-8 pt-8 border-t border-burgundy-100">
            <Link 
              href="/feed.xml" 
              className="inline-flex items-center gap-2 text-burgundy-600 hover:text-burgundy-700 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.5 4c-.28 0-.5.22-.5.5v.01c0 .28.22.5.5.5H8V4H3.5zm0 3c-.28 0-.5.22-.5.5v.01c0 .28.22.5.5.5H8V7H3.5zm0 3c-.28 0-.5.22-.5.5v.01c0 .28.22.5.5.5H8v-1H3.5zm1.5 3H3.5c-.28 0-.5.22-.5.5v.01c0 .28.22.5.5.5H5v-1zm6.5-10H8v1h4V4zm0 3H8v1h4V7zm0 3H8v1h4v-1zm0 3h-4v1h4v-1z" />
              </svg>
              Subscribe via RSS
            </Link>
          </div>
        </section>

        {/* Blog Posts Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {guides.length > 0 ? (
            <div className="space-y-8">
              {guides.map((guide, index) => (
                <article
                  key={guide.slug}
                  className="group pb-8 border-b border-burgundy-100 last:border-b-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    {/* Date Column */}
                    <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                      <time className="text-sm font-semibold text-burgundy-600">
                        {new Date(guide.frontmatter.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* Content Column */}
                    <div className="flex-grow">
                      <Link href={`/guides/${guide.slug}`} className="block no-underline group">
                        <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3 group-hover:text-burgundy-600 transition-colors">
                          {guide.frontmatter.title}
                        </h2>

                        <p className="text-warm-gray-600 mb-4">
                          {guide.frontmatter.description}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm text-warm-gray-500">
                          <span>{guide.frontmatter.readTime} read</span>
                          <span className="text-burgundy-600 font-semibold group-hover:text-burgundy-700">
                            Read article →
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-warm-gray-600 text-lg">No articles yet. Check back soon.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 bg-burgundy-50 rounded-lg mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-4">
              Ready to dive deeper?
            </h2>
            <p className="text-warm-gray-600 mb-8">
              These guides are here for reflection and understanding. If you're ready to work through these challenges with professional support, I'd love to talk.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-burgundy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors"
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
