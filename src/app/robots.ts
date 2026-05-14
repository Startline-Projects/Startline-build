import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/atlaw-intake1/', '/atlaw-intake2/', '/xeyai/', '/xeyai.html'],
    },
    sitemap: 'https://startline.build/sitemap.xml',
  }
}
