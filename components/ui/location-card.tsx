"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

interface Location {
  id: string
  name: string
  address: string
  days?: string
  hours?: string
  notes?: string
}

interface LocationCardProps {
  location: Location
  index: number
}

export function LocationCard({ location, index }: LocationCardProps) {
  const isEven = index % 2 === 0

  // Encode address for Google Maps
  const encodedAddress = encodeURIComponent(location.address)
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(
        "group relative overflow-hidden rounded-xl md:rounded-2xl",
        "bg-[#f8f7f5] border border-[#C09B83]/30",
        "shadow-md hover:shadow-xl transition-all duration-500",
        "hover:scale-[1.01] md:hover:scale-[1.02]"
      )}
    >
      <div className={cn(
        "grid gap-0",
        "lg:grid-cols-2",
        "grid-cols-1"
      )}>
        {/* Info Section */}
        <div
          className={cn(
            "p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center",
            isEven ? "lg:order-1" : "lg:order-2"
          )}
        >
          {/* Location Number Badge */}
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A506C] text-white font-semibold text-base md:text-lg">
              {index + 1}
            </div>
          </div>

          {/* Location Name */}
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-normal mb-3 md:mb-4 text-[#1F2A33]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {location.name}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#1A506C] mt-1 flex-shrink-0" />
            <p
              className="text-base sm:text-lg md:text-xl text-[#1F2A33]/80 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {location.address}
            </p>
          </div>



          {/* Notes (if available) */}
          {location.notes && (
            <div className="mt-2 md:mt-4 pt-3 md:pt-4 border-t border-[#C09B83]/20">
              <p className="text-xs md:text-sm text-[#1F2A33]/60 italic">
                {location.notes}
              </p>
            </div>
          )}

          {/* View on Google Maps Link */}
          <div className="mt-4 md:mt-6">
            <a
              href={`https://maps.google.com/?q=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-[#1A506C] font-medium text-sm md:text-base",
                "hover:text-[#C09B83] transition-colors duration-300",
                "group/link"
              )}
            >
              <MapPin className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              <span>Apri in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={cn(
            "relative w-full overflow-hidden",
            "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]",
            isEven ? "lg:order-2" : "lg:order-1"
          )}
        >
          {/* Map Iframe */}
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

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A506C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.article>
  )
}
