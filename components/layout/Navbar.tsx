"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'
import Image from 'next/image'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: t.nav.home, href: 'home' },
    { label: t.nav.about, href: 'chi-sono' },
    { label: t.nav.services, href: 'servizi' },
    { label: t.nav.gallery, href: 'galleria' },
    { label: t.nav.contact, href: 'contatti' },
  ]

  return (
    <>
      {/* Site Header - 2 Layer Layout - ALWAYS VISIBLE */}
      <header className="site-header fixed top-0 left-0 right-0 z-50 relative">
        {/* Header Logo (desktop) - spans topbar + navbar */}
        <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
          {/* Align logo to the same centered container as topbar/navbar content */}
          <div className="container mx-auto px-6 h-full flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="h-full py-2 flex items-center translate-x-6 pointer-events-auto"
              aria-label="Go to top"
            >
              <Image
                src={assetPath("/logo-full.png")}
                alt="Logo"
                width={240}
                height={120}
                priority
                sizes="(max-width: 1280px) 150px, 200px"
                className="h-full w-auto max-w-[200px] xl:max-w-[240px] object-contain object-left"
              />
            </button>
          </div>
        </div>
        
        {/* Top Bar - Utility Strip - ALWAYS VISIBLE */}
        <div className="topbar bg-[#3A7884] relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center h-9">
              <div className="text-white/90 text-[10px] tracking-wide text-center">
                <span>Via del Montone numero 34, Firenze - Sectilale was oftintone - </span>
                <a href="tel:+393390512456" className="hover:text-brand-gold transition-colors font-semibold">
                  339 05512456
                </a>
              </div>
            </div>
          </div>
          {/* Centered short border line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-white/10"></div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="navbar bg-[#3A7884] shadow-lg relative">
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center justify-between h-16">
              {/* Left spacer so desktop nav stays centered while logo is absolutely positioned */}
              <div className="hidden lg:block w-[150px] xl:w-[200px] shrink-0" aria-hidden="true" />

              {/* Logo (mobile/tablet) - contained in navbar */}
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center shrink-0 lg:hidden"
                aria-label="Go to top"
              >
                <Image
                  src={assetPath("/logo-full.png")}
                  alt="Logo"
                  width={200}
                  height={80}
                  priority
                  sizes="(max-width: 640px) 170px, 200px"
                  className="h-12 w-auto sm:h-14 object-contain object-left"
                />
              </button>
              
              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="nav-link text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:text-brand-gold transition-all duration-300 relative group py-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Right Side - Language Toggle & CTA */}
              <div className="nav-actions hidden lg:flex items-center gap-6">
                <LanguageToggle isScrolled={false} />
                
                <button
                  onClick={() => scrollToSection('contatti')}
                  className="cta-button border-2 border-brand-gold text-brand-gold px-8 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {t.nav.cta}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white ml-auto z-10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu lg:hidden bg-[#2D6974] border-t border-white/10">
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded transition-colors uppercase text-sm tracking-wider"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <LanguageToggle isScrolled={false} />
                  <button
                    onClick={() => scrollToSection('contatti')}
                    className="w-full border-2 border-brand-gold text-brand-gold px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold hover:text-white transition-all"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {t.nav.cta}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Golden Decorative Bar under navbar */}
          <div className="golden-bar absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60"></div>
        </nav>
      </header>

      <style jsx>{`
        /* Visual Polish */
        :global(.navbar) {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* Golden bar styling */
        :global(.golden-bar) {
          box-shadow: 0 2px 8px rgba(192, 155, 131, 0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          :global(.logo-badge) {
            left: 1rem !important;
          }
          
          :global(.logo-badge img) {
            width: 140px !important;
          }
        }
      `}</style>
    </>
  )
}
