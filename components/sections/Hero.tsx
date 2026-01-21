"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative teal-gradient text-white section-padding pt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {t.hero.name}
              </h1>
              <div className="gold-divider mx-0"></div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-light opacity-90">
              {t.hero.subtitle}
            </h2>
            
            <p className="text-lg opacity-80 max-w-xl">
              {t.hero.tagline}
            </p>

            <div className="flex items-center gap-2 text-sm opacity-75">
              <MapPin className="w-4 h-4" />
              <span>{t.hero.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('prenota')}
                className="bg-white text-teal hover:bg-cream font-semibold"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contatti')}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative gold circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-gold opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border-4 border-gold opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Portrait Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-portrait.jpg"
                  alt={t.hero.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F5F1E8"/>
        </svg>
      </div>
    </section>
  )
}
