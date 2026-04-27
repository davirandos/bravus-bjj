'use client'

import { useReveal } from './useReveal'
import SectionHeader from './SectionHeader'
import { MapPin, Clock, Car, Phone } from 'lucide-react'

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: 'Endereço',
    content: 'Av. Ayrton Senna, 1500 – Sala 12\nPraia Grande, SP – CEP 11700-000',
  },
  {
    icon: Clock,
    label: 'Funcionamento',
    content: 'Segunda a Sexta: 06:30 – 22:00\nSábado: 07:00 – 13:00',
  },
  {
    icon: Car,
    label: 'Estacionamento',
    content: 'Estacionamento gratuito para alunos\nAcesso fácil pela Rodovia Padre Manoel',
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    content: '(13) 99999-0000',
  },
]

function InfoItem({
  icon: Icon,
  label,
  content,
  delay,
}: {
  icon: React.ElementType
  label: string
  content: string
  delay: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`flex gap-4 transition-all duration-700`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
      }}
    >
      <div className="w-10 h-10 flex-shrink-0 bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center">
        <Icon size={18} className="text-[#C8102E]" />
      </div>
      <div>
        <h4 className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#C8102E] mb-1">
          {label}
        </h4>
        <p className="font-['Barlow'] text-sm text-[#bbb] leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  )
}

export default function Localizacao() {
  const { ref: mapRef, visible: mapVisible } = useReveal()

  return (
    <section id="localizacao" className="bg-[#0A0A0A] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <SectionHeader label="Onde estamos" title="LOCALIZAÇÃO" />
          <div className="flex flex-col gap-7">
            {INFO_ITEMS.map((item, i) => (
              <InfoItem key={item.label} {...item} delay={i * 80} />
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://maps.google.com/?q=Praia+Grande+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#C8102E] text-white font-['Barlow_Condensed'] text-sm font-bold tracking-[3px] uppercase hover:bg-[#a00d24] transition-colors"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              <MapPin size={16} />
              Abrir no Google Maps
            </a>
          </div>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className={`rounded-sm overflow-hidden border border-[#C8102E]/20 transition-all duration-700 delay-200 ${
            mapVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ aspectRatio: '4/3' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58512.0!2d-46.4057!3d-24.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1f69e1b6af1d%3A0x4b5db97c4cb9ad8a!2sPraia%20Grande%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.75)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Bravus BJJ"
          />
        </div>
      </div>
    </section>
  )
}
