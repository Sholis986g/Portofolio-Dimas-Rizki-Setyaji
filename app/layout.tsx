import type { Metadata } from "next";
import localFont from "next/font/local";
import fs from "node:fs";
import path from "node:path";
import { displayFace } from "./display-font";
import GtaTransition from "../components/GtaTransition";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";
import "./globals.css";

// Sync uploaded GTA VI asset images directly in Node.js runtime
try {
  const syncList = [
    {
      src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/14.png",
      dest: path.join(process.cwd(), "public", "images", "mc_dimas.png"),
    },
    {
      src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/20.webp",
      dest: path.join(process.cwd(), "public", "images", "banner-security-v2.webp"),
    },
    {
      src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/20.webp",
      dest: path.join(process.cwd(), "public", "images", "banner-security.webp"),
    },
    {
      src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/21.webp",
      dest: path.join(process.cwd(), "public", "images", "banner-design-v2.webp"),
    },
    {
      src: "C:/Users/Sholis/AppData/Local/Temp/claude/c0ac74faf6516416/6ae5bf10-2f67-4cff-84dd-26d5d3d52884/images/21.webp",
      dest: path.join(process.cwd(), "public", "images", "banner-design.webp"),
    },
  ];
  for (const item of syncList) {
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, item.dest);
    }
  }
} catch {
  // Silent fallback
}

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--face-body",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Dimas Rizki Setyaji — Creative Designer × Cyber Security",
    template: "%s · Dimas Rizki Setyaji // GTA VI Edition",
  },
  description:
    "Portofolio Dimas Rizki Setyaji bergaya GTA 6: riset keamanan siber, infrastruktur Docker & BPJS, serta karya desain visual dan fotografi sinematik.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${displayFace.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <GtaTransition />
          <a className="skip" href="#utama">
            Lewati navigasi
          </a>

          {/* GTA VI Header Navigation with Integrated HUD */}
          <SiteNav />

          {children}

          {/* GTA VI Footer with Radar HUD */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
