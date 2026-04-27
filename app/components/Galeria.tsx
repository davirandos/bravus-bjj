'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { GALLERY_PHOTOS } from '../data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Galeria() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const getSlideWidth = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return 380 + 16
    return (track.children[0] as HTMLElement).offsetWidth + 16
  }, [])

  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current
      if (!track) return
      const clamped = Math.max(0, Math.min(index, GALLERY_PHOTOS.length - 1))
      setActiveIndex(clamped)
      track.scrollTo({ left: clamped * getSlideWidth(), behavior: 'smooth' })
    },
    [getSlideWidth]
  )

  return (
    <section id="galeria" className="bg-[#141414] py-24 overflow-hidden">
      <div className="px-6 md:px-14 mb-12">
        <SectionHeader label="Galeria" title="NO TATAME" />
      </div>

      {/* Track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-4 px-6 md:px-14 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="relative flex-none w-[280px] md:w-[380px] aspect-[4/5] rounded-sm overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredId === photo.id ? 'scale-105' : 'scale-100'
                }`}
                unoptimized
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 flex items-end p-5 ${
                  hoveredId === photo.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-['Barlow_Condensed'] text-xs tracking-[3px] uppercase text-[#F0EDE8]">
                  {photo.caption}
                </span>
              </div>

              {/* Red corner accent */}
              <div
                className={`absolute top-0 left-0 w-10 h-1 bg-[#C8102E] transition-all duration-300 ${
                  hoveredId === photo.id ? 'w-16' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 px-6 md:px-14 mt-8">
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="w-12 h-12 flex items-center justify-center bg-[#1E1E1E] border border-white/10 text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex === GALLERY_PHOTOS.length - 1}
          className="w-12 h-12 flex items-center justify-center bg-[#1E1E1E] border border-white/10 text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2 ml-2">
          {GALLERY_PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-[#C8102E]'
                  : 'w-2 h-2 bg-[#333] hover:bg-[#666]'
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
