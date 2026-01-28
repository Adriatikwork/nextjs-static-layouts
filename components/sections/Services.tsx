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
  const [activeTab, setActiveTab] = useState<'dental' | 'aesthetic'>('dental')

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
    <section className="w-full bg-[#f8f7f5] pt-16 sm:pt-[72px] lg:pt-20">
      {/* Static Section Header with Tab Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-lg shadow-sm"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <span
              className="text-sm tracking-[0.3em] uppercase text-gray-500 font-light text-center md:text-left"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.pageHeading}
            </span>

            {/* Tab Toggle */}
            <div className="flex gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('dental')}
                className={`px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'dental'
                    ? 'bg-[#068c8c] text-white shadow-md'
                    : 'bg-transparent text-gray-600'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.dentalTab}
              </button>
              <button
                onClick={() => setActiveTab('aesthetic')}
                className={`px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'aesthetic'
                    ? 'bg-[#068c8c] text-white shadow-md'
                    : 'bg-transparent text-gray-600'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.aestheticTab}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pt-12 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#068c8c]/10 to-[#c9b896]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#068c8c]" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-normal text-gray-900 mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm text-gray-600 mb-6 leading-relaxed font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9b896] mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#068c8c] flex items-center justify-center">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Our Approach Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-[#c9b896] mb-4 font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.journeyTitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-normal text-gray-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.services.journeySubtitle}
            </motion.h2>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#c9b896]/50 to-transparent -z-10" />
                  )}

                  {/* Step Number */}
                  <div 
                    className="text-6xl font-light text-[#068c8c]/10 mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#068c8c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#068c8c]" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-normal text-gray-900 mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm text-gray-600 leading-relaxed font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Simple Modern Divider */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Il Mio Approccio Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-normal text-[#c9b896] mb-4 tracking-wide uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.approachTitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-700 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.services.approachSubtitle}
              </motion.p>
            </div>

            {/* Approach Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.approach.items.map((item, index) => {
                const approachIcons = [
                  { icon: FaHeart, color: '#068c8c' },
                  { icon: HiCheckCircle, color: '#c9b896' },
                  { icon: HiSparkles, color: '#068c8c' },
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
                    className="bg-[#f8f7f5] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                  >
                    <div className="flex items-start gap-6">
                      {/* Premium Icon Circle */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <ApproachIcon className="w-8 h-8" style={{ color }} />
                      </div>

                      <div>
                        {/* Title */}
                        <h3 
                          className="text-2xl font-normal text-[#c9b896] mb-4 uppercase tracking-wide"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {item.title}
                        </h3>

                        {/* Decorative Line */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-px w-12 bg-gradient-to-r from-[#c9b896] to-transparent" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c9b896]" />
                        </div>

                        {/* Description */}
                        <p 
                          className="text-gray-700 leading-relaxed font-light"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#068c8c] to-[#057575] py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-normal text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.services.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 mb-8 font-light max-w-2xl mx-auto"
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
                className="px-10 py-4 bg-white text-[#068c8c] rounded-full tracking-wide text-base hover:bg-[#c9b896] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-light uppercase"
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
