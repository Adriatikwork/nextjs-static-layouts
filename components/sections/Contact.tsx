"use client"

import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { assetPath } from '@/lib/utils'
import { MapPin, Clock, Navigation, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import emailjs from '@emailjs/browser'
import { emailJsConfig } from '@/config/emailjs.config'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


// SVG path for desktop route
const scaledPath = "M 171 29 L 142 15 L 60 80 L 143 130 L 30 231 L 162 331"

// Node positions for desktop
const nodePositions = [
  { x: 171, y: 29 },
  { x: 60, y: 80 },
  { x: 143, y: 130 },
  { x: 30, y: 231 },
  { x: 162, y: 331 },
]

// Horizontal path for mobile
const horizontalPath = "M 15 30 L 185 30"

// Horizontal node positions for mobile
const horizontalNodePositions = [
  { x: 15, y: 30 },
  { x: 57.5, y: 30 },
  { x: 100, y: 30 },
  { x: 142.5, y: 30 },
  { x: 185, y: 30 },
]

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

  // Location state
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(Date.now())

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
        reason: formData.reason || 'Non specificato',
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

  // Location handlers
  const handleNodeSelect = useCallback((index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
    setLastInteraction(Date.now())
  }, [])
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNodeSelect(index)
    }
  }, [handleNodeSelect])
  
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
    setLastInteraction(Date.now())
  }, [])
  
  const handleMouseLeave = useCallback(() => {
    setLastInteraction(Date.now())
  }, [])
  
  // Auto-rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % locations.length)
      }
    }, 4000)
    return () => clearInterval(rotationInterval)
  }, [isPaused])
  
  // Resume after inactivity
  useEffect(() => {
    if (isPaused) {
      const resumeTimeout = setTimeout(() => {
        if (Date.now() - lastInteraction >= 10000) {
          setIsPaused(false)
        }
      }, 10000)
      return () => clearTimeout(resumeTimeout)
    }
  }, [isPaused, lastInteraction])
  
  const activeLocation = locations[activeIndex]

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
      
      {/* Map Section */}
      <MapSection
        t={t}
        locations={locations}
        activeLocation={activeLocation}
        activeIndex={activeIndex}
        handleNodeSelect={handleNodeSelect}
        handleKeyDown={handleKeyDown}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
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
    <div className="w-full py-16 md:py-20" style={{ backgroundColor: '#f5f1ed' }}>
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

// Map Section Component
interface MapSectionProps {
  t: any
  locations: any[]
  activeLocation: any
  activeIndex: number
  handleNodeSelect: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent, index: number) => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

function MapSection({ t, locations, activeLocation, activeIndex, handleNodeSelect, handleKeyDown, handleMouseEnter, handleMouseLeave }: MapSectionProps) {
  return (
    <div 
      className="relative w-full py-20 overflow-hidden"
      style={{ backgroundColor: '#005F73' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* City background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${assetPath('/images/city-clay.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />
      
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(31, 42, 51, 0.4) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl text-white text-center mb-4 font-normal tracking-wider"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.contact.map.title}
        </h2>
        <p 
          className="text-white/70 text-center mb-12 font-light"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.contact.map.subtitle}
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
            {/* Location Card */}
            <LocationCard
              t={t}
              locations={locations}
              activeLocation={activeLocation}
              activeIndex={activeIndex}
              handleNodeSelect={handleNodeSelect}
            />
            
            {/* SVG Map */}
            <SVGMap
              locations={locations}
              activeIndex={activeIndex}
              handleNodeSelect={handleNodeSelect}
              handleKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Location Card Component
interface LocationCardProps {
  t: any
  locations: any[]
  activeLocation: any
  activeIndex: number
  handleNodeSelect: (index: number) => void
}

function LocationCard({ t, locations, activeLocation, activeIndex, handleNodeSelect }: LocationCardProps) {
  return (
    <div className="order-1">
      <div 
        className="rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300"
        style={{ 
          backgroundColor: '#E6DED9',
          boxShadow: '0 20px 40px rgba(31, 42, 51, 0.3)'
        }}
      >
        {/* Card header */}
        <div className="flex items-start gap-4 mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#C09B83' }}
          >
            <Navigation className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="text-xl md:text-2xl font-normal truncate"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#1F2A33'
              }}
            >
              {activeLocation.name}
            </h3>
          </div>
        </div>
        
        <div className="h-px w-full mb-6" style={{ backgroundColor: '#C09B83', opacity: 0.3 }} />
        
        {/* Location details */}
        <div className="space-y-4">
          <LocationDetail 
            icon={<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C09B83' }} />}
            label={t.contact.map.locationFields.address}
            value={activeLocation.address}
          />
          <LocationDetail 
            icon={<Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C09B83' }} />}
            label={t.contact.map.locationFields.days}
            value={activeLocation.days}
          />
          <LocationDetail 
            icon={
              <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: '#C09B83' }} />
              </div>
            }
            label={t.contact.map.locationFields.hours}
            value={activeLocation.hours}
          />
          
          {activeLocation.notes && (
            <div 
              className="mt-4 p-3 rounded-xl"
              style={{ backgroundColor: 'rgba(58, 120, 132, 0.1)' }}
            >
              <p 
                className="text-sm font-light italic"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#005F73'
                }}
              >
                {activeLocation.notes}
              </p>
            </div>
          )}
        </div>
        
        {/* Location selector dots */}
        <div className="flex items-center justify-center gap-2 mt-6 pt-4" style={{ borderTop: '1px solid rgba(192, 155, 131, 0.2)' }}>
          {locations.map((loc, index) => (
            <button
              key={loc.id}
              onClick={() => handleNodeSelect(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                index === activeIndex ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: index === activeIndex ? '#C09B83' : '#005F73',
                opacity: index === activeIndex ? 1 : 0.5
              }}
              aria-label={`Vai a ${loc.name}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Location Detail Component
interface LocationDetailProps {
  icon: React.ReactNode
  label: string
  value: string
}

function LocationDetail({ icon, label, value }: LocationDetailProps) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p 
          className="text-xs uppercase tracking-wider mb-1 font-medium"
          style={{ color: '#005F73' }}
        >
          {label}
        </p>
        <p 
          className="font-light"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            color: '#1F2A33'
          }}
        >
          {value}
        </p>
      </div>
    </div>
  )
}

// SVG Map Component
interface SVGMapProps {
  locations: any[]
  activeIndex: number
  handleNodeSelect: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent, index: number) => void
}

function SVGMap({ locations, activeIndex, handleNodeSelect, handleKeyDown }: SVGMapProps) {
  return (
    <div className="order-2 flex justify-center items-center">
      {/* Mobile */}
      <div className="lg:hidden relative w-full max-w-md mx-auto" style={{ height: '80px' }}>
        <svg 
          viewBox="0 0 200 60" 
          className="w-full h-full"
          role="img"
          aria-label="Mappa delle sedi con percorso"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={horizontalPath}
            fill="none"
            stroke="#C09B83"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(192, 155, 131, 0.5))' }}
          />
          {horizontalNodePositions.map((pos, index) => (
            <SVGNode
              key={locations[index].id}
              locations={locations}
              cx={pos.x}
              cy={pos.y}
              index={index}
              isActive={index === activeIndex}
              isMobile={true}
              handleNodeSelect={handleNodeSelect}
              handleKeyDown={handleKeyDown}
            />
          ))}
        </svg>
      </div>
      
      {/* Desktop */}
      <div className="hidden lg:block relative w-full" style={{ height: '350px' }}>
        <svg 
          viewBox="0 0 200 360" 
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="Mappa delle sedi con percorso"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={scaledPath}
            fill="none"
            stroke="#C09B83"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(192, 155, 131, 0.5))' }}
          />
          {nodePositions.map((pos, index) => (
            <SVGNode
              key={locations[index].id}
              locations={locations}
              cx={pos.x}
              cy={pos.y}
              index={index}
              isActive={index === activeIndex}
              isMobile={false}
              handleNodeSelect={handleNodeSelect}
              handleKeyDown={handleKeyDown}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

// SVG Node Component
interface SVGNodeProps {
  locations: any[]
  cx: number
  cy: number
  index: number
  isActive: boolean
  isMobile: boolean
  handleNodeSelect: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent, index: number) => void
}

function SVGNode({ locations, cx, cy, index, isActive, isMobile, handleNodeSelect, handleKeyDown }: SVGNodeProps) {
  const sizes = isMobile 
    ? { halo: 18, outer: isActive ? 14 : 10, inner: isActive ? 8 : 6, clickable: 20, fontSize: "9" }
    : { halo: 24, outer: isActive ? 18 : 13, inner: isActive ? 10 : 8, clickable: 26, fontSize: "11" }

  return (
    <g>
      {isActive && (
        <circle
          cx={cx}
          cy={cy}
          r={sizes.halo}
          fill="none"
          stroke="#C09B83"
          strokeWidth={isMobile ? "2" : "2.5"}
          className="animate-pulse"
          style={{ opacity: 0.4 }}
        />
      )}
      
      <circle
        cx={cx}
        cy={cy}
        r={sizes.outer}
        fill={isActive ? '#C09B83' : '#E6DED9'}
        className="transition-all duration-300 ease-out"
        style={{ 
          filter: isActive 
            ? 'drop-shadow(0 4px 12px rgba(192, 155, 131, 0.6))' 
            : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
        }}
      />
      
      <circle
        cx={cx}
        cy={cy}
        r={sizes.inner}
        fill={isActive ? '#1F2A33' : '#005F73'}
        className="transition-all duration-300 ease-out"
      />
      
      <circle
        cx={cx}
        cy={cy}
        r={sizes.clickable}
        fill="transparent"
        className="cursor-pointer focus:outline-none"
        role="button"
        tabIndex={0}
        aria-label={`Seleziona ${locations[index].name}`}
        aria-pressed={isActive}
        onClick={() => handleNodeSelect(index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
      />
      
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isActive ? '#C09B83' : '#E6DED9'}
        fontSize={sizes.fontSize}
        fontWeight="600"
        className="pointer-events-none select-none"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {index + 1}
      </text>
    </g>
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
