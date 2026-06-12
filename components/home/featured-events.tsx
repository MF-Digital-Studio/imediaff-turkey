"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { EVENTS } from "@/lib/events"

export default function FeaturedEvents() {
  const featuredEvents = EVENTS.slice(0, 3)

  return (
    <section 
      className="relative border-b border-border bg-background text-foreground"
      style={{
        "--primary": "#fb430a"
      } as React.CSSProperties}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / ETKİNLİKLER
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance max-w-3xl text-foreground">
              Son etkinlikler.
              <br />
              <span className="text-muted-foreground">Global etki.</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors text-foreground"
          >
            Tüm etkinlikler
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredEvents.map((e, i) => {
            const isYumos = e.slug === "yumos-uzbekistan-tashkent-city-park-event"
            const displayCategory = isYumos ? "DENEYİMSEL PAZARLAMA / INFLUENCER ETKİNLİĞİ" : e.category.toUpperCase()
            const displayStatus = isYumos ? "Yakın Zamanda Tamamlandı" : e.date
            const displayLocation = isYumos ? "TAŞKENT CITY PARK, ÖZBEKİSTAN" : e.location.toUpperCase()
            const displayTitle = isYumos ? (
              <>
                Yumoş Özbekistan
                <br />
                Taşkent City Park Etkinliği
              </>
            ) : e.title

            return (
              <Link key={e.slug} href={`/events/${e.slug}`} className="block w-full">
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group cursor-pointer w-full flex flex-col"
                >
                  <div 
                    className="relative w-full overflow-hidden border border-border bg-card"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <Image
                      src="/events/yumos-day/1.jpg"
                      alt={e.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      unoptimized
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                      {displayCategory}
                    </div>
                    <div 
                      className="absolute bottom-4 right-4 px-3 py-1.5 font-mono text-xs font-semibold text-black"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)"
                      }}
                    >
                      {displayStatus}
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        {displayLocation}
                      </p>
                      <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight text-balance text-foreground group-hover:text-primary transition-colors">
                        {displayTitle}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="shrink-0 inline-flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors text-foreground"
                    >
                      →
                    </span>
                  </div>
                </motion.article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
