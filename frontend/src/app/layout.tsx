import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mascotera IA - Centro de Control',
  description: 'Plataforma centralizada de sistemas inteligentes de La Mascotera',
  icons: {
    icon: '/images/isotipo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* Grid animado de fondo */}
        <div className="cyber-grid-bg" />

        {/* Contenido principal */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
