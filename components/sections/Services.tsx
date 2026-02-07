"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getServiceSummaries } from '@/content/services'
import { ArrowRight } from 'lucide-react'

export function Services() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'dental' | 'aesthetic'>('aesthetic')

  const services = useMemo(() => getServiceSummaries(language), [language])

  const currentServices = activeTab === 'dental'
    ? services.dentalServices
    : services.aestheticServices

  return (
    <section className="w-full bg-white pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {t.services.pageHeading}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
          >
            {t.services.pageTitle}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#c9b896] origin-left mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
          >
            {t.services.pageDescription}
          </motion.p>
        </div>
      </div>

      {/* Tab Toggle */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('aesthetic')}
            className={`px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 border ${
              activeTab === 'aesthetic'
                ? 'bg-[#1a506c] text-white border-[#1a506c]'
                : 'bg-transparent text-[#5a6a70] border-[#d4cfc5] hover:border-[#1a506c] hover:text-[#1a506c]'
            }`}
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {t.services.aestheticTab}
          </button>
          <button
            onClick={() => setActiveTab('dental')}
            className={`px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 border ${
              activeTab === 'dental'
                ? 'bg-[#1a506c] text-white border-[#1a506c]'
                : 'bg-transparent text-[#5a6a70] border-[#d4cfc5] hover:border-[#1a506c] hover:text-[#1a506c]'
            }`}
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {t.services.dentalTab}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/servizi/${service.slug}`} className="group block">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden mb-5">
                    <Image
                      src={service.images?.main || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl mb-2 group-hover:text-[#1a506c] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
                  >
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-[#1a506c] text-sm tracking-wide group-hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                  >
                    {t.services.learnMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Approach Section */}
      <div className="py-24" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {t.services.approachSectionTitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, color: '#3a4a50' }}
          >
            {t.services.approachSectionDescription}
          </motion.p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24" style={{ backgroundColor: '#1a506c' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {t.services.ctaSectionTitle}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/80 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            {t.services.ctaSectionDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.services.ctaSectionButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
