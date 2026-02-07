"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut' | 'none'>('none')

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' })

    setTransitionStage('fadeIn')
    const timer = setTimeout(() => {
      setTransitionStage('none')
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayChildren(children)
      }, 150)
      return () => clearTimeout(timer)
    } else {
      setDisplayChildren(children)
    }
  }, [children, transitionStage])

  return (
    <div
      style={{
        opacity: transitionStage === 'fadeIn' ? 1 : transitionStage === 'fadeOut' ? 0 : 1,
        transition: 'opacity 0.25s ease-in-out',
      }}
    >
      {displayChildren}
    </div>
  )
}
