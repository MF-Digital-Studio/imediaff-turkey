"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Sparkles, Target, Users, LineChart, Globe2, LayoutDashboard } from "lucide-react"

const SERVICES = [
  { icon: Users, title: "Affiliate Pazarlama Yönetimi", desc: "Trendyol TrendFam affiliate program yönetimi: onboarding, takip ve ödemeler." },
  { icon: Globe2, title: "Influencer İş Birlikleri", desc: "Markalar ile doğrulanmış içerik üreticileri arasında 1 yıllık performans sözleşmeleriyle yapılandırılmış eşleştirme." },
  { icon: Target, title: "Kampanya Prodüksiyonu", desc: "Ölçeklenen markalar için yüksek kaliteli içerik ve reklam prodüksiyonu." },
  { icon: LayoutDashboard, title: "Pazar Stratejisi", desc: "Sürdürülebilir büyüme için veri odaklı strateji ve operasyonel altyapı." },
  { icon: Sparkles, title: "Hukuki & Finansal Danışmanlık", desc: "Sözleşme mimarisi, KVKK uyumu ve ödeme yönetimi." },
  { icon: LineChart, title: "İçerik Üretici Danışmanlığı", desc: "Birebir danışmanlık, webinarlar ve performans analitiğiyle içerik üreticilerinin kazancını maksimize ediyoruz." },
]

export default function ServicesPreview() {
  return (
    <section className="relative border-b border-black/10 bg-white" aria-label="Services">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40">/ Hizmetlerimiz</p>
            <h2 className="mt-4 font-sans text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-black text-balance max-w-3xl">
              Dikkati{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FE9417 0%, #FF6B00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                büyümeye
              </span>{" "}
              dönüştürüyoruz.
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 border border-black/20 px-5 py-3 text-sm font-semibold text-black hover:border-[#FE9417] hover:text-[#FE9417] transition-colors">
            Tüm hizmetleri gör
            <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const serviceImages = [
              "/services/service-01.jpg",
              "/services/service-02.jpg",
              "/services/service-03.jpg",
              "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
              "/services/service-05.jpg",
              "/services/service-06.jpg"
            ]
            const serviceAlts = [
              "Affiliate marketing and e-commerce performance",
              "Influencer creating content for brand partnership",
              "Professional campaign production and content creation",
              "Pazara giriş stratejisi ve bölgesel büyüme",
              "Legal contract and financial advisory services",
              "One-on-one creator consultancy and growth session"
            ]

            const serviceUrls = [
              "/services#affiliate-marketing-management",
              "/services#influencer-brand-partnerships",
              "/services#campaign-production-content",
              "/services#market-entry-regional-expansion",
              "/services#legal-financial-advisory",
              "/services#creator-consultancy-growth"
            ]

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[360px] lg:h-[480px] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] border border-transparent hover:border-[#E5E5E5] cursor-pointer"
              >
                {/* Full Card Background Image */}
                <img 
                  src={serviceImages[index]} 
                  alt={serviceAlts[index]} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />

                {/* Default Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-10" 
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                  }}
                />

                {/* Hover Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" 
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                  }}
                />

                {/* Card Content (wrapped in Link, making the entire card clickable) */}
                <Link 
                  href={serviceUrls[index]}
                  className="relative z-20 p-8 md:p-10 flex flex-col justify-between h-full w-full"
                >
                  {/* Service Number: small, muted white, top-left corner */}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#FE9417]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="flex flex-col items-start gap-4">
                    {/* Icon: white, above title */}
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-[#E5E5E5]">
                      <service.icon strokeWidth={1.5} className="h-5 w-5 text-[#111111]" />
                    </div>

                    {/* Title & Description: white/light gray */}
                    <div className="text-left flex flex-col justify-end w-full">
                      <h3 className="font-sans text-2xl font-bold tracking-[-0.02em] text-[#FFFFFF] transform transition-transform duration-500 group-hover:-translate-y-1">
                        {service.title}
                      </h3>
                      
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                        <div className="overflow-hidden">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 flex flex-col gap-3 pt-3">
                            <p className="text-sm font-medium leading-relaxed text-white/85">
                              {service.desc}
                            </p>
                            
                            {/* Accent Color link */}
                            <div className="inline-flex items-center gap-1 text-sm font-bold text-[#FE9417] group-hover:text-[#FF6B00] transition-colors">
                              Daha fazla bilgi <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

