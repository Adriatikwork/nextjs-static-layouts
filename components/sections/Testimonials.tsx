"use client"

import { useLanguage } from '@/lib/LanguageContext'

export function Testimonials() {
  const { t } = useLanguage()

  // Show only first 4 testimonials
  const testimonialsToShow = t.testimonials.items.slice(0, 4)

  return (
    <section className="w-full py-16 md:py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1F2A33] font-normal mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.testimonials.title}
          </h2>
          <p
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonialsToShow.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-[#f8f7f5] rounded-lg p-6 sm:p-8"
            >
              <p
                className="text-base sm:text-lg text-gray-800 leading-relaxed font-light mb-4 italic"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p
                className="text-[#005F73] font-normal text-base sm:text-lg"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
