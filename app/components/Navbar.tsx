'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#grade', label: 'Grade' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((s) => {
        const el = s as HTMLElement
        if (window.scrollY >= el.offsetTop - 120) setActive(el.id)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C8102E]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between h-16">
        <a href="#hero" className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">
          BRAVUS<span className="text-[#C8102E]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-['Barlow_Condensed'] text-xs font-bold tracking-[3px] uppercase transition-colors duration-200 ${
                  active === link.href.slice(1) ? 'text-[#C8102E]' : 'text-[#888] hover:text-[#C8102E]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:block px-6 py-2 bg-[#C8102E] text-white font-['Barlow_Condensed'] text-xs font-bold tracking-[3px] uppercase hover:bg-[#a00d24] transition-colors"
          style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
        >
          Aula Grátis
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#C8102E]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Barlow_Condensed'] text-sm font-bold tracking-[3px] uppercase text-[#aaa] hover:text-[#C8102E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
