"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { assetPath } from '@/lib/utils'
import Link from 'next/link'

export function About() {
  const { t } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
            <p
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.about.pageHeading}
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.about.name.split('\n').map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  {i < t.about.name.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <div className="w-16 h-[1px] bg-[#c9b896] mb-8 mx-auto md:mx-0" />
            <p
              className="text-xl md:text-2xl max-w-2xl leading-relaxed mx-auto md:mx-0"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, color: '#3a4a50' }}
            >
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Two Column */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={assetPath("/Doctor.jpg") || "/placeholder.svg"}
                  alt="Dottoressa Irene Maria Beconi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div
                className="absolute -bottom-5 left-8 px-6 py-3 border border-[#e8e2d8]"
                style={{ backgroundColor: '#FAF8F5' }}
              >
                <p
                  className="text-sm tracking-wide"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a506c' }}
                >
                  {t.about.experienceBadge}
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}
              >
                {t.about.intro}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
              >
                {t.about.description}
              </motion.p>
              <motion.div variants={fadeIn} className="pt-4 space-y-3">
                {t.about.keyHighlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c9b896]" />
                    <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400, color: '#3a4a50' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Heart, ...t.about.values[0] },
              { icon: Sparkles, ...t.about.values[1] },
              { icon: Award, ...t.about.values[2] },
              { icon: GraduationCap, ...t.about.values[3] }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group p-8 bg-white border border-[#e8e2d8] hover:border-[#c9b896] transition-all duration-500"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#1a506c]/10 group-hover:bg-[#1a506c] transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-[#1a506c] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-16" style={{ backgroundColor: '#1a506c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: t.about.stats.experience },
              { number: "5000+", label: t.about.stats.patients },
              { number: "100%", label: t.about.stats.dedication },
              { number: "24/7", label: t.about.stats.support }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, color: '#c9b896' }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p
              variants={fadeIn}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              Formazione
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.about.formationTitle}
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-16 h-[1px] bg-[#c9b896] mb-12"
            />
            <div className="space-y-4">
              {t.about.formation.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-6 p-6 bg-white border border-[#e8e2d8] hover:border-[#c9b896] transition-all duration-300 group"
                >
                  <span
                    className="text-2xl font-light leading-none mt-1"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,184,150,0.5)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="text-base md:text-lg leading-relaxed flex-1"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#3a4a50' }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#1a506c' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl md:text-4xl text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.cta.title}
            </h3>
            <p
              className="text-base text-white/70 mb-10 max-w-xl mx-auto"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            >
              {t.about.cta.subtitle}
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.about.cta.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
