"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const scenes = [
  { label: "Pesisir", image: "pesisir", position: "65% center" },
  { label: "Fotografi", image: "photo_fuji_portrait_1", position: "center 38%" },
  { label: "Poster", image: "poster_talkshow_trace_the_truth", position: "center 30%" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const scene = scenes[active];
  return <section ref={ref} className="hero">
    <motion.div aria-hidden="true" className="hero-art" style={{ y: reduce ? 0 : drift }}>
      <AnimatePresence initial={false}>
        <motion.div className="scene-layer" key={scene.image}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : .55 }}>
          <Image src={'/images/'+scene.image+'.webp'} alt="" fill priority={active===0} sizes="100vw"
            className="object-cover" style={{objectPosition: scene.position}}/>
        </motion.div>
      </AnimatePresence>
    </motion.div>
    <div className="hero-shade" />
    <div className="hero-copy wrap">
      <h1><span className="title-mask"><span>DIMAS RIZKI</span></span><span className="title-mask"><span>SETYAJI</span></span></h1>
      <p>Creative Designer × Cyber Security</p>
      <a className="cta" href="#karya">Lihat karya <span aria-hidden="true">↓</span></a>
    </div>
    <div className="scene-picker" role="group" aria-label="Pilih visual beranda">
      {scenes.map((item,i)=><button type="button" key={item.image} aria-pressed={i===active} onClick={()=>setActive(i)}>
        <Image src={'/images/'+item.image+'.webp'} width={56} height={36} alt=""/><span>{item.label}</span>
      </button>)}
    </div>
  </section>;
}
