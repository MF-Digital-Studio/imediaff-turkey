"use client"

import Link from "next/link"
import { motion } from "motion/react"

export default function BusinessCta() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border border-border bg-background relative overflow-hidden"
        >
          <div className="relative p-10 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="md:col-span-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 30-day pilot</p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
                Build measurable <span className="text-primary">momentum</span>.
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                30 days, 3 campaigns, and one clear performance outcome designed for scale.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="md:col-span-4 flex flex-wrap gap-3 md:justify-end"
            >
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-sunset-gradient px-6 py-4 font-semibold text-black hover:scale-105 transition-transform duration-300">
                Start Pilot
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


