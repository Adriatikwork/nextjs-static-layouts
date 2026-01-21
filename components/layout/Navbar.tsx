"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/LanguageContext'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">IB</span>
            </div>
            <span className={`font-semibold text-sm md:text-base transition-colors ${
              isScrolled ? 'text-darkText' : 'text-white'
            }`}>
              {t.hero.name}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  isScrolled ? 'text-darkText' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Button
              onClick={() => scrollToSection('prenota')}
              className="bg-teal hover:bg-teal-dark text-white"
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-darkText' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-darkText hover:text-teal font-medium py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t space-y-4">
              <LanguageToggle />
              <Button
                onClick={() => scrollToSection('prenota')}
                className="w-full bg-teal hover:bg-teal-dark text-white"
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
