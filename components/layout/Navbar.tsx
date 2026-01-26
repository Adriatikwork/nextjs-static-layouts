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
    if (!isHomePage) return
    
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 100)
      }
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Helper function to check if a path is active (handles trailing slashes)
  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedPath = path.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedPath
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Determine navbar style based on page and scroll state
  // Glassmorphic dark navbar for homepage hero, teal for other states
  const navbarBgColor = isHomePage && !isScrolled ? 'rgba(0, 0, 0, 0.4)' : '#068c8c'
  const navbarPosition = isHomePage && !isScrolled ? 'absolute' : 'relative'
  const textColor = 'white' // Always white text for better contrast
  const logoFilter = 'brightness(0) saturate(100%) invert(100%)' // Always white logo
  
  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${isHomePage && !isScrolled ? 'absolute top-0 left-0 right-0' : 'relative'}`}
      style={{
        backgroundColor: navbarBgColor,
        backdropFilter: isHomePage && !isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: isHomePage && !isScrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-stretch">
          {/* Logo - spans both top bar and main navbar */}
          <div className="flex items-center pr-8">
            <Link href="/">
              <div className="relative w-24 h-24 transition-all duration-300">
                <Image
                  src={assetPath("/logo-combined.png") || "/placeholder.svg"}
                  alt="Logo"
                  fill
                  className="object-contain transition-all duration-300"
                  style={{ filter: logoFilter }}
                />
              </div>
            </Link>
          </div>

          {/* Right side - Contact bar and navigation */}
          <div className="flex-1 flex flex-col">
            {/* Top contact bar */}
            <div
              className="py-2 transition-all duration-300"
              style={{
                borderBottom: `1px solid ${isHomePage && !isScrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.2)'}`
              }}
            >
              <div className="flex justify-end items-center gap-4 text-xs font-light transition-colors duration-300" style={{ color: textColor }}>
                <span className="hidden xl:inline">Via del Montone numero 34. Firenze</span>
                <span>+39 05512456</span>
              </div>
            </div>

            {/* Main navbar */}
            <div className="py-4">
              <div className="flex items-center justify-center gap-12">
                <ul className="flex items-center gap-8 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif', color: textColor }}>
                  <li>
                    <Link 
                      href="/" 
                      className={`hover:opacity-70 transition-all text-sm font-normal tracking-wide ${
                        isActive('/') ? 'opacity-60' : ''
                      }`}
                      style={{ color: textColor }}
                    >
                      {t.nav.home.toUpperCase()}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/chi-sono" 
                      className={`hover:opacity-70 transition-all text-sm font-normal tracking-wide ${
                        isActive('/chi-sono') ? 'opacity-60' : ''
                      }`}
                      style={{ color: textColor }}
                    >
                      {t.nav.about.toUpperCase()}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servizi" 
                      className={`hover:opacity-70 transition-all text-sm font-normal tracking-wide ${
                        isActive('/servizi') ? 'opacity-60' : ''
                      }`}
                      style={{ color: textColor }}
                    >
                      {t.nav.services.toUpperCase()}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/galleria" 
                      className={`hover:opacity-70 transition-all text-sm font-normal tracking-wide ${
                        isActive('/galleria') ? 'opacity-60' : ''
                      }`}
                      style={{ color: textColor }}
                    >
                      {t.nav.gallery.toUpperCase()}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contatti" 
                      className={`hover:opacity-70 transition-all text-sm font-normal tracking-wide ${
                        isActive('/contatti') ? 'opacity-60' : ''
                      }`}
                      style={{ color: textColor }}
                    >
                      {t.nav.contact.toUpperCase()}
                    </Link>
                  </li>
                </ul>

                {/* Language Toggle */}
                <div className="flex items-center">
                  <LanguageToggle isScrolled={!(isHomePage && !isScrolled)} />
                </div>

                {/* Prenota button */}
                <Link href="/contatti">
                  <button
                    className="px-8 py-3 tracking-wide hover:opacity-90 transition-all text-sm font-light"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      border: isHomePage && !isScrolled ? '1px solid #B06F69' : `1px solid ${textColor}`,
                      backgroundColor: isHomePage && !isScrolled ? '#B06F69' : 'transparent',
                      color: textColor,
                      boxShadow: isHomePage && !isScrolled ? '0 2px 8px rgba(176, 111, 105, 0.3)' : 'none'
                    }}
                  >
                    {t.nav.cta.toUpperCase()}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" onClick={closeMenu}>
                <div className="relative w-16 h-16">
                  <Image
                    src={assetPath("/logo-combined.png") || "/placeholder.svg"}
                    alt="Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    style={{ filter: logoFilter }}
                  />
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="p-2 hover:opacity-80 transition-all duration-300"
                style={{ color: textColor }}
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
              <div 
                className="fixed inset-0 z-50"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onClick={closeMenu}
              >
                {/* Mobile Menu Panel */}
                <div 
                  className="absolute top-0 right-0 h-full w-4/5 max-w-sm shadow-2xl overflow-y-auto"
                  style={{ backgroundColor: '#068c8c' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <div className="flex justify-end p-4 border-b border-white/20">
                    <button
                      onClick={closeMenu}
                      className="text-white p-2 hover:opacity-80 transition-opacity"
                      aria-label="Close menu"
                    >
                      <X className="w-7 h-7" />
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="p-6 border-b border-white/20">
                    <div className="space-y-2 text-white text-sm font-light">
                      <p>Via del Montone numero 34</p>
                      <p>Firenze</p>
                      <a href="tel:+3905512456" className="block hover:text-[#c9b896] transition-colors">
                        +39 05512456
                      </a>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="py-6">
                    <ul className="space-y-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <li>
                        <Link 
                          href="/"
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg font-normal tracking-wide transition-all ${
                            isActive('/') 
                              ? 'text-[#c9b896] bg-white/10' 
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896]'
                          }`}
                        >
                          {t.nav.home.toUpperCase()}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/chi-sono"
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg font-normal tracking-wide transition-all ${
                            isActive('/chi-sono') 
                              ? 'text-[#c9b896] bg-white/10' 
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896]'
                          }`}
                        >
                          {t.nav.about.toUpperCase()}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/servizi"
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg font-normal tracking-wide transition-all ${
                            isActive('/servizi') 
                              ? 'text-[#c9b896] bg-white/10' 
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896]'
                          }`}
                        >
                          {t.nav.services.toUpperCase()}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/galleria"
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg font-normal tracking-wide transition-all ${
                            isActive('/galleria') 
                              ? 'text-[#c9b896] bg-white/10' 
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896]'
                          }`}
                        >
                          {t.nav.gallery.toUpperCase()}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/contatti"
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg font-normal tracking-wide transition-all ${
                            isActive('/contatti') 
                              ? 'text-[#c9b896] bg-white/10' 
                              : 'text-white hover:bg-white/5 hover:text-[#c9b896]'
                          }`}
                        >
                          {t.nav.contact.toUpperCase()}
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Language Toggle */}
                  <div className="px-6 py-4 border-t border-white/20">
                    <LanguageToggle isScrolled={false} />
                  </div>

                  {/* Prenota button */}
                  <div className="px-6 py-6">
                    <Link href="/contatti" onClick={closeMenu}>
                      <button
                        className="w-full px-8 py-4 text-white tracking-wide hover:opacity-90 transition-all text-base font-light"
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          border: '2px solid #B06F69',
                          backgroundColor: '#B06F69',
                          boxShadow: '0 2px 8px rgba(176, 111, 105, 0.3)'
                        }}
                      >
                        {t.nav.bookAppointment.toUpperCase()}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      
      {/* Decorative Bar under navbar - Warm accent for homepage hero, gold for other states */}
      {isHomePage && !isScrolled ? (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B06F69]/40 to-transparent" />
      ) : (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9b896] to-transparent opacity-60" />
      )}
    </nav>
  )
}
