const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { resolve } = require('path')

// Single source of truth — shared with vue.config.js prerendering.
const pages = require('./routes.config')

const sitemap = new SitemapStream({ hostname: 'https://n15labs.co.uk' })
const today = new Date().toISOString().split('T')[0]

pages.forEach(page => {
  sitemap.write({
    url: page.url,
    changefreq: page.changefreq,
    priority: page.priority,
    lastmod: page.lastmod || today
  })
})

sitemap.end()

streamToPromise(sitemap)
  .then(data => {
    const outputPath = resolve(__dirname, 'public', 'sitemap.xml')
    const writeStream = createWriteStream(outputPath)
    writeStream.write(data.toString())
    writeStream.end()

    console.log(`✓ Sitemap written to public/sitemap.xml`)
    console.log(`✓ ${pages.length} pages`)
    console.log(`✓ ${pages.filter(p => p.lastmod).length} with explicit lastmod, ${pages.filter(p => !p.lastmod).length} defaulting to ${today}`)
  })
  .catch(err => {
    console.error('Sitemap generation failed:', err)
    process.exit(1)
  })