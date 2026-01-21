"use client"

import { useLanguage } from '@/lib/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-darkText text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-2">{t.footer.name}</h3>
            <p className="text-gray-300 text-sm mb-2">{t.footer.subtitle}</p>
            <p className="text-gray-400 text-sm">{t.footer.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  const element = document.getElementById('chi-sono')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servizi')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contatti')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                {t.footer.links.privacy}
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                {t.footer.links.cookie}
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                {t.footer.links.legal}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
