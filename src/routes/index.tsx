import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Building2, Gavel, ShieldCheck, Award, Lock, Users, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-office.jpg";
import aboutImg from "@/assets/about-justice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vargas & Asociados — Bufete de abogados en Ciudad de México" },
      { name: "description", content: "Bufete de abogados con más de 20 años de experiencia en derecho civil, penal, corporativo y laboral. Asesoría legal profesional en Ciudad de México." },
      { property: "og:title", content: "Vargas & Asociados — Bufete Jurídico" },
      { property: "og:description", content: "Defendiendo tus derechos con experiencia y compromiso. Asesoría legal profesional para personas y empresas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Contratos, sucesiones, propiedad y responsabilidad civil con respaldo experto." },
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa estratégica y representación en cada etapa del proceso penal." },
  { icon: Building2, title: "Derecho Corporativo", desc: "Constitución, gobierno corporativo y operaciones para empresas en crecimiento." },
  { icon: ShieldCheck, title: "Asesoría Legal", desc: "Consultoría preventiva continua para personas y organizaciones." },
];

const benefits = [
  { icon: Users, title: "Atención personalizada", desc: "Cada caso recibe atención dedicada de un socio del despacho." },
  { icon: Award, title: "Experiencia comprobada", desc: "Más de 20 años de trayectoria y miles de casos resueltos." },
  { icon: Lock, title: "Confidencialidad total", desc: "Protocolos estrictos para proteger tu información en todo momento." },
  { icon: CheckCircle2, title: "Resultados profesionales", desc: "Estrategias claras orientadas a resolver, no a prolongar." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Oficina de Vargas & Asociados, bufete de abogados"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-navy-deep/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="max-w-3xl fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Vargas & Asociados · Est. 2002</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-white">
              Defendiendo tus derechos con <em className="text-gold not-italic">experiencia</em> y compromiso.
            </h1>
            <span className="gold-divider mt-8" />
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Asesoría legal profesional para personas y empresas. Estrategia jurídica con discreción, ética y resultados.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/15555555555?text=Hola%2C%20quisiera%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition shadow-gold"
              >
                Agendar consulta <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-white/10 transition"
              >
                Nuestros servicios
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-[0.4em]">
          Scroll
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Áreas de práctica</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Servicios destacados</h2>
            <span className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground">
              Nuestro despacho ofrece soluciones jurídicas integrales en las principales áreas del derecho.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative bg-white border border-border p-8 hover:border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-navy-deep mb-6 group-hover:bg-gold transition-colors">
                  <s.icon className="h-6 w-6 text-gold group-hover:text-navy-deep transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px w-10 bg-gold" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Estatua de la justicia simbolizando el compromiso del bufete"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover shadow-elegant"
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-navy-deep text-white p-8 max-w-xs">
              <div className="font-display text-5xl text-gold">22+</div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mt-2">Años defendiendo justicia</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Sobre el bufete</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Un despacho construido sobre <em className="text-gold not-italic">confianza</em> y resultados.
            </h2>
            <span className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Desde 2002, Vargas & Asociados acompaña a personas y empresas en los momentos que más importan. Combinamos rigor técnico, sensibilidad humana y una trayectoria sólida para ofrecer asesoría jurídica del más alto nivel.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cada caso se aborda con la atención de un socio y el respaldo de un equipo multidisciplinario. Así garantizamos estrategias claras y resultados medibles.
            </p>
            <Link
              to="/nosotros"
              className="mt-8 inline-flex items-center gap-2 text-navy font-semibold uppercase tracking-[0.18em] text-xs border-b-2 border-gold pb-2 hover:gap-4 transition-all"
            >
              Conocer al equipo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Por qué elegirnos</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Beneficios para nuestros clientes</h2>
            <span className="gold-divider mt-6" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center border border-gold/40 bg-gold/5 mb-6">
                  <b.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, var(--gold), transparent 50%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Estamos para ayudarte</p>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Contáctanos hoy mismo.
          </h2>
          <span className="gold-divider mt-8" />
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Reserva una consulta confidencial con uno de nuestros abogados y descubre la mejor estrategia para tu caso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/15555555555"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition shadow-gold"
            >
              Agendar consulta <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+15555555555"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-white/10 transition"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
