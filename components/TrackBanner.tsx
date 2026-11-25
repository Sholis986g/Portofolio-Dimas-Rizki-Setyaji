"use client";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { useLanguage } from "./LanguageContext";

function ensureBanners() {
  try {
    const list = [
      {
        src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/20.webp",
        dest: path.join(process.cwd(), "public", "images", "banner-security-v2.webp"),
        legacy: path.join(process.cwd(), "public", "images", "banner-security.webp"),
      },
      {
        src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/21.webp",
        dest: path.join(process.cwd(), "public", "images", "banner-design-v2.webp"),
        legacy: path.join(process.cwd(), "public", "images", "banner-design.webp"),
      },
    ];

    for (const item of list) {
      if (fs.existsSync(item.src)) {
        fs.copyFileSync(item.src, item.dest);
        fs.copyFileSync(item.src, item.legacy);
      }
    }
  } catch {
    // fallback
  }
}

export default function TrackBanner({ design = false }: { design?: boolean }) {
  ensureBanners();
  const { t } = useLanguage();

  return (
    <header className={"track-banner " + (design ? "studio" : "security")}>
      <div className="hero-vi-watermark" aria-hidden="true" style={{ top: "5%", fontSize: "clamp(12rem, 25vw, 28rem)" }}>
        VI
      </div>
      <div className="track-scene" aria-hidden="true">
        <Image
          src={design ? "/images/banner-design-v2.webp" : "/images/banner-security-v2.webp"}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="wrap track-copy">
        <span className="hero-hud-ticker mb-3">
          <span className="rec-dot" />
          <span>{design ? t.track.design_tag : t.track.security_tag}</span>
        </span>
        <h1 className="text-white">
          <span className="title-mask">
            <span className="highlight">{design ? t.track.design_title : t.track.security_title}</span>
          </span>
        </h1>
        <p className="text-[#cfc2d7] text-base md:text-lg max-w-xl my-4">
          {design ? t.track.design_desc : t.track.security_desc}
        </p>
        <a className="cta" href={design ? "#galeri" : "#praktik"}>
          {design ? t.track.design_cta : t.track.security_cta}
        </a>
      </div>
    </header>
  );
}
