import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testy matematyczne',
  description: 'Dla moich dzieciakow, udanej nauki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          Navigation
        </nav>
        {children}
      </body>
    </html>
  )
}
