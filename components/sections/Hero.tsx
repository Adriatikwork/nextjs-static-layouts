"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'
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
    <section id="home" className="relative teal-gradient text-white section-padding pt-32 pb-20">
      {/* Decorative logo - large background */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <Image 
          src={assetPath("/logo.svg")}
          alt="Decorative logo" 
          width={300} 
          height={300}
          className="animate-float"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Name with elegant styling */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
                {t.hero.name.split(' ').map((word, i) => (
                  <span key={i} className="block" style={{ fontFamily: "'Cinzel', serif" }}>
                    {word}
                  </span>
                ))}
              </h1>
              <div className="gold-divider-left"></div>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-light opacity-95 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              {t.hero.subtitle}
            </h2>
            
            {/* Tagline */}
            <p className="text-base md:text-lg opacity-85 max-w-xl leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t.hero.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm opacity-80">
              <MapPin className="w-4 h-4" />
              <span style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>{t.hero.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => scrollToSection('prenota')}
                className="bg-white text-brand-teal hover:bg-cream font-semibold shadow-elegant-lg border-2 border-white hover:border-brand-gold transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contatti')}
                className="border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Decorative gold elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-brand-gold opacity-40 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border-2 border-brand-gold opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Small logo accent */}
              <div className="absolute top-0 left-0 opacity-20 z-10">
                <Image 
                  src={assetPath("/logo.svg")}
                  alt="" 
                  width={80} 
                  height={80}
                />
              </div>

              {/* Portrait Image with elegant frame */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-elegant-lg border-4 border-white/20 backdrop-blur-sm">
                <Image
                  src={assetPath("/doctor_no_background.png")}
                  alt={t.hero.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-brand-gold opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-brand-gold opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F5F1E8"/>
        </svg>
      </div>
    </section>
  )
}
