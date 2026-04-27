'use client'

import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { useReveal } from './useReveal'
import { CheckCircle } from 'lucide-react'
import type { ContactForm } from '../types'

const MODALIDADES = [
  'Jiu-Jitsu Adulto',
  'Jiu-Jitsu Infantil (Kids)',
  'No-Gi',
  'Grupo de Competição',
]

const INITIAL: ContactForm = {
  nome: '',
  telefone: '',
  email: '',
  modalidade: MODALIDADES[0],
  mensagem: '',
}

const inputClass =
  'w-full bg-[#1E1E1E] border border-white/8 text-[#F0EDE8] px-4 py-3.5 font-[\'Barlow\'] text-sm rounded-sm outline-none focus:border-[#C8102E] transition-colors duration-200 placeholder:text-[#555]'

export default function Contato() {
  const [form, setForm] = useState<ContactForm>(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, visible } = useReveal()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contato" className="bg-[#0A0A0A] py-24 px-6 md:px-14">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Aula experimental"
          title="GARANTA SUA<br/>AULA GRÁTIS"
          center
        />

        <p className="text-center text-[#888] font-['Barlow'] text-sm mb-10 -mt-4">
          Preencha o formulário e nossa equipe entrará em contato para agendar sua aula experimental gratuita.
        </p>

        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666]">
                Nome completo
              </label>
              <input
                name="nome"
                type="text"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className={inputClass}
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-2">
              <label className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666]">
                Telefone / WhatsApp
              </label>
              <input
                name="telefone"
                type="tel"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(13) 9 0000-0000"
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666]">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className={inputClass}
              />
            </div>

            {/* Modalidade */}
            <div className="flex flex-col gap-2">
              <label className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666]">
                Modalidade de interesse
              </label>
              <select
                name="modalidade"
                value={form.modalidade}
                onChange={handleChange}
                className={inputClass}
              >
                {MODALIDADES.map((m) => (
                  <option key={m} value={m} className="bg-[#1E1E1E]">
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[3px] uppercase text-[#666]">
                Mensagem (opcional)
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Conte um pouco sobre você ou faça sua pergunta..."
                rows={4}
                className={`${inputClass} resize-y min-h-[100px]`}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex flex-col items-center gap-4 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-14 py-4 bg-[#C8102E] text-white font-['Barlow_Condensed'] text-sm font-bold tracking-[4px] uppercase border-2 border-[#C8102E] hover:bg-transparent hover:text-[#C8102E] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                {loading ? 'Enviando...' : 'Quero minha aula grátis'}
              </button>

              {sent && (
                <div className="flex items-center gap-2 text-green-400 font-['Barlow_Condensed'] text-sm font-bold tracking-[2px] uppercase animate-pulse">
                  <CheckCircle size={16} />
                  Mensagem enviada! Entraremos em contato em breve.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
