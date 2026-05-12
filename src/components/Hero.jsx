const STATS = [
  { value: "IA", label: "integrada em cada solução" },
  { value: "Zero", label: "downtime na implantação" },
  { value: "até 80%", label: "menos pessoas no processo após sistema" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-deep flex items-center overflow-hidden md:pt-20">
      {/* ── Background layers ─────────────────────────────── */}
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />

      {/* Radial glow — top-right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full
                   bg-electric/6 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial glow — bottom-left */}
      <div
        className="absolute -bottom-48 -left-24 w-[480px] h-[480px] rounded-full
                   bg-electric/4 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-28 md:pt-0 md:pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 border border-electric/25 rounded-full px-4 py-1.5 mb-8
                          animate-fade-in"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow"
              aria-hidden="true"
            />
            <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
              Engenharia de software para operações
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6
                         animate-fade-up"
          >
            Cada processo manual
            <br className="hidden sm:block" /> em sua operação{" "}
            <span className="text-electric">
              é custo
              <br className="hidden sm:block" /> que se repete.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10
                       animate-fade-up [animation-delay:120ms]"
          >
            Desenvolvemos sistemas sob medida com IA integrada que identificam
            seus gargalos, automatizam o que é repetitivo e entregam resultados
            mensuráveis — sem interromper o que já funciona.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:220ms]">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-electric text-deep font-semibold px-7 py-4 rounded-lg
                         hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group"
            >
              Agende uma análise gratuita
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-medium px-7 py-4 rounded-lg
                         hover:border-electric/50 hover:text-white transition-all duration-200"
            >
              Como funciona
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6
                       animate-fade-up [animation-delay:340ms]"
          >
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="text-electric font-bold text-xl leading-none">
                  {value}
                </div>
                <div className="text-white/35 text-sm mt-1.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden [@media(min-height:760px)]:flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="text-white text-[10px] font-medium tracking-[0.2em] uppercase">
          Rolar
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
