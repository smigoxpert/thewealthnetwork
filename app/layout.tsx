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
    url: "https://thewealthnetwork.vercel.app",
    siteName: "The Wealth Network",
    images: [
      {
        url: "/financial-advisor-meeting.png",
        width: 1200,
        height: 630,
        alt: "Professional financial advisor meeting - The Wealth Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wealth Network - Master the Markets",
    description: "Professional-grade market insights, real-time analysis, and expert guidance for investors",
    images: ["/financial-advisor-meeting.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='6' fill='%23FFD700'/%3E%3Cpath d='M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z' fill='%23000'/%3E%3Cpath d='M16 12C15.4477 12 15 12.4477 15 13V13.5C15 13.7761 14.7761 14 14.5 14H13.5C13.2239 14 13 14.2239 13 14.5C13 14.7761 13.2239 15 13.5 15H14.5C15.3284 15 16 15.6716 16 16.5C16 17.3284 15.3284 18 14.5 18H13.5C13.2239 18 13 18.2239 13 18.5V19C13 19.5523 13.4477 20 14 20H18C18.5523 20 19 19.5523 19 19V18.5C19 18.2239 18.7761 18 18.5 18H17.5C17.2239 18 17 17.7761 17 17.5C17 17.2239 17.2239 17 17.5 17H18.5C19.3284 17 20 16.3284 20 15.5C20 14.6716 19.3284 14 18.5 14H17.5C17.2239 14 17 13.7761 17 13.5V13C17 12.4477 16.5523 12 16 12Z' fill='%23000'/%3E%3C/svg%3E",
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
