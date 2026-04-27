import { Share2, MessageCircle, Play } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#C8102E]/15 px-6 md:px-14 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">
            BRAVUS<span className="text-[#C8102E]">.</span>
          </span>
          <p className="font-['Barlow'] text-xs text-[#555] mt-1 tracking-wide">
            Brazilian Jiu-Jitsu · Praia Grande, SP
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { href: 'https://instagram.com/bravusbjj', icon: Share2, label: 'Instagram' },
            { href: 'https://wa.me/5513999990000', icon: MessageCircle, label: 'WhatsApp' },
            { href: 'https://youtube.com/@bravusbjj', icon: Play, label: 'YouTube' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 bg-[#1E1E1E] border border-white/8 flex items-center justify-center text-[#666] hover:text-[#C8102E] hover:border-[#C8102E]/40 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-['Barlow'] text-xs text-[#555] tracking-wide text-center md:text-right">
          © {new Date().getFullYear()} Bravus BJJ. Feito com 🥋 no tatame.
        </p>
      </div>
    </footer>
  )
}
