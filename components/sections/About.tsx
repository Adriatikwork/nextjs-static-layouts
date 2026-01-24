"use client"

import Image from 'next/image'
import { assetPath } from '@/lib/utils'

export function About() {
  return (
    <section className="relative w-full">
      {/* Wrapper for TOP TEAL + MIDDLE BEIGE with image spanning ONLY these two */}
      <div className="relative w-full">
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
              Chi Sono
            </h1>
          </div>
        </div>

        {/* Beige background section */}
        <div 
          className="w-full py-20"
          style={{ backgroundColor: '#e8dfd0' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4 font-normal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Dottoressa Irene Maria Beconi
                  </h2>
                  <p 
                    className="text-lg md:text-xl text-gray-800 font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Odontoiatria e Medicina Estetica del Viso
                  </p>
                </div>

                {/* Decorative line */}
                <div className="w-full h-[1px] bg-gray-400"></div>

                {/* Description text */}
                <p 
                  className="text-lg text-gray-800 leading-relaxed font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Così ligula idelit ud mi ele varius varius. Id eu siit tincidunt urna, coof diam quas amet condimentum laoreet tacmnent. Facentum effit. Dgnissim aurc, consectetur faucibus exorcidian vestibulum, esocondeconse.
                </p>

                {/* Button with signature */}
                <div className="flex items-center gap-6">
                  <button 
                    className="px-8 py-3 text-white tracking-wider text-base hover:opacity-80 transition-all font-light"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      backgroundColor: '#068c8c',
                      textTransform: 'uppercase'
                    }}
                  >
                    HENITETA IGNA
                  </button>
                  <div className="relative w-32 h-12">
                    <Image
                      src={assetPath("/images/signature.png") || "/placeholder.svg"}
                      alt="Signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Placeholder for image */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Doctor Image - Absolute positioned to span ONLY teal CHI SONO + beige Dottoressa sections */}
        <div className="absolute top-0 right-0 w-[50%] h-full hidden lg:flex items-end justify-end pointer-events-none pr-8 pb-8">
          <div className="relative w-full max-w-xl" style={{ height: '85%' }}>
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Dottoressa Irene Maria Beconi"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* LA MIA FORMAZIONE Section - Teal background - NO IMAGE */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title with decorative lines */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-1 h-[1px] bg-[#c9b896]"></div>
              <h2 
                className="text-3xl md:text-4xl text-[#c9b896] tracking-wider font-normal text-center"
                style={{ fontFamily: 'Playfair Display, serif', textTransform: 'uppercase' }}
              >
                La Mia Formazione
              </h2>
              <div className="flex-1 h-[1px] bg-[#c9b896]"></div>
            </div>

            {/* Two columns of bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {/* Left column */}
              <div className="space-y-4">
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Convurt luct intesquwe der empo est lineaticenlectric.</span>
                </p>
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Dicturger sit amet sit amet quidi mudid.</span>
                </p>
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Addressperio nndcristoquw semdapi sied HLÅC.</span>
                </p>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Convurt luct intesquwee der empo est lineatictenlectrit.</span>
                </p>
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Jano sed saness met, laoorneathcquo magnalis.</span>
                </p>
                <p className="text-lg font-light flex items-start gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[#c9b896] mt-1">•</span>
                  <span>Eais sed velit id Sess (modi novet lorem)</span>
                </p>
              </div>
            </div>

            {/* Decorative elements at bottom */}
            <div className="flex items-center justify-center gap-3 mt-12">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c9b896' }}></div>
              <div className="w-3 h-3" style={{ 
                backgroundColor: '#c9b896',
                transform: 'rotate(45deg)'
              }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c9b896' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beige section with quote - SEPARATE, NO IMAGE */}
      <div 
        className="w-full py-16"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p 
            className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Scegli la migliore per avere un sorriso curato e una stroria luminante. Con il tempo, colgi Gingiglia 
            sii client fidato nel conoscere nuove tecniche e trattamenti innovatve."
          </p>
        </div>
      </div>
    </section>
  )
}
