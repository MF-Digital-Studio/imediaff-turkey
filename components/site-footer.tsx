import Link from "next/link"

const FOOTER_LINKS = {
  "Keşfet": [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Hizmetler", href: "/services" },
    { label: "Markalar", href: "/brands" },
    { label: "Etkinlikler", href: "/events" },
    { label: "Blog", href: "/blog" },
  ],
  "Hizmetler": [
    { label: "Affiliate Pazarlama", href: "/services" },
    { label: "Influencer İş Birlikleri", href: "/services" },
    { label: "Kampanya Yönetimi", href: "/services" },
    { label: "Creator Danışmanlığı", href: "/services" },
  ],
  "İletişim": [
    { label: "info@imediaff.com", href: "mailto:info@imediaff.com" },
    { label: "İstanbul, Türkiye", href: "/contact" },
    { label: "Teklif Al", href: "/contact" },
  ],
  "Ofis": [
    {
      label: "İstanbul Merkez: Fortis Sinanlı Yeni Kadıköy, Kadıköy/İstanbul",
      href: "/contact",
      isAddress: true
    },
    {
      label: "Vadistanbul: Bilişim Vadisi, Sarıyer/İstanbul",
      href: "/contact",
      isAddress: true
    }
  ],
}

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/imediaff/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/imediaff-global" },
]

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-[#111111]">imediaff<span className="text-[#FE9417]">.</span></Link>
          <p className="mt-4 max-w-sm text-sm text-[#666666] leading-relaxed font-sans">Markalara ve içerik üreticilerine affiliate, prodüksiyon ve kampanya yönetimi çözümleri sunuyoruz.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} className="inline-flex items-center gap-2 border border-[#E5E5E5] px-3 py-1.5 text-xs font-mono tracking-widest text-[#666666] hover:border-[#E5E5E5] hover:text-[#111111] transition-colors">{s.label}<span aria-hidden>↗</span></a>
            ))}
          </div>
          <div className="mt-8">
            <img
              src="/iab_logo.svg"
              alt="IAB Member"
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
          <div key={heading} className={heading === "Offices" ? "md:col-span-3" : "md:col-span-2"}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#111111] font-bold">/ {heading}</p>
            <ul className="mt-6 flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm text-[#666666] hover:text-[#111111] transition-colors ${'isAddress' in item && item.isAddress ? "font-mono text-xs leading-loose" : "font-sans"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">© {new Date().getFullYear()} imediaff. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-mono text-[10px] uppercase tracking-widest text-[#888888] hover:text-[#111111] transition-colors">KVKK ve Gizlilik Politikası</Link>
            <a href="https://www.mfdigitalstudio.com" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-[10px] uppercase tracking-widest text-[#888888] hover:text-[#111111] transition-colors">Desıgned by MF Dıgıtal Studıo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
