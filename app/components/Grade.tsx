'use client'

import { useReveal } from './useReveal'
import SectionHeader from './SectionHeader'
import { SCHEDULE, DAYS, DAY_LABELS } from '../data'
import type { ClassCategory, ScheduleEntry } from '../types'

const TAG_STYLES: Record<NonNullable<ClassCategory>, string> = {
  fundamentos: 'bg-blue-900/25 text-blue-300 border border-blue-400/30',
  avancado:    'bg-red-900/20 text-red-300 border border-red-400/30',
  kids:        'bg-yellow-900/20 text-yellow-400 border border-yellow-400/30',
  competicao:  'bg-purple-900/20 text-purple-300 border border-purple-400/30',
  'no-gi':     'bg-white/5 text-[#aaa] border border-white/15',
}

function ClassTag({ entry }: { entry: ScheduleEntry }) {
  if (!entry.category) return <span className="text-[#444]">—</span>
  return (
    <span
      className={`inline-block px-3 py-1 text-[11px] font-['Barlow_Condensed'] font-bold tracking-wide uppercase rounded-sm ${TAG_STYLES[entry.category]}`}
    >
      {entry.label}
    </span>
  )
}

function LegendItem({ category, label }: { category: NonNullable<ClassCategory>; label: string }) {
  return (
    <span className={`inline-block px-3 py-1 text-[10px] font-['Barlow_Condensed'] font-bold tracking-wide uppercase rounded-sm ${TAG_STYLES[category]}`}>
      {label}
    </span>
  )
}

export default function Grade() {
  const { ref: tableRef, visible: tableVisible } = useReveal()

  return (
    <section id="grade" className="bg-[#0A0A0A] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Horários" title="GRADE DE<br/>AULAS" />

        <div
          ref={tableRef}
          className={`overflow-x-auto transition-all duration-700 ${tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <table className="w-full border-collapse min-w-[700px] font-['Barlow_Condensed']">
            <thead>
              <tr>
                <th className="bg-[#C8102E] text-left text-[11px] font-bold tracking-[3px] uppercase text-white px-5 py-4">
                  Horário
                </th>
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="bg-[#C8102E] text-center text-[11px] font-bold tracking-[3px] uppercase text-white px-4 py-4"
                  >
                    {DAY_LABELS[day]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, i) => (
                <tr
                  key={row.time}
                  className={`border-b border-white/5 hover:bg-[#C8102E]/[0.04] transition-colors group`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <td className="px-5 py-4 text-[13px] font-semibold text-[#F0EDE8] tracking-wide whitespace-nowrap">
                    {row.time}
                  </td>
                  {DAYS.map((day) => {
                    const entry = row[day]
                    return (
                      <td key={day} className="px-4 py-4 text-center">
                        {entry ? <ClassTag entry={entry} /> : <span className="text-[#333]">—</span>}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-6">
          <LegendItem category="fundamentos" label="Fundamentos — todos os níveis" />
          <LegendItem category="avancado" label="Avançado — faixa azul+" />
          <LegendItem category="kids" label="Kids — 5 a 15 anos" />
          <LegendItem category="competicao" label="Competição — convite do professor" />
          <LegendItem category="no-gi" label="No-Gi — sem kimono" />
        </div>
      </div>
    </section>
  )
}
