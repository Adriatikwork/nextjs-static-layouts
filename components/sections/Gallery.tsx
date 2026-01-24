"use client"

import Image from 'next/image'
import { assetPath } from '@/lib/utils'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Placeholder gallery items - using Unsplash medical/dental images
  const galleryItems = [
    { id: 1, category: 'clinic', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80', title: 'Reception', description: 'Accoglienza moderna e confortevole' },
    { id: 2, category: 'dental', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80', title: 'Trattamento Dentale', description: 'Tecnologie all\'avanguardia' },
    { id: 3, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80', title: 'Consulenza Estetica', description: 'Approccio personalizzato' },
    { id: 4, category: 'clinic', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80', title: 'Sala Attesa', description: 'Ambiente rilassante' },
    { id: 5, category: 'dental', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80', title: 'Strumenti Professionali', description: 'Precisione e sicurezza' },
    { id: 6, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80', title: 'Risultati Naturali', description: 'Bellezza armoniosa' },
    { id: 7, category: 'clinic', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80', title: 'Studio Medico', description: 'Spazi dedicati' },
    { id: 8, category: 'dental', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80', title: 'Sorriso Perfetto', description: 'Cura personalizzata' },
    { id: 9, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80', title: 'Trattamento Viso', description: 'Risultati visibili' },
    { id: 10, category: 'clinic', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80', title: 'Ambiente Moderno', description: 'Design contemporaneo' },
    { id: 11, category: 'dental', image: 'https://images.unsplash.com/photo-1609840112855-9ab5710e7440?w=1200&q=80', title: 'Igiene Dentale', description: 'Prevenzione efficace' },
    { id: 12, category: 'aesthetic', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80', title: 'Ringiovanimento', description: 'Tecniche avanzate' }
  ]

  const categories = [
    { id: 'clinic', label: 'Clinica' },
    { id: 'dental', label: 'Dentale' },
    { id: 'aesthetic', label: 'Estetica' }
  ]

  const filteredItems = selectedCategory
    ? galleryItems.filter(item => item.category === selectedCategory)
    : galleryItems

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryItems.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const selectedImage = selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null

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
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 
                className="text-3xl text-gray-800 mb-4 font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                I nostri spazi e risultati
              </h2>
              <p 
                className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Scopri gli ambienti della clinica e i risultati dei nostri trattamenti
              </p>
            </div>

            {/* Gallery grid with masonry layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayedItems.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#068c8c]/90 via-[#068c8c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 px-4">
                    <h3 
                      className="text-xl md:text-2xl text-white font-normal mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm text-white/90 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* View More / View Less Button - Premium Gold Style */}
            {galleryItems.length > 6 && (
              <div className="text-center mt-16">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group relative px-12 py-4 text-lg font-light tracking-wider overflow-hidden transition-all duration-500 hover:scale-105"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'white',
                    backgroundColor: '#c9a876',
                    boxShadow: '0 4px 15px rgba(201, 168, 118, 0.3)',
                  }}
                >
                  <span className="relative z-10">
                    {showAll ? 'Mostra meno' : `Scopri tutte le ${galleryItems.length} foto`}
                  </span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-[#d4b896] to-[#c9a876] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>

    {/* Premium Lightbox Modal */}
    <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 border-none bg-black/95"
        showCloseButton={false}
      >
        {selectedImage && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < galleryItems.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center px-4 md:px-16 py-20">
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="95vw"
                  priority
                />
              </div>
            </div>

            {/* Image Info - Bottom Overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 px-8 py-6 text-center"
              style={{ 
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              }}
            >
              <h3 
                className="text-2xl md:text-3xl text-white font-normal mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {selectedImage.title}
              </h3>
              <p 
                className="text-base md:text-lg text-white/80 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {selectedImage.description}
              </p>
              <p 
                className="text-sm text-white/60 mt-4 font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {selectedImageIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
