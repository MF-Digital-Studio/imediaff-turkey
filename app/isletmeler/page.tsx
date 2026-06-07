import BusinessHeader from "@/components/business/business-header"
import BentoServices from "@/components/business/bento-services"
import ProcessTimeline from "@/components/business/process-timeline"
import BusinessCta from "@/components/business/business-cta"

export const metadata = {
  title: "Hizmetler | imediaff Türkiye",
  description:
    "Türkiye pazarında hedefleri büyük markalar için uçtan uca dijital çözümler.",
}

export default function BusinessPage() {
  return (
    <>
      <BusinessHeader />
      <BentoServices />
      <ProcessTimeline />
      <BusinessCta />
    </>
  )
}
