"use client"

import Image from 'next/image'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full">
      {/* Wrapper for TOP TEAL + MIDDLE BEIGE with image spanning ONLY these two */}
      <div className="relative w-full">
        {/* Top teal section with title */}
        <div
          className="w-full py-16 relative overflow-hidden"
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
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 
              className="text-5xl md:text-6xl text-[#c9b896] tracking-wider font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.title}
            </h1>
          </div>
        </div>

        {/* Beige background section */}
        <div 
          className="w-full py-20"
          style={{ backgroundColor: '#e8dfd0' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4 font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.name}
                  </h2>
                  <p 
                    className="text-lg md:text-xl text-gray-800 font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.hero.subtitle}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="w-full h-[1px] bg-gray-400"></div>

                {/* Description text */}
                <p 
                  className="text-lg text-gray-800 leading-relaxed font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.about.intro}
                </p>

                {/* Second Description */}
                <p 
                  className="text-lg text-gray-800 leading-relaxed font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.about.description}
                </p>

                {/* Button with signature */}
                <div className="flex items-center gap-6">
                  <button 
                    className="px-8 py-3 text-white tracking-wider text-base hover:opacity-80 transition-all font-light"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      backgroundColor: '#068c8c',
                      textTransform: 'uppercase'
                    }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact')
                      contactSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {t.nav.contact}
                  </button>
                  <div className="relative w-32 h-12">
                    <Image
                      src={assetPath("/images/signature.png") || "/placeholder.svg"}
                      alt="Signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Doctor Image */}
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt={t.hero.name}
                  fill
                  className="object-cover object-center rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LA MIA FORMAZIONE Section - Teal background - NO IMAGE */}
      <div 
        className="w-full py-16 relative overflow-hidden"
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
          <div className="max-w-6xl mx-auto">
            {/* Title with decorative lines */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-1 h-[1px] bg-[#c9b896]"></div>
              <h2 
                className="text-3xl md:text-4xl text-[#c9b896] tracking-wider font-normal text-center"
                style={{ fontFamily: 'Playfair Display, serif', textTransform: 'uppercase' }}
              >
                {t.about.formationTitle}
              </h2>
              <div className="flex-1 h-[1px] bg-[#c9b896]"></div>
            </div>

            {/* Two columns of bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {/* Split formation items into two columns */}
              {/* Left column */}
              <div className="space-y-4">
                {t.about.formation.slice(0, Math.ceil(t.about.formation.length / 2)).map((item, idx) => (
                  <p key={idx} className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <span className="text-[#c9b896] mt-1">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {t.about.formation.slice(Math.ceil(t.about.formation.length / 2)).map((item, idx) => (
                  <p key={idx} className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <span className="text-[#c9b896] mt-1">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Decorative elements at bottom */}
            <div className="flex items-center justify-center gap-3 mt-12">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c9b896' }}></div>
              <div className="w-3 h-3" style={{ 
                backgroundColor: '#c9b896',
                transform: 'rotate(45deg)'
              }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c9b896' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beige section with quote - SEPARATE, NO IMAGE */}
      <div 
        className="w-full py-16"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p 
            className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "{t.approach.quote}"
          </p>
        </div>
      </div>
    </section>
  )
}
