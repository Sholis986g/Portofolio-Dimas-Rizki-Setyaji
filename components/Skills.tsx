"use client";
import { motion, useReducedMotion } from "framer-motion";
const skills = [
  ["Desain Grafis", "Identitas visual, kampanye digital, dan desain cetak.", "Figma · Photoshop · Illustrator"],
  ["Full-Stack Web Dev", "Antarmuka web, integrasi aplikasi, dan deployment.", "Laravel · TypeScript · Docker"],
  ["Cyber Security (CSIRT)", "Dukungan penanganan insiden dan analisis bukti digital.", "Linux · Wireshark · Forensik digital"],
];
export default function Skills() {
  const reduce = useReducedMotion();
  return <section className="wrap section"><h2>Arsenal</h2><div className="skills-grid">
    {skills.map(([name,description,tools])=><motion.article key={name} className="skill"
      whileHover={reduce ? undefined : {y:-4}} transition={{duration:.2}}>
      <h3>{name}</h3><p>{description}</p><small>{tools}</small>
    </motion.article>)}
  </div></section>;
}
