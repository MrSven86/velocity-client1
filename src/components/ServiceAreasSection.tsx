import iconSquare from "@/assets/icon-square.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const areas = [
  "Belgrano","Palermo","Núñez","Colegiales","Villa Urquiza",
  "Recoleta","Barrio Norte","Villa del Parque","Caballito","Flores",
  "Almagro","Chacarita","Saavedra","Villa Pueyrredón","GBA Norte","Vicente López",
];

const ServiceAreasSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`flex items-center justify-center gap-3 mb-3 reveal ${isVisible ? "visible" : ""}`}>
          <img src={iconSquare} alt="" className="h-8" />
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold font-outfit mb-3 reveal ${isVisible ? "visible" : ""}`} style={{ color: "hsl(var(--brand-green-dark))", transitionDelay: "100ms" }}>
          Trabajamos en todo Buenos Aires
        </h2>
        <p className={`text-muted-foreground text-lg mb-8 font-kanit reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          Con base en Belgrano, atendemos CABA y Gran Buenos Aires.
        </p>
        <div className={`flex flex-wrap gap-3 justify-center reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
          {areas.map((area) => (
            <span key={area} className="px-4 py-2 bg-white rounded-full text-sm font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200 font-outfit shadow-sm">
              {area}
            </span>
          ))}
        </div>
        <p className={`text-muted-foreground text-sm mt-6 font-kanit reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
          ¿Tu barrio no está en la lista? Consultanos igual — nos movemos por toda la ciudad.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
