import { Zap, Users, Award } from "lucide-react";
import iconSquare from "@/assets/icon-square.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Award,
    title: "Cumplimos lo pactado",
    desc: "El precio del presupuesto es el precio final. Los plazos acordados se respetan. Sin sorpresas.",
  },
  {
    icon: Zap,
    title: "Respondemos el mismo día",
    desc: "Mandanos un mensaje y coordinamos la visita de presupuesto en 24 horas.",
  },
  {
    icon: Users,
    title: "El mismo equipo en cada trabajo",
    desc: "Marcelo y Vanesa atienden cada proyecto de principio a fin — sin tercerizar.",
  },
];

const ResidentialSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className={`reveal-left ${isVisible ? "visible" : ""}`}>
          <div className="mb-4">
            <img src={iconSquare} alt="" className="h-10 mb-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-outfit leading-tight mb-6" style={{ color: "hsl(var(--brand-green-dark))" }}>
            ¿Por qué VAMA y<br />no otro pintor?
          </h2>
          <p className="text-muted-foreground text-xl font-kanit leading-9 mb-10">
            Hay muchos pintores en Buenos Aires. Lo que más escuchamos de nuestros clientes es que en experiencias previas el trabajo quedó mal o el precio final no fue el acordado. Con VAMA, eso no pasa.
          </p>

          <div className="space-y-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 reveal ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--brand-green-dark))" }}>{f.title}</h4>
                  <p className="text-muted-foreground text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — gold copy quote + stats */}
        <div className={`reveal-right ${isVisible ? "visible" : ""}`}>
          {/* Quote highlight */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
            <p className="text-foreground text-xl font-outfit italic leading-8 mb-4">
              "El servicio es de lo mejor que hay en Buenos Aires. Una calidad de excelencia la que manejan."
            </p>
            <p className="text-muted-foreground text-sm font-poppins font-semibold">— Emanuel De La Cruz · Cliente de VAMA · Google</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-secondary hover:shadow-xl transition-shadow duration-300">
            <p className="text-foreground text-xl font-outfit italic leading-8 mb-4">
              "SUMAMENTE RECOMENDABLES... Se nota la experiencia que tienen, cumplieron con lo pactado por demás. Además de ser muy honestos y muy buenas personas."
            </p>
            <p className="text-muted-foreground text-sm font-poppins font-semibold">— fgct · Guía Local · 196 reseñas · Google</p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 gap-4 mt-6 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "500ms" }}>
            {[
              { num: "25", label: "años de experiencia" },
              { num: "4.7★", label: "en Google" },
              { num: "31", label: "reseñas verificadas" },
              { num: "27/31", label: "calificaciones 5 estrellas" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-primary/8 rounded-lg p-4 text-center hover:bg-primary/15 transition-colors duration-300">
                <span className="block text-2xl font-black font-josefin" style={{ color: "hsl(var(--brand-green-dark))" }}>{num}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-outfit">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;
