"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <>
      <nav 
        className="w-full relative"
        style={{ backgroundColor: '#068c8c' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-stretch">
            {/* Logo - spans both top bar and main navbar */}
            <div className="flex items-center pr-8">
              <Link href="/">
                <div className="relative w-24 h-24">
                  <Image
                    src="/logo-combined.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Right side - Contact bar and navigation */}
            <div className="flex-1 flex flex-col">
              {/* Top contact bar */}
              <div className="border-b border-white/20 py-2">
                <div className="flex justify-end items-center gap-4 text-white text-xs font-light">
                  <span>Via del Montone numero 34. Firenze - Secilafè wae effustae</span>
                  <span>+39 05512456</span>
                </div>
              </div>

              {/* Main navbar */}
              <div className="py-4">
                <div className="flex items-center justify-center gap-12">
                  <ul className="flex items-center gap-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <li>
                      <Link 
                        href="/" 
                        className={`hover:opacity-80 transition-opacity text-sm font-normal tracking-wide ${
                          pathname === '/' ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/chi-sono" 
                        className={`hover:opacity-80 transition-opacity text-sm font-normal tracking-wide ${
                          pathname === '/chi-sono' ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        CHI SONO
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/servizi" 
                        className={`hover:opacity-80 transition-opacity text-sm font-normal tracking-wide ${
                          pathname === '/servizi' ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        SERVIZI
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/galleria" 
                        className={`hover:opacity-80 transition-opacity text-sm font-normal tracking-wide ${
                          pathname === '/galleria' ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        GALLERIA
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contatti" 
                        className={`hover:opacity-80 transition-opacity text-sm font-normal tracking-wide ${
                          pathname === '/contatti' ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        CONTATTI
                      </Link>
                    </li>
                  </ul>

                  {/* Language Toggle instead of Search */}
                  <div className="flex items-center">
                    <LanguageToggle isScrolled={false} />
                  </div>

                  {/* Prenota button */}
                  <Link href="/contatti">
                    <button 
                      className="px-8 py-3 text-white tracking-wide hover:opacity-80 transition-all text-sm font-light"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        border: '2px solid #c9b896',
                        backgroundColor: 'transparent'
                      }}
                    >
                      PRENOTA
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Golden Decorative Bar under navbar */}
        <div className="golden-bar absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9b896] to-transparent opacity-60"></div>
      </nav>
    </>
  )
}
