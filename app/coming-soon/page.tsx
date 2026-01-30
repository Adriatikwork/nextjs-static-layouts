"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { assetPath } from '@/lib/utils'

export default function ComingSoonPage() {
  return (
    <div className="fixed inset-0 bg-[#005F73] flex items-center justify-center px-4 py-8 relative overflow-hidden z-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src={assetPath('/logo-combined.png')}
              alt="Dottoressa Irene Maria Beconi"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8"
        >
          {/* Coming Soon Badge */}
          <div className="inline-block">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs tracking-[0.3em] uppercase text-white font-light border border-white/30">
              Prossimamente
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Il Nostro Nuovo Sito<br />È In Arrivo
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Stiamo preparando qualcosa di speciale. Il nostro nuovo sito web sarà presto disponibile con un'esperienza completamente rinnovata.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <div className="w-2 h-2 rounded-full bg-white/70" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/50" />
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <motion.a
              href="tel:+390551234567"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white/70 mb-2 uppercase tracking-wider">Telefono</p>
              <p className="text-base font-light text-white">+39 055 12456</p>
            </motion.a>

            <motion.a
              href="mailto:info@dottoressamariabeconi.it"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white/70 mb-2 uppercase tracking-wider">Email</p>
              <p className="text-base font-light text-white break-all">info@dottoressamariabeconi.it</p>
            </motion.a>
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-white/60 pt-12 font-light"
          >
            © 2025 Dottoressa Irene Maria Beconi. Tutti i diritti riservati.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
