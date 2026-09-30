import { whatsappUrl, trackContact } from '../lib/contact'

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-deep overflow-hidden">

      {/* Background accents */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full
                   bg-electric/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 border border-electric/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow" aria-hidden="true" />
            <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
              Sem compromisso, sem jargão
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Cada semana sem otimização<br className="hidden md:block" /> é{' '}
            <span className="text-electric">custo acumulado.</span>
          </h2>

          {/* Description */}
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Em 30 minutos de conversa, identificamos onde está o maior potencial de ganho na sua
            operação. Você sai com clareza — independente de fechar projeto ou não.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-electric text-deep font-bold text-base px-9 py-4 rounded-lg
                       hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group"
          >
            Agendar análise gratuita
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={whatsappUrl('Olá! Quero agendar uma análise gratuita com a Chazan Tech.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('cta_whatsapp')}
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-medium text-base px-9 py-4 rounded-lg
                       hover:border-electric/50 hover:text-white transition-all duration-200"
          >
            Chamar no WhatsApp
          </a>
          </div>

          {/* Reassurance */}
          <p className="text-white/30 text-sm mt-6">
            Resposta rápida pelo WhatsApp · Sem obrigação de contratar
          </p>
        </div>
      </div>
    </section>
  )
}
