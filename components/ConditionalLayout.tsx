"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const [showLayout, setShowLayout] = useState(false)

  useEffect(() => {
    const urlToken = searchParams.get("token")
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("site_access_token") : null
    const SECRET_TOKEN = "irene2026"

    if (urlToken === SECRET_TOKEN || storedToken === SECRET_TOKEN) {
      setShowLayout(true)
    }
  }, [searchParams])

  if (!showLayout) {
    // No Navbar or Footer when coming soon page is showing
    return <>{children}</>
  }

  // Show Navbar and Footer when user has access
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
