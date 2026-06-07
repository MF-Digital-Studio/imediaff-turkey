import InfluencerHeader from "@/components/influencers/influencer-header"
import InfluencerGrid from "@/components/influencers/influencer-grid"
import InfluencerCta from "@/components/influencers/influencer-cta"

export const metadata = {
  title: "Influencer Ağı | imediaff Türkiye",
  description:
    "Premium kampanyalar ve ölçülebilir büyüme için özenle seçilmiş Türkiye influencer ağı.",
}

export default function InfluencerPage() {
  return (
    <>
      <InfluencerHeader />
      <InfluencerGrid />
      <InfluencerCta />
    </>
  )
}
