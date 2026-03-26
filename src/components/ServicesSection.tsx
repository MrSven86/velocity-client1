import iconSquare from "@/assets/icon-square.svg";
import vama01 from "@/assets/vama-work-01.jpg";
import vama02 from "@/assets/vama-work-02.jpg";
import vama03 from "@/assets/vama-work-03.jpg";
import vama05 from "@/assets/vama-work-05.jpg";
import vama06 from "@/assets/vama-work-06.jpg";
import vama07 from "@/assets/vama-work-07.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  { image: vama01, title: "Pintura Interior", description: "Paredes, techos y aberturas con terminaciones impecables. Preparación de superficie incluida." },
  { image: vama02, title: "Pintura Exterior y Fachadas", description: "Renovamos la fachada de tu casa, edificio u oficina con productos de calidad que duran." },
  { image: vama03, title: "Revoques y Emparejamiento", description: "Arreglamos grietas y superficies irregulares antes de pintar — el trabajo sale perfecto." },
  { image: vama05, title: "Pintura de Techos", description: "Techos con materiales antihumedad y antihongos. Para casas, departamentos y edificios." },
  { image: vama06, title: "Trabajos para Consorcios", description: "Espacios comunes, fachadas y oficinas con la misma responsabilidad y puntualidad de siempre." },
  { image: vama07, title: "Durlock y Reformas", description: "Colocación de durlock y zócalos que acompañan la pintura. Un solo equipo para todo." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicios" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-center gap-3 mb-4 reveal ${isVisible ? "visible" : ""}`}>
          <img src={iconSquare} alt="" className="h-10" />
        </div>
        <h2
          className={`text-center text-4xl md:text-5xl font-bold capitalize mb-3 reveal ${isVisible ? "visible" : ""}`}
          style={{ color: "hsl(var(--brand-green-dark))", transitionDelay: "100ms", fontFamily: "'Outfit', sans-serif" }}
        >
          Servicios de pintura en CABA y GBA
        </h2>
        <p className={`text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          Pintura interior, exterior, revoques y reformas — todo con el mismo nivel de prolijidad.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-[210px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 font-outfit" style={{ color: "hsl(var(--brand-green-dark))" }}>{service.title}</h3>
                <p className="text-muted-foreground text-base leading-6 font-kanit">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`flex justify-center mt-10 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "800ms" }}>
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-accent-foreground px-8 py-3 font-black uppercase text-sm tracking-wide flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-sm font-outfit"
          >
            Pedí un Presupuesto Gratis
            <svg className="w-4 h-3" fill="none" viewBox="0 0 16 12" stroke="currentColor" strokeWidth="2">
              <path d="M1 6h14M10 1l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
