import { Suspense } from "react"
import ContactClientPage from "./contact-client-page"

export const metadata = {
  title: "İletişim | Teklif & Başvuru | imediaff Türkiye",
  description:
    "Marka kampanya teklifi almak veya içerik üreticisi olarak ekosisteme katılmak için bizimle iletişime geçin.",
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white text-[#111111] flex items-center justify-center font-mono">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-[#FE9417] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#666666] text-sm tracking-wider uppercase">Form Yükleniyor...</p>
          </div>
        </div>
      }
    >
      <ContactClientPage />
    </Suspense>
  )
}
