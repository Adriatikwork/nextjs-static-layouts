"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Services() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'dental' | 'aesthetic'>('aesthetic')

  // Service data comes from siteCopy.ts with Unsplash images
  const currentServices = activeTab === 'dental'
    ? t.services.dentalServices
    : t.services.aestheticServices

  return (
    <section className="w-full bg-white pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-12 pb-8 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 text-[#1a1a1a]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.services.pageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.services.pageDescription}
        </motion.p>
      </div>

      {/* Tab Toggle */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('aesthetic')}
            className={`px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
              activeTab === 'aesthetic'
                ? 'bg-[#005F73] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.aestheticTab}
          </button>
          <button
            onClick={() => setActiveTab('dental')}
            className={`px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
              activeTab === 'dental'
                ? 'bg-[#005F73] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.dentalTab}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
              >
                <Link href={`/servizi/${service.slug}`} className="block group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-gray-100">
                    <Image
                      src={service.images?.main || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Learn More Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-[#005F73] rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {t.services.learnMore}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Title */}
                    <h3
                      className="text-2xl font-normal text-[#1a1a1a] group-hover:text-[#005F73] transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-600 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Approach Section - Compact */}
      <div className="bg-[#f8f7f5] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#005F73] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.approachSectionTitle}
            </h2>
            <p
              className="text-lg text-gray-700 font-light max-w-3xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.approachSectionDescription}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#005F73] to-[#004D5E] py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-normal text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaSectionTitle}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8 font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaSectionDescription}
          </motion.p>
          <motion.a
            href="/contatti"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-10 py-4 bg-[#c9b896] text-[#1a1a1a] rounded-full hover:bg-[#d4b19a] transition-colors duration-300 font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaSectionButton}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
