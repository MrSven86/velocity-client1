import { Zap, Users, Award } from "lucide-react";
import iconSquare from "@/assets/icon-square.svg";
import vama13 from "@/assets/vama-work-13.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — photo */}
        <div className={`relative reveal-left ${isVisible ? "visible" : ""}`}>
          <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img src={vama13} alt="Marcelo Abreu — VAMA Pintura" className="w-full h-[480px] object-cover" />
          </div>
          <div className="absolute bottom-8 left-8 bg-background/80 backdrop-blur-md rounded-full py-3 px-6 shadow-lg flex items-center gap-3">
            <span className="text-foreground text-lg font-semibold font-outfit">Marcelo Abreu</span>
            <span className="text-muted-foreground text-sm font-outfit">— VAMA Pintura</span>
          </div>
        </div>

        {/* Right — text */}
        <div className={`reveal-right ${isVisible ? "visible" : ""}`}>
          <div className="mb-4">
            <img src={iconSquare} alt="" className="h-10 mb-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-outfit leading-tight mb-6" style={{ color: "hsl(var(--brand-green-dark))" }}>
            25 años haciendo<br />bien el trabajo.
          </h2>
          <p className="text-muted-foreground text-xl font-kanit leading-9 mb-6">
            Marcelo Abreu fundó VAMA hace 25 años en su ciudad natal, Pehuajó. Desde hace 12 años trabaja en Buenos Aires junto a Vanesa, su socia y compañera. Juntos atienden cada proyecto de principio a fin — sin tercerizar, sin sorpresas.
          </p>
          <p className="text-muted-foreground text-xl font-kanit leading-9 mb-10">
            Cada cliente recibe atención directa de Marcelo: visita el lugar, da el presupuesto, ejecuta el trabajo y lo entrega. Esa continuidad es lo que más valoran quienes los contratan.
          </p>

          <div className="space-y-5 mb-10">
            {[
              { icon: Award, title: "Presupuesto = precio final", desc: "Sin sorpresas al terminar. Lo que se acordó, se cobra." },
              { icon: Zap, title: "Puntualidad garantizada", desc: "Llegamos a horario, trabajamos sin interrupciones, entregamos en fecha." },
              { icon: Users, title: "Sin subcontratistas", desc: "El mismo equipo de siempre en cada trabajo. Conocés a quién entra a tu casa." },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 reveal ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${400 + idx * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-outfit mb-1" style={{ color: "hsl(var(--brand-green-dark))" }}>{title}</h4>
                  <p className="text-muted-foreground text-base font-kanit">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-b border-border pb-5 mb-5">
            <span className="text-primary font-bold text-lg uppercase font-outfit tracking-wide">Nuestra misión</span>
            <p className="text-foreground text-xl font-bold font-outfit mt-1">
              Que cada cliente nos recomiende. Nada más, nada menos.
            </p>
          </div>
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-accent-foreground px-8 py-3 font-black uppercase text-sm tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-sm font-outfit"
          >
            Hablar con Marcelo
            <svg className="w-4 h-3" fill="none" viewBox="0 0 16 12" stroke="currentColor" strokeWidth="2"><path d="M1 6h14M10 1l5 5-5 5"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
