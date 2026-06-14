"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Target, Zap, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── DATA ─────────────────────────────────────────────────────────────────────

// UPDATED: Değer önerileri — 3 kart başlık ve açıklama
const PILLARS = [
  {
    title: "Doğru Yaratıcı, İlk Seferinde",
    description: "Creator seçimini sezgiye bırakmıyoruz. Kategoriye, takipçi kalitesine, içerik geçmişine ve marka uyumuna göre filtreliyoruz — sonra öneriyoruz. Yanlış eşleşme hem markyı hem yaratıcıyı yakar; biz ikisini de koruyoruz.",
    icon: <Target className="w-6 h-6 text-[#FB430A]" strokeWidth={1.5} />,
    glowColor: "rgba(37,99,235,0.15)",
  },
  {
    title: "Bekleme Yok, Gecikme Yok",
    description: "Brief'ten içerik yayınına kadar her adımı biz yürütüyoruz. Onaylar, içerik teslimi, revizyon süreçleri — müşteri takip etmek zorunda değil, sonucu görüyor.",
    icon: <Zap className="w-6 h-6 text-[#FB430A]" strokeWidth={1.5} />,
    glowColor: "rgba(255,138,30,0.15)",
  },
  {
    title: "Her Numara Açık",
    description: "Erişim, etkileşim, dönüşüm — kampanya sonunda her metrik raporlanır, herhangi bir veriye itiraz etme hakkınız var. Güzel sunumlar değil, gerçek veriler gönderiyoruz.",
    icon: <ShieldCheck className="w-6 h-6 text-[#FB430A]" strokeWidth={1.5} />,
    glowColor: "rgba(255,189,30,0.15)",
  },
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GlobalValue() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-12% 0px" })

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-[#E5E5E5]" aria-label="Global Value Proposition">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* UPDATED: Değer önerileri eyebrow */}
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FB430A] mb-6">
              / Neden farklıyız
            </p>
            {/* UPDATED: Değer önerileri H2 */}
            <h2 className="font-sans text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-[#111111] tracking-[-0.04em] leading-[0.95] mb-8">
              İyi niyetten değil, süreçten geliyor.
            </h2>
          </motion.div>
        </div>

        {/* Pillars List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {PILLARS.map((pillar, i) => {
            const isImageLeft = i % 2 === 0
            const imageUrls = [
              "/images/home/architects/strategic-precision.jpg",
              "/images/home/architects/operational-speed.jpg",
              "/images/home/architects/radical-transparency.jpg"
            ]
            const imageAlts = [
              "Strategic campaign planning and performance review workflow",
              "Mobile-first creator production setup for fast campaign execution",
              "Transparent business agreement and partnership documentation process"
            ]

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-6 md:p-10 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] transition-all duration-500 hover:border-[#FB430A]/50"
                style={{
                  boxShadow: "0 0 0 rgba(0,0,0,0)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = `0 20px 40px -10px ${pillar.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                }}
              >
                {/* Sunset Gradient Border using Mask on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(251,67,10,0.1), transparent)",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Image Side */}
                <div className={cn(
                  "w-full h-full relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl",
                  isImageLeft ? "order-1" : "order-1 md:order-2"
                )}>
                  <img
                    src={imageUrls[i]}
                    alt={imageAlts[i]}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Side */}
                <div className={cn(
                  "flex flex-col justify-center",
                  isImageLeft ? "order-2" : "order-2 md:order-1"
                )}>
                  <div className="mb-6 w-14 h-14 rounded-full bg-white border border-[#E5E5E5] shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#FB430A]/30 transition-all duration-500">
                    {pillar.icon}
                  </div>

                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#111111] mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[#555555] text-[0.95rem] md:text-base leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
