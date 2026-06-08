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
    slug: "marka-lansmani",
    title: "Marka Lansmanı",
    date: "Haziran 2026",
    location: "İstanbul",
    region: "Marmara",
    category: "Lansman",
    excerpt: "Markaların yeni ürün ve hizmetlerini içerik üreticileriyle buluşturduğumuz lansman etkinliği.",
    description: "Markaların vizyonunu, yeni sezon koleksiyonlarını veya ürün gruplarını en doğru içerik üreticileri ve basın mensuplarıyla buluşturarak sosyal medyada yüksek erişim sağlıyoruz.",
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
    slug: "creator-bulusmasi",
    title: "Creator Buluşması",
    date: "Haziran 2026",
    location: "İstanbul",
    region: "Marmara",
    category: "Buluşma",
    excerpt: "İçerik üreticilerimizin birbirleriyle ve ajans ekibimizle bir araya geldiği sinerji buluşması.",
    description: "Yeni nesil sosyal medya trendlerini tartıştığımız, affiliate başarı hikayelerini paylaştığımız ve ekosistemdeki bağı güçlendirdiğimiz networking etkinliği.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "urun-deneyimi",
    title: "Ürün Deneyimi",
    date: "Mayıs 2026",
    location: "İstanbul",
    region: "Marmara",
    category: "Deneyim",
    excerpt: "Yeni ürün gruplarının içerik üreticileri tarafından bizzat deneyimlendiği atölye.",
    description: "İçerik üreticilerinin markaların ürünlerini yakından deneyimleyerek doğal, samimi ve yüksek kaliteli sosyal medya içerikleri (UGC) üretmelerini sağladığımız etkinlik.",
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
    slug: "ozel-influencer-atolyesi",
    title: "Özel Influencer Atölyesi",
    date: "Nisan 2026",
    location: "İstanbul",
    region: "Marmara",
    category: "Atölye",
    excerpt: "TrendFam paneli, link stratejileri ve içerik optimizasyonu üzerine eğitim odaklı atölye çalışması.",
    description: "İçerik üreticilerinin affiliate kazançlarını artırmalarına yönelik 1-on-1 ve grup eğitimlerinin, algoritma optimizasyonlarının ve stratejik paylaşım planlamalarının aktarıldığı eğitim programı.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
]
