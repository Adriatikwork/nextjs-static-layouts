"use client"

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form is UI only - no actual submission
    console.log('Form data:', formData)
    alert(t.contact.form.success)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: t.contact.info.address,
    },
    {
      icon: Phone,
      label: 'Telefono',
      value: t.contact.info.phone,
    },
    {
      icon: Mail,
      label: 'Email',
      value: t.contact.info.email,
    },
  ]

  return (
    <section id="contatti" className="cream-bg section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Classical Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}>
              {t.contact.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-brand-dark-text mt-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t.contact.subtitle}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 animate-fade-in-left">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 flex items-center justify-center border-2 border-brand-gold/20">
                          <Icon className="w-7 h-7 text-brand-teal" strokeWidth={1.5} />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-brand-gold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                            {info.label}
                          </CardTitle>
                          <p className="text-brand-dark-text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem' }}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-white rounded-lg border border-brand-gold/20 shadow-elegant">
                <h3 className="text-xl font-semibold text-brand-gold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {t.contact.info.hours}
                </h3>
                <div className="space-y-2 text-brand-dark-text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem' }}>
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato: Su appuntamento</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="border-2 border-brand-gold/20 shadow-elegant-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-gold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.05em' }}>
                    {t.contact.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark-text mb-2" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>
                        {t.contact.form.name}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-brand-gold/30 focus:border-brand-teal focus:ring-brand-teal"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark-text mb-2" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>
                        {t.contact.form.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-brand-gold/30 focus:border-brand-teal focus:ring-brand-teal"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-dark-text mb-2" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-brand-gold/30 focus:border-brand-teal focus:ring-brand-teal resize-none"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      size="lg"
                      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                      {t.contact.form.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
