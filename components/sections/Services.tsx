"use client"

import { assetPath } from '@/lib/utils'
import { Smile, Activity, Syringe, Droplet, Sparkles, Scissors } from 'lucide-react'
import { useState } from 'react'

export function Services() {
  const [activeCategory, setActiveCategory] = useState<'dental' | 'aesthetic'>('dental')

  const dentalServices = [
    {
      title: "Cure Conservative e Restaurative",
      icon: Smile,
      description: "Trattamenti per preservare e ripristinare la salute dentale naturale, dall'otturazione alla cura della carie con materiali biocompatibili di ultima generazione.",
      items: [
        "Otturazioni estetiche",
        "Ricostruzioni dentali",
        "Cura della carie",
        "Sbiancamento dentale"
      ]
    },
    {
      title: "Endodonzia",
      icon: Activity,
      description: "Terapie canalari specialistiche per salvare denti compromessi, eseguite con tecnologie digitali avanzate e massima precisione operativa.",
      items: [
        "Devitalizzazioni",
        "Ritrattamenti canalari",
        "Terapie della polpa",
        "Microscopia operatoria"
      ]
    },
    {
      title: "Chirurgia Orale",
      icon: Scissors,
      description: "Interventi chirurgici specialistici eseguiti con precisione e sicurezza, dalla semplice estrazione agli impianti dentali più complessi.",
      items: [
        "Estrazioni dentali",
        "Implantologia dentale",
        "Chirurgia pre-protesica",
        "Rigenerazione ossea guidata"
      ]
    }
  ]

  const aestheticServices = [
    {
      title: "Filler Dermici",
      icon: Syringe,
      description: "Acido ialuronico di altissima qualità per volumizzare e definire i tratti del viso in modo naturale e armonioso, rispettando l'anatomia facciale.",
      items: [
        "Aumento volumetrico labbra",
        "Definizione zigomi",
        "Rimodellamento mento",
        "Correzione solchi naso-labiali"
      ]
    },
    {
      title: "Tossina Botulinica",
      icon: Droplet,
      description: "Trattamenti mirati per attenuare rughe d'espressione e linee sottili, con risultati naturali che preservano la mobilità e l'espressività del volto.",
      items: [
        "Trattamento rughe frontali",
        "Correzione zampe di gallina",
        "Gummy smile",
        "Ipertrofia massetere"
      ]
    },
    {
      title: "Biorivitalizzazione e Peeling",
      icon: Sparkles,
      description: "Terapie rigenerative cutanee per migliorare texture, tono ed elasticità della pelle del viso, stimolando i naturali processi di rinnovamento cellulare.",
      items: [
        "Biorivitalizzazione viso",
        "Skinbooster",
        "Peeling chimici medicali",
        "Trattamenti anti-aging"
      ]
    }
  ]

  const activeServices = activeCategory === 'dental' ? dentalServices : aestheticServices

  return (
    <section className="relative w-full">
      {/* Top teal section with title */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl text-[#c9b896] tracking-wider font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            I Nostri Servizi
          </h1>
        </div>
      </div>

      {/* Main services section - light gray background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction text */}
            <div className="text-center mb-16">
              <h2 
                className="text-3xl text-gray-800 mb-6 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Due aree di eccellenza al servizio della tua bellezza
              </h2>
              <p 
                className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                La mia pratica medica unisce competenze odontoiatriche e competenze in medicina estetica facciale 
                per offrirti un approccio completo alla cura del sorriso e del volto.
              </p>
            </div>

            {/* Category Switcher - Elegant Toggle - Responsive */}
            <div className="flex justify-center mb-16 px-4">
              <div 
                className="inline-flex flex-col sm:flex-row p-2 rounded-lg gap-2 sm:gap-0 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'white',
                  border: '1px solid #d4c5a9',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                }}
              >
                <button
                  onClick={() => setActiveCategory('dental')}
                  className="px-4 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 font-light tracking-wide text-center whitespace-nowrap text-base sm:text-lg"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    backgroundColor: activeCategory === 'dental' ? '#068c8c' : 'transparent',
                    color: activeCategory === 'dental' ? 'white' : '#068c8c'
                  }}
                >
                  Odontoiatria e Salute Orale
                </button>
                <button
                  onClick={() => setActiveCategory('aesthetic')}
                  className="px-4 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 font-light tracking-wide text-center whitespace-nowrap text-base sm:text-lg"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    backgroundColor: activeCategory === 'aesthetic' ? '#068c8c' : 'transparent',
                    color: activeCategory === 'aesthetic' ? 'white' : '#068c8c'
                  }}
                >
                  Medicina Estetica del Volto
                </button>
              </div>
            </div>

            {/* Mobile/Tablet: Horizontal Scroll Carousel */}
            <div className="lg:hidden">
              <div 
                key={`mobile-${activeCategory}`}
                className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide animate-fade-in-up"
                style={{ 
                  scrollPaddingLeft: '1rem',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {activeServices.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden snap-center"
                      style={{ border: '1px solid #e0e0e0' }}
                    >
                      {/* Icon circle */}
                      <div className="flex justify-center pt-12 pb-6">
                        <div 
                          className="w-24 h-24 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#e8f4f4' }}
                        >
                          <IconComponent 
                            className="w-12 h-12"
                            style={{ color: '#068c8c' }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 sm:px-8 pb-10">
                        <h3 
                          className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 font-normal"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#c9a876'
                          }}
                        >
                          {service.title}
                        </h3>

                        <p 
                          className="text-sm sm:text-base text-gray-700 text-center mb-6 sm:mb-8 font-light leading-relaxed"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {service.description}
                        </p>

                        {/* Service items list */}
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {service.items.map((item, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-light"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              <span 
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#c9a876' }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Button */}
                        <div className="text-center">
                          <button 
                            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-light tracking-wide hover:bg-[#068c8c] hover:text-white transition-all duration-300"
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: '#068c8c',
                              border: '2px solid #068c8c',
                              backgroundColor: 'transparent'
                            }}
                          >
                            Scopri di più
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-2 mt-4">
                {activeServices.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: index === 0 ? '#068c8c' : '#d4c5a9',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div 
              key={`desktop-${activeCategory}`}
              className="hidden lg:grid grid-cols-3 gap-8 animate-fade-in-up"
            >
              {activeServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ border: '1px solid #e0e0e0' }}
                  >
                    {/* Icon circle */}
                    <div className="flex justify-center pt-12 pb-6">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#e8f4f4' }}
                      >
                        <IconComponent 
                          className="w-12 h-12"
                          style={{ color: '#068c8c' }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-10">
                      <h3 
                        className="text-2xl text-center mb-6 font-normal"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: '#c9a876'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p 
                        className="text-gray-700 text-center mb-8 font-light leading-relaxed"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {service.description}
                      </p>

                      {/* Service items list */}
                      <ul className="space-y-3 mb-8">
                        {service.items.map((item, idx) => (
                          <li 
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 font-light"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            <span 
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: '#c9a876' }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="text-center">
                        <button 
                          className="px-8 py-3 text-base font-light tracking-wide hover:bg-[#068c8c] hover:text-white transition-all duration-300"
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: '#068c8c',
                            border: '2px solid #068c8c',
                            backgroundColor: 'transparent'
                          }}
                        >
                          Scopri di più
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* IL MIO APPROCCIO Section - beige background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl mb-4 font-normal tracking-wider"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#c9a876',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Il Mio Approccio
              </h2>
              <div className="flex justify-center mt-6">
                {/* Premium decorative divider */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2" style={{ 
                    background: '#c9a876',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                  <div className="w-3 h-3 rounded-full border-2" style={{ 
                    borderColor: '#c9a876',
                    backgroundColor: 'transparent'
                  }} />
                  <div className="w-2 h-2" style={{ 
                    background: '#c9a876',
                    transform: 'rotate(45deg)',
                    opacity: 0.9
                  }} />
                </div>
              </div>
              <p 
                className="text-xl text-gray-700 mt-8 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Valori che guidano la mia pratica medica
              </p>
            </div>

            {/* Approach cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 - Cura del Paziente */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ border: '1px solid #d4c5a9' }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f4f4' }}
                  >
                    <svg 
                      className="w-8 h-8"
                      style={{ color: '#068c8c' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl mb-4 font-normal"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#c9a876'
                      }}
                    >
                      CURA DEL PAZIENTE
                    </h3>
                    {/* Premium decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-[1px]" style={{ background: '#c9a876' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c9a876' }}></div>
                      <div className="w-2 h-[1px]" style={{ background: '#c9a876' }}></div>
                    </div>
                    <p 
                      className="text-gray-700 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Ogni persona è unica e merita un'attenzione personalizzata. 
                      Ascolto le esigenze di ogni paziente per offrire il trattamento più adatto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Precisione Medica */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ border: '1px solid #d4c5a9' }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f4f4' }}
                  >
                    <svg 
                      className="w-8 h-8"
                      style={{ color: '#068c8c' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl mb-4 font-normal"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#c9a876'
                      }}
                    >
                      PRECISIONE MEDICA
                    </h3>
                    {/* Premium decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-[1px]" style={{ background: '#c9a876' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c9a876' }}></div>
                      <div className="w-2 h-[1px]" style={{ background: '#c9a876' }}></div>
                    </div>
                    <p 
                      className="text-gray-700 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Utilizzo protocolli clinici rigorosi e tecnologie avanzate per garantire 
                      risultati sicuri ed efficaci in ogni intervento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Risultati Naturali */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ border: '1px solid #d4c5a9' }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f4f4' }}
                  >
                    <svg 
                      className="w-8 h-8"
                      style={{ color: '#068c8c' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl mb-4 font-normal"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#c9a876'
                      }}
                    >
                      RISULTATI NATURALI
                    </h3>
                    {/* Premium decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-[1px]" style={{ background: '#c9a876' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c9a876' }}></div>
                      <div className="w-2 h-[1px]" style={{ background: '#c9a876' }}></div>
                    </div>
                    <p 
                      className="text-gray-700 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Il mio obiettivo è valorizzare la bellezza naturale di ogni persona, 
                      evitando eccessi e mantenendo l'armonia del viso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Sicurezza ed Etica */}
              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ border: '1px solid #d4c5a9' }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f4f4' }}
                  >
                    <svg 
                      className="w-8 h-8"
                      style={{ color: '#068c8c' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl mb-4 font-normal"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#c9a876'
                      }}
                    >
                      SICUREZZA ED ETICA
                    </h3>
                    {/* Premium decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-[1px]" style={{ background: '#c9a876' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c9a876' }}></div>
                      <div className="w-2 h-[1px]" style={{ background: '#c9a876' }}></div>
                    </div>
                    <p 
                      className="text-gray-700 font-light leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      La sicurezza del paziente è la priorità assoluta. 
                      Opero secondo i più alti standard etici e professionali della medicina.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom teal section with CTA */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl text-white mb-6 font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hai bisogno di maggiori informazioni?
          </h2>
          <p 
            className="text-xl text-white/90 mb-8 font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contattaci per una consulenza personalizzata
          </p>
          <a href="/contatti">
            <button 
              className="px-10 py-4 text-[#068c8c] bg-[#c9b896] tracking-widest text-lg hover:opacity-90 transition-all font-light"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textTransform: 'uppercase'
              }}
            >
              Prenota Appuntamento
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
