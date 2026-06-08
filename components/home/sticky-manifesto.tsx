"use client"

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"

type ManifestoSection = {
  kicker: string
  title: string
  body: string
}

const SECTIONS: ManifestoSection[] = [
  {
    kicker: "01 - STRATEJİ",
    title: "Doğru Creator. Doğru Kampanya.",
    body: "Her kampanya için kitle analizi ve veri odaklı eşleştirmelerle en uygun içerik üreticilerini belirliyoruz.",
  },
  {
    kicker: "02 - KÜLTÜR",
    title: "Sektöre Yön Veren Trendler",
    body: "Kültürel bağlamı derinlemesine anlıyor, markanızın sosyal medyadaki konuşmaların doğal bir parçası olmasını sağlıyoruz.",
  },
  {
    kicker: "03 - BÜYÜME",
    title: "Pazar Payı Yaratıyoruz",
    body: "Sosyal medyadaki dijital ilgiyi satışa ve kalıcı pazar payına dönüştürüyoruz.",
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
    <section className="relative bg-white" aria-label="Manifesto">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 pb-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FE9417]">
              / Manifesto
            </p>
            <h2 className="mt-4 font-sans text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.035em] text-balance max-w-4xl text-[#111111]">
              Ne inşa ediyoruz?
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FE9417 0%, #FF6B00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Konuşulan Marka Anları.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#888888] leading-relaxed font-medium">
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
      className="sticky top-0 h-screen w-full flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div style={{ opacity: dimOpacity }} className="absolute inset-0 bg-white" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1600px] w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-3 hidden md:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FE9417]">{kicker}</p>
          <p className="mt-4 font-sans text-[10rem] leading-none font-bold tracking-[-0.05em] text-[#111111]/5">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <p className="md:hidden font-mono text-[10px] uppercase tracking-[0.4em] text-[#FE9417] mb-4">
            {kicker}
          </p>
          <h3 className="font-sans text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#111111] text-balance">
            {title}
          </h3>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[#888888] font-medium leading-relaxed text-pretty">
            {body}
          </p>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#888888]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

