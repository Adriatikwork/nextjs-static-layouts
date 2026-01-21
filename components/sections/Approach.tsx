"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Heart, Target, Leaf, Shield } from 'lucide-react'

export function Approach() {
  const { t } = useLanguage()

  const approaches = [
    {
      icon: Heart,
      title: t.approach.items[0].title,
      description: t.approach.items[0].description,
    },
    {
      icon: Target,
      title: t.approach.items[1].title,
      description: t.approach.items[1].description,
    },
    {
      icon: Leaf,
      title: t.approach.items[2].title,
      description: t.approach.items[2].description,
    },
    {
      icon: Shield,
      title: t.approach.items[3].title,
      description: t.approach.items[3].description,
    },
  ]

  return (
    <section id="approccio" className="cream-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
              {t.approach.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              {t.approach.subtitle}
            </p>
          </div>

          {/* Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all animate-fade-in-up stagger-${index + 1}`}
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-darkText mb-3 relative inline-block">
                        {approach.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
