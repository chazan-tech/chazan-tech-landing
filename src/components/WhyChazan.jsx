import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation'

const DIFFERENTIALS = [
  {
    title: 'IA integrada nos sistemas',
    description:
      'Inteligência artificial não é só buzzword — usamos IA para análise financeira automatizada, geração de relatórios e tomada de decisão. Seus dados viram ação sem precisar de uma pessoa intermediando.',
    metric: 'IA',
    metricLabel: 'em cada solução que desenvolvemos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M7 10H4M7 14H4M17 10h3M17 14h3M10 7V4M14 7V4M10 20v-3M14 20v-3" />
      </svg>
    ),
  },
  {
    title: 'Prazo definido por projeto',
    description:
      'Cada solução tem escopo e prazo definidos com base na complexidade real. Nada de estimativas genéricas — você sabe exatamente o que vai receber e quando, antes de qualquer contrato.',
    metric: '100%',
    metricLabel: 'personalizado para a sua operação',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Zero impacto operacional',
    description:
      'Integramos na sua operação atual sem migração traumática e sem parar o que já funciona. A transição é incremental e reversível em cada etapa.',
    metric: '0',
    metricLabel: 'horas de downtime durante implantação',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

export default function WhyChazan() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-white line-grid">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={ref}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            Por que a Chazan Tech
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight">
            O que diferencia quem<br className="hidden md:block" /> entrega resultado de verdade
          </h2>
          <p className="text-deep/55 text-lg mt-4 leading-relaxed">
            Cuidamos de tudo — do levantamento ao sistema em produção. Você não precisa entender de tecnologia para ter uma solução de excelência.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, i) => (
            <DiffCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <BottomNote />
      </div>
    </section>
  )
}

function DiffCard({ item, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 110)}
      className={`group p-7 rounded-xl border border-deep/8 bg-deep/2
                  hover:border-electric/40 hover:bg-electric/3
                  transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 text-deep/30 mb-5 group-hover:text-electric transition-colors duration-300">
        {item.icon}
      </div>

      {/* Metric */}
      <div className="mb-5">
        <span className="text-electric font-bold text-3xl leading-none">{item.metric}</span>
        <p className="text-deep/40 text-xs mt-1.5 leading-snug max-w-[180px]">{item.metricLabel}</p>
      </div>

      {/* Text */}
      <h3 className="text-deep font-semibold text-base mb-2">{item.title}</h3>
      <p className="text-deep/50 leading-relaxed text-sm">{item.description}</p>
    </div>
  )
}

function BottomNote() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`mt-12 p-6 rounded-xl border border-electric/20 bg-electric/4
                  transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 text-electric mt-0.5 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <p className="text-deep/70 text-sm leading-relaxed">
            <strong className="text-deep font-semibold">Documentação e treinamento incluídos.</strong>
            {' '}Cada sistema entregue vem com documentação técnica e treinamento para sua equipe —
            para que sua operação funcione de forma independente.
          </p>
        </div>
      </div>
    </div>
  )
}
