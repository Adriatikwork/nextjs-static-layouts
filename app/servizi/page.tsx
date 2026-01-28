import { Services } from '@/components/sections/Services'
import { content } from '@/content/siteCopy'

export const metadata = {
  title: content.it.seo.services.title,
  description: content.it.seo.services.description,
}

export default function ServiziPage() {
  return <Services />
}
