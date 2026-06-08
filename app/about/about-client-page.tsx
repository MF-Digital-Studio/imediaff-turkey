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
    region: "MERKEZ",
    city: "İstanbul HQ",
    note: "Tüm operasyonlarımızın, hukuki ve finansal süreçlerimizin yönetildiği stratejik merkezimiz.",
  },
  {
    region: "EKOSİSTEM",
    city: "Güçlü Creator Ağı",
    note: "Trendyol, Çiçeksepeti, Hepsiburada ve Amazon partnerlikleriyle büyüyen 10.000+ içerik üreticisi ağıyla, markalar ve creator'lar arasında sürdürülebilir iş birlikleri kuruyoruz.",
  },
  {
    region: "PRODÜKSİYON",
    city: "Kreatif Stüdyo",
    note: "Markalar için platform dinamiklerine uygun, yüksek kaliteli içerik ve kampanya üretim merkezi.",
  },
]

const METRICS = [
  { value: "10.000+", label: "İçerik Üreticisi" },
  { value: "150+", label: "Marka İş Birliği" },
  { value: "360°", label: "Performans Çözümü" },
]

const PARTNERS = [
  { name: "Trendyol", sector: "E-Ticaret" },
  { name: "Boyner", sector: "Moda & Perakende" },
  { name: "LC Waikiki", sector: "Giyim" },
  { name: "Hepsiburada", sector: "Teknoloji" },
]

const CAPABILITIES = [
  {
    index: "01",
    title: "İçerik Üretici Ağı",
    description:
      "Trendyol TrendFam ekosisteminde aktif olarak yer alan, doğrulanmış ve performans odaklı geniş influencer ağı.",
  },
  {
    index: "02",
    title: "Marka & Influencer Eşleştirme",
    description:
      "Marka hedeflerine ve hedef kitleye en uygun içerik üreticilerini veri odaklı analizlerle belirleme ve eşleştirme.",
  },
  {
    index: "03",
    title: "Affiliate Operasyon Yönetimi",
    description:
      "Link oluşturma, komisyon yapısı kurulumu, performans takibi ve Trendyol paneli üzerinden uçtan uca kampanya yönetimi.",
  },
  {
    index: "04",
    title: "Raporlama ve Süreç Yönetimi",
    description:
      "Şeffaf raporlama, sözleşme süreçleri, KVKK uyumu ve komisyon ödemelerinin eksiksiz takibi.",
  },
]

const CORE_SERVICES = [
  {
    PrimaryIcon: TrendingUp,
    AccentIcon: Coins,
    title: "Affiliate Pazarlama Yönetimi",
    description: "Trendyol TrendFam süreçleri, link oluşturma, komisyon takibi, raporlama ve ödeme süreci.",
  },
  {
    PrimaryIcon: Users,
    AccentIcon: Star,
    title: "Influencer İş Birlikleri",
    description: "Markalarla doğru içerik üreticilerini eşleştirme ve 1 yıllık sözleşmeli, performans odaklı yapı.",
  },
  {
    PrimaryIcon: Target,
    AccentIcon: Camera,
    title: "Marka Kampanya Yönetimi",
    description: "Brief alma, hedef kitle analizi, creator seçimi, kampanya takibi ve optimizasyonu.",
  },
  {
    PrimaryIcon: Film,
    AccentIcon: Zap,
    title: "Kampanya Prodüksiyonu",
    description: "Sosyal medya formatlarına uygun kreatif üretim, kampanya içeriği ve prodüksiyon desteği.",
  },
  {
    PrimaryIcon: Package,
    AccentIcon: Flag,
    title: "Creator Danışmanlığı",
    description: "Link stratejisi, içerik optimizasyonu, performans analizi ve özel eğitim webinarları.",
  },
  {
    PrimaryIcon: Scale,
    AccentIcon: Lock,
    title: "Hukuki & Finansal Yönetim",
    description: "Sözleşme, KVKK uyumu, faturalandırma, ödeme takibi ve tam şeffaf finansal raporlama.",
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
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.85] tracking-[-0.05em] text-balance text-[#111111]">
            Etkiyi Ölçülebilir Kılıyoruz.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#888888] md:text-xl">
            Markalar, içerik üreticileri ve dijital ticaret platformları arasında güçlü, sürdürülebilir ve performans odaklı iş birlikleri kuruyoruz.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#888888] md:text-lg">
            Trendyol'un resmi partner ajanslarından biri olarak, influencer ve affiliate pazarlama operasyonlarını şeffaf, ölçülebilir ve güçlü bir altyapıyla yönetiyoruz.
          </p>
        </motion.div>
      </section>

      {/* ── Regional Presence (White Theme) ── */}
      <section className="bg-white text-black py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
            / Operasyon
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRESENCE.map((item, index) => (
              <motion.article
                key={item.region}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-gray-200 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md rounded-2xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FE9417]">
                  {item.region}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-black">
                  {item.city}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Legacy of Influence (Black Theme) ── */}
      <section className="bg-white text-[#111111] py-16 md:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Altyapı
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.045em] text-balance text-[#111111]">
              Güçlü Ekosistem.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#888888] md:text-lg">
              Geniş içerik üreticisi ağımızla markaların dijital görünürlüğünü ve satışlarını artıracak çözümler sunuyoruz.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-white/10 sm:grid-cols-3">
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
                  <span className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] bg-clip-text text-transparent">
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
            alt="imediaff Türkiye"
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* Caption */}
        <div className="absolute inset-0 flex items-end z-20">
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-12 md:pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FE9417]">
              / Sistem
            </p>
            <p className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl drop-shadow-2xl">
              Sektörde iz bırakan, sürdürülebilir ve şeffaf <span className="text-[#FE9417]">çözümler.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Global Capabilities / Four Pillars (Black Theme) ── */}
      <section className="bg-white text-[#111111] py-16 md:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Yetkinliklerimiz
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
              Dijital Mükemmelliğin<br />Dört Temeli.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-white/10 md:grid-cols-2 rounded-2xl overflow-hidden">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white px-8 py-10 transition-colors duration-300 hover:bg-white/[0.03] md:px-10 md:py-12"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-br from-[#FE9417] to-[#FF6B00] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FE9417]">
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

      {/* ── How We Work (Black Theme) ── */}
      <section className="bg-white text-[#111111] py-16 md:py-28 relative z-10 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Nasıl Çalışıyoruz
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
              Şeffaf ve{"\u00A0"}<br />performans odaklı{"\u00A0"}süreç.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Başvuru / Brief",
                desc: "İçerik üreticisi başvurusu veya marka kampanya briefi sisteme iletilir. İhtiyaçlar netleştirilir.",
              },
              {
                step: "02",
                title: "Uygunluk Analizi",
                desc: "Profil veya kampanya hedefleri incelenerek Trendyol TrendFam kriterlerine ve bölgesel dinamiklere uygunluğu doğrulanır.",
              },
              {
                step: "03",
                title: "Sözleşme ve Kurulum",
                desc: "Tam şeffaflıkla komisyon oranları ve kuralların belirlendiği resmi sözleşme imzalanır. Paneller aktive edilir.",
              },
              {
                step: "04",
                title: "Kampanya Aktivasyonu",
                desc: "Affiliate linkleri oluşturulur, kampanya yayına alınır. Süreç boyunca stratejik danışmanlık sağlanır.",
              },
              {
                step: "05",
                title: "Performans Raporlama",
                desc: "Aylık performans raporları ve komisyon dökümleri sunulur. Düzenli ve sorunsuz ödeme süreci yürütülür.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col group"
              >
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-white/10 group-hover:bg-[#FE9417]/50 transition-colors duration-500" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-white font-mono text-sm text-[#FE9417] transition-colors duration-500 group-hover:border-[#FE9417] group-hover:text-[#FE9417] mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#888888]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Services (Black Theme) ── */}
      <section className="bg-white text-[#111111] pb-16 md:pb-28 relative overflow-hidden z-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#FE9417]/10 to-[#FF6B00]/10 blur-[100px] rounded-full opacity-50" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Hizmetlerimiz
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-[#111111]">
              Uçtan Uca <br className="hidden md:block" /> Dijital Çözümler.
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
                className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md p-[1px] transition-all duration-500 ${i % 3 === 1 ? 'lg:translate-y-12' : i % 3 === 2 ? 'lg:translate-y-24' : ''}`}
              >
                <div className="absolute inset-0 bg-white/10 transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FE9417] group-hover:via-[#FE9417] group-hover:to-[#FE9417]" />

                <div className="relative flex flex-col h-full bg-black/90 backdrop-blur-md rounded-[15px] p-8 md:p-10">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-gradient-to-br group-hover:from-[#FE9417]/20 group-hover:to-[#FE9417]/20 transition-colors duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10 relative inline-flex h-20 w-20 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-colors duration-500 group-hover:ring-[#FE9417]/40" />
                      <service.PrimaryIcon
                        size={36}
                        strokeWidth={1.4}
                        className="relative z-10 text-white transition-all duration-500 group-hover:text-[#FE9417]"
                        style={{
                          filter: "drop-shadow(0 0 6px rgba(254,148,23,0.55)) drop-shadow(0 0 14px rgba(254,148,23,0.25))",
                        }}
                      />
                      <service.AccentIcon
                        size={16}
                        strokeWidth={2}
                        className="absolute bottom-2 right-2 z-20 text-[#FE9417] transition-all duration-500 group-hover:text-[#FE9417]"
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(255,189,30,0.7))",
                        }}
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-white mb-4 transition-colors group-hover:text-[#FE9417]">
                      {service.title}
                    </h3>
                    <p className="mt-auto text-base leading-relaxed text-gray-400 font-sans transition-colors group-hover:text-gray-300">
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
      <section className="bg-white text-black py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
                / Stratejik Partnerlikler
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-black">
                Sektör Liderleriyle<br />Güçlü İş Birlikleri.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500 md:text-base">
              E-ticaret, teknoloji, moda ve perakende sektörlerinin öncü markalarıyla ölçülebilir büyüme sağlıyoruz.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-px border border-gray-200 bg-gray-200 md:grid-cols-4 rounded-xl overflow-hidden">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white px-6 py-8 transition-colors duration-300 hover:bg-gray-50 md:px-8 md:py-10"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#666666] transition-colors duration-300 group-hover:text-[#FE9417]">
                  {p.sector}
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-black md:text-3xl">
                  {p.name}
                </p>
                {p.name === "Trendyol" && (
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    imediaff, Trendyol'un resmi partner ajanslarından biri olarak influencer ekosisteminde aktif rol oynamaktadır.
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Statement (Philosophy) (Black Theme) ── */}
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
              / Yeni Nesil Dijital Ajans
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-balance text-[#111111]">
              İş ortaklarımızla uzun vadeli ve şeffaf ilişkiler kuruyoruz.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#888888] md:text-lg">
              Marka, ajans ve içerik üreticisi arasındaki süreci; sözleşme, raporlama, ödeme ve performans takibiyle güven temelli bir yapıya dönüştürüyoruz. imediaff; markalar, içerik üreticileri ve dijital ticaret platformları arasında 360° influencer marketing, affiliate marketing, prodüksiyon, danışmanlık ve süreç yönetimi hizmetleri sunan yeni nesil bir ajanstır.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-[#E5E5E5] bg-white/10 sm:grid-cols-3 rounded-lg overflow-hidden">
              {["Veri Odaklı Strateji", "Şeffaf Süreç Yönetimi", "Performans Bazlı Büyüme"].map((item) => (
                <div key={item} className="bg-white px-4 py-5 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FE9417]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Scale CTA (Sunset Gradient Theme) ── */}
      <section className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] text-black py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center md:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#111111] font-bold">
            / Hemen Başlayın
          </p>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em] text-balance text-[#111111]">
            Gücünüzü keşfedin.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#111111] md:text-xl font-medium mx-auto md:mx-0">
            İster doğru kitleye ulaşmak isteyen bir marka olun, ister gelirinizi katlamak isteyen bir içerik üreticisi — başarı yolculuğunuz burada başlıyor.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white px-10 py-5 text-base font-bold text-[#111111] transition-transform hover:scale-105 rounded-full"
            >
              Teklif Al
            </Link>
            <Link
              href="/talent"
              className="inline-flex items-center gap-2 border-2 border-black px-10 py-5 text-base font-bold text-[#111111] transition-all hover:bg-white hover:text-[#111111] rounded-full"
            >
              Başvuru Yap
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
