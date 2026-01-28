"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

export function Gallery() {
  const { t } = useLanguage()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Smart scroll behavior: detect navbar visibility
      if (currentScrollY < 10) {
        setIsNavbarVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - navbar is hidden
        setIsNavbarVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - navbar is visible
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const imageUrls = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80',
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
    'https://images.unsplash.com/photo-1676897288522-e8a081e71430?q=80',
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80'
  ]

  const galleryItems = t.gallery.items.map((item: any, index: number) => ({
    ...item,
    image: imageUrls[index]
  }))

  const categories = [
    { id: 'all', label: t.gallery.categories.all },
    { id: 'clinic', label: t.gallery.categories.clinic },
    { id: 'dental', label: t.gallery.categories.dental },
    { id: 'aesthetic', label: t.gallery.categories.aesthetic }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    const actualIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id)
    setSelectedImageIndex(actualIndex)
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
    <>
      {/* Floating Category Bar - Responds to Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-30 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-lg shadow-sm ${
          isNavbarVisible ? 'top-16 sm:top-[72px] lg:top-20' : 'top-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Subtle Label */}
            <span
              className="text-sm tracking-[0.3em] uppercase text-gray-500 font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.gallery.pageHeading}
            </span>

            {/* Filter Pills - Minimal Design */}
            <div className="flex gap-2 flex-wrap justify-end">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#068c8c] text-white'
                      : 'bg-transparent text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Content - Masonry Grid with proper spacing */}
      <section className="w-full bg-[#f8f7f5]" style={{ paddingTop: isNavbarVisible ? 'calc(5rem + 72px)' : '5rem' }}>
        <div className="container mx-auto px-4 py-8 transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>

                  <div className="p-4 bg-white">
                    <h3
                      className="text-sm font-normal text-gray-800 mb-1"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 font-light"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t.gallery.noImages}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-0">
          {selectedImage && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              {selectedImageIndex !== null && selectedImageIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              )}

              {selectedImageIndex !== null && selectedImageIndex < galleryItems.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              )}

              {/* Image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl text-white font-normal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {selectedImage.title}
                </h3>
                <p className="text-white/70 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
