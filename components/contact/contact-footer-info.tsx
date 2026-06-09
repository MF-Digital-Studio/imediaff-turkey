"use client"

import { motion } from "motion/react"

export default function ContactFooterInfo() {
  return (
    <section className="relative border-t border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Block k="What should your brief include?" items={["A short overview of your brand", "Past social campaigns (if available)", "Goals and KPI targets", "Timing and budget range"]} delay={0} />
        <Block k="How long does it take?" items={["24h - initial response", "3 days - diagnostic review", "1 week - strategy workshop", "2 weeks - first launch"]} delay={0.1} />
        <Block k="Confidentiality" items={["Every brief is handled confidentially", "NDA available on request", "Infrastructure follows GDPR-aligned standards", "Sensitive data is encrypted at rest"]} delay={0.2} />
      </div>
    </section>
  )
}

function Block({ k, items, delay }: { k: string; items: string[]; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay }}
      className="border-t border-border pt-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ {k}</p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm"><span aria-hidden className="text-primary mt-1">-</span><span className="text-foreground/80">{i}</span></li>
        ))}
      </ul>
    </motion.div>
  )
}

