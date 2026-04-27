'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,16,46,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Animated grid */}
      <div
        ref={ref}
        className="absolute inset-[-10%] transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,16,46,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 100%)',
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8102E]/40 to-transparent"
        style={{ top: '62%' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <span
          className="font-['Barlow_Condensed'] text-xs font-bold tracking-[6px] uppercase text-[#C8102E] border border-[#C8102E]/40 px-5 py-1.5 mb-8"
          style={{
            animation: 'fadeUp 0.8s ease both',
            clipPath: 'polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)',
          }}
        >
          Academia de Jiu-Jitsu
        </span>

        <h1
          className="font-['Bebas_Neue'] text-white leading-none"
          style={{
            fontSize: 'clamp(5rem, 14vw, 13rem)',
            letterSpacing: '2px',
            animation: 'fadeUp 0.9s 0.1s ease both',
            animationFillMode: 'both',
          }}
        >
          BRA
          <span className="text-[#C8102E]">V</span>
          US
        </h1>

        <div
          className="font-['Bebas_Neue'] text-[#C8102E] tracking-widest"
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 3.5rem)',
            animation: 'fadeUp 0.9s 0.15s ease both',
            animationFillMode: 'both',
          }}
        >
          BRAZILIAN JIU-JITSU
        </div>

        <p
          className="text-[#888] font-['Barlow'] font-light text-base md:text-lg tracking-wide mt-6 max-w-md px-4"
          style={{ animation: 'fadeUp 1s 0.25s ease both', animationFillMode: 'both' }}
        >
          Forja seu caráter no tatame. Treine com os melhores, torne-se o seu melhor.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          style={{ animation: 'fadeUp 1s 0.35s ease both', animationFillMode: 'both' }}
        >
          <a
            href="#grade"
            className="px-10 py-4 bg-[#C8102E] text-white font-['Barlow_Condensed'] text-sm font-bold tracking-[4px] uppercase border-2 border-[#C8102E] hover:bg-transparent hover:text-[#C8102E] transition-all duration-200"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Ver Grade de Aulas
          </a>
          <a
            href="#contato"
            className="px-10 py-4 bg-transparent text-[#F0EDE8] font-['Barlow_Condensed'] text-sm font-bold tracking-[4px] uppercase border-2 border-[rgba(240,237,232,0.25)] hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-200"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Aula Experimental
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeUp 1s 0.6s ease both', animationFillMode: 'both' }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C8102E] to-transparent animate-pulse" />
        <span className="font-['Barlow_Condensed'] text-[10px] tracking-[4px] uppercase text-[#555]">
          Scroll
        </span>
      </div>
    </section>
  )
}
