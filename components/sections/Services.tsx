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
    <section id="servizi" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
              {t.services.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`card-hover border-2 hover:border-teal/30 transition-all stagger-${index + 1} animate-fade-in-up`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-teal" />
                    </div>
                    <CardTitle className="text-2xl text-darkText">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features List */}
                    <div className="pt-4 border-t border-gold/20">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4 border-teal text-teal hover:bg-teal hover:text-white"
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
