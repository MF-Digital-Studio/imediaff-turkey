"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { useSearchParams } from "next/navigation"

// ── Fade-in variant ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const OFFICES = [
  {
    name: "Merkez Ofis (İstanbul)",
    address: "Fikirtepe Mah. Hızırbey Cad. No:25/C Fortis Sinanlı Yeni Kadıköy G Blok (Giriş D Blok) K:1 D:06, 34720 Kadıköy/İstanbul",
  },
  {
    name: "Bilişim Vadisi / Vadistanbul Ofisi",
    address: "Ayazağa, Vadistanbul Park Etabı Bilişim Vadisi, D:7A Blok Kat 10 No:38, 34396 Sarıyer/İstanbul",
  }
]

const FAQS = [
  {
    q: "Brief'leri almadan önce Gizlilik Sözleşmesi (NDA) imzalıyor musunuz?",
    a: "Kesinlikle. Sıkı gizlilik protokolleri altında çalışıyoruz. Tüm kampanya detayları ve fikri mülkiyetler paylaşımdan önce yasal olarak bağlayıcı olan NDA sözleşmeleri ile güvence altına alınır.",
  },
  {
    q: "Tipik bir proje süreci ne kadar sürer?",
    a: "Strateji ve içerik üreticisi seçimi genellikle kampanya büyüklüğüne göre 1-2 hafta sürer. Performans odaklı kampanyaların yayına alınması çok daha hızlıdır.",
  },
  {
    q: "Minimum kampanya bütçeniz var mı?",
    a: "İş birliklerimiz, markaların büyüme hedeflerine göre özel olarak tasarlanır. Yüksek ROI ve performans odaklı çalıştığımız için, stratejik yatırımlar üzerinden ilerlemeyi tercih ediyoruz.",
  },
]

export default function ContactClientPage() {
  const searchParams = useSearchParams()
  const [formType, setFormType] = useState<"brand" | "creator">("brand")
  
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    serviceInterest: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    country: "Türkiye",
    message: "",
    botfield: "", // Honeypot spam prevention
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Listen to search params for preselection
  useEffect(() => {
    const typeParam = searchParams.get("type")
    if (typeParam === "brand" || typeParam === "creator") {
      setFormType(typeParam)
    }
  }, [searchParams])

  const handleFormTypeChange = (type: "brand" | "creator") => {
    setFormType(type)
    setSubmitSuccess(null)
    setSubmitError(null)
    // Update URL query parameters seamlessly
    const newUrl = `${window.location.pathname}?type=${type}`
    window.history.replaceState(null, "", newUrl)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setSubmitError(null)

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email.trim() || !emailRegex.test(formState.email)) {
      setSubmitError("Lütfen geçerli bir e-posta adresi girin.")
      setIsSubmitting(false)
      return
    }

    if (formType === "brand") {
      if (!formState.name.trim()) {
        setSubmitError("Lütfen adınızı girin.")
        setIsSubmitting(false)
        return
      }
      if (!formState.companyName.trim() || !formState.website.trim() || !formState.serviceInterest || !formState.message.trim()) {
        setSubmitError("Lütfen zorunlu tüm alanları doldurun.")
        setIsSubmitting(false)
        return
      }
    } else if (formType === "creator") {
      if (!formState.name.trim() || !formState.surname.trim()) {
        setSubmitError("Lütfen adınızı ve soyadınızı girin.")
        setIsSubmitting(false)
        return
      }
      if (!formState.phone.trim()) {
        setSubmitError("Lütfen telefon numaranızı girin.")
        setIsSubmitting(false)
        return
      }
    }

    // Construct request body based on form type
    const payload = {
      formType,
      submittedAt: new Date().toISOString(),
      botfield: formState.botfield,
      ...(formType === "brand" ? {
        name: formState.name,
        email: formState.email,
        companyName: formState.companyName,
        website: formState.website,
        region: "TR",
        serviceInterest: formState.serviceInterest,
        message: formState.message,
      } : {
        name: formState.name,
        surname: formState.surname,
        email: formState.email,
        phone: formState.phone,
        country: formState.country,
        instagram: formState.instagram,
        tiktok: formState.tiktok,
        youtube: formState.youtube,
        message: formState.message,
      })
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.")
      }

      setSubmitSuccess("Başvurunuz başarıyla alındı! Ekibimiz en kısa sürede sizinle iletişime geçecektir.")
      // Reset state
      setFormState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        serviceInterest: "",
        instagram: "",
        tiktok: "",
        youtube: "",
        country: "Türkiye",
        message: "",
        botfield: "",
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message)
      } else {
        setSubmitError("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "bg-transparent border-b border-[#E5E5E5] px-2 py-4 text-[#111111] font-sans text-lg focus:outline-none focus:border-[#FB430A] transition-colors w-full"
  const selectClass = "bg-white/50 border-b border-[#E5E5E5] px-2 py-4 text-[#111111] font-sans text-lg focus:outline-none focus:border-[#FB430A] transition-colors appearance-none cursor-pointer w-full"
  const labelClass = "font-mono text-xs uppercase tracking-widest text-[#666666] ml-2"

  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* ── SECTION 1: HERO & BRIEF INTAKE (Black) ───────────────────────── */}
      <section className="bg-white text-[#111111] pt-32 pb-24 md:pt-48 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FB430A]/8 to-transparent blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <motion.div {...fadeUp()} className="flex flex-col xl:sticky xl:top-32">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] mb-6">/ İletişime Geçin</p>
              <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.04em] mb-8">
                Hemen <br /> Başvurun.
              </h1>
              <p className="max-w-md text-lg text-[#666666] leading-relaxed font-sans mb-16">
                Markanızı büyütmek veya içerik üreticisi olarak kazanmaya başlamak için bize ulaşın. Stratejik ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-2">E-Posta</p>
                  <a href="mailto:info@imediaff.com" className="font-display text-2xl md:text-3xl font-bold tracking-tight hover:text-[#FB430A] transition-colors">
                    info@imediaff.com
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-2">Türkiye Operasyon</p>
                    <p className="font-mono text-lg text-[#555555]">+90 216 606 53 59</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://wa.me/902166065359" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-[#E5E5E5] bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-[#FB430A] transition-colors"
                  >
                    WhatsApp Üzerinden İletişim
                    <span className="block h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeUp(0.15)} className="w-full max-w-2xl mx-auto xl:ml-auto" id="native-contact-form">
              <div className="bg-white border border-[#E5E5E5] rounded-[2rem] p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
                {/* Subtle gradient accent on top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-br from-[#FB430A] to-[#FF6B00]" />
                
                {/* Dynamic Selector Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { id: "brand", label: "Marka Başvurusu", desc: "Markalar ve Ajanslar İçin" },
                    { id: "creator", label: "Creator Başvurusu", desc: "İçerik Üreticileri İçin" }
                  ].map((type) => {
                    const isSelected = formType === type.id
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleFormTypeChange(type.id as any)}
                        className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-white border-[#FB430A] shadow-[0_0_15px_rgba(254,148,23,0.15)]"
                            : "bg-[#FAFAFA] border-[#E5E5E5] hover:bg-white hover:border-[#E5E5E5]"
                        }`}
                      >
                        <span className={`font-mono text-xs uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? "text-[#FB430A]" : "text-[#666666]"
                        }`}>
                          {type.label}
                        </span>
                        <span className="text-[10px] text-[#888888] font-sans leading-tight">
                          {type.desc}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* ── SHARED FIELDS: Name & Email ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {formType === "creator" ? (
                      <>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name-input" className={labelClass}>Ad</label>
                          <input 
                            id="name-input"
                            type="text" 
                            required
                            className={inputClass}
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="surname-input" className={labelClass}>Soyad</label>
                          <input 
                            id="surname-input"
                            type="text" 
                            required
                            className={inputClass}
                            value={formState.surname}
                            onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label htmlFor="name-input" className={labelClass}>Ad Soyad</label>
                        <input 
                          id="name-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="email-input" className={labelClass}>
                        {formType === "brand" ? "Kurumsal E-posta Adresi" : "E-posta Adresi"}
                      </label>
                      <input 
                        id="email-input"
                        type="email" 
                        required
                        className={inputClass}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* ── FOR BRANDS: Company & Website ── */}
                  {formType === "brand" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company-input" className={labelClass}>Marka / Şirket Adı</label>
                        <input 
                          id="company-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.companyName}
                          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="website-input" className={labelClass}>Web Sitesi</label>
                        <input 
                          id="website-input"
                          type="text" 
                          required
                          className={inputClass}
                          value={formState.website}
                          onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── FOR CREATORS: Phone ── */}
                  {formType === "creator" && (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone-input" className={labelClass}>Telefon / WhatsApp</label>
                      <input 
                        id="phone-input"
                        type="tel" 
                        required
                        className={inputClass}
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  )}

                  {/* ── FOR CREATORS: Instagram, TikTok, YouTube Links ── */}
                  {formType === "creator" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="instagram-input" className={labelClass}>Instagram <span className="text-[#FB430A] text-[10px]">(Opsiyonel)</span></label>
                        <input 
                          id="instagram-input"
                          type="text" 
                          placeholder="@kullaniciadi"
                          className={`${inputClass} placeholder:text-[#888888]`}
                          value={formState.instagram}
                          onChange={(e) => setFormState({ ...formState, instagram: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="tiktok-input" className={labelClass}>TikTok <span className="text-[#FB430A] text-[10px]">(Opsiyonel)</span></label>
                        <input 
                          id="tiktok-input"
                          type="text" 
                          placeholder="@kullaniciadi"
                          className={`${inputClass} placeholder:text-[#888888]`}
                          value={formState.tiktok}
                          onChange={(e) => setFormState({ ...formState, tiktok: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="youtube-input" className={labelClass}>YouTube <span className="text-[#FB430A] text-[10px]">(Opsiyonel)</span></label>
                        <input 
                          id="youtube-input"
                          type="text" 
                          placeholder="Kanal Linki"
                          className={`${inputClass} placeholder:text-[#888888]`}
                          value={formState.youtube}
                          onChange={(e) => setFormState({ ...formState, youtube: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── BRAND INQUIRY SPECIFIC: Service Interest ── */}
                  {formType === "brand" && (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service-interest-input" className={labelClass}>İlgilendiğiniz Hizmet</label>
                      <select 
                        id="service-interest-input"
                        className={selectClass}
                        value={formState.serviceInterest}
                        onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                        required
                      >
                        <option value="" disabled>Hizmet Seçiniz</option>
                        <option value="Influencer Marketing">Influencer Marketing</option>
                        <option value="Performance Marketing">Performans Pazarlaması (Affiliate)</option>
                        <option value="Talent Management">Yetenek Yönetimi</option>
                        <option value="General Inquiry">Genel İletişim</option>
                      </select>
                    </div>
                  )}

                  {/* ── SHARED FIELD: Message / Details ── */}
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="message-input" className={labelClass}>
                      {formType === "brand" 
                        ? "Mesajınız / Kampanya Detayları" 
                        : "Eklemek İstedikleriniz (Opsiyonel)"
                      }
                    </label>
                    <textarea 
                      id="message-input"
                      rows={4}
                      required={formType === "brand"}
                      className="bg-transparent border-b border-[#E5E5E5] px-2 py-4 text-[#111111] font-sans text-lg focus:outline-none focus:border-[#FB430A] transition-colors resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  {/* Honeypot Spam Prevention */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botfield">Do not fill this out if you are a human:</label>
                    <input 
                      id="botfield" 
                      type="text" 
                      tabIndex={-1} 
                      value={formState.botfield}
                      onChange={(e) => setFormState({ ...formState, botfield: e.target.value })}
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#16A34A] p-4 rounded-2xl font-sans text-sm leading-relaxed transition-all">
                      {submitSuccess}
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] p-4 rounded-2xl font-sans text-sm leading-relaxed transition-all">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-[#111111] transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-[#FB430A] to-[#FF6B00]" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting 
                        ? "Gönderiliyor..." 
                        : formType === "brand" 
                          ? "Marka Briefi Gönder" 
                          : "İçerik Üreticisi Başvurusu Yap"
                      }
                      {!isSubmitting && <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: GLOBAL OFFICE NETWORK (White) ───────────────────── */}
      <section className="bg-[#FB430A] text-white py-24 md:py-36 border-b border-white/20 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Titles & List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div {...fadeUp()} className="mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-4">/ Operasyon</p>
                <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white">
                  Türkiye <br /> Ofislerimiz.
                </h2>
              </motion.div>

              <div className="flex flex-col gap-10">
                {OFFICES.map((office, i) => (
                  <motion.div key={office.name} {...fadeUp(0.1 * i)} className="group border-l-2 border-white/20 pl-6 hover:border-white transition-colors">
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-white mb-2 group-hover:text-white transition-colors">
                      {office.name}
                    </h3>
                    <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed text-white/80 max-w-[280px]">
                      {office.address}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual / Google Map Iframe */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-7 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6661339688463!2d29.0494488!3d40.9887019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8715bd88fbb%3A0xc665b161c56b06e8!2sFortis%20Sinanl%C4%B1%20Kad%C4%B1k%C3%B6y!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str" 
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: PROJECT LOGISTICS (Black) ───────────────────────── */}
      <section className="bg-white text-[#111111] py-24 md:py-36 border-t border-[#E5E5E5] relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div {...fadeUp()} className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FB430A] font-bold mb-4">/ S.S.S</p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-[#111111]">
                Sıkça Sorulan <br /> Sorular.
              </h2>
              <p className="mt-6 text-lg text-[#666666] font-sans max-w-sm">
                Süreçlerimiz ve işleyişimiz hakkında aklınıza takılan sorular.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <motion.div 
                  key={i} 
                  {...fadeUp(0.1 * i)}
                  className="group border border-[#E5E5E5] rounded-2xl p-8 hover:bg-[#FFF3E0] transition-colors cursor-default"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.01em] text-[#111111] mb-4 pr-8">
                    {faq.q}
                  </h3>
                  <p className="text-[#666666] leading-relaxed font-sans text-sm md:text-base">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
