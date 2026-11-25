"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({target: ref, offset: ["start start", "end start"]});
  const drift = useTransform(scrollYProgress, [0,1], ["0%", "8%"]);
  return <section ref={ref} className="hero">
    <motion.div aria-hidden="true" className="hero-art" style={{y:reduce ? 0 : drift}}>
      <Image src="/images/pesisir.webp" alt="" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
    </motion.div>
    <div className="hero-shade" />
    <motion.div className="hero-copy wrap" initial={false}
      animate={reduce ? {} : {opacity:[0.85,1], y:[12,0]}} transition={{duration:.65}}>
      <h1>DIMAS RIZKI<br/>SETYAJI</h1><p>Creative Designer × Cyber Security</p>
      <a className="cta" href="#karya">Lihat karya <span aria-hidden="true">↓</span></a>
    </motion.div>
  </section>;
}
