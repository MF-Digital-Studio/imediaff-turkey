import { Suspense } from "react"
import ContactClientPage from "./contact-client-page"

export const metadata = {
  title: "Contact | Global Network & Brief Intake | imediaff",
  description:
    "Request a proposal, share your brief, or discuss a partnership with our global team across Istanbul, Dubai, and the USA.",
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white text-[#111111] flex items-center justify-center font-mono">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-[#FE9417] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#666666] text-sm tracking-wider uppercase">Loading Form...</p>
          </div>
        </div>
      }
    >
      <ContactClientPage />
    </Suspense>
  )
}
