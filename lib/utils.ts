import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add basePath to public assets for GitHub Pages
export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-static-layouts' : ''
  return `${basePath}${path}`
}
