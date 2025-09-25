import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roteiros Personalizados para Viagens à Europa',
  description: 'Crie roteiros de viagem personalizados, com mapas, avaliações e reservas via Civitatis, GetYourGuide, Viator e Tiqets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}