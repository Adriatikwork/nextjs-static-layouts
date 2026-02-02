import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/content/services'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable for domain flexibility
  // Update NEXT_PUBLIC_SITE_URL when connecting custom domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dottoressairenebeconi.it'

  // Generate service URLs from service slugs
  const serviceSlugs = getAllServiceSlugs()

  const serviceUrls = serviceSlugs.map(slug => ({
    url: `${baseUrl}/servizi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/chi-sono`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/galleria`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
