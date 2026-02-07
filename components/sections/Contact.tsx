"use client"

import { cn } from "@/lib/utils"
import React, { useState, useEffect, Suspense } from 'react'
import { assetPath } from '@/lib/utils'
import { MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import emailjs from '@emailjs/browser'
import { emailJsConfig } from '@/config/emailjs.config'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

function ContactContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const locations = t.contact.locations

  const serviceFromUrl = searchParams.get('service')
  const serviceType = searchParams.get('type')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (serviceFromUrl) {
      const prefillMessage = t.contact.form.servicePrefill.replace('{service}', serviceFromUrl)
      const reasonValue = serviceType === 'dental' ? t.contact.form.reasonOptions.dental : t.contact.form.reasonOptions.aesthetic
      setFormData(prev => ({ ...prev, reason: reasonValue, message: prefillMessage }))
    }
  }, [serviceFromUrl, serviceType, t])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }))
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
      {/* Hero */}
      <div className="relative w-full pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden" style={{ backgroundColor: '#1a506c' }}>
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${assetPath('/images/fresh-snow.png')})`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
          }}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9b896] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {t.contact.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.contact.hero.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#c9b896] origin-left mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80 max-w-xl"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            {t.contact.hero.description}
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full py-24 md:py-32" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div id="contact-form" className="scroll-mt-20">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
              >
                {t.contact.form.title}
              </h2>
              <p
                className="text-base max-w-lg mx-auto"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}
              >
                {t.contact.form.subtitle.split('\n')[0]}
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-[#e8e2d8]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status messages */}
                {formStatus === 'success' && (
                  <div className="p-4 border border-green-200 bg-green-50 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 text-sm font-medium">{t.contact.form.success}</p>
                      <p className="text-green-700 text-sm mt-1">{t.contact.form.successMessage}</p>
                    </div>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 border border-red-200 bg-red-50 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 text-sm font-medium">{t.contact.form.error}</p>
                      <p className="text-red-700 text-sm mt-1">{t.contact.form.errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] mb-2" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a2a30' }}>
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b border-[#d4cfc5] bg-transparent focus:border-[#1a506c] focus:ring-0 outline-none transition-colors text-sm"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#1a2a30', borderColor: formErrors.name ? '#ef4444' : undefined }}
                      placeholder={t.contact.form.namePlaceholder}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] mb-2" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a2a30' }}>
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b border-[#d4cfc5] bg-transparent focus:border-[#1a506c] focus:ring-0 outline-none transition-colors text-sm"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#1a2a30', borderColor: formErrors.email ? '#ef4444' : undefined }}
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block text-xs uppercase tracking-[0.15em] mb-2" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a2a30' }}>
                    {t.contact.form.reason}
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-[#d4cfc5] bg-transparent focus:border-[#1a506c] focus:ring-0 outline-none transition-colors text-sm"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#1a2a30' }}
                  >
                    <option value="">{t.contact.form.reasonPlaceholder}</option>
                    <option value={t.contact.form.reasonOptions.dental}>{t.contact.form.reasonOptions.dental}</option>
                    <option value={t.contact.form.reasonOptions.aesthetic}>{t.contact.form.reasonOptions.aesthetic}</option>
                    <option value={t.contact.form.reasonOptions.info}>{t.contact.form.reasonOptions.info}</option>
                    <option value={t.contact.form.reasonOptions.other}>{t.contact.form.reasonOptions.other}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] mb-2" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#1a2a30' }}>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-0 py-3 border-0 border-b border-[#d4cfc5] bg-transparent focus:border-[#1a506c] focus:ring-0 outline-none transition-colors resize-none text-sm"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#1a2a30', borderColor: formErrors.message ? '#ef4444' : undefined }}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                  {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                </div>

                {/* Submit */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="group flex items-center gap-3 px-10 py-4 bg-[#c9b896] text-[#1a2a30] text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4c5a5] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#1a2a30] border-t-transparent rounded-full animate-spin" />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {t.contact.form.send}
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs mt-4" style={{ fontFamily: 'Geist, sans-serif', color: '#8a9a9f' }}>
                  {t.contact.form.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1a506c] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
            >
              {t.contact.map.title}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
            >
              {t.contact.map.subtitle}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-[1px] bg-[#c9b896] origin-left"
            />
          </div>

          {/* Locations Grid */}
          <div className="space-y-8">
            {locations.map((location: { id: string; name: string; address: string; days?: string; hours?: string; notes?: string; services?: string[]; phone?: string }, index: number) => {
              const encodedAddress = encodeURIComponent(location.address)
              const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`

              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e2d8] overflow-hidden"
                >
                  {/* Info */}
                  <div className={cn("p-8 md:p-12 flex flex-col justify-center", index % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                    <span
                      className="text-5xl font-light mb-4 leading-none"
                      style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,184,150,0.3)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl mb-3"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#1a2a30' }}
                    >
                      {location.name}
                    </h3>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#1a506c] mt-1 flex-shrink-0" />
                      <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}>
                        {location.address}
                      </p>
                    </div>
                    {location.days && (
                      <div className="flex items-start gap-2 mb-4">
                        <Clock className="w-4 h-4 text-[#1a506c] mt-1 flex-shrink-0" />
                        <p className="text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300, color: '#5a6a70' }}>
                          {location.days} | {location.hours}
                        </p>
                      </div>
                    )}
                    {location.services && location.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.services.map((service: string) => (
                          <span
                            key={service}
                            className="px-3 py-1 text-xs tracking-wide uppercase"
                            style={{
                              fontFamily: 'Geist, sans-serif',
                              fontWeight: 500,
                              backgroundColor: service === 'dental' ? '#1a506c' : '#c9b896',
                              color: service === 'dental' ? '#ffffff' : '#1a2a30',
                            }}
                          >
                            {t.contact.map.services[service]}
                          </span>
                        ))}
                      </div>
                    )}
                    {location.phone && (
                      <p className="text-sm mb-4" style={{ fontFamily: 'Geist, sans-serif', color: '#5a6a70' }}>
                        {t.contact.map.phone}: <a href={`tel:${location.phone}`} className="text-[#1a506c] hover:text-[#c9b896] transition-colors font-medium">{location.phone}</a>
                      </p>
                    )}
                    <a
                      href={`https://maps.google.com/?q=${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1a506c] text-sm tracking-wide hover:gap-3 transition-all duration-300"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
                    >
                      {t.contact.map.openInMaps}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Map */}
                  <div className={cn("relative h-[300px] lg:h-auto lg:min-h-[350px]", index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF8F5' }}>Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
}
