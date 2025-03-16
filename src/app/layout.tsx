import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppNavbar } from "@/components/app-navbar"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quran Science Application | Mathematical Miracles in the Quran",
  description:
    "Explore the mathematical miracles and numerical patterns in the Holy Quran. Research on numerical harmony, golden ratio, and word count symmetry in Quranic structure.",
  keywords:
    "Quran, mathematical miracles, numerical patterns, Islamic research, Quranic structure, golden ratio, word count symmetry",
  authors: [{ name: "Mizanur Rahman" }],
  creator: "Mizanur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quran-science.vercel.app/",
    title: "Quran Science Application | Mathematical Miracles in the Quran",
    description:
      "Explore the mathematical miracles and numerical patterns in the Holy Quran. Research on numerical harmony, golden ratio, and word count symmetry in Quranic structure.",
    siteName: "Quran Science Application",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quran Science Application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Science Application | Mathematical Miracles in the Quran",
    description:
      "Explore the mathematical miracles and numerical patterns in the Holy Quran. Research on numerical harmony, golden ratio, and word count symmetry in Quranic structure.",
    creator: "@nickty008",
    images: ["/twitter-image.jpg"],
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
  alternates: {
    canonical: "https://quran-science.vercel.app/",
    languages: {
      "en-US": "https://quran-science.vercel.app/",
      ar: "https://quran-science.vercel.app/ar",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Add Google Analytics */}
          <GoogleAnalytics />
          <AppNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

