"use client";
import { useRef, useState } from "react";
import Image from "next/image";
const projects = [
  {name:"Vitalife", type:"UI/UX · Web kesehatan", image:"project_vitalife_web"},
  {name:"Trace the Truth", type:"Desain poster · Acara kampus", image:"poster_talkshow_trace_the_truth"},
  {name:"Potret Fujifilm", type:"Fotografi · Potret", image:"photo_fuji_portrait_1"},
  {name:"X-Banner", type:"Desain cetak · Pameran", image:"print_xbanner"},
];
export default function Projects({all=false}:{all?:boolean}) {
  const items = all ? projects : projects.slice(0,3);
  const [index,setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const selected = items[index];
  const step = (direction:number) => setIndex(i=>(i+direction+items.length)%items.length);

  return <><div className="project-grid">{items.map((project,i)=>
    <button className="project" type="button" key={project.image} aria-label={'Buka '+project.name}
      onClick={()=>{setIndex(i); dialog.current?.showModal();}}>
      <span className="project-art"><Image src={'/images/'+project.image+'.webp'} fill
        sizes="(max-width: 719px) 100vw, 33vw" alt=""/></span>
      <small>{project.type}</small><span className="project-title">{project.name} <span aria-hidden="true">↗</span></span>
    </button>)}</div>
    <dialog className="viewer" ref={dialog} aria-labelledby="viewer-title"
      onKeyDown={e=>{if(e.key==='ArrowLeft')step(-1); if(e.key==='ArrowRight')step(1);}}>
      <div className="viewer-head"><div aria-live="polite"><small>{selected.type} · {index+1}/{items.length}</small>
        <h2 id="viewer-title">{selected.name}</h2></div>
        <button type="button" autoFocus onClick={()=>dialog.current?.close()}>Tutup ×</button></div>
      <div className="viewer-art"><Image key={selected.image} src={'/images/'+selected.image+'.webp'} fill sizes="90vw" alt={selected.name}/></div>
      <div className="viewer-controls"><button type="button" onClick={()=>step(-1)}>← Sebelumnya</button><button type="button" onClick={()=>step(1)}>Berikutnya →</button></div>
    </dialog></>;
}
