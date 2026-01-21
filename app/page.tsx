"use client"

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero2 } from '@/components/sections/Hero2'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Approach } from '@/components/sections/Approach'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'
import { CtaBand } from '@/components/sections/CtaBand'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero2 />
      <About />
      <Services />
      <Approach />
      <Gallery />
      <Contact />
      <CtaBand />
      <Footer />
    </main>
  )
}
