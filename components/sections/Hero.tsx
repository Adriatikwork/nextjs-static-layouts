"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero background images - rotating carousel
  const heroImages = [
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80',  // Dental 1
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',  // Dental 2
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',  // Beauty 1 - Spa/wellness
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80',  // Beauty 2 - Skincare treatment
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero-section" className="relative w-full">
      {/* Full-Screen Hero with Carousel - accounting for fixed navbar */}
      <div className="relative w-full min-h-screen overflow-hidden pt-16 sm:pt-[72px] lg:pt-0">
        {/* Background Image Carousel */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: 1,
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
            />
            {/* Dark overlay for better text contrast */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 95, 115, 0.5) 0%, rgba(0, 77, 94, 0.6) 50%, rgba(0, 0, 0, 0.55) 100%)',
                zIndex: 2,
              }}
            />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-[10] min-h-screen flex items-start sm:items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-24 md:py-32 lg:py-40">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto text-center">
              {/* Animated entrance for content */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
                {/* Small accent line */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
                  <div className="w-12 sm:w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9b896] to-[#c9b896]" />
                  <p
                    className="text-[#c9b896] text-xs sm:text-sm md:text-base tracking-[0.3em] md:tracking-[0.4em] uppercase font-light whitespace-nowrap"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                    }}
                  >
                    {t.hero.welcomeText}
                  </p>
                  <div className="w-12 sm:w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#c9b896] to-[#c9b896]" />
                </div>

                {/* Main Heading - HUGE and dramatic */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-normal leading-[0.95] tracking-tight px-2"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '2px 4px 20px rgba(0,0,0,0.5)',
                  }}
                >
                  {t.hero.name.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="block"
                      style={{
                        animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                      }}
                    >
                      {word.toUpperCase()}
                    </span>
                  ))}
                </h1>

                {/* Elegant divider */}
                <div className="flex items-center justify-center gap-3 md:gap-4 py-2 md:py-4">
                  <div className="w-16 sm:w-20 md:w-32 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#c9b896] to-[#c9b896]" />
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rotate-45 bg-[#c9b896]" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-[#c9b896]" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rotate-45 bg-[#c9b896]" />
                  </div>
                  <div className="w-16 sm:w-20 md:w-32 h-[1px] md:h-[2px] bg-gradient-to-l from-transparent via-[#c9b896] to-[#c9b896]" />
                </div>

                {/* Subtitle */}
                <p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light leading-relaxed tracking-wide max-w-4xl mx-auto px-4"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '1px 2px 10px rgba(0,0,0,0.5)',
                  }}
                >
                  {t.hero.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto px-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.hero.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 px-4">
                  <Link href="/contatti">
                    <button
                      className="group w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 md:py-5 text-white tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg uppercase transition-all duration-500 font-light min-w-[240px] sm:min-w-[260px] relative overflow-hidden hover:shadow-2xl"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #c9b896',
                        backgroundColor: '#c9b896',
                        boxShadow: '0 8px 24px rgba(201, 184, 150, 0.4)',
                      }}
                    >
                      <span className="relative z-10">{t.hero.ctaPrimary}</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                  </Link>
                  <Link href="/servizi">
                    <button
                      className="group w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 md:py-5 text-white tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg uppercase transition-all duration-500 font-light min-w-[240px] sm:min-w-[260px] relative overflow-hidden hover:shadow-2xl"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid white',
                        backgroundColor: 'transparent',
                      }}
                    >
                      <span className="relative z-10">{t.hero.ctaSecondary}</span>
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 sm:bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 z-[15] flex gap-3 md:gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-10 sm:w-12 md:w-16 h-1 rounded-full transition-all duration-500 ${
                  currentSlide === index ? 'bg-[#c9b896]' : 'bg-white/40'
                }`}
              >
                {currentSlide === index && (
                  <div
                    className="h-full bg-white rounded-full animate-progress"
                    style={{
                      animation: 'progress 5s linear',
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-8 md:bottom-6 left-1/2 -translate-x-1/2 z-[15] animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t.hero.scroll}
            </span>
            <div className="w-[2px] h-8 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom accent section */}
      <div
        className="w-full py-12 md:py-14 relative overflow-hidden"
        style={{ backgroundColor: '#f8f7f5' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-xl md:text-2xl text-[#005F73]">+</span> {t.hero.bottomText}
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed italic mt-2 font-light px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.hero.bottomSubtext}
          </p>
        </div>
      </div>

      {/* Perché Sceglierci Section */}
      <div
        className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#f8f7f5' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#1F2A33] font-normal mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.hero.whyChooseUsTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t.hero.whyChooseUsSubtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Odontoiatria */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={assetPath("/Doctor.jpg") || "/placeholder.svg"}
                  alt={t.hero.cards.odontoiatriaTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl sm:text-2xl text-[#1F2A33] mb-3 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.hero.cards.odontoiatriaTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.hero.cards.odontoiatriaDesc}
                </p>
                <Link href="/servizi" className="inline-flex items-center gap-2 text-[#005F73] hover:gap-3 transition-all duration-300 group">
                  <span className="text-sm font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {t.hero.cards.scopriDiPiu}
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 - Medicina Estetica del Viso */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                  alt={t.hero.cards.medicinaEsteticaTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl sm:text-2xl text-[#1F2A33] mb-3 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.hero.cards.medicinaEsteticaTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.hero.cards.medicinaEsteticaDesc}
                </p>
                <Link href="/servizi" className="inline-flex items-center gap-2 text-[#005F73] hover:gap-3 transition-all duration-300 group">
                  <span className="text-sm font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {t.hero.cards.scopriDiPiu}
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 - Consulenza Personalizzata */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt={t.hero.cards.consulenzaTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl sm:text-2xl text-[#1F2A33] mb-3 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.hero.cards.consulenzaTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.hero.cards.consulenzaDesc}
                </p>
                <Link href="/contatti" className="inline-flex items-center gap-2 text-[#005F73] hover:gap-3 transition-all duration-300 group">
                  <span className="text-sm font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {t.hero.cards.scopriDiPiu}
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Come Funziona Section */}
      <div className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#1F2A33] font-normal mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.hero.howItWorksTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t.hero.howItWorksSubtitle}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8f7f5] flex items-center justify-center">
                <span className="text-3xl text-[#005F73]" style={{ fontFamily: 'Playfair Display, serif' }}>1</span>
              </div>
              <h3
                className="text-lg sm:text-xl text-[#1F2A33] mb-3 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.hero.step1Title}
              </h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t.hero.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8f7f5] flex items-center justify-center">
                <span className="text-3xl text-[#005F73]" style={{ fontFamily: 'Playfair Display, serif' }}>2</span>
              </div>
              <h3
                className="text-lg sm:text-xl text-[#1F2A33] mb-3 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.hero.step2Title}
              </h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t.hero.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8f7f5] flex items-center justify-center">
                <span className="text-3xl text-[#005F73]" style={{ fontFamily: 'Playfair Display, serif' }}>3</span>
              </div>
              <h3
                className="text-lg sm:text-xl text-[#1F2A33] mb-3 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.hero.step3Title}
              </h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t.hero.step3Desc}
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8f7f5] flex items-center justify-center">
                <span className="text-3xl text-[#005F73]" style={{ fontFamily: 'Playfair Display, serif' }}>4</span>
              </div>
              <h3
                className="text-lg sm:text-xl text-[#1F2A33] mb-3 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.hero.step4Title}
              </h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t.hero.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom quote section */}
      <div
        className="w-full py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: '#f8f7f5' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {`"${t.hero.quote}"`}
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}
