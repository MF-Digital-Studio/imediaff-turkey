import { redirect } from "next/navigation"
import CaseStudiesClientPage from "./case-studies-client-page"

export const metadata = {
  title: "Projeler | imediaff Türkiye",
  description: "Moda, güzellik, otomotiv ve teknoloji sektörlerindeki seçkin Türkiye kampanyaları.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CaseStudiesPage() {
  redirect("/events")
  return null
}
