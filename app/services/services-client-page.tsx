"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

const DETAILED_SERVICES = [
  {
    title: "Affiliate Marketing Yönetimi",
    description: "TrendFam affiliate programı için uçtan uca yönetim: içerik üreticisi onboarding’i, link oluşturma, komisyon takibi ve ödeme süreçleri. Trendyol’un önde gelen yetkili partner ajanslarından biri olarak süreci profesyonel bir yapıyla yönetiyoruz.",
    image: "/services/service-01.jpg",
    features: ["TrendFam Partneri", "Komisyon Takibi", "Ödeme Süreci"],
  },
  {
    title: "Influencer & Marka İş Birlikleri",
    description: "Markalar ile doğrulanmış içerik üreticileri arasında stratejik eşleşmeler kurarız. Her iş birliği; net KPI’lar, şeffaf raporlama ve tarafların haklarını koruyan yapılandırılmış sözleşme süreçleriyle yürütülür.",
    image: "/services/service-02.jpg",
    features: ["5.000+ İçerik Üreticisi", "Sözleşmeli İş Birlikleri", "Performans Bazlı"],
  },
  {
    title: "Creator Danışmanlığı & Büyüme",
    description: "İçerik üreticilerine link stratejisi, içerik optimizasyonu, hedef kitle analizi ve kazanç maksimizasyonu konularında birebir destek sunarız. Düzenli webinarlar ve aktif kampanya kanallarıyla creator’ların güncel fırsatlara erişmesini sağlarız.",
    image: "/services/service-06.jpg",
    features: ["Birebir Danışmanlık", "Webinarlar", "WhatsApp Kanalı"],
  },
  {
    title: "Kampanya Prodüksiyonu & İçerik",
    description: "Sosyal platformlarda performans gösterecek yüksek kaliteli içerik ve reklam prodüksiyonları geliştiririz. Konseptten teslimata kadar her içerik, kampanya hedeflerine ve platform formatlarına uygun şekilde hazırlanır.",
    image: "/services/service-03.jpg",
    features: ["Set Prodüksiyonu", "Sosyal Formatlar", "Kreatif Uyarlama"],
  },
  {
    title: "Pazar Stratejisi & Kategori Büyümesi",
    description: "Markaların doğru kategori, hedef kitle, creator profili ve kampanya modeliyle daha güçlü konumlanmasına yardımcı oluruz. Yerel tüketici davranışları, platform dinamikleri ve creator ağı üzerinden uygulanabilir büyüme stratejileri geliştiririz.",
    image: "/services/service-04.jpg",
    features: ["Kategori Stratejisi", "Hedef Kitle Analizi", "Kampanya Modeli"],
  },
  {
    title: "Hukuki & Finansal Danışmanlık",
    description: "Sözleşme yapısı, vergi uyumu, KVKK süreçleri ve ödeme yönetimi konularında destek sunarız. Komisyon bazlı modelle çalışır; ön ödeme ve gizli maliyet içermeyen şeffaf bir yapı kurarız.",
    image: "/services/service-05.jpg",
    features: ["Sözleşme Yapısı", "Vergi Uyumu", "KVKK"],
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Onboarding & Uygunluk İncelemesi",
    description: "Profil ve başvuru bilgileri 1–5 iş günü içinde incelenir. Uygunluk, program kriterleri ve kampanya ihtiyaçları doğrultusunda değerlendirilir.",
  },
  {
    step: "02",
    title: "Sözleşme & Anlaşma",
    description: "1 yıllık partnerlik sözleşmesi imzalanır. Komisyon oranları, ödeme takvimi ve uyum kuralları taraflar için net şekilde tanımlanır.",
  },
  {
    step: "03",
    title: "Program Aktivasyonu",
    description: "Affiliate linkleri aktive edilir, Influencer Center erişimi sağlanır ve içerik üreticisi kampanya kanalına dahil edilir.",
  },
  {
    step: "04",
    title: "Aktif Yönetim & Optimizasyon",
    description: "Performans düzenli takip edilir; bonus görevleri, kampanya güncellemeleri, kanal duyuruları ve birebir yönlendirmelerle süreç optimize edilir.",
  },
  {
    step: "05",
    title: "Raporlama & Ödeme",
    description: "Aylık komisyon raporları şeffaf kırılımlarla paylaşılır. Ödemeler belirlenen döngüye göre IBAN veya uygun hesap transferiyle yapılır. Ön ödeme yoktur; komisyon bazlı model uygulanır.",
  },
]

export default function ServicesClientPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ── Hero Section (Black Theme) ── */}
      <section className="bg-white text-[#111111] border-b border-[#E5E5E5] pt-32 pb-16 md:pt-48 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
            / HİZMETLER
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
            Sadece Büyüme Değil, Dönüşüm.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#666666] md:text-xl">
            Affiliate program yönetiminden kreatif prodüksiyona ve hukuki danışmanlığa kadar; markalar ve içerik üreticileri için uçtan uca çözümler sunuyoruz.
          </p>
        </motion.div>
      </section>

      {/* ── 6 Detailed Pillars (White Theme) ── */}
      <section className="bg-white text-black border-b border-gray-200 py-16 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-32 text-center md:text-left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / ENTEGRE YETKİNLİKLER
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-black">
              Uçtan Uca Kurumsal Çözümler.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-40">
            {DETAILED_SERVICES.map((service, i) => {
              const isEven = i % 2 === 0
              const serviceIds = [
                "affiliate-marketing-yonetimi",
                "influencer-ve-marka-is-birlikleri",
                "creator-danismanligi-ve-buyume",
                "kampanya-produksiyonu-ve-icerik",
                "pazar-stratejisi-ve-kategori-buyumesi",
                "hukuki-ve-finansal-danismanlik"
              ]
              return (
                <div
                  id={serviceIds[i]}
                  key={service.title}
                  className={`relative flex flex-col items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} scroll-mt-28`}
                >

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-2/3 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden group shadow-lg"
                  >
                    <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-700 group-hover:bg-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Text Side (Overlapping Glassmorphism Card on White) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className={`w-[90%] md:w-1/2 lg:w-5/12 -mt-20 md:mt-0 relative z-20 rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-gray-200 p-8 md:p-14 shadow-xl ${isEven ? "md:-ml-24 lg:-ml-32" : "md:-mr-24 lg:-mr-32"}`}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-6 font-bold">
                      / {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-black mb-6 leading-[1.05]">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600 font-sans mb-10">
                      {service.description}
                    </p>

                    <div className="flex flex-col gap-5">
                      {service.features.map(feat => (
                        <div key={feat} className="flex items-center gap-4 group/feat">
                          <div className="h-px w-6 bg-gray-300 transition-all duration-300 group-hover/feat:w-10 group-hover/feat:bg-gradient-to-r group-hover/feat:from-[#FE9417] group-hover/feat:to-[#FE9417]" />
                          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-gray-600 font-medium transition-colors duration-300 group-hover/feat:text-black">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5-Step Process (Black Theme) ── */}
      <section className="bg-white text-[#111111] border-b border-[#E5E5E5] py-16 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
                / NET SÜREÇ
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
                Operasyonel <br /> Mükemmellik.
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col group"
              >
                {/* Connecting line for desktop */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-white/10 group-hover:bg-[#FE9417]/50 transition-colors duration-500" />
                )}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-white font-mono text-sm text-[#FE9417] transition-colors duration-500 group-hover:border-[#FE9417] group-hover:text-[#FE9417] mb-6">
                  {step.step}
                </div>

                <h3 className="font-display text-xl font-bold text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888888]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme) ── */}
      <section className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] text-[#111111] py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#555555] font-bold mb-6">
            / ETKİNİZİ BÜYÜTÜN
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-6 text-[#111111]">
            Ölçülebilir Momentum Kurun.
          </h2>
          <p className="text-[#111111] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Hedeflerinize uygun hizmet modelini birlikte netleştirelim.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-6 text-lg font-bold text-[#111111] transition-transform hover:scale-105 shadow-xl"
          >
            Teklif Al
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
