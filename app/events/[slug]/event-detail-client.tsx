"use client"

import { useEffect, useRef, useState, useCallback, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion, useInView, useSpring } from "motion/react"
import { EventItem } from "@/lib/events"

const GalleryLightbox = dynamic(() => import("@/components/ui/gallery-lightbox").then(mod => mod.GalleryLightbox), { ssr: false })

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

function AnimatedCounter({ value }: { value: number | string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  
  const numValue = typeof value === 'number' ? value : parseFloat(value as string);
  const isNumber = !isNaN(numValue);

  const spring = useSpring(0, { bounce: 0, duration: 2000 })
  
  useEffect(() => {
    if (inView && isNumber) {
      spring.set(numValue)
    }
  }, [inView, spring, numValue, isNumber])

  useEffect(() => {
    if (!isNumber) return;
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest))
      }
    })
  }, [spring, isNumber])

  if (!isNumber) {
    return <span>{value}</span>
  }

  return <span ref={ref}>0</span>
}

function getOptimizedPath(originalPath: string, variant: 'thumb' | 'std' | 'hero'): string {
  const match = originalPath.match(/^(.*\/)([^/]+)\.(jpg|jpeg|png)$/i)
  if (match) {
    const [, dir, name] = match
    return `${dir}opt/${name}-${variant}.webp`
  }
  return originalPath
}

const GalleryItem = memo(({ image, index, title, onClick }: { image: string, index: number, title: string, onClick: (idx: number) => void }) => {
  const thumbPath = getOptimizedPath(image, 'thumb')
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#E5E5E5] group bg-black/5 cursor-pointer"
      onClick={() => onClick(index)}
    >
      <Image
        src={thumbPath}
        alt={`${title} gallery image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
    </div>
  )
})
GalleryItem.displayName = 'GalleryItem'

export default function EventDetailClient({ event }: { event: EventItem }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryRef = useRef<HTMLElement>(null)
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "400px 0px" })

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])
  
  const lightboxImages = event.gallery?.map(img => getOptimizedPath(img, 'std')) || []

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ── Header / Hero ── */}
      <section className="relative overflow-hidden bg-white text-[#111111] pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#E5E5E5]">
        
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888888] hover:text-[#111111] transition-colors mb-10"
            >
              <span>←</span> Etkinliklere Dön
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-black/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#111111]">
                {event.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FE9417]">
                / {event.region}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight text-balance leading-[1.05] text-[#111111] mb-8">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-sans text-[#666666]">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cover Image ── */}
      <section className="bg-white py-10 md:py-16 relative z-10 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-[#E5E5E5]"
          >
            <Image
              src={getOptimizedPath(event.coverImage, 'hero')}
              alt={event.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Content & Stats ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8 prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Parse the description and add paragraphs. Simple split by \n\n */}
                {event.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-lg md:text-xl text-[#555555] leading-relaxed mb-6 font-sans">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Stats Sidebar */}
            {event.stats && event.stats.length > 0 && (
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-8 sticky top-32 p-8 rounded-2xl bg-black/[0.02] border border-[#E5E5E5]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FE9417] border-b border-[#E5E5E5] pb-4">
                    Önemli Metrikler
                  </p>
                  {event.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <p className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#FE9417] to-[#FF6B00] bg-clip-text text-transparent mb-2 flex items-baseline">
                        {stat.prefix && <span>{stat.prefix}</span>}
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix && <span>{stat.suffix}</span>}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#888888]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery Section (Optional) ── */}
      {event.gallery && event.gallery.length > 0 && (
        <section ref={galleryRef} className="bg-white py-16 md:py-24 border-t border-[#E5E5E5] min-h-[50vh]">
          {isGalleryInView && (
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7 }}
                className="mb-12 md:mb-16"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] font-bold mb-4">
                  / Galeri
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-6">
                  Etkinlik Galerisi
                </h2>
                <p className="text-lg text-[#666666] font-sans max-w-2xl">
                  Bu etkinlikten seçilen anların görsel arşivi.
                </p>
              </motion.div>

              <div className="flex flex-col gap-6 md:gap-8">
                {/* First Image Large */}
                {event.gallery[0] && (
                  <div
                    className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#E5E5E5] group cursor-pointer"
                    onClick={() => openLightbox(0)}
                  >
                    <Image
                      src={getOptimizedPath(event.gallery[0], 'std')}
                      alt={`${event.title} gallery feature`}
                      fill
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                
                {/* Remaining Images Grid */}
                {event.gallery.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {event.gallery.slice(1).map((image, idx) => (
                      <GalleryItem 
                        key={idx} 
                        image={image} 
                        index={idx + 1} 
                        title={event.title} 
                        onClick={openLightbox} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] text-[#111111] py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1200px] px-6 md:px-10 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / İş Birliği
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-[-0.03em] text-white mb-10 text-balance">
            Gelecekteki iş birlikleriyle ilgileniyor musunuz?
          </h2>
          <Link
            href="/contact?type=brand"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-6 text-lg font-bold text-[#111111] transition-transform hover:scale-105 shadow-xl"
          >
            Teklif İste ↗
          </Link>
        </motion.div>
      </section>

      {event.gallery && lightboxOpen && (
        <GalleryLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </main>
  )
}
