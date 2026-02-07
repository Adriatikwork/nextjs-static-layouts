"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useState, useMemo } from 'react'
import { ChevronDown, ArrowLeft, ArrowRight, Clock, Calendar, Timer, Check, X as XIcon } from 'lucide-react'
import { getServiceContent } from '@/content/services'

interface ServiceDetailProps {
  slug: string
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const { t, language } = useLanguage()
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const service = useMemo(() => {
    return getServiceContent(slug, language)
  }, [slug, language])

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Full-width Hero Banner */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#1a506c' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={assetPath(service.images.main) || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(26,80,108,0.92) 0%, rgba(26,80,108,0.75) 50%, rgba(26,80,108,0.45) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-20 md:pt-48 md:pb-28">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9b896] transition-colors duration-300 mb-10 group"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              {t.nav?.services || "Servizi"}
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#c9b896] text-sm tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {service.category === 'dental' ? t.services?.dentalCategory : t.services?.aestheticCategory}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {service.title}
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-[1px] bg-[#c9b896] origin-left mb-6"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            {service.description}
          </motion.p>

          {/* Duration cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            {[
              { icon: Clock, label: t.services?.durationLabel, value: service.duration.session },
              { icon: Calendar, label: t.services?.resultsLabel, value: service.duration.results },
              { icon: Timer, label: t.services?.recoveryLabel, value: service.duration.recovery },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 border border-white/15 bg-white/5 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-[#c9b896]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/50" style={{ fontFamily: 'Geist, sans-serif' }}>{item.label}</p>
                  <p className="text-sm text-white" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10"
          >
            <Link
              href={`/contatti?service=${encodeURIComponent(service.title)}&type=${service.category}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services?.whatIsTitle}
            </p>
            <div className="w-12 h-[1px] bg-[#c9b896] mb-8" />
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}
            >
              {service.whatIs}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services?.benefitsTitle}
            </p>
            <h2
              className="text-3xl md:text-4xl leading-[1.1] mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.services?.benefitsTitle}
            </h2>
            <div className="w-12 h-[1px] bg-[#c9b896] mb-10" />
          </motion.div>

          <div className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-5 p-5 bg-white border border-[#e8e2d8]"
              >
                <span
                  className="text-lg font-light leading-none mt-0.5 flex-shrink-0"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,184,150,0.6)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}
                >
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services?.processTitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.services?.processTitle}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-[#e8e2d8] hover:border-[#c9b896] transition-all duration-500"
              >
                <span
                  className="text-5xl font-light mb-4 block leading-none"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,184,150,0.35)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-[1px] bg-[#1a506c] mb-4" />
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services?.aftercareTitle}
            </p>
            <h2
              className="text-3xl md:text-4xl leading-[1.1] mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.services?.aftercareTitle}
            </h2>
            <div className="w-12 h-[1px] bg-[#c9b896] mb-10" />
          </motion.div>

          <div className="space-y-3">
            {service.aftercare.map((instruction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-5 p-5 bg-white border border-[#e8e2d8]"
              >
                <span
                  className="text-lg font-light leading-none mt-0.5 flex-shrink-0"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,184,150,0.6)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}
                >
                  {instruction}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For / Not Suitable For */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Suitable For */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
              >
                {t.services?.suitableForTitle}
              </p>
              <div className="w-12 h-[1px] bg-[#c9b896] mb-8" />
              <div className="space-y-3">
                {service.suitableFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 border border-[#1a506c] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#1a506c]" />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not Suitable For */}
            {service.notSuitableFor && service.notSuitableFor.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p
                  className="text-[#8a9a9f] text-sm tracking-[0.3em] uppercase mb-4"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                >
                  {t.services?.notSuitableForTitle}
                </p>
                <div className="w-12 h-[1px] bg-[#e8e2d8] mb-8" />
                <div className="space-y-3">
                  {service.notSuitableFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 border border-[#d4cfc5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <XIcon className="w-3 h-3 text-[#8a9a9f]" />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.images.gallery && service.images.gallery.length > 0 && (
        <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-14">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
              >
                {t.services?.galleryTitle}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl leading-[1.1]"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
              >
                {t.services?.galleryTitle}
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.images.gallery.map((imagePath, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative aspect-square overflow-hidden group border border-[#e8e2d8]"
                >
                  <Image
                    src={assetPath(imagePath) || "/placeholder.svg"}
                    alt={`${service.title} - ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.services?.faqsTitle}
            </motion.h2>
          </div>

          <div className="space-y-0 border-t border-[#e8e2d8]">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="border-b border-[#e8e2d8]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3
                    className="text-base md:text-lg pr-6 group-hover:text-[#1a506c] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#c9b896] transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openFaqIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1a506c' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {t.services?.interestedInService?.replace('{service}', service.title)}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/80 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            {t.services?.ctaConsultationDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={`/contatti?service=${encodeURIComponent(service.title)}&type=${service.category}`}
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services?.ctaSectionButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
