"use client"

import { assetPath } from '@/lib/utils'
import { Smile, Activity, Syringe, Droplet, Sparkles, Scissors } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { DecorativeDivider } from '@/components/ui/decorative-divider'

export function Services() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<'dental' | 'aesthetic'>('dental')

  // Use translations for services
  const dentalServices = t.services.dental.map((service, index) => {
    const icons = [Smile, Activity, Scissors]
    return {
      ...service,
      icon: icons[index]
    }
  })

  const aestheticServices = t.services.aesthetic.map((service, index) => {
    const icons = [Syringe, Droplet, Sparkles]
    return {
      ...service,
      icon: icons[index]
    }
  })

  const activeServices = activeCategory === 'dental' ? dentalServices : aestheticServices

  return (
    <section className="relative w-full">
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
            {t.services.title}
          </h1>
        </div>
      </div>

      {/* Main services section - light cream background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#f9f6f0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction text */}
            <div className="text-center mb-16">
              <h2 
                className="text-3xl text-gray-800 mb-6 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.subtitle}
              </h2>
              <DecorativeDivider variant="default" className="mb-6" />
              <p 
                className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.intro}
              </p>
            </div>

            {/* Category Switcher - Elegant Toggle - Responsive */}
            <div className="flex justify-center mb-16 px-4">
              <div 
                className="inline-flex flex-col sm:flex-row p-2 rounded-lg gap-2 sm:gap-0 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'white',
                  border: '1px solid #d4c5a9',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                }}
              >
                <button
                  onClick={() => setActiveCategory('dental')}
                  className="px-4 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 font-light tracking-wide text-center whitespace-nowrap text-base sm:text-lg"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    backgroundColor: activeCategory === 'dental' ? '#068c8c' : 'transparent',
                    color: activeCategory === 'dental' ? 'white' : '#068c8c'
                  }}
                >
                  {t.services.dentalCategory}
                </button>
                <button
                  onClick={() => setActiveCategory('aesthetic')}
                  className="px-4 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 font-light tracking-wide text-center whitespace-nowrap text-base sm:text-lg"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    backgroundColor: activeCategory === 'aesthetic' ? '#068c8c' : 'transparent',
                    color: activeCategory === 'aesthetic' ? 'white' : '#068c8c'
                  }}
                >
                  {t.services.aestheticCategory}
                </button>
              </div>
            </div>

            {/* Mobile/Tablet: Horizontal Scroll Carousel */}
            <div className="lg:hidden">
              <div 
                key={`mobile-${activeCategory}`}
                className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide animate-fade-in-up"
                style={{ 
                  scrollPaddingLeft: '1rem',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {activeServices.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden snap-center"
                      style={{ border: '1px solid #e0e0e0' }}
                    >
                      {/* Icon circle */}
                      <div className="flex justify-center pt-12 pb-6">
                        <div 
                          className="w-24 h-24 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#e8f4f4' }}
                        >
                          <IconComponent 
                            className="w-12 h-12"
                            style={{ color: '#068c8c' }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 sm:px-8 pb-10">
                        <h3 
                          className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 font-normal"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#c9a876'
                          }}
                        >
                          {service.title}
                        </h3>

                        <p 
                          className="text-sm sm:text-base text-gray-700 text-center mb-6 sm:mb-8 font-light leading-relaxed"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {service.description}
                        </p>

                        {/* Service items list */}
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {service.items.map((item, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-light"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              <span 
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#c9a876' }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Button */}
                        <div className="text-center">
                          <button 
                            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-light tracking-wide hover:bg-[#068c8c] hover:text-white transition-all duration-300"
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: '#068c8c',
                              border: '2px solid #068c8c',
                              backgroundColor: 'transparent'
                            }}
                          >
                            {t.services.learnMore}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-2 mt-4">
                {activeServices.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: index === 0 ? '#068c8c' : '#d4c5a9',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div 
              key={`desktop-${activeCategory}`}
              className="hidden lg:grid grid-cols-3 gap-8 animate-fade-in-up"
            >
              {activeServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ border: '1px solid #e0e0e0' }}
                  >
                    {/* Icon circle */}
                    <div className="flex justify-center pt-12 pb-6">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#e8f4f4' }}
                      >
                        <IconComponent 
                          className="w-12 h-12"
                          style={{ color: '#068c8c' }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-10">
                      <h3 
                        className="text-2xl text-center mb-6 font-normal"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: '#c9a876'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p 
                        className="text-gray-700 text-center mb-8 font-light leading-relaxed"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {service.description}
                      </p>

                      {/* Service items list */}
                      <ul className="space-y-3 mb-8">
                        {service.items.map((item, idx) => (
                          <li 
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 font-light"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            <span 
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: '#c9a876' }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="text-center">
                        <button 
                          className="px-8 py-3 text-base font-light tracking-wide hover:bg-[#068c8c] hover:text-white transition-all duration-300"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#068c8c',
                            border: '2px solid #068c8c',
                            backgroundColor: 'transparent'
                          }}
                        >
                          {t.services.learnMore}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* IL MIO APPROCCIO Section - beige background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl mb-6 font-normal tracking-wider"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#c9a876',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                {t.services.approachTitle}
              </h2>
              <DecorativeDivider variant="default" className="mb-8" />
              <p 
                className="text-xl text-gray-700 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.approachSubtitle}
              </p>
            </div>

            {/* Approach cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.approach.items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md"
                  style={{ border: '1px solid #d4c5a9' }}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#e8f4f4' }}
                    >
                      <svg 
                        className="w-8 h-8"
                        style={{ color: '#068c8c' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                        {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      </svg>
                    </div>
                    <div>
                      <h3 
                        className="text-2xl mb-4 font-normal"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: '#c9a876'
                        }}
                      >
                        {item.title.toUpperCase()}
                      </h3>
                      {/* Premium decorative line */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-[1px]" style={{ background: '#c9a876' }}></div>
                        <div className="w-1 h-1 rounded-full" style={{ background: '#c9a876' }}></div>
                        <div className="w-2 h-[1px]" style={{ background: '#c9a876' }}></div>
                      </div>
                      <p 
                        className="text-gray-700 font-light leading-relaxed"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom teal section with CTA */}
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
          <h2 
            className="text-3xl md:text-4xl text-white mb-6 font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaTitle}
          </h2>
          <DecorativeDivider variant="short" className="mb-6" />
          <p 
            className="text-xl text-white/90 mb-8 font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaSubtitle}
          </p>
          <a href="/contatti">
            <button 
              className="px-10 py-4 text-[#068c8c] bg-[#c9b896] tracking-widest text-lg hover:opacity-90 transition-all font-light"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textTransform: 'uppercase'
              }}
            >
              {t.services.ctaButton}
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
