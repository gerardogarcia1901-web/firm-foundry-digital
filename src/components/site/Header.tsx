import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30 transition group-hover:bg-gold/20">
            <Scale className="h-5 w-5 text-gold" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-white tracking-wide">Vargas & Asociados</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Bufete Jurídico</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/15555555555?text=Hola%2C%20quisiera%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener"
            className="ml-2 inline-flex items-center justify-center bg-gold text-navy-deep px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition shadow-gold"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-deep border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-white/80"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/15555555555"
              className="inline-flex items-center justify-center bg-gold text-navy-deep px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
