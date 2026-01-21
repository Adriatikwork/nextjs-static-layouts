"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-teal/10 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  )
}
