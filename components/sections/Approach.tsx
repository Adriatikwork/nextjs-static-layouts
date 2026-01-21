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
    <section id="approccio" className="cream-bg section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Classical Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}>
              {t.approach.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-brand-dark-text mt-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t.approach.subtitle}
            </p>
          </div>

          {/* Approach Grid - Elegant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 animate-fade-in-up stagger-${index + 1} border border-brand-gold/10 hover:border-brand-gold/30 group`}
                >
                  {/* Icon and Content */}
                  <div className="flex items-start gap-6">
                    {/* Elegant Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 flex items-center justify-center flex-shrink-0 border-2 border-brand-gold/20 group-hover:border-brand-gold/40 transition-all duration-300 shadow-sm">
                      <Icon className="w-8 h-8 text-brand-teal group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-brand-gold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.03em' }}>
                        {approach.title}
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-brand-gold to-transparent mb-5"></div>
                      <p className="text-brand-dark-text leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem' }}>
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Decorative Quote Section */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto p-8 relative">
              <div className="absolute top-0 left-0 text-6xl text-brand-gold/20 font-serif">"</div>
              <p className="text-xl md:text-2xl text-brand-dark-text italic leading-relaxed relative z-10" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                {t.approach.quote}
              </p>
              <div className="absolute bottom-0 right-0 text-6xl text-brand-gold/20 font-serif">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
