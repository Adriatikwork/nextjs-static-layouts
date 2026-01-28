import { About } from '@/components/sections/About'
import { content } from '@/content/siteCopy'

export const metadata = {
  title: content.it.seo.about.title,
  description: content.it.seo.about.description,
}

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-[72px] lg:pt-20">
      <About />
    </main>
  )
}
