"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { EVENTS } from "@/lib/events"

export default function FeaturedEvents() {
  const featuredEvents = EVENTS.slice(0, 3)

  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Etkinlikler
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance max-w-3xl">
              Son etkinlikler.
              <br />
              <span className="text-muted-foreground">Ölçülebilir etki.</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
          >
            Tüm etkinlikler
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center rounded-[2rem] border border-border bg-card py-20 px-6 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Takvim
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Etkinlikler Yakında.
          </h3>
          <p className="text-muted-foreground text-lg max-w-md">
            Sektör profesyonellerini, markaları ve içerik üreticilerini bir araya getirecek etkinliklerimiz için takipte kalın.
          </p>
        </div>
      </div>
    </section>
  )
}
