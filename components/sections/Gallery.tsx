"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Image as ImageIcon } from 'lucide-react'

export function Gallery() {
  const { t } = useLanguage()

  const galleryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <section id="galleria" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
              {t.gallery.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-teal/10 to-gold/10 shadow-md hover:shadow-xl transition-all cursor-pointer animate-fade-in-up stagger-${(index % 3) + 1}`}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-teal/30" />
                    <p className="text-sm text-gray-400">Gallery {item.id}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal/0 hover:bg-teal/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
