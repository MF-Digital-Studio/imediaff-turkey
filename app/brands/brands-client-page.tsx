"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

const METRICS = [
  { title: "Türkiye Operasyonu",  value: "7+",    desc: "Yıllık Sektör Deneyimi"      },
  { title: "İçerik Üreticisi",    value: "10.000+", desc: "Doğrulanmış Influencer Ağı"   },
  { title: "Başarı Oranı",     value: "850+",    desc: "Başarıyla Tamamlanan Proje"    },
  { title: "Aylık Aktif",        value: "150+",    desc: "Aktif Marka İş Birliği"           },
]

const ALL_BRANDS = [
  "trendyol", "yemeksepeti", "çiçeksepeti", "amazon", "xiaomi", "avon", "züber",
  "dermokil", "purebaby", "flo", "bio-oil", "procsin", "indo", "elidor",
  "defacto", "tefal", "omo", "baby turco", "yayla", "sleepy", "şok",
  "schafer", "mustela", "lumberjack", "l'oréal", "kinderkraft", "kärcher",
  "hobby", "hipp", "hepsiburada", "dove", "cif", "biofeline", "bepanthol",
  "ariel", "letsbechild", "atawich"
]

// ── Parallax image wrapper ──────────────────────────────────────────────────
function ParallaxImage({
  src, alt, direction = "right", theme = "black"
}: {
  src: string; alt: string; direction?: "left" | "right"; theme?: "black" | "white"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const gradientFrom = theme === "black" ? "from-black" : "from-white"
  const topBottomGradient = theme === "black" ? "from-black/40 via-transparent to-black/40" : "from-white/40 via-transparent to-white/40"

  return (
    <div ref={ref} className={`relative w-full h-[480px] md:h-[600px] overflow-hidden rounded-2xl ${theme === 'white' ? 'shadow-2xl' : ''}`}>
      {/* image */}
      <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      </motion.div>

      {/* gradient masks – blend left or right edge into background */}
      {direction === "right" && (
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-l ${gradientFrom} via-transparent to-transparent opacity-80`} />
      )}
      {direction === "left" && (
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${gradientFrom} via-transparent to-transparent opacity-80`} />
      )}
      {/* top & bottom masks */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${topBottomGradient}`} />
    </div>
  )
}

export default function BrandsClientPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* ── Hero (Black Theme) ────────────────────────────────────────────────── */}
      <section className="bg-white text-[#111111] pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 w-full max-w-[800px] h-[800px] bg-gradient-to-bl from-[#FE9417]/10 to-transparent blur-[120px] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">/ Marka İş Birlikleri</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
              Markanız İçin <br /> Doğru İçerik Üreticileriyle <br /> Performans Odaklı Büyüme.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#666666] leading-relaxed font-sans">
              Geniş içerik üreticisi ekosistemine katılın. Trendyol, Çiçeksepeti, Hepsiburada ve Amazon gibi platformlarla yürütülen iş birlikleri ve kampanya deneyimimizle, markanızı doğru kitleyle buluşturuyor, ölçülebilir ve performansa dayalı sonuçlar üzerinden büyüme sağlıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Success Metrics (Black Theme) ──────────────────────────────────────── */}
      <section className="bg-white text-[#111111] py-16 md:py-24 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col border-l border-[#E5E5E5] pl-6 md:pl-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#888888] mb-4">{metric.title}</p>
                <h3 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.02em] text-[#111111] mb-3">{metric.value}</h3>
                <p className="text-sm md:text-base text-[#666666] max-w-[200px]">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Advantage (Black Theme) ────────────────────────────────────── */}
      <section className="bg-white text-[#111111] py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-5">/ Marka Avantajları</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#111111] text-balance">
              Neden imediaff Türkiye<br />İle Çalışmalısınız?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Doğru İçerik Üreticisine Erişim",
                desc: "Markanızın hedef kitlesine en uygun, 10.000'den fazla doğrulanmış içerik üreticisinden oluşan geniş bir havuza anında erişim sağlarsınız.",
              },
              {
                num: "02",
                title: "Performans Bazlı Kampanya",
                desc: "Sadece gerçekleşen satışlar ve dönüşümler üzerinden komisyon ödersiniz. Boşa harcanan reklam bütçesi yoktur; ölçülebilir bir ROI sunar.",
              },
              {
                num: "03",
                title: "Operasyonel Süreç Yönetimi",
                desc: "İçerik üreticisi seçimi, link oluşturma, Trendyol, Çiçeksepeti, Hepsiburada ve Amazon ekosisteminde görünürlük, raporlama ve ödeme takibi gibi tüm operasyonel yükü biz üstleniyoruz.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#E5E5E5] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl bg-gradient-to-r from-[#FE9417] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#FE9417] mb-6">{card.num}</p>
                <h3 className="font-display text-2xl font-bold text-[#111111] mb-4 tracking-tight">{card.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infinite Marquee (White Theme) ─────────────────────────────────────── */}
      <section className="bg-white text-black py-20 md:py-28 overflow-hidden border-b border-gray-200 relative">
        {/* Sunset glow behind the marquee (subtle for white bg) */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-br from-[#FE9417]/5 to-[#FF6B00]/5 blur-3xl" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-12 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">/ Ekosistemdeki Markalar</p>
        </div>

        {/* Fading edge masks for white background */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max relative z-0">
          <motion.div
            className="flex gap-16 md:gap-24 px-8 md:px-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...ALL_BRANDS, ...ALL_BRANDS].map((brand, i) => (
              <div key={`${brand}-${i}`} className="group cursor-default whitespace-nowrap">
                <span className="font-display text-3xl md:text-5xl font-bold tracking-tight lowercase text-black/20 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FE9417] group-hover:to-[#FE9417]">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Brand Offers Program (Black Theme) ──────────────────────────────── */}
      <section className="bg-white text-[#111111] py-20 md:py-32 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20 max-w-4xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-5">/ Marka Teklifleri</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#111111] text-balance mb-6">
              Trendyol Brand Offers<br />Programına Katılın.
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed font-sans max-w-2xl">
              Özel komisyon oranları belirleyerek içerik üreticilerini markanız için içerik oluşturmaya teşvik edin. Trendyol'un Influencer Merkezi üzerinden tam ölçülebilir kampanyalar tasarlayın.
            </p>
          </motion.div>

          {/* 3 advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {[
              {
                num: "01",
                title: "Özel Komisyon Oranları",
                desc: "Ürünleriniz için standart affiliate modelinden daha yüksek, size özel komisyon oranları belirleyerek influencer'ların markanızı önceliklendirmesini sağlayın.",
              },
              {
                num: "02",
                title: "Geniş Takip Penceresi",
                desc: "Standart 2 günlük takip süresini, Brand Offers kampanyalarıyla uzatarak içerik paylaşımından günler sonra bile gerçekleşen satın alımları komisyona dönüştürün.",
              },
              {
                num: "03",
                title: "Creator Panelinde Görünürlük",
                desc: "Markanız doğrudan içerik üreticilerinin özel panellerinde listelenir. Organik bir şekilde keşfedilir, daha fazla etkileşim ve satış oluşturursunuz.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#FE9417]/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl bg-gradient-to-r from-[#FE9417] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#FE9417] mb-6">{card.num}</p>
                <h3 className="font-display text-2xl font-bold text-[#111111] mb-4 tracking-tight">{card.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How It Works 3-step flow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888] mb-10">/ Nasıl Çalışır?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Teklifinizi Oluşturun",
                  desc: "Odaklanmak istediğiniz ürünleri seçin, komisyon oranınızı ve hedef kitlenizi belirleyin. Geri kalan kurulumu biz yönetiyoruz.",
                },
                {
                  step: "02",
                  title: "Influencer'lar Paylaşsın",
                  desc: "Onaylanmış içerik üreticileri panel üzerinden markanızı keşfeder, kendilerine özel linkleri oluşturarak kitleleriyle paylaşırlar.",
                },
                {
                  step: "03",
                  title: "Ölçün ve Kazanın",
                  desc: "Tıklanmalar, dönüşümler ve ciro artışını şeffaf bir şekilde takip edin. Sadece başarılı satışlar üzerinden ödeme yapın.",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] font-mono text-sm text-[#FE9417] mb-6">
                    {s.step}
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#111111] mb-3">{s.title}</h4>
                  <p className="text-sm text-[#888888] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <Link
            href="/contact?type=brand"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FE9417] to-[#FF6B00] px-10 py-5 text-base font-bold text-[#111111] transition-transform hover:scale-105 shadow-xl"
          >
            Marka Briefi Gönder ↗
          </Link>
        </div>
      </section>

      {/* ── Who We Work With (Black Theme) ───────────────────────────────────── */}
      <section className="bg-white text-[#111111] py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-5">/ Sektör Kategorileri</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#111111] text-balance mb-6">
              Her Sektöre Uygun<br />Performans Çözümleri.
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed font-sans max-w-2xl">
              Modadan teknolojiye, kozmetikten ev yaşamına kadar tüm sektörlerde, markanızı doğru hedef kitle ile buluşturacak geniş bir içerik üreticisi ağına sahibiz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              "Moda & Giyim", "Güzellik & Kozmetik", "Anne & Bebek",
              "Gıda & Hızlı Tüketim", "Ev & Yaşam", "Elektronik & Teknoloji",
              "Spor & Outdoor", "Sağlık & Kişisel Bakım", "E-Ticaret",
              "Perakende",
            ].map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-2 border border-[#E5E5E5] rounded-full px-5 py-2.5 text-sm font-semibold text-[#666666] hover:border-[#FE9417]/60 hover:text-[#111111] transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FE9417] to-[#FF6B00] flex-shrink-0" />
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Brand Services (White Theme) ────────────────────────────────────── */}
      <section className="bg-white text-[#111111] py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-5">/ Markalar İçin Çözümler</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#111111] text-balance">
              Markanız İçin Uçtan Uca<br />Süreç Yönetimi.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Kampanya Stratejisi", desc: "Markanızın hedeflerine özel influencer ve performans odaklı pazarlama stratejisi kurguluyoruz." },
              { title: "Creator Seçimi", desc: "10.000+ creator ağımızdan hedef kitlenize ve marka kimliğinize en uygun isimleri belirliyoruz." },
              { title: "Affiliate Kurgu", desc: "Link oluşturma, komisyon yapısı ve performans modellerini sizin için hazırlıyoruz." },
              { title: "Prodüksiyon Desteği", desc: "Sosyal medya platformlarının dinamiklerine uygun kreatif içerik ve reklam yapım süreçlerini yönetiyoruz." },
              { title: "Raporlama", desc: "Erişim, tıklama, dönüşüm ve ciro artışını anlık ve şeffaf olarak raporluyoruz." },
              { title: "Hukuki & Mali Süreç Takibi", desc: "Sözleşme, fatura, ödeme ve KVKK süreçlerinin mevzuata uygun şekilde yürütülmesini sağlıyoruz." }
            ].map((srv, i) => (
              <div key={srv.title} className="p-8 border border-black/[0.07] bg-white rounded-2xl">
                <p className="font-mono text-xs text-[#FE9417] mb-4">0{i + 1}</p>
                <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme) ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#FE9417] to-[#FF6B00] text-[#111111] py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#555555] font-bold mb-6">
            / Markanızı Büyütün
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold tracking-[-0.03em] text-[#111111] mb-6 text-balance">
            iMediaff Creator & Affiliate <br /> Ekosistemine Katılın.
          </h2>
          <p className="text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            imediaff Türkiye ile çalışarak satışlarınızı artırın, içerik üreticisi entegrasyonuyla markanızın dijital görünürlüğünü güçlendirin.
          </p>
          <Link
            href="/contact?type=brand"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-6 text-lg font-bold text-[#111111] transition-transform hover:scale-105 shadow-xl"
          >
            Marka Briefi Gönder ↗
          </Link>
        </motion.div>
      </section>


    </main>
  )
}
