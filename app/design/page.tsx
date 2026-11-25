import Projects from "../../components/Projects";
import TrackBanner from "../../components/TrackBanner";
export const metadata = {title:"Studio Desain"};
export default function Design() {
  return <main id="utama"><TrackBanner design/>
    <section id="galeri" className="wrap section"><h2>Galeri karya</h2><Projects all/></section>
  </main>;
}
