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
  metadataBase: new URL("https://thewealthnetwork.vercel.app"),
  openGraph: {
    title: "The Wealth Network - Master the Markets",
    description: "Professional-grade market insights, real-time analysis, and expert guidance for investors",
    type: "website",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "The Wealth Network Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
