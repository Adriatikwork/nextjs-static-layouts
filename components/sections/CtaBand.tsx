"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'
import { Calendar, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function CtaBand() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="prenota" className="teal-gradient text-white section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <Image 
          src={assetPath("/logo.svg")} 
          alt="" 
          width={250} 
          height={250}
          className="animate-float"
        />
      </div>
      
      <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none hidden lg:block">
        <Image 
          src={assetPath("/logo.svg")} 
          alt="" 
          width={200} 
          height={200}
          className="animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full border-2 border-brand-gold/20 opacity-30 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border-2 border-brand-gold/20 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up tracking-wider" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}>
            {t.cta.title}
          </h2>
          
          {/* Gold Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl opacity-95 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t.cta.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('contatti')}
              className="bg-white text-brand-teal hover:bg-cream font-semibold shadow-elegant-lg border-2 border-white hover:border-brand-gold transition-all duration-300 min-w-[200px]"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t.cta.primary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contatti')}
              className="border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 min-w-[200px]"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.cta.secondary}
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-sm opacity-80 mt-8 animate-fade-in-up stagger-3" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>
            {t.cta.note}
          </p>
        </div>
      </div>
    </section>
  )
}
