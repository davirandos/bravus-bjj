'use client'

import { useReveal } from './useReveal'

interface SectionHeaderProps {
  label: string
  title: string
  className?: string
  center?: boolean
}

export default function SectionHeader({ label, title, className = '', center = false }: SectionHeaderProps) {
  const { ref, visible } = useReveal()
  const align = center ? 'items-center text-center' : 'items-start'

  return (
    <div
      ref={ref}
      className={`flex flex-col ${align} ${className} transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[5px] uppercase text-[#C8102E] mb-3">
        {label}
      </span>
      <h2
        className="font-['Bebas_Neue'] text-white leading-none"
        style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="w-12 h-[3px] bg-[#C8102E] mt-5 mb-10" />
    </div>
  )
}
