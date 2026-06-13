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
    <div className="flex items-center gap-2 shrink-0">
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#888] w-6 text-right select-none">
        {checked ? "ON" : "OFF"}
      </span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        aria-pressed={checked}
        className={`relative inline-flex h-7 w-14 shrink-0 items-center transition-colors duration-300 focus:outline-none ${checked
          ? disabled
            ? "bg-[#555555]"
            : "bg-[#FB430A]"
          : "bg-[#2a2a2a]"
          } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 bg-white transition-transform duration-300 ${checked ? "translate-x-8" : "translate-x-1"
            }`}
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
    const consent = localStorage.getItem("cookie-consent")

    if (consent === "custom") {
      try {
        const savedPrefs = localStorage.getItem("cookie-preferences")
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
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setIsOpen(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", "custom")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics, marketing }))
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
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FB430A] font-bold">
                        / TERCİHLER
                      </span>
                      <h3 className="font-sans text-base font-bold text-white tracking-tight mt-1 uppercase">
                        Çerez Kategorileri
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreferences(false)}
                      className="text-white/60 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer ml-4 shrink-0"
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
                          <h4 className="text-white font-bold text-sm">{row.title}</h4>
                          <p className="text-white text-xs mt-0.5 leading-relaxed">{row.desc}</p>
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
                      className="px-6 py-3 bg-[#FB430A] border border-[#FB430A] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#ff551f] cursor-pointer font-sans"
                    >
                      Seçimi Kaydet
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Banner */}
          <div className="px-6 md:px-10 py-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FB430A] font-bold mb-3 block">
              / ÇEREZLER
            </span>

            {/* Single flex row — title | description | buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6">
              {/* Title */}
              <h3 className="font-sans text-sm font-bold text-white tracking-tight uppercase shrink-0">
                Çerez Tercihleriniz
              </h3>

              {/* Divider */}
              <div className="hidden lg:block w-px h-5 bg-white shrink-0" />

              {/* Description */}
              <p className="text-white text-xs md:text-sm leading-relaxed flex-1">
                Deneyiminizi kişiselleştirmek ve siteyi iyileştirmek amacıyla çerezler kullanıyoruz.{" "}
                Detaylar için{" "}
                <Link href="/kvkk" className="text-[#FB430A] hover:underline font-semibold">
                  KVKK
                </Link>{" "}
                metnimizi inceleyebilirsiniz.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowPreferences((p) => !p)}
                  className="px-4 py-2.5 border border-white text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer font-sans whitespace-nowrap"
                >
                  TERCİHLERİ YÖNET
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className="px-4 py-2.5 border border-white text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer font-sans whitespace-nowrap"
                >
                  Reddet
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="px-5 py-2.5 bg-[#FB430A] border border-[#FB430A] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#ff551f] transition-colors cursor-pointer font-sans whitespace-nowrap"
                >
                  Kabul Et
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}