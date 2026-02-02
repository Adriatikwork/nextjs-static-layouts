import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { getServiceContent, getAllServiceSlugs } from '@/content/services'
import { content } from '@/content/siteCopy'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// CRITICAL: Static export requires generateStaticParams
export async function generateStaticParams() {
  const allSlugs = getAllServiceSlugs()

  return allSlugs.map(slug => ({
    slug
  }))
}

// SEO Metadata generation
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    // Default to Italian for metadata
    const service = getServiceContent(params.slug, 'it')

    return {
      title: `${service.title} | Dottoressa Irene Maria Beconi`,
      description: service.description,
      keywords: [
        service.title,
        ...service.features,
        service.category === 'dental' ? 'odontoiatria Pistoia' : 'medicina estetica Pistoia',
        'Dottoressa Irene Maria Beconi',
      ].join(', '),
      openGraph: {
        title: `${service.title} | Dottoressa Irene Maria Beconi`,
        description: service.description,
        type: 'website',
        images: [
          {
            url: service.images.main,
            width: 1200,
            height: 630,
            alt: service.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${service.title} | Dottoressa Irene Maria Beconi`,
        description: service.description,
        images: [service.images.main],
      },
    }
  } catch (error) {
    return {
      title: content.it.services.serviceNotFound,
      description: content.it.services.serviceNotFoundDescription,
    }
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Verify slug exists (will show 404 if service doesn't exist)
  const allSlugs = getAllServiceSlugs()
  if (!allSlugs.includes(params.slug)) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16 sm:pt-[72px] lg:pt-20">
      <ServiceDetail slug={params.slug} />
    </main>
  )
}
