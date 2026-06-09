"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useState } from "react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AffiliatePreview() {
  const [trendyolLogoError, setTrendyolLogoError] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white flex flex-col">

      {/* TRENDYOL FULL SCREEN */}
      <div className="w-full min-h-[80vh] flex flex-col justify-center bg-[#ffa101] text-[#111111] py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* LEFT COLUMN: Copy */}
            <div className="lg:col-span-7 lg:pr-10">
              <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
                <div className="h-16 md:h-20 flex items-center relative">
                  <img
                    src="/logos/trendyol-logo.png"
                    alt="trendyol"
                    className="w-[140px] md:w-[180px] h-auto object-contain brightness-0 invert"
                    style={{ display: trendyolLogoError ? 'none' : 'block' }}
                    onError={() => setTrendyolLogoError(true)}
                  />
                  {trendyolLogoError && (
                    <div className="flex flex-col">
                      <div className="text-white font-bold text-3xl leading-none tracking-tight">trendyol</div>
                      <div className="text-white text-[12px] mt-1 opacity-90 font-semibold tracking-wider">× iMediaff</div>
                    </div>
                  )}
                </div>
                <span className="inline-flex rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-bold shadow-sm">
                  Resmi Affiliate Ortaklığı
                </span>
              </div>

              <h3 className="font-display text-[clamp(3rem,5vw,5rem)] font-bold tracking-[-0.03em] text-white mb-6 leading-[0.95]">
                Trendyol TrendFam
              </h3>
              <p className="text-white/90 leading-relaxed text-lg md:text-xl font-medium max-w-2xl font-sans">
                Trendyol'un resmi affiliate programı. İçerik üreticileri için yüksek komisyon oranları ve tam ajans desteği.
              </p>
            </div>

            {/* RIGHT COLUMN: Advantages */}
            <div className="lg:col-span-5 flex flex-col lg:pl-12">
              <p className="text-white font-mono text-sm uppercase tracking-[0.2em] font-bold mb-8 opacity-90">
                Partnerlik Avantajları
              </p>
              <ul className="space-y-6 mb-12 text-white font-medium text-xl">
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center shrink-0 w-7 h-7 rounded-full bg-white text-[#ffa101] text-sm font-bold shadow-sm">✓</span> 
                  Yüksek Komisyon Modelleri
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center shrink-0 w-7 h-7 rounded-full bg-white text-[#ffa101] text-sm font-bold shadow-sm">✓</span> 
                  Teknik ve Operasyonel Destek
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center shrink-0 w-7 h-7 rounded-full bg-white text-[#ffa101] text-sm font-bold shadow-sm">✓</span> 
                  Marka Kampanyalarına Erişim
                </li>
              </ul>

              <Link
                href="/affiliate-programs"
                className="group/btn inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-[#111111] text-white font-bold hover:bg-white hover:text-[#111111] transition-all duration-300 px-10 py-5 text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg"
              >
                Programı İncele
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5 ml-3">→</span>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>



    </section>
  )
}
