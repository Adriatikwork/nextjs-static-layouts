import { Gallery } from '@/components/sections/Gallery'
import { content } from '@/content/siteCopy'

export const metadata = {
  title: content.it.seo.gallery.title,
  description: content.it.seo.gallery.description,
}

export default function GalleriaPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-[72px] lg:pt-20">
      <Gallery />
    </main>
  )
}
