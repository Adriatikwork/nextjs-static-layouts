"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

export function Gallery() {
  const { t } = useLanguage()

  const galleryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <section id="galleria" className="bg-white section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Classical Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}>
              {t.gallery.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-brand-dark-text mt-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Gallery Grid - Elegant Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-brand-teal/5 via-brand-cream/50 to-brand-gold/5 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 cursor-pointer animate-fade-in-up stagger-${(index % 3) + 1} border border-brand-gold/10 hover:border-brand-gold/30 group`}
              >
                {/* Placeholder content with elegant styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* Logo as placeholder */}
                    <div className="mb-3 opacity-20 group-hover:opacity-30 transition-opacity">
                      <Image 
                        src="/logo.svg" 
                        alt="" 
                        width={80} 
                        height={80}
                      />
                    </div>
                    <p className="text-sm text-brand-gold/60 tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Gallery {item.id}
                    </p>
                  </div>
                </div>
                
                {/* Elegant hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-gold/0 group-hover:from-brand-teal/10 group-hover:to-brand-gold/10 transition-all duration-500"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
