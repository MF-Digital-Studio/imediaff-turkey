"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

const DETAILED_SERVICES = [
  {
    title: "Marka Danışmanlığı",
    description: "Markanın hedef kitlesine, kategori dinamiklerine ve satış hedeflerine göre influencer ve affiliate stratejisi oluştururuz.",
    image: "/services/service-04.jpg",
    features: ["Hedef Kitle Analizi", "Kategori Dinamikleri", "Stratejik Konumlandırma"],
  },
  {
    title: "Influencer Marketing",
    description: "Markaları doğru içerik üreticileriyle buluşturur, brief’ten raporlamaya kadar tüm kampanya sürecini yönetiriz.",
    image: "/services/service-02.jpg",
    features: ["Doğru Eşleştirme", "Uçtan Uca Yönetim", "Performans Odaklı"],
  },
  {
    title: "Affiliate Marketing",
    description: "Link, komisyon, performans ve ödeme süreçlerini şeffaf bir operasyon yapısıyla takip ederiz.",
    image: "/services/service-01.jpg",
    features: ["Şeffaf Takip", "Link & Komisyon Altyapısı", "Performans Analizi"],
  },
  {
    title: "Talent Management",
    description: "İçerik üreticilerinin marka iş birlikleri, teklif değerlendirme, içerik planlama ve performans analiz süreçlerine destek oluruz.",
    image: "/services/service-06.jpg",
    features: ["Yetenek Yönetimi", "İş Birliği Değerlendirme", "Birebir Destek"],
  },
  {
    title: "Prodüksiyon & Reklam Yapımı",
    description: "Kampanya fikri, kreatif konsept, çekim, kurgu, post-prodüksiyon ve medya planlama süreçlerinde markalara destek veririz.",
    image: "/services/service-03.jpg",
    features: ["Kreatif Konsept", "Post-Prodüksiyon", "Medya Planlama"],
  },
  {
    title: "Mali & Hukuki Süreç Danışmanlığı",
    description: "Sözleşme, ödeme, faturalandırma, KVKK ve kampanya süreçlerinde marka ve içerik üreticilerine daha güvenli bir operasyon alanı sağlarız.",
    image: "/services/service-05.jpg",
    features: ["Güvenli Sözleşmeler", "KVKK Uyum Altyapısı", "Mali Danışmanlık"],
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Başvuru ve İnceleme",
    description: "1-5 iş günü içerisinde profil veya kampanya incelenir, uygunluk doğrulanır.",
  },
  {
    step: "02",
    title: "Sözleşme Onayı",
    description: "Komisyon oranları, kurallar ve hakların net bir şekilde belirlendiği sözleşme imzalanır.",
  },
  {
    step: "03",
    title: "Sistem Aktivasyonu",
    description: "Affiliate linkleri veya kampanya kurgusu aktif hale getirilir, iletişim kanallarına dahil olunur.",
  },
  {
    step: "04",
    title: "Aktif Yönetim",
    description: "Anlık performans takibi, kampanya güncellemeleri ve danışmanlık hizmetleriyle optimizasyon sağlanır.",
  },
  {
    step: "05",
    title: "Raporlama ve Ödeme",
    description: "Aylık şeffaf raporlamalar doğrultusunda hak edilen ödemeler doğrudan gerçekleştirilir.",
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
            / Hizmetlerimiz
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
            Markalar ve İçerik Üreticileri İçin Uçtan Uca Çözümler.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#666666] md:text-xl">
            iMediaff Türkiye; markalar, içerik üreticileri ve e-ticaret platformları arasında entegre çözümler geliştirir. 360° yaklaşımla sunduğumuz hizmet yelpazemiz: Influencer Marketing, Affiliate Marketing, Talent Management, Marka Danışmanlığı, Dijital Pazarlama, Prodüksiyon & Reklam Yapımı, Kampanya Yönetimi, Mali ve Hukuki Süreç Danışmanlığı.
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
              / Entegre Çözümler
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-black">
              Performans Odaklı <br className="hidden md:block" /> 360° Uzmanlık.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-40">
            {DETAILED_SERVICES.map((service, i) => {
              const isEven = i % 2 === 0
              const serviceIds = [
                "marka-danismanligi",
                "influencer-marketing",
                "affiliate-marketing",
                "talent-management",
                "produksiyon-ve-reklam-yapimi",
                "mali-ve-hukuki-surec-danismanligi"
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
                / Net ve Şeffaf Akış
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
            / Gücünüzü Katlayın
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-10 text-[#111111]">
            Ölçülebilir başarıya <br className="hidden md:block" /> bugün ulaşın.
          </h2>
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
