import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'

// Helper to get all guides metadata
function getAllGuides() {
  const guidesDir = path.join(process.cwd(), 'app/guides')
  const files = fs.readdirSync(guidesDir).filter(f => f.endsWith('.mdx'))

  return files
    .map(file => {
      const filePath = path.join(guidesDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: file.replace('.mdx', ''),
        frontmatter: data as any,
        content,
      }
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

// Extract plain text from MDX content (remove MDX syntax)
function extractPlainText(content: string): string {
  return content
    .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
    .replace(/import[^;]+;/g, '') // Remove imports
    .replace(/export[^;]+;/g, '') // Remove exports
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
    .replace(/[#*_\[\]()]/g, '') // Remove markdown syntax
    .replace(/\n+/g, ' ') // Remove extra newlines
    .trim()
    .substring(0, 500) // Limit to 500 characters for RSS description
}

export async function GET() {
  const guides = getAllGuides()
  const baseUrl = 'https://rainukatherapy.com'
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Rainuka Oberoi, LCSW - Therapy Guides & Resources</title>
    <link>${baseUrl}</link>
    <description>Thoughtful, practical guides on therapy, mental health, perinatal anxiety, ADHD, career transitions, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>Rainuka Oberoi, LCSW</title>
      <link>${baseUrl}</link>
    </image>
    ${guides.map(guide => `
    <item>
      <title>${escapeXml(guide.frontmatter.title)}</title>
      <link>${baseUrl}/guides/${guide.slug}</link>
      <guid>${baseUrl}/guides/${guide.slug}</guid>
      <pubDate>${new Date(guide.frontmatter.date).toUTCString()}</pubDate>
      <description>${escapeXml(guide.frontmatter.description)}</description>
      <content:encoded><![CDATA[
        <p>${escapeXml(guide.frontmatter.description)}</p>
        <p><a href="${baseUrl}/guides/${guide.slug}">Read the full article →</a></p>
      ]]></content:encoded>
      <author>Rainuka Oberoi, LCSW</author>
      <category>Mental Health</category>
      ${guide.frontmatter.keywords ? `<category>${guide.frontmatter.keywords.split(',')[0]}</category>` : ''}
    </item>
    `).join('')}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
