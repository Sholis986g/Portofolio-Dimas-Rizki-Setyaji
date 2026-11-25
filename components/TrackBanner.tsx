import Image from "next/image";

export default function TrackBanner({ design = false }: { design?: boolean }) {
  return <header className={"track-banner " + (design ? "studio" : "security")}>
    <div className="track-scene" aria-hidden="true">
      <Image src="/images/pesisir.webp" alt="" fill priority sizes="100vw"/>
      {design ? <div className="poster-stack">
        <Image src="/images/social_poster_2.webp" width={240} height={300} alt=""/>
        <Image src="/images/poster_talkshow_trace_the_truth.webp" width={240} height={300} alt=""/>
      </div> : <div className="signal"><i/><i/><i/></div>}
    </div>
    <div className="wrap track-copy"><h1>{design ? "Studio Desain" : "Lab Security"}</h1>
      <p>{design ? "Poster, antarmuka, desain cetak, dan fotografi." : "Respons insiden, forensik digital, dan infrastruktur layanan."}</p>
      <a className="cta" href={design ? "#galeri" : "#praktik"}>{design ? "Telusuri galeri ↓" : "Lihat bidang praktik ↓"}</a>
    </div>
  </header>;
}
