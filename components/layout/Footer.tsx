"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-dark-text text-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      
      {/* Decorative logo */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Image 
          src="/logo.svg" 
          alt="" 
          width={200} 
          height={200}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={48} 
                height={48}
                className="brightness-0 invert opacity-80"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.08em' }}>
              {t.hero.name}
            </h3>
            <p className="text-brand-cream/80 mb-4 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem' }}>
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-2 text-brand-cream/70 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <MapPin className="w-4 h-4" />
              <span>{t.hero.location}</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-gold" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}>
              Links
            </h4>
            <div className="space-y-3">
              {[
                { label: t.nav.about, href: 'chi-sono' },
                { label: t.nav.services, href: 'servizi' },
                { label: t.nav.gallery, href: 'galleria' },
                { label: t.nav.contact, href: 'contatti' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-brand-cream/70 hover:text-brand-gold transition-colors text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-gold" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}>
              Contatti
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-cream/70 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {t.contact.info.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-cream/70 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {t.contact.info.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-cream/70 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {t.contact.info.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-brand-cream/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              © {new Date().getFullYear()} {t.hero.name}. Tutti i diritti riservati.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'Note Legali', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
