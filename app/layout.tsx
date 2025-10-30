import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "Nishanth Thomas - Software Engineering Manager",
  description:
    "Engineering Manager with 20+ years of experience, leading UI and Observability for OpenShift Data Foundation",
  keywords: [
    "Engineering Manager",
    "Software Development",
    "OpenShift Data Foundation",
    "Red Hat",
    "IBM",
    "UI Leadership",
    "Observability",
    "Microfrontend Architecture",
    "Open Source",
    "Team Leadership"
  ],
  authors: [{ name: "Nishanth Thomas", url: "https://www.linkedin.com/in/nishanththomas/" }],
  creator: "Nishanth Thomas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishanththomas.com",
    title: "Nishanth Thomas - Software Engineering Manager",
    description: "Engineering Manager with 20+ years of experience, leading UI and Observability for OpenShift Data Foundation",
    siteName: "Nishanth Thomas Portfolio",
    images: [{
      url: "/nishanth-profile.jpg",
      width: 1200,
      height: 1200,
      alt: "Nishanth Thomas"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishanth Thomas - Software Engineering Manager",
    description: "Engineering Manager with 20+ years of experience, leading UI and Observability for OpenShift Data Foundation",
    images: ["/nishanth-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
