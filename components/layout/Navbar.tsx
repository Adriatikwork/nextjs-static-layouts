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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detect if we're on homepage
  const isHomePage = pathname === '/'

  // Handle scroll for navbar transition and smart hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update scrolled state for navbar styling
      setIsScrolled(currentScrollY > 50)

      // Smart scroll behavior: hide on scroll down, show on scroll up
      if (currentScrollY < 10) {
        // Always show at top of page
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/chi-sono', label: t.nav.about },
    { href: '/servizi', label: t.nav.services },
    { href: '/galleria', label: t.nav.gallery },
    { href: '/contatti', label: t.nav.contact },
  ]

  return (
    <>
      <nav
        className={`fixed left-0 right-0 w-full transition-all duration-300 z-50 ${
          isVisible ? 'top-0' : '-top-24'
        }`}
        style={getNavbarStyles()}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between py-4">
            {/* Logo with Text */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={assetPath("/logo-icon.png") || "/placeholder.svg"}
                  alt="Logo"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </div>
              <div
                className="flex flex-col text-white text-xs xl:text-sm font-light tracking-wider leading-tight transition-colors duration-300 group-hover:text-[#c9b896] uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <span>Dottoressa Irene</span>
                <span>Maria Beconi</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-8 xl:gap-10" style={{ fontFamily: 'Playfair Display, serif' }}>
              {navLinks.map((link) => (
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
                  className="group relative px-6 xl:px-8 py-3 text-white tracking-widest text-sm uppercase font-light overflow-hidden transition-all duration-300 hover:shadow-lg"
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
            <div className="flex items-center justify-between py-3">
              {/* Logo with Text */}
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src={assetPath("/logo-icon.png") || "/placeholder.svg"}
                    alt="Logo"
                    fill
                    className="object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                  />
                </div>
                <div
                  className="flex flex-col text-white text-xs sm:text-sm font-light tracking-wider leading-tight uppercase"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span>Dottoressa Irene</span>
                  <span>Maria Beconi</span>
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-[#c9b896] transition-colors duration-300 z-50 relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside navbar for proper z-index layering */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            className="fixed top-0 right-0 h-full w-full max-w-sm shadow-2xl overflow-y-auto z-50 lg:hidden"
            style={{
              background: 'linear-gradient(135deg, #068c8c 0%, #0a7575 100%)',
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b border-white/10">
              <button
                onClick={closeMenu}
                className="text-white p-2 hover:text-[#c9b896] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-8">
              <ul className="space-y-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {navLinks.map((link) => (
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
    </>
  )
}
