"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

interface ToggleProps {
  checked: boolean
  onChange?: (val: boolean) => void
  disabled?: boolean
}

function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="font-mono text-[11px] uppercase tracking-widest w-7 text-right select-none"
        style={{ color: checked ? "#FB430A" : "#666" }}>
        {checked ? "ON" : "OFF"}
      </span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        aria-pressed={checked}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "52px",
          height: "28px",
          flexShrink: 0,
          backgroundColor: checked ? (disabled ? "#555555" : "#FB430A") : "#2a2a2a",
          border: "1px solid",
          borderColor: checked ? (disabled ? "#555555" : "#FB430A") : "#444",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            transform: checked ? "translateX(28px)" : "translateX(3px)",
            transition: "transform 0.3s",
            flexShrink: 0,
          }}
        />
      </button>
    </div>
  )
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem("cookie-consent-tr")

    if (consent === "custom") {
      try {
        const savedPrefs = localStorage.getItem("cookie-preferences-tr")
        if (savedPrefs) {
          const parsed = JSON.parse(savedPrefs)
          setAnalytics(!!parsed.analytics)
          setMarketing(!!parsed.marketing)
        }
      } catch (e) {
        console.error("Failed to parse cookie preferences", e)
      }
    }

    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.paddingBottom = "0px"
      return
    }
    const updatePadding = () => {
      if (containerRef.current) {
        document.body.style.paddingBottom = `${containerRef.current.offsetHeight}px`
      }
    }
    updatePadding()
    window.addEventListener("resize", updatePadding)
    const ro = new ResizeObserver(updatePadding)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => {
      window.removeEventListener("resize", updatePadding)
      ro.disconnect()
      document.body.style.paddingBottom = "0px"
    }
  }, [isOpen, showPreferences])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-tr", "accepted")
    localStorage.setItem("cookie-preferences-tr", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setIsOpen(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent-tr", "rejected")
    localStorage.setItem("cookie-preferences-tr", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent-tr", "custom")
    localStorage.setItem("cookie-preferences-tr", JSON.stringify({ essential: true, analytics, marketing }))
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          key="cookie-banner"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2147483647,
            pointerEvents: "auto",
            isolation: "isolate",
          }}
          className="w-full bg-[#0a0a0a] border-t border-[#2a2a2a] shadow-2xl"
        >
          {/* Preferences Panel */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                key="preferences-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border-b border-[#2a2a2a]"
              >
                <div className="px-6 md:px-10 py-6 md:py-8 flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FB430A] font-semibold">
                        / TERCİHLER
                      </span>
                      <h3 className="font-sans text-sm font-bold text-white tracking-tight mt-1 uppercase">
                        Çerez Kategorileri
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreferences(false)}
                      className="text-white/60 hover:text-white font-mono text-[10px] tracking-widest uppercase flex items-center gap-1 transition-colors cursor-pointer ml-4 shrink-0 font-semibold"
                    >
                      ✕ GERİ
                    </button>
                  </div>

                  {/* Toggle Rows */}
                  <div className="flex flex-col divide-y divide-[#2a2a2a]">
                    {[
                      {
                        title: "Zorunlu Çerezler",
                        desc: "Sitenin düzgün çalışması için gereklidir. Devre dışı bırakılamaz.",
                        checked: true,
                        disabled: true,
                      },
                      {
                        title: "Analitik Çerezler",
                        desc: "Ziyaretçi davranışlarını anlamamıza yardımcı olur. (Google Analytics vb.)",
                        checked: analytics,
                        onChange: setAnalytics,
                      },
                      {
                        title: "Pazarlama & Takip Çerezleri",
                        desc: "Reklam performansı ve affiliate takibi için kullanılır.",
                        checked: marketing,
                        onChange: setMarketing,
                      },
                    ].map((row) => (
                      <div key={row.title} className="flex items-center justify-between gap-8 py-4">
                        <div>
                          <h4 className="text-white font-bold text-sm uppercase tracking-tight">{row.title}</h4>
                          <p className="text-white/70 text-xs mt-0.5 leading-relaxed">{row.desc}</p>
                        </div>
                        <Toggle
                          checked={row.checked}
                          onChange={row.onChange}
                          disabled={row.disabled}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Save */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleSavePreferences}
                      className="px-6 py-3 bg-[#FB430A] border border-[#FB430A] text-black font-bold text-xs tracking-tight uppercase hover:bg-[#ff551f] hover:border-[#ff551f] transition-all duration-300 rounded-none cursor-pointer font-sans"
                    >
                      SEÇİMİ KAYDET
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Banner */}
          <div className="px-6 md:px-10 py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FB430A] font-semibold mb-3 block">
              / ÇEREZLER
            </span>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6">
              {/* Title */}
              <h3 className="font-sans text-sm font-bold text-white tracking-tight uppercase shrink-0">
                Çerez Tercihleriniz
              </h3>

              {/* Divider */}
              <div className="hidden lg:block w-px h-5 bg-[#2a2a2a] shrink-0" />

              {/* Description */}
              <p className="text-white/70 text-xs md:text-sm leading-relaxed flex-1">
                Deneyiminizi kişiselleştirmek ve siteyi iyileştirmek amacıyla çerezler kullanıyoruz. Detaylar için{" "}
                <Link href="/kvkk" className="text-[#FB430A] hover:underline font-semibold transition-colors duration-200">
                  KVKK
                </Link>
                {" "}metnimizi inceleyebilirsiniz.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowPreferences((p) => !p)}
                  className="px-5 py-3 border border-white font-bold text-xs tracking-tight uppercase transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                  style={{ color: "white" }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black" }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white" }}
                >
                  TERCİHLERİ YÖNET
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className="px-5 py-3 border border-white font-bold text-xs tracking-tight uppercase transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                  style={{ color: "white" }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black" }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white" }}
                >
                  REDDET
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="px-6 py-3 bg-[#FB430A] border border-[#FB430A] text-black font-bold text-xs tracking-tight uppercase hover:bg-[#ff551f] hover:border-[#ff551f] transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                >
                  KABUL ET
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}