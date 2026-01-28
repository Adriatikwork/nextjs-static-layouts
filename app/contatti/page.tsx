import { Contact } from '@/components/sections/Contact'
import { content } from '@/content/siteCopy'

export const metadata = {
  title: content.it.seo.contact.title,
  description: content.it.seo.contact.description,
}

export default function ContattiPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-[72px] lg:pt-20">
      <Contact />
    </main>
  )
}
