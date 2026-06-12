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
    coverImage: "/events/yumos-day/1.jpg",
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
      "/events/yumos-day/1.jpg",
      "/events/yumos-day/2.jpg",
      "/events/yumos-day/3.jpg",
      "/events/yumos-day/4.jpg",
      "/events/yumos-day/5.JPG",
      "/events/yumos-day/6.jpg",
      "/events/yumos-day/7.jpg",
      "/events/yumos-day/8.jpg",
      "/events/yumos-day/9.jpg",
      "/events/yumos-day/10.JPG",
      "/events/yumos-day/11.JPG",
      "/events/yumos-day/12.JPG",
      "/events/yumos-day/13.JPG",
      "/events/yumos-day/14.JPG",
      "/events/yumos-day/15.jpg",
      "/events/yumos-day/16.JPG",
      "/events/yumos-day/17.JPG",
      "/events/yumos-day/18.JPG",
      "/events/yumos-day/19.JPG",
      "/events/yumos-day/20.JPG",
      "/events/yumos-day/21.JPG"
    ]
  }
]
