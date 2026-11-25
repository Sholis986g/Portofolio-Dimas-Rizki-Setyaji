import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return <main id="utama"><Hero/>
    <section id="karya" className="wrap section"><div className="section-head"><h2>Karya pilihan</h2><Link href="/design">Galeri lengkap ↗</Link></div><Projects/></section>
    <section id="tentang" className="wrap section about">
      <Image src="/images/avatar_dimas.webp" width={480} height={500} alt="Dimas Rizki Setyaji" className="portrait"/>
      <div><h2>Tentang saya</h2><p>Saya Dimas, desainer dan praktisi TI yang berdomisili di Yogyakarta. Selama lebih dari empat tahun, saya mengerjakan desain visual, mengembangkan aplikasi web, dan mendalami keamanan siber.</p>
      <p>Di HITS Yogyakarta, saya menerjemahkan brief klien menjadi kampanye digital, materi promosi penerimaan mahasiswa, dan desain cetak. Pekerjaan saya dimulai dari menentukan pesan dan audiens hingga menyiapkan visual untuk publikasi.</p>
      <p>Di bidang TI, saya mendukung analisis insiden dan dokumentasi teknis bersama BPTSI CSIRT Universitas ‘Aisyiyah Yogyakarta. Untuk sistem antrian RSU Queen Latifa, saya terlibat dalam arsitektur layanan, konfigurasi server, dan deployment berbasis Docker.</p>
      <div className="track-links"><Link href="/design">Jelajahi desain ↗</Link><Link href="/security">Jelajahi security ↗</Link></div></div>
    </section>
    <Skills/>
    <section className="wrap section"><h2>Pencapaian</h2><dl className="stats">
      <div><dt>Medali Perak AST PTMA</dt><dd>2×</dd></div><div><dt>Aset desain</dt><dd>350+</dd></div>
    </dl></section>
  </main>;
}
