import TrackBanner from "../../components/TrackBanner";
export const metadata = {title:"Lab Security"};
const practice = [
  { title:"Respons insiden", experience:"BPTSI CSIRT · Universitas ‘Aisyiyah Yogyakarta", text:"Mendukung pemantauan keamanan, analisis insiden, troubleshooting sistem, dan dokumentasi tindak lanjut bersama tim TI.", tools:["Linux","Wireshark","Dokumentasi insiden"] },
  { title:"Forensik digital", experience:"Riset bukti digital pada website", text:"Mengkaji bukti serangan keylogger pada website dengan metode NIST. Referensi penelitian mencakup lingkungan WordPress dan MITRE ATT&CK.", tools:["NIST","WordPress","MITRE ATT&CK"] },
  { title:"Operasi infrastruktur", experience:"Sistem antrian · RSU Queen Latifa", text:"Mendukung konfigurasi layanan, deployment aplikasi dan integrasi sistem BPJS. Publikasinya membahas arsitektur berbasis Docker.", tools:["Docker","Linux","Git","MySQL"] },
];
const papers = [
  {title:"Digital Forensic Analysis of Keylogger Attack Evidence on Websites Using the NIST Method", authors:"Arizona Firdonsyah dan Dimas Rizki Setyaji", journal:"Prisma Sains", issue:"Vol. 14 No. 2 · April 2026", doi:"10.33394/j-ps.v14i2.19919"},
  {title:"Perancangan Arsitektur Sistem Antrian Online Terintegrasi BPJS di RSU Queen Latifa Berbasis Docker", authors:"Dimas Rizki Setyaji dan Danur Wijayanto", journal:"Jurnal Teknik Mesin, Industri, Elektro dan Informatika", issue:"Vol. 4 No. 2 · 2025", doi:"10.55606/jtmei.v4i2.4890"},
];
export default function Security() {
  return <main id="utama"><TrackBanner/>
    <section id="praktik" className="wrap section"><h2>Keahlian & perangkat</h2>
      <div className="skills-grid">{practice.map(item=><article key={item.title} className="skill">
        <small>{item.experience}</small><h3>{item.title}</h3><p>{item.text}</p>
        <ul className="tool-tags">{item.tools.map(tool=><li key={tool}>{tool}</li>)}</ul>
      </article>)}</div></section>
    <section id="publications" className="wrap section"><h2>Publikasi</h2>
      {papers.map(p=><article key={p.doi} className="paper-entry"><small>{p.journal} · {p.issue}</small>
        <h3><a href={'https://doi.org/'+p.doi}>{p.title} ↗</a></h3>
        <p>{p.authors}</p><a href={'https://doi.org/'+p.doi}>DOI {p.doi}</a></article>)}
    </section></main>;
}
