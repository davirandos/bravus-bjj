import type { ScheduleRow, GalleryPhoto, SocialLink, Stat } from '../types'

export const SCHEDULE: ScheduleRow[] = [
  {
    time: '07:00 – 08:30',
    seg: { category: 'fundamentos', label: 'Fundamentos' },
    ter: null,
    qua: { category: 'fundamentos', label: 'Fundamentos' },
    qui: null,
    sex: { category: 'fundamentos', label: 'Fundamentos' },
    sab: { category: 'competicao', label: 'Competição' },
  },
  {
    time: '10:00 – 11:30',
    seg: null,
    ter: { category: 'kids', label: 'Kids' },
    qua: null,
    qui: { category: 'kids', label: 'Kids' },
    sex: null,
    sab: { category: 'fundamentos', label: 'Fundamentos' },
  },
  {
    time: '17:00 – 18:00',
    seg: { category: 'kids', label: 'Kids' },
    ter: { category: 'kids', label: 'Kids' },
    qua: { category: 'kids', label: 'Kids' },
    qui: { category: 'kids', label: 'Kids' },
    sex: { category: 'kids', label: 'Kids' },
    sab: null,
  },
  {
    time: '18:30 – 20:00',
    seg: { category: 'fundamentos', label: 'Fundamentos' },
    ter: { category: 'avancado', label: 'Avançado' },
    qua: { category: 'fundamentos', label: 'Fundamentos' },
    qui: { category: 'avancado', label: 'Avançado' },
    sex: { category: 'fundamentos', label: 'Fundamentos' },
    sab: null,
  },
  {
    time: '20:00 – 21:30',
    seg: { category: 'no-gi', label: 'No-Gi' },
    ter: { category: 'competicao', label: 'Competição' },
    qua: { category: 'no-gi', label: 'No-Gi' },
    qui: { category: 'competicao', label: 'Competição' },
    sex: { category: 'no-gi', label: 'No-Gi' },
    sab: null,
  },
]

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80',
    caption: 'Treino Técnico',
    alt: 'Alunos treinando técnicas de jiu-jitsu',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800&q=80',
    caption: 'Sparring',
    alt: 'Sparring entre atletas',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&q=80',
    caption: 'Campeonato',
    alt: 'Atletas em competição',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=800&q=80',
    caption: 'Nossa Equipe',
    alt: 'Equipe Bravus BJJ',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80',
    caption: 'Formatura de Faixas',
    alt: 'Cerimônia de graduação de faixas',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@bravusbjj',
    description: 'Fotos do dia a dia, campeonatos e bastidores da equipe Bravus.',
    url: 'https://instagram.com/bravusbjj',
    color: '#E1306C',
    icon: '📸',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: '(13) 99999-0000',
    description: 'Fale diretamente com nossa equipe. Tire dúvidas sobre planos e horários.',
    url: 'https://wa.me/5513999990000',
    color: '#25D366',
    icon: '💬',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@bravusbjj',
    description: 'Técnicas, vlogs de campeonato e conteúdo exclusivo da academia.',
    url: 'https://youtube.com/@bravusbjj',
    color: '#FF0000',
    icon: '🎥',
  },
]

export const STATS: Stat[] = [
  { value: '12+', label: 'Anos de Academia' },
  { value: '300+', label: 'Alunos Ativos' },
  { value: '8', label: 'Professores' },
  { value: '50+', label: 'Títulos' },
]

export const DAYS = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'] as const
export const DAY_LABELS: Record<typeof DAYS[number], string> = {
  seg: 'Segunda',
  ter: 'Terça',
  qua: 'Quarta',
  qui: 'Quinta',
  sex: 'Sexta',
  sab: 'Sábado',
}
