import { Hero } from '@/components/sections/Hero'
import { content } from '@/content/siteCopy'

export const metadata = {
  title: content.it.seo.home.title,
  description: content.it.seo.home.description,
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  )
}
