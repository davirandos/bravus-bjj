export type ClassCategory = 'fundamentos' | 'avancado' | 'kids' | 'competicao' | 'no-gi' | null

export interface ScheduleEntry {
  category: ClassCategory
  label: string
}

export interface ScheduleRow {
  time: string
  seg: ScheduleEntry | null
  ter: ScheduleEntry | null
  qua: ScheduleEntry | null
  qui: ScheduleEntry | null
  sex: ScheduleEntry | null
  sab: ScheduleEntry | null
}

export interface GalleryPhoto {
  id: number
  src: string
  caption: string
  alt: string
}

export interface SocialLink {
  id: string
  platform: string
  handle: string
  description: string
  url: string
  color: string
  icon: string
}

export interface Stat {
  value: string
  label: string
}

export interface ContactForm {
  nome: string
  telefone: string
  email: string
  modalidade: string
  mensagem: string
}
