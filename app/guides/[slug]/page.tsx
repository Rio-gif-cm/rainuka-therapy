import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Helper to read MDX files
function getGuideData(slug: string) {
  const guidesDir = path.join(process.cwd(), 'app/guides')
  const filePath = path.join(guidesDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    frontmatter: data as any,
    content,
  }
}

// Generate static params for all guides
export async function generateStaticParams() {
  const guidesDir = path.join(process.cwd(), 'app/guides')
  const files = fs.readdirSync(guidesDir).filter(f => f.endsWith('.mdx'))
  
  return files.map(file => ({
    slug: file.replace('.mdx', ''),
  }))
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideData(params.slug)
  
  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    keywords: guide.frontmatter.keywords,
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideData(params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        <article className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-12 border-b border-burgundy-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">
              {guide.frontmatter.title}
            </h1>
            <p className="text-xl text-warm-gray-600 mb-6">
              {guide.frontmatter.description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-warm-gray-500">
              <span>By {guide.frontmatter.author}</span>
              <span>{guide.frontmatter.date}</span>
              <span>{guide.frontmatter.readTime} read</span>
            </div>
          </header>

          {/* Content: MDX will be rendered by next/mdx when integrated */}
          <div className="prose prose-lg max-w-none prose-sage">
            {/* Content will be rendered here when MDX integration is set up */}
            {guide.content && (
              <div dangerouslySetInnerHTML={{ __html: guide.content }} />
            )}
          </div>

          {/* CTA */}
          <aside className="mt-16 pt-12 border-t border-burgundy-200">
            <div className="card card-tinted card-static">
              <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
                Ready to start your therapy journey?
              </h3>
              <p className="text-warm-gray-600 mb-6">
                If this resonates with you, I&apos;d love to talk about how we can work together.
              </p>
              <a
                href="/booking"
                className="inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors"
              >
                Schedule a consultation
              </a>
            </div>
          </aside>
        </article>
      </main>

      <Footer />
    </div>
  )
}
