import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation'

const COMPARISONS = [
  {
    process: 'Análise financeira de condomínios',
    context: 'Conciliação, inadimplência e balancetes verificados manualmente a cada mês — para dezenas de condomínios.',
    before: { people: 4, label: 'pessoas dedicadas', effort: '3 dias por mês' },
    after:  { people: 0, label: 'intervenção humana', effort: 'IA analisa e gera relatório automaticamente' },
  },
  {
    process: 'Gestão de beneficiários',
    context: 'Cadastros, atendimentos e registros de mais de 500 pessoas controlados em planilhas e papel.',
    before: { people: 5, label: 'pessoas para controle manual', effort: '8h por dia' },
    after:  { people: 1, label: 'pessoa supervisiona pelo dashboard', effort: 'sistema roda sozinho' },
  },
  {
    process: 'Geração de relatórios',
    context: 'Dados extraídos de múltiplas fontes, compilados e formatados manualmente toda semana.',
    before: { people: 2, label: 'pessoas, toda semana', effort: '4 horas por semana' },
    after:  { people: 0, label: 'intervenção humana', effort: 'relatório no e-mail às 7h' },
  },
]

export default function SavingsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-deep">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={ref}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            Retorno mensurável
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
            Quanto da sua folha paga trabalho<br className="hidden md:block" /> que um sistema faria?
          </h2>
          <p className="text-white/45 text-lg mt-4 leading-relaxed">
            Processos repetitivos consomem o tempo de pessoas qualificadas.
            Quando o sistema assume, esse custo vira resultado.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="flex flex-col gap-4">
          {COMPARISONS.map((item, i) => (
            <ComparisonCard key={item.process} item={item} index={i} />
          ))}
        </div>

        {/* Bottom callout */}
        <BottomCallout />
      </div>
    </section>
  )
}

function ComparisonCard({ item, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const reduction = Math.round((1 - item.after.people / Math.max(item.before.people, 1)) * 100)

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 120)}
      className={`rounded-xl border border-white/8 overflow-hidden
                  transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Process label */}
      <div className="px-6 pt-5 pb-4 border-b border-white/6">
        <h3 className="text-white font-semibold text-base">{item.process}</h3>
        <p className="text-white/35 text-sm mt-0.5">{item.context}</p>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center">

        {/* ANTES */}
        <div className="px-6 py-5 bg-white/2">
          <span className="text-white/30 text-[10px] font-semibold tracking-[0.18em] uppercase block mb-3">
            Antes
          </span>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-white/60 leading-none">
              {item.before.people}
            </span>
            <span className="text-white/35 text-sm leading-snug pb-1">{item.before.label}</span>
          </div>
          <p className="text-white/25 text-xs mt-2">{item.before.effort}</p>
        </div>

        {/* Arrow */}
        <div className="hidden sm:flex items-center justify-center px-4 py-5 text-electric/40">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* DEPOIS */}
        <div className="px-6 py-5 bg-electric/4 border-t sm:border-t-0 sm:border-l border-electric/10">
          <span className="text-electric/60 text-[10px] font-semibold tracking-[0.18em] uppercase block mb-3">
            Com o sistema
          </span>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-electric leading-none">
              {item.after.people === 0 ? 'Zero' : item.after.people}
            </span>
            <span className="text-white/50 text-sm leading-snug pb-1">{item.after.label}</span>
          </div>
          <p className="text-electric/40 text-xs mt-2">{item.after.effort}</p>
        </div>

      </div>
    </div>
  )
}

function BottomCallout() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`mt-10 p-7 rounded-xl border border-electric/20 bg-electric/5
                  transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-white font-semibold text-lg leading-snug">
            A diferença entre ter e não ter um sistema não é tecnologia.
          </p>
          <p className="text-white/45 text-sm mt-2 leading-relaxed">
            É quanto da sua folha de pagamento vai para tarefas que poderiam ser automáticas —
            e quanto do seu time poderia estar focado no que realmente faz a empresa crescer.
          </p>
        </div>
        <a
          href="#contato"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-electric text-deep font-semibold px-6 py-3.5 rounded-lg
                     hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group text-sm"
        >
          Calcular minha economia
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
