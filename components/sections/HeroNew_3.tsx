"use client"

import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function HeroNew() {
  const { t } = useLanguage()

  return (
    <section id="hero-section" className="relative w-full">
      {/* Full-screen dramatic hero with dark background */}
      <div
        className="relative min-h-screen w-full overflow-hidden flex items-center"
        style={{ isolation: 'isolate' }}
      >
        {/* Dark Background with Image */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80"
            alt="Dental Clinic"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay with gradient - inspired by Royal Clinic */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 20, 20, 0.75) 40%, rgba(10, 40, 40, 0.8) 100%)',
            }}
          />
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
              backgroundRepeat: 'repeat',
              mixBlendMode: 'soft-light',
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Content Container - Right-aligned like Royal Clinic */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
              {/* Left side - Empty space for visual balance */}
              <div className="hidden lg:block lg:col-span-1"></div>

              {/* Right side - Main Content */}
              <div className="lg:col-span-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:pl-12">
                {/* Small decorative top text */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B06F69]"></div>
                  <p
                    className="text-[#B06F69] text-xs md:text-sm tracking-[0.4em] uppercase font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Benvenuti a Pistoia
                  </p>
                </div>

                {/* Large Dramatic Heading - Royal Clinic style */}
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight leading-[0.9] font-normal max-w-5xl"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '2px 4px 12px rgba(0,0,0,0.5)'
                  }}
                >
                  {t.hero.name.split(' ').map((word, index) => (
                    <span key={index} className="block">
                      {word.toUpperCase()}
                    </span>
                  ))}
                </h1>

                {/* Decorative divider with warm accent */}
                <div className="flex items-center gap-3 w-full max-w-md">
                  <div className="flex-1 h-[1px]" style={{
                    background: 'linear-gradient(to right, #B06F69, #DBB2AE)',
                    opacity: 0.6
                  }} />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rotate-45" style={{
                      background: '#DBB2AE',
                      opacity: 0.8
                    }} />
                    <div className="w-2.5 h-2.5 rounded-full border-2" style={{
                      borderColor: '#B06F69',
                    }} />
                    <div className="w-2 h-2 rotate-45" style={{
                      background: '#DBB2AE',
                      opacity: 0.8
                    }} />
                  </div>
                  <div className="flex-1 h-[1px]" style={{
                    background: 'linear-gradient(to left, #B06F69, #DBB2AE)',
                    opacity: 0.6
                  }} />
                </div>

                {/* Subtitle with warm color */}
                <p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#DBB2AE] tracking-[0.15em] uppercase font-light leading-relaxed max-w-3xl"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '1px 2px 8px rgba(0,0,0,0.4)'
                  }}
                >
                  {t.hero.subtitle}
                </p>

                {/* Description text */}
                <p
                  className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Competenza odontoiatrica e medicina estetica facciale per un percorso di bellezza e benessere personalizzato
                </p>

                {/* CTA Buttons with Royal Clinic style */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contatti">
                    <button
                      className="group px-10 py-4 text-white tracking-[0.2em] text-sm md:text-base uppercase hover:bg-[#B06F69] hover:border-[#B06F69] transition-all duration-300 font-light min-w-[220px]"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #B06F69',
                        backgroundColor: '#B06F69',
                        boxShadow: '0 4px 14px rgba(176, 111, 105, 0.4)'
                      }}
                    >
                      Prenota Consulto
                    </button>
                  </Link>
                  <Link href="/servizi">
                    <button
                      className="px-10 py-4 text-white tracking-[0.2em] text-sm md:text-base uppercase hover:bg-white/10 hover:border-[#DBB2AE] transition-all duration-300 font-light min-w-[220px]"
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
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#DBB2AE]/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#B06F69]/80 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom beige section with clinic info */}
      <div
        className="w-full py-10 md:py-14 relative overflow-hidden"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-xl md:text-2xl text-[#B06F69]">+</span> {t.hero.bottomText}
          </p>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic mt-2 font-light px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.hero.bottomSubtext}
          </p>
        </div>
      </div>

      {/* Three Cards Section - Dark teal background */}
      <div
        className="w-full py-20 md:py-28 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #068c8c 0%, #0a5f5f 100%)',
          isolation: 'isolate'
        }}
      >
        {/* Pattern overlay */}
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
            opacity: 0.4,
            zIndex: 1
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Card 1 - Chi Sono */}
            <Link href="/chi-sono">
              <div
                className="group bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                    alt={t.hero.cards.aboutTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3
                    className="text-2xl md:text-3xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.aboutTitle}
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.aboutBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.aboutBullet2}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Servizi */}
            <Link href="/servizi">
              <div
                className="group bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt={t.hero.cards.servicesTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3
                    className="text-2xl md:text-3xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.servicesTitle}
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.servicesBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.servicesBullet2}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 - Galleria */}
            <Link href="/galleria">
              <div
                className="group bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                    alt={t.hero.cards.galleryTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3
                    className="text-2xl md:text-3xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.cards.galleryTitle}
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.galleryBullet1}
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#B06F69]">•</span> {t.hero.cards.galleryBullet2}
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
        className="w-full py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <p
            className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "{t.hero.quote}"
          </p>
        </div>
      </div>
    </section>
  )
}
