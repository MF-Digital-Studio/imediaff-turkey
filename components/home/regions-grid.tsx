"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useRef } from "react"
import { useInView } from "motion/react"
import { ArrowRight } from "lucide-react"

export default function RegionsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-[#111111] py-24 md:py-32 border-t border-[#E5E5E5]"
      aria-label="Our Regions"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          {/* UPDATED: Operasyonlar eyebrow */}
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FB430A] mb-5">
            / Trendyol Resmi Partner Ajansı
          </p>
          {/* UPDATED: Operasyonlar H2 */}
          <h2 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#111111] leading-[0.92] tracking-[-0.03em]">
            Türkiye pazarını{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FB430A 0%, #FF6B00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              içeriden yönetiyoruz.
            </span>
          </h2>
        </motion.div>

        {/* Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] bg-white border border-[#E5E5E5] overflow-hidden shadow-sm"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop"
                alt="Istanbul Skyline"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-white">
                <span>🇹🇷 Kurucu Pazar · 2019'dan beri</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FB430A] mb-4">
                KURUCU PAZAR
              </p>
              <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] tracking-tight mb-8">
                Türkiye
              </h3>
              
              {/* UPDATED: Operasyonlar Türkiye kartı açıklaması */}
              <p className="text-base md:text-lg text-[#666666] leading-relaxed font-medium mb-10">
                imediaff, 2019&apos;da İstanbul&apos;da kuruldu — hem Trendyol&apos;un resmi partner ajansı hem de TrendFam affiliate programının yöneticisi olarak Türkiye e-ticaret ekosisteminin içinde büyüdü. Markalar için Türkiye&apos;nin influencer ortamını okuyabilmek bir avantaj değil, zorunluluktur; biz bunu başından beri yaptık.
              </p>

              {/* CTA */}
              <Link
                href="/talent"
                className="group inline-flex items-center gap-3 bg-[#FB430A] text-white rounded-full px-8 py-4 font-bold transition-transform hover:scale-105 w-fit"
              >
                {/* UPDATED: Operasyonlar CTA */}
                Ağımıza Bakın
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
