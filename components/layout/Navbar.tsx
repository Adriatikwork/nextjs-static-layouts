"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'
import { assetPath } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect if we're on homepage
  const isHomePage = pathname === '/'

  // Handle scroll for navbar transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedPath = path.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedPath
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Modern glassmorphic navbar styling
  const getNavbarStyles = () => {
    if (isHomePage && !isScrolled) {
      // Transparent glassmorphic navbar over hero
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }
    }
    // Solid navbar when scrolled or on other pages
    return {
      backgroundColor: '#068c8c',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full transition-all duration-500"
      style={{ ...getNavbarStyles(), zIndex: isMenuOpen ? 9997 : 50 }}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={assetPath("/logo-combined.png") || "/placeholder.svg"}
                alt="Logo"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            {[
              { href: '/', label: t.nav.home },
              { href: '/chi-sono', label: t.nav.about },
              { href: '/servizi', label: t.nav.services },
              { href: '/galleria', label: t.nav.gallery },
              { href: '/contatti', label: t.nav.contact },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-white text-sm tracking-widest uppercase font-light transition-all duration-300 hover:text-[#c9b896] group ${
                    isActive(link.href) ? 'text-[#c9b896]' : ''
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c9b896] transition-all duration-300 group-hover:w-full ${
                    isActive(link.href) ? 'w-full' : ''
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center gap-6">
            <LanguageToggle isScrolled={true} />

            <Link href="/contatti">
              <button
                className="group relative px-8 py-3 text-white tracking-widest text-sm uppercase font-light overflow-hidden transition-all duration-300"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  border: '2px solid #c9b896',
                  backgroundColor: isHomePage && !isScrolled ? 'transparent' : '#c9b896',
                }}
              >
                <span className="relative z-10">{t.nav.cta}</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <div className="relative w-14 h-14">
                <Image
                  src={assetPath("/logo-combined.png") || "/placeholder.svg"}
                  alt="Logo"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-[#c9b896] transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                style={{ zIndex: 9998 }}
                onClick={closeMenu}
              />

              {/* Menu Panel */}
              <div
                className="fixed top-0 right-0 h-full w-full max-w-sm shadow-2xl overflow-y-auto animate-slide-in"
                style={{
                  background: 'linear-gradient(135deg, #068c8c 0%, #0a7575 100%)',
                  zIndex: 9999,
                }}
              >
                {/* Close button */}
                <div className="flex justify-end p-4 border-b border-white/10">
                  <button
                    onClick={closeMenu}
                    className="text-white p-2 hover:text-[#c9b896] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-7 h-7" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="py-8">
                  <ul className="space-y-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {[
                      { href: '/', label: t.nav.home },
                      { href: '/chi-sono', label: t.nav.about },
                      { href: '/servizi', label: t.nav.services },
                      { href: '/galleria', label: t.nav.gallery },
                      { href: '/contatti', label: t.nav.contact },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`block px-8 py-4 text-lg tracking-wider uppercase transition-all ${
                            isActive(link.href)
                              ? 'text-[#c9b896] bg-white/10 border-r-4 border-[#c9b896]'
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896] hover:pl-10'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Language Toggle */}
                <div className="px-8 py-6 border-t border-white/10">
                  <LanguageToggle isScrolled={false} />
                </div>

                {/* CTA button */}
                <div className="px-8 py-6">
                  <Link href="/contatti" onClick={closeMenu}>
                    <button
                      className="w-full px-8 py-4 text-white tracking-widest uppercase hover:opacity-90 transition-all text-base font-light"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #c9b896',
                        backgroundColor: '#c9b896',
                        boxShadow: '0 4px 16px rgba(201, 184, 150, 0.4)',
                      }}
                    >
                      {t.nav.bookAppointment}
                    </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="px-8 py-6 border-t border-white/10 mt-auto">
                  <div className="space-y-3 text-white/80 text-sm font-light">
                    <p>Via del Montone numero 34</p>
                    <p>Firenze</p>
                    <a
                      href="tel:+3905512456"
                      className="block hover:text-[#c9b896] transition-colors"
                    >
                      +39 05512456
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile slide-in animation */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}
