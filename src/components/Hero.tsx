import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-background.png";
import smallAsset from "@/assets/small-asset-headline.svg";
import heart1 from "@/assets/heart1.svg";
import heart2 from "@/assets/heart2.svg";
import qualityFinish from "@/assets/quality-finish.svg";
import trustedPros from "@/assets/trusted-pros.svg";
import watchIcon from "@/assets/watch.svg";

const StarRow = () => (
  <div className="flex gap-1">
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="hsl(var(--secondary))">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 150); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-[720px] flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(10,50,30,0.52)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-6 pt-44 pb-24">
        {/* Hearts + small asset */}
        <div className={`flex items-center gap-4 mb-5 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <img src={heart1} alt="" className="w-14 h-12 opacity-80" />
          <img src={heart2} alt="" className="w-6 h-5 opacity-80" />
          <img src={smallAsset} alt="Una gran experiencia" className="h-14 md:h-18" />
        </div>

        {/* H1 */}
        <h1 className={`text-center max-w-4xl mx-auto mb-5 transition-all duration-700 delay-200 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-bold font-josefin uppercase leading-tight block">
            Pintura Profesional
          </span>
          <span className="text-secondary text-4xl md:text-6xl lg:text-7xl font-bold font-josefin uppercase leading-tight underline decoration-2 underline-offset-4 block">
            con Terminaciones
          </span>
          <span className="text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-bold font-josefin uppercase leading-tight block">
            Impecables
          </span>
        </h1>

        {/* Subheadline */}
        <p className={`text-primary-foreground text-center text-xl md:text-2xl max-w-2xl mx-auto mb-6 opacity-90 font-kanit transition-all duration-700 delay-400 ease-out ${loaded ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"}`}>
          25 años de experiencia · Belgrano, Buenos Aires · Cumplimos lo pactado, siempre.
        </p>

        {/* Google rating badge */}
        <div className={`flex items-center gap-3 mb-7 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full transition-all duration-700 delay-500 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <StarRow />
          <span className="text-white font-bold text-lg">4.7</span>
          <span className="text-white/80 text-sm font-outfit">en Google · 31 reseñas verificadas</span>
        </div>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-600 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-secondary text-accent-foreground px-8 py-4 font-black uppercase text-base tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-sm font-outfit"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedí tu Presupuesto Gratis
          </a>
          <a
            href="tel:+541139034512"
            className="flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-4 font-bold uppercase text-base tracking-wide hover:bg-white/10 transition-all duration-300 rounded-sm font-outfit"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Llamar Ahora
          </a>
        </div>

        {/* Trust badges */}
        <div className={`flex items-center justify-center gap-6 flex-wrap transition-all duration-700 delay-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {[
            { icon: watchIcon, label: "Respuesta el mismo día" },
            { icon: qualityFinish, label: "Terminaciones perfectas" },
            { icon: trustedPros, label: "25 años de experiencia" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-primary-foreground">
              <img src={icon} alt="" className="w-5 h-5" />
              <span className="font-semibold uppercase text-sm tracking-wider font-outfit">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
