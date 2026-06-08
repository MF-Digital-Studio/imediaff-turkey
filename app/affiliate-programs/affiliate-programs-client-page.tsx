"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import {
  Target,
  Zap,
  ShieldCheck,
  Tag,
  BarChart3,
  Globe,
  ArrowRight,
  Sparkles,
  Link2,
  Trophy,
  DollarSign,
  Briefcase,
  FileCheck2,
  Award,
  Users
} from "lucide-react"

// ── Fade-in variant ──
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AffiliateProgramsClientPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden">

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center pt-32 pb-20 border-b border-black/10 bg-white"
      >
        
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 w-full relative z-10">
          <div className="max-w-5xl">
            <motion.div {...fadeUp(0)}>

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
                / Performans Pazarlaması
              </p>
              <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8 text-black text-balance font-sans">
                <span className="bg-gradient-to-r from-[#FE9417] to-[#C8B2F8] bg-clip-text text-transparent font-sans">
                  Etkinizi Kazanca Dönüştürün.
                </span>
              </h1>
              <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-black/60 mb-12 font-sans text-balance">
                İçerik üreticilerini e-ticaret platformu Trendyol ile buluşturuyoruz. Uçtan uca imediaff tarafından yönetilen, şeffaf ve komisyon odaklı affiliate (satış ortaklığı) ağına katılın.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-[#111111] transition-all hover:scale-105 bg-gradient-to-br from-[#FE9417] to-[#C8B2F8] shadow-[0_4px_14px_0_rgba(255,161,1,0.25)] hover:shadow-[0_6px_20px_rgba(255,161,1,0.4)] w-full sm:w-auto font-bold"
              >
                Başvuru Yap
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PLATFORM OVERVIEW ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Partner Platformumuz
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance">
              Trendyol TrendFam <br />
              <span className="bg-gradient-to-r from-[#FE9417] to-[#C8B2F8] bg-clip-text text-transparent">
                Resmi Partner Ajansı.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Trendyol */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative p-8 md:p-12 bg-[#FE9417] border border-[#E5E5E5] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logos/trendyol-logo.png"
                      alt="trendyol"
                      className="h-6 w-auto object-contain brightness-0 invert"
                    />
                    <span className="text-[#111111] text-lg font-bold">×</span>
                    <img
                      src="/logos/imediaff-global-logo.png"
                      alt="imediaff"
                      className="h-8 w-auto object-contain rounded"
                    />
                  </div>
                  <span className="inline-flex bg-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE9417] font-bold">
                    Resmi Partner Ajans
                  </span>
                </div>
                <p className="text-[#111111] leading-relaxed font-sans mb-8">
                  TrendFam, Trendyol'un resmi komisyon bazlı içerik üreticisi programıdır. imediaff, bu profesyonel ağın ana partnerlerinden biri olarak; bireysel başvuruların onay süreçlerini hızlandırır, daha yüksek komisyon imkanları sunar ve tüm süreci profesyonel kurumsal güvence altına alır.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Türkiye", "Ekosistem", "Performans"].map((reg) => (
                    <span key={reg} className="inline-flex items-center gap-1.5 border border-[#E5E5E5] rounded-lg px-3 py-1.5 text-xs font-semibold text-[#111111]">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Info */}
            <motion.div
              {...fadeUp(0.2)}
              className="group relative p-8 md:p-12 bg-white border border-[#E5E5E5] transition-all duration-300 flex flex-col justify-between overflow-hidden text-[#111111]"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-[#FE9417]" />
                  </div>
                  <span className="inline-flex bg-[#FE9417]/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FE9417] font-bold rounded-full">
                    Genişleyen Kapsam
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight mb-4">
                  Sınırları Aşan Kazanç
                </h3>
                <p className="text-[#555555] leading-relaxed font-sans mb-8">
                  Trendyol ekosisteminde yalnızca Türkiye değil, aynı zamanda yurtdışı siparişlerden ve özel marka anlaşmalarından (Brand Offers) da komisyon kazanma şansı yakalarsınız. Doğru strateji ile kazancınızı maksimize ediyoruz.
                </p>
                <ul className="space-y-3">
                  {["Özel Marka Teklifleri", "Ekstra Kategori Komisyonları", "Kampanya Dönemi Bonusları"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-[#FE9417]" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRENDYOL / TRENDFAM PROGRAMS ── */}
      <section id="trendyol-programs" className="py-24 md:py-32 bg-[#FE9417] text-[#111111] relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#555555]">
                / Kazanç Modeli
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#111111] text-balance">
                Nasıl <br />
                Kazanacaksınız?
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#111111] font-sans">
                TrendFam programı kapsamında içerik üreticileri farklı linkleme stratejileriyle kazanç sağlar.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/logos/trendyol-logo.png"
                alt="trendyol"
                className="w-[180px] h-auto object-contain brightness-0 invert"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Card A: In-Link */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/5 backdrop-blur-sm border border-[#E5E5E5] hover:bg-white/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-[#111111] tracking-tight">
                    In-Link Komisyonu
                  </h3>
                  <Link2 className="w-6 h-6" />
                </div>
                <p className="font-mono text-[10px] text-[#555555] font-bold uppercase tracking-wider mb-6">Doğrudan Ürün Linki</p>
                <p className="text-[#111111] leading-relaxed font-sans mb-8 text-sm">
                  Paylaştığınız koleksiyondaki veya doğrudan linkteki ürünü satın alan kullanıcılardan elde ettiğiniz temel komisyon modelidir. Kategorisine göre en yüksek oranda kazanç sağlar.
                </p>

                <div className="space-y-4 border-t border-[#E5E5E5] pt-6 mb-10">
                  {[
                    "Kategoriye göre değişen yüksek oranlar",
                    "Doğrudan hedefli satın alma",
                    "Koleksiyon üzerinden toplu ürün yönlendirme"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-[#111111] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#555555] font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card B: Out-Link */}
            <motion.div
              {...fadeUp(0.2)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/5 backdrop-blur-sm border border-[#E5E5E5] hover:bg-white/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-[#111111] tracking-tight">
                    Out-Link Komisyonu
                  </h3>
                  <Globe className="w-6 h-6" />
                </div>
                <p className="font-mono text-[10px] text-[#555555] font-bold uppercase tracking-wider mb-6">Farklı Ürün Alışverişi</p>
                <p className="text-[#111111] leading-relaxed font-sans mb-8 text-sm">
                  Takipçiniz paylaştığınız linke tıklar ancak o ürün yerine Trendyol'dan başka bir ürün satın alırsa da komisyon kazanırsınız. Sadece trafiği yönlendirmeniz bile yeterlidir.
                </p>

                <div className="space-y-4 border-t border-[#E5E5E5] pt-6 mb-10">
                  {[
                    "Kullanıcının sepetindeki diğer ürünlerden kazanç",
                    "Takip penceresi süresince geçerli oranlar",
                    "Trafik kalitesine bağlı yüksek gelir potansiyeli"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Trophy className="w-4 h-4 text-[#111111] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#555555] font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card C: Brand Offers */}
            <motion.div
              {...fadeUp(0.3)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/5 backdrop-blur-sm border border-[#E5E5E5] hover:bg-white/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-[#111111] tracking-tight">
                    Marka Teklifleri
                  </h3>
                  <Award className="w-6 h-6" />
                </div>
                <p className="font-mono text-[10px] text-[#555555] font-bold uppercase tracking-wider mb-6">Brand Offers</p>
                <p className="text-[#111111] leading-relaxed font-sans mb-8 text-sm">
                  Markaların belirlediği özel komisyon oranlarıyla standart affiliate gelirinin üzerine çıkarsınız. Genişletilmiş takip penceresi sayesinde günlerce komisyon işlemeye devam eder.
                </p>

                <div className="space-y-4 border-t border-[#E5E5E5] pt-6 mb-10">
                  {[
                    "Standart komisyonun üzerinde özel oranlar",
                    "7 güne varan uzun takip süresi (Cookie Window)",
                    "Özel marka kampanyalarına erişim"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Tag className="w-4 h-4 text-[#111111] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#555555] font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/talent"
              className="group inline-flex items-center justify-center rounded-full px-8 py-4 bg-white text-[#FE9417] hover:bg-white hover:text-[#111111] transition-all hover:scale-105 shadow-xl font-bold"
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW TRENDFAM WORKS ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417]">
              / Süreç
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance">
              Başvurudan <br />
              <span className="bg-gradient-to-r from-[#FE9417] to-[#C8B2F8] bg-clip-text text-transparent">
                İlk Kazanca Doğru.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-[#666666] font-sans">
              imediaff ile uçtan uca yönetilen şeffaf ve güvenilir bir süreç.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Başvuru",
                desc: "Sistemimiz üzerinden profilinizi iletin. Uygunluk durumunuzu 1-5 iş günü içinde Trendyol kriterlerine göre değerlendirelim."
              },
              {
                step: "02",
                title: "Sözleşme",
                desc: "Tüm şartların şeffafça belirlendiği 1 yıllık resmi sözleşmemizi imzalayın. Haklarınız ve komisyon yapınız güvence altına alınsın."
              },
              {
                step: "03",
                title: "Aktivasyon",
                desc: "Influencer paneliniz aktive edilir. Link oluşturma, koleksiyon düzenleme ve marka tekliflerini inceleme yetkisi kazanırsınız."
              },
              {
                step: "04",
                title: "Paylaşım",
                desc: "Favori ürünlerinizi koleksiyonlarınıza ekleyin ve Instagram, TikTok, YouTube, X gibi mecralarda hedef kitlenizle paylaşın."
              },
              {
                step: "05",
                title: "Kazanç",
                desc: "Gerçekleşen satışlardan komisyon kazanın. Aylık hakedişleriniz şeffaf bir şekilde hesaplanır ve doğrudan banka hesabınıza yatırılır."
              }
            ].map((s, index) => (
              <motion.div
                key={s.step}
                {...fadeUp(index * 0.15)}
                className="relative flex flex-col group"
              >
                {/* Desktop Connecting Line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-black/10 group-hover:bg-[#FE9417]/50 transition-colors duration-500" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-white font-mono text-sm text-[#FE9417] transition-colors duration-500 group-hover:border-[#FE9417] mb-6 font-bold">
                  {s.step}
                </div>
                <h3 className="font-display text-xl font-bold text-[#111111] mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#888888]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: IMEDIAFF ADVANTAGE (EDITORIAL) ── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5] relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          {/* Section Header */}
          <motion.div {...fadeUp(0)} className="mb-20 md:mb-32 max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] font-bold mb-6">
              / iMEDIAFF AVANTAJI
            </p>
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111111] text-balance mb-4">
              Bir Linkten Fazlası. <br />
              <span className="text-[#FE9417]">Tam Kapsamlı Affiliate Altyapısı.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[#4B5563] font-sans leading-relaxed max-w-3xl">
              Teknik destekten stratejiye, kampanya erişiminden sözleşme ve ödeme yönetimine kadar tüm süreci profesyonel bir yapıya taşıyoruz.
            </p>
          </motion.div>

          {/* Advantage Blocks */}
          <div className="flex flex-col gap-24 md:gap-40">
            {[
              {
                num: "01",
                label: "/ AVANTAJ 01",
                title: "Teknik & Operasyonel Destek",
                desc: "Link kırılmaları, panel senkronizasyon hataları, sipariş uyuşmazlıkları ve raporlama problemlerinde süreci takip eder; platform ekipleriyle koordinasyon sağlayarak teknik konuların hızlı çözülmesine destek oluruz.",
                img: "/affiliate-programs/tech-shield.jpg",
                align: "left"
              },
              {
                num: "02",
                label: "/ AVANTAJ 02",
                title: "Strateji & Veri Danışmanlığı",
                desc: "Sadece link vermekle kalmayız. Panel analitiği, hedef kitle davranışı, link performansı, içerik formatları ve düzenli yönlendirmelerle kazanç potansiyelinizi artırmaya odaklanırız.",
                img: "/affiliate-programs/consultancy.jpg",
                align: "right"
              },
              {
                num: "03",
                label: "/ AVANTAJ 03",
                title: "Marka & Kampanya Ağı",
                desc: "Creator'ları tek bir kampanya veya platformla sınırlamayız. Sezonluk fırsatlar, özel marka iş birlikleri, kampanya görevleri ve kategori bazlı tekliflerle daha geniş bir gelir alanı oluştururuz.",
                img: "/affiliate-programs/brand-network.jpg",
                align: "left"
              },
              {
                num: "04",
                label: "/ AVANTAJ 04",
                title: "Sözleşme & Şeffaf Ödeme",
                desc: "İş birlikleri resmi sözleşme, net ödeme takvimi, komisyon takibi ve yasal süreç yönetimiyle yürütülür. Böylece haklarınız, ödeme süreçleriniz ve emeğiniz daha güvenli bir yapıya alınır.",
                img: "/affiliate-programs/legal-payouts.jpg",
                align: "right"
              }
            ].map((block) => (
              <motion.div
                key={block.num}
                {...fadeUp(0.1)}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 lg:gap-32 ${block.align === "right" ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/5">
                    <Image
                      src={block.img}
                      alt={block.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="mb-6 font-mono text-sm font-bold text-[#FE9417]">
                    {block.label}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.1] text-balance">
                    {block.title}
                  </h3>
                  <p className="text-[#4B5563] text-base md:text-lg leading-relaxed font-sans max-w-lg">
                    {block.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA ── */}
      <section className="bg-gradient-to-br from-[#FE9417] to-[#C8B2F8] text-[#111111] py-24 md:py-36 relative overflow-hidden">
        {/* Glow Orb */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <motion.div
          {...fadeUp(0)}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#555555] font-bold mb-6">
            / Ekosisteme Katılın
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold tracking-[-0.03em] text-[#111111] mb-6 text-balance">
            Kazancınızı <br /> Artırmaya Hazır Mısınız?
          </h2>
          <p className="text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Affiliate ağımıza katılmak ve profesyonel destekle gelirinizi artırmak için imediaff'e hemen başvurun.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <Link
              href="/talent"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-base font-bold text-[#111111] transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Başvuru Yap
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
