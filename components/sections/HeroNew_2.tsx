"use client"

import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function HeroNew() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full">
      {/* Full-width hero with background image */}
      <div 
        className="relative min-h-[85vh] w-full overflow-hidden"
        style={{ isolation: 'isolate' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80"
            alt="Dental Clinic Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay - Teal to dark */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 140, 140, 0.85) 0%, rgba(6, 140, 140, 0.75) 50%, rgba(10, 95, 95, 0.85) 100%)',
            }}
          />
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
              backgroundRepeat: 'repeat',
              mixBlendMode: 'overlay',
              opacity: 0.15,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 flex items-center min-h-[85vh]">
          <div className="max-w-4xl mx-auto text-center">
            {/* Small subtitle above */}
            <p 
              className="text-[#c9b896] text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Benvenuti a Pistoia
            </p>

            {/* Logo icon */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-8">
              <Image
                src={assetPath("/logo-icon.png") || "/placeholder.svg"}
                alt="Logo"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(11%) saturate(734%) hue-rotate(344deg) brightness(95%) contrast(88%)' }}
              />
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight mb-6 font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.hero.name}
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 md:w-24 h-[2px]" style={{ 
                background: 'linear-gradient(to right, transparent, #c9b896)',
                opacity: 0.8
              }} />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2" style={{ 
                  background: '#c9b896',
                  transform: 'rotate(45deg)',
                  opacity: 0.9
                }} />
                <div className="w-3 h-3 rounded-full border-2" style={{ 
                  borderColor: '#c9b896',
                  backgroundColor: 'transparent'
                }} />
                <div className="w-2 h-2" style={{ 
                  background: '#c9b896',
                  transform: 'rotate(45deg)',
                  opacity: 0.9
                }} />
              </div>
              <div className="w-16 md:w-24 h-[2px]" style={{ 
                background: 'linear-gradient(to left, transparent, #c9b896)',
                opacity: 0.8
              }} />
            </div>

            {/* Subtitle */}
            <p 
              className="text-xl sm:text-2xl md:text-3xl text-white/95 tracking-wider mb-10 font-light leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.hero.subtitle}
            </p>

            {/* Description text */}
            <p 
              className="text-base md:text-lg text-white/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto px-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Competenza odontoiatrica e medicina estetica facciale per un percorso di bellezza e benessere personalizzato
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contatti">
                <button 
                  className="px-10 py-4 text-white tracking-wider text-base md:text-lg hover:bg-[#c9b896] hover:border-[#c9b896] transition-all duration-300 font-light min-w-[200px]"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    border: '2px solid #c9b896',
                    backgroundColor: '#c9b896'
                  }}
                >
                  Prenota Consulto
                </button>
              </Link>
              <Link href="/servizi">
                <button 
                  className="px-10 py-4 text-white tracking-wider text-base md:text-lg hover:bg-white/10 transition-all duration-300 font-light min-w-[200px]"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    border: '2px solid white',
                    backgroundColor: 'transparent'
                  }}
                >
                  Scopri i Servizi
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom beige section */}
      <div 
        className="w-full py-8 md:py-12"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-xl md:text-2xl">+</span> {t.hero.bottomText}
          </p>
          <p className="text-sm md:text-lg text-gray-800 leading-relaxed italic mt-2 font-light px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.hero.bottomSubtext}
          </p>
        </div>
      </div>

      {/* Three Cards Section */}
      <div 
        className="w-full py-20 relative overflow-hidden"
        style={{
          backgroundColor: '#068c8c',
          isolation: 'isolate'
        }}
      >
        {/* Pattern overlay with mix-blend-mode */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Chi Sono */}
            <Link href="/chi-sono">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                    alt={t.hero.cards.aboutTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.aboutTitle}
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.aboutBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.aboutBullet2}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Servizi */}
            <Link href="/servizi">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt={t.hero.cards.servicesTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.servicesTitle}
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.servicesBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.servicesBullet2}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 - Galleria */}
            <Link href="/galleria">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                    alt={t.hero.cards.galleryTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.galleryTitle}
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.galleryBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> {t.hero.cards.galleryBullet2}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom beige section with quote */}
      <div 
        className="w-full py-16"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p 
            className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "{t.hero.quote}"
          </p>
        </div>
      </div>
    </section>
  )
}
