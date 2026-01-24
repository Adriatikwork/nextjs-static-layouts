"use client"

import { useEffect } from 'react'
import { assetPath } from '@/lib/utils'

export function AssetPathProvider() {
  useEffect(() => {
    // Set CSS custom properties for asset paths
    const freshSnowPath = assetPath('/fresh_snow.png')
    document.documentElement.style.setProperty('--texture-fresh-snow', `url('${freshSnowPath}')`)
    
    // Force a repaint to ensure the CSS variable is applied
    document.documentElement.style.display = 'none'
    document.documentElement.offsetHeight // Trigger reflow
    document.documentElement.style.display = ''
  }, [])

  return null
}
