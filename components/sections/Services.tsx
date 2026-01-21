"use client"

import { useLanguage } from '@/lib/LanguageContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Smile, Scissors, Sparkles } from 'lucide-react'

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Smile,
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      features: t.services.items[0].features,
    },
    {
      icon: Scissors,
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      features: t.services.items[1].features,
    },
    {
      icon: Sparkles,
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      features: t.services.items[2].features,
    },
  ]

  return (
    <section id="servizi" className="bg-white section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Classical Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}>
              {t.services.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-brand-dark-text mt-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t.services.subtitle}
            </p>
          </div>

          {/* Service Cards - Elegant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`card-hover border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-500 stagger-${index + 1} animate-fade-in-up bg-white shadow-elegant hover:shadow-elegant-lg`}
                >
                  <CardHeader className="text-center pb-4">
                    {/* Icon with elegant background */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 flex items-center justify-center mb-6 mx-auto border-2 border-brand-gold/20 shadow-sm">
                      <Icon className="w-10 h-10 text-brand-teal" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl text-brand-gold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.05em' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base text-brand-dark-text leading-relaxed text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {service.description}
                    </CardDescription>
                    
                    {/* Features List with elegant styling */}
                    <div className="pt-6 border-t border-brand-gold/20">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-brand-dark-text flex items-center gap-3 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <span className="w-2 h-2 rounded-full bg-brand-gold group-hover:scale-125 transition-transform flex-shrink-0"></span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', fontWeight: 500 }}
                      onClick={() => {
                        const element = document.getElementById('contatti')
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {t.services.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
