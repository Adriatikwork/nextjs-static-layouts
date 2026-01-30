"use client"

import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer 
      className="bg-brand-dark-text text-white py-16 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
      />
      
      {/* Decorative logo */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Image 
          src={assetPath("/logo-icon.png") || "/placeholder.svg"}
          alt="" 
          width={200} 
          height={200}
          className="brightness-0 invert"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <Image
                src={assetPath("/logo-combined.png") || "/placeholder.svg"}
                alt="Logo"
                width={250}
                height={100}
                className="brightness-0 invert opacity-80"
              />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 
              className="text-lg mb-6 text-brand-gold font-normal tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.footer.linksTitle}
            </h4>
            <div className="space-y-3">
              {[
                { label: t.footer.links.home, href: '/' },
                { label: t.footer.links.about, href: '/chi-sono' },
                { label: t.footer.links.services, href: '/servizi' },
                { label: t.footer.links.gallery, href: '/galleria' },
                { label: t.footer.links.contact, href: '/contatti' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-brand-cream/70 hover:text-brand-gold transition-colors text-sm font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 
              className="text-lg mb-6 text-brand-gold font-normal tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p 
                    className="text-brand-cream/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.contact.info.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p 
                    className="text-brand-cream/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.contact.info.emailAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p 
                    className="text-brand-cream/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.contact.info.locationAddress}<br />
                    {t.contact.info.locationCity}
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
            <p 
              className="text-brand-cream/60 text-sm font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {[
                { label: t.footer.links.privacy, href: '#' },
                { label: t.footer.links.cookie, href: '#' },
                { label: t.footer.links.legal, href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
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
