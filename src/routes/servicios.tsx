import { createFileRoute } from "@tanstack/react-router";
import { Scale, Gavel, Briefcase, Building2, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import servicesBg from "@/assets/services-bg.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios Legales — Vargas & Asociados | Abogados en CDMX" },
      { name: "description", content: "Servicios legales en derecho civil, penal, laboral y corporativo. Asesoría jurídica profesional para personas y empresas en Ciudad de México." },
      { property: "og:title", content: "Servicios Legales — Vargas & Asociados" },
      { property: "og:description", content: "Asesoría jurídica integral en las principales áreas del derecho." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Atendemos contratos, arrendamientos, sucesiones, divorcios y litigios patrimoniales con un enfoque preventivo y resolutivo.", points: ["Contratos y negociaciones", "Sucesiones y herencias", "Responsabilidad civil"] },
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa estratégica y representación procesal en todas las etapas del proceso, con discreción absoluta.", points: ["Defensa en juicio oral", "Amparos penales", "Asesoría a víctimas"] },
  { icon: Briefcase, title: "Derecho Laboral", desc: "Representación de empresas y trabajadores en conflictos individuales y colectivos, así como auditorías laborales.", points: ["Contratación y despidos", "Conflictos colectivos", "Cumplimiento normativo"] },
  { icon: Building2, title: "Derecho Corporativo", desc: "Constitución, gobierno corporativo, fusiones, adquisiciones y operaciones complejas para empresas.", points: ["Constitución de sociedades", "M&A y reestructuras", "Gobierno corporativo"] },
  { icon: ShieldCheck, title: "Asesoría Legal Integral", desc: "Consultoría preventiva continua para evitar litigios y optimizar decisiones estratégicas.", points: ["Auditorías legales", "Compliance", "Outsourcing jurídico"] },
  { icon: FileText, title: "Litigio Estratégico", desc: "Acompañamiento en procesos judiciales y arbitrales con foco en eficiencia y resultados.", points: ["Litigio mercantil", "Arbitraje nacional", "Mediación"] },
];

function ServiciosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Servicios jurídicos integrales"
        subtitle="Soluciones legales especializadas para personas, familias y empresas en cada etapa de su vida o negocio."
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-white border border-border p-10 hover:border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center bg-navy-deep mb-6 group-hover:bg-gold transition-colors">
                <s.icon className="h-6 w-6 text-gold group-hover:text-navy-deep transition-colors" />
              </div>
              <h2 className="font-display text-2xl text-navy mb-3">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-navy/80">
                    <span className="h-1.5 w-1.5 bg-gold rounded-full" />{p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-24 text-white overflow-hidden">
        <img src={servicesBg} alt="" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">¿No encuentras lo que buscas?</p>
          <h2 className="font-display text-4xl md:text-5xl">Cada caso es único. Hablemos del tuyo.</h2>
          <span className="gold-divider mt-8" />
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Nuestro equipo evalúa tu situación sin compromiso y te orientamos hacia la mejor estrategia posible.
          </p>
          <a
            href="https://wa.me/15555555555"
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition shadow-gold"
          >
            Solicitar consulta <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
