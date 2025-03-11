import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Louisi Müller Art',
  description: 'Explore as incríveis obras e expressões artísticas de Louisi Müller de Jesus. Descubra sua jornada no mundo da arte!',
  openGraph: {
    title: 'Seja bem-vindo ao fascinante mundo da artista: Louisi Müller de Jesus.',
    description: 'Explore as incríveis obras e expressões artísticas de Louisi Müller de Jesus. Descubra sua jornada no mundo da arte!',
    url: 'https://www.louisimuller.art/',
    siteName: 'Louisi Müller Art',
    images: [
      {
        url: 'https://www.louisimuller.art/images/social_graph.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
