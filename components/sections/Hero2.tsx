"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"
import { assetPath } from "@/lib/utils"

export function Hero2() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }

  return (
    <section id="home" className="relative teal-gradient text-white overflow-hidden">
      {/* Subtle ornaments */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-30">
        <div className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full border border-white/20" />
        <div className="absolute -right-10 top-40 h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="absolute left-10 bottom-16 h-24 w-24 rotate-45 border border-brand-gold/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid min-h-[100svh] grid-cols-1 gap-10 pb-12 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-16 lg:pt-8">
          {/* Left */}
          <div className="flex flex-col items-start text-left">
            <h1
              className="uppercase leading-[0.95] tracking-[0.10em] text-[clamp(2.4rem,6.4vw,5.2rem)]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span className="block">{t.hero.name.split(" ")[0]}</span>
              <span className="block">{t.hero.name.split(" ").slice(1, 3).join(" ")}</span>
              <span className="block">{t.hero.name.split(" ").slice(3).join(" ")}</span>
            </h1>

            {/* Ornate divider (inspired by your reference) */}
            <div className="mt-6 flex w-full items-center justify-start">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-gold/80 to-brand-gold/50" />
                <span className="text-brand-gold/80 text-[10px] leading-none">◂◂</span>
                <span className="h-2 w-2 rounded-full bg-brand-gold/80" />
                <span className="text-brand-gold/80 text-[10px] leading-none">▸▸</span>
                <span className="h-[1px] w-24 bg-gradient-to-r from-brand-gold/50 via-brand-gold/80 to-transparent" />
              </div>
            </div>

            <p
              className="mt-8 max-w-[52ch] uppercase text-white/85 tracking-[0.20em] text-[clamp(0.72rem,1.25vw,1.05rem)]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {t.hero.subtitle}
            </p>

            <p className="mt-6 max-w-[50ch] text-white/75 leading-relaxed text-[clamp(0.95rem,1.15vw,1.1rem)]">
              {t.hero.tagline}
            </p>

            <div className="mt-7 flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4 text-brand-gold/90" />
              <span className="text-sm">{t.hero.location}</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => scrollToSection("contatti")}
                className="btn-premium w-full sm:w-auto"
              >
                {t.hero.ctaPrimary}
              </button>
              <button
                onClick={() => scrollToSection("servizi")}
                className="btn-nav-outline w-full sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
              <div className="absolute inset-0 -translate-x-2 translate-y-2 rounded-[28px] bg-black/10 blur-[2px]" />
              <div className="relative rounded-[28px] border border-white/15 bg-white/5 p-8 sm:p-10 backdrop-blur-[2px]">
                <div className="relative flex items-center justify-center">
                  <Image
                    src={assetPath("/logo-icon.png")}
                    alt="Logo"
                    width={420}
                    height={420}
                    priority
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 46vw, 420px"
                    className="h-auto w-[min(70vw,260px)] sm:w-[min(60vw,300px)] lg:w-[320px] opacity-95"
                  />
                </div>

                {/* Corner accents */}
                <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-brand-gold/60" />
                <div className="pointer-events-none absolute right-6 top-6 h-12 w-12 border-r border-t border-brand-gold/30" />
                <div className="pointer-events-none absolute left-6 bottom-6 h-12 w-12 border-b border-l border-brand-gold/30" />
                <div className="pointer-events-none absolute right-6 bottom-6 h-12 w-12 border-b border-r border-brand-gold/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

