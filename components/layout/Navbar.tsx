"use client"

import { useState } from 'react'
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

  // Helper function to check if a path is active (handles trailing slashes)
  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedPath = path.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedPath
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav 
        className="w-full relative"
        style={{ backgroundColor: '#068c8c' }}
      >
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-stretch">
            {/* Logo - spans both top bar and main navbar */}
            <div className="flex items-center pr-8">
              <Link href="/">
                <div className="relative w-24 h-24">
                  <Image
                    src={assetPath("/logo-combined.png")}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Right side - Contact bar and navigation */}
            <div className="flex-1 flex flex-col">
              {/* Top contact bar */}
              <div className="border-b border-white/20 py-2">
                <div className="flex justify-end items-center gap-4 text-white text-xs font-light">
                  <span className="hidden xl:inline">Via del Montone numero 34. Firenze - Secilafè wae effustae</span>
                  <span>+39 05512456</span>
                </div>
              </div>

              {/* Main navbar */}
              <div className="py-4">
                <div className="flex items-center justify-center gap-12">
                  <ul className="flex items-center gap-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <li>
                      <Link 
                        href="/" 
                        className={`hover:opacity-80 transition-all text-sm font-normal tracking-wide ${
                          isActive('/') ? 'text-[#c9b896] underline decoration-2 underline-offset-8 decoration-[#c9b896]' : 'text-white'
                        }`}
                      >
                        {t.nav.home.toUpperCase()}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/chi-sono" 
                        className={`hover:opacity-80 transition-all text-sm font-normal tracking-wide ${
                          isActive('/chi-sono') ? 'text-[#c9b896] underline decoration-2 underline-offset-8 decoration-[#c9b896]' : 'text-white'
                        }`}
                      >
                        {t.nav.about.toUpperCase()}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/servizi" 
                        className={`hover:opacity-80 transition-all text-sm font-normal tracking-wide ${
                          isActive('/servizi') ? 'text-[#c9b896] underline decoration-2 underline-offset-8 decoration-[#c9b896]' : 'text-white'
                        }`}
                      >
                        {t.nav.services.toUpperCase()}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/galleria" 
                        className={`hover:opacity-80 transition-all text-sm font-normal tracking-wide ${
                          isActive('/galleria') ? 'text-[#c9b896] underline decoration-2 underline-offset-8 decoration-[#c9b896]' : 'text-white'
                        }`}
                      >
                        {t.nav.gallery.toUpperCase()}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contatti" 
                        className={`hover:opacity-80 transition-all text-sm font-normal tracking-wide ${
                          isActive('/contatti') ? 'text-[#c9b896] underline decoration-2 underline-offset-8 decoration-[#c9b896]' : 'text-white'
                        }`}
                      >
                        {t.nav.contact.toUpperCase()}
                      </Link>
                    </li>
                  </ul>

                  {/* Language Toggle instead of Search */}
                  <div className="flex items-center">
                    <LanguageToggle isScrolled={false} />
                  </div>

                  {/* Prenota button */}
                  <Link href="/contatti">
                    <button 
                      className="px-8 py-3 text-white tracking-wide hover:opacity-80 transition-all text-sm font-light"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #c9b896',
                        backgroundColor: 'transparent'
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
                    src={assetPath("/logo-combined.png")}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:opacity-80 transition-opacity"
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
                        className="w-full px-8 py-4 text-white tracking-wide hover:opacity-80 transition-all text-base font-light"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          border: '2px solid #c9b896',
                          backgroundColor: 'transparent'
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
        
        {/* Golden Decorative Bar under navbar */}
        <div className="golden-bar absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9b896] to-transparent opacity-60"></div>
      </nav>
    </>
  )
}
