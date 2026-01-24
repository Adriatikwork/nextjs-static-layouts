"use client"

import React from "react"

import { useState, useEffect, useCallback } from 'react'
import { assetPath } from '@/lib/utils'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

// Location data for the route map
const locations = [
  { 
    id: "loc1", 
    name: "Studio Centrale", 
    address: "Via dei Calzaiuoli 12, 50122 Firenze", 
    days: "Lunedì, Mercoledì, Venerdì", 
    hours: "09:00 – 18:00", 
    notes: "Sede principale - Centro storico"
  },
  { 
    id: "loc2", 
    name: "Clinica Santa Maria Novella", 
    address: "Piazza Santa Maria Novella 8, 50123 Firenze", 
    days: "Martedì, Giovedì", 
    hours: "10:00 – 19:00", 
    notes: "Vicino alla stazione ferroviaria"
  },
  { 
    id: "loc3", 
    name: "Ambulatorio Oltrarno", 
    address: "Via Maggio 45, 50125 Firenze", 
    days: "Lunedì, Venerdì", 
    hours: "14:00 – 20:00", 
    notes: "Quartiere artigianale"
  },
  { 
    id: "loc4", 
    name: "Poliambulatorio Le Cure", 
    address: "Viale dei Mille 90, 50131 Firenze", 
    days: "Mercoledì, Sabato", 
    hours: "08:00 – 14:00", 
    notes: "Parcheggio disponibile"
  },
  { 
    id: "loc5", 
    name: "Studio Campo di Marte", 
    address: "Via Luigi Alamanni 5, 50123 Firenze", 
    days: "Giovedì", 
    hours: "15:00 – 19:00", 
    notes: "Solo su appuntamento"
  }
]

// User's final path shape
const scaledPath = "M 171 29 L 142 15 L 60 80 L 143 130 L 30 231 L 162 331"

// Node positions at 5 of the 6 path vertices (skipping vertex 2 which is a small corner)
// These are the actual SVG coordinates
const nodePositions = [
  { x: 171, y: 29 },   // 1 - top-right (start)
  { x: 60, y: 80 },    // 2 - upper-left
  { x: 143, y: 130 },  // 3 - mid-right
  { x: 30, y: 231 },   // 4 - lower-left
  { x: 162, y: 331 },  // 5 - bottom (end)
]

export function Contact() {
  const { t } = useLanguage()
  const BOOKING_PAGE_URL = "https://calendar.app.google/PXJf7qQMexizEqsk9"
  
  // State for location selection and auto-rotation
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  
  // Handle node selection
  const handleNodeSelect = useCallback((index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
    setLastInteraction(Date.now())
  }, [])
  
  // Handle keyboard interaction
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNodeSelect(index)
    }
  }, [handleNodeSelect])
  
  // Auto-rotation logic
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % locations.length)
      }
    }, 4000)
    
    return () => clearInterval(rotationInterval)
  }, [isPaused])
  
  // Resume rotation after 10s of inactivity
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
  
  // Pause on hover handlers
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
    setLastInteraction(Date.now())
  }, [])
  
  const handleMouseLeave = useCallback(() => {
    setLastInteraction(Date.now())
    // Will resume after 10s via the useEffect
  }, [])
  
  const activeLocation = locations[activeIndex]
  
  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Use the pre-computed scaled path (user's exact shape) for desktop
  const generatePath = () => scaledPath
  
  // Horizontal path for mobile: straight line from left to right
  const horizontalPath = "M 20 30 L 180 30"
  
  // Horizontal node positions for mobile (evenly spaced)
  const horizontalNodePositions = [
    { x: 20, y: 30 },
    { x: 52, y: 30 },
    { x: 84, y: 30 },
    { x: 116, y: 30 },
    { x: 148, y: 30 },
  ]
  
  return (
    <section className="relative w-full">
      {/* Hero section with title - Matching other pages */}
      <div 
        className="w-full py-16 relative overflow-hidden"
        style={{
          backgroundColor: '#068c8c',
          isolation: 'isolate'
        }}
      >
        {/* Pattern overlay with mix-blend-mode */}
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
            zIndex: 1
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-5xl md:text-6xl text-[#c9b896] tracking-wider font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.contact.title}
          </h1>
        </div>
      </div>

      {/* Main content - Beige background like other pages */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Contact Information Cards */}
              <div className="space-y-3 md:space-y-4">
                <h2 
                  className="text-2xl text-[#068c8c] mb-6 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.contact.info.label}
                </h2>

                <div className="bg-white p-4 border-l-4 border-[#068c8c] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-base text-[#068c8c] mb-1 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.location}
                      </h3>
                      <p 
                        className="text-gray-700 text-sm leading-relaxed font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.locationAddress}<br />
                        {t.contact.info.locationCity}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 border-l-4 border-[#c9b896] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-base text-[#068c8c] mb-1 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.phone}
                      </h3>
                      <a 
                        href={`tel:${t.contact.info.phoneNumber.replace(/\s/g, '')}`}
                        className="text-gray-700 text-sm hover:text-[#068c8c] transition-colors font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 border-l-4 border-[#068c8c] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-base text-[#068c8c] mb-1 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.email}
                      </h3>
                      <a 
                        href={`mailto:${t.contact.info.emailAddress}`}
                        className="text-gray-700 text-sm hover:text-[#068c8c] transition-colors break-all font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.emailAddress}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 border-l-4 border-[#c9b896] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-base text-[#068c8c] mb-1 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.info.hours}
                      </h3>
                      <div 
                        className="text-gray-700 space-y-1 text-sm font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        <p className="flex justify-between gap-2">
                          <span className="font-medium">{t.contact.info.weekdays}</span>
                          <span>{t.contact.info.weekdaysTime}</span>
                        </p>
                        <p className="flex justify-between gap-2">
                          <span className="font-medium">{t.contact.info.saturday}</span>
                          <span>{t.contact.info.saturdayTime}</span>
                        </p>
                        <p className="flex justify-between gap-2">
                          <span className="font-medium">{t.contact.info.sunday}</span>
                          <span>{t.contact.info.sundayTime}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Calendar Booking - Spans 3 columns */}
              <div className="lg:col-span-3">
                <h2 
                  className="text-2xl text-[#068c8c] mb-6 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.contact.booking.title}
                </h2>
                
                <div className="bg-white shadow-xl overflow-hidden" style={{ border: '2px solid #c9b896' }}>
                  <div 
                    className="p-4"
                    style={{
                      background: 'linear-gradient(135deg, #068c8c 0%, #057575 100%)'
                    }}
                  >
                    <p 
                      className="text-white text-center leading-relaxed font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {t.contact.booking.subtitle}
                    </p>
                  </div>

                  {/* Google Calendar Embed */}
                  <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
                    <iframe 
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1sn4N5UDj5qZlgwWvHZO7hWvPRPho91rom4_PlrTowM8GLtZ2xdtjCMBnFzMAD5Z0kKp44E1Rf?gv=true" 
                      style={{ border: 0 }} 
                      width="100%" 
                      height="600" 
                      frameBorder="0"
                      title={t.contact.booking.title}
                      className="w-full"
                    />
                  </div>

                  <div className="p-4 bg-gray-50 border-t border-[#c9b896]/30 flex items-center justify-between gap-4">
                    <div className="flex items-start gap-2 flex-1">
                      <div className="w-5 h-5 rounded-full bg-[#068c8c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#068c8c] text-xs font-bold">i</span>
                      </div>
                      <p 
                        className="text-gray-600 text-xs leading-relaxed font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {t.contact.booking.note}
                      </p>
                    </div>
                    
                    <a
                      href={BOOKING_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 text-white text-sm tracking-wider hover:opacity-90 transition-all whitespace-nowrap font-light"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        backgroundColor: '#068c8c',
                        border: '1px solid #c9b896'
                      }}
                    >
                      {t.contact.booking.openWindow}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Come Raggiungerci Section - Premium Route Map */}
      <div 
        className="relative w-full py-20 overflow-hidden"
        style={{ backgroundColor: '#3A7884' }}
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
        
        {/* Subtle vignette overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(31, 42, 51, 0.4) 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Section heading */}
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
            {/* Two-column layout: Card left, SVG right on desktop; stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
              
              {/* Location Detail Card - Shows FIRST on mobile (top) */}
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
                  
                  {/* Divider */}
                  <div className="h-px w-full mb-6" style={{ backgroundColor: '#C09B83', opacity: 0.3 }} />
                  
                  {/* Location details */}
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C09B83' }} />
                      <div>
                        <p 
                          className="text-xs uppercase tracking-wider mb-1 font-medium"
                          style={{ color: '#3A7884' }}
                        >
                          {t.contact.map.locationFields.address}
                        </p>
                        <p 
                          className="font-light"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#1F2A33'
                          }}
                        >
                          {activeLocation.address}
                        </p>
                      </div>
                    </div>
                    
                    {/* Days */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C09B83' }} />
                      <div>
                        <p 
                          className="text-xs uppercase tracking-wider mb-1 font-medium"
                          style={{ color: '#3A7884' }}
                        >
                          {t.contact.map.locationFields.days}
                        </p>
                        <p 
                          className="font-light"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#1F2A33'
                          }}
                        >
                          {activeLocation.days}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div 
                          className="w-3 h-3 rounded-full border-2"
                          style={{ borderColor: '#C09B83' }}
                        />
                      </div>
                      <div>
                        <p 
                          className="text-xs uppercase tracking-wider mb-1 font-medium"
                          style={{ color: '#3A7884' }}
                        >
                          {t.contact.map.locationFields.hours}
                        </p>
                        <p 
                          className="font-light"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#1F2A33'
                          }}
                        >
                          {activeLocation.hours}
                        </p>
                      </div>
                    </div>
                    
                    {/* Notes */}
                    {activeLocation.notes && (
                      <div 
                        className="mt-4 p-3 rounded-xl"
                        style={{ backgroundColor: 'rgba(58, 120, 132, 0.1)' }}
                      >
                        <p 
                          className="text-sm font-light italic"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#3A7884'
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
                          index === activeIndex 
                            ? 'scale-125' 
                            : 'hover:scale-110'
                        }`}
                        style={{ 
                          backgroundColor: index === activeIndex ? '#C09B83' : '#3A7884',
                          opacity: index === activeIndex ? 1 : 0.5
                        }}
                        aria-label={`Vai a ${loc.name}`}
                        aria-current={index === activeIndex ? 'true' : 'false'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* SVG Route Map - Shows SECOND on mobile (bottom) */}
              <div className="order-2">
                {/* Mobile: Compact horizontal layout */}
                <div className="lg:hidden relative w-full" style={{ height: '80px' }}>
                  <svg 
                    viewBox="0 0 200 60" 
                    className="w-full h-full"
                    role="img"
                    aria-label="Mappa delle sedi con percorso"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Horizontal route path */}
                    <path
                      d={horizontalPath}
                      fill="none"
                      stroke="#C09B83"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(192, 155, 131, 0.5))' }}
                    />
                    
                    {/* Location nodes */}
                    {horizontalNodePositions.map((pos, index) => {
                      const isActive = index === activeIndex
                      const cx = pos.x
                      const cy = pos.y
                      
                      return (
                        <g key={locations[index].id}>
                          {/* Outer halo for active node */}
                          {isActive && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r="18"
                              fill="none"
                              stroke="#C09B83"
                              strokeWidth="2"
                              className="animate-pulse"
                              style={{ opacity: 0.4 }}
                            />
                          )}
                          
                          {/* Node background glow */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isActive ? 14 : 10}
                            fill={isActive ? '#C09B83' : '#E6DED9'}
                            className="transition-all duration-300 ease-out"
                            style={{ 
                              filter: isActive 
                                ? 'drop-shadow(0 4px 12px rgba(192, 155, 131, 0.6))' 
                                : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
                            }}
                          />
                          
                          {/* Inner circle */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isActive ? 8 : 6}
                            fill={isActive ? '#1F2A33' : '#3A7884'}
                            className="transition-all duration-300 ease-out"
                          />
                          
                          {/* Clickable/focusable button overlay */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r="20"
                            fill="transparent"
                            className="cursor-pointer focus:outline-none"
                            role="button"
                            tabIndex={0}
                            aria-label={`Seleziona ${locations[index].name}`}
                            aria-pressed={isActive}
                            onClick={() => handleNodeSelect(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          />
                          
                          {/* Location number label */}
                          <text
                            x={cx}
                            y={cy + 1}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill={isActive ? '#C09B83' : '#E6DED9'}
                            fontSize="9"
                            fontWeight="600"
                            className="pointer-events-none select-none"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {index + 1}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
                
                {/* Desktop: Original vertical layout */}
                <div className="hidden lg:block relative w-full" style={{ height: '350px' }}>
                  <svg 
                    viewBox="0 0 200 360" 
                    className="absolute inset-0 w-full h-full"
                    role="img"
                    aria-label="Mappa delle sedi con percorso"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Route path */}
                    <path
                      d={generatePath()}
                      fill="none"
                      stroke="#C09B83"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(192, 155, 131, 0.5))' }}
                    />
                    
                    {/* Location nodes */}
                    {nodePositions.map((pos, index) => {
                      const isActive = index === activeIndex
                      const cx = pos.x  // Already in SVG coordinates
                      const cy = pos.y  // Already in SVG coordinates
                      
                      return (
                        <g key={locations[index].id}>
                          {/* Outer halo for active node */}
                          {isActive && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r="24"
                              fill="none"
                              stroke="#C09B83"
                              strokeWidth="2.5"
                              className="animate-pulse"
                              style={{ opacity: 0.4 }}
                            />
                          )}
                          
                          {/* Node background glow */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isActive ? 18 : 13}
                            fill={isActive ? '#C09B83' : '#E6DED9'}
                            className="transition-all duration-300 ease-out"
                            style={{ 
                              filter: isActive 
                                ? 'drop-shadow(0 4px 12px rgba(192, 155, 131, 0.6))' 
                                : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
                            }}
                          />
                          
                          {/* Inner circle */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isActive ? 10 : 8}
                            fill={isActive ? '#1F2A33' : '#3A7884'}
                            className="transition-all duration-300 ease-out"
                          />
                          
                          {/* Clickable/focusable button overlay */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r="26"
                            fill="transparent"
                            className="cursor-pointer focus:outline-none"
                            role="button"
                            tabIndex={0}
                            aria-label={`Seleziona ${locations[index].name}`}
                            aria-pressed={isActive}
                            onClick={() => handleNodeSelect(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          />
                          
                          {/* Location number label */}
                          <text
                            x={cx}
                            y={cy + 1}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill={isActive ? '#C09B83' : '#E6DED9'}
                            fontSize="11"
                            fontWeight="600"
                            className="pointer-events-none select-none"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {index + 1}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
