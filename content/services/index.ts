import { content as fillerDermiciContent } from './filler-dermici'
import { content as tossinaBotulinicaContent } from './tossina-botulinica'
import { content as biorivitalizzazioneContent } from './biorivitalizzazione'
import { content as cureConservativeContent } from './cure-conservative'
import { content as endodonticsContent } from './endodonzia'
import { content as chirurgiaOraleContent } from './chirurgia-orale'
import { content as igienePreventioneContent } from './igiene-prevenzione'
import { ServiceContent, ServiceDetailData } from './types'
import { servicesConfig, getAllServiceSlugs as getConfigSlugs } from './services.config'

export type Language = 'it' | 'en'

// Service slug to content mapping
const serviceContentMap: Record<string, ServiceContent> = {
  'filler-dermici': fillerDermiciContent,
  'tossina-botulinica': tossinaBotulinicaContent,
  'biorivitalizzazione': biorivitalizzazioneContent,
  'cure-conservative': cureConservativeContent,
  'endodonzia': endodonticsContent,
  'chirurgia-orale': chirurgiaOraleContent,
  'igiene-prevenzione': igienePreventioneContent,
}

// Get service content by slug and language, merging config with translations
export function getServiceContent(slug: string, language: Language): ServiceDetailData {
  const serviceContent = serviceContentMap[slug]
  const serviceConfig = servicesConfig[slug]

  if (!serviceContent || !serviceConfig) {
    throw new Error(`Service content not found for slug: ${slug}`)
  }

  // Merge config (slug, category, images) with translations
  return {
    ...serviceConfig,
    ...serviceContent[language]
  }
}

// Get all service slugs
export function getAllServiceSlugs(): string[] {
  return getConfigSlugs()
}

// Service summary data for listings (title, description, features, slug, category, main image)
export interface ServiceSummary {
  slug: string
  title: string
  description: string
  features: string[]
  category: 'dental' | 'aesthetic'
  images: {
    main: string
  }
}

// Get service summaries by category and language for listings
export function getServiceSummaries(language: Language): {
  dentalServices: ServiceSummary[]
  aestheticServices: ServiceSummary[]
} {
  const allSlugs = getAllServiceSlugs()
  const dentalServices: ServiceSummary[] = []
  const aestheticServices: ServiceSummary[] = []

  allSlugs.forEach(slug => {
    const config = servicesConfig[slug]
    const translations = serviceContentMap[slug]

    if (!config || !translations) return

    const summary: ServiceSummary = {
      slug: config.slug,
      category: config.category,
      images: {
        main: config.images.main
      },
      title: translations[language].title,
      description: translations[language].description,
      features: translations[language].features
    }

    if (config.category === 'dental') {
      dentalServices.push(summary)
    } else {
      aestheticServices.push(summary)
    }
  })

  return { dentalServices, aestheticServices }
}

// Export individual services for direct import if needed
export {
  fillerDermiciContent,
  tossinaBotulinicaContent,
  biorivitalizzazioneContent,
  cureConservativeContent,
  endodonticsContent,
  chirurgiaOraleContent,
  igienePreventioneContent,
}
