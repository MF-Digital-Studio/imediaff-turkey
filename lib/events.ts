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
    slug: "yumos-uzbekistan-tashkent-city-park-event",
    title: "Yumoş Özbekistan Taşkent City Park Etkinliği",
    date: "Yakın Zamanda Tamamlandı",
    location: "Taşkent City Park, Özbekistan",
    region: "Özbekistan",
    category: "Deneyimsel Pazarlama / Influencer Etkinliği",
    excerpt: "Yumoş Özbekistan Taşkent City Park Etkinliği, yüksek etkili bir aktivasyon yaratmak için influencer pazarlamasını, tüketici etkileşimini ve sahada marka etkileşimini başarıyla birleştirdi.",
    description: "Yumoş, Taşkent City Park'ta influencer'ları, tüketicileri ve marka tutkunlarını sürükleyici bir aktivasyonda bir araya getiren büyük ölçekli bir deneyimsel pazarlama etkinliği düzenledi. Etkinlik, influencer katılımı ve ürün dağıtım etkinlikleri aracılığıyla önemli bir çevrimiçi etkileşim, kapsamlı içerik üretimi ve güçlü marka görünürlüğü yarattı.\n\nInfluencer Odaklı Deneyimlerle Devasa Marka Görünürlüğü Yaratmak.\n\nYumoş Özbekistan Taşkent City Park Etkinliği, yüksek etkili bir aktivasyon yaratmak için influencer pazarlamasını, tüketici etkileşimini ve sahada marka etkileşimini başarıyla birleştirdi. 7,3 milyondan fazla video görüntülemesi, 650.000'den fazla ziyaretçi ve yüzlerce influencer tarafından oluşturulan içerikle kampanya, hem çevrimiçi hem de çevrimdışı olağanüstü bir erişim ve farkındalık elde etti.",
    coverImage: "/events/yumos-day/IMG_0151.JPG",
    featured: true,
    stats: [
      { value: 246828, label: "Etkileşim" },
      { value: 7350934, label: "Video Görüntülenmesi" },
      { value: 57, label: "İlk Gün Katılan Influencer Sayısı" },
      { value: 77, label: "İlk Gün Paylaşılan İçerik" },
      { value: 500, suffix: "+", label: "Etkinlik Boyunca Paylaşılan Toplam İçerik" },
      { value: 650000, label: "Toplam Ziyaretçi (Footfall)" },
      { value: 306000, prefix: "€", label: "Kazanılan PR Değeri" },
      { value: 400, suffix: "+", label: "Dağıtılan Ürün" },
    ],
    gallery: [
      "/events/yumos-day/IMG_0151.JPG",
      "/events/yumos-day/IMG_0213.JPG",
      "/events/yumos-day/IMG_0359.JPG",
      "/events/yumos-day/IMG_0360.JPG",
      "/events/yumos-day/IMG_0655.JPG",
      "/events/yumos-day/IMG_0670.JPG",
      "/events/yumos-day/IMG_0696.JPG",
      "/events/yumos-day/IMG_0898.jpg",
      "/events/yumos-day/IMG_1087.jpg",
      "/events/yumos-day/IMG_1382.jpg",
      "/events/yumos-day/IMG_1482.jpg",
      "/events/yumos-day/IMG_1582-восстановлено.jpg",
      "/events/yumos-day/IMG_2249.jpg",
      "/events/yumos-day/IMG_2269.jpg",
      "/events/yumos-day/IMG_5274.jpg",
      "/events/yumos-day/IMG_9036.JPG",
      "/events/yumos-day/IMG_9037.JPG",
      "/events/yumos-day/IMG_9038.JPG",
      "/events/yumos-day/IMG_9040.JPG",
      "/events/yumos-day/IMG_9098.JPG",
      "/events/yumos-day/IMG_9663.JPG",
      "/events/yumos-day/IMG_9894.jpg"
    ]
  },
  {
    slug: "marka-lansmani",
    title: "Marka Lansmanı",
    date: "Yakında",
    location: "İstanbul",
    region: "Türkiye",
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
    date: "Yakında",
    location: "İstanbul",
    region: "Türkiye",
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
    date: "Yakında",
    location: "İstanbul",
    region: "Türkiye",
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
    date: "Yakında",
    location: "İstanbul",
    region: "Türkiye",
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
