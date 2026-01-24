"use client"

import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer 
      className="text-white py-16 relative overflow-hidden"
      style={{ backgroundColor: '#068c8c' }}
    >
      {/* Decorative background */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(to right, transparent, #c9b896, transparent)' }}
      />
      
      {/* Decorative logo */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Image 
          src="/images/logo-icon.png"
          alt="" 
          width={200} 
          height={200}
          className="brightness-0 invert"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo-icon.png" 
                alt="Logo" 
                width={48} 
                height={48}
                className="brightness-0 invert opacity-80"
              />
            </div>
            <h3 
              className="text-xl mb-3 font-normal tracking-wider"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dottoressa Irene Maria Beconi
            </h3>
            <p 
              className="text-white/80 mb-4 leading-relaxed font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Odontoiatria e Medicina Estetica del Volto
            </p>
            <div 
              className="flex items-center gap-2 text-white/70 text-sm font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <MapPin className="w-4 h-4" />
              <span>Firenze</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 
              className="text-lg mb-6 font-normal tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif', color: '#c9b896' }}
            >
              Links
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Chi Sono', href: '/chi-sono' },
                { label: 'Servizi', href: '/servizi' },
                { label: 'Galleria', href: '/galleria' },
                { label: 'Contatti', href: '/contatti' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-[#c9b896] transition-colors text-sm font-light"
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
              className="text-lg mb-6 font-normal tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif', color: '#c9b896' }}
            >
              Contatti
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c9b896' }} />
                <div>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    +39 055 12456
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c9b896' }} />
                <div>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    info@dottoressamariabeconi.it
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c9b896' }} />
                <div>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Via del Montone numero 34<br />
                    50100 Firenze
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p 
              className="text-white/60 text-sm font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              © {new Date().getFullYear()} Dottoressa Irene Maria Beconi. Tutti i diritti riservati.
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
                  className="text-white/60 hover:text-[#c9b896] transition-colors text-sm font-light"
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
