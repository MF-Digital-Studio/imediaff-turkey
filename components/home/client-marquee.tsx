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
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-l from-[#FB430A]/5 to-transparent blur-[100px] rounded-full opacity-60" />



      <div className="relative overflow-hidden">
        {/* Fading gradient masks for smooth marquee edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-track gap-16 whitespace-nowrap">
          {doubled.map((c, i) => (
            <span
              key={`${c}-${i}`}
              aria-hidden={i >= CLIENTS.length ? "true" : undefined}
              className="font-sans text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[#111111]/20 hover:text-[#FB430A] transition-all duration-500 cursor-default"
            >
              {c}
              <span className="text-[#FB430A]">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
