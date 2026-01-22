"use client"

import Image from 'next/image'
import Link from 'next/link'

export function HeroNew() {
  return (
    <section className="relative w-full">
      {/* Main hero section with teal background */}
      <div 
        className="relative min-h-[700px] w-full"
        style={{
          background: '#068c8c url(/images/fresh-snow.png) repeat',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="flex flex-col items-center gap-8">
              {/* Logo icon */}
              <div className="relative w-32 h-32">
                <Image
                  src="/logo-icon.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(11%) saturate(734%) hue-rotate(344deg) brightness(95%) contrast(88%)' }}
                />
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl text-white tracking-wide leading-tight text-center font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
                  DOTTORESSA IRENE MARIA BECONI
                </h1>
                <p className="text-xl md:text-2xl text-white tracking-widest text-center font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                  ODONTOIATRIA E MEDICINA ESTETICA DEL VOLTO
                </p>
              </div>

              {/* Decorative divider - Premium design */}
              <div className="flex items-center gap-3 w-full max-w-lg">
                <div className="flex-1 h-[2px]" style={{ 
                  background: 'linear-gradient(to right, transparent, var(--gold-accent), var(--gold-accent))',
                  opacity: 0.8
                }} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2" style={{ 
                    background: 'var(--gold-accent)',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                  <div className="w-3 h-3 rounded-full border-2" style={{ 
                    borderColor: 'var(--gold-accent)',
                    backgroundColor: 'transparent'
                  }} />
                  <div className="w-2 h-2" style={{ 
                    background: 'var(--gold-accent)',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                </div>
                <div className="flex-1 h-[2px]" style={{ 
                  background: 'linear-gradient(to left, transparent, var(--gold-accent), var(--gold-accent))',
                  opacity: 0.8
                }} />
              </div>

              {/* CTA Button */}
              <Link href="/servizi">
                <button 
                  className="px-10 py-4 text-white tracking-widest text-lg hover:opacity-80 transition-all text-center font-light"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    border: '2px solid #c9b896',
                    backgroundColor: 'transparent'
                  }}
                >
                  ACCEDI I SERVIZI
                </button>
              </Link>
            </div>

            {/* Right side - Image */}
            <div className="relative w-full h-[600px] flex justify-end">
              <div className="relative w-full max-w-md h-full">
                <Image
                  src="/doctor_no_background.png"
                  alt="Professional portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beige section */}
      <div 
        className="w-full py-12"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-800 leading-relaxed font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-2xl">+</span> Poliambulatorio di Irene Maria Beconi viene effettuata
          </p>
          <p className="text-lg text-gray-800 leading-relaxed italic mt-2 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nostri Horari e Tutela Offerta Visieratii di Lui del Surridenca e llun Tobaco.
          </p>
        </div>
      </div>

      {/* Three Cards Section */}
      <div 
        className="w-full py-20"
        style={{
          background: '#068c8c url(/images/fresh-snow.png) repeat',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Chi Sono */}
            <Link href="/chi-sono">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="/images/chi-sono-card.jpg"
                    alt="Chi Sono"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Chi Sono
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Lorem mi id elit cursus varius
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Tacon venenatis suspenlisse.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Servizi */}
            <Link href="/servizi">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="/images/servizi-card.jpg"
                    alt="Servizi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Servizi
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Lorem mi id elit cursus varius
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Tacon venenatis suspendisse.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 - Galleria */}
            <Link href="/galleria">
              <div 
                className="bg-[#0a5f5f] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src="/images/galleria-card.jpg"
                    alt="Galleria"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl text-white mb-6 tracking-wider font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Galleria
                  </h3>
                  <div className="space-y-3 text-white">
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Squat lacus consequat lacus cursus
                    </p>
                    <p className="text-base font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      <span className="text-[#c9b896]">•</span> Uelieci consequat.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom beige section with quote */}
      <div 
        className="w-full py-16"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p 
            className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Il sorriso è il nostro biglietto da visita più bello. Affidati a cure personalizzate per il tuo benessere, 
            di benessere trattiamo e ti metterai eslusivo " il seretto inusico."
          </p>
        </div>
      </div>
    </section>
  )
}
