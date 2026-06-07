import type { Metadata } from "next"
import { Instrument_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import LenisProvider from "@/components/providers/LenisProvider"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "imediaff Türkiye | 360° Dijital Ajans",
  description:
    "imediaff Türkiye, markalar ve içerik üreticilerini Trendyol affiliate ağı üzerinden bir araya getiren Türkiye'nin lider influencer pazarlama ajansıdır.",
  generator: "v0.app",
  openGraph: {
    title: "imediaff Türkiye | 360° Dijital Ajans",
    description:
      "imediaff Türkiye, markalar ve içerik üreticilerini Trendyol affiliate ağı üzerinden bir araya getiren Türkiye'nin lider influencer pazarlama ajansıdır.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#FE9417",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable} bg-background dark`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden grain">
        <LenisProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </LenisProvider>
      </body>
    </html>
  )
}
