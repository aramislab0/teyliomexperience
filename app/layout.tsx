import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TEYLIOM EXPERIENCE',
  description: 'Découvrez nos résidences d\'exception à Dakar',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
