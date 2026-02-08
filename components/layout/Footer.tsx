"use client"

import { Phone, Mail, Instagram, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a506c' }}>
      {/* Top line accent */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9b896]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20">
        {/* Top Row: Logo + Nav */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-16">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start max-w-xs lg:max-w-sm mx-auto lg:mx-0">
            <Image
              src={assetPath("/logo-combined.png") || "/placeholder.svg"}
              alt="Logo"
              width={200}
              height={80}
              className="brightness-0 invert opacity-70 mb-6"
            />
            <p
              className="text-sm leading-relaxed text-center lg:text-left"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}
            >
              {t.hero.description}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {/* Navigation */}
            <div>
              <h4
                className="text-xs uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600, color: '#c9b896' }}
              >
                {t.footer.linksTitle}
              </h4>
              <nav className="space-y-3">
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
                    className="block text-sm hover:text-[#c9b896] transition-colors duration-300"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600, color: '#c9b896' }}
              >
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#c9b896' }} />
                  <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.6)' }}>
                    {t.contact.info.phoneNumber}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#c9b896' }} />
                  <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.6)' }}>
                    {t.contact.info.emailAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4
                className="text-xs uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600, color: '#c9b896' }}
              >
                Social
              </h4>
              <a
                href="https://www.instagram.com/dr.ssa_irenembeconi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-[#c9b896] transition-colors duration-300"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.6)' }}
              >
                <Instagram className="w-4 h-4" style={{ color: '#c9b896' }} />
                @dr.ssa_irenembeconi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-6">
          <p className="text-xs text-center" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}>
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: t.footer.links.privacy, href: '#' },
              { label: t.footer.links.cookie, href: '#' },
              { label: t.footer.links.legal, href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs hover:text-[#c9b896] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
