"use client"

import { Gallery } from '@/components/sections/Gallery'
import { CtaBand } from '@/components/sections/CtaBand'

export default function GalleriaPage() {
  return (
    <main className="min-h-screen pt-[100px]">
      <Gallery />
      <CtaBand />
    </main>
  )
}
