import iconSquare from "@/assets/icon-square.svg";
import vama01 from "@/assets/vama-work-01.jpg";
import vama02 from "@/assets/vama-work-02.jpg";
import vama03 from "@/assets/vama-work-03.jpg";
import vama04 from "@/assets/vama-work-04.jpg";
import vama05 from "@/assets/vama-work-05.jpg";
import vama06 from "@/assets/vama-work-06.jpg";
import vama07 from "@/assets/vama-work-07.jpg";
import vama08 from "@/assets/vama-work-08.jpg";
import vama09 from "@/assets/vama-work-09.jpg";
import vama10 from "@/assets/vama-work-10.jpg";
import vama11 from "@/assets/vama-work-11.jpg";
import vama12 from "@/assets/vama-work-12.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const photos = [vama01, vama02, vama03, vama04, vama05, vama06, vama07, vama08, vama09, vama10, vama11, vama12];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="galeria" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-center gap-3 mb-4 reveal ${isVisible ? "visible" : ""}`}>
          <img src={iconSquare} alt="" className="h-10" />
        </div>
        <h2 className={`text-center text-4xl md:text-5xl font-bold capitalize mb-3 font-outfit reveal ${isVisible ? "visible" : ""}`} style={{ color: "hsl(var(--brand-green-dark))", transitionDelay: "100ms" }}>
          Trabajos recientes en Buenos Aires
        </h2>
        <p className={`text-center text-muted-foreground text-lg mb-12 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          Resultados reales en departamentos, casas y edificios.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {photos.map((img, idx) => (
            <div
              key={idx}
              className={`aspect-square overflow-hidden rounded-xl group cursor-pointer reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${200 + idx * 80}ms` }}
            >
              <img
                src={img}
                alt={`Trabajo de pintura VAMA ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className={`flex justify-center mt-10 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "1000ms" }}>
          <a
            href="https://www.instagram.com/vamapinturadeobrasyservicios/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-accent-foreground px-8 py-3 font-black uppercase text-sm tracking-wide flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-sm font-outfit"
          >
            Ver más en Instagram
            <svg className="w-4 h-3" fill="none" viewBox="0 0 16 12" stroke="currentColor" strokeWidth="2"><path d="M1 6h14M10 1l5 5-5 5"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
