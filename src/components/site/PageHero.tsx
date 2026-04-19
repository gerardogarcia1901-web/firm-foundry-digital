type Props = { eyebrow: string; title: string; subtitle?: string };

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-navy-deep text-white pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--gold) 0%, transparent 50%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 text-center fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05]">{title}</h1>
        <span className="gold-divider mt-8" />
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
