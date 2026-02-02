/**
 * Static service configuration
 * Contains language-independent data: slugs, categories, and images
 */

import { assetPath } from '@/lib/utils'

export type ServiceCategory = 'dental' | 'aesthetic'

export interface ServiceImages {
  main: string
  gallery: string[]
}

export interface ServiceConfig {
  slug: string
  category: ServiceCategory
  images: ServiceImages
}

export const servicesConfig: Record<string, ServiceConfig> = {
  'cure-conservative': {
    slug: 'cure-conservative',
    category: 'dental',
    images: {
      main: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
        'https://images.unsplash.com/photo-1609840112855-9ab5f01f28c7?w=1200&q=80',
        'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80'
      ]
    }
  },
  'endodonzia': {
    slug: 'endodonzia',
    category: 'dental',
    images: {
      main: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
        'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80',
        'https://images.unsplash.com/photo-1606811956291-c6a86d6d2ee0?w=1200&q=80'
      ]
    }
  },
  'chirurgia-orale': {
    slug: 'chirurgia-orale',
    category: 'dental',
    images: {
      main: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
        'https://images.unsplash.com/photo-1598531228433-d9f0bdc0ce4d?w=1200&q=80',
        'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80'
      ]
    }
  },
  'igiene-prevenzione': {
    slug: 'igiene-prevenzione',
    category: 'dental',
    images: {
      main: 'https://images.unsplash.com/photo-1676897288522-e8a081e71430?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
        'https://images.unsplash.com/photo-1606811956291-c6a86d6d2ee0?w=1200&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80'
      ]
    }
  },
  'filler-dermici': {
    slug: 'filler-dermici',
    category: 'aesthetic',
    images: {
      main: assetPath('/services/dermal_fillers/1.png'),
      gallery: [
        assetPath('/services/dermal_fillers/2.png'),
        assetPath('/services/dermal_fillers/3.png'),
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80'
      ]
    }
  },
  'tossina-botulinica': {
    slug: 'tossina-botulinica',
    category: 'aesthetic',
    images: {
      main: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80',
      gallery: [
        assetPath('/services/botulinum_toxin/1.png'),
        assetPath('/services/botulinum_toxin/2.png'),
        assetPath('/services/botulinum_toxin/3.png')
      ]
    }
  },
  'biorivitalizzazione': {
    slug: 'biorivitalizzazione',
    category: 'aesthetic',
    images: {
      main: assetPath('/services/biorevitalization/2.png'),
      gallery: [
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80',
        assetPath('/services/biorevitalization/1.png'),
        assetPath('/services/biorevitalization/3.png')
      ]
    }
  }
}

// Get all service slugs
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesConfig)
}

// Get service config by slug
export function getServiceConfig(slug: string): ServiceConfig | undefined {
  return servicesConfig[slug]
}
