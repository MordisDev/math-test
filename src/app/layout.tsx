import './globals.css'
import type { Metadata } from 'next'

import ThemeRegistry from '@/theme/ThemeRegistry'

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
      <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
    </html>
  )
}
