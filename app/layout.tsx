import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "The Wealth Network - Master the Markets",
  description: "Professional-grade market insights, real-time analysis, and expert guidance for investors",
  generator: "v0.app",
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='8' fill='%23FFD700'/%3E%3Cpath d='M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z' fill='%23000'/%3E%3Cpath d='M16 12C14.8954 12 14 12.8954 14 14C14 15.1046 14.8954 16 16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12ZM16 14C16 14 16 14 16 14Z' fill='%23000'/%3E%3Cpath d='M16 18C16 18 16 18 16 18Z' fill='%23000'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
