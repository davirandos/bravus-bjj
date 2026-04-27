'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'
import SectionHeader from './SectionHeader'
import { STATS } from '../data'

const BELTS = [
  { color: '#E8E8E8', label: 'Branca' },
  { color: '#1A4FA0', label: 'Azul' },
  { color: '#6A0DAD', label: 'Roxa' },
  { color: '#7B3F00', label: 'Marrom' },
  { color: '#111111', label: 'Preta', border: true },
]

function StatBox({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`bg-[#1E1E1E] p-7 border-l-[3px] border-[#C8102E] transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
    >
      <div className="font-['Bebas_Neue'] text-[#C8102E] text-5xl leading-none">{value}</div>
      <div className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666] mt-1">{label}</div>
    </div>
  )
}

export default function Sobre() {
  const { ref: imgRef, visible: imgVisible } = useReveal()
  const { ref: textRef, visible: textVisible } = useReveal()

  return (
    <section id="sobre" className="bg-[#141414] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: text */}
        <div>
          <SectionHeader label="Quem somos" title="ARTE.<br/>DISCIPLINA.<br/>EVOLUÇÃO." />

          <div
            ref={textRef}
            className={`transition-all duration-700 delay-100 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-[#999] font-['Barlow'] font-light leading-relaxed mb-4">
              A Bravus Jiu-Jitsu nasceu da paixão pelo esporte e da crença de que o tatame transforma
              vidas. Fundada por faixas-pretas com mais de duas décadas de experiência, nossa academia
              oferece um ambiente seguro, profissional e acolhedor.
            </p>
            <p className="text-[#999] font-['Barlow'] font-light leading-relaxed">
              Do iniciante ao competidor de alto nível, aqui cada aluno encontra o seu caminho no
              jiu-jitsu. Venha descobrir o que a arte suave pode fazer por você.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-0.5 mt-10">
            {STATS.map((stat, i) => (
              <StatBox key={stat.label} value={stat.value} label={stat.label} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Right: image with belts */}
        <div
          ref={imgRef}
          className={`relative aspect-[4/5] rounded-sm overflow-hidden transition-all duration-700 delay-200 ${
            imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80"
            alt="Treino de jiu-jitsu na Bravus"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/20 to-black/60" />

          {/* Belt display */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {BELTS.map((belt) => (
              <div
                key={belt.label}
                title={`Faixa ${belt.label}`}
                className="w-3 h-28 rounded-sm shadow-lg"
                style={{
                  backgroundColor: belt.color,
                  border: belt.border ? '1px solid #333' : 'none',
                }}
              />
            ))}
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-16 h-1 bg-[#C8102E]" />
          <div className="absolute top-0 left-0 w-1 h-16 bg-[#C8102E]" />
        </div>
      </div>
    </section>
  )
}
