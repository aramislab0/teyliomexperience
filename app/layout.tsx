import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'TEYLIOM EXPERIENCE',
  description: 'Découvrez nos résidences d\'exception à Dakar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-dark text-light antialiased">
        {children}
      </body>
    </html>
  )
}
