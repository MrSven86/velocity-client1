import { useState } from "react";
import { Menu, X } from "lucide-react";
import bigAssetTop from "@/assets/big-asset-top.svg";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Nosotros", href: "#nosotros" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Desktop nav on SVG banner */}
      <div className="hidden lg:flex justify-center pt-2">
        <div className="relative w-full max-w-4xl">
          <img src={bigAssetTop} alt="" className="w-full h-auto" />
          <nav className="absolute inset-0 flex items-center justify-center gap-8 px-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground font-semibold text-lg hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 font-outfit"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491139034512"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-accent-foreground px-5 py-2 font-bold text-base hover:opacity-90 hover:scale-105 transition-all duration-300 font-outfit rounded-sm"
            >
              Presupuesto
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-primary/95 backdrop-blur-sm">
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold text-primary-foreground font-josefin uppercase tracking-tight">VAMA</span>
          <span className="text-[10px] text-primary-foreground/70 uppercase tracking-widest">Pintura Profesional</span>
        </div>
        <button
          className="text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`lg:hidden bg-primary/95 backdrop-blur-sm overflow-hidden transition-all duration-400 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 space-y-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-primary-foreground font-semibold text-lg py-2 border-b border-primary-foreground/10 hover:translate-x-2 transition-transform duration-300 font-outfit"
              style={{ transitionDelay: mobileOpen ? `${idx * 50}ms` : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491139034512"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-secondary text-accent-foreground text-center font-bold py-3 mt-3 rounded-sm"
            onClick={() => setMobileOpen(false)}
          >
            Pedí tu Presupuesto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
