import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation'

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico de Processo',
    description:
      'Mapeamos sua operação atual: onde o tempo é perdido, quais tarefas são repetitivas e onde os sistemas não se conversam. Você recebe um relatório com os pontos de maior impacto — antes de qualquer contrato.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v3M11 14h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Arquitetura e Validação',
    description:
      'Projetamos a solução em camadas, começando pelo que traz retorno mais rápido. Você valida cada etapa antes de qualquer linha de código ir para produção.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Desenvolvimento e Medição',
    description:
      'Entregamos em ciclos curtos com resultado visível em cada etapa do projeto. Cada entrega vem acompanhada de métricas que provam o ganho real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-white line-grid">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={ref}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight">
            Do diagnóstico ao resultado<br className="hidden md:block" /> em três etapas
          </h2>
          <p className="text-deep/55 text-lg mt-4 leading-relaxed">
            Sem metodologia inflada. Cada fase tem um entregável concreto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px
                       bg-gradient-to-r from-transparent via-electric/25 to-transparent"
            style={{ top: '2.5rem' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 120)}
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Number bubble */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-10 h-10 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center
                     text-electric font-bold text-xs tracking-wider
                     group-hover:bg-electric group-hover:text-deep group-hover:border-electric transition-all duration-300"
        >
          {step.number}
        </div>
        <div className="h-px flex-1 bg-electric/15 lg:hidden" />
      </div>

      {/* Icon */}
      <div className="w-10 h-10 text-electric/60 mb-4 group-hover:text-electric transition-colors duration-300">
        {step.icon}
      </div>

      {/* Text */}
      <h3 className="text-deep font-semibold text-lg mb-3">{step.title}</h3>
      <p className="text-deep/55 leading-relaxed text-sm">{step.description}</p>
    </div>
  )
}
