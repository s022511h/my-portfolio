const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { resolve } = require('path')

const sitemap = new SitemapStream({ hostname: 'https://n15labs.co.uk' })

const pages = [
  // High priority pages (main services)
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/launch-sites', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/audit', changefreq: 'weekly', priority: 0.9 },
  
  // Portfolio and projects (regularly updated)
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  
  // About and contact
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/resume', changefreq: 'monthly', priority: 0.6 },
  
  // Legal pages (static)
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
  
  // Auth pages (low priority, noindex in robots)
  { url: '/register', changefreq: 'yearly', priority: 0.2 },
  { url: '/login', changefreq: 'yearly', priority: 0.2 }
]

// Write all pages to sitemap
pages.forEach(page => sitemap.write(page))
sitemap.end()

// Generate sitemap file
streamToPromise(sitemap).then(data => {
  const outputPath = resolve(__dirname, 'public', 'sitemap.xml')
  const writeStream = createWriteStream(outputPath)
  writeStream.write(data.toString())
  writeStream.end()
  console.log('✓ Sitemap generated successfully at /public/sitemap.xml')
  console.log(`✓ Total pages: ${pages.length}`)
}).catch(err => {
  console.error('Error generating sitemap:', err)
  process.exit(1)
})