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
    note: "Trendyol, Çiçeksepeti, Hepsiburada ve Amazon partnerlikleriyle büyüyen geniş influencer ağıyla sürdürülebilir iş birlikleri kuruyoruz.",
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



      {/* ── Strategic Partnerships (Short Reference) ── */}
      <section className="bg-white text-black py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
                / Stratejik Partnerlikler
              </p>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-black">
                Sektör Liderleriyle Güçlü İş Birlikleri.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
              E-ticaret, teknoloji, moda ve perakende sektörlerinin öncü markalarıyla çalışıyor, ölçülebilir büyüme sağlıyoruz.
            </p>
          </motion.div>
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
