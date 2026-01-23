"use client"

import { assetPath } from '@/lib/utils'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
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
            Contatti
          </h1>
        </div>
      </div>

      {/* Main contact section - beige background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left column - Contact form */}
              <div className="bg-white p-10 rounded-lg shadow-lg" style={{ border: '2px solid #c9b896' }}>
                <h2 
                  className="text-3xl text-[#068c8c] mb-6 font-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Prenota un Appuntamento
                </h2>
                <p 
                  className="text-gray-700 mb-8 font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Compila il modulo e ti ricontatteremo al più presto per confermare il tuo appuntamento.
                </p>

                <form className="space-y-6">
                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-[#c9b896] rounded focus:outline-none focus:border-[#068c8c] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-[#c9b896] rounded focus:outline-none focus:border-[#068c8c] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-[#c9b896] rounded focus:outline-none focus:border-[#068c8c] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Servizio Richiesto
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-[#c9b896] rounded focus:outline-none focus:border-[#068c8c] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      <option>Odontoiatria Generale</option>
                      <option>Medicina Estetica</option>
                      <option>Implantologia</option>
                      <option>Ortodonzia</option>
                      <option>Sbiancamento Dentale</option>
                      <option>Igiene Dentale</option>
                      <option>Altro</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Messaggio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#c9b896] rounded focus:outline-none focus:border-[#068c8c] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#068c8c] text-white tracking-wider text-lg hover:opacity-90 transition-all font-light"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      textTransform: 'uppercase'
                    }}
                  >
                    Invia Richiesta
                  </button>
                </form>
              </div>

              {/* Right column - Contact info */}
              <div className="space-y-8">
                <div>
                  <h2 
                    className="text-3xl text-[#068c8c] mb-8 font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Informazioni di Contatto
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow" style={{ border: '1px solid #c9b896' }}>
                    <MapPin className="w-6 h-6 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-xl text-[#068c8c] mb-2 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Indirizzo
                      </h3>
                      <p 
                        className="text-gray-700 font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Via del Montone numero 34<br />
                        50100 Firenze (FI)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow" style={{ border: '1px solid #c9b896' }}>
                    <Phone className="w-6 h-6 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-xl text-[#068c8c] mb-2 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Telefono
                      </h3>
                      <p 
                        className="text-gray-700 font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        +39 055 12456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow" style={{ border: '1px solid #c9b896' }}>
                    <Mail className="w-6 h-6 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-xl text-[#068c8c] mb-2 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Email
                      </h3>
                      <p 
                        className="text-gray-700 font-light"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        info@dottoressamariabeconi.it
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow" style={{ border: '1px solid #c9b896' }}>
                    <Clock className="w-6 h-6 text-[#068c8c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 
                        className="text-xl text-[#068c8c] mb-2 font-normal"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Orari di Apertura
                      </h3>
                      <div 
                        className="text-gray-700 font-light space-y-1"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        <p>Lunedì - Venerdì: 9:00 - 19:00</p>
                        <p>Sabato: 9:00 - 13:00</p>
                        <p>Domenica: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom teal section with map placeholder */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 rounded-lg p-8 text-center">
              <p 
                className="text-2xl text-white font-normal italic"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "Siamo qui per prenderci cura del tuo sorriso e del tuo benessere. 
                Vieni a trovarci nel cuore di Firenze."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
