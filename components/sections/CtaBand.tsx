"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { Calendar, MessageCircle } from 'lucide-react'

export function CtaBand() {
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
    <section id="prenota" className="teal-gradient text-white section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            {t.ctaBand.title}
          </h2>
          
          <div className="gold-divider"></div>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            {t.ctaBand.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('contatti')}
              className="bg-white text-teal hover:bg-cream font-semibold px-8 py-6 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t.ctaBand.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contatti')}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.ctaBand.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
