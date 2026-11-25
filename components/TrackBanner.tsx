import Image from "next/image";

export default function TrackBanner({ design = false }: { design?: boolean }) {
  return <header className={"track-banner " + (design ? "studio" : "security")}>
    <div className="track-scene" aria-hidden="true">
      <Image src={design ? "/images/banner-design.webp" : "/images/banner-security.webp"}
        alt="" fill priority sizes="100vw"/>
    </div>
    <div className="wrap track-copy"><h1>{design ? "Studio Desain" : "Lab Security"}</h1>
      <p>{design ? "Poster, antarmuka, desain cetak, dan fotografi." : "Respons insiden, forensik digital, dan infrastruktur layanan."}</p>
      <a className="cta" href={design ? "#galeri" : "#praktik"}>{design ? "Telusuri galeri ↓" : "Lihat bidang praktik ↓"}</a>
    </div>
  </header>;
}
