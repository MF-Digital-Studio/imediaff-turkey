"use client"

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"

type ManifestoSection = {
  kicker: string
  title: string
  body: string
}

// UPDATED: Manifesto — 3 aşama başlık ve açıklama
const SECTIONS: ManifestoSection[] = [
  {
    kicker: "01 - STRATEJİ",
    title: "Önce sor, sonra planla.",
    body: "Marka hedefini, pazar konumunu ve hedef kitleyi anlamadan yaratıcı önerilmez. Her kampanya, dinlemekle başlar.",
  },
  {
    kicker: "02 - KÜLTÜR",
    title: "İçerik, kültürle uyuşmazsa çalışmaz.",
    body: "Türkiye'de neyin işe yayıp neyin yaramadığını yıllarca gözlemledik. Trendler gelip geçer; biz kalıcı uyumu arıyoruz — marka ile yaratıcı arasında, içerik ile topluluk arasında.",
  },
  {
    kicker: "03 - BÜYÜME",
    title: "Sonuçlar kampanyadan sonra da devam eder.",
    body: "Bir kampanya kapanır, verileri açılır. Ne öğrenildi, ne tekrarlanır, ne optimize edilir — bir sonraki hareket bu soruların cevabına göre şekillenir.",
  },
]

// Spring config optimized for an "ipeksi" (silky) smooth scroll experience
const SPRING = { stiffness: 45, damping: 25, mass: 0.8 }

export default function StickyManifesto() {
  const parentRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  })

  // Apply smoothing to the scroll progress directly
  const smoothProgress = useSpring(scrollYProgress, SPRING)

  return (
    <section className="relative bg-[#FB430A]" aria-label="Manifesto">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 pb-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            {/* UPDATED: Manifesto eyebrow */}
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold">
              / Nasıl çalışıyoruz
            </p>
            {/* UPDATED: Manifesto H2 */}
            <h2 className="mt-4 font-sans text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.035em] text-balance max-w-4xl text-white">
              Bir kampanya değil,
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FFE5C4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                bir sistem kuruyoruz.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/90 leading-relaxed font-medium">
            Stratejiden kültüre ve büyümeye uzanan üç aşamalı bir model.
          </p>
        </div>
      </div>

      <div ref={parentRef} className="relative h-[300vh]">
        {SECTIONS.map((section, index) => (
          <ManifestoStackCard
            key={section.kicker}
            index={index}
            total={SECTIONS.length}
            progress={smoothProgress}
            kicker={section.kicker}
            title={section.title}
            body={section.body}
          />
        ))}
      </div>
    </section>
  )
}

function ManifestoStackCard({
  kicker,
  title,
  body,
  index,
  total,
  progress,
}: {
  kicker: string
  title: string
  body: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const zIndex = (index + 1) * 10

  const y =
    index === 0
      ? useTransform(progress, [0, 1], ["0%", "0%"])
      : index === 1
        ? useTransform(progress, [0, 0.1, 0.33, 1], ["100%", "100%", "0%", "0%"])
        : useTransform(progress, [0, 0.45, 0.75, 1], ["100%", "100%", "0%", "0%"])

  const scale =
    index === 0
      ? useTransform(progress, [0, 0.33, 0.66, 1], [1, 1, 0.9, 0.9])
      : index === 1
        ? useTransform(progress, [0, 0.45, 0.75, 1], [1, 1, 0.92, 0.92])
        : useTransform(progress, [0, 1], [1, 1])

  const dimOpacity =
    index === 0
      ? useTransform(progress, [0, 0.1, 0.33, 0.66, 1], [0, 0.2, 0.4, 0.6, 0.7])
      : index === 1
        ? useTransform(progress, [0, 0.45, 0.75, 1], [0, 0.1, 0.3, 0.5])
        : useTransform(progress, [0, 1], [0, 0])



  return (
    <motion.article
      style={{ y, scale, zIndex }}
      className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#FB430A] overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div style={{ opacity: dimOpacity }} className="absolute inset-0 bg-[#FB430A]" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1600px] w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-3 hidden md:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold">{kicker}</p>
          <p className="mt-4 font-sans text-[10rem] leading-none font-bold tracking-[-0.05em] text-white/30">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <p className="md:hidden font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-4">
            {kicker}
          </p>
          <h3 className="font-sans text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white text-balance">
            {title}
          </h3>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 font-medium leading-relaxed text-pretty">
            {body}
          </p>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/20" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

