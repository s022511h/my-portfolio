const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')

const sitemap = new SitemapStream({ hostname: 'https://n15labs.co.uk' })

const pages = [
  '/', 
  '/projects', 
  '/portfolio', 
  '/contact'
]

pages.forEach(url => sitemap.write({ url, changefreq: 'monthly', priority: 0.8 }))
sitemap.end()

streamToPromise(sitemap).then(data => {
  const writeStream = createWriteStream('./public/sitemap.xml')
  writeStream.write(data.toString())
  writeStream.end()
})
