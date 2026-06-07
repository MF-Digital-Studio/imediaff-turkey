/*
  CLIENT/DEVELOPER WORKFLOW: How to add a new event
  1. Add a new object to the EVENTS array below.
  2. Set a unique `slug` (this becomes the URL, e.g., "yeni-etkinligim").
  3. Add a `coverImage` path (e.g., "/events/yeni-etkinligim/cover.jpg").
  4. (Optional) Add a `gallery` array with image paths (e.g., ["/events/yeni-etkinligim/1.jpg", "/events/yeni-etkinligim/2.jpg"]).
  5. Create/upload those images inside the `public/events/...` folder in your project.
*/

export interface EventItem {
  slug: string
  title: string
  date: string
  location: string
  region: string
  category: string
  excerpt: string
  description: string
  coverImage: string
  featured?: boolean
  stats?: {
    value: number | string
    label: string
    prefix?: string
    suffix?: string
    decimals?: number
  }[]
  gallery?: string[]
  externalUrl?: string
}

export const EVENTS: EventItem[] = [
  {
    slug: "featured-event-placeholder",
    title: "Öne Çıkan Etkinlik Başlığı",
    date: "Yakında Duyurulacak",
    location: "İstanbul, Türkiye",
    region: "Türkiye",
    category: "Özel Etkinlik",
    excerpt: "Bu alan, öne çıkan etkinliğin kısa özetini içermektedir. Müşteri tarafından güncellenecektir.",
    description: "Bu açıklama metni etkinlik detaylarını, görselleri ve program akışını barındırmak üzere ayrılmış geçici bir metindir. Etkinlik yaklaştığında detaylar burada yer alacaktır.",
    coverImage: "/placeholder.svg",
    featured: true,
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-01",
    title: "Marka Aktivasyon Etkinliği",
    date: "Yakında",
    location: "İstanbul",
    region: "Türkiye",
    category: "Marka Etkinliği",
    excerpt: "Markaların içerik üreticileri ile buluştuğu ve yeni stratejilerin konuşulduğu bölgesel aktivasyon.",
    description: "Bu etkinlik, imediaff Türkiye tarafından organize edilen bölgesel marka aktivasyonudur. Detaylar ve görseller etkinlik sonrası eklenecektir.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-02",
    title: "İçerik Üreticileri Buluşması",
    date: "2026",
    location: "İzmir",
    region: "Türkiye",
    category: "Creator Buluşması",
    excerpt: "TrendFam ekosistemindeki içerik üreticilerini bir araya getiren özel gala yemeği.",
    description: "Influencer marketing sektörünün önde gelen isimleri ve en başarılı içerik üreticilerini bir araya getiren etkinliğimizin detayları bu alanda yer alacaktır.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-03",
    title: "E-Ticaret Zirvesi Katılımı",
    date: "2026",
    location: "İstanbul",
    region: "Türkiye",
    category: "Sektörel Zirve",
    excerpt: "imediaff Türkiye ekibi, dijital pazarın en büyük fuar ve zirvelerinde yer almaya devam ediyor.",
    description: "Sektörel büyümenin konuşulduğu, yeni panellerin duyurulduğu etkinlikte standımızı ziyaret eden markalara ve influencer'lara teşekkür ederiz. Görseller yakında yüklenecektir.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
]
