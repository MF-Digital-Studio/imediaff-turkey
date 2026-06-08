"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { EVENTS } from "@/lib/events"

export default function EventsClientPage() {
  const featuredEvent = EVENTS.find((e) => e.featured) || EVENTS[0]
  const otherEvents = EVENTS.filter((e) => e.slug !== featuredEvent.slug)

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-white text-[#111111] pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[#E5E5E5]">
        
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] font-bold">
              / Etkinlikler
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
              Etkinlikler <br /> ve Buluşmalar.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#666666] leading-relaxed font-sans">
              Markaları, içerik üreticilerini ve sektör profesyonellerini bir araya getiren etkinlikleri buradan takip edebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Event ── */}
      <section className="bg-white text-[#111111] py-20 md:py-32 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#E5E5E5] bg-white/[0.02]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto h-full w-full overflow-hidden bg-white/20">
                <Image
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 will-change-transform"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent lg:hidden pointer-events-none" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 relative z-10 lg:bg-white/40 lg:backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full border border-[#FE9417]/40 bg-[#FE9417]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FE9417]">
                    Öne Çıkan
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                    {featuredEvent.category}
                  </span>
                  {featuredEvent.gallery && featuredEvent.gallery.length > 0 && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white/10 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#111111]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span> Galeri
                    </span>
                  )}
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.05]">
                  {featuredEvent.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
                  <div className="flex items-center gap-2 text-[#666666]">
                    <span className="text-xl">📅</span>
                    <span className="font-sans text-sm md:text-base font-medium">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#666666]">
                    <span className="text-xl">📍</span>
                    <span className="font-sans text-sm md:text-base font-medium">{featuredEvent.location}</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-[#666666] mb-10 font-sans max-w-xl">
                  {featuredEvent.excerpt}
                </p>
                <Link
                  href={`/events/${featuredEvent.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FE9417] to-[#FF6B00] px-10 py-5 text-base font-bold text-[#111111] transition-transform hover:scale-105 shadow-xl w-fit"
                >
                  Etkinliği İncele ↗
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Events Grid ── */}
      <section className="bg-white text-[#111111] py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-5">
              / Etkinlik Arşivi
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#111111]">
              Geçmiş Etkinliklerimizi Keşfedin.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map((event, i) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.03] border border-[#E5E5E5] hover:border-[#E5E5E5] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/20">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 will-change-transform"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-[#E5E5E5] px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-[#111111]">
                    {event.category}
                  </div>
                  {event.gallery && event.gallery.length > 0 && (
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-[#E5E5E5] px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-[#111111] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span> Galeri
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#111111] mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 font-sans text-sm text-[#888888]">
                    <span>{event.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#111111]/20" />
                    <span>{event.region}</span>
                  </div>
                  <p className="text-[#666666] leading-relaxed font-sans text-sm mb-8 line-clamp-3">
                    {event.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-[#E5E5E5]">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#111111] transition-colors group-hover:text-[#FE9417]"
                    >
                      Detayları Gör
                      <span aria-hidden className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
