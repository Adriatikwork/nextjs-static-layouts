import { content as fillerDermiciContent } from './filler-dermici'
import { content as tossinaBotulinicaContent } from './tossina-botulinica'
import { content as biorivitalizzazioneContent } from './biorivitalizzazione'
import { content as cureConservativeContent } from './cure-conservative'
import { content as endodonticsContent } from './endodonzia'
import { content as chirurgiaOraleContent } from './chirurgia-orale'
import { content as igienePreventioneContent } from './igiene-prevenzione'
import { ServiceContent } from './types'

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

// Get service content by slug and language
export function getServiceContent(slug: string, language: Language) {
  const serviceContent = serviceContentMap[slug]
  if (!serviceContent) {
    throw new Error(`Service content not found for slug: ${slug}`)
  }
  return serviceContent[language]
}

// Get all service slugs
export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceContentMap)
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
