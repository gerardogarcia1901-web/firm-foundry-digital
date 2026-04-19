import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                <Scale className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="font-display text-lg text-white">Vargas & Asociados</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Bufete Jurídico</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Más de dos décadas defendiendo los derechos de personas y empresas con ética, discreción y resultados.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-gold transition">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-gold transition">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>+1 (555) 555-5555</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>contacto@vargasabogados.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Av. Reforma 222, Piso 14<br/>Ciudad de México</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="h-9 w-9 flex items-center justify-center border border-white/15 hover:border-gold hover:text-gold transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="h-9 w-9 flex items-center justify-center border border-white/15 hover:border-gold hover:text-gold transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 flex items-center justify-center border border-white/15 hover:border-gold hover:text-gold transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Ubicación</h4>
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10">
              <iframe
                title="Ubicación oficina"
                src="https://www.google.com/maps?q=Av.%20Paseo%20de%20la%20Reforma%20222%2C%20Cuauht%C3%A9moc%2C%20CDMX&output=embed"
                className="w-full h-full grayscale contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vargas & Asociados. Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Discreción · Ética · Resultados</p>
        </div>
      </div>
    </footer>
  );
}
