"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const { t } = useLanguage()

  const testimonialsToShow = t.testimonials.items.slice(0, 6)

  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.testimonials.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.testimonials.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-md"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsToShow.map((testimonial: { name: string; text: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 border border-[#e8e2d8] hover:border-[#c9b896] transition-all duration-500 hover:shadow-lg"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9b896] text-[#c9b896]" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-base leading-relaxed mb-6 italic"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, color: '#3a4a50' }}
              >
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#e8e2d8]">
                <div className="w-10 h-10 rounded-full bg-[#1a506c] flex items-center justify-center">
                  <span className="text-white text-sm font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p
                  className="text-sm tracking-wide"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a2a30' }}
                >
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
