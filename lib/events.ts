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
    slug: "event-title-placeholder-01",
    title: "Event Title Placeholder 01",
    date: "Event Date Placeholder 01",
    location: "Location Placeholder 01",
    region: "Region Placeholder 01",
    category: "Category Placeholder 01",
    excerpt: "Excerpt Placeholder 01 - This is a short placeholder description for event 01.",
    description: "Description Placeholder 01 - Detailed event description goes here. This section is reserved for event agenda, speakers, and timing information.",
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
    slug: "event-title-placeholder-02",
    title: "Event Title Placeholder 02",
    date: "Event Date Placeholder 02",
    location: "Location Placeholder 02",
    region: "Region Placeholder 02",
    category: "Category Placeholder 02",
    excerpt: "Excerpt Placeholder 02 - This is a short placeholder description for event 02.",
    description: "Description Placeholder 02 - Detailed event description goes here. This section is reserved for event agenda, speakers, and timing information.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-03",
    title: "Event Title Placeholder 03",
    date: "Event Date Placeholder 03",
    location: "Location Placeholder 03",
    region: "Region Placeholder 03",
    category: "Category Placeholder 03",
    excerpt: "Excerpt Placeholder 03 - This is a short placeholder description for event 03.",
    description: "Description Placeholder 03 - Detailed event description goes here. This section is reserved for event agenda, speakers, and timing information.",
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
    slug: "event-title-placeholder-04",
    title: "Event Title Placeholder 04",
    date: "Event Date Placeholder 04",
    location: "Location Placeholder 04",
    region: "Region Placeholder 04",
    category: "Category Placeholder 04",
    excerpt: "Excerpt Placeholder 04 - This is a short placeholder description for event 04.",
    description: "Description Placeholder 04 - Detailed event description goes here. This section is reserved for event agenda, speakers, and timing information.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
]
