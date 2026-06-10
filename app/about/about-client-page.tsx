"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import {
  TrendingUp, Coins,
  Scale, Lock,
  Target, Camera,
  Film, Zap,
  Users, Star,
  Package, Flag,
} from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const PRESENCE = [
  {
    region: "01",
    city: "İstanbul Merkez",
    note: "Operasyon, marka iletişimi ve creator süreçleri İstanbul merkezli ekip tarafından yönetilir.",
  },
  {
    region: "02",
    city: "Creator Ağı",
    note: "Farklı kategorilerde içerik üreten geniş bir creator ağıyla markalar için doğru eşleşmeler kurarız.",
  },
  {
    region: "03",
    city: "Kreatif & Operasyon",
    note: "Kampanya, prodüksiyon, raporlama ve süreç yönetimini tek ekip altında toplarız.",
  },
]

const METRICS = [
  { value: "10.000+", label: "İçerik Üreticisi" },
  { value: "150+", label: "Marka İş Birliği" },
  { value: "360°", label: "Hizmet Yaklaşımı" },
]

const PARTNERS = [
  { name: "Amazon", sector: "E-Ticaret" },
  { name: "Trendyol", sector: "E-Ticaret" },
  { name: "Çiçeksepeti", sector: "Yaşam" },
  { name: "Hepsiburada", sector: "Teknoloji" },
]

const CAPABILITIES = [
  {
    index: "01",
    title: "Creator Stratejisi",
    description:
      "Markaları doğru içerik üreticileriyle eşleştirir; hedef kitle, kategori ve içerik formatına göre strateji oluştururuz.",
  },
  {
    index: "02",
    title: "Marka & Kampanya Yönetimi",
    description:
      "Brief’ten raporlamaya kadar kampanya sürecini net hedefler ve ölçülebilir çıktılarla yönetiriz.",
  },
  {
    index: "03",
    title: "Prodüksiyon & İçerik",
    description:
      "Platformlara uygun, kreatif ve performans odaklı içerik üretimleri geliştiririz.",
  },
  {
    index: "04",
    title: "Stratejik Danışmanlık",
    description:
      "Affiliate, marka iş birlikleri, kategori büyümesi ve operasyon süreçlerinde uygulanabilir yol haritaları sunarız.",
  },
]

const CORE_SERVICES = [
  {
    PrimaryIcon: TrendingUp,
    AccentIcon: Coins,
    title: "Finansal & Stratejik Danışmanlık",
    description: "Kampanya bütçeleri, komisyon modelleri ve büyüme hedefleri için uygulanabilir yol haritaları oluştururuz.",
  },
  {
    PrimaryIcon: Scale,
    AccentIcon: Lock,
    title: "Hukuki & Hak Yönetimi",
    description: "Sözleşme yapısı, içerik kullanım hakları, marka güvenliği ve KVKK süreçlerinde destek sunarız.",
  },
  {
    PrimaryIcon: Target,
    AccentIcon: Camera,
    title: "Reklam & Pazarlama Prodüksiyonu",
    description: "Kampanya fikrinden reklam kurgusuna kadar hedef kitleye uygun pazarlama içerikleri geliştiririz.",
  },
  {
    PrimaryIcon: Film,
    AccentIcon: Zap,
    title: "Kreatif Prodüksiyon",
    description: "Sosyal platformlara uygun, yüksek kaliteli görsel hikâye anlatımı ve içerik asset’leri üretiriz.",
  },
  {
    PrimaryIcon: Users,
    AccentIcon: Star,
    title: "Talent Management",
    description: "İçerik üreticileri için marka iş birlikleri, affiliate fırsatları ve performans gelişimi süreçlerini yönetiriz.",
  },
  {
    PrimaryIcon: Package,
    AccentIcon: Flag,
    title: "Marka & Ürün Geliştirme",
    description: "Markaların kategori, hedef kitle, ürün konumlandırması ve kampanya stratejilerini güçlendiririz.",
  },
]

const HOW_WE_WORK = [
  {
    step: "01",
    title: "Onboarding & İnceleme",
    desc: "Marka veya içerik üreticisi profili 1–5 iş günü içinde incelenir. Uygunluk, hedefler ve iş birliği kriterleri değerlendirilir.",
  },
  {
    step: "02",
    title: "Sözleşme & Anlaşma",
    desc: "Partnerlik şartları, komisyon yapısı, ödeme takvimi ve çalışma kuralları net şekilde tanımlanır.",
  },
  {
    step: "03",
    title: "Program Aktivasyonu",
    desc: "Affiliate linkleri, panel erişimi, kampanya kanalları ve operasyonel kurulum tamamlanır.",
  },
  {
    step: "04",
    title: "Aktif Yönetim",
    desc: "Performans takibi, kampanya güncellemeleri, bonus görevleri ve birebir yönlendirmelerle süreç düzenli olarak yönetilir.",
  },
  {
    step: "05",
    title: "Raporlama & Ödeme",
    desc: "Aylık raporlar net kırılımlarla paylaşılır. Ödeme süreçleri belirlenen takvim ve resmi süreçlere göre yürütülür.",
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutClientPage() {
  const brandRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: brandRef,
    offset: ["start end", "end start"],
  })
  const brandY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* ── Hero ── */}
      <section className="bg-white text-[#111111] border-b border-[#E5E5E5] pt-32 pb-14 md:pt-40 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            / Hakkımızda
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.85] tracking-[-0.05em] text-balance text-[#111111]">
            Etkiyi Ölçülebilir Kılıyoruz.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#888888] md:text-xl">
            imediaff; markalar, içerik üreticileri ve dijital ticaret platformları arasında güçlü iş birlikleri kuran yeni nesil bir influencer ve affiliate marketing ajansıdır.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#888888] md:text-lg">
            Strateji, prodüksiyon, talent management, affiliate operasyonları, hukuki süreçler ve performans takibini tek bir yapıda birleştirerek iş birliklerini daha profesyonel ve sürdürülebilir hale getiriyoruz.
          </p>
        </motion.div>
      </section>

      {/* ── Regional Presence (White Theme) ── */}
      <section className="bg-[#FB430A] text-white py-16 md:py-24 border-b border-white/20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRESENCE.map((item, index) => (
              <motion.article
                key={item.region}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-white/20 bg-white/10 p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md rounded-2xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {item.region}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-white">
                  {item.city}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Legacy of Influence (White Theme) ── */}
      <section className="bg-white text-[#111111] py-16 md:py-28 relative z-10 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A]">
              / Etki
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.045em] text-balance text-[#111111]">
              Güçlü Bir<br />Ekosistem.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#888888] md:text-lg">
              Markalar ve içerik üreticileri için görünürlük, güven ve performansı aynı operasyon yapısında bir araya getiriyoruz.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-[#E5E5E5] sm:grid-cols-3 rounded-xl overflow-hidden">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white px-8 py-10 md:px-12 md:py-14"
              >
                <p
                  className="font-display font-bold leading-none tracking-[-0.05em] text-[#111111]"
                  style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                >
                  <span className="bg-gradient-to-br from-[#FB430A] to-[#FF6B00] bg-clip-text text-transparent">
                    {m.value}
                  </span>
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Visual Divider (Immersive Section Break) ── */}
      <section
        ref={brandRef}
        className="relative w-full aspect-[2/1] min-h-[400px] max-h-[1000px] overflow-hidden bg-white text-[#111111]"
      >
        <motion.div style={{ y: brandY }} className="absolute inset-0 scale-[1.2]">
          <Image
            src="/brand.png"
            alt="imediaff Türkiye brand visual"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Caption */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-12 md:pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
              / Sistem
            </p>
            <p className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              Görünürlük, güven ve ölçülebilir etki için tasarlandı.
            </p>
          </div>
        </div>
      </section>

      {/* ── Four Pillars (White Theme) ── */}
      <section className="bg-white text-[#111111] py-16 md:py-28 relative z-10 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A]">
              / Temel Yetkinlikler
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
              Dijital Etkinin<br />Dört Temeli.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-[#E5E5E5] md:grid-cols-2 rounded-2xl overflow-hidden">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white px-8 py-10 transition-colors duration-300 hover:bg-[#FAFAFA] md:px-10 md:py-12"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-br from-[#FB430A] to-[#FF6B00] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#888888]">
                  {cap.index}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-[#111111] md:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#888888]">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work (White Theme) ── */}
      <section className="bg-[#FB430A] text-white py-16 md:py-28 relative z-10 border-t border-white/20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
              / Nasıl Çalışırız
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-white">
              Şeffaf ve Performans{"\u00A0"}<br />Odaklı Model.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {HOW_WE_WORK.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col group"
              >
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-white/20 group-hover:bg-white/50 transition-colors duration-500" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 font-mono text-sm text-white/80 transition-colors duration-500 group-hover:border-white group-hover:text-white mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Services (White Theme) ── */}
      <section className="bg-white text-[#111111] pt-16 pb-16 md:pt-20 md:pb-28 relative overflow-hidden z-10 border-t border-[#E5E5E5]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#FB430A]/10 to-[#FF6B00]/10 blur-[100px] rounded-full opacity-50" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A]">
              / Uzmanlık Alanları
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
              Uçtan Uca <br className="hidden md:block" /> Dijital Yetkinlik.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 lg:pb-24">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-[#E5E5E5] border border-[#E5E5E5] p-[1px] transition-all duration-500 hover:shadow-lg hover:border-[#FB430A]/30 ${i % 3 === 1 ? 'lg:translate-y-12' : i % 3 === 2 ? 'lg:translate-y-24' : ''}`}
              >
                <div className="absolute inset-0 bg-[#FAFAFA] transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FB430A] group-hover:via-[#FA1702] group-hover:to-[#FB430A]" />

                <div className="relative flex flex-col h-full bg-white rounded-[15px] p-8 md:p-10">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#FAFAFA] rounded-full blur-2xl group-hover:bg-gradient-to-br group-hover:from-[#FB430A]/10 group-hover:to-[#FB430A]/10 transition-colors duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10 relative inline-flex h-20 w-20 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-2xl bg-[#FAFAFA] ring-1 ring-[#E5E5E5] transition-colors duration-500 group-hover:ring-[#FB430A]/40" />
                      <service.PrimaryIcon
                        size={36}
                        strokeWidth={1.4}
                        className="relative z-10 text-[#111111] transition-all duration-500 group-hover:text-[#FB430A]"
                        style={{
                          filter: "none",
                        }}
                      />
                      <service.AccentIcon
                        size={16}
                        strokeWidth={2}
                        className="absolute bottom-2 right-2 z-20 text-[#FB430A] transition-all duration-500 group-hover:text-[#FB430A]"
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#111111] mb-4">
                      {service.title}
                    </h3>
                    <p className="mt-auto text-base leading-relaxed text-[#888888] font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Partnerships (White Theme) ── */}
      <section className="bg-[#FB430A] text-white py-16 md:py-24 border-t border-white/20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
                / Stratejik İş Birlikleri
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
                Sektör Liderleriyle<br />Güçlü İş Birlikleri.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/90 md:text-base">
              E-ticaret, teknoloji, yaşam ve perakende kategorilerinde güçlü marka ve platform deneyimiyle çalışıyoruz.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-4 rounded-xl overflow-hidden">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white/10 px-6 py-8 transition-colors duration-300 hover:bg-white/20 md:px-8 md:py-10"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors duration-300 group-hover:text-white">
                  {p.sector}
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">
                  {p.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Statement (Strategy) (White Theme) ── */}
      <section className="bg-white text-[#111111] border-t border-[#E5E5E5] py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-10"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              / Strateji
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-balance text-[#111111]">
              Pazar Odaklı Büyüme Stratejisi.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#888888] md:text-lg">
              Markalar için kategori, hedef kitle, creator profili ve kampanya modelini birlikte kurgulayarak daha net ve uygulanabilir bir büyüme planı oluştururuz.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-[#E5E5E5] sm:grid-cols-3 rounded-lg overflow-hidden">
              {["Creator Eşleşmesi", "Kampanya Modeli", "Performans Takibi"].map((item) => (
                <div key={item} className="bg-white px-4 py-5 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FB430A]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Scale CTA (Sunset Gradient Theme) ── */}
      <section className="bg-gradient-to-br from-[#FB430A] to-[#FF6B00] text-white py-24 md:py-36 border-t border-white/20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center md:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold">
            / Hemen Başlayın
          </p>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em] text-balance text-white">
            Etkinizi Büyütün.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl font-medium mx-auto md:mx-0">
            Markanız veya içerik üretici profiliniz için doğru modeli birlikte netleştirelim.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white px-10 py-5 text-base font-bold text-[#FB430A] transition-transform hover:scale-105 rounded-full"
            >
              Teklif Al
            </Link>
            <Link
              href="/talent"
              className="inline-flex items-center gap-2 border-2 border-white px-10 py-5 text-base font-bold text-white transition-all hover:bg-white hover:text-[#FB430A] rounded-full"
            >
              Başvuru Yap
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
