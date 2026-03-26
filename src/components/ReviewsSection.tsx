import iconSquare from "@/assets/icon-square.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  { name: "Juli Pisani", badge: "Guía Local · 167 reseñas", stars: 5, text: "Tuvimos una experiencia excelente con Marcelo y Vanesa. Puntuales, resolutivos y detallistas. El departamento quedó divino con muy buenas terminaciones. Cumplieron con los plazos estimados y el presupuesto fue acorde." },
  { name: "fgct", badge: "Guía Local · 196 reseñas", stars: 5, text: "SUMAMENTE RECOMENDABLES. Se nota la experiencia que tienen, cumplieron con lo pactado por demás. Además de ser muy honestos y muy buenas personas. Los volveremos a contratar." },
  { name: "Fer Lopez", badge: "Guía Local · 41 reseñas", stars: 5, text: "¡Los mejores siempre! Cumplen en tiempo y forma, no se van del presupuesto y sobre todo prolijo. ¡Gracias por todo!" },
  { name: "Elena Sarabia", badge: null, stars: 5, text: "Maravilloso servicio, cumplimiento y precio. Los recomiendo con 5 estrellas porque me han dejado, en tiempo y forma, un trabajo perfecto." },
];

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57C21.38 18.19 22.56 15.42 22.56 12.25z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarFill = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--secondary))">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resenas" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6 reveal ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={iconSquare} alt="" className="h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit leading-tight" style={{ color: "hsl(var(--brand-green-dark))" }}>
              Pintores confiables en<br />Buenos Aires
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=VAMA%20Pintura%20De%20Obras%20y%20Servicios&query_place_id=ChIJ8WGPVpe1vJURW4595fkzQTE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-accent-foreground px-6 py-3 font-black uppercase text-sm tracking-wide flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 whitespace-nowrap rounded-sm font-outfit"
          >
            Ver todas las reseñas en Google
            <svg className="w-4 h-3" fill="none" viewBox="0 0 16 12" stroke="currentColor" strokeWidth="2"><path d="M1 6h14M10 1l5 5-5 5"/></svg>
          </a>
        </div>

        {/* Rating summary */}
        <div className={`flex items-center gap-4 mb-8 p-4 bg-muted rounded-xl reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <StarFill key={i} />)}
          </div>
          <span className="text-2xl font-black font-josefin" style={{ color: "hsl(var(--brand-green-dark))" }}>4.7</span>
          <span className="text-muted-foreground font-outfit">· 31 reseñas verificadas en Google</span>
          <div className="ml-auto"><GoogleIcon /></div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`min-w-[300px] max-w-[320px] bg-card rounded-xl shadow-md p-5 flex-shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-base flex-shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold font-poppins text-foreground text-sm">{review.name}</p>
                    {review.badge && <p className="text-muted-foreground text-xs font-poppins">{review.badge}</p>}
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => <StarFill key={j} />)}
              </div>
              <p className="text-foreground/80 text-sm leading-6 font-kanit">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
