import { createFileRoute } from "@tanstack/react-router";
import { Award, ScrollText, HandshakeIcon, Heart, Eye, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import teamImg from "@/assets/team.jpg";
import aboutImg from "@/assets/about-justice.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Vargas & Asociados | Bufete de Abogados" },
      { name: "description", content: "Más de 20 años defendiendo a personas y empresas. Conoce nuestra historia, valores y al equipo de abogados de Vargas & Asociados." },
      { property: "og:title", content: "Nosotros — Vargas & Asociados" },
      { property: "og:description", content: "Historia, valores y equipo de un bufete construido sobre confianza y resultados." },
    ],
  }),
  component: NosotrosPage,
});

const values = [
  { icon: HandshakeIcon, title: "Confianza", desc: "Construimos relaciones de largo plazo basadas en la transparencia y el cumplimiento." },
  { icon: ScrollText, title: "Ética", desc: "Cada decisión se rige por principios deontológicos rigurosos e inquebrantables." },
  { icon: Award, title: "Profesionalismo", desc: "Excelencia técnica respaldada por más de dos décadas de experiencia continua." },
  { icon: Heart, title: "Compromiso", desc: "Defendemos tus intereses como si fueran propios, sin atajos ni concesiones." },
  { icon: Eye, title: "Discreción", desc: "Tratamos cada asunto con la confidencialidad que merece tu vida y tu negocio." },
];

const stats = [
  { value: "22+", label: "Años de trayectoria" },
  { value: "1,800+", label: "Casos resueltos" },
  { value: "12", label: "Abogados especializados" },
  { value: "98%", label: "Clientes satisfechos" },
];

function NosotrosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Un bufete construido sobre principios"
        subtitle="Conoce la historia, los valores y al equipo que ha defendido a miles de clientes durante más de dos décadas."
      />

      {/* HISTORY */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Nuestra historia</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Dos décadas defendiendo lo que más importa.
            </h2>
            <span className="gold-divider mt-6" />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vargas & Asociados nació en 2002 con una convicción simple: el derecho debe estar al servicio de las personas. Lo que comenzó como un pequeño despacho con tres abogados se ha convertido en una firma de referencia, con más de doce profesionales especializados en distintas áreas del derecho.
              </p>
              <p>
                A lo largo de los años hemos representado a familias, emprendedores, empresas medianas y corporativos. Cada cliente es un caso, una historia, una responsabilidad que asumimos con la seriedad que merece.
              </p>
              <p>
                Hoy seguimos creciendo, pero conservamos el espíritu fundacional: trato cercano, estrategias claras y resultados que respalden nuestra reputación.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Símbolo de la justicia"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-[4/5] object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-gold">{s.value}</div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Nuestros valores</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Los principios que nos definen</h2>
            <span className="gold-divider mt-6" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-border p-8 hover:border-gold transition-all hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center bg-gold/10 border border-gold/30 mb-5">
                  <v.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-navy mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Nuestro equipo</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Profesionales a tu servicio</h2>
            <span className="gold-divider mt-6" />
            <p className="mt-6 text-muted-foreground">
              Un equipo multidisciplinario unido por la misma vocación: defender con excelencia.
            </p>
          </div>
          <img
            src={teamImg}
            alt="Equipo de abogados de Vargas & Asociados"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full max-w-5xl mx-auto aspect-[16/10] object-cover shadow-elegant"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl">¿Listo para hablar con un abogado?</h2>
          <span className="gold-divider mt-6" />
          <p className="mt-6 text-white/70">Agenda una consulta confidencial con nuestro equipo.</p>
          <a
            href="https://wa.me/15555555555"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition shadow-gold"
          >
            Agendar consulta <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
