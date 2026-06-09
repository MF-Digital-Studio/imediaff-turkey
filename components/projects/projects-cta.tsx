"use client"

import Link from "next/link"
import { motion } from "motion/react"

export default function ProjectsCta() {
  return (
    <section className="relative border-t border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ Birlikte Büyüyelim</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
            Sıradaki Proje <span className="text-primary">Sizin Olabilir</span>.
          </h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="md:col-span-4 flex flex-wrap gap-3 md:justify-end"
        >
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-sunset-gradient px-6 py-4 font-semibold text-black hover:scale-105 transition-transform duration-300">
            Brief Gönder
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


