"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'
import Image from 'next/image'

export function Hero() {
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
    <>
      <section 
        id="home" 
        className="relative teal-gradient text-white overflow-hidden"
      >
        {/* Main Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-start lg:items-center min-h-[100svh]">
            
            {/* Left Column - ALL CONTENT CENTERED */}
            <div className="flex flex-col items-center text-center pt-10 pb-10 lg:py-16 animate-fade-in-up">
              
              {/* LARGE CENTERED ICON (Image 1) */}
              <div className="mb-6 lg:mb-8">
                <Image 
                  src={assetPath("/logo-icon.png")}
                  alt="Logo Icon" 
                  width={300} 
                  height={300}
                  className="w-36 sm:w-44 md:w-52 lg:w-60 mx-auto"
                  priority
                />
              </div>

              {/* Name + Subtitle (real text, responsive) */}
              <div className="mb-10 lg:mb-12 w-full">
                <h1
                  className="mx-auto max-w-[18ch] uppercase text-white leading-[1.05] tracking-[0.18em] text-[clamp(1.35rem,3.2vw,3.15rem)]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  DOTTORESSA IRENE MARIA BECONI
                </h1>
                <p
                  className="mt-3 mx-auto max-w-[44ch] uppercase text-white/85 tracking-[0.22em] text-[clamp(0.62rem,1.15vw,0.95rem)]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  ODONTOIATRIA E MEDICINA ESTETICA DEL VOLTO
                </p>
              </div>
              
              {/* CENTERED Elegant Divider */}
              <div className="elegant-divider mb-8">
                <span className="arrow">◂◂</span>
                <span className="line"></span>
                <span className="dot"></span>
                <span className="line line-right"></span>
                <span className="arrow">▸▸</span>
              </div>

              {/* CENTERED CTA Button */}
              <button
                onClick={() => scrollToSection('servizi')}
                className="btn-premium"
              >
                ACCEDI I SERVIZI
              </button>
            </div>

            {/* Right Column - Portrait Image */}
            <div className="relative animate-fade-in-right flex justify-center lg:justify-end items-start lg:items-end pb-10 lg:pb-0">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-lg xl:max-w-xl lg:translate-y-[-6px]">
                {/* Clean Portrait Image with Shadow following edges */}
                <div className="relative w-full" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={assetPath("/doctor_no_background.png")}
                    alt={t.hero.name}
                    fill
                    className="object-contain object-top"
                    style={{ filter: 'drop-shadow(-18px 12px 34px rgba(0,0,0,0.35))' }}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Cream Band */}
      <div className="hero-bottom-band">
        <p>
          + Poliambulatorio di Irene Maria Beconi viene effettuata
        </p>
        <p className="mt-1">
          Nostri Horari e Tutela Offerta Visieratti di Lui del Surridenca e Ilun Tobaco.
        </p>
      </div>
    </>
  )
}
