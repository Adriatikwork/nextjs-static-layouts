"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { assetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'
import { ArrowRight, Calendar, Stethoscope, Sparkles, Users } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero-section" className="relative w-full">
      {/* ===== HERO ===== */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0, zIndex: 1 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 80, 108, 0.5) 0%, rgba(13, 64, 86, 0.6) 50%, rgba(0, 0, 0, 0.55) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-[10] min-h-screen flex flex-col justify-center px-6 lg:px-16">
          <div className="max-w-5xl mx-auto w-full text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Small label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#c9b896] text-sm tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
              >
                {t.hero.location}
              </motion.p>

              {/* Main heading */}
              <div className="relative inline-block mx-auto">
                {/* Subtle glass effect */}
                <div
                  className="absolute -inset-4 rounded-lg -z-10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  {t.hero.name}
                </motion.h1>
              </div>

              {/* Elegant Ornamental Divider - smaller, centered under name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center py-2 md:py-4"
              >
                {/* Mobile divider - shorter version */}
                <img
                  src="/images/divider-phone.svg"
                  alt="Decorative divider"
                  className="block md:hidden w-full max-w-[260px] h-auto opacity-90"
                />
                {/* Desktop divider - full version */}
                <img
                  src="/images/divider.svg"
                  alt="Decorative divider"
                  className="hidden md:block w-full max-w-md h-auto opacity-90"
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300 }}
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
              >
                {t.hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center"
              >
                <Link href="/contatti" className="w-full sm:w-auto">
                  <button
                    className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                  >
                    {t.hero.ctaPrimary}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/servizi" className="w-full sm:w-auto">
                  <button
                    className="group flex items-center justify-center gap-3 w-full px-8 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-white/60 hover:bg-white/5"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
                  >
                    {t.hero.ctaSecondary}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Slide indicators - bottom center */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[15] flex gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-12 h-[2px] transition-all duration-500 ${
                  currentSlide === index ? 'bg-[#c9b896]' : 'bg-white/30'
                }`}>
                  {currentSlide === index && (
                    <div className="h-full bg-white rounded-full" style={{ animation: 'progress 6s linear' }} />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Scroll hint - bottom right */}
          <div className="hidden md:flex absolute bottom-12 right-6 lg:right-16 z-[15] items-center gap-3 text-white/50">
            <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Geist, sans-serif' }}>
              {t.hero.scroll}
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="w-full py-24 md:py-32" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.hero.whyChooseUsTitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.hero.whyChooseUsSubtitle}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-[1px] bg-[#c9b896] origin-left"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: assetPath("/Doctor.jpg"),
                title: t.hero.cards.aboutTitle,
                desc: t.hero.cards.aboutBullet1,
                href: '/chi-sono',
              },
              {
                image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
                title: t.hero.cards.odontoiatriaTitle,
                desc: t.hero.cards.odontoiatriaDesc,
                href: '/servizi',
              },
              {
                image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
                title: t.hero.cards.medicinaEsteticaTitle,
                desc: t.hero.cards.medicinaEsteticaDesc,
                href: '/servizi',
              },
              {
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
                title: t.hero.cards.consulenzaTitle,
                desc: t.hero.cards.consulenzaDesc,
                href: '/contatti',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={card.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-5">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3
                    className="text-xl mb-2 group-hover:text-[#1a506c] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
                  >
                    {card.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-[#1a506c] text-sm tracking-wide group-hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                  >
                    {t.hero.cards.scopriDiPiu}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div className="w-full py-24 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          {/* Header - centered */}
          <div className="text-center mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.hero.howItWorksTitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] max-w-3xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.hero.howItWorksSubtitle}
            </motion.h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { icon: Calendar, num: '01', title: t.hero.step1Title, desc: t.hero.step1Desc },
              { icon: Stethoscope, num: '02', title: t.hero.step2Title, desc: t.hero.step2Desc },
              { icon: Sparkles, num: '03', title: t.hero.step3Title, desc: t.hero.step3Desc },
              { icon: Users, num: '04', title: t.hero.step4Title, desc: t.hero.step4Desc },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Number */}
                <span
                  className="text-6xl font-light text-[#c9b896]/30 mb-4 block leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.num}
                </span>
                {/* Line */}
                <div className="w-8 h-[1px] bg-[#1a506c] mb-4" />
                {/* Title */}
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                >
                  {step.title}
                </h3>
                {/* Desc */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== QUOTE ===== */}
      <div className="w-full py-20 md:py-28" style={{ backgroundColor: '#1a506c' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed italic"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300 }}
          >
            {`"${t.hero.quote}"`}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-[1px] bg-[#c9b896] mx-auto mt-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#c9b896] text-sm tracking-[0.2em] uppercase mt-6"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
          >
            {t.hero.name}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
