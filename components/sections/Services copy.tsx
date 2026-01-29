"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaTooth, FaSyringe, FaHeartbeat, FaUserMd, FaShieldAlt, FaAward, FaHeart } from 'react-icons/fa'
import { HiSparkles, HiClock, HiCheckCircle } from 'react-icons/hi'
import { RiStethoscopeLine } from 'react-icons/ri'
import Link from 'next/link'

export function Services() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'dental' | 'aesthetic'>('aesthetic')

  const dentalServices = t.services.dentalServices.map((service, index) => ({
    icon: [FaTooth, RiStethoscopeLine, FaShieldAlt][index],
    ...service
  }))

  const aestheticServices = t.services.aestheticServices.map((service, index) => ({
    icon: [FaSyringe, HiSparkles, FaHeartbeat][index],
    ...service
  }))

  const approach = t.services.journeySteps.map((step, index) => ({
    ...step,
    icon: [HiCheckCircle, RiStethoscopeLine, FaUserMd, FaAward][index]
  }))

  const currentServices = activeTab === 'dental' ? dentalServices : aestheticServices

  return (
    <section className="w-full relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f5] via-[#fef5e7] to-[#e8f4f8] -z-10" />

      {/* Floating Abstract Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#c9b896]/20 to-[#005F73]/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-[#005F73]/10 to-[#c9b896]/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 via-pink-100/20 to-blue-200/20 rounded-full blur-3xl -z-10"
      />

      {/* Static Section Header with Tab Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/70 backdrop-blur-xl shadow-lg border border-white/50"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)'
        }}
      >
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-4">
            <span
              className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#005F73] to-[#c9b896] font-light text-center md:text-left"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.pageHeading}
            </span>

            {/* Tab Toggle with Glass Effect */}
            <div className="flex gap-1.5 md:gap-2 bg-gradient-to-r from-gray-100/80 to-gray-50/80 backdrop-blur-sm rounded-full p-1 md:p-1.5 shadow-inner w-full md:w-auto max-w-sm">
              <button
                onClick={() => setActiveTab('aesthetic')}
                className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs tracking-wide md:tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'aesthetic'
                    ? 'bg-gradient-to-r from-[#005F73] to-[#007991] text-white shadow-lg shadow-[#005F73]/30'
                    : 'bg-transparent text-gray-600 hover:bg-white/50'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.aestheticTab}
              </button>
              <button
                onClick={() => setActiveTab('dental')}
                className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs tracking-wide md:tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'dental'
                    ? 'bg-gradient-to-r from-[#005F73] to-[#007991] text-white shadow-lg shadow-[#005F73]/30'
                    : 'bg-transparent text-gray-600 hover:bg-white/50'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.dentalTab}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5 max-w-7xl mx-auto"
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={`/contatti?service=${encodeURIComponent(service.title)}&type=${activeTab}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#005F73]/10 to-[#c9b896]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#005F73]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl md:text-2xl font-normal text-gray-900 mb-2 md:mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs md:text-sm text-gray-700 font-light"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9b896] mt-1.5 md:mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#005F73] flex items-center justify-center">
                        <span className="text-white text-base md:text-lg">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Our Approach Section */}
      <div className="bg-white py-12 md:py-24 relative">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#005F73 1px, transparent 1px), linear-gradient(90deg, #005F73 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center"
            >
              <span
                className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#c9b896] mb-3 md:mb-4 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.journeyTitle}
              </span>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-px w-6 md:w-8 bg-[#c9b896]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9b896]" />
                <div className="h-px w-6 md:w-8 bg-[#c9b896]" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-normal text-gray-900 max-w-3xl mx-auto px-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.journeySubtitle}
            </motion.h2>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6">
            {approach.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Connector Line - Desktop Only */}
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-px">
                      <div className="h-full w-full bg-gradient-to-r from-[#c9b896]/40 via-[#c9b896]/20 to-transparent" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#c9b896]/40" />
                    </div>
                  )}

                  {/* Modern Card Container */}
                  <div className="relative bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#c9b896]/30 transition-all duration-500 group-hover:-translate-y-1">
                    {/* Step Number Badge - Modern Approach */}
                    <div className="flex items-center justify-between mb-4 md:mb-5">
                      <div className="flex items-center gap-3">
                        {/* Icon Circle */}
                        <div className="relative">
                          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#005F73]/10 to-[#c9b896]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#005F73]" />
                          </div>
                        </div>

                        {/* Step Number */}
                        <div className="flex items-baseline gap-1">
                          <span
                            className="text-xs uppercase tracking-wider text-[#c9b896] font-medium"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            Step
                          </span>
                          <span
                            className="text-2xl md:text-3xl font-light text-[#005F73]"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-6 md:h-7 rounded-full transition-all duration-500 ${
                              i <= index
                                ? 'bg-[#005F73] group-hover:bg-[#c9b896]'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-[#c9b896]/30 via-[#c9b896]/10 to-transparent mb-4 md:mb-5" />

                    {/* Content */}
                    <div>
                      {/* Title */}
                      <h3
                        className="text-base md:text-lg font-medium text-gray-900 mb-2.5 md:mb-3 group-hover:text-[#005F73] transition-colors duration-500 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs md:text-[13px] text-gray-600 leading-relaxed font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#005F73] via-[#c9b896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl md:rounded-b-2xl" />
                  </div>

                  {/* Mobile Connector - Vertical */}
                  {index < approach.length - 1 && (
                    <div className="md:hidden flex justify-center py-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-4 bg-gradient-to-b from-[#c9b896]/40 to-[#c9b896]/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9b896]/40" />
                        <div className="w-px h-4 bg-gradient-to-b from-[#c9b896]/20 to-transparent" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Il Mio Approccio Section */}
      <div className="py-12 md:py-24 bg-[#f8f7f5] relative">
        {/* Subtle Radial Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c9b896 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div>
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex flex-col items-center mb-4 md:mb-6"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="h-px w-8 md:w-12 bg-[#c9b896]" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 border border-[#c9b896] rotate-45" />
                  <div className="h-px w-8 md:w-12 bg-[#c9b896]" />
                </div>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#c9b896] tracking-wide uppercase px-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.services.approachTitle}
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-xl text-gray-700 font-light max-w-3xl mx-auto px-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.approachSubtitle}
              </motion.p>
            </div>

            {/* Approach Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {t.approach.items.map((item, index) => {
                const approachIcons = [
                  { icon: FaHeart, color: '#005F73' },
                  { icon: HiCheckCircle, color: '#c9b896' },
                  { icon: HiSparkles, color: '#005F73' },
                  { icon: FaShieldAlt, color: '#c9b896' }
                ]
                const { icon: ApproachIcon, color } = approachIcons[index]

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card with Premium Details */}
                    <div className="relative bg-white p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(201,184,150,0.1)] transition-all duration-700 border border-[#c9b896]/10 hover:border-[#c9b896]/30 group-hover:-translate-y-1">
                      {/* Top Corner Accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20">
                        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#c9b896]/30 to-transparent" />
                        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#c9b896]/30 to-transparent" />
                      </div>

                      {/* Number Background */}
                      <div
                        className="absolute top-6 right-6 md:top-8 md:right-8 text-[100px] md:text-[140px] font-light leading-none text-[#c9b896]/[0.03] select-none"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
                        {/* Icon with Frame */}
                        <div className="flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                          <div className="relative w-16 h-16 md:w-20 md:h-20">
                            <div className="absolute inset-0 border border-[#c9b896]/20 group-hover:border-[#c9b896]/40 transition-colors duration-500" />
                            <div className="absolute inset-0" style={{ backgroundColor: `${color}08` }} />
                            <div className="relative w-full h-full flex items-center justify-center">
                              <ApproachIcon className="w-7 h-7 md:w-9 md:h-9" style={{ color }} />
                            </div>
                          </div>
                          {/* Corner dots */}
                          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t" style={{ borderColor: color }} />
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b" style={{ borderColor: color }} />
                        </div>

                        <div className="flex-1">
                          {/* Title */}
                          <h3
                            className="text-xl md:text-2xl font-normal mb-4 md:mb-5 uppercase tracking-wide"
                            style={{ fontFamily: 'Playfair Display, serif', color }}
                          >
                            {item.title}
                          </h3>

                          {/* Decorative Line */}
                          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="h-px flex-1 max-w-[60px] md:max-w-[80px] bg-gradient-to-r from-[#c9b896] to-transparent group-hover:max-w-[90px] md:group-hover:max-w-[120px] transition-all duration-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9b896]" />
                            <div className="h-px w-4 md:w-6 bg-[#c9b896]/30" />
                          </div>

                          {/* Description */}
                          <p
                            className="text-sm md:text-base text-gray-700 leading-[1.7] md:leading-[1.8] font-light"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Left Accent on Hover */}
                      <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#005F73]/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#005F73]/20 to-transparent" />
                      </div>
                    </div>

                    {/* Side Vertical Line */}
                    <div className="absolute right-0 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#c9b896]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#005F73] to-[#004D5E] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 md:mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/80 mb-6 md:mb-8 font-light max-w-2xl mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contatti">
              <button
                className="px-8 md:px-10 py-3 md:py-4 bg-white text-[#005F73] rounded-full tracking-wide text-sm md:text-base hover:bg-[#c9b896] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-light uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.ctaButton}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
