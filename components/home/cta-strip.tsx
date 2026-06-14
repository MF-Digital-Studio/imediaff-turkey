"use client"

import Link from "next/link"
import { motion, useInView } from "motion/react"
import { useState, useEffect, useRef } from "react"

// One copy of the marquee content
function MarqueeSlice() {
  return (
    <span className="flex items-center gap-8 pr-8 md:gap-14 md:pr-14 shrink-0">
      <span>ETKİLİ İŞ BİRLİKLERİ</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0 bg-[#FB430A]"
      />
      <span>INFLUENCER GÜCÜ</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0 bg-[#FB430A]"
      />
      <span>TRENDYOL ORTAĞI</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0 bg-[#FB430A]"
      />
      <span>ÖLÇÜLEBILIR BÜYÜME</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0 bg-[#FB430A]"
      />
      <span>STRATEJİK ETKİ</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0 bg-[#FB430A]"
      />
    </span>
  )
}

// A full set of slices that guarantees it exceeds any screen width
function MarqueeSet() {
  return (
    <div className="flex shrink-0 items-center">
      <MarqueeSlice />
      <MarqueeSlice />
      <MarqueeSlice />
      <MarqueeSlice />
    </div>
  )
}

export default function CtaStrip() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ctaRef, { once: true, margin: "-20% 0px" })

  // Duration tuning: Desktop is slower for a premium feel (45s), 
  // Mobile is faster (25s) to prevent it from feeling static on narrow screens.
  const [duration, setDuration] = useState(45)

  useEffect(() => {
    const update = () => setDuration(window.innerWidth < 768 ? 25 : 45)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-white text-[#111111] border-b border-[#E5E5E5]">
        {/* ── Autonomous Infinite Marquee ── */}
        <div
          className="relative overflow-hidden py-10 md:py-20 w-full"
          aria-hidden
        >
          <motion.div
            className="flex w-max whitespace-nowrap font-sans font-bold leading-none tracking-[-0.04em] text-[#111111] select-none text-[15vw] md:text-[12vw] lg:text-[10vw]"
            style={{ willChange: "transform" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* 
              Bulletproof Seamless Loop Logic:
              By placing exactly two identical wrapper groups, 50% of the motion.div's width 
              perfectly equals the start of the second group. This makes the loop jump invisible.
            */}
            <MarqueeSet />
            <MarqueeSet />
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme - Mirrored from Services) ── */}
      <section ref={ctaRef} className="bg-gradient-to-br from-[#FB430A] to-[#FF6B00] text-white py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10 flex flex-col items-center"
        >
          {/* UPDATED: CTA eyebrow */}
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Başlamak için bir neden yeter
          </p>
          
          {/* UPDATED: CTA H2 */}
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-6 text-white">
            Sonraki kampanya <br className="hidden md:block" /> burada başlar.
          </h2>
          
          {/* UPDATED: CTA alt metin + iki buton */}
          <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-white/90 mb-10">
            İster bir kampanya planlıyor olun, ister doğru markayı bulmaya çalışan bir içerik üreticisi olun — doğru adres burasıdır.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=brand"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-base font-bold text-[#FB430A] transition-all hover:scale-105 shadow-xl"
            >
              Kampanya Başlat
            </Link>
            <Link
              href="/talent"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/60 bg-transparent px-10 py-5 text-base font-bold text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              Creator Ağına Katıl
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}


