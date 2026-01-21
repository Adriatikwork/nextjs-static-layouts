"use client"

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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
    <section id="contatti" className="cream-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
              {t.contact.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
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
                  <Card key={index} className="border-2 hover:border-teal/30 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-teal" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-darkText">{info.label}</CardTitle>
                          <p className="text-gray-600 mt-1">{info.value}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden bg-white shadow-md h-64">
                <div className="w-full h-full bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-teal/30" />
                    <p className="text-sm text-gray-400">Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-darkText">
                    {t.contact.form.message}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.name}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-gray-300 focus:border-teal focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-300 focus:border-teal focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-gray-300 focus:border-teal focus:ring-teal"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal hover:bg-teal-dark text-white"
                      size="lg"
                    >
                      {t.contact.form.submit}
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
