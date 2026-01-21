"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="chi-sono" className="cream-bg section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Classical Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}>
              {t.about.title}
            </h2>
            <div className="gold-divider"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-brand-dark-text leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t.about.intro}
              </p>
              <p className="text-lg text-brand-dark-text leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t.about.description}
              </p>

              {/* Formation Section */}
              <div className="pt-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-gold mb-8 relative inline-block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {t.about.formationTitle}
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-gold via-brand-gold to-transparent"></span>
                </h3>
                <ul className="space-y-5">
                  {t.about.formation.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                      <span className="text-brand-dark-text text-lg leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Decorative frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/30 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"></div>
                
                {/* Image placeholder with elegant styling */}
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-elegant-lg border border-brand-gold/20">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-teal/5 via-brand-cream/50 to-brand-gold/5">
                    <div className="text-center">
                      {/* Logo as placeholder */}
                      <div className="mb-4 opacity-30">
                        <Image 
                          src="/logo.svg" 
                          alt="" 
                          width={120} 
                          height={120}
                        />
                      </div>
                      <p className="text-brand-gold/60 text-sm tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>About Photo</p>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-12 h-12 border-l-2 border-t-2 border-brand-gold/40"></div>
                <div className="absolute bottom-2 right-2 w-12 h-12 border-r-2 border-b-2 border-brand-gold/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative logo in background */}
      <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none hidden xl:block">
        <Image 
          src="/logo.svg" 
          alt="" 
          width={200} 
          height={200}
        />
      </div>
    </section>
  )
}
