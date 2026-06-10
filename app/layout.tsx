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
  title: "imediaff Türkiye | Influencer & Affiliate Pazarlama Ajansı",
  description:
    "imediaff Türkiye, markalar ve içerik üreticilerini Trendyol TrendFam ekosisteminde performans odaklı influencer ve affiliate iş birlikleriyle buluşturur.",
  generator: "v0.app",
  openGraph: {
    title: "imediaff Türkiye | Influencer & Affiliate Pazarlama Ajansı",
    description:
      "imediaff Türkiye, markalar ve içerik üreticilerini Trendyol TrendFam ekosisteminde performans odaklı influencer ve affiliate iş birlikleriyle buluşturur.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#FB430A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${instrumentSans.variable} ${geistMono.variable} bg-background dark`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden grain" suppressHydrationWarning>
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
