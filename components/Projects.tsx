import Image from "next/image";
const projects = [
  {name:"Vitalife", type:"UI/UX · Web kesehatan", image:"project_vitalife_web"},
  {name:"Trace the Truth", type:"Desain poster · Acara kampus", image:"poster_talkshow_trace_the_truth"},
  {name:"Potret Fujifilm", type:"Fotografi · Potret", image:"photo_fuji_portrait_1"},
  {name:"X-Banner", type:"Desain cetak · Pameran", image:"print_xbanner"},
];
export default function Projects({all=false}:{all?:boolean}) {
  return <div className="project-grid">{projects.slice(0,all?projects.length:3).map(p=>
    <a className="project" key={p.image} href={'/images/'+p.image+'.webp'} aria-label={'Lihat gambar '+p.name}>
      <div className="project-art"><Image src={'/images/'+p.image+'.webp'} fill sizes="(max-width: 700px) 100vw, 33vw" alt={p.name}/></div>
      <small>{p.type}</small><h3>{p.name} <span aria-hidden="true">↗</span></h3>
    </a>)}</div>;
}
