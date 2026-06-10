"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

const METRICS = [
  { title: "Operasyon Deneyimi",  value: "7+",    desc: "Yıllık Sektör Deneyimi"      },
  { title: "Kategori Uzmanlığı",  value: "10+",   desc: "Farklı Sektör Kategorisi"   },
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
        <div className="pointer-events-none absolute right-0 top-0 w-full max-w-[800px] h-[800px] bg-gradient-to-bl from-[#FB430A]/10 to-transparent blur-[120px] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A]">/ Marka İş Birlikleri</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
              Creator Gücüyle Büyüyün.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#666666] leading-relaxed font-sans">
              Trendyol resmi partnerliğiyle, markanızı doğru kitleyle buluşturuyor, performansa dayalı sonuçlar üzerinden büyüme sağlıyoruz.
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] mb-5">/ Marka Avantajları</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#111111] text-balance">
              Neden imediaff<br />İle Çalışmalısınız?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Strateji ve Eşleştirme",
                desc: "Markanızın hedeflerine özel kampanya kurgularız. Hedef kitlenize en uygun doğrulanmış içerik üreticilerini seçerek organik ve etkili bir bağ kurarız.",
              },
              {
                num: "02",
                title: "Performans ve Affiliate",
                desc: "Sadece gerçekleşen satışlar üzerinden komisyon ödeyebileceğiniz performans odaklı modeller geliştirir, ROI takibini anlık yaparız.",
              },
              {
                num: "03",
                title: "Tam Kapsamlı Operasyon",
                desc: "İçerik üretimi, prodüksiyon, raporlama, ödeme takibi, KVKK ve sözleşme süreçleri dahil tüm operasyonel yükü üstleniyoruz.",
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
                <div className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl bg-gradient-to-r from-[#FB430A] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#FB430A] mb-6">{card.num}</p>
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
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-br from-[#FB430A]/5 to-[#FF6B00]/5 blur-3xl" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-12 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A]">/ Ekosistemdeki Markalar</p>
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
              <div key={`${brand}-${i}`} className="group cursor-default whitespace-nowrap" aria-hidden={i >= ALL_BRANDS.length ? "true" : undefined}>
                <span className="font-display text-3xl md:text-5xl font-bold tracking-tight lowercase text-black/20 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FB430A] group-hover:to-[#FB430A]">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Brand Offers Program (Premium Container Theme) ──────────────────────────────── */}
      <section className="bg-white text-[#111111] py-20 md:py-32 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] bg-[#FAFAFA] border border-[#E5E5E5] p-8 md:p-14 lg:p-20 relative overflow-hidden"
          >
            {/* Subtle glow inside container */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FB430A]/5 to-transparent blur-[80px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
              {/* Left Column: Title & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] mb-6 font-bold">
                  / MARKA TEKLİFLERİ
                </p>
                <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-[#111111] mb-6 text-balance">
                  Brand Offers ile Satışa Dönüşen İş Birlikleri
                </h2>
                <p className="text-lg text-[#555555] leading-relaxed font-sans mb-12">
                  Ürünlerinizi creator panelinde görünür hale getirin; özel komisyon kurgularıyla satışa dönüşen iş birlikleri oluşturun.
                </p>
                
                <div className="flex flex-col items-start gap-4">
                  <Link
                    href="/contact?type=brand"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FB430A] to-[#FF6B00] px-10 py-5 text-base font-bold text-[#111111] transition-transform hover:scale-105 shadow-lg shadow-[#FB430A]/20"
                  >
                    Brief Gönder
                  </Link>
                  <p className="text-[13px] text-[#888888] font-medium font-sans">
                    Komisyon, ürün seçimi ve kampanya kurgusunu birlikte netleştirelim.
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Cards */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {[
                  {
                    num: "01",
                    title: "Özel Komisyon",
                    desc: "Ürün bazlı özel komisyon oranlarıyla creator’ların markanızı önceliklendirmesini sağlayın."
                  },
                  {
                    num: "02",
                    title: "Geniş Takip Penceresi",
                    desc: "Organik paylaşımlardan gelen etkileşimleri daha uzun süre satış fırsatına dönüştürün."
                  },
                  {
                    num: "03",
                    title: "Creator Görünürlüğü",
                    desc: "Markanız, içerik üreticilerinin panelinde keşfedilebilir hale gelir."
                  }
                ].map((card, i) => (
                  <motion.div
                    key={card.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] hover:border-[#FB430A]/50 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      <div className="font-mono text-sm uppercase tracking-widest text-[#FB430A] font-bold shrink-0 pt-1">
                        {card.num}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#111111] mb-2">{card.title}</h3>
                        <p className="text-[#666666] leading-relaxed text-sm">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#E5E5E5] my-16 relative z-10" />

            {/* Timeline: Nasıl Çalışır? */}
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold text-[#111111] mb-10 md:mb-14">Nasıl Çalışır?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[1.125rem] left-[2.25rem] right-[calc(33.333%+2.25rem)] h-px bg-[#E5E5E5]" />
                
                {[
                  {
                    step: "01",
                    title: "Teklifi Kurgulayın",
                    desc: "Ürün, hedef kitle ve komisyon oranı netleşir.",
                  },
                  {
                    step: "02",
                    title: "Creator’lar Keşfetsin",
                    desc: "Uygun içerik üreticileri kampanyayı panelden görüntüler.",
                  },
                  {
                    step: "03",
                    title: "Satışları Takip Edin",
                    desc: "Tıklama, dönüşüm ve satış performansı düzenli takip edilir.",
                  },
                ].map((s, i) => (
                  <div key={s.step} className="relative flex flex-col group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E5] bg-white font-mono text-[11px] font-bold text-[#FB430A] group-hover:border-[#FB430A] transition-colors">
                        {s.step}
                      </div>
                      <h4 className="font-display text-lg font-bold text-[#111111]">{s.title}</h4>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed md:pl-[3.25rem]">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] mb-5">/ Sektör Kategorileri</p>
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
                className="inline-flex items-center gap-2 border border-[#E5E5E5] rounded-full px-5 py-2.5 text-sm font-semibold text-[#666666] hover:border-[#FB430A]/60 hover:text-[#111111] transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FB430A] to-[#FF6B00] flex-shrink-0" />
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ── Final CTA (Sunset Gradient Theme) ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#FB430A] to-[#FF6B00] text-white py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Markanızı Büyütün
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold tracking-[-0.03em] text-white mb-6 text-balance">
            iMediaff Creator & Affiliate <br /> Ekosistemine Katılın.
          </h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            imediaff ile çalışarak satışlarınızı artırın, içerik üreticisi entegrasyonuyla markanızın dijital görünürlüğünü güçlendirin.
          </p>
          <Link
            href="/contact?type=brand"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-6 text-lg font-bold text-[#FB430A] transition-transform hover:scale-105 shadow-xl"
          >
            Brief Gönder
          </Link>
        </motion.div>
      </section>


    </main>
  )
}
