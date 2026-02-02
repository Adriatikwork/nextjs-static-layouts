"use client"

import { cn } from "@/lib/utils"

import React, { useState, useEffect, Suspense } from 'react'
import { assetPath } from '@/lib/utils'
import { MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import emailjs from '@emailjs/browser'
import { emailJsConfig } from '@/config/emailjs.config'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { LocationCard } from '@/components/ui/location-card'
import { motion } from 'framer-motion'



function ContactContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()

  const locations = t.contact.locations

  // Get service info from URL
  const serviceFromUrl = searchParams.get('service')
  const serviceType = searchParams.get('type')

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Prefill form when service is selected
  useEffect(() => {
    if (serviceFromUrl) {
      const prefillMessage = t.contact.form.servicePrefill.replace('{service}', serviceFromUrl)
      const reasonValue = serviceType === 'dental' ? t.contact.form.reasonOptions.dental : t.contact.form.reasonOptions.aesthetic

      setFormData(prev => ({
        ...prev,
        reason: reasonValue,
        message: prefillMessage
      }))
    }
  }, [serviceFromUrl, serviceType, t])

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = t.contact.form.validation.nameRequired
    if (!formData.email.trim()) {
      errors.email = t.contact.form.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.contact.form.validation.emailInvalid
    }
    if (!formData.message.trim()) errors.message = t.contact.form.validation.messageRequired
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormStatus('submitting')
    try {
      const { serviceId, templateId, publicKey, recipientName } = emailJsConfig
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reason: formData.reason || t.contact.form.notSpecified,
        message: formData.message,
        to_name: recipientName,
      }
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setFormStatus('success')
      setFormData({ name: '', email: '', reason: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('Email send error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Form Section */}
      <FormSection
        t={t}
        formData={formData}
        formStatus={formStatus}
        formErrors={formErrors}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      
      {/* Locations Section - Compact Grid */}
      <LocationsSection t={t} locations={locations} />
    </section>
  )
}

// Hero Section Component
function HeroSection({ t }: { t: any }) {
  return (
    <div
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#005F73', isolation: 'isolate' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.7
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-[#c9b896] tracking-wide mb-6 font-normal"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.contact.hero.title}
        </h1>

        <p
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.contact.hero.subtitle.split('\n').map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i < t.contact.hero.subtitle.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        <p
          className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-12 font-light"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.contact.hero.description}
        </p>

        <div className="flex justify-center">
          <Link href="#contact-form">
            <button
              className="px-10 py-4 tracking-wide text-base md:text-lg transition-all duration-300 font-light hover:shadow-xl uppercase"
              style={{
                fontFamily: 'Playfair Display, serif',
                backgroundColor: '#c9b896',
                color: '#1a1a1a',
                border: 'none'
              }}
            >
              {t.contact.hero.cta}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Form Section Component
interface FormSectionProps {
  t: any
  formData: {
    name: string
    email: string
    reason: string
    message: string
  }
  formStatus: 'idle' | 'submitting' | 'success' | 'error'
  formErrors: Record<string, string>
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

function FormSection({ t, formData, formStatus, formErrors, handleInputChange, handleSubmit }: FormSectionProps) {
  return (
    <div className="w-full py-16 md:py-20" style={{ backgroundColor: '#f8f7f5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div id="contact-form" className="scroll-mt-20">
            <h2
              className="text-3xl md:text-4xl text-center mb-3 font-normal"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1F2A33' }}
            >
              {t.contact.form.title}
            </h2>
            <p
              className="text-center text-gray-600 mb-10 font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.contact.form.subtitle.split('\n').map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  {i < t.contact.form.subtitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="p-8 md:p-10">
                {/* Success Message */}
                {formStatus === 'success' && (
                  <div
                    className="mb-6 p-4 rounded-lg flex items-start gap-3 animate-fade-in-up"
                    style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {t.contact.form.success}
                      </p>
                      <p className="text-green-700 text-sm font-light mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {t.contact.form.successMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <div
                    className="mb-6 p-4 rounded-lg flex items-start gap-3 animate-fade-in-up"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {t.contact.form.error}
                      </p>
                      <p className="text-red-700 text-sm font-light mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {t.contact.form.errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    id="name"
                    label={t.contact.form.name}
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={formErrors.name}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                  <FormField
                    id="email"
                    label={t.contact.form.email}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-normal mb-2 text-gray-700"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.contact.form.reason}
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#005F73] focus:ring-2 focus:ring-[#005F73]/20 outline-none transition-all font-light bg-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    <option value="">{t.contact.form.reasonPlaceholder}</option>
                    <option value={t.contact.form.reasonOptions.dental}>{t.contact.form.reasonOptions.dental}</option>
                    <option value={t.contact.form.reasonOptions.aesthetic}>{t.contact.form.reasonOptions.aesthetic}</option>
                    <option value={t.contact.form.reasonOptions.info}>{t.contact.form.reasonOptions.info}</option>
                    <option value={t.contact.form.reasonOptions.other}>{t.contact.form.reasonOptions.other}</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-normal mb-2 text-gray-700"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#005F73] focus:ring-2 focus:ring-[#005F73]/20 outline-none transition-all resize-none font-light"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      borderColor: formErrors.message ? '#ef4444' : undefined
                    }}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="group relative px-12 py-4 text-white tracking-wide text-base md:text-lg font-light overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed uppercase hover:shadow-lg"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      backgroundColor: '#c9b896',
                      border: 'none',
                      color: '#1a1a1a'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          {t.contact.form.sending}
                        </>
                      ) : (
                        <>
                          {t.contact.form.send}
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.contact.form.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Form Field Component
interface FormFieldProps {
  id: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder: string
}

function FormField({ id, label, type, value, onChange, error, placeholder }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-normal mb-2 text-gray-700"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#005F73] focus:ring-2 focus:ring-[#005F73]/20 outline-none transition-all font-light"
        style={{
          fontFamily: 'Playfair Display, serif',
          borderColor: error ? '#ef4444' : undefined
        }}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
          {error}
        </p>
      )}
    </div>
  )
}

// Locations Section Component - Elegant Alternating Layout
interface LocationsSectionProps {
  t: any
  locations: any[]
}

function LocationsSection({ t, locations }: LocationsSectionProps) {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C09B83] to-[#C09B83]" />
              <MapPin className="w-6 h-6 text-[#C09B83]" />
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C09B83] to-[#C09B83]" />
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#1F2A33] font-normal mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.contact.map.title}
            </h2>
            <p
              className="text-lg text-[#1F2A33]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.contact.map.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Alternating Locations with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C09B83]/30 via-[#C09B83]/50 to-[#C09B83]/30 transform -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {locations.map((location, index) => {
              const isEven = index % 2 === 0
              const encodedAddress = encodeURIComponent(location.address)
              const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`

              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#005F73] border-4 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">
                    {/* Text Content */}
                    <div className={cn(
                      "lg:pr-12",
                      isEven ? "lg:text-right" : "lg:col-start-2 lg:pl-12 lg:text-left"
                    )}>
                      {/* Mobile Number Badge */}
                      <div className="lg:hidden mb-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#005F73] text-white font-semibold text-sm">
                          {index + 1}
                        </div>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-normal mb-2 text-[#1F2A33]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {location.name}
                      </h3>

                      <div className={cn(
                        "flex items-start gap-2 mb-3",
                        isEven ? "lg:justify-end" : "lg:justify-start"
                      )}>
                        <MapPin className="w-4 h-4 text-[#005F73] mt-1 flex-shrink-0" />
                        <p
                          className="text-base md:text-lg text-[#1F2A33]/80 leading-relaxed"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {location.address}
                        </p>
                      </div>

                      {location.notes && (
                        <p className="text-sm text-[#1F2A33]/60 italic mb-3">
                          {location.notes}
                        </p>
                      )}

                      {/* Services Offered */}
                      {location.services && location.services.length > 0 && (
                        <div className={cn(
                          "mb-3",
                          isEven ? "lg:flex lg:flex-col lg:items-end" : "lg:flex lg:flex-col lg:items-start"
                        )}>
                          <p className="text-sm font-medium text-[#1F2A33]/80 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {t.contact.map.servicesOffered}
                          </p>
                          <div className={cn(
                            "flex flex-wrap gap-2",
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          )}>
                            {location.services.map((service: string) => (
                              <span
                                key={service}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: service === 'dental' ? '#005F73' : '#C09B83',
                                  color: '#ffffff'
                                }}
                              >
                                {t.contact.map.services[service]}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Phone Number */}
                      {location.phone && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-[#1F2A33]/80">
                            {t.contact.map.phone}: <a href={`tel:${location.phone}`} className="text-[#005F73] hover:text-[#C09B83] transition-colors">{location.phone}</a>
                          </p>
                        </div>
                      )}

                      <a
                        href={`https://maps.google.com/?q=${encodedAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 text-[#005F73] font-medium text-sm",
                          "hover:text-[#C09B83] transition-colors duration-300"
                        )}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Apri in Google Maps</span>
                      </a>
                    </div>

                    {/* Map */}
                    <div className={cn(
                      "relative overflow-hidden rounded-lg shadow-lg",
                      "h-[200px] md:h-[250px]",
                      isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                    )}>
                      <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name}`}
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Subtle Divider */}
                  {index < locations.length - 1 && (
                    <div className="mt-6 md:mt-8 flex justify-center">
                      <div className="w-12 h-[1px] bg-[#C09B83]/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3
              className="text-2xl md:text-3xl font-normal text-[#1F2A33] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.contact.form.title}
            </h3>
            <p className="text-lg text-[#1F2A33]/70 mb-8">
              {t.contact.form.subtitle.split('\n')[0]}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact-form')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#005F73] text-white rounded-lg hover:bg-[#004D5E] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{t.contact.form.send}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Main Contact component with Suspense wrapper
export function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
}
