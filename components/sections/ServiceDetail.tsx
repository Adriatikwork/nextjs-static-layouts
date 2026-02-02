"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/lib/utils'
import { useState, useMemo } from 'react'
import { ChevronDown, ChevronUp, ArrowLeft, Clock, Calendar, Timer } from 'lucide-react'
import { getServiceContent } from '@/content/services'

interface ServiceDetailProps {
  slug: string
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const { t, language } = useLanguage()
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Fetch service content based on current language
  const service = useMemo(() => {
    return getServiceContent(slug, language)
  }, [slug, language])

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link
          href="/servizi"
          className="inline-flex items-center gap-2 text-[#005F73] hover:text-[#004D5E] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.nav?.services || "Servizi"}
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={assetPath(service.images.main)}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Title & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#005F73]/10 rounded-full">
              <span className="text-[#005F73] text-sm font-medium tracking-wider uppercase">
                {service.category === 'dental' ? t.services?.dentalCategory : t.services?.aestheticCategory}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a1a]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {service.title}
            </h1>

            <p
              className="text-xl text-gray-700 font-light leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {service.description}
            </p>

            {/* Duration Info Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2 text-[#005F73]" />
                <p className="text-xs text-gray-600 mb-1">{t.services?.durationLabel}</p>
                <p className="text-sm font-medium text-[#1a1a1a]">{service.duration.session}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-6 h-6 mx-auto mb-2 text-[#005F73]" />
                <p className="text-xs text-gray-600 mb-1">{t.services?.resultsLabel}</p>
                <p className="text-sm font-medium text-[#1a1a1a]">{service.duration.results}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Timer className="w-6 h-6 mx-auto mb-2 text-[#005F73]" />
                <p className="text-xs text-gray-600 mb-1">{t.services?.recoveryLabel}</p>
                <p className="text-sm font-medium text-[#1a1a1a]">{service.duration.recovery}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contatti"
                className="inline-block px-8 py-4 bg-[#005F73] text-white rounded-full hover:bg-[#004D5E] transition-colors duration-300 font-normal shadow-lg"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.hero.ctaPrimary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="bg-[#f8f7f5] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.whatIsTitle}
            </h2>
            <p
              className="text-lg text-gray-700 font-light leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {service.whatIs}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.benefitsTitle}
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#005F73] flex-shrink-0" />
                  <p
                    className="text-lg text-gray-700 font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {benefit}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#f8f7f5] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-12 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.processTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#005F73] text-white flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h3
                        className="text-xl font-normal text-[#1a1a1a] mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-600 font-light leading-relaxed"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.aftercareTitle}
            </h2>
            <ul className="space-y-3">
              {service.aftercare.map((instruction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#005F73] flex-shrink-0" />
                  <p
                    className="text-gray-700 font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {instruction}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="bg-[#f8f7f5] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Suitable For */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl md:text-3xl font-normal text-[#005F73] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services?.suitableForTitle}
              </h2>
              <ul className="space-y-3">
                {service.suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <p className="text-gray-700 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Suitable For */}
            {service.notSuitableFor && service.notSuitableFor.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-2xl md:text-3xl font-normal text-[#005F73] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.services?.notSuitableForTitle}
                </h2>
                <ul className="space-y-3">
                  {service.notSuitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">✗</span>
                      <p className="text-gray-700 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {service.images.gallery && service.images.gallery.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-normal text-[#005F73] mb-12 text-center"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services?.galleryTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.images.gallery.map((imagePath, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={assetPath(imagePath)}
                      alt={`${service.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-[#f8f7f5] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-12 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.faqsTitle}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3
                      className="text-lg font-normal text-[#1a1a1a] pr-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {faq.question}
                    </h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#005F73] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#005F73] flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p
                        className="text-gray-700 font-light leading-relaxed"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#005F73] to-[#004D5E] py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-normal text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services?.interestedInService?.replace('{service}', service.title)}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8 font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services?.ctaConsultationDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contatti"
              className="inline-block px-10 py-4 bg-[#c9b896] text-[#1a1a1a] rounded-full hover:bg-[#d4b19a] transition-colors duration-300 font-normal shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services?.ctaSectionButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
