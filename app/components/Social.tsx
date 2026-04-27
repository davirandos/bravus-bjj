'use client'

import { useReveal } from './useReveal'
import SectionHeader from './SectionHeader'
import { SOCIAL_LINKS } from '../data'
import type { SocialLink } from '../types'
import { ExternalLink } from 'lucide-react'

function SocialCard({ link, delay }: { link: SocialLink; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-[#1E1E1E] p-8 overflow-hidden block hover:bg-[#252525] transition-colors duration-300"
        style={{ borderTop: `3px solid ${link.color}` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at top left, ${link.color}, transparent 60%)` }}
        />
        <span className="text-3xl mb-4 block relative z-10">{link.icon}</span>
        <h3 className="font-['Bebas_Neue'] text-white text-2xl tracking-widest mb-2 relative z-10">
          {link.platform}
        </h3>
        <p className="font-['Barlow'] text-sm text-[#888] leading-relaxed mb-5 relative z-10">
          {link.description}
        </p>
        <div className="flex items-center justify-between relative z-10">
          <span
            className="font-['Barlow_Condensed'] text-xs font-bold tracking-[3px] uppercase"
            style={{ color: link.color }}
          >
            {link.handle}
          </span>
          <ExternalLink size={14} style={{ color: `${link.color}80` }} />
        </div>
      </a>
    </div>
  )
}

export default function Social() {
  return (
    <section id="social" className="bg-[#141414] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Conecte-se" title="REDES SOCIAIS<br/>& CONTATO" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {SOCIAL_LINKS.map((link, i) => (
            <SocialCard key={link.id} link={link} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
