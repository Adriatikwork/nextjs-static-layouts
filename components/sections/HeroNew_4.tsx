"use client"

import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function HeroNew() {
  const { t } = useLanguage()

  return (
    <section id="hero-section" className="relative w-full">
      {/* Hero section with integrated navbar space - clean teal background */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #068c8c 0%, #0a7575 100%)',
          isolation: 'isolate'
        }}
      >
        {/* Subtle pattern overlay */}
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
            opacity: 0.3,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Main Hero Content - starts below navbar */}
        <div className="relative z-10 pt-32 pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
                {/* Small accent text */}
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-[#c9b896] hidden lg:block"></div>
                  <p
                    className="text-[#c9b896] text-xs md:text-sm tracking-[0.3em] uppercase font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Benvenuti a Pistoia
                  </p>
                </div>

                {/* Logo icon */}
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={assetPath("/logo-icon.png") || "/placeholder.svg"}
                    alt="Logo"
                    fill
                    className="object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(11%) saturate(734%) hue-rotate(344deg) brightness(95%) contrast(88%)' }}
                  />
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.name.toUpperCase()}
                  </h1>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-16 h-[2px]" style={{
                      background: 'linear-gradient(to right, transparent, #c9b896, #c9b896)',
                      opacity: 0.8
                    }} />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rotate-45 bg-[#c9b896] opacity-80" />
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#c9b896]" />
                      <div className="w-2 h-2 rotate-45 bg-[#c9b896] opacity-80" />
                    </div>
                    <div className="w-16 h-[2px]" style={{
                      background: 'linear-gradient(to left, transparent, #c9b896, #c9b896)',
                      opacity: 0.8
                    }} />
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white/95 tracking-wide font-light leading-relaxed max-w-xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.hero.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-base md:text-lg text-white/85 font-light leading-relaxed max-w-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Competenza odontoiatrica e medicina estetica facciale per un percorso di bellezza e benessere personalizzato
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contatti">
                    <button
                      className="px-10 py-4 text-white tracking-wider text-base uppercase hover:opacity-90 transition-all duration-300 font-light min-w-[220px]"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #c9b896',
                        backgroundColor: '#c9b896',
                        boxShadow: '0 4px 12px rgba(201, 184, 150, 0.3)'
                      }}
                    >
                      Prenota Consulto
                    </button>
                  </Link>
                  <Link href="/servizi">
                    <button
                      className="px-10 py-4 text-white tracking-wider text-base uppercase hover:bg-white/10 transition-all duration-300 font-light min-w-[220px]"
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

              {/* Right Column - Image */}
              <div className="relative w-full h-[500px] lg:h-[600px] flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                    alt={t.hero.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle overlay for better image blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/20 to-transparent" />
                </div>
              </div>
            </div>
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
            <span className="text-xl md:text-2xl text-[#068c8c]">+</span> {t.hero.bottomText}
          </p>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic mt-2 font-light px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.hero.bottomSubtext}
          </p>
        </div>
      </div>

      {/* Three Cards Section */}
      <div
        className="w-full py-20 md:py-28 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #068c8c 0%, #0a7575 100%)',
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
            opacity: 0.3,
            zIndex: 1
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Card 1 - Chi Sono */}
            <Link href="/chi-sono">
              <div
                className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/10"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                    alt={t.hero.cards.aboutTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/80 to-transparent" />
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
                className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/10"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt={t.hero.cards.servicesTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/80 to-transparent" />
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
                className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/10"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                    alt={t.hero.cards.galleryTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/80 to-transparent" />
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
