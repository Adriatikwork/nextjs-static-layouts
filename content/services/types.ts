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

export interface ServiceDetailData {
  slug: string
  title: string
  description: string
  features: string[]
  category: 'dental' | 'aesthetic'
  whatIs: string
  benefits: string[]
  process: ProcessStep[]
  aftercare: string[]
  duration: DurationInfo
  suitableFor: string[]
  notSuitableFor?: string[]
  faqs: FAQ[]
  images: ServiceImages
}

export interface ServiceContent {
  it: ServiceDetailData
  en: ServiceDetailData
}
