"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const REGIONS = [
  {
    city: "İstanbul",
    role: "Genel Merkez",
    description:
      "Yaratıcı strateji, hukuki danışmanlık ve yüksek kaliteli prodüksiyon merkezi. 5.000'den fazla influencer partneriyle güçlü Trendyol affiliate ajansı.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 6v28M6 20h28M9 12q5 4 11 2t11-2M9 28q5-4 11-2t11 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    stat: "2019'dan beri",
  }
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function StrategicGateway() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-12% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      aria-label="Strategic Gateway"
    >


      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">

        {/* ── EDITORIAL HEADER ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20 md:mb-28">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/35 mb-5">
              / Stratejik Konumlandırma
            </p>

            <h2 className="font-sans text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-black text-balance">
              Dijital{" "}
              <br className="hidden md:block" />
              Pazarda{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FB430A 0%, #FF6B00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stratejik
              </span>
              <br className="hidden md:block" />
              Büyüme Ortağı.
            </h2>
          </motion.div>

          {/* Right — body copy + divider */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            {/* Magenta accent rule */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-[#FB430A] to-[#FF6B00] mb-7" />

            <p className="text-black/60 leading-relaxed text-[1.05rem] font-medium max-w-lg">
              İstanbul merkezli operasyonlarımızla en dinamik markalara ve içerik üreticilerine hizmet veriyoruz. KVKK uyumlu sözleşmeler, anlık performans takibi ve güçlü ajans desteğiyle yanınızdayız.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Yerel Uzmanlık", "Hızlı Operasyon", "Influencer Ağı", "Tam Uyum"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-xs font-semibold text-black/60 tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#FB430A] to-[#FF6B00] flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── REGION CARDS ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2xl gap-6 md:gap-8">
          {REGIONS.map((region, i) => {
            const cityImages = [
              "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop"
            ]
            const cityAlts = [
              "Istanbul city skyline"
            ]

            return (
              <motion.article
                key={region.city}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col bg-white rounded-2xl border border-black/[0.07] overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
                style={{ boxShadow: "0 2px 20px -8px rgba(0,0,0,0)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px -16px rgba(0,0,0,0.08)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px -8px rgba(0,0,0,0)"
                }}
              >
                {/* Gradient top line — reveals on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-gradient-to-br from-[#FB430A] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Top Image */}
                <div className="w-full h-[200px] relative overflow-hidden">
                  <img 
                    src={cityImages[i]} 
                    alt={cityAlts[i]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>

                {/* Padded Content Area */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="mb-7 text-black/25 group-hover:text-[#FB430A] transition-colors duration-400">
                    {region.icon}
                  </div>

                  {/* City + Role */}
                  <div className="mb-5">
                    <h3 className="font-sans text-2xl font-bold text-black tracking-tight leading-none mb-1">
                      {region.city}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-black/35">
                      {region.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-black/55 leading-relaxed text-[0.93rem] font-medium flex-1">
                    {region.description}
                  </p>

                  {/* Footer stat badge */}
                  <div className="mt-8 flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(90deg, #FB430A 0%, #FB430A 100%)" }}
                    />
                    <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-black/35">
                      {region.stat}
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>

      {/* Bottom accent rule */}
      <div className="w-full h-px bg-black/5" />
    </section>
  )
}
