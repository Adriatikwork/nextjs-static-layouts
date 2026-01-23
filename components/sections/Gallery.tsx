"use client"

import Image from 'next/image'
import { assetPath } from '@/lib/utils'
import { useState } from 'react'

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tutti' },
    { id: 'dental', label: 'Odontoiatria' },
    { id: 'aesthetic', label: 'Medicina Estetica' },
    { id: 'clinic', label: 'La Clinica' }
  ]

  // Placeholder gallery items - using Unsplash medical/dental images
  const galleryItems = [
    { id: 1, category: 'clinic', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', title: 'Reception' },
    { id: 2, category: 'dental', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', title: 'Trattamento' },
    { id: 3, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', title: 'Consulenza' },
    { id: 4, category: 'clinic', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', title: 'Sala Attesa' },
    { id: 5, category: 'dental', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', title: 'Strumenti' },
    { id: 6, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80', title: 'Risultati' },
    { id: 7, category: 'clinic', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', title: 'Studio' },
    { id: 8, category: 'dental', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', title: 'Sorriso' },
    { id: 9, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', title: 'Trattamento Viso' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section className="relative w-full">
      {/* Top teal section with title */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl text-[#c9b896] tracking-wider font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Galleria
          </h1>
        </div>
      </div>

      {/* Main gallery section - beige background */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#e8dfd0' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category filters */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 tracking-wider text-base transition-all font-light ${
                    selectedCategory === category.id
                      ? 'bg-[#068c8c] text-white'
                      : 'bg-white text-[#068c8c] hover:bg-[#068c8c] hover:text-white'
                  }`}
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    border: '2px solid #068c8c'
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <h3 
                      className="text-2xl text-white font-normal"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom teal section with quote */}
      <div 
        className="w-full py-16"
        style={{
          background: `#068c8c url(${assetPath('/images/fresh-snow.png')}) repeat`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p 
            className="text-2xl text-white leading-relaxed font-normal italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Ogni sorriso racconta una storia. Scopri i risultati dei nostri trattamenti 
            e lasciati ispirare per il tuo percorso di benessere."
          </p>
        </div>
      </div>
    </section>
  )
}
