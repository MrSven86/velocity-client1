import { Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contacto" className="bg-primary py-16" ref={ref}>
      <div className={`max-w-7xl mx-auto px-6 text-center reveal-scale ${isVisible ? "visible" : ""}`}>
        <h2 className="text-primary-foreground text-3xl md:text-4xl font-extrabold font-outfit mb-4">
          ¿Querés renovar tu espacio con un trabajo prolijo y confiable?
        </h2>
        <p className="text-primary-foreground/90 text-xl md:text-2xl font-kanit mb-4">
          Mandanos un mensaje por WhatsApp y coordinamos una visita sin cargo.
        </p>
        <p className="text-primary-foreground/70 text-base mb-8 font-outfit">
          Paso 1: mandanos un mensaje · Paso 2: coordinamos la visita · Paso 3: recibís el presupuesto el mismo día
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-accent-foreground px-8 py-4 font-black uppercase text-base tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-sm font-outfit"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp
          </a>
          <a
            href="tel:+541139034512"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-primary-foreground px-8 py-4 font-bold uppercase text-base tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm font-outfit"
          >
            <Phone className="w-5 h-5" />
            11 3903-4512
          </a>
        </div>
        <p className="text-primary-foreground/50 text-sm mt-4 font-outfit">Sin cargo · Respondemos el mismo día · Lun–Sáb 7–19 hs</p>
      </div>
    </section>
  );
};

export default CTASection;
