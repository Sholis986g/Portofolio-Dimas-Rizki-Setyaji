"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CockpitTelemetry, LiveRecTicker, WantedStars, ViceRadioHud } from "./GtaHud";
import { useLanguage } from "./LanguageContext";

export default function SiteNav() {
  const { locale, toggleLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/#tentang", label: t.nav.about },
    { href: "/#experience", label: t.nav.operations },
    { href: "/#arsenal", label: t.nav.arsenal },
    { href: "/#karya", label: t.nav.works },
    { href: "/security", label: t.nav.security },
    { href: "/design", label: t.nav.design },
    { href: "#contact", label: t.nav.contact, highlight: true },
  ];

  return (
    <header className="site-nav">
      <div className="flex items-center justify-between w-full lg:w-auto gap-3">
        <Link
          className="wordmark shrink-0"
          aria-label="DRS — Beranda GTA 6"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          DRS <span className="gta-vi-badge">VI</span>
        </Link>

        {/* Unified Cockpit Telemetry Capsule beside DRS VI on large desktop */}
        <CockpitTelemetry />

        {/* Mobile / Tablet Right Controls: Lang Switcher + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Language Toggle on Mobile */}
          <button
            type="button"
            onClick={toggleLocale}
            className="px-2 py-1 rounded bg-[#170a24]/90 border border-[#ff2a85]/50 text-[11px] font-mono font-black tracking-widest text-[#ffe600] flex items-center gap-1 shadow-[0_0_10px_rgba(255,42,133,0.3)]"
            aria-label="Switch Language"
          >
            <span>{locale.toUpperCase()}</span>
            <span className="text-[#ff2a85] text-[10px]">⇄</span>
          </button>

          {/* Animated GTA VI Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded bg-[#170a24]/90 border border-[#ff2a85]/50 hover:border-[#ffe600] text-white flex flex-col justify-center items-center gap-1.5 w-10 h-10 transition shadow-[0_0_12px_rgba(255,42,133,0.3)] cursor-pointer"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
          >
            <span
              className={`w-5 h-0.5 bg-gradient-to-r from-[#ff2a85] to-[#ffe600] transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gradient-to-r from-[#ff7a45] to-[#ffe600] transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gradient-to-r from-[#ff2a85] to-[#ffe600] transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Desktop Navigation (>= 1024px) */}
      <nav aria-label="Navigasi utama desktop" className="hidden lg:flex items-center gap-4 xl:gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition whitespace-nowrap text-xs xl:text-sm font-bold tracking-wider uppercase ${
              link.highlight
                ? "text-[#ffe600] hover:text-[#ff2a85] drop-shadow-[0_0_8px_rgba(255,230,0,0.5)]"
                : "text-[#e2d9e8] hover:text-[#ffe600]"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Desktop Language Switcher [ID | EN] */}
        <button
          type="button"
          onClick={toggleLocale}
          className="px-2.5 py-1 rounded bg-[#170a24]/90 border border-[#ff2a85]/50 hover:border-[#ffe600] transition flex items-center gap-1 text-xs font-mono font-black tracking-widest cursor-pointer shadow-[0_0_12px_rgba(255,42,133,0.3)] ml-2"
          aria-label="Ganti Bahasa / Switch Language"
          title={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
        >
          <span
            className={
              locale === "id"
                ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.9)]"
                : "text-[#7e6a8b]"
            }
          >
            ID
          </span>
          <span className="text-[#ff2a85]/70 text-[10px]">|</span>
          <span
            className={
              locale === "en"
                ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.9)]"
                : "text-[#7e6a8b]"
            }
          >
            EN
          </span>
        </button>
      </nav>

      {/* Mobile & Tablet Fullscreen / Sliding Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-[#09040e]/98 backdrop-blur-2xl border-b border-[#ff2a85]/40 flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            {/* Nav Links Stack */}
            <nav aria-label="Navigasi mobile" className="flex flex-col gap-3 py-2">
              <span className="text-[11px] font-mono font-bold text-[#ff7a45] uppercase tracking-[0.2em] mb-1">
                VICE CITY NAVIGATION // HUD
              </span>
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-display uppercase tracking-wider py-2 border-b border-[#ff2a85]/20 flex items-center justify-between transition-colors ${
                    link.highlight ? "text-[#ffe600]" : "text-white hover:text-[#ffe600]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#ff2a85]">0{idx + 1} ↗</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Cockpit HUD Bar */}
            <div className="pt-6 border-t border-[#ff2a85]/30 flex flex-col gap-3 mt-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <LiveRecTicker />
                <WantedStars count={5} active={5} />
              </div>
              <div className="w-full">
                <ViceRadioHud />
              </div>
              <p className="text-[11px] font-mono text-[#9f8ea8] text-center mt-2">
                DRS VI · LEONIDA PROTOCOL · 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
