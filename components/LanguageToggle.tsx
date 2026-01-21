"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Globe } from 'lucide-react'

interface LanguageToggleProps {
  isScrolled?: boolean
}

export function LanguageToggle({ isScrolled = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
        isScrolled 
          ? 'hover:bg-brand-teal/10 text-brand-dark-text' 
          : 'hover:bg-white/10 text-white'
      }`}
      aria-label="Toggle language"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase tracking-wider">{language}</span>
    </button>
  )
}
