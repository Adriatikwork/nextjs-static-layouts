export interface ProcessStep {
  title: string
  description: string
}

export interface DurationInfo {
  session: string
  results: string
  recovery: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServiceImages {
  main: string
  gallery: string[]
}

// Translatable content only (no slug, category, or images)
export interface ServiceTranslations {
  title: string
  description: string
  features: string[]
  whatIs: string
  benefits: string[]
  process: ProcessStep[]
  aftercare: string[]
  duration: DurationInfo
  suitableFor: string[]
  notSuitableFor?: string[]
  faqs: FAQ[]
}

// Complete service data (config + translations)
export interface ServiceDetailData extends ServiceTranslations {
  slug: string
  category: 'dental' | 'aesthetic'
  images: ServiceImages
}

export interface ServiceContent {
  it: ServiceTranslations
  en: ServiceTranslations
}
