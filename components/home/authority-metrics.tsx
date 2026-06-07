"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useSpring, useTransform, animate } from "motion/react"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const METRICS = [
  { value: 10000, suffix: "+", label: "İçerik Üreticisi", sublabel: "Farklı kategorilerde aktif creator ağı." },
  { value: 150,   suffix: "+", label: "Marka İşbirliği",         sublabel: "2019'dan bu yana" },
  { value: 850,   suffix: "+", label: "Tamamlanan Proje",   sublabel: "Ajans kuruluşundan bu yana" },
  { value: 7,     suffix: "+",  label: "Yıllık Deneyim",        sublabel: "Sektör tecrübesi" },
]

function formatDisplay(n: number, max: number): string {
  if (max >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M"
  if (max >= 1_000)     return Math.floor(n / 1_000).toFixed(0) + "K"
  return Math.floor(n).toString()
}

// ─── METRIC CARD ──────────────────────────────────────────────────────────────

function MetricCard({
  value, suffix, label, sublabel, index,
}: {
  value: number; suffix: string; label: string; sublabel: string; index: number;
}) {
  const ref    = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const [display, setDisplay] = useState("0")

  const spring  = useSpring(0, { stiffness: 45, damping: 16, mass: 0.9 })
  const rounded = useTransform(spring, (v) => v)

  useEffect(() => { if (inView) spring.set(value) }, [inView, spring, value])
  useEffect(() => {
    const unsub = rounded.on("change", (n) => setDisplay(formatDisplay(n, value)))
    return () => unsub()
  }, [rounded, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col justify-center px-6 py-10 border-r border-black/[0.07] last:border-r-0 transition-colors duration-300"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] mb-4 text-[#FE9417]">
        0{index + 1}
      </p>

      <p className="font-sans text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.04em] text-[#111111]">
        {display}<span>{suffix}</span>
      </p>

      <p className="mt-4 text-sm font-semibold leading-snug tracking-tight text-[#111111]">{label}</p>
      <p className="mt-0.5 text-xs font-medium tracking-tight text-[#888888]">{sublabel}</p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: index * 0.11 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-br from-[#FE9417] to-[#FF6B00] opacity-50"
      />
    </motion.div>
  )
}

// ─── PRODUCTION VISUAL ──────────────────────────────────────────────────────────

function ProductionVisual({ visible }: { visible: boolean }) {
  const floatRef = useRef<HTMLDivElement>(null)

  // Autonomous float loop — pure Framer Motion, zero canvas
  useEffect(() => {
    if (!visible || !floatRef.current) return
    const ctrl = animate(
      floatRef.current,
      { y: [-8, 8, -8] },
      { duration: 7, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
    )
    return () => ctrl.stop()
  }, [visible])

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulsing ambient glow behind the image */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
        style={{ filter: "blur(60px)" }}
        animate={
          visible
            ? {
                background: [
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(255,138,30,0.08) 50%, transparent 75%)",
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.32) 0%, rgba(255,189,30,0.14) 50%, transparent 75%)",
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(255,138,30,0.08) 50%, transparent 75%)",
                ],
              }
            : {}
        }
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />

      {/* Floating image wrapper */}
      <div ref={floatRef} className="relative will-change-transform">
        <div 
          className="relative w-[340px] h-[460px] md:w-[420px] md:h-[580px] rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 40px rgba(37,99,235,0.25), 0 0 80px rgba(37,99,235,0.1)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <Image
            src="/cinematic-production.png"
            alt="Cinematic production setup representing iMediaff's high-end influencer marketing content"
            fill
            sizes="(max-width: 768px) 340px, 420px"
            className="object-cover object-center"
            quality={90}
            priority
          />
          {/* Inner vignette to help blend edges */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function AuthorityMetrics() {
  const sectionRef    = useRef<HTMLDivElement | null>(null)
  const contentInView = useInView(sectionRef, { once: true, margin: "-8% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FFFFFF]"
      aria-label="Authority Metrics"
    >
      {/* ── FOREGROUND ────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">

        {/* HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FE9417] mb-6"
            >
              / Güvenilir Veriler
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-[#111111] leading-[0.92] tracking-[-0.03em] text-[clamp(2.2rem,5.5vw,4.5rem)] text-balance"
            >
              imediaff —{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FE9417 0%, #FF6B00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Etkiyi ölçülebilir
              </span>{" "}
              büyümeye dönüştürüyoruz.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-lg text-base md:text-[1.05rem] text-[#555555] leading-relaxed font-sans"
            >
              imediaff, 10.000'den fazla influencer ile markalar arasında güçlü köprüler kuruyor. Strateji, içerik ve performans odaklı yaklaşımımızla kalıcı etki yaratıyoruz.
            </motion.p>

            {/* Learn More CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#111111] transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #FE9417 0%, #FE9417 50%, #FE9417 100%)",
                  boxShadow: "0 0 30px rgba(37,99,235,0.45), inset 0 0 12px rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 50px 8px rgba(255,189,30,0.5), inset 0 0 18px rgba(255,255,255,0.10)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 30px rgba(37,99,235,0.45), inset 0 0 12px rgba(255,255,255,0.07)"
                }}
              >
                <span>Daha fazla bilgi</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Production Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={contentInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductionVisual visible={contentInView} />
          </motion.div>
        </div>

        {/* METRICS ROW */}
        <div className="mt-20 border-t border-black/[0.07] grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCard key={i} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
