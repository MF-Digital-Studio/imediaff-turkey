"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Users, ShoppingBag, TrendingUp, CheckCircle2, Star, Target, Shield, CreditCard, Clock, Check, BarChart3, Link as LinkIcon, FileText, PhoneCall, Handshake, AlertCircle, Award } from "lucide-react"

export default function TalentClientPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-border bg-white border-b border-[#E5E5E5]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FB430A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FB430A]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] mb-6">
            / İÇERİK ÜRETİCİLERİ
          </p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-5xl text-[#111111]">
            <span className="bg-gradient-to-r from-[#FB430A] to-[#FF6B00] bg-clip-text text-transparent">Creator Ağına Katılın.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#555555] leading-relaxed">
            Affiliate marketing'i hobi olmaktan çıkarıp profesyonel bir gelir modeline dönüştürüyoruz. Trendyol affiliate sistemini hobi olmaktan çıkarıp profesyonel bir gelir modeline dönüştürmek isteyen içerik üreticileri için uçtan uca destek sunuyoruz.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact?type=creator"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#FB430A] to-[#FF6B00] px-8 text-base font-bold text-[#111111] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(254,148,23,0.3)]"
            >
              Başvuru Yap
            </Link>
            <a 
              href="#nasil-isler"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-8 text-base font-bold text-[#111111] transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              Süreç Nasıl İşler?
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. ABOUT iMEDIAFF */}
      <section className="py-24 border-border bg-[#FB430A] border-b border-white/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">iMediaff Ne Yapar?</h2>
              <p className="text-xl text-white/90 font-medium mb-8">Markalar, içerik üreticileri ve dijital ticaret platformları arasında profesyonel iş birlikleri kurarız.</p>
              <ul className="space-y-4">
                {[
                  "Influencer ve marka iş birliklerini yönetir.",
                  "Affiliate marketing çözümleri sunar.",
                  "Hukuki ve mali danışmanlık altyapısı sağlar.",
                  "Prodüksiyon ve reklam içerikleri geliştirir.",
                  "Güven temelli iş ilişkisi modeliyle çalışır."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/80 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 shadow-xl p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
               <QuoteIcon className="w-12 h-12 text-white/30 mb-6" />
               <p className="text-2xl font-medium text-white leading-relaxed relative z-10 italic">
                 "Trendyol affiliate sistemine bireysel olarak katılabilirsiniz; imediaff ise bu süreci profesyonel, sürdürülebilir ve yönetilebilir bir gelir modeline dönüştürür."
               </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. BAŞVURU ŞARTLARI */}
      <section className="py-24 border-border bg-white border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Başvuru Şartları</h2>
            <p className="text-xl text-[#555555]">Programa dahil olabilmek için gerekli temel kriterler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "30.000+ Takipçi", desc: "Birincil sosyal medya hesabınızda minimum 30.000 takipçi." },
              { num: "02", title: "Organik Etkileşim", desc: "Gerçek, organik ve etkileşim alan bir takipçi kitlesi." },
              { num: "03", title: "Fatura Kesebilme", desc: "Fatura kesebilme veya geçerli ajans/şirket bağlantısı." },
              { num: "04", title: "Uygun İçerik", desc: "Hesap türü ve içerik kategorisinin programa uygun olması." },
              { num: "05", title: "18 Yaş Üzeri", desc: "Geçerli yasal bilgilerle 18 yaşını doldurmuş olmak." },
              { num: "06", title: "Resmi Form", desc: "Başvuru formunun eksiksiz ve doğru şekilde doldurulması." },
              { num: "07", title: "Sözleşme Onayı", desc: "Başvuru sonrası sözleşme ve panel onay sürecinin tamamlanması." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f9fafb] border border-[#e5e7eb] p-8 rounded-2xl hover:border-[#FB430A]/40 transition-colors">
                <span className="text-[#FB430A] font-mono font-bold text-lg mb-4 block">{item.num}</span>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. NEDEN TRENDYOL? */}
      <section className="py-24 border-border bg-[#FE9417] border-b border-white/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Neden Trendyol?</h2>
            <p className="text-xl text-white/90">Geniş ürün çeşitliliği, yüksek dönüşüm potansiyeli ve gelişmiş takip paneliyle creator'lar için güçlü bir affiliate alanı sunar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Milyonlarca Ürün", desc: "Elektronikten kozmetiğe, modadan market ürünlerine kadar birçok kategoride ürün paylaşabilirsiniz.", icon: ShoppingBag },
              { num: "02", title: "Yüksek Dönüşüm", desc: "Güçlü marka bilinirliği ve alışveriş alışkanlığı sayesinde takipçilerinizin satın alma ihtimali yüksektir.", icon: TrendingUp },
              { num: "03", title: "Gelişmiş Panel", desc: "Tıklama, satış ve biriken komisyonlarınızı influencer paneli üzerinden takip edebilirsiniz.", icon: BarChart3 }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group bg-white/10 border border-white/20 shadow-sm p-8 rounded-3xl hover:border-white/40 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-white/30 font-mono font-bold text-2xl">{item.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* 5. KOMİSYON SEVİYELERİ */}
      <section className="py-24 border-border bg-white border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Komisyon Seviyeniz</h2>
            <p className="text-xl text-[#555555]">İçerik üreticileri performanslarına göre farklı segmentlerde değerlendirilir. Komisyon oranları segmente göre değişebilir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Platinum", desc: "En yüksek performans segmenti. En güçlü komisyon oranları.", color: "from-gray-700 to-gray-900" },
              { title: "Gold", desc: "Yüksek satış hacmi ve güçlü performans.", color: "from-yellow-400 to-yellow-600" },
              { title: "Silver", desc: "Düzenli ve istikrarlı satış performansı.", color: "from-gray-300 to-gray-500" },
              { title: "Starter", desc: "Yeni başlayan içerik üreticileri için giriş segmenti.", color: "from-[#FB430A] to-[#FF6B00]" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-[1px] rounded-2xl bg-gradient-to-br overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative h-full bg-white p-8 rounded-[15px] z-10 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#FB430A]" />
                Starter Segmenti Başlangıcı
              </h4>
              <p className="text-[#555555] text-sm">İlk ay için başlangıç oranları uygulanabilir. Sonraki dönemde segmentiniz gelir ve ziyaretçi performansınıza göre güncellenir.</p>
            </div>
            <div className="flex-1 w-full border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#555555]">İlk ay In-Link</span>
                <span className="font-bold text-[#111111]">%10*</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#555555]">Elektronik Kategorisi</span>
                <span className="font-bold text-[#111111]">%2*</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#555555]">Segment Geçişi</span>
                <span className="font-bold text-[#111111]">İlk aydan sonra (Performansa bağlı)</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">* Segmentlere özel oranlar Influencer Paneli üzerinden kişisel olarak paylaşılır ve kampanya dönemlerine göre uygulanabilir.</p>
        </motion.div>
      </section>

      {/* 6. IN-LINK VE OUT-LINK SATIŞLAR */}
      <section id="nasil-isler" className="py-24 border-border bg-[#FB430A] border-b border-white/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">In-Link ve Out-Link Satışlar</h2>
            <p className="text-xl text-white/90">Komisyon hesaplamasında bağlantının türü ve satın alınan ürün önemlidir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 border border-white/20 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Doğrudan Satış</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">In-Link</h3>
              <p className="text-white/80 leading-relaxed text-lg">Takipçiniz paylaştığınız ürün linkinden aynı ürünü satın aldığında, segmentinize göre belirlenen komisyon oranı uygulanır.</p>
            </div>
            
            <div className="bg-white/10 border border-white/20 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Çapraz Satış</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Out-Link</h3>
              <p className="text-white/80 leading-relaxed text-lg">Takipçiniz linkinize tıklayıp farklı bir ürün satın aldığında, komisyon oranı segment ve kategoriye göre değişebilir.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/20">
              <Clock className="w-8 h-8 text-white" />
              <div>
                <p className="text-sm text-white/60">Çerez Süresi</p>
                <p className="font-bold text-lg text-white">24 Saat</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/20">
              <Target className="w-8 h-8 text-white" />
              <div>
                <p className="text-sm text-white/60">Günlük Kazanç Limiti</p>
                <p className="font-bold text-lg text-white">₺150.000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/20">
              <CreditCard className="w-8 h-8 text-white" />
              <div>
                <p className="text-sm text-white/60">Minimum Aylık Ödeme</p>
                <p className="font-bold text-lg text-white">₺1.000 <span className="text-xs font-normal text-white/50">(Altı sonraki aya devreder)</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. KAZANÇ NASIL HESAPLANIR? */}
      <section className="py-24 border-border bg-white border-b border-[#e5e7eb] relative overflow-hidden text-[#111111]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#FB430A]/5 blur-[120px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Kazancınız Nasıl Hesaplanır?</h2>
              <p className="text-xl text-[#555555] mb-8">Net geliriniz, toplam komisyon üzerinden hizmet bedeli ve yasal kesintiler düşüldükten sonra hesaplanır.</p>
              <p className="text-[#555555] leading-relaxed p-6 bg-[#fafafa] border border-[#e5e7eb] rounded-2xl">
                Ön ödeme veya üyelik ücreti yoktur. Hizmet bedeli yalnızca kazanç elde edildiğinde uygulanır. Satış yapılmadığında herhangi bir ödeme yükümlülüğü oluşmaz.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white border border-[#e5e7eb] text-[#111111] p-8 md:p-10 rounded-3xl shadow-xl">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-800 mb-6 border border-gray-200">
                  Örnek Senaryo: Bir ayda ₺10.000 toplam komisyon
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Toplam Komisyon</span>
                    <span className="font-bold">₺10.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500">Ajans Hizmet Bedeli (%15)</span>
                    <span className="text-red-500">-₺1.500</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500">Yasal Stopaj / Kesinti (%15)</span>
                    <span className="text-red-500">-₺1.500</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#FB430A] to-[#FF6B00] p-6 rounded-2xl flex justify-between items-center text-white">
                  <span className="text-lg font-bold">Size Ödenecek Net Tutar</span>
                  <span className="text-3xl font-black">₺7.000</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. LİNKLERİ ETKİLİ PAYLAŞMA */}
      <section className="py-24 border-border bg-[#FB430A] border-b border-white/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Linkleri Etkili Paylaşma</h2>
            <p className="text-xl text-white/90">Başarılı affiliate içerikleri yalnızca link paylaşmaz; ürünün etrafında güven veren bir hikâye kurar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Tek Ürün Linki", desc: "Bizzat kullandığınız veya güçlü şekilde önerdiğiniz ürünler için idealdir.", icon: LinkIcon },
              { num: "02", title: "Koleksiyon Linki", desc: "'Mutfak Favorilerim', 'Kış Kombinleri', 'Bebek İhtiyaçları' gibi temalı listeler oluşturabilirsiniz.", icon: Star },
              { num: "03", title: "Mağaza Linki", desc: "Marka indirim dönemlerinde mağaza linki paylaşarak farklı ürünlerden komisyon kazanabilirsiniz.", icon: ShoppingBag }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group bg-white/10 border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all shadow-sm">
                  <div className="mb-6 h-14 w-14 rounded-2xl bg-white/20 border border-white/10 shadow-sm flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/40 font-mono text-sm font-bold">{item.num}</span>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* 9. PARTNERLİK SÖZLEŞMESİ & 10. TEMEL KURALLAR */}
      <section className="py-24 border-border bg-[#fafafa] border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* PARTNERLİK SÖZLEŞMESİ */}
            <div>
              <div className="mb-10">
                <FileText className="w-12 h-12 text-[#111111] mb-6" />
                <h2 className="font-display text-4xl font-bold tracking-tight mb-4 text-[#0a0a0a]">Partnerlik Sözleşmeniz</h2>
                <p className="text-lg text-[#555555]">1 yıllık sözleşme haklarınızı korur; kişisel marka iş birliklerinizi kısıtlamaz.</p>
              </div>
              <ul className="space-y-4 mb-8 bg-white border border-[#e5e7eb] p-8 rounded-3xl">
                {[
                  "Sözleşme yalnızca Trendyol affiliate çalışmasını kapsar.",
                  "Kişisel marka anlaşmalarınız ve diğer projeleriniz kapsam dışındadır.",
                  "Süre: imza tarihinden itibaren 1 yıl.",
                  "Ajans hizmet bedeli: toplam kazanılan komisyonun %15'i.",
                  "Yasal stopaj/kesinti: %15.",
                  "Net ödeme, kesintiler sonrası IBAN'a gönderilir.",
                  "Kazanç yoksa kesinti yoktur."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#374151]">
                    <Check className="w-5 h-5 text-[#FB430A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500">* Genel bilgilendirme amaçlıdır. Süreç detayları ve resmi koşullar başvuru sonrasında paylaşılır.</p>
            </div>

            {/* TEMEL KURALLAR */}
            <div>
               <div className="mb-10">
                <Shield className="w-12 h-12 text-[#111111] mb-6" />
                <h2 className="font-display text-4xl font-bold tracking-tight mb-4 text-[#0a0a0a]">Temel Kurallar</h2>
                <p className="text-lg text-[#555555]">Sürecin sağlıklı işlemesi için dikkat edilmesi gereken üç ana kural.</p>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Ajans Bağlılığı", desc: "Sözleşme aktifken başka bir affiliate ajansına geçiş veya sistem değişikliği yapılmadan önce imediaff bilgilendirilmelidir." },
                  { title: "Etik İçerik", desc: "Siyasi propaganda, ırkçılık, nefret söylemi veya karalayıcı içerikler paylaşılmamalıdır." },
                  { title: "Marka İtibarı", desc: "Trendyol veya imediaff'in ticari itibarına zarar verebilecek yanlış ya da yanıltıcı içerikler yayınlanmamalıdır." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#e5e7eb] p-6 rounded-2xl flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111111] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 11. iMEDIAFF DESTEK SİSTEMİ & 12. KVKK */}
      <section className="py-24 border-border bg-[#FB430A] border-b border-white/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <h2 className="font-display text-4xl font-bold tracking-tight mb-4 text-white">iMediaff Destek Sistemi</h2>
              <p className="text-xl text-white/90 mb-10">Sadece sisteme dahil etmekle kalmaz, performansınızı artırmanız için düzenli destek sunarız.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                  { title: "Birebir Danışmanlık", desc: "Linklerin neden tıklanmadığı, hangi ürünlerin kitlenize daha uygun olduğu ve içerik stratejiniz analiz edilir.", icon: Users },
                  { title: "Günlük WhatsApp Kanalı", desc: "Günlük kampanyalar, duyurular ve eğitim içerikleri paylaşılır.", icon: PhoneCall },
                  { title: "PR İş Birlikleri", desc: "Kozmetik, teknoloji, moda ve benzeri kategorilerde kurumsal markalarla iş birlikleri geliştirilebilir.", icon: Award },
                  { title: "Hukuki ve Mali Danışmanlık", desc: "Daha güvenli ve uyumlu bir operasyon için gerekli altyapı sağlanır.", icon: Handshake }
                 ].map((item, idx) => {
                   const Icon = item.icon
                   return (
                     <div key={idx} className="flex gap-4">
                       <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                         <Icon className="w-6 h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                         <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                       </div>
                     </div>
                   )
                 })}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 p-8 rounded-3xl h-fit">
              <Shield className="w-8 h-8 text-white mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Verileriniz Güvende</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                iMediaff ile paylaştığınız kişisel, iletişim ve kazanç bilgileriniz KVKK kapsamında korunur. Bilgileriniz yalnızca yasal raporlama, vergi süreçleri ve Trendyol raporlaması gibi gerekli operasyonel süreçler için kullanılır; üçüncü kişilerle paylaşılmaz.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-white border-b border-[#E5E5E5]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FB430A]/10 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10% 0px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-4xl px-6 md:px-10 text-center relative z-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#111111]">Kazanmaya Başlamaya Hazır mısınız?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Başvurunuzu gönderin, uygunluk süreci tamamlandıktan sonra creator ağına katılma adımlarını birlikte ilerletelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?type=creator"
              className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#FB430A] to-[#FF6B00] px-10 text-lg font-bold text-[#111111] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(254,148,23,0.4)]"
            >
              Başvuru Yap
            </Link>
            <Link 
              href="/contact"
              className="inline-flex h-16 items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-10 text-lg font-bold text-[#111111] transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              Bizimle İletişime Geç
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}
