import { Mail, MapPin, Phone as PhoneIcon, Clock, Instagram } from "lucide-react";
import vama09 from "@/assets/vama-work-09.jpg";
import vama10 from "@/assets/vama-work-10.jpg";
import vama11 from "@/assets/vama-work-11.jpg";
import vama12 from "@/assets/vama-work-12.jpg";

const galleryImages = [vama09, vama10, vama11, vama12];

const services = [
  "Pintura Interior",
  "Pintura Exterior y Fachadas",
  "Revoques y Emparejamiento",
  "Pintura de Techos",
  "Trabajos para Consorcios",
  "Durlock y Reformas",
];

const Footer = () => {
  return (
    <footer className="bg-muted">
      {/* Mini gallery */}
      <div className="grid grid-cols-4">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-outfit" style={{ color: "hsl(var(--brand-green-dark))" }}>Servicios</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-kanit">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-outfit" style={{ color: "hsl(var(--brand-green-dark))" }}>Contacto</h3>
            <div className="space-y-4">
              {[
                { Icon: PhoneIcon, label: "WhatsApp / Llamadas", val: "+54 11 3903-4512", href: "https://wa.me/5491139034512" },
                { Icon: Instagram, label: "Instagram", val: "@vamapinturadeobrasyservicios", href: "https://www.instagram.com/vamapinturadeobrasyservicios/" },
                { Icon: MapPin, label: "Ubicación", val: "Migueletes 1931, Belgrano, CABA", href: null },
              ].map(({ Icon, label, val, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground font-outfit text-sm">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-kanit">{val}</a>
                    ) : (
                      <p className="text-foreground font-kanit">{val}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground font-outfit text-sm">Horarios</p>
                  <p className="text-foreground font-kanit">Lun–Vie: 7:00–19:00</p>
                  <p className="text-foreground font-kanit">Sáb: 8:00–17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-3xl font-black font-josefin uppercase tracking-tight" style={{ color: "hsl(var(--brand-green-dark))" }}>VAMA</span>
              <p className="text-sm text-muted-foreground font-outfit uppercase tracking-widest mt-1">Pintura Profesional</p>
            </div>
            <p className="text-muted-foreground font-kanit text-base leading-7 mb-6">
              Marcelo Abreu · 25 años de experiencia en pintura residencial y comercial. Con base en Belgrano, atendemos toda la ciudad de Buenos Aires.
            </p>
            <div className="flex items-center gap-2 mb-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="hsl(var(--secondary))">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="font-bold text-foreground ml-1 font-outfit">4.7</span>
            </div>
            <p className="text-muted-foreground text-sm font-outfit">31 reseñas verificadas en Google</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-4 text-center text-muted-foreground text-sm font-outfit">
        © {new Date().getFullYear()} VAMA Pintura de Obras y Servicios · Belgrano, Buenos Aires
      </div>
    </footer>
  );
};

export default Footer;
