"use client"

import { Services } from '@/components/sections/Services'
import { Approach } from '@/components/sections/Approach'
import { CtaBand } from '@/components/sections/CtaBand'

export default function ServiziPage() {
  return (
    <main className="min-h-screen pt-[100px]">
      <Services />
      <Approach />
      <CtaBand />
    </main>
  )
}
