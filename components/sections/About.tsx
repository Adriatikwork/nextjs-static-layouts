"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart, Sparkles } from 'lucide-react'
import { assetPath } from '@/lib/utils'

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
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      {/* Hero Section - Minimal & Bold */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#005F73] mb-6 font-light">
              {t.about.pageHeading}
            </p>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-8 leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.name.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.about.name.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <div className="my-12" />
            <p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Doctor Image - Two Column Layout */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#f5f1ed] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={assetPath("/Doctor.jpg")}
                  alt="Dottoressa Irene Maria Beconi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl border border-gray-100">
                <p
                  className="text-sm text-[#005F73] font-normal tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.about.experienceBadge}
                </p>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-gray-800 leading-relaxed font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.about.intro}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-gray-700 leading-relaxed font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t.about.description}
              </motion.p>

              {/* Key Highlights */}
              <motion.div variants={fadeIn} className="pt-6 space-y-4">
                {t.about.keyHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9b896]" />
                    <p className="text-gray-700 font-light">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid - Modern Cards */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
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
                className="group text-center p-8 rounded-lg hover:bg-[#f5f1ed] transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#005F73]/10 flex items-center justify-center group-hover:bg-[#005F73] transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-[#005F73] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 
                  className="text-xl mb-3 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#005F73] to-[#004D5E]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: t.about.stats.experience },
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
                  className="text-4xl md:text-5xl font-normal text-[#c9b896] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm text-white/80 uppercase tracking-wide font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section - Elegant List */}
      <section className="py-16 px-4 bg-[#f5f1ed]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl mb-12 text-center font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.formationTitle}
            </motion.h2>
            <div className="space-y-4">
              {t.about.formation.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-6 p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#c9b896]/30"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9b896]/20 to-[#005F73]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-[#c9b896] text-lg font-normal"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-lg md:text-xl text-gray-800 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#005F73] to-[#004D5E] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-4xl md:text-5xl mb-6 font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.cta.title}
            </h3>
            <p className="text-lg mb-10 text-white/90 font-light max-w-2xl mx-auto">
              {t.about.cta.subtitle}
            </p>
            <a
              href="/contatti"
              className="inline-block px-12 py-4 bg-[#c9b896] text-[#1a1a1a] rounded-full hover:bg-[#d4b19a] transition-all duration-300 hover:scale-105 font-normal tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.about.cta.button}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
