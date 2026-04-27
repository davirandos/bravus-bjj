import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bravus BJJ — Academia de Jiu-Jitsu em Praia Grande',
  description:
    'Academia de Brazilian Jiu-Jitsu em Praia Grande, SP. Aulas para adultos, crianças e competidores.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
