"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Hero } from '@/components/sections/Hero'
import ComingSoonPage from "@/app/coming-soon/page"

function HomeContent() {
  const searchParams = useSearchParams()

  // State to control whether to show the actual site or coming soon page
  const [showActualSite, setShowActualSite] = useState(false)

  // TOKEN VALIDATION LOGIC
  useEffect(() => {
    const urlToken = searchParams.get("token")
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("site_access_token") : null

    // Secret token to access actual site
    const SECRET_TOKEN = "irene2026"

    if (urlToken === SECRET_TOKEN) {
      // Token in URL matches - save to localStorage and grant access
      localStorage.setItem("site_access_token", SECRET_TOKEN)
      setShowActualSite(true)
    } else if (storedToken === SECRET_TOKEN) {
      // Token in localStorage matches - grant access
      setShowActualSite(true)
    }
    // If neither matches, showActualSite remains false
  }, [searchParams])

  // CONDITIONAL RENDERING - Show coming soon if no valid token
  if (!showActualSite) {
    return <ComingSoonPage />
  }

  // Your full website
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<ComingSoonPage />}>
      <HomeContent />
    </Suspense>
  )
}
