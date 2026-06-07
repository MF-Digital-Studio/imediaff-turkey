"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react"

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const easeCustom = [0.22, 1, 0.36, 1] as const

  // Height of 250vh allows for a long, smooth scroll transition before the next section appears
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.8 })

  // ── Layer A (Text) Animation Logic ──
  // Shrinks slightly and fades out early in the scroll
  const textOpacity = useTransform(progress, [0, 0.4], [1, 0])
  const textScale = useTransform(progress, [0, 0.4], [1, 0.95])

  // ── Layer B (World Map) Animation Logic ──
  // Floats up, scales into focus, and fades in as the text disappears
  const mapOpacity = useTransform(progress, [0.2, 0.8], [0, 1])
  const mapY = useTransform(progress, [0.2, 0.8], [100, 0])
  const mapScale = useTransform(progress, [0.2, 0.8], [0.8, 1])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[250vh] text-[#0F172A]"
      aria-label="Hero"
      style={{
        background: '#FFFFFF'
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* ── Layer B: The Global Map Anchor ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: mapOpacity, y: mapY, scale: mapScale }}
        >
          <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-video px-6 flex items-center justify-center">

            {/* Minimalist Turkey Map Silhouette with Soft Elliptical Edges */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 45%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 45%, transparent 100%)'
              }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 0.14, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: easeCustom }}
            >
              <img
                src="/turkey-map.svg"
                alt="Türkiye Haritası"
                className="w-full h-auto max-h-[75vh] object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Premium Ambient Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#FE9417]/20 to-[#FF6B00]/20 blur-[130px] opacity-[0.12] pointer-events-none" />

            {/* Central Anchor: iMediaff Logo */}
            <motion.div
              className="relative z-50 flex flex-col items-center justify-center pointer-events-auto"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: easeCustom }}
            >
              <div className="relative w-48 h-20 md:w-72 md:h-28 flex items-center justify-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Image
                  src="/logo.png"
                  alt="iMediaff"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Radar/Beacon Pulse Effect (Neutral) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-black/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Layer A: The Text & CTAs ── */}
        <motion.div
          className="relative z-20 flex flex-col items-center px-6 text-center"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <motion.p
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#FE9417] mb-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
          >
            / Yeni Nesil Büyüme Ortağı
          </motion.p>

          <h1 className="font-display font-bold leading-[0.9] tracking-[-0.035em] text-balance text-[clamp(2.5rem,7vw,7rem)] max-w-6xl mx-auto pointer-events-auto">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: easeCustom }}
            >
              Markalar ve İçerik Üreticileri İçin
            </motion.span>{" "}
            <br className="hidden md:block" />
            <motion.span
              className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: easeCustom }}
            >
              Güçlü Affiliate Ekosistemi
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-[#374151] leading-relaxed font-medium text-balance pointer-events-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: easeCustom }}
          >
            Markaları doğru içerik üreticileriyle buluşturuyor; kampanya, affiliate, prodüksiyon ve performans süreçlerini uçtan uca yönetiyoruz.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: easeCustom }}
          >
            <Link
              href="/contact?type=brand"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-[#111111] transition-all hover:scale-105 bg-gradient-to-br from-[#FE9417] to-[#FF6B00] shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Teklif Al
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/talent"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#0F172A] bg-transparent px-8 py-4 font-semibold text-[#0F172A] transition-all hover:bg-[#0F172A] hover:text-[#111111]"
            >
              Başvuru Yap
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  )
}
