"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { CheckCircle } from 'lucide-react'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="chi-sono" className="cream-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
              {t.about.title}
            </h2>
            <div className="gold-divider"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.intro}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description}
              </p>

              {/* Formation Section */}
              <div className="pt-6">
                <h3 className="text-2xl font-semibold text-darkText mb-6 relative inline-block">
                  {t.about.formationTitle}
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent"></span>
                </h3>
                <ul className="space-y-4">
                  {t.about.formation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-2xl"></div>
                
                {/* Image placeholder */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal/10 to-gold/10">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-teal/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-teal/50">IB</span>
                      </div>
                      <p className="text-gray-400 text-sm">About Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
