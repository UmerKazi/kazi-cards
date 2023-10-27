import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const nunito_sans = Nunito_Sans({ weight: ["600"], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Kazi Cards',
  description: 'Digital contact cards for realtors. Scan the QR code and instantly access a realtor&apos;s professional profile and contact information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  )
}
