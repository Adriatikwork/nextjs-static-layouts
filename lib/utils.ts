import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to get correct asset paths for public folder assets.
 * Works automatically across all deployment scenarios:
 * - Local development: no prefix
 * - GitHub Pages: adds /repo-name prefix
 * - Custom domain: no prefix (after config update)
 * 
 * Usage: assetPath('/images/photo.jpg') or assetPath('/logo.svg')
 * 
 * To switch to custom domain: set USE_BASE_PATH=false in next.config.mjs
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
