"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Globe, Users, ShoppingBag, TrendingUp, CheckCircle2 } from "lucide-react"

export default function TalentClientPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-border bg-white border-b border-[#E5E5E5]">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FE9417]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FE9417]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-6">
            / İçerik Üreticileri
          </p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-5xl text-[#111111]">
            imediaff <br />
            <span className="bg-gradient-to-r from-[#FE9417] to-[#FF6B00] bg-clip-text text-transparent">Creator Ağına Katılın.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#555555] leading-relaxed">
            Trendyol, Çiçeksepeti, Hepsiburada ve Amazon partnerlikleriyle büyüyen 10.000+ içerik üreticisi ağıyla, markalar ve creator'lar arasında sürdürülebilir iş birlikleri kuruyoruz.
          </p>
        </motion.div>
      </section>

      {/* 2. PROGRAM DETAILS SECTION */}
      <section className="py-24 border-border bg-[#ffffff] border-t border-[#e5e7eb] border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Neden imediaff?</h2>
            <p className="text-xl text-[#374151] font-medium mb-4">Bireysel başvuruların ötesine geçin. Profesyonel ajans güvencesiyle daha yüksek komisyonlar kazanın.</p>
            <p className="text-base text-[#555555] leading-relaxed">İçerik üreticileri için yalnızca kampanya yönlendirmesi yapmıyoruz; marka teklifleri, ürün/hizmet iş birlikleri, etkileşim analizleri, içerik kurgusu, prodüksiyon desteği ve süreç yönetimiyle profesyonel bir partnerlik sunuyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#FE9417]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE9417]/5 blur-2xl rounded-full group-hover:bg-[#FE9417]/10 transition-colors" />
              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#FE9417]/10 flex items-center justify-center text-[#FE9417]">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#111827] group-hover:text-[#FE9417] transition-colors">Yüksek Komisyon</h3>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                Trendyol TrendFam özel marka teklifleri (Brand Offers) sayesinde standart link komisyonlarının ötesinde kazanç sağlayın. In-link, out-link ve geniş takip penceresi avantajlarından faydalanın.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#FE9417]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE9417]/5 blur-2xl rounded-full group-hover:bg-[#FE9417]/10 transition-colors" />
              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#FE9417]/10 flex items-center justify-center text-[#FE9417]">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#111827] group-hover:text-[#FE9417] transition-colors">Stratejik Danışmanlık</h3>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                Link stratejisi, kitle analizi ve kampanya optimizasyonu konusunda 1-on-1 destek alarak içeriğinizin etkileşimini doğrudan gelire dönüştürün.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#FE9417]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE9417]/5 blur-2xl rounded-full group-hover:bg-[#FE9417]/10 transition-colors" />
              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#FE9417]/10 flex items-center justify-center text-[#FE9417]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#111827] group-hover:text-[#FE9417] transition-colors">Marka İş Birlikleri</h3>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                Affiliate gelirlerinize ek olarak, markaların influencer marketing kampanyalarında öncelikli değerlendirilme şansı yakalayın.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. CRITERIA SECTION */}
      <section className="py-24 border-border bg-[#ffffff] border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8 text-[#0a0a0a]">Başvuru Kriterleri</h2>
              <p className="text-lg text-[#555555] mb-10 leading-relaxed">
                Trendyol TrendFam ekosisteminde güçlü bir affiliate performans ağı oluşturmak için aşağıdaki temel kriterleri sağlayan içerik üreticileriyle çalışıyoruz.
              </p>
              <ul className="space-y-5">
                {[
                  "Instagram'da en az 10.000 takipçi sayısı",
                  "Yüksek etkileşim oranı ve aktif hikaye izlenmeleri",
                  "Hedef kitleyle güçlü ve organik iletişim",
                  "Düzenli ve kaliteli içerik üretimi"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[#374151] font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#FE9417]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <h3 className="font-display text-2xl font-bold mb-6 text-[#111111]">Başvuru Adımları</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE9417] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-[#111111] mb-2 text-lg">Formu Doldurun</h4>
                    <p className="text-[#555555]">Başvuru formumuzu eksiksiz doldurarak sosyal medya istatistiklerinizi iletin.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE9417] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-[#111111] mb-2 text-lg">Değerlendirme</h4>
                    <p className="text-[#555555]">Profiliniz 1-5 iş günü içerisinde uzman ekibimiz tarafından incelenir.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE9417] text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-[#111111] mb-2 text-lg">Onay ve Başlangıç</h4>
                    <p className="text-[#555555]">Sözleşme sürecinin ardından Trendyol influencer paneliniz aktive edilir ve hemen link paylaşmaya başlarsınız.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-white border-b border-[#E5E5E5]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FE9417]/10 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-4xl px-6 md:px-10 text-center relative z-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#111111]">Ekosisteme Katılın.</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Affiliate ağımıza katılarak içeriklerinizi sürdürülebilir bir iş modeline dönüştürün.
          </p>
          <Link 
            href="/contact?type=creator"
            className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#FE9417] to-[#FF6B00] px-10 text-lg font-bold text-[#111111] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(254,148,23,0.4)]"
          >
            İçerik Üreticisi Başvurusu Yap ↗
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
