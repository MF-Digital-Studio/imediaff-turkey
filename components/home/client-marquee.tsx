const CLIENTS = [
  "TRENDYOL", "YEMEKSEPETI", "ÇİÇEKSEPETİ", "AMAZON", "XIAOMI", "AVON", "ZÜBER",
  "DERMOKIL", "PUREBABY", "FLO", "BIO-OIL", "PROCSIN", "INDO", "ELIDOR",
  "DEFACTO", "TEFAL", "OMO", "BABY TURCO", "YAYLA", "SLEEPY", "ŞOK",
  "SCHAFER", "MUSTELA", "LUMBERJACK", "L'ORÉAL", "KINDERKRAFT", "KÄRCHER",
  "HOBBY", "HIPP", "HEPSIBURADA", "DOVE", "CIF", "BIOFELINE", "BEPANTHOL",
  "ARIEL", "LETSBECHILD", "ATAWICH"
]

export default function ClientMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <section className="relative border-y border-[#E5E5E5] py-20 overflow-hidden bg-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-l from-[#FE9417]/5 to-transparent blur-[100px] rounded-full opacity-60" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] mb-4">
              / Ekosistemimiz
            </p>
            <h2 className="font-sans text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#111111] text-balance">
              Markaların Güvendiği <br /> Creator & Affiliate Ekosistemi
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#666666] leading-relaxed text-sm md:text-base font-medium">
              E-ticaret, perakende, kozmetik, anne-bebek, gıda, teknoloji ve yaşam kategorilerinde Türkiye’nin önde gelen markalarıyla kampanya ve iş birliği deneyimi.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Fading gradient masks for smooth marquee edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-track gap-16 whitespace-nowrap">
          {doubled.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-sans text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[#111111]/20 hover:text-[#FE9417] transition-all duration-500 cursor-default"
            >
              {c}
              <span className="text-[#FE9417]">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
