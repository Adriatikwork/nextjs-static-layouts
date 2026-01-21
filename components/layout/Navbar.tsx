"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/LanguageContext'
import { assetPath } from '@/lib/utils'
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: t.nav.home, href: 'home' },
    { label: t.nav.about, href: 'chi-sono' },
    { label: t.nav.services, href: 'servizi' },
    { label: t.nav.gallery, href: 'galleria' },
    { label: t.nav.contact, href: 'contatti' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-elegant-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name - Classical Style */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            {/* Line Art Logo */}
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
              <Image 
                src={assetPath("/logo.svg")}
                alt="Logo" 
                width={48} 
                height={48}
                className={`transition-all ${isScrolled ? 'opacity-100' : 'brightness-0 invert'}`}
              />
            </div>
            <span className={`font-semibold text-sm md:text-base transition-colors ${
              isScrolled ? 'text-brand-dark-text' : 'text-white'
            }`} style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.08em', fontSize: '0.85rem' }}>
              {t.hero.name}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-brand-gold relative group ${
                  isScrolled ? 'text-brand-dark-text' : 'text-white'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side - Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle isScrolled={isScrolled} />
            <Button
              onClick={() => scrollToSection('prenota')}
              className={`transition-all duration-300 shadow-md hover:shadow-lg ${
                isScrolled
                  ? 'bg-brand-teal hover:bg-brand-teal/90 text-white'
                  : 'bg-white text-brand-teal hover:bg-cream'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', fontWeight: 500 }}
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-brand-dark-text' : 'text-white'
            }`}
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
        <div className="lg:hidden bg-white border-t border-brand-gold/20 shadow-elegant-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-brand-dark-text hover:bg-brand-cream/50 rounded-md transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-brand-gold/20 space-y-3">
              <LanguageToggle isScrolled={true} />
              <Button
                onClick={() => scrollToSection('prenota')}
                className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
              >
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
