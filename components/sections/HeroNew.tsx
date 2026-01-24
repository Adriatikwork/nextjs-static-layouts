"use client"

import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function HeroNew() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full">
      {/* Main hero section with teal background */}
      <div 
        className="relative min-h-[700px] w-full"
        style={{
          backgroundColor: '#068c8c',
          backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Logo icon */}
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={assetPath("/logo-icon.png") || "/placeholder.svg"}
                  alt="Logo"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(11%) saturate(734%) hue-rotate(344deg) brightness(95%) contrast(88%)' }}
                />
              </div>

              {/* Main heading */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-wide leading-tight text-center font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.hero.name.toUpperCase()}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-wider lg:tracking-widest text-center font-light px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.hero.subtitle.toUpperCase()}
                </p>
              </div>

              {/* Decorative divider - Premium design */}
              <div className="flex items-center gap-3 w-full max-w-lg">
                <div className="flex-1 h-[2px]" style={{ 
                  background: 'linear-gradient(to right, transparent, var(--gold-accent), var(--gold-accent))',
                  opacity: 0.8
                }} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2" style={{ 
                    background: 'var(--gold-accent)',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                  <div className="w-3 h-3 rounded-full border-2" style={{ 
                    borderColor: 'var(--gold-accent)',
                    backgroundColor: 'transparent'
                  }} />
                  <div className="w-2 h-2" style={{ 
                    background: 'var(--gold-accent)',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                </div>
                <div className="flex-1 h-[2px]" style={{ 
                  background: 'linear-gradient(to left, transparent, var(--gold-accent), var(--gold-accent))',
                  opacity: 0.8
                }} />
              </div>

              {/* CTA Button */}
              <Link href="/servizi">
                <button 
                  className="px-10 py-4 text-white tracking-widest text-lg hover:opacity-80 transition-all text-center font-light"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    border: '2px solid #c9b896',
                    backgroundColor: 'transparent'
                  }}
                >
                  {t.hero.ctaPrimary.toUpperCase()}
                </button>
              </Link>
            </div>

            {/* Right side - Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md h-full">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt={t.hero.name}
                  fill
                  className="object-cover object-center rounded-lg lg:rounded-none"
                  priority
                />
              </div>
            </div>
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
        className="w-full py-20"
        style={{
          backgroundColor: '#068c8c',
          backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4">
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
