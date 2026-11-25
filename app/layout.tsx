import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { displayFace } from "./display-font";
import "./globals.css";

// Google Fonts' Inter, bundled locally so a production build also works offline.
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--face-body", display: "swap", weight: "100 900",
});
export const metadata: Metadata = {
  title: { default: "Dimas Rizki Setyaji — Creative Designer × Cyber Security", template: "%s · Dimas Rizki Setyaji" },
  description: "Karya desain visual, pengembangan web dan riset keamanan siber Dimas Rizki Setyaji di Yogyakarta.",
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="id" className={displayFace.variable + " " + inter.variable}><body>
    <a className="skip" href="#utama">Lewati navigasi</a>
    <header className="site-nav"><Link className="wordmark" aria-label="DRS — Beranda" href="/">DRS</Link>
      <nav aria-label="Navigasi utama"><Link href="/#karya">Karya</Link><Link href="/security">Riset</Link><Link href="/#tentang">Tentang</Link><a href="#contact">Kontak ↗</a></nav>
    </header>
    {children}
    <footer id="contact" className="wrap"><h2>Mari bekerja sama.</h2>
      <a className="email" href="mailto:dimasrizkisetyaji@gmail.com">dimasrizkisetyaji@gmail.com ↗</a>
      <div className="footer-links"><a href="https://github.com/Sholis986g">GitHub ↗</a><a href="https://linkedin.com/in/dimas-rizki-setyaji">LinkedIn ↗</a><a href="https://instagram.com/dimrizji">Instagram ↗</a></div>
      <small>Fan-made Portfolio inspired by GTA VI</small>
    </footer>
  </body></html>;
}
